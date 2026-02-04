# Episode Configuration Files

This directory contains JSON configuration files for each episode's asset requirements. These files drive the automated asset preparation system.

## File Structure

Each episode has a single JSON file: `ep{NN}.json` (e.g., `ep03.json`, `ep04.json`)

## JSON Schema

```json
{
  "episode": 3,
  "title": "에피소드 제목",
  "synopsisPath": "app/ideas/mars-ticket/episode-3/page.tsx",
  "scenes": [
    {
      "id": "ep03-장면아이디",
      "description": "장면 설명",
      "timeCode": "T+00:00",
      "mood": "tense|calm|emotional|action|mystery",
      "filePath": "scenes/ep03/ep03-장면아이디.png",
      "gemini": {
        "shotType": "Cinematic wide shot",
        "visualDetails": "Detailed visual description...",
        "lighting": "Lighting description...",
        "atmosphere": "mood keywords"
      }
    }
  ],
  "sfx": [
    {
      "keyword": "sound-effect-name",
      "koreanDesc": "한국어 설명",
      "searchQuery": "freesound search query"
    }
  ],
  "bgmMoods": [
    {
      "mood": "tense",
      "description": "설명",
      "searchQuery": "pixabay search query"
    }
  ]
}
```

## Adding a New Episode

1. **Create the config file:**
   ```bash
   cp ep03.json ep04.json
   ```

2. **Edit the new file:**
   - Update `episode` number
   - Update `title`
   - Update `synopsisPath`
   - Define all scene requirements
   - Define SFX needs
   - Define BGM moods

3. **Test the config:**
   ```bash
   npx tsx ../asset-analyzer.ts 4
   npx tsx ../asset-prep.ts ep04 --analyze
   ```

4. **Generate assets:**
   ```bash
   npx tsx ../asset-prep.ts ep04 --prompts
   npx tsx ../asset-prep.ts ep04 --sfx
   npx tsx ../asset-prep.ts ep04 --bgm
   ```

## Scene Fields

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique scene identifier (e.g., `ep04-scene-name`) |
| `description` | Yes | Brief Korean description |
| `timeCode` | Yes | Relative timestamp (e.g., `T+00:00`) |
| `mood` | Yes | Scene mood for BGM matching |
| `filePath` | Yes | Relative path from assets/ directory |
| `gemini` | Optional | Rich Gemini prompt details (recommended) |

## Gemini Fields

Providing detailed Gemini fields produces higher quality image prompts:

| Field | Description |
|-------|-------------|
| `shotType` | Camera angle/framing (e.g., "Wide shot", "Close-up") |
| `visualDetails` | Rich visual description for image generation |
| `lighting` | Lighting setup and mood |
| `atmosphere` | Comma-separated mood keywords |

If `gemini` is not provided, a generic fallback prompt will be generated.

## SFX/BGM Keywords

- **SFX `keyword`**: Must match existing library keys or be unique for new sounds
- **SFX `searchQuery`**: Optimized for Freesound.org API search
- **BGM `mood`**: Should match scene moods for automatic matching
- **BGM `searchQuery`**: Optimized for Pixabay Music search

## Examples

See `ep03.json` for a complete reference implementation with:
- 10 scenes with full Gemini details
- 11 SFX effects
- 4 BGM mood tracks
