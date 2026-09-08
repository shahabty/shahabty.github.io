import { describe, expect, it } from 'vitest';
import { getBuildId, withBuildId } from '../src/lib/buildId';

describe('buildId', () => {
  it('defaults to local outside CI', () => {
    expect(getBuildId()).toBeTruthy();
  });

  it('appends a deploy query without dropping trailing slash', () => {
    const href = withBuildId('/blog/');
    expect(href.startsWith('/blog/?')).toBe(true);
    expect(href).toContain('b=');
  });

  it('preserves category paths', () => {
    const href = withBuildId('/blog/category/quiet-thoughts/');
    expect(href.startsWith('/blog/category/quiet-thoughts/?')).toBe(true);
  });
});
