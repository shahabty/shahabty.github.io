import { describe, expect, it } from 'vitest';
import { estimateReadingTimeMinutes, readingTimeLabel } from '../src/lib/readingTime';

describe('readingTime', () => {
  it('returns at least one minute for empty text', () => {
    expect(estimateReadingTimeMinutes('')).toBe(1);
    expect(estimateReadingTimeMinutes('   ')).toBe(1);
  });

  it('estimates minutes from word count', () => {
    const words = Array.from({ length: 440 }, () => 'word').join(' ');
    expect(estimateReadingTimeMinutes(words)).toBe(2);
  });

  it('formats a readable label', () => {
    expect(readingTimeLabel(3)).toBe('3 min read');
  });
});
