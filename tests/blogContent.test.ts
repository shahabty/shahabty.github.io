import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const blogDir = path.join(process.cwd(), 'src/content/blog');

function listPostFiles(): string[] {
  return readdirSync(blogDir).filter((name) => name.endsWith('.md'));
}

describe('blog content', () => {
  it('keeps every markdown post non-draft with a category', () => {
    const files = listPostFiles();
    expect(files.length).toBeGreaterThanOrEqual(4);

    for (const file of files) {
      const raw = readFileSync(path.join(blogDir, file), 'utf8');
      expect(raw.startsWith('---')).toBe(true);
      expect(raw).toMatch(/^category:\s*(field-notes|quiet-thoughts|frame-notes)\s*$/m);
      expect(raw).not.toMatch(/^draft:\s*true\s*$/m);
      expect(raw).toMatch(/^tags:\s*\[.+\]\s*$/m);
    }
  });

  it('includes the AGI quiet-thoughts post', () => {
    expect(listPostFiles()).toContain('agi-is-here-were-just-arguing-about-the-label.md');
    const raw = readFileSync(
      path.join(blogDir, 'agi-is-here-were-just-arguing-about-the-label.md'),
      'utf8',
    );
    expect(raw).toMatch(/^category:\s*quiet-thoughts\s*$/m);
  });
});
