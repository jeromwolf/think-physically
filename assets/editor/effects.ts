/**
 * FFmpeg Filter Effects for Still Images
 *
 * This module generates ffmpeg filter strings for creating video effects
 * on still images, including Ken Burns-style zoom/pan effects and transitions.
 */

/**
 * Generates ffmpeg zoompan filter string for the specified effect
 *
 * @param effect - Effect name: 'zoom-in', 'zoom-out', 'slow-zoom', 'pan-left', 'pan-right', 'none'
 * @param duration - Duration in seconds
 * @param fps - Frames per second
 * @returns FFmpeg filter string
 */
export function getEffectFilter(effect: string, duration: number, fps: number): string {
  const frames = Math.floor(duration * fps);
  const baseScale = 'scale=1920x1080:force_original_aspect_ratio=increase,crop=1920:1080';

  switch (effect) {
    case 'zoom-in':
      // Slowly zoom into center (1.0 → 1.3)
      return `zoompan=z='min(zoom+0.0015,1.3)':d=${frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=${fps}`;

    case 'zoom-out':
      // Start zoomed in, slowly zoom out (1.3 → 1.0)
      return `zoompan=z='if(lte(zoom,1.0),1.3,max(1.001,zoom-0.0015))':d=${frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=${fps}`;

    case 'slow-zoom':
      // Very subtle zoom in (1.0 → 1.15)
      return `zoompan=z='min(zoom+0.0008,1.15)':d=${frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=${fps}`;

    case 'pan-left':
      // Pan from right to left with slight zoom
      return `zoompan=z=1.2:d=${frames}:x='iw/2-(iw/zoom/2)+(iw/zoom/2)*(1-on/${frames})':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=${fps}`;

    case 'pan-right':
      // Pan from left to right with slight zoom
      return `zoompan=z=1.2:d=${frames}:x='iw/2-(iw/zoom/2)-(iw/zoom/2)*(1-on/${frames})':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=${fps}`;

    case 'none':
    default:
      // No effect, just scale to 1920x1080
      return `zoompan=z=1:d=${frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=${fps}`;
  }
}

/**
 * Generates fade filter strings for transitions
 *
 * @param transition - Transition type: 'fade', 'cut'
 * @param duration - Clip duration in seconds
 * @returns Object with fadeIn and fadeOut filter strings
 */
export function getTransitionFilter(
  transition: string,
  duration: number
): { fadeIn: string; fadeOut: string } {
  const fadeIn = 'fade=t=in:st=0:d=0.8';

  if (transition === 'fade') {
    const fadeStart = Math.max(0, duration - 0.8);
    const fadeOut = `fade=t=out:st=${fadeStart.toFixed(2)}:d=0.8`;
    return { fadeIn, fadeOut };
  }

  // 'cut' or any other transition - no fade out
  return { fadeIn, fadeOut: '' };
}

/**
 * Combines effect filter with fade transitions
 *
 * @param effect - Effect name
 * @param transition - Transition type
 * @param duration - Duration in seconds
 * @param fps - Frames per second
 * @returns Complete filter string combining effect and fades
 */
export function getCombinedFilter(
  effect: string,
  transition: string,
  duration: number,
  fps: number
): string {
  const effectFilter = getEffectFilter(effect, duration, fps);
  const { fadeIn, fadeOut } = getTransitionFilter(transition, duration);

  const filters = [effectFilter, fadeIn];
  if (fadeOut) {
    filters.push(fadeOut);
  }

  return filters.join(',');
}
