import { describe, expect, it } from 'vitest';
import { patents, publications } from '../src/data/publications';
import { siteConfig } from '../src/data/site';
import { projects } from '../src/data/projects';

describe('site content invariants', () => {
  it('keeps required public profile links', () => {
    expect(siteConfig.links.github).toBe('https://github.com/shahabty');
    expect(siteConfig.links.linkedin).toBe('https://www.linkedin.com/in/shahab-nabavi/');
    expect(siteConfig.links.scholar).toContain('9jxhbU56FTEC');
  });

  it('features Grandpa Frank as the current project', () => {
    expect(projects).toHaveLength(1);
    expect(projects[0]?.name).toBe('Grandpa Frank');
    expect(projects[0]?.url).toBe('https://grandpafrank.com/');
  });

  it('lists papers and patents with real urls', () => {
    expect(publications.length).toBeGreaterThan(0);
    expect(patents.length).toBeGreaterThan(0);
    for (const item of [...publications, ...patents]) {
      expect(item.url.startsWith('http')).toBe(true);
      expect(item.title.length).toBeGreaterThan(0);
    }
  });

  it('does not keep an About nav item', () => {
    expect(siteConfig.nav.some((item) => item.href === '/about')).toBe(false);
    expect(siteConfig.nav.some((item) => item.href === '/publications/')).toBe(true);
  });
});
