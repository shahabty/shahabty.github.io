import { describe, expect, it } from 'vitest';
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
    expect(projects[0]?.description.length).toBeGreaterThan(0);
  });
});
