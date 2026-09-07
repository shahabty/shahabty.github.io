import { getCollection } from 'astro:content';
import { getCategory } from '../../lib/categories.ts';
import { toIsoDate } from '../../lib/dates.ts';
import { siteConfig } from '../../data/site.ts';
import { absoluteUrl } from '../../lib/seo.ts';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

/** @type {import('astro').APIRoute} */
export const GET = async ({ props }) => {
  const { post } = props;
  const category = getCategory(post.data.category);
  const htmlUrl = absoluteUrl(`/blog/${post.id}/`);
  const frontmatter = [
    `# ${post.data.title}`,
    '',
    `> ${post.data.description}`,
    '',
    `- Author: ${siteConfig.author.name}`,
    `- Date: ${toIsoDate(post.data.pubDate)}`,
    `- Category: ${category.name}`,
    `- Canonical: ${htmlUrl}`,
    `- Tags: ${post.data.tags.join(', ') || 'none'}`,
    '',
    '---',
    '',
    post.body?.trim() ?? '',
    '',
  ].join('\n');

  return new Response(frontmatter, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'X-Robots-Tag': 'all',
    },
  });
};
