import { describe, expect, it } from 'vitest';
import {
  CATEGORY_IDS,
  getCategory,
  isCategoryId,
  listCategories,
} from '../src/lib/categories';

describe('categories', () => {
  it('exposes the three public category ids', () => {
    expect(CATEGORY_IDS).toEqual(['field-notes', 'quiet-thoughts', 'life-outside']);
  });

  it('validates category ids', () => {
    expect(isCategoryId('field-notes')).toBe(true);
    expect(isCategoryId('life-outside')).toBe(true);
    expect(isCategoryId('random')).toBe(false);
  });

  it('returns named metadata for each category', () => {
    expect(getCategory('field-notes').name).toBe('Field Notes');
    expect(getCategory('quiet-thoughts').name).toBe('Quiet Thoughts');
    expect(getCategory('life-outside').name).toBe('Life Outside');
  });

  it('lists categories in stable order', () => {
    expect(listCategories().map((c) => c.id)).toEqual([...CATEGORY_IDS]);
  });
});
