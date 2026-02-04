/**
 * Asset Analyzer for Video Editor Asset Prep System
 *
 * Analyzes an episode's synopsis and generates a manifest of needed assets
 * (scene images, SFX, BGM). Data-driven approach with hardcoded episode configs.
 *
 * Usage:
 *   import { analyzeEpisode } from './asset-analyzer';
 *   const manifest = analyzeEpisode(3);
 *   console.log(manifest.scenes.filter(s => !s.exists));  // missing images
 */

import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { ASSETS_DIR } from './schema';

// ============================================================================
// Types
// ============================================================================

export interface AssetManifest {
  episode: string;        // "ep03"
  title: string;          // "48시간"
  scenes: SceneAsset[];
  sfxNeeded: SFXNeed[];
  bgmNeeded: BGMNeed[];
}

export interface SceneAsset {
  id: string;              // "ep03-시뮬레이션돔"
  description: string;     // "화성 시뮬레이션 돔 내부"
  timeCode: string;        // "T+00:00"
  mood: string;            // "tense" | "calm" | "action" | "emotional" | "mystery"
  exists: boolean;         // file already exists?
  filePath: string;        // "scenes/ep03/ep03-시뮬레이션돔.png"
}

export interface SFXNeed {
  keyword: string;         // "dust storm wind"
  koreanDesc: string;      // "모래폭풍 바람 소리"
  existingMatch?: string;  // path if already in library
  searchQuery: string;     // Freesound search query
}

export interface BGMNeed {
  mood: string;            // "tense" | "emotional" | "action" | "mystery"
  description: string;
  searchQuery: string;     // Pixabay search query
}

// ============================================================================
// Episode Config Registry
// ============================================================================

interface EpisodeConfig {
  title: string;
  synopsisPath: string;
  scenes: Omit<SceneAsset, 'exists'>[];
  sfx: Omit<SFXNeed, 'existingMatch'>[];
  bgm: BGMNeed[];
}

const EXISTING_SFX: Record<string, string> = {
  'whoosh': 'audio/sfx/whoosh.mp3',
  'alarm-siren': 'audio/sfx/alarm-siren.mp3',
  'heartbeat': 'audio/sfx/heartbeat.mp3',
  'tension-drone': 'audio/sfx/tension-drone.mp3',
  'electronic-beep': 'audio/sfx/electronic-beep.mp3',
  'crowd-murmur': 'audio/sfx/crowd-murmur.mp3',
  'notification': 'audio/sfx/notification.mp3',
};

/**
 * Load episode configuration from JSON file.
 * Returns null if the episode is not yet configured.
 */
function loadEpisodeConfig(episodeNum: number): EpisodeConfig | null {
  const configPath = resolve(__dirname, 'episode-configs', `ep${String(episodeNum).padStart(2, '0')}.json`);
  try {
    const data = JSON.parse(readFileSync(configPath, 'utf-8'));
    // Convert JSON structure to EpisodeConfig format
    return {
      title: data.title,
      synopsisPath: data.synopsisPath,
      scenes: data.scenes.map((scene: any) => ({
        id: scene.id,
        description: scene.description,
        timeCode: scene.timeCode,
        mood: scene.mood,
        filePath: scene.filePath,
      })),
      sfx: data.sfx,
      bgm: data.bgmMoods,
    };
  } catch {
    return null;
  }
}

// ============================================================================
// Public API
// ============================================================================

/**
 * Get episode configuration metadata.
 * Returns null if the episode is not yet configured.
 */
export function getEpisodeConfig(episodeNum: number): { title: string; synopsisPath: string } | null {
  const config = loadEpisodeConfig(episodeNum);
  if (!config) return null;
  return { title: config.title, synopsisPath: config.synopsisPath };
}

/**
 * Analyze an episode and produce a complete asset manifest.
 *
 * Checks the filesystem for existing scene images and SFX files,
 * then returns a manifest describing what exists and what is still needed.
 */
export function analyzeEpisode(episodeNum: number): AssetManifest {
  const config = loadEpisodeConfig(episodeNum);
  if (!config) {
    throw new Error(
      `Episode ${episodeNum} is not configured. Check assets/editor/episode-configs/ for available episodes.`
    );
  }

  const epTag = `ep${String(episodeNum).padStart(2, '0')}`;

  // Check scene image existence on disk
  const scenes: SceneAsset[] = config.scenes.map((scene) => ({
    ...scene,
    exists: existsSync(resolve(ASSETS_DIR, scene.filePath)),
  }));

  // Match SFX against existing library
  const sfxNeeded: SFXNeed[] = config.sfx.map((sfx) => {
    const match = EXISTING_SFX[sfx.keyword];
    return {
      ...sfx,
      existingMatch: match && existsSync(resolve(ASSETS_DIR, match)) ? match : undefined,
    };
  });

  // BGM needs are passed through as-is (no local matching logic)
  const bgmNeeded: BGMNeed[] = [...config.bgm];

  return {
    episode: epTag,
    title: config.title,
    scenes,
    sfxNeeded,
    bgmNeeded,
  };
}

// ============================================================================
// CLI Entry Point
// ============================================================================

if (require.main === module) {
  const epNum = parseInt(process.argv[2], 10);

  if (isNaN(epNum)) {
    console.log(`사용법: npx tsx assets/editor/asset-analyzer.ts <에피소드번호>`);
    console.log(`예시:   npx tsx assets/editor/asset-analyzer.ts 3`);
    console.log(`\n설정 파일: assets/editor/episode-configs/ep{NN}.json`);
    process.exit(0);
  }

  const manifest = analyzeEpisode(epNum);

  console.log(`\n========================================`);
  console.log(` Asset Manifest: ${manifest.episode} - ${manifest.title}`);
  console.log(`========================================\n`);

  // --- Scene images ---
  const existingScenes = manifest.scenes.filter((s) => s.exists);
  const missingScenes = manifest.scenes.filter((s) => !s.exists);

  console.log(`[Scene Images] ${existingScenes.length}/${manifest.scenes.length} exist\n`);

  for (const scene of manifest.scenes) {
    const status = scene.exists ? 'OK' : 'MISSING';
    const icon = scene.exists ? 'v' : 'x';
    console.log(`  [${icon}] ${scene.id}`);
    console.log(`      ${scene.description}`);
    console.log(`      ${scene.timeCode} | mood: ${scene.mood} | ${status}`);
    console.log(`      path: ${scene.filePath}`);
    console.log();
  }

  // --- SFX ---
  const existingSfx = manifest.sfxNeeded.filter((s) => s.existingMatch);
  const missingSfx = manifest.sfxNeeded.filter((s) => !s.existingMatch);

  console.log(`[SFX] ${existingSfx.length}/${manifest.sfxNeeded.length} in library\n`);

  for (const sfx of manifest.sfxNeeded) {
    if (sfx.existingMatch) {
      console.log(`  [v] ${sfx.keyword} -> ${sfx.existingMatch}`);
    } else {
      console.log(`  [x] ${sfx.keyword} (${sfx.koreanDesc})`);
      console.log(`      search: "${sfx.searchQuery}"`);
    }
  }

  // --- BGM ---
  console.log(`\n[BGM] ${manifest.bgmNeeded.length} moods needed\n`);

  for (const bgm of manifest.bgmNeeded) {
    console.log(`  [ ] ${bgm.mood}: ${bgm.description}`);
    console.log(`      search: "${bgm.searchQuery}"`);
  }

  // --- Summary ---
  console.log(`\n========================================`);
  console.log(` Summary`);
  console.log(`========================================`);
  console.log(`  Scenes:  ${missingScenes.length} to generate, ${existingScenes.length} ready`);
  console.log(`  SFX:     ${missingSfx.length} to download, ${existingSfx.length} in library`);
  console.log(`  BGM:     ${manifest.bgmNeeded.length} to source`);
  console.log();
}
