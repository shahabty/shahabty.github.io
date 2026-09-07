export const CATEGORY_IDS = ['field-notes', 'quiet-thoughts', 'life-outside'] as const;

export type CategoryId = (typeof CATEGORY_IDS)[number];

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
  path: string;
};

export const categories: Record<CategoryId, Category> = {
  'field-notes': {
    id: 'field-notes',
    name: 'Field Notes',
    description: 'Thoughts from working in AI and machine learning.',
    path: '/blog/category/field-notes',
  },
  'quiet-thoughts': {
    id: 'quiet-thoughts',
    name: 'Quiet Thoughts',
    description: 'Personal writing, slower questions I don’t always have answers for.',
    path: '/blog/category/quiet-thoughts',
  },
  'life-outside': {
    id: 'life-outside',
    name: 'Life Outside',
    description: 'Walking, outdoors, and the parts of life that keep work in perspective.',
    path: '/blog/category/life-outside',
  },
};

export function isCategoryId(value: string): value is CategoryId {
  return (CATEGORY_IDS as readonly string[]).includes(value);
}

export function getCategory(id: CategoryId): Category {
  return categories[id];
}

export function listCategories(): Category[] {
  return CATEGORY_IDS.map((id) => categories[id]);
}
