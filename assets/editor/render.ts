#!/usr/bin/env npx ts-node
/**
 * 시나리오 영상 렌더러
 * YAML 시나리오 파일 → ffmpeg → MP4
 *
 * 사용법: npx ts-node assets/editor/render.ts assets/scenarios/example.yaml
 */

import { readFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { resolve, dirname } from 'path';
import { parse as parseYAML } from 'yaml';
import { getEffectFilter, getTransitionFilter } from './effects';
import { escapeText } from './text-overlay';
import { ASSETS_DIR, FONT } from './schema';

// ============================================================================
// Simplified YAML Types (사용자가 작성하기 쉬운 형태)
// ============================================================================

interface YAMLScene {
  type: 'title' | 'scene' | 'dialogue' | 'composite';
  bg: string;
  duration: number;
  effect?: string;
  transition?: string;

  // title 타입
  texts?: Array<{
    content: string;
    position?: string;
    size?: number;
    color?: string;
    y?: number;
    appear?: number;
  }>;

  // scene 타입 - 나레이션
  narration?: string;

  // dialogue 타입 - 대사
  character?: string;
  character_color?: string;
  dialogue?: string;

  // composite 타입 - 캐릭터 합성
  character_img?: string;
  character_position?: string;
  character_scale?: number;
}

interface YAMLScenario {
  title: string;
  output: string;
  resolution?: [number, number];
  fps?: number;
  audio: {
    bgm: string;
    volume?: number;
    fade_in?: number;
    fade_out?: number;
  };
  scenes: YAMLScene[];
}

// ============================================================================
// Path Resolution
// ============================================================================

function resolvePath(filePath: string): string {
  if (filePath.startsWith('/')) return filePath;
  return resolve(ASSETS_DIR, filePath);
}

// ============================================================================
// Filter Generators
// ============================================================================

function generateSceneFilter(
  scene: YAMLScene,
  inputIndex: number,
  fps: number
): string {
  const filters: string[] = [];
  const dur = scene.duration;
  const effect = scene.effect || 'none';
  const transition = scene.transition || 'fade';

  // 1. Effect filter (zoompan)
  const effectFilter = getEffectFilter(effect, dur, fps);
  filters.push(effectFilter);

  // 2. Transition fades
  const { fadeIn, fadeOut } = getTransitionFilter(transition, dur);
  filters.push(fadeIn);
  if (fadeOut) filters.push(fadeOut);

  // 3. Text overlays based on scene type
  switch (scene.type) {
    case 'title':
      if (scene.texts) {
        for (const t of scene.texts) {
          const text = escapeText(t.content);
          const size = t.size || 48;
          const color = t.color || 'white';
          const appear = t.appear || 0.5;
          const end = dur - 0.5;

          let x: string;
          let y: number;

          // Position handling
          if (t.y !== undefined) {
            y = t.y;
            x = t.position === 'left' ? '80' : '(w-text_w)/2';
          } else if (t.position === 'bottom-center' || t.position === 'bottom') {
            y = 940;
            x = '(w-text_w)/2';
          } else if (t.position === 'top-center' || t.position === 'top') {
            y = 80;
            x = '(w-text_w)/2';
          } else {
            // center (default)
            y = 480;
            x = '(w-text_w)/2';
          }

          filters.push(
            `drawtext=fontfile='${FONT}':text='${text}':fontsize=${size}:fontcolor=${color}:x=${x}:y=${y}:enable='between(t\\,${appear}\\,${end})'`
          );
        }
      }
      break;

    case 'scene':
      if (scene.narration) {
        const text = escapeText(scene.narration);
        const appear = 0.8;
        const end = dur - 0.5;
        // Narration box
        filters.push(
          `drawbox=x=0:y=920:w=iw:h=120:color=black@0.7:t=fill:enable='between(t\\,${appear}\\,${end})'`
        );
        filters.push(
          `drawtext=fontfile='${FONT}':text='${text}':fontsize=32:fontcolor=white:x=(w-text_w)/2:y=955:enable='between(t\\,${appear}\\,${end})'`
        );
      }
      break;

    case 'dialogue':
      if (scene.character && scene.dialogue) {
        const name = escapeText(scene.character);
        const text = escapeText(scene.dialogue);
        const nameColor = scene.character_color || '0x00FFFF';
        const boxAppear = 0.8;
        const nameAppear = 1.0;
        const dialogueAppear = 1.8;
        const end = dur - 0.3;

        // Dialogue box
        filters.push(
          `drawbox=x=0:y=880:w=iw:h=200:color=black@0.7:t=fill:enable='between(t\\,${boxAppear}\\,${end})'`
        );
        // Character name
        filters.push(
          `drawtext=fontfile='${FONT}':text='${name}':fontsize=36:fontcolor=${nameColor}:x=80:y=900:enable='between(t\\,${nameAppear}\\,${end})'`
        );
        // Dialogue text
        filters.push(
          `drawtext=fontfile='${FONT}':text='${text}':fontsize=28:fontcolor=white:x=80:y=950:enable='between(t\\,${dialogueAppear}\\,${end})'`
        );
      }
      break;

    case 'composite':
      // Text overlays for composite (same as title)
      if (scene.texts) {
        for (const t of scene.texts) {
          const text = escapeText(t.content);
          const size = t.size || 32;
          const color = t.color || 'white';
          const appear = t.appear || 0.8;
          const end = dur - 0.5;
          const y = t.y || 950;
          const x = t.position === 'left' ? '80' : '(w-text_w)/2';

          filters.push(
            `drawtext=fontfile='${FONT}':text='${text}':fontsize=${size}:fontcolor=${color}:x=${x}:y=${y}:enable='between(t\\,${appear}\\,${end})'`
          );
        }
      }
      break;
  }

  const label = `v${inputIndex}`;
  return `[${inputIndex}:v]${filters.join(',')}[${label}]`;
}

// ============================================================================
// Composite Scene (needs overlay filter)
// ============================================================================

function isCompositeScene(scene: YAMLScene): boolean {
  return scene.type === 'composite' && !!scene.character_img;
}

// ============================================================================
// Main Render Function
// ============================================================================

function render(yamlPath: string) {
  // Parse YAML
  const yamlContent = readFileSync(yamlPath, 'utf-8');
  const scenario: YAMLScenario = parseYAML(yamlContent);

  const fps = scenario.fps || 25;
  const resolution = scenario.resolution || [1920, 1080];
  const [width, height] = resolution;

  console.log(`\n🎬 렌더링 시작: ${scenario.title}`);
  console.log(`   장면 수: ${scenario.scenes.length}`);

  // Calculate total duration
  const totalDuration = scenario.scenes.reduce((sum, s) => sum + s.duration, 0);
  console.log(`   총 길이: ${totalDuration}초`);

  // Build ffmpeg command
  const inputs: string[] = [];
  const filterParts: string[] = [];
  const concatInputs: string[] = [];

  let inputIdx = 0;

  // Process each scene
  for (let i = 0; i < scenario.scenes.length; i++) {
    const scene = scenario.scenes[i];
    const bgPath = resolvePath(scene.bg);

    if (!existsSync(bgPath)) {
      console.error(`❌ 파일 없음: ${bgPath}`);
      process.exit(1);
    }

    if (isCompositeScene(scene)) {
      // Composite: bg + character overlay
      const charPath = resolvePath(scene.character_img!);
      if (!existsSync(charPath)) {
        console.error(`❌ 캐릭터 파일 없음: ${charPath}`);
        process.exit(1);
      }

      const bgIdx = inputIdx++;
      const charIdx = inputIdx++;
      inputs.push(`-loop 1 -t ${scene.duration} -i "${bgPath}"`);
      inputs.push(`-loop 1 -t ${scene.duration} -i "${charPath}"`);

      // Scale background
      const bgLabel = `bg${i}`;
      filterParts.push(
        `[${bgIdx}:v]scale=${width}:${height}:force_original_aspect_ratio=decrease,pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2,setsar=1[${bgLabel}]`
      );

      // Scale character
      const scale = scene.character_scale || 0.6;
      const charH = Math.floor(height * scale);
      const charLabel = `chr${i}`;
      filterParts.push(
        `[${charIdx}:v]scale=-1:${charH}:force_original_aspect_ratio=decrease[${charLabel}]`
      );

      // Overlay position
      let overlayX: string;
      const pos = scene.character_position || 'right';
      if (pos === 'left') overlayX = '50';
      else if (pos === 'center') overlayX = '(W-w)/2';
      else overlayX = `W-w-50`;

      const overlayLabel = `comp${i}`;
      filterParts.push(
        `[${bgLabel}][${charLabel}]overlay=${overlayX}:H-h:shortest=1[${overlayLabel}]`
      );

      // Apply effects and text on composited result
      const effect = scene.effect || 'none';
      const transition = scene.transition || 'fade';
      const { fadeIn, fadeOut } = getTransitionFilter(transition, scene.duration);

      const postFilters: string[] = [fadeIn];
      if (fadeOut) postFilters.push(fadeOut);

      // Text overlays
      if (scene.texts) {
        for (const t of scene.texts) {
          const text = escapeText(t.content);
          const size = t.size || 32;
          const color = t.color || 'white';
          const appear = t.appear || 0.8;
          const end = scene.duration - 0.5;
          const y = t.y || 950;
          const x = t.position === 'left' ? '80' : '(w-text_w)/2';

          postFilters.push(
            `drawtext=fontfile='${FONT}':text='${text}':fontsize=${size}:fontcolor=${color}:x=${x}:y=${y}:enable='between(t\\,${appear}\\,${end})'`
          );
        }
      }

      // Dialogue on composite
      if (scene.character && scene.dialogue) {
        const name = escapeText(scene.character);
        const text = escapeText(scene.dialogue as string);
        const nameColor = scene.character_color || '0x00FFFF';
        postFilters.push(
          `drawbox=x=0:y=880:w=iw:h=200:color=black@0.7:t=fill:enable='between(t\\,0.8\\,${scene.duration - 0.3})'`
        );
        postFilters.push(
          `drawtext=fontfile='${FONT}':text='${name}':fontsize=36:fontcolor=${nameColor}:x=80:y=900:enable='between(t\\,0.8\\,${scene.duration - 0.3})'`
        );
        postFilters.push(
          `drawtext=fontfile='${FONT}':text='${text}':fontsize=28:fontcolor=white:x=80:y=950:enable='between(t\\,0.8\\,${scene.duration - 0.3})'`
        );
      }

      const vLabel = `v${i}`;
      filterParts.push(`[${overlayLabel}]${postFilters.join(',')}[${vLabel}]`);
      concatInputs.push(`[${vLabel}]`);
    } else {
      // Standard scene (title, scene, dialogue)
      inputs.push(`-loop 1 -t ${scene.duration} -i "${bgPath}"`);

      // For non-effect scenes, use scale+pad instead of zoompan
      if (!scene.effect || scene.effect === 'none') {
        const scaleFilter = `scale=${width}:${height}:force_original_aspect_ratio=decrease,pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2,setsar=1`;
        const transition = scene.transition || 'fade';
        const { fadeIn, fadeOut } = getTransitionFilter(transition, scene.duration);

        const allFilters: string[] = [scaleFilter, fadeIn];
        if (fadeOut) allFilters.push(fadeOut);

        // Add text overlays
        const textFilters = getTextFiltersForScene(scene, fps);
        allFilters.push(...textFilters);

        const vLabel = `v${i}`;
        filterParts.push(`[${inputIdx}:v]${allFilters.join(',')}[${vLabel}]`);
        concatInputs.push(`[${vLabel}]`);
      } else {
        // With zoompan effect - need to scale first, then zoompan
        const scaleFilter = `scale=1920x1080:force_original_aspect_ratio=increase,crop=1920:1080`;
        const effectFilter = getEffectFilter(scene.effect, scene.duration, fps);
        const transition = scene.transition || 'fade';
        const { fadeIn, fadeOut } = getTransitionFilter(transition, scene.duration);

        const preLabel = `pre${i}`;
        filterParts.push(`[${inputIdx}:v]${scaleFilter}[${preLabel}]`);

        const allFilters: string[] = [effectFilter, fadeIn];
        if (fadeOut) allFilters.push(fadeOut);

        // Add text overlays
        const textFilters = getTextFiltersForScene(scene, fps);
        allFilters.push(...textFilters);

        const vLabel = `v${i}`;
        filterParts.push(`[${preLabel}]${allFilters.join(',')}[${vLabel}]`);
        concatInputs.push(`[${vLabel}]`);
      }

      inputIdx++;
    }
  }

  // Audio input
  const bgmPath = resolvePath(scenario.audio.bgm);
  if (!existsSync(bgmPath)) {
    console.error(`❌ BGM 파일 없음: ${bgmPath}`);
    process.exit(1);
  }
  const audioIdx = inputIdx;
  inputs.push(`-i "${bgmPath}"`);

  // Concat all video streams
  const concatFilter = `${concatInputs.join('')}concat=n=${scenario.scenes.length}:v=1:a=0[outv]`;
  filterParts.push(concatFilter);

  // Audio processing
  const volume = scenario.audio.volume || 0.8;
  const fadeIn = scenario.audio.fade_in || 2;
  const fadeOut = scenario.audio.fade_out || 3;
  const audioFilter = `[${audioIdx}:a]atrim=0:${totalDuration},volume=${volume},afade=t=in:st=0:d=${fadeIn},afade=t=out:st=${totalDuration - fadeOut}:d=${fadeOut}[outa]`;
  filterParts.push(audioFilter);

  // Build output path
  const outputPath = resolve(ASSETS_DIR, 'video', scenario.output.endsWith('.mp4') ? scenario.output : `${scenario.output}.mp4`);

  // Assemble ffmpeg command
  const cmd = [
    'ffmpeg -y',
    ...inputs,
    `-filter_complex "${filterParts.join('; ')}"`,
    '-map "[outv]" -map "[outa]"',
    `-c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p`,
    `-c:a aac -b:a 192k`,
    `-shortest`,
    `"${outputPath}"`
  ].join(' \\\n  ');

  console.log(`\n📦 출력: ${outputPath}`);
  console.log(`\n⚙️  ffmpeg 실행 중...`);

  try {
    execSync(cmd, { stdio: 'pipe', maxBuffer: 1024 * 1024 * 50 });
    console.log(`\n✅ 렌더링 완료: ${outputPath}`);

    // Show file info
    const info = execSync(`ffprobe -v quiet -print_format json -show_format "${outputPath}"`, { encoding: 'utf-8' });
    const format = JSON.parse(info).format;
    const sizeMB = (parseInt(format.size) / 1024 / 1024).toFixed(1);
    console.log(`   크기: ${sizeMB}MB`);
    console.log(`   길이: ${parseFloat(format.duration).toFixed(1)}초`);
  } catch (err: any) {
    console.error('\n❌ 렌더링 실패:');
    console.error(err.stderr?.toString() || err.message);

    // Debug: show the command
    console.log('\n🔍 디버그 - ffmpeg 명령어:');
    console.log(cmd);
    process.exit(1);
  }
}

// ============================================================================
// Helper: Generate text filters for standard scenes
// ============================================================================

function getTextFiltersForScene(scene: YAMLScene, fps: number): string[] {
  const filters: string[] = [];
  const dur = scene.duration;

  switch (scene.type) {
    case 'title':
      if (scene.texts) {
        for (const t of scene.texts) {
          const text = escapeText(t.content);
          const size = t.size || 48;
          const color = t.color || 'white';
          const appear = t.appear || 0.5;
          const end = dur - 0.5;

          let x: string;
          let y: number;

          if (t.y !== undefined) {
            y = t.y;
            x = t.position === 'left' ? '80' : '(w-text_w)/2';
          } else if (t.position === 'bottom-center' || t.position === 'bottom') {
            y = 940;
            x = '(w-text_w)/2';
          } else if (t.position === 'top-center' || t.position === 'top') {
            y = 80;
            x = '(w-text_w)/2';
          } else {
            y = 480;
            x = '(w-text_w)/2';
          }

          filters.push(
            `drawtext=fontfile='${FONT}':text='${text}':fontsize=${size}:fontcolor=${color}:x=${x}:y=${y}:enable='between(t\\,${appear}\\,${end})'`
          );
        }
      }
      break;

    case 'scene':
      if (scene.narration) {
        const text = escapeText(scene.narration);
        const appear = 0.8;
        const end = dur - 0.5;
        filters.push(
          `drawbox=x=0:y=920:w=iw:h=120:color=black@0.7:t=fill:enable='between(t\\,${appear}\\,${end})'`
        );
        filters.push(
          `drawtext=fontfile='${FONT}':text='${text}':fontsize=32:fontcolor=white:x=(w-text_w)/2:y=955:enable='between(t\\,${appear}\\,${end})'`
        );
      }
      break;

    case 'dialogue':
      if (scene.character && scene.dialogue) {
        const name = escapeText(scene.character);
        const text = escapeText(scene.dialogue);
        const nameColor = scene.character_color || '0x00FFFF';
        const boxAppear = 0.8;
        const nameAppear = 1.0;
        const dialogueAppear = 1.8;
        const end = dur - 0.3;

        filters.push(
          `drawbox=x=0:y=880:w=iw:h=200:color=black@0.7:t=fill:enable='between(t\\,${boxAppear}\\,${end})'`
        );
        filters.push(
          `drawtext=fontfile='${FONT}':text='${name}':fontsize=36:fontcolor=${nameColor}:x=80:y=900:enable='between(t\\,${nameAppear}\\,${end})'`
        );
        filters.push(
          `drawtext=fontfile='${FONT}':text='${text}':fontsize=28:fontcolor=white:x=80:y=950:enable='between(t\\,${dialogueAppear}\\,${end})'`
        );
      }
      break;
  }

  return filters;
}

// ============================================================================
// CLI Entry Point
// ============================================================================

const yamlPath = process.argv[2];
if (!yamlPath) {
  console.log('사용법: npx ts-node assets/editor/render.ts <시나리오.yaml>');
  console.log('');
  console.log('예시:');
  console.log('  npx ts-node assets/editor/render.ts assets/scenarios/character-intro.yaml');
  process.exit(1);
}

const fullPath = resolve(yamlPath);
if (!existsSync(fullPath)) {
  console.error(`파일 없음: ${fullPath}`);
  process.exit(1);
}

render(fullPath);
