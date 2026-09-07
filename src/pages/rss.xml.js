import { getCollection } from 'astro:content';
import { siteConfig } from '../data/site.ts';
import { sortByDateDesc } from '../lib/dates.ts';
import { absoluteUrl } from '../lib/seo.ts';
import { getCategory } from '../lib/categories.ts';

/** @type {import('astro').APIRoute} */
export const GET = async () => {
  const posts = sortByDateDesc(await getCollection('blog', ({ data }) => !data.draft));

  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.id}/`);
      const category = getCategory(post.data.category).name;
      return `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
      <category><![CDATA[${category}]]></category>
      <description><![CDATA[${post.data.description}]]></description>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name}</title>
    <link>${siteConfig.url}</link>
    <description>${siteConfig.description}</description>
    <language>en-ca</language>
    <atom:link href="${absoluteUrl('/rss.xml')}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
};
