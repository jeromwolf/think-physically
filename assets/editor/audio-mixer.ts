/**
 * Audio Mixer Module for YAML Video Editor
 *
 * Generates ffmpeg audio filter strings for:
 * - Default BGM (trim, volume, fade in/out)
 * - SFX tracks (delay, volume, loop)
 * - Scene-specific BGM overrides with crossfade
 * - Final amix combining all audio sources
 *
 * Usage: called from render.ts to produce the [outa] filter chain.
 */

// ============================================================================
// Types
// ============================================================================

export interface AudioInput {
  path: string;       // resolved file path
  inputIdx: number;   // ffmpeg input index
}

export interface SFXTrack {
  inputIdx: number;
  delay: number;      // absolute delay in seconds from timeline start
  volume: number;
  loop: boolean;
  duration: number;   // scene duration for looping
}

export interface BGMSegment {
  inputIdx: number;
  startTime: number;        // when this BGM starts in the timeline
  endTime: number;          // when this BGM ends
  volume: number;
  crossfadeDuration: number; // crossfade with previous BGM segment
}

export interface NarrationTrack {
  inputIdx: number;
  startTime: number;      // absolute position in timeline
  audioDuration: number;   // actual audio duration
  volume: number;          // narration volume (default 1.0)
}

export interface AudioMixConfig {
  defaultBGM: AudioInput;
  bgmVolume: number;
  fadeIn: number;
  fadeOut: number;
  sceneOffset: number;
  renderDuration: number;
  sfxTracks: SFXTrack[];
  bgmSegments: BGMSegment[];  // scene-specific BGM overrides
  narrationTracks: NarrationTrack[];  // TTS narration tracks
}

// ============================================================================
// Internal Helpers
// ============================================================================

/**
 * Build the default BGM filter chain: loop -> atrim -> asetpts -> volume -> fade in/out
 * aloop ensures BGM covers the full render duration even if source file is shorter
 */
function buildDefaultBGMFilter(
  audioIdx: number,
  sceneOffset: number,
  renderDuration: number,
  volume: number,
  fadeIn: number,
  fadeOut: number,
  label: string,
): string {
  return (
    `[${audioIdx}:a]` +
    `aloop=loop=-1:size=2e+09,` +
    `atrim=${sceneOffset}:${sceneOffset + renderDuration},` +
    `asetpts=PTS-STARTPTS,` +
    `volume=${volume},` +
    `afade=t=in:st=0:d=${fadeIn},` +
    `afade=t=out:st=${renderDuration - fadeOut}:d=${fadeOut}` +
    `[${label}]`
  );
}

/**
 * Build a single SFX track filter: optional loop -> adelay -> volume
 */
function buildSFXFilter(sfx: SFXTrack, index: number): string {
  const delayMs = Math.floor(sfx.delay * 1000);
  const label = `sfx${index}`;

  if (sfx.loop) {
    return (
      `[${sfx.inputIdx}:a]` +
      `aloop=loop=-1:size=2e+09,` +
      `atrim=0:${sfx.duration},` +
      `adelay=${delayMs}|${delayMs},` +
      `volume=${sfx.volume}` +
      `[${label}]`
    );
  }

  return (
    `[${sfx.inputIdx}:a]` +
    `adelay=${delayMs}|${delayMs},` +
    `volume=${sfx.volume}` +
    `[${label}]`
  );
}

/**
 * Build a narration track filter: adelay to position + volume
 */
function buildNarrationFilter(track: NarrationTrack, index: number): string {
  const delayMs = Math.floor(track.startTime * 1000);
  const label = `nar${index}`;
  return (
    `[${track.inputIdx}:a]` +
    `adelay=${delayMs}|${delayMs},` +
    `volume=${track.volume}` +
    `[${label}]`
  );
}

/**
 * Build a scene-specific BGM segment filter:
 * atrim to segment duration -> volume -> adelay to position in timeline -> fade edges
 */
function buildBGMSegmentFilter(segment: BGMSegment, index: number): string {
  const segmentDuration = segment.endTime - segment.startTime;
  const delayMs = Math.floor(segment.startTime * 1000);
  const label = `bgmseg${index}`;

  // Trim the BGM source to the segment duration, apply volume,
  // delay to its position in the timeline, and add fade in/out for crossfade
  const parts: string[] = [
    `[${segment.inputIdx}:a]`,
    `atrim=0:${segmentDuration},`,
    `asetpts=PTS-STARTPTS,`,
    `volume=${segment.volume}`,
  ];

  // Apply crossfade edges: fade in at start, fade out at end
  if (segment.crossfadeDuration > 0) {
    parts.push(
      `,afade=t=in:st=0:d=${segment.crossfadeDuration}`,
      `,afade=t=out:st=${segmentDuration - segment.crossfadeDuration}:d=${segment.crossfadeDuration}`,
    );
  }

  // Position in the timeline via adelay
  if (delayMs > 0) {
    parts.push(`,adelay=${delayMs}|${delayMs}`);
  }

  parts.push(`[${label}]`);

  return parts.join('');
}

// ============================================================================
// Public API
// ============================================================================

/**
 * Build all audio filter strings that produce the [outa] output label.
 *
 * Handles three audio source types:
 * 1. Default BGM - always present, trimmed/faded for the render window
 * 2. SFX tracks - per-scene sound effects with delay/volume/loop
 * 3. BGM segments - scene-specific BGM overrides with crossfade support
 *
 * When no BGM segments and no SFX exist, produces a simple single-filter BGM chain.
 * When BGM segments are present, the default BGM is split into gaps between
 * segments and crossfaded with the override segments.
 *
 * @returns Array of filter strings to append to filterParts (produces [outa])
 */
export function buildAudioFilters(config: AudioMixConfig): string[] {
  const {
    defaultBGM,
    bgmVolume,
    fadeIn,
    fadeOut,
    sceneOffset,
    renderDuration,
    sfxTracks,
    bgmSegments,
    narrationTracks = [],
  } = config;

  const filterParts: string[] = [];
  const hasSFX = sfxTracks.length > 0;
  const hasBGMSegments = bgmSegments.length > 0;
  const hasNarration = narrationTracks.length > 0;

  // ---- Case 1: No SFX, no BGM segments, no narration -> simple BGM filter ----
  if (!hasSFX && !hasBGMSegments && !hasNarration) {
    filterParts.push(
      buildDefaultBGMFilter(
        defaultBGM.inputIdx, sceneOffset, renderDuration,
        bgmVolume, fadeIn, fadeOut, 'outa',
      ),
    );
    return filterParts;
  }

  // ---- Build default BGM track (labeled [bgm]) ----
  filterParts.push(
    buildDefaultBGMFilter(
      defaultBGM.inputIdx, sceneOffset, renderDuration,
      bgmVolume, fadeIn, fadeOut, 'bgm',
    ),
  );

  // Track all labels to mix together at the end
  const mixLabels: string[] = ['[bgm]'];

  // ---- Collect all ducking windows (BGM segments + narration) ----
  // Note: startTime values are already relative to the render window, no need to subtract sceneOffset
  const duckWindows: { start: number; end: number; level: number }[] = [];

  if (hasBGMSegments) {
    for (const seg of bgmSegments) {
      const segStart = seg.startTime;
      const segEnd = seg.endTime;
      if (segStart >= 0 && segStart < renderDuration) {
        const clampedEnd = Math.min(segEnd, renderDuration);
        duckWindows.push({ start: segStart, end: clampedEnd, level: 0.2 });
      }
    }
  }

  if (hasNarration) {
    for (const nar of narrationTracks) {
      const narStart = nar.startTime;
      const narEnd = narStart + nar.audioDuration;
      if (narStart >= 0 && narStart < renderDuration) {
        const clampedNarEnd = Math.min(narEnd, renderDuration);
        duckWindows.push({ start: narStart, end: clampedNarEnd, level: 0.10 });
      }
    }
  }

  // ---- Apply ducking to default BGM if needed ----
  if (duckWindows.length > 0) {
    // Re-build the default BGM with volume ducking
    filterParts.pop(); // Remove the simple [bgm] we just added
    mixLabels.pop();   // Remove [bgm] from mix

    const duckFilters: string[] = [];
    for (const win of duckWindows) {
      duckFilters.push(
        `volume=${win.level}:enable='between(t,${win.start},${win.end})'`
      );
    }

    filterParts.push(
      `[${defaultBGM.inputIdx}:a]` +
      `aloop=loop=-1:size=2e+09,` +
      `atrim=${sceneOffset}:${sceneOffset + renderDuration},` +
      `asetpts=PTS-STARTPTS,` +
      `volume=${bgmVolume},` +
      `afade=t=in:st=0:d=${fadeIn},` +
      `afade=t=out:st=${renderDuration - fadeOut}:d=${fadeOut},` +
      duckFilters.join(',') +
      `[bgm]`
    );
    mixLabels.push('[bgm]');
  }

  // ---- BGM segments: scene-specific overrides ----
  if (hasBGMSegments) {
    // Add each BGM segment as a separate mix input
    for (let i = 0; i < bgmSegments.length; i++) {
      filterParts.push(buildBGMSegmentFilter(bgmSegments[i], i));
      mixLabels.push(`[bgmseg${i}]`);
    }
  }

  // ---- SFX tracks ----
  for (let i = 0; i < sfxTracks.length; i++) {
    filterParts.push(buildSFXFilter(sfxTracks[i], i));
    mixLabels.push(`[sfx${i}]`);
  }

  // ---- Narration tracks ----
  for (let i = 0; i < narrationTracks.length; i++) {
    filterParts.push(buildNarrationFilter(narrationTracks[i], i));
    mixLabels.push(`[nar${i}]`);
  }

  // ---- Final mix: staged mixing to prevent volume dilution ----
  // Group by type and mix separately to avoid dividing volume by large input count
  const bgmLabels = mixLabels.filter(l => l.startsWith('[bgm'));
  const sfxLabels = mixLabels.filter(l => l.startsWith('[sfx'));
  const narLabels = mixLabels.filter(l => l.startsWith('[nar'));

  const finalLabels: string[] = [];

  // BGM group (includes [bgm] and [bgmseg0], [bgmseg1], etc.)
  if (bgmLabels.length === 1) {
    finalLabels.push(bgmLabels[0]);
  } else if (bgmLabels.length > 1) {
    filterParts.push(
      `${bgmLabels.join('')}amix=inputs=${bgmLabels.length}:duration=first:dropout_transition=0:normalize=0[bgm_mix]`
    );
    finalLabels.push('[bgm_mix]');
  }

  // SFX group
  if (sfxLabels.length === 1) {
    finalLabels.push(sfxLabels[0]);
  } else if (sfxLabels.length > 1) {
    filterParts.push(
      `${sfxLabels.join('')}amix=inputs=${sfxLabels.length}:duration=longest:dropout_transition=0:normalize=0[sfx_mix]`
    );
    finalLabels.push('[sfx_mix]');
  }

  // Narration group
  if (narLabels.length === 1) {
    finalLabels.push(narLabels[0]);
  } else if (narLabels.length > 1) {
    filterParts.push(
      `${narLabels.join('')}amix=inputs=${narLabels.length}:duration=longest:dropout_transition=0:normalize=0[nar_mix]`
    );
    finalLabels.push('[nar_mix]');
  }

  // Final mix: only 2-4 inputs (BGM + SFX + Narration groups)
  if (finalLabels.length === 1) {
    // Only one group - just rename it to [outa]
    const label = finalLabels[0];
    const labelName = label.slice(1, -1); // remove brackets
    // Replace the last filter's output label with [outa]
    const lastIdx = filterParts.length - 1;
    filterParts[lastIdx] = filterParts[lastIdx].replace(`[${labelName}]`, '[outa]');
  } else {
    // Mix the final groups together
    const mixInputStr = finalLabels.join('');
    filterParts.push(
      `${mixInputStr}amix=inputs=${finalLabels.length}:duration=first:dropout_transition=0:normalize=0[outa]`
    );
  }

  return filterParts;
}
