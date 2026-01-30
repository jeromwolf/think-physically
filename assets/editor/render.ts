#!/usr/bin/env npx ts-node
/**
 * 시나리오 영상 렌더러
 * YAML 시나리오 파일 → ffmpeg → MP4
 *
 * 사용법: npx ts-node assets/editor/render.ts assets/scenarios/example.yaml
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
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

  // Configurable fade duration (default 0.8)
  fade_duration?: number;

  // Text border (default: borderw=2, bordercolor=black)
  text_borderw?: number;
  text_bordercolor?: string;

  // title 타입
  texts?: Array<{
    content: string;
    position?: string;
    size?: number;
    color?: string;
    y?: number;
    appear?: number;
    borderw?: number;
    bordercolor?: string;
    shadow?: boolean;
    shadowcolor?: string;
    shadowx?: number;
    shadowy?: number;
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

  // 효과음 (SFX)
  sfx?: string;         // Path to sound effect file (relative to assets/)
  sfx_volume?: number;  // SFX volume 0.0-1.0 (default 0.5)
  sfx_delay?: number;   // Delay in seconds from scene start (default 0)
  sfx_loop?: boolean;   // Loop SFX for scene duration (default false, useful for ambient)
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
// Unified Text Filter Generator
// ============================================================================

function getTextFilters(scene: YAMLScene): string[] {
  const filters: string[] = [];
  const dur = scene.duration;
  // Default border: 2px black outline
  const sceneBorderW = scene.text_borderw ?? 2;
  const sceneBorderColor = scene.text_bordercolor ?? 'black';

  function textStyleParams(text?: { borderw?: number; bordercolor?: string; shadow?: boolean; shadowcolor?: string; shadowx?: number; shadowy?: number }): string {
    const bw = text?.borderw ?? sceneBorderW;
    const bc = text?.bordercolor ?? sceneBorderColor;
    let params = `:borderw=${bw}:bordercolor=${bc}`;
    if (text?.shadow) {
      const sc = text.shadowcolor ?? 'black@0.5';
      const sx = text.shadowx ?? 2;
      const sy = text.shadowy ?? 2;
      params += `:shadowcolor=${sc}:shadowx=${sx}:shadowy=${sy}`;
    }
    return params;
  }

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
            `drawtext=expansion=none:fontfile='${FONT}':text=${text}:fontsize=${size}:fontcolor=${color}:x=${x}:y=${y}${textStyleParams(t)}:enable='between(t,${appear},${end})'`
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
          `drawbox=x=0:y=890:w=iw:h=150:color=black@0.7:t=fill:enable='between(t,${appear},${end})'`
        );
        filters.push(
          `drawtext=expansion=none:fontfile='${FONT}':text=${text}:fontsize=40:fontcolor=white:x=(w-text_w)/2:y=925${textStyleParams()}:enable='between(t,${appear},${end})'`
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
          `drawbox=x=0:y=840:w=iw:h=240:color=black@0.7:t=fill:enable='between(t,${boxAppear},${end})'`
        );
        filters.push(
          `drawtext=expansion=none:fontfile='${FONT}':text=${name}:fontsize=44:fontcolor=${nameColor}:x=80:y=860${textStyleParams()}:enable='between(t,${nameAppear},${end})'`
        );
        filters.push(
          `drawtext=expansion=none:fontfile='${FONT}':text=${text}:fontsize=36:fontcolor=white:x=80:y=920${textStyleParams()}:enable='between(t,${dialogueAppear},${end})'`
        );
      }
      break;

    case 'composite':
      // Text overlays
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
            `drawtext=expansion=none:fontfile='${FONT}':text=${text}:fontsize=${size}:fontcolor=${color}:x=${x}:y=${y}${textStyleParams(t)}:enable='between(t,${appear},${end})'`
          );
        }
      }
      // Dialogue on composite
      if (scene.character && scene.dialogue) {
        const name = escapeText(scene.character);
        const text = escapeText(scene.dialogue as string);
        const nameColor = scene.character_color || '0x00FFFF';
        const end = dur - 0.3;
        filters.push(
          `drawbox=x=0:y=840:w=iw:h=240:color=black@0.7:t=fill:enable='between(t,0.8,${end})'`
        );
        filters.push(
          `drawtext=expansion=none:fontfile='${FONT}':text=${name}:fontsize=44:fontcolor=${nameColor}:x=80:y=860${textStyleParams()}:enable='between(t,0.8,${end})'`
        );
        filters.push(
          `drawtext=expansion=none:fontfile='${FONT}':text=${text}:fontsize=36:fontcolor=white:x=80:y=920${textStyleParams()}:enable='between(t,0.8,${end})'`
        );
      }
      break;
  }

  return filters;
}

// ============================================================================
// Composite Scene (needs overlay filter)
// ============================================================================

function isCompositeScene(scene: YAMLScene): boolean {
  return scene.type === 'composite' && !!scene.character_img;
}

function getSceneLabel(scene: YAMLScene): string {
  switch (scene.type) {
    case 'title':
      return scene.texts?.[0]?.content?.substring(0, 30) || 'untitled';
    case 'scene':
      return scene.narration?.substring(0, 30) || 'no narration';
    case 'dialogue':
      return `${scene.character}: "${scene.dialogue?.substring(0, 25) || ''}"`;
    case 'composite':
      return scene.character_img?.split('/').pop() || 'composite';
    default:
      return '';
  }
}

// ============================================================================
// File Validation
// ============================================================================

function validateFiles(scenario: YAMLScenario): string[] {
  const missing: string[] = [];

  // Check BGM
  const bgmPath = resolvePath(scenario.audio.bgm);
  if (!existsSync(bgmPath)) missing.push(`BGM: ${bgmPath}`);

  // Check all scene files
  for (let i = 0; i < scenario.scenes.length; i++) {
    const scene = scenario.scenes[i];

    // Background image
    const bgPath = resolvePath(scene.bg);
    if (!existsSync(bgPath)) missing.push(`장면 ${i + 1} 배경: ${bgPath}`);

    // Character image (composite)
    if (scene.character_img) {
      const charPath = resolvePath(scene.character_img);
      if (!existsSync(charPath)) missing.push(`장면 ${i + 1} 캐릭터: ${charPath}`);
    }

    // SFX
    if (scene.sfx) {
      const sfxPath = resolvePath(scene.sfx);
      if (!existsSync(sfxPath)) missing.push(`장면 ${i + 1} SFX: ${sfxPath}`);
    }
  }

  return missing;
}

// ============================================================================
// CLI Argument Types
// ============================================================================

interface CliArgs {
  yamlPath: string;
  sceneIndex?: number;         // --scene N
  sceneRange?: [number, number]; // --scenes M-N
  dryRun: boolean;             // --dry-run
  fast: boolean;               // --fast
}

// ============================================================================
// Main Render Function
// ============================================================================

function render(yamlPath: string, cli: CliArgs) {
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

  // Count SFX
  const sfxCount = scenario.scenes.filter(s => s.sfx).length;
  console.log(`   효과음: ${sfxCount}개`);

  // Pre-render file validation
  const missingFiles = validateFiles(scenario);
  if (missingFiles.length > 0) {
    console.error(`\n❌ 파일 ${missingFiles.length}개 없음:`);
    for (const f of missingFiles) {
      console.error(`   - ${f}`);
    }
    process.exit(1);
  }
  console.log(`   파일 검증: ✅ 모든 파일 확인됨`);

  // Scene slicing (--scene N or --scenes M-N)
  let scenesToRender = scenario.scenes;
  let sceneOffset = 0;  // offset for BGM trimming
  let outputSuffix = '';

  if (cli.sceneIndex !== undefined) {
    if (cli.sceneIndex >= scenario.scenes.length) {
      console.error(`❌ --scene ${cli.sceneIndex} 범위 초과 (0~${scenario.scenes.length - 1})`);
      process.exit(1);
    }
    scenesToRender = [scenario.scenes[cli.sceneIndex]];
    sceneOffset = scenario.scenes.slice(0, cli.sceneIndex).reduce((sum, s) => sum + s.duration, 0);
    outputSuffix = `-scene${cli.sceneIndex}`;
    console.log(`   프리뷰: 장면 ${cli.sceneIndex} (${scenesToRender[0].duration}초)`);
  } else if (cli.sceneRange) {
    const [start, end] = cli.sceneRange;
    if (end >= scenario.scenes.length) {
      console.error(`❌ --scenes ${start}-${end} 범위 초과 (0~${scenario.scenes.length - 1})`);
      process.exit(1);
    }
    scenesToRender = scenario.scenes.slice(start, end + 1);
    sceneOffset = scenario.scenes.slice(0, start).reduce((sum, s) => sum + s.duration, 0);
    outputSuffix = `-scenes${start}-${end}`;
    console.log(`   범위 렌더: 장면 ${start}~${end} (${scenesToRender.length}개)`);
  }

  if (cli.fast) {
    outputSuffix += '-fast';
    console.log(`   빠른 프리뷰 모드: 960x540, crf 28`);
  }

  // Recalculate total duration for sliced scenes
  const renderDuration = scenesToRender.reduce((sum, s) => sum + s.duration, 0);

  // Build ffmpeg command
  const inputs: string[] = [];
  const filterParts: string[] = [];
  const concatInputs: string[] = [];

  let inputIdx = 0;

  // Process each scene
  for (let i = 0; i < scenesToRender.length; i++) {
    const scene = scenesToRender[i];
    console.log(`   [${i + 1}/${scenesToRender.length}] ${scene.type}: ${getSceneLabel(scene)}`);
    const bgPath = resolvePath(scene.bg);

    const fadeDuration = scene.fade_duration;
    const textFilters = getTextFilters(scene);

    if (isCompositeScene(scene)) {
      // Composite: bg + character overlay
      const charPath = resolvePath(scene.character_img!);

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

      // Apply fades + text on composited result
      const transition = scene.transition || 'fade';
      const { fadeIn, fadeOut } = getTransitionFilter(transition, scene.duration, fadeDuration);

      const postFilters: string[] = [fadeIn];
      if (fadeOut) postFilters.push(fadeOut);
      postFilters.push(...textFilters);

      const vLabel = `v${i}`;
      filterParts.push(`[${overlayLabel}]${postFilters.join(',')}[${vLabel}]`);
      concatInputs.push(`[${vLabel}]`);
    } else {
      // Standard scene (title, scene, dialogue)
      const hasZoompan = scene.effect && scene.effect !== 'none';
      if (hasZoompan) {
        inputs.push(`-i "${bgPath}"`);
      } else {
        inputs.push(`-loop 1 -t ${scene.duration} -i "${bgPath}"`);
      }

      const transition = scene.transition || 'fade';
      const { fadeIn, fadeOut } = getTransitionFilter(transition, scene.duration, fadeDuration);

      if (!hasZoompan) {
        const scaleFilter = `scale=${width}:${height}:force_original_aspect_ratio=decrease,pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2,setsar=1`;
        const allFilters: string[] = [scaleFilter, fadeIn];
        if (fadeOut) allFilters.push(fadeOut);
        allFilters.push(...textFilters);

        const vLabel = `v${i}`;
        filterParts.push(`[${inputIdx}:v]${allFilters.join(',')}[${vLabel}]`);
        concatInputs.push(`[${vLabel}]`);
      } else {
        const scaleFilter = `scale=1920x1080:force_original_aspect_ratio=increase,crop=1920:1080`;
        const effectFilter = getEffectFilter(scene.effect!, scene.duration, fps);
        const preLabel = `pre${i}`;
        filterParts.push(`[${inputIdx}:v]${scaleFilter}[${preLabel}]`);

        const allFilters: string[] = [effectFilter, fadeIn];
        if (fadeOut) allFilters.push(fadeOut);
        allFilters.push(...textFilters);

        const vLabel = `v${i}`;
        filterParts.push(`[${preLabel}]${allFilters.join(',')}[${vLabel}]`);
        concatInputs.push(`[${vLabel}]`);
      }

      inputIdx++;
    }
  }

  // Audio input (BGM)
  const bgmPath = resolvePath(scenario.audio.bgm);
  const audioIdx = inputIdx++;
  inputs.push(`-i "${bgmPath}"`);

  // Collect SFX inputs
  interface SFXTrack {
    inputIdx: number;
    delay: number;
    volume: number;
    loop: boolean;
    duration: number;
  }
  const sfxTracks: SFXTrack[] = [];
  let currentTime = 0;

  for (const scene of scenesToRender) {
    if (scene.sfx) {
      const sfxPath = resolvePath(scene.sfx);

      const sfxInputIdx = inputIdx++;
      inputs.push(`-i "${sfxPath}"`);

      const sfxDelay = scene.sfx_delay || 0;
      const absoluteDelay = currentTime + sfxDelay;
      const sfxVolume = scene.sfx_volume || 0.5;
      const sfxLoop = scene.sfx_loop || false;

      sfxTracks.push({
        inputIdx: sfxInputIdx,
        delay: absoluteDelay,
        volume: sfxVolume,
        loop: sfxLoop,
        duration: scene.duration
      });
    }
    currentTime += scene.duration;
  }

  // Concat all video streams
  const concatFilter = `${concatInputs.join('')}concat=n=${scenesToRender.length}:v=1:a=0[outv]`;
  filterParts.push(concatFilter);

  // Audio processing
  const volume = scenario.audio.volume || 0.8;
  const audioFadeIn = scenario.audio.fade_in || 2;
  const audioFadeOut = scenario.audio.fade_out || 3;

  if (sfxTracks.length === 0) {
    // No SFX - just BGM
    const audioFilter = `[${audioIdx}:a]atrim=${sceneOffset}:${sceneOffset + renderDuration},asetpts=PTS-STARTPTS,volume=${volume},afade=t=in:st=0:d=${audioFadeIn},afade=t=out:st=${renderDuration - audioFadeOut}:d=${audioFadeOut}[outa]`;
    filterParts.push(audioFilter);
  } else {
    // BGM + SFX mixing
    const bgmFilter = `[${audioIdx}:a]atrim=${sceneOffset}:${sceneOffset + renderDuration},asetpts=PTS-STARTPTS,volume=${volume},afade=t=in:st=0:d=${audioFadeIn},afade=t=out:st=${renderDuration - audioFadeOut}:d=${audioFadeOut}[bgm]`;
    filterParts.push(bgmFilter);

    // Process each SFX track
    const sfxLabels: string[] = [];
    for (let i = 0; i < sfxTracks.length; i++) {
      const sfx = sfxTracks[i];
      const delayMs = Math.floor(sfx.delay * 1000);
      const sfxLabel = `sfx${i}`;

      if (sfx.loop) {
        // Loop SFX for scene duration
        const loopFilter = `[${sfx.inputIdx}:a]aloop=loop=-1:size=2e+09,atrim=0:${sfx.duration},adelay=${delayMs}|${delayMs},volume=${sfx.volume}[${sfxLabel}]`;
        filterParts.push(loopFilter);
      } else {
        // Single SFX playback
        const sfxFilter = `[${sfx.inputIdx}:a]adelay=${delayMs}|${delayMs},volume=${sfx.volume}[${sfxLabel}]`;
        filterParts.push(sfxFilter);
      }

      sfxLabels.push(`[${sfxLabel}]`);
    }

    // Mix BGM + all SFX tracks
    const mixInputs = ['[bgm]', ...sfxLabels].join('');
    const mixFilter = `${mixInputs}amix=inputs=${1 + sfxTracks.length}:duration=first:dropout_transition=0[outa]`;
    filterParts.push(mixFilter);
  }

  // Build output path
  const baseName = scenario.output.endsWith('.mp4')
    ? scenario.output.slice(0, -4)
    : scenario.output;
  const outputPath = resolve(ASSETS_DIR, 'video', `${baseName}${outputSuffix}.mp4`);

  // Write filter_complex to a script file (avoids shell escaping issues)
  const filterScript = filterParts.join(';\n');
  const filterScriptPath = resolve(ASSETS_DIR, 'video', '.filter_complex.txt');
  writeFileSync(filterScriptPath, filterScript, 'utf-8');
  console.log(`   필터 스크립트: ${filterScriptPath}`);

  // Assemble ffmpeg command
  const encodingParams = cli.fast
    ? `-c:v libx264 -preset veryfast -crf 28 -pix_fmt yuv420p -s 960:540`
    : `-c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p`;

  const cmd = [
    'ffmpeg -y',
    ...inputs,
    `-filter_complex_script "${filterScriptPath}"`,
    '-map "[outv]" -map "[outa]"',
    encodingParams,
    `-c:a aac -b:a 192k`,
    `-shortest`,
    `"${outputPath}"`
  ].join(' \\\n  ');

  console.log(`   필터 수: ${filterParts.length}개`);
  console.log(`\n📦 출력: ${outputPath}`);

  // Dry-run: output command without executing
  if (cli.dryRun) {
    console.log(`\n📋 DRY RUN — ffmpeg 실행 안 함`);
    console.log(`\n--- filter_complex ---`);
    console.log(filterScript);
    console.log(`\n--- ffmpeg 명령어 ---`);
    console.log(cmd);
    console.log(`\n📊 요약:`);
    console.log(`   입력: ${inputs.length}개`);
    console.log(`   필터: ${filterParts.length}개`);
    console.log(`   장면: ${scenesToRender.length}개`);
    console.log(`   예상 길이: ${renderDuration}초`);
    return;
  }

  console.log(`\n⚙️  ffmpeg 실행 중...`);

  const startTime = Date.now();

  try {
    execSync(cmd, { stdio: 'pipe', maxBuffer: 1024 * 1024 * 50 });
    console.log(`\n✅ 렌더링 완료: ${outputPath}`);

    // Show file info
    const info = execSync(`ffprobe -v quiet -print_format json -show_format "${outputPath}"`, { encoding: 'utf-8' });
    const format = JSON.parse(info).format;
    const sizeMB = (parseInt(format.size) / 1024 / 1024).toFixed(1);
    console.log(`   크기: ${sizeMB}MB`);
    console.log(`   길이: ${parseFloat(format.duration).toFixed(1)}초`);

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`   소요 시간: ${elapsed}초`);
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
// CLI Argument Parser
// ============================================================================

function parseCliArgs(): CliArgs {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log(`사용법: npx tsx assets/editor/render.ts <시나리오.yaml> [옵션]

옵션:
  --scene N       단일 장면만 렌더링 (0-based index)
  --scenes M-N    장면 범위 렌더링 (0-based, inclusive)
  --dry-run       ffmpeg 실행 없이 필터와 명령어만 출력
  --fast          빠른 프리뷰 (저해상도, 저품질)
  -h, --help      도움말 표시

예시:
  npx tsx assets/editor/render.ts assets/scenarios/ep01.yaml
  npx tsx assets/editor/render.ts assets/scenarios/ep01.yaml --scene 5
  npx tsx assets/editor/render.ts assets/scenarios/ep01.yaml --scenes 5-10 --fast
  npx tsx assets/editor/render.ts assets/scenarios/ep01.yaml --dry-run`);
    process.exit(0);
  }

  const result: CliArgs = {
    yamlPath: '',
    dryRun: false,
    fast: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--scene') {
      const val = parseInt(args[++i], 10);
      if (isNaN(val) || val < 0) {
        console.error('❌ --scene 값은 0 이상의 정수여야 합니다');
        process.exit(1);
      }
      result.sceneIndex = val;
    } else if (arg === '--scenes') {
      const val = args[++i];
      const match = val?.match(/^(\d+)-(\d+)$/);
      if (!match) {
        console.error('❌ --scenes 형식: M-N (예: 5-10)');
        process.exit(1);
      }
      const start = parseInt(match[1], 10);
      const end = parseInt(match[2], 10);
      if (start > end) {
        console.error('❌ --scenes 시작이 끝보다 클 수 없습니다');
        process.exit(1);
      }
      result.sceneRange = [start, end];
    } else if (arg === '--dry-run') {
      result.dryRun = true;
    } else if (arg === '--fast') {
      result.fast = true;
    } else if (!arg.startsWith('--') && !result.yamlPath) {
      result.yamlPath = arg;
    }
  }

  if (!result.yamlPath) {
    console.error('❌ YAML 파일 경로가 필요합니다');
    process.exit(1);
  }

  return result;
}

// ============================================================================
// CLI Entry Point
// ============================================================================

const cliArgs = parseCliArgs();
const fullPath = resolve(cliArgs.yamlPath);
if (!existsSync(fullPath)) {
  console.error(`파일 없음: ${fullPath}`);
  process.exit(1);
}

render(fullPath, cliArgs);
