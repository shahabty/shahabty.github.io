import { siteConfig } from '../data/site';

export type MetaInput = {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
};

export function absoluteUrl(path = '/'): string {
  let normalized = path.startsWith('/') ? path : `/${path}`;
  const looksLikeFile = /\.[a-z0-9]+$/i.test(normalized);
  if (!looksLikeFile && !normalized.endsWith('/')) {
    normalized += '/';
  }
  return new URL(normalized, siteConfig.url).toString();
}

export function absoluteAssetUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }
  return absoluteUrl(pathOrUrl);
}

export function pageTitle(title: string, includeSiteName = true): string {
  if (!includeSiteName || title === siteConfig.name) {
    return title;
  }
  return `${title} · ${siteConfig.name}`;
}

export function buildMeta(input: MetaInput) {
  const url = absoluteUrl(input.path ?? '/');
  const title = pageTitle(input.title);
  const image = absoluteAssetUrl(input.image ?? siteConfig.author.avatar);

  return {
    title,
    description: input.description,
    canonical: url,
    openGraph: {
      title,
      description: input.description,
      url,
      type: input.type ?? 'website',
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      image,
      publishedTime: input.publishedTime,
      modifiedTime: input.modifiedTime,
      tags: input.tags ?? [],
    },
  };
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    url: siteConfig.url,
    image: absoluteAssetUrl(siteConfig.author.avatar),
    jobTitle: siteConfig.author.role,
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.author.company,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressCountry: 'CA',
    },
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.scholar,
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
  };
}

export function blogPostingJsonLd(input: {
  title: string;
  description: string;
  path: string;
  pubDate: Date;
  updatedDate?: Date;
  categoryName: string;
  tags?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    datePublished: input.pubDate.toISOString(),
    dateModified: (input.updatedDate ?? input.pubDate).toISOString(),
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(input.path),
    },
    url: absoluteUrl(input.path),
    articleSection: input.categoryName,
    keywords: input.tags?.join(', '),
    inLanguage: 'en-CA',
  };
}

export function buildLlmsTxt(posts: Array<{ title: string; path: string; description: string; category: string }>): string {
  const lines = [
    `# ${siteConfig.name}`,
    '',
    `> ${siteConfig.description}`,
    '',
    `Site: ${siteConfig.url}`,
    `Author: ${siteConfig.author.name}`,
    `Location: ${siteConfig.author.location}`,
    `Advisor: ${siteConfig.author.advisor.name} (${siteConfig.author.advisor.url})`,
    '',
    '## About',
    siteConfig.author.longBio.join(' '),
    '',
    '## Primary pages',
    `- Home: ${absoluteUrl('/')}`,
    `- Projects: ${absoluteUrl('/projects')}`,
    `- Publications: ${absoluteUrl('/publications')}`,
    `- Blog: ${absoluteUrl('/blog')}`,
    '',
    '## Social',
    `- GitHub: ${siteConfig.links.github}`,
    `- LinkedIn: ${siteConfig.links.linkedin}`,
    `- Google Scholar: ${siteConfig.links.scholar}`,
    '',
    '## Blog posts',
  ];

  for (const post of posts) {
    lines.push(`- [${post.category}] ${post.title}: ${absoluteUrl(post.path)}. ${post.description}`);
  }

  lines.push('', '## Preferred citation');
  lines.push(`Please attribute ideas to ${siteConfig.author.name} (${siteConfig.url}).`);
  lines.push('');

  return lines.join('\n');
}
