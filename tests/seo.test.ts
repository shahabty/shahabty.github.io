import { describe, expect, it } from 'vitest';
import {
  absoluteAssetUrl,
  absoluteUrl,
  blogPostingJsonLd,
  buildLlmsTxt,
  buildMeta,
  pageTitle,
  personJsonLd,
  websiteJsonLd,
} from '../src/lib/seo';

describe('seo helpers', () => {
  it('builds absolute urls from site origin', () => {
    expect(absoluteUrl('/blog')).toBe('https://shahabty.github.io/blog');
    expect(absoluteUrl('publications')).toBe('https://shahabty.github.io/publications');
  });

  it('builds absolute asset urls for local avatars', () => {
    expect(absoluteAssetUrl('/images/shahab.jpg')).toBe(
      'https://shahabty.github.io/images/shahab.jpg',
    );
  });

  it('composes page titles with the site name', () => {
    expect(pageTitle('Publications')).toBe('Publications · Shahab Nabavi');
    expect(pageTitle('Shahab Nabavi')).toBe('Shahab Nabavi');
  });

  it('builds open graph friendly meta', () => {
    const meta = buildMeta({
      title: 'Hello',
      description: 'A note',
      path: '/blog/hello/',
      type: 'article',
      tags: ['Field Notes'],
    });

    expect(meta.canonical).toBe('https://shahabty.github.io/blog/hello/');
    expect(meta.openGraph.type).toBe('article');
    expect(meta.openGraph.tags).toContain('Field Notes');
    expect(meta.openGraph.image).toBe('https://shahabty.github.io/images/shahab.jpg');
  });

  it('includes person sameAs social profiles', () => {
    const person = personJsonLd();
    expect(person.sameAs).toEqual([
      'https://github.com/shahabty',
      'https://www.linkedin.com/in/shahab-nabavi/',
      'https://scholar.google.com/citations?user=9jxhbU56FTEC&hl=en',
    ]);
  });

  it('creates website and blog posting json-ld', () => {
    expect(websiteJsonLd()['@type']).toBe('WebSite');
    const post = blogPostingJsonLd({
      title: 'A film note',
      description: 'A story and science',
      path: '/blog/a-film-note/',
      pubDate: new Date('2026-09-05T00:00:00.000Z'),
      categoryName: 'Frame Notes',
      tags: ['film'],
    });
    expect(post['@type']).toBe('BlogPosting');
    expect(post.articleSection).toBe('Frame Notes');
  });

  it('builds llms.txt with post inventory', () => {
    const text = buildLlmsTxt([
      {
        title: 'Hello',
        path: '/blog/hello/',
        description: 'Intro',
        category: 'Quiet Thoughts',
      },
    ]);

    expect(text).toContain('# Shahab Nabavi');
    expect(text).toContain('## Blog posts');
    expect(text).toContain('[Quiet Thoughts] Hello:');
    expect(text).toContain('https://shahabty.github.io/blog/hello/');
    expect(text).toContain('/publications');
    expect(text).not.toContain('/about');
  });
});
