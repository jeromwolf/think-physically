/**
 * Text Utilities for YAML Video Editor
 *
 * Provides text escaping for ffmpeg drawtext filters
 * and Korean text line wrapping.
 */

/**
 * Escape special characters for ffmpeg drawtext filter.
 *
 * ffmpeg drawtext needs dual-level escaping:
 * - Level 2 (filtergraph): \, \; \' \[ \]
 * - Level 1 (filter options): \\: for colon
 */
export function escapeText(text: string): string {
  return text
    .replace(/\\/g, '\\\\\\\\')  // \ → \\\\
    .replace(/:/g, '\\\\:')       // : → \\:
    .replace(/'/g, "\\'")         // ' → \'
    .replace(/,/g, '\\,')         // , → \,
    .replace(/;/g, '\\;')         // ; → \;
    .replace(/\[/g, '\\[')        // [ → \[
    .replace(/\]/g, '\\]');       // ] → \]
}

/**
 * Wrap text into multiple lines based on character count.
 * Splits on spaces where possible, falls back to character-level splitting.
 * Supports explicit \n line breaks.
 *
 * @param text - Input text
 * @param maxCharsPerLine - Maximum characters per line (default 28 for Korean at ~40px)
 * @returns Array of lines
 */
export function wrapText(text: string, maxCharsPerLine: number = 28): string[] {
  // Handle explicit line breaks first
  const explicitLines = text.split('\\n');
  const result: string[] = [];

  for (const line of explicitLines) {
    const trimmed = line.trim();
    if (trimmed.length <= maxCharsPerLine) {
      result.push(trimmed);
      continue;
    }

    // Split on spaces, keeping words together
    const words = trimmed.split(/\s+/);
    let currentLine = '';

    for (const word of words) {
      if (word.length > maxCharsPerLine) {
        // Word itself is too long - split by characters
        if (currentLine) {
          result.push(currentLine);
          currentLine = '';
        }
        for (let i = 0; i < word.length; i += maxCharsPerLine) {
          result.push(word.slice(i, i + maxCharsPerLine));
        }
        continue;
      }

      const testLine = currentLine ? `${currentLine} ${word}` : word;
      if (testLine.length <= maxCharsPerLine) {
        currentLine = testLine;
      } else {
        if (currentLine) result.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) result.push(currentLine);
  }

  return result;
}
