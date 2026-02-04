import { readFileSync } from 'fs';
import { resolve } from 'path';
import { SceneAsset } from './asset-analyzer';

export interface GeminiPrompt {
  sceneId: string;
  filename: string;
  prompt: string;
}

interface SceneDetails {
  shotType: string;
  visualDetails: string;
  lighting: string;
  atmosphere: string;
}

/**
 * Load Gemini scene details from episode config JSON file.
 * Returns an empty object if the episode config doesn't exist or has no gemini data.
 */
function loadGeminiDetails(episodeNum: number): Record<string, SceneDetails> {
  const configPath = resolve(__dirname, 'episode-configs', `ep${String(episodeNum).padStart(2, '0')}.json`);
  try {
    const data = JSON.parse(readFileSync(configPath, 'utf-8'));
    const details: Record<string, SceneDetails> = {};
    for (const scene of data.scenes) {
      if (scene.gemini) {
        details[scene.id] = scene.gemini;
      }
    }
    return details;
  } catch {
    return {};
  }
}

export function generateGeminiPrompts(scenes: SceneAsset[], episodeNum?: number): GeminiPrompt[] {
  const prompts: GeminiPrompt[] = [];

  // Extract episode number from first scene ID if not provided
  const epNum = episodeNum || parseInt(scenes[0]?.id.match(/ep(\d+)/)?.[1] || '0', 10);
  const sceneDetails = loadGeminiDetails(epNum);

  for (const scene of scenes) {
    if (scene.exists) continue; // Skip existing images

    const details = sceneDetails[scene.id];
    if (!details) {
      // Fallback generic prompt
      prompts.push({
        sceneId: scene.id,
        filename: `${scene.id}.png`,
        prompt: `${scene.description}. Korean drama style, cinematic digital art, photorealistic, 1920x1080, dramatic atmosphere.`,
      });
      continue;
    }

    const prompt = [
      `${details.shotType} of ${scene.description}.`,
      details.visualDetails + '.',
      `${details.lighting}.`,
      `Korean drama style, photorealistic cinematic digital art, 1920x1080, ${details.atmosphere}.`,
    ].join(' ');

    prompts.push({
      sceneId: scene.id,
      filename: `${scene.id}.png`,
      prompt,
    });
  }

  return prompts;
}

export function formatGeminiPrompts(episode: string, prompts: GeminiPrompt[]): string {
  const lines: string[] = [`# ${episode.toUpperCase()} - Gemini 이미지 프롬프트\n`];
  lines.push(`총 ${prompts.length}개 이미지 생성 필요\n`);
  lines.push('---\n');

  for (let i = 0; i < prompts.length; i++) {
    const p = prompts[i];
    lines.push(`## ${i + 1}. ${p.filename}\n`);
    lines.push(`> ${p.prompt}\n`);
    lines.push('');
  }

  lines.push('---');
  lines.push('💡 위 프롬프트를 Gemini에 복사하여 이미지 생성 후');
  lines.push(`   assets/scenes/${episode}/ 폴더에 저장하세요.`);

  return lines.join('\n');
}
