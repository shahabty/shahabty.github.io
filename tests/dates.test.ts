import { describe, expect, it } from 'vitest';
import { formatDate, sortByDateDesc, toIsoDate } from '../src/lib/dates';

describe('dates', () => {
  it('formats dates in a stable UTC calendar form', () => {
    expect(formatDate(new Date('2026-09-07T12:00:00.000Z'))).toBe('September 7, 2026');
  });

  it('returns ISO calendar dates', () => {
    expect(toIsoDate(new Date('2026-09-07T23:15:00.000Z'))).toBe('2026-09-07');
  });

  it('sorts posts newest first', () => {
    const sorted = sortByDateDesc([
      { id: 'a', data: { pubDate: new Date('2026-01-01') } },
      { id: 'b', data: { pubDate: new Date('2026-09-01') } },
      { id: 'c', data: { pubDate: new Date('2026-03-01') } },
    ]);

    expect(sorted.map((item) => item.data.pubDate.toISOString().slice(0, 10))).toEqual([
      '2026-09-01',
      '2026-03-01',
      '2026-01-01',
    ]);
  });

  it('breaks same-day ties by id for stable listings', () => {
    const sorted = sortByDateDesc([
      { id: 'the-dream-that-makes-us-human', data: { pubDate: new Date('2026-09-08') } },
      { id: 'agi-is-here-were-just-arguing-about-the-label', data: { pubDate: new Date('2026-09-08') } },
      { id: 'four-ways-this-market-could-end', data: { pubDate: new Date('2026-09-08') } },
    ]);

    expect(sorted.map((item) => item.id)).toEqual([
      'agi-is-here-were-just-arguing-about-the-label',
      'four-ways-this-market-could-end',
      'the-dream-that-makes-us-human',
    ]);
  });
});