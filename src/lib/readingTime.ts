const WORDS_PER_MINUTE = 220;

export function estimateReadingTimeMinutes(text: string, wordsPerMinute = WORDS_PER_MINUTE): number {
  const words = text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  if (words === 0) {
    return 1;
  }

  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function readingTimeLabel(minutes: number): string {
  return `${minutes} min read`;
}
