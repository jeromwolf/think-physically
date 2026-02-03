/**
 * FFmpeg Filter Effects for Still Images
 *
 * This module generates ffmpeg filter strings for creating video effects
 * on still images, including Ken Burns-style zoom/pan effects and transitions.
 */

import { getTransitionFilter } from './transitions';

/**
 * Generates ffmpeg zoompan filter string for the specified effect
 *
 * @param effect - Effect name: 'zoom-in', 'zoom-out', 'slow-zoom', 'pan-left', 'pan-right', 'none'
 * @param duration - Duration in seconds
 * @param fps - Frames per second
 * @param width - Video width (default 1920)
 * @param height - Video height (default 1080)
 * @returns FFmpeg filter string
 */
export function getEffectFilter(effect: string, duration: number, fps: number, width: number = 1920, height: number = 1080): string {
  const frames = Math.floor(duration * fps);
  const baseScale = `scale=${width}x${height}:force_original_aspect_ratio=increase,crop=${width}:${height}`;

  switch (effect) {
    case 'zoom-in':
      // Slowly zoom into center (1.0 → 1.3) — linear interpolation for smooth motion
      return `zoompan=z='1+0.3*on/${frames}':d=${frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=${width}x${height}:fps=${fps}`;

    case 'zoom-out':
      // Start zoomed in, slowly zoom out (1.3 → 1.0) — linear interpolation
      return `zoompan=z='1.3-0.3*on/${frames}':d=${frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=${width}x${height}:fps=${fps}`;

    case 'slow-zoom':
      // Very subtle zoom in (1.0 → 1.15) — linear interpolation
      return `zoompan=z='1+0.15*on/${frames}':d=${frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=${width}x${height}:fps=${fps}`;

    case 'pan-left':
      // Pan from right to left with slight zoom
      return `zoompan=z=1.2:d=${frames}:x=iw/2-(iw/zoom/2)+(iw/zoom/2)*(1-on/${frames}):y=ih/2-(ih/zoom/2):s=${width}x${height}:fps=${fps}`;

    case 'pan-right':
      // Pan from left to right with slight zoom
      return `zoompan=z=1.2:d=${frames}:x=iw/2-(iw/zoom/2)-(iw/zoom/2)*(1-on/${frames}):y=ih/2-(ih/zoom/2):s=${width}x${height}:fps=${fps}`;

    case 'pan-up':
      // Pan from bottom to top with slight zoom
      return `zoompan=z=1.2:d=${frames}:x=iw/2-(iw/zoom/2):y=ih/2-(ih/zoom/2)+(ih/zoom/2)*(1-on/${frames}):s=${width}x${height}:fps=${fps}`;

    case 'pan-down':
      // Pan from top to bottom with slight zoom
      return `zoompan=z=1.2:d=${frames}:x=iw/2-(iw/zoom/2):y=ih/2-(ih/zoom/2)-(ih/zoom/2)*(1-on/${frames}):s=${width}x${height}:fps=${fps}`;

    case 'shake':
      // Camera shake effect for tension/impact scenes
      return `zoompan=z=1.05:d=${frames}:x='iw/2-(iw/zoom/2)+sin(on*0.8)*15':y='ih/2-(ih/zoom/2)+cos(on*1.1)*10':s=${width}x${height}:fps=${fps}`;

    case 'none':
    default:
      // No effect, just scale to target resolution
      return `zoompan=z=1:d=${frames}:x=iw/2-(iw/zoom/2):y=ih/2-(ih/zoom/2):s=${width}x${height}:fps=${fps}`;
  }
}

/**
 * Combines effect filter with fade transitions
 *
 * @param effect - Effect name
 * @param transition - Transition type
 * @param duration - Duration in seconds
 * @param fps - Frames per second
 * @param width - Video width (default 1920)
 * @param height - Video height (default 1080)
 * @returns Complete filter string combining effect and fades
 */
export function getCombinedFilter(
  effect: string,
  transition: string,
  duration: number,
  fps: number,
  width: number = 1920,
  height: number = 1080
): string {
  const effectFilter = getEffectFilter(effect, duration, fps, width, height);
  const { fadeIn, fadeOut } = getTransitionFilter(transition, duration);

  const filters = [effectFilter, fadeIn];
  if (fadeOut) {
    filters.push(fadeOut);
  }

  return filters.join(',');
}
