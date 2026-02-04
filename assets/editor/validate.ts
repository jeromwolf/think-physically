/**
 * YAML Scenario Validator
 *
 * Validates parsed YAML scenarios before ffmpeg rendering.
 * Catches typos, missing fields, and invalid values immediately
 * instead of failing minutes into a long render.
 */

const VALID_TYPES = ['title', 'scene', 'dialogue', 'composite', 'scene-title'] as const;

const VALID_EFFECTS = [
  'zoom-in', 'zoom-out', 'slow-zoom',
  'pan-left', 'pan-right', 'pan-up', 'pan-down',
  'shake', 'none',
] as const;

const VALID_TRANSITIONS = [
  'fade', 'cut', 'dissolve',
  'wipe-left', 'wipe-right',
  'slide-left', 'slide-right',
  'zoom-transition',
] as const;

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

export function validateScenario(scenario: any): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Top-level required fields
  if (!scenario.title) errors.push('시나리오에 "title" 필드가 없습니다.');
  if (!scenario.output) errors.push('시나리오에 "output" 필드가 없습니다.');

  if (!scenario.audio) {
    errors.push('시나리오에 "audio" 섹션이 없습니다.');
  } else {
    if (!scenario.audio.bgm) errors.push('audio.bgm 필드가 없습니다.');
  }

  if (!scenario.scenes || !Array.isArray(scenario.scenes)) {
    errors.push('시나리오에 "scenes" 배열이 없습니다.');
    return { valid: false, errors, warnings };
  }

  if (scenario.scenes.length === 0) {
    errors.push('scenes 배열이 비어 있습니다.');
    return { valid: false, errors, warnings };
  }

  // Validate each scene
  for (let i = 0; i < scenario.scenes.length; i++) {
    const scene = scenario.scenes[i];
    const prefix = `장면 ${i + 1}`;

    // type is required
    if (!scene.type) {
      errors.push(`${prefix}: "type" 필드가 없습니다.`);
      continue;
    }

    if (!VALID_TYPES.includes(scene.type)) {
      errors.push(`${prefix}: 유효하지 않은 type "${scene.type}". 허용값: ${VALID_TYPES.join(', ')}`);
    }

    // bg is required for all types
    if (!scene.bg) {
      errors.push(`${prefix}: "bg" 필드가 없습니다.`);
    }

    // duration is required and must be positive
    if (scene.duration === undefined || scene.duration === null) {
      errors.push(`${prefix}: "duration" 필드가 없습니다.`);
    } else if (typeof scene.duration !== 'number' || scene.duration <= 0) {
      errors.push(`${prefix}: duration은 양수여야 합니다. (현재: ${scene.duration})`);
    }

    // effect validation
    if (scene.effect && !VALID_EFFECTS.includes(scene.effect)) {
      errors.push(`${prefix}: 유효하지 않은 effect "${scene.effect}". 허용값: ${VALID_EFFECTS.join(', ')}`);
    }

    // transition validation
    if (scene.transition && !VALID_TRANSITIONS.includes(scene.transition)) {
      errors.push(`${prefix}: 유효하지 않은 transition "${scene.transition}". 허용값: ${VALID_TRANSITIONS.join(', ')}`);
    }

    // Type-specific validation
    switch (scene.type) {
      case 'title':
        if (!scene.texts || !Array.isArray(scene.texts) || scene.texts.length === 0) {
          errors.push(`${prefix} (title): "texts" 배열이 필요합니다.`);
        } else {
          for (let j = 0; j < scene.texts.length; j++) {
            const t = scene.texts[j];
            if (!t.content && t.content !== '') {
              errors.push(`${prefix} (title): texts[${j}]에 "content" 필드가 없습니다.`);
            }
          }
        }
        break;

      case 'scene':
        if (!scene.narration) {
          warnings.push(`${prefix} (scene): "narration" 필드가 없습니다. 텍스트 없이 렌더링됩니다.`);
        }
        break;

      case 'dialogue':
        if (!scene.character) {
          errors.push(`${prefix} (dialogue): "character" 필드가 없습니다.`);
        }
        if (!scene.dialogue) {
          errors.push(`${prefix} (dialogue): "dialogue" 필드가 없습니다.`);
        }
        break;

      case 'composite':
        if (!scene.character_img) {
          warnings.push(`${prefix} (composite): "character_img" 필드가 없습니다.`);
        }
        break;

      case 'scene-title':
        if (!scene.time_code) {
          warnings.push(`${prefix} (scene-title): "time_code" 필드가 없습니다.`);
        }
        if (!scene.scene_title) {
          warnings.push(`${prefix} (scene-title): "scene_title" 필드가 없습니다.`);
        }
        break;
    }

    // SFX validation
    if (scene.sfx) {
      if (typeof scene.sfx !== 'string' && !Array.isArray(scene.sfx)) {
        errors.push(`${prefix}: sfx는 문자열 또는 배열이어야 합니다.`);
      }
      if (Array.isArray(scene.sfx)) {
        for (let j = 0; j < scene.sfx.length; j++) {
          const item = scene.sfx[j];
          if (!item.file) {
            errors.push(`${prefix}: sfx[${j}]에 "file" 필드가 없습니다.`);
          }
        }
      }
    }

    // Duration warnings for long scenes
    if (scene.duration > 15) {
      warnings.push(`${prefix}: duration이 ${scene.duration}초로 매우 깁니다.`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}
