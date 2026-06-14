/**
 * Split a description paragraph into bullet points on sentence boundaries.
 * Mirrors the original site's parseToBulletPoints behaviour (split on ".").
 */
export function toBullets(text: string): string[] {
  if (!text) return []
  return text
    .split('.')
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0)
}
