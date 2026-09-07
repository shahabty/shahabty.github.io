import { describe, expect, it } from 'vitest';
import { siteConfig } from '../src/data/site';
import { projects } from '../src/data/projects';

describe('site content invariants', () => {
  it('keeps required public profile links', () => {
    expect(siteConfig.links.github).toBe('https://github.com/shahabty');
    expect(siteConfig.links.linkedin).toBe('https://www.linkedin.com/in/shahab-nabavi/');
    expect(siteConfig.links.scholar).toContain('9jxhbU56FTEC');
  });

  it('features only real github project urls', () => {
    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(project.url.startsWith('https://github.com/shahabty/')).toBe(true);
      expect(project.name.length).toBeGreaterThan(0);
      expect(project.description.length).toBeGreaterThan(0);
    }
  });
});
