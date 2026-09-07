import { getCollection } from 'astro:content';
import { getCategory } from '../lib/categories.ts';
import { sortByDateDesc } from '../lib/dates.ts';
import { buildLlmsTxt } from '../lib/seo.ts';

export const prerender = true;

/** @type {import('astro').APIRoute} */
export const GET = async () => {
  const posts = sortByDateDesc(await getCollection('blog', ({ data }) => !data.draft));
  const body = buildLlmsTxt(
    posts.map((post) => ({
      title: post.data.title,
      path: `/blog/${post.id}/`,
      description: post.data.description,
      category: getCategory(post.data.category).name,
    })),
  );

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
