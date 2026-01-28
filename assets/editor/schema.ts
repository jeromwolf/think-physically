/**
 * TypeScript Schema for YAML-based Video Scenario Editor
 * ThinkPhysically 프로젝트 - 화성행 티켓
 */

// ============================================================================
// Constants
// ============================================================================

export const ASSETS_DIR = '/Users/blockmeta/Desktop/workspace/think-physically/assets';
export const FONT = '/System/Library/Fonts/AppleSDGothicNeo.ttc';
export const DEFAULT_RESOLUTION: [number, number] = [1920, 1080];

// ============================================================================
// Audio Configuration
// ============================================================================

export interface AudioConfig {
  /** Path to background music file (relative to assets folder or absolute) */
  bgm: string;

  /** Volume level (0.0 = mute, 1.0 = full volume) */
  volume: number;

  /** Fade in duration in seconds */
  fade_in: number;

  /** Fade out duration in seconds */
  fade_out: number;
}

// ============================================================================
// Text Configuration
// ============================================================================

export type TextPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface TextConfig {
  /** Text content to display */
  content: string;

  /** Position on screen */
  position: TextPosition;

  /** Font size in pixels */
  size: number;

  /** Text color (hex, rgb, or color name) */
  color: string;

  /** Background opacity behind text (0.0 = transparent, 1.0 = opaque) */
  bg_opacity: number;

  /** Time when text appears (seconds from scene start) */
  appear: number;

  /** How long text stays visible (seconds) */
  duration: number;
}

// ============================================================================
// Effects and Transitions
// ============================================================================

export type Effect =
  | 'zoom-in'
  | 'zoom-out'
  | 'slow-zoom'
  | 'pan-left'
  | 'pan-right'
  | 'none';

export type Transition = 'fade' | 'cut';

// ============================================================================
// Character Configuration
// ============================================================================

export type CharacterPosition = 'left' | 'center' | 'right';

export interface CharacterOverlay {
  /** Path to character image (relative to assets folder or absolute) */
  image: string;

  /** Position on screen */
  position: CharacterPosition;

  /** Scale factor (1.0 = original size, 0.5 = half size, 2.0 = double size) */
  scale: number;
}

// ============================================================================
// Scene Types (Discriminated Union)
// ============================================================================

/**
 * Title Scene: Full-screen title card with centered text
 */
export interface TitleScene {
  type: 'title';

  /** Duration in seconds */
  duration: number;

  /** Background image path */
  bg: string;

  /** Array of text overlays (usually title, subtitle, etc.) */
  texts: TextConfig[];

  /** Transition to next scene */
  transition: Transition;
}

/**
 * Scene: Narrative scene with background and Ken Burns effect
 */
export interface NarrativeScene {
  type: 'scene';

  /** Duration in seconds */
  duration: number;

  /** Background image path */
  bg: string;

  /** Narration text overlay */
  narration: TextConfig;

  /** Ken Burns effect type */
  effect: Effect;

  /** Transition to next scene */
  transition: Transition;
}

/**
 * Dialogue Scene: Character dialogue with name tag
 */
export interface DialogueScene {
  type: 'dialogue';

  /** Duration in seconds */
  duration: number;

  /** Background image path */
  bg: string;

  /** Character name */
  character: string;

  /** Character name color */
  character_color: string;

  /** Dialogue text */
  dialogue: TextConfig;

  /** Ken Burns effect type */
  effect: Effect;

  /** Transition to next scene */
  transition: Transition;
}

/**
 * Composite Scene: Background with character overlay
 */
export interface CompositeScene {
  type: 'composite';

  /** Duration in seconds */
  duration: number;

  /** Background image path */
  bg: string;

  /** Character overlay configuration */
  character: CharacterOverlay;

  /** Optional text overlays */
  texts?: TextConfig[];

  /** Ken Burns effect type */
  effect: Effect;

  /** Transition to next scene */
  transition: Transition;
}

/**
 * Union type for all scene types
 */
export type Scene = TitleScene | NarrativeScene | DialogueScene | CompositeScene;

// ============================================================================
// Top-level Video Configuration
// ============================================================================

export interface VideoScenario {
  /** Project title */
  title: string;

  /** Output filename (without extension) */
  output: string;

  /** Video resolution [width, height] */
  resolution: [number, number];

  /** Frames per second */
  fps: number;

  /** Audio configuration */
  audio: AudioConfig;

  /** Array of scenes */
  scenes: Scene[];
}

// ============================================================================
// Type Guards
// ============================================================================

export function isTitleScene(scene: Scene): scene is TitleScene {
  return scene.type === 'title';
}

export function isNarrativeScene(scene: Scene): scene is NarrativeScene {
  return scene.type === 'scene';
}

export function isDialogueScene(scene: Scene): scene is DialogueScene {
  return scene.type === 'dialogue';
}

export function isCompositeScene(scene: Scene): scene is CompositeScene {
  return scene.type === 'composite';
}

// ============================================================================
// Validation Helpers
// ============================================================================

export function validateAudioConfig(audio: AudioConfig): string[] {
  const errors: string[] = [];

  if (audio.volume < 0 || audio.volume > 1) {
    errors.push('Audio volume must be between 0.0 and 1.0');
  }

  if (audio.fade_in < 0) {
    errors.push('Audio fade_in must be non-negative');
  }

  if (audio.fade_out < 0) {
    errors.push('Audio fade_out must be non-negative');
  }

  return errors;
}

export function validateTextConfig(text: TextConfig): string[] {
  const errors: string[] = [];

  if (text.size <= 0) {
    errors.push('Text size must be positive');
  }

  if (text.bg_opacity < 0 || text.bg_opacity > 1) {
    errors.push('Text bg_opacity must be between 0.0 and 1.0');
  }

  if (text.appear < 0) {
    errors.push('Text appear time must be non-negative');
  }

  if (text.duration <= 0) {
    errors.push('Text duration must be positive');
  }

  return errors;
}

export function validateScene(scene: Scene): string[] {
  const errors: string[] = [];

  if (scene.duration <= 0) {
    errors.push('Scene duration must be positive');
  }

  if (!scene.bg) {
    errors.push('Scene must have a background image');
  }

  // Type-specific validation
  if (isTitleScene(scene)) {
    if (!scene.texts || scene.texts.length === 0) {
      errors.push('Title scene must have at least one text element');
    }
    scene.texts?.forEach((text, i) => {
      const textErrors = validateTextConfig(text);
      textErrors.forEach(err => errors.push(`texts[${i}]: ${err}`));
    });
  }

  if (isNarrativeScene(scene)) {
    const textErrors = validateTextConfig(scene.narration);
    textErrors.forEach(err => errors.push(`narration: ${err}`));
  }

  if (isDialogueScene(scene)) {
    if (!scene.character) {
      errors.push('Dialogue scene must have a character name');
    }
    const textErrors = validateTextConfig(scene.dialogue);
    textErrors.forEach(err => errors.push(`dialogue: ${err}`));
  }

  if (isCompositeScene(scene)) {
    if (!scene.character?.image) {
      errors.push('Composite scene must have a character image');
    }
    if (scene.character?.scale <= 0) {
      errors.push('Character scale must be positive');
    }
    scene.texts?.forEach((text, i) => {
      const textErrors = validateTextConfig(text);
      textErrors.forEach(err => errors.push(`texts[${i}]: ${err}`));
    });
  }

  return errors;
}

export function validateVideoScenario(scenario: VideoScenario): string[] {
  const errors: string[] = [];

  if (!scenario.title) {
    errors.push('Scenario must have a title');
  }

  if (!scenario.output) {
    errors.push('Scenario must have an output filename');
  }

  if (scenario.resolution[0] <= 0 || scenario.resolution[1] <= 0) {
    errors.push('Resolution must have positive width and height');
  }

  if (scenario.fps <= 0) {
    errors.push('FPS must be positive');
  }

  const audioErrors = validateAudioConfig(scenario.audio);
  audioErrors.forEach(err => errors.push(`audio: ${err}`));

  if (!scenario.scenes || scenario.scenes.length === 0) {
    errors.push('Scenario must have at least one scene');
  }

  scenario.scenes?.forEach((scene, i) => {
    const sceneErrors = validateScene(scene);
    sceneErrors.forEach(err => errors.push(`scenes[${i}]: ${err}`));
  });

  return errors;
}

// ============================================================================
// Example/Template
// ============================================================================

export const EXAMPLE_SCENARIO: VideoScenario = {
  title: "화성행 티켓 - 티저",
  output: "mars_ticket_teaser",
  resolution: [1920, 1080],
  fps: 30,
  audio: {
    bgm: "audio/epic_space_bgm.mp3",
    volume: 0.7,
    fade_in: 2.0,
    fade_out: 3.0
  },
  scenes: [
    {
      type: 'title',
      duration: 3.0,
      bg: 'scenes/space_stars.jpg',
      texts: [
        {
          content: '화성행 티켓',
          position: 'center',
          size: 96,
          color: '#FFFFFF',
          bg_opacity: 0.3,
          appear: 0.5,
          duration: 2.0
        },
        {
          content: 'ONE WAY TICKET',
          position: 'bottom-center',
          size: 48,
          color: '#FF6B35',
          bg_opacity: 0.2,
          appear: 1.5,
          duration: 1.5
        }
      ],
      transition: 'fade'
    },
    {
      type: 'scene',
      duration: 4.0,
      bg: 'scenes/mars_surface.jpg',
      narration: {
        content: '2040년. 인류 최초 화성 이주가 시작된다.',
        position: 'bottom-center',
        size: 48,
        color: '#FFFFFF',
        bg_opacity: 0.5,
        appear: 0.5,
        duration: 3.0
      },
      effect: 'slow-zoom',
      transition: 'fade'
    },
    {
      type: 'dialogue',
      duration: 3.5,
      bg: 'scenes/interview_room.jpg',
      character: '서하준',
      character_color: '#4A90E2',
      dialogue: {
        content: '당신은 왜 화성에 가려 하나요?',
        position: 'bottom-center',
        size: 42,
        color: '#FFFFFF',
        bg_opacity: 0.6,
        appear: 0.3,
        duration: 3.0
      },
      effect: 'none',
      transition: 'fade'
    },
    {
      type: 'composite',
      duration: 4.0,
      bg: 'scenes/rocket_launch.jpg',
      character: {
        image: 'characters/seo_hajun.png',
        position: 'left',
        scale: 0.8
      },
      texts: [
        {
          content: '편도 티켓. 돌아올 수 없는 여정.',
          position: 'top-center',
          size: 52,
          color: '#FFFFFF',
          bg_opacity: 0.4,
          appear: 1.0,
          duration: 2.5
        }
      ],
      effect: 'zoom-in',
      transition: 'fade'
    }
  ]
};
