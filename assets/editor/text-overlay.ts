/**
 * Text overlay filter generator for ffmpeg
 * Generates drawtext and drawbox filter strings for video text overlays
 */

const FONT_PATH = '/System/Library/Fonts/AppleSDGothicNeo.ttc';

export interface TextConfig {
  text: string;
  x?: number | string; // px or 'center'
  y?: number;
  fontsize?: number;
  fontcolor?: string;
  appearTime?: number; // seconds
  disappearTime?: number; // seconds
}

/**
 * Escape special characters for ffmpeg drawtext filter
 * @param text - Text to escape
 * @returns Escaped text safe for ffmpeg
 */
export function escapeText(text: string): string {
  // Dual-level escaping for ffmpeg filter_complex drawtext text= value (unquoted).
  // Level 2 (filtergraph): \, for comma, \; for semicolon, \' for quote, \[ \] for brackets
  // Level 1 (filter options): \\: for colon (L2 \\ → \, then L1 \: → :)
  // Backslash: \\\\ (L2 \\\\ → \\, L1 \\ → \)
  return text
    .replace(/\\/g, '\\\\\\\\')    // \ → \\\\ (L2→\\, L1→\)
    .replace(/:/g, '\\\\:')        // : → \\: (L2→\:, L1→:)
    .replace(/'/g, "\\'")           // ' → \' (L2→')
    .replace(/,/g, '\\,')           // , → \, (L2→,)
    .replace(/;/g, '\\;')           // ; → \; (L2→;)
    .replace(/\[/g, '\\[')          // [ → \[ (L2→[)
    .replace(/]/g, '\\]');          // ] → \] (L2→])
}

/**
 * Generate centered title text filters
 * @param texts - Array of text configurations
 * @param duration - Total video duration in seconds
 * @returns Array of drawtext filter strings
 */
export function getTitleTextFilters(texts: TextConfig[], duration: number): string[] {
  return texts.map(config => {
    const {
      text,
      x = '(w-text_w)/2', // Center by default
      y = 400,
      fontsize = 48,
      fontcolor = 'white',
      appearTime = 0,
      disappearTime = duration
    } = config;

    const escapedText = escapeText(text);
    const xPos = x === 'center' ? '(w-text_w)/2' : x;

    let filter = `drawtext=fontfile='${FONT_PATH}':text=${escapedText}:`;
    filter += `fontsize=${fontsize}:fontcolor=${fontcolor}:`;
    filter += `x=${xPos}:y=${y}`;

    // Add timing if not default (0 to end)
    if (appearTime > 0 || disappearTime < duration) {
      filter += `:enable='between(t,${appearTime},${disappearTime})'`;
    }

    return filter;
  });
}

/**
 * Generate dialogue filters (character name + dialogue text with background box)
 * @param characterName - Name of speaking character
 * @param characterColor - Color for character name
 * @param dialogue - Dialogue text
 * @param duration - Total video duration in seconds
 * @returns Array of filter strings [drawbox, name_text, dialogue_text]
 */
export function getDialogueFilters(
  characterName: string,
  characterColor: string,
  dialogue: string,
  duration: number
): string[] {
  const appearTime = 0.8;
  const boxY = 900;
  const boxHeight = 180;
  const nameY = 920;
  const dialogueY = 965;
  const leftMargin = 80;

  const filters: string[] = [];

  // Background box
  filters.push(
    `drawbox=x=0:y=${boxY}:w=iw:h=${boxHeight}:color=black@0.6:t=fill` +
    `:enable='between(t,${appearTime},${duration})'`
  );

  // Character name
  filters.push(
    `drawtext=fontfile='${FONT_PATH}':text=${escapeText(characterName)}:` +
    `fontsize=36:fontcolor=${characterColor}:` +
    `x=${leftMargin}:y=${nameY}` +
    `:enable='between(t,${appearTime},${duration})'`
  );

  // Dialogue text
  filters.push(
    `drawtext=fontfile='${FONT_PATH}':text=${escapeText(dialogue)}:` +
    `fontsize=28:fontcolor=white:` +
    `x=${leftMargin}:y=${dialogueY}` +
    `:enable='between(t,${appearTime},${duration})'`
  );

  return filters;
}

/**
 * Generate narration text filters (centered bottom text with background)
 * @param text - Narration text
 * @param duration - Total video duration in seconds
 * @param appear - When to appear (default 0.5)
 * @param bgOpacity - Background opacity 0-1 (default 0.7)
 * @returns Array of filter strings [drawbox, text]
 */
export function getNarrationFilters(
  text: string,
  duration: number,
  appear: number = 0.5,
  bgOpacity: number = 0.7
): string[] {
  const boxY = 920;
  const boxHeight = 120;
  const textY = 950;

  const filters: string[] = [];

  // Background box
  filters.push(
    `drawbox=x=0:y=${boxY}:w=iw:h=${boxHeight}:color=black@${bgOpacity}:t=fill` +
    `:enable='between(t,${appear},${duration})'`
  );

  // Centered text
  filters.push(
    `drawtext=fontfile='${FONT_PATH}':text=${escapeText(text)}:` +
    `fontsize=32:fontcolor=white:` +
    `x=(w-text_w)/2:y=${textY}` +
    `:enable='between(t,${appear},${duration})'`
  );

  return filters;
}

/**
 * Generate scene info filters (character intro style with name/role/tagline)
 * @param name - Character or scene name
 * @param role - Role or subtitle (appears in cyan)
 * @param tagline - Additional tagline (appears in gray)
 * @param duration - Total video duration in seconds
 * @returns Array of filter strings [drawbox, name, role, tagline]
 */
export function getSceneInfoFilters(
  name: string,
  role: string,
  tagline: string,
  duration: number
): string[] {
  const appearTime = 0.8;
  const boxY = 880;
  const boxHeight = 200;
  const nameY = 910;
  const roleY = 965;
  const taglineY = 1005;
  const leftMargin = 80;

  const filters: string[] = [];

  // Background bar
  filters.push(
    `drawbox=x=0:y=${boxY}:w=iw:h=${boxHeight}:color=black@0.7:t=fill` +
    `:enable='between(t,${appearTime},${duration})'`
  );

  // Name (large, white)
  filters.push(
    `drawtext=fontfile='${FONT_PATH}':text=${escapeText(name)}:` +
    `fontsize=48:fontcolor=white:` +
    `x=${leftMargin}:y=${nameY}` +
    `:enable='between(t,${appearTime},${duration})'`
  );

  // Role (cyan)
  filters.push(
    `drawtext=fontfile='${FONT_PATH}':text=${escapeText(role)}:` +
    `fontsize=32:fontcolor=cyan:` +
    `x=${leftMargin}:y=${roleY}` +
    `:enable='between(t,${appearTime},${duration})'`
  );

  // Tagline (gray)
  filters.push(
    `drawtext=fontfile='${FONT_PATH}':text=${escapeText(tagline)}:` +
    `fontsize=28:fontcolor=gray:` +
    `x=${leftMargin}:y=${taglineY}` +
    `:enable='between(t,${appearTime},${duration})'`
  );

  return filters;
}

/**
 * Combine multiple filter arrays into a single filter string
 * @param filterArrays - Arrays of filter strings to combine
 * @returns Single filter string with all filters joined by commas
 */
export function combineFilters(...filterArrays: string[][]): string {
  return filterArrays.flat().join(',');
}
