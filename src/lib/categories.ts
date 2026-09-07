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
    description: 'AI, machine learning, and notes from the work of building intelligent systems.',
    path: '/blog/category/field-notes',
  },
  'quiet-thoughts': {
    id: 'quiet-thoughts',
    name: 'Quiet Thoughts',
    description: 'Personal reflections — softer questions about identity, ambition, and becoming.',
    path: '/blog/category/quiet-thoughts',
  },
  'life-outside': {
    id: 'life-outside',
    name: 'Life Outside',
    description: 'Outdoors, living well, and the human parts that keep the work honest.',
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
