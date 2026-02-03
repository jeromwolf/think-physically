/**
 * TypeScript Schema for YAML-based Video Scenario Editor
 * ThinkPhysically 프로젝트 - 화성행 티켓
 *
 * These types match the actual YAML structure used by scenario files
 * (ep01, ep02, character-intro, etc.) and the renderer.
 */

import { resolve, dirname } from 'path';

// ============================================================================
// Constants
// ============================================================================

export const ASSETS_DIR = resolve(__dirname, '..');
export const FONT = process.env.FONT_PATH || (
  process.platform === 'darwin'
    ? '/System/Library/Fonts/AppleSDGothicNeo.ttc'
    : process.platform === 'win32'
    ? 'C:/Windows/Fonts/malgun.ttf'
    : '/usr/share/fonts/truetype/noto/NotoSansCJK-Regular.ttc'
);
export const DEFAULT_RESOLUTION: [number, number] = [1920, 1080];

// ============================================================================
// Effects and Transitions
// ============================================================================

export type Effect =
  | 'zoom-in'
  | 'zoom-out'
  | 'slow-zoom'
  | 'pan-left'
  | 'pan-right'
  | 'pan-up'
  | 'pan-down'
  | 'shake'
  | 'none';

export type Transition =
  | 'fade'
  | 'cut'
  | 'dissolve'
  | 'wipe-left'
  | 'wipe-right'
  | 'slide-left'
  | 'slide-right'
  | 'zoom-transition';

// ============================================================================
// Text Overlay Item (used in title/composite scenes)
// ============================================================================

export interface YAMLTextItem {
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
}

// ============================================================================
// Scene Type (YAML-compatible, flat structure)
// ============================================================================

export interface YAMLScene {
  type: 'title' | 'scene' | 'dialogue' | 'composite';
  bg: string;
  duration: number;
  effect?: string;
  transition?: string;

  /** Configurable fade duration (default 0.8) */
  fade_duration?: number;

  /** Text border width (default 2) */
  text_borderw?: number;
  /** Text border color (default 'black') */
  text_bordercolor?: string;

  // --- title type ---
  texts?: YAMLTextItem[];

  // --- scene type (narration) ---
  narration?: string;

  // --- dialogue type ---
  character?: string;
  character_color?: string;
  dialogue?: string;

  // --- composite type (character overlay) ---
  character_img?: string;
  character_position?: string;
  character_scale?: number;

  // --- SFX (sound effects) ---
  /** Path to sound effect file (relative to assets/) */
  sfx?: string;
  /** SFX volume 0.0-1.0 (default 0.5) */
  sfx_volume?: number;
  /** Delay in seconds from scene start (default 0) */
  sfx_delay?: number;
  /** Loop SFX for scene duration (default false, useful for ambient) */
  sfx_loop?: boolean;

  // --- Scene-specific BGM override (upcoming) ---
  /** Scene-specific BGM file path override */
  bgm?: string;
  /** Scene BGM volume 0.0-1.0 */
  bgm_volume?: number;
  /** Crossfade duration with previous BGM in seconds */
  bgm_crossfade?: number;

  // --- Text animation (upcoming) ---
  /** Text animation type */
  text_animation?: 'typewriter' | 'slide-up' | 'glow';
  /** Animation speed multiplier */
  text_speed?: number;

  // --- TTS (Text-to-Speech) ---
  /** TTS voice override for this scene */
  tts_voice?: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer' | 'coral' | 'ash' | 'sage' | 'marin' | 'cedar';
  /** Delay before TTS starts (seconds, auto-detected by scene type if not set) */
  tts_delay?: number;
  /** Skip TTS for this scene even when --tts is enabled */
  tts_skip?: boolean;
  /** Custom TTS instructions for this scene (gpt-4o-mini-tts) */
  tts_instructions?: string;
}

// ============================================================================
// Top-level Scenario (YAML root object)
// ============================================================================

export interface YAMLScenario {
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
  tts?: {
    voice?: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer' | 'coral' | 'ash' | 'sage' | 'marin' | 'cedar';
    model?: 'tts-1' | 'tts-1-hd' | 'gpt-4o-mini-tts';
    speed?: number;
    instructions?: string;
  };
  scenes: YAMLScene[];
}
