import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Blog Agent Structure', () => {
  it('should have the blog agent script', () => {
    const scriptPath = path.join(process.cwd(), 'scripts', 'blog-agent.ts');
    expect(fs.existsSync(scriptPath)).toBe(true);
  });

  it('should have example draft file', () => {
    const draftPath = path.join(process.cwd(), 'drafts', 'example-reflection.txt');
    expect(fs.existsSync(draftPath)).toBe(true);
  });

  it('should have documentation', () => {
    const docsPath = path.join(process.cwd(), 'BLOG_AGENT.md');
    expect(fs.existsSync(docsPath)).toBe(true);
  });

  it('should have .env.example file', () => {
    const envPath = path.join(process.cwd(), '.env.example');
    expect(fs.existsSync(envPath)).toBe(true);
    
    const content = fs.readFileSync(envPath, 'utf-8');
    expect(content).toContain('OPENAI_API_KEY');
  });

  it('should have blog-agent npm script', () => {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
    
    expect(packageJson.scripts).toHaveProperty('blog-agent');
    expect(packageJson.scripts['blog-agent']).toContain('tsx scripts/blog-agent.ts');
  });

  it('should have OpenAI dependency', () => {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
    
    expect(packageJson.dependencies).toHaveProperty('openai');
  });

  it('should have tsx dev dependency', () => {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
    
    expect(packageJson.devDependencies).toHaveProperty('tsx');
  });
});

describe('Blog Agent Script Content', () => {
  const scriptPath = path.join(process.cwd(), 'scripts', 'blog-agent.ts');
  const scriptContent = fs.readFileSync(scriptPath, 'utf-8');

  it('should import OpenAI', () => {
    expect(scriptContent).toContain("import OpenAI from 'openai'");
  });

  it('should define all three categories', () => {
    expect(scriptContent).toContain('field-notes');
    expect(scriptContent).toContain('quiet-thoughts');
    expect(scriptContent).toContain('frame-notes');
  });

  it('should check for OPENAI_API_KEY', () => {
    expect(scriptContent).toContain('OPENAI_API_KEY');
    expect(scriptContent).toContain('process.env.OPENAI_API_KEY');
  });

  it('should use gpt-4o model', () => {
    expect(scriptContent).toContain('gpt-4o');
  });

  it('should support file input', () => {
    expect(scriptContent).toContain('--file');
  });

  it('should commit and push', () => {
    expect(scriptContent).toContain('git add');
    expect(scriptContent).toContain('git commit');
    expect(scriptContent).toContain('git push');
  });

  it('should validate minimum text length', () => {
    expect(scriptContent).toContain('50');
  });

  it('should create markdown file', () => {
    expect(scriptContent).toContain("'src'");
    expect(scriptContent).toContain("'content'");
    expect(scriptContent).toContain("'blog'");
    expect(scriptContent).toContain('.md');
  });
});

describe('Documentation', () => {
  const docsPath = path.join(process.cwd(), 'BLOG_AGENT.md');
  const docsContent = fs.readFileSync(docsPath, 'utf-8');

  it('should document setup instructions', () => {
    expect(docsContent).toContain('Setup');
    expect(docsContent).toContain('OPENAI_API_KEY');
  });

  it('should provide usage examples', () => {
    expect(docsContent).toContain('npm run blog-agent');
    expect(docsContent).toContain('--file');
  });

  it('should explain what the agent does', () => {
    expect(docsContent).toContain('Refines');
    expect(docsContent).toContain('grammar');
    expect(docsContent).toContain('SEO');
  });

  it('should document troubleshooting', () => {
    expect(docsContent).toContain('Troubleshooting');
  });
});
