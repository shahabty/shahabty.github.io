export const CATEGORY_IDS = ['field-notes', 'quiet-thoughts', 'frame-notes'] as const;

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
    path: '/blog/category/field-notes/',
  },
  'quiet-thoughts': {
    id: 'quiet-thoughts',
    name: 'Quiet Thoughts',
    description: 'Personal writing, slower questions I don’t always have answers for.',
    path: '/blog/category/quiet-thoughts/',
  },
  'frame-notes': {
    id: 'frame-notes',
    name: 'Frame Notes',
    description: 'Film and theatre, and how stories connect to science and the future.',
    path: '/blog/category/frame-notes/',
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
