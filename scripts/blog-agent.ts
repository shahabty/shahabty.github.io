#!/usr/bin/env node
/**
 * Blog Post Agent
 * 
 * Receives blog post text, refines it using OpenAI, automatically determines
 * category and tags, and publishes it to the website.
 * 
 * Usage:
 *   npm run blog-agent -- "Your blog post text here..."
 *   npm run blog-agent -- --file path/to/draft.txt
 */

import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const CATEGORIES = {
  'field-notes': 'Thoughts from working in AI and machine learning',
  'quiet-thoughts': 'Personal writing, slower questions',
  'frame-notes': 'Film and theatre, and how stories connect to science and the future'
} as const;

type CategoryId = keyof typeof CATEGORIES;

interface RefinedPost {
  title: string;
  description: string;
  content: string;
  category: CategoryId;
  tags: string[];
  slug: string;
}

async function refineAndAnalyzeBlogPost(rawText: string): Promise<RefinedPost> {
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is required');
  }

  const openai = new OpenAI({ apiKey });

  const systemPrompt = `You are an expert blog editor and content strategist. Your task is to:

1. Refine the blog post for:
   - Grammar and spelling corrections
   - Style improvements (clarity, flow, tone)
   - Restructuring (proper headings, paragraph breaks)
   - SEO optimization (clear structure, keyword usage)

2. Analyze the content and determine:
   - Best category from: ${Object.entries(CATEGORIES).map(([id, desc]) => `"${id}" (${desc})`).join(', ')}
   - Relevant tags (3-5 tags, lowercase, relevant keywords)
   - A compelling title (concise, engaging)
   - A meta description (1-2 sentences, 120-160 chars)
   - A URL-friendly slug (lowercase, hyphens)

Return ONLY a JSON object with this exact structure:
{
  "title": "Post Title",
  "description": "Meta description for SEO",
  "content": "Refined markdown content with proper headings",
  "category": "field-notes",
  "tags": ["tag1", "tag2", "tag3"],
  "slug": "url-friendly-slug"
}

Important:
- Keep the author's voice and intent
- Use proper markdown formatting (## for headings, proper lists, etc.)
- Make the content engaging and SEO-friendly
- Choose category based on content theme
- Ensure slug is unique and descriptive`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Refine and analyze this blog post:\n\n${rawText}` }
    ],
    temperature: 0.7,
    response_format: { type: 'json_object' }
  });

  const result = response.choices[0].message.content;
  if (!result) {
    throw new Error('No response from OpenAI');
  }

  const parsed = JSON.parse(result) as RefinedPost;
  
  // Validate the response
  if (!parsed.title || !parsed.description || !parsed.content || !parsed.category || !parsed.tags || !parsed.slug) {
    throw new Error('Invalid response structure from OpenAI');
  }

  if (!Object.keys(CATEGORIES).includes(parsed.category)) {
    throw new Error(`Invalid category: ${parsed.category}`);
  }

  return parsed;
}

function createBlogPostFile(post: RefinedPost): string {
  const today = new Date().toISOString().split('T')[0];
  const filename = `${post.slug}.md`;
  const filepath = path.join(process.cwd(), 'src', 'content', 'blog', filename);

  // Check if file already exists
  if (fs.existsSync(filepath)) {
    throw new Error(`Blog post already exists: ${filename}`);
  }

  const frontmatter = `---
title: "${post.title}"
description: "${post.description}"
pubDate: ${today}
category: ${post.category}
tags: [${post.tags.join(', ')}]
---

`;

  const fullContent = frontmatter + post.content;
  fs.writeFileSync(filepath, fullContent, 'utf-8');

  return filepath;
}

function commitAndPush(filepath: string, post: RefinedPost): void {
  const filename = path.basename(filepath);
  
  try {
    // Stage the file
    execSync(`git add "${filepath}"`, { stdio: 'inherit' });
    
    // Commit
    const commitMessage = `Add blog post: ${post.title}`;
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    
    // Push
    execSync('git push -u origin HEAD', { stdio: 'inherit' });
    
    console.log('\n✅ Successfully published blog post!');
  } catch (error) {
    console.error('❌ Git operation failed:', error);
    throw error;
  }
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: npm run blog-agent -- "Your blog post text..."');
    console.error('   or: npm run blog-agent -- --file path/to/draft.txt');
    process.exit(1);
  }

  let rawText: string;

  // Check if reading from file
  if (args[0] === '--file' || args[0] === '-f') {
    if (!args[1]) {
      console.error('Error: --file requires a file path');
      process.exit(1);
    }
    const filePath = args[1];
    if (!fs.existsSync(filePath)) {
      console.error(`Error: File not found: ${filePath}`);
      process.exit(1);
    }
    rawText = fs.readFileSync(filePath, 'utf-8');
  } else {
    // Join all arguments as the blog post text
    rawText = args.join(' ');
  }

  if (rawText.trim().length < 50) {
    console.error('Error: Blog post text is too short (minimum 50 characters)');
    process.exit(1);
  }

  console.log('🤖 Starting blog post agent...\n');
  console.log('📝 Raw input length:', rawText.length, 'characters\n');

  try {
    console.log('🔄 Refining content with OpenAI...');
    const refinedPost = await refineAndAnalyzeBlogPost(rawText);

    console.log('\n✨ Refinement complete!');
    console.log('━'.repeat(60));
    console.log('Title:', refinedPost.title);
    console.log('Category:', refinedPost.category);
    console.log('Tags:', refinedPost.tags.join(', '));
    console.log('Slug:', refinedPost.slug);
    console.log('Description:', refinedPost.description);
    console.log('━'.repeat(60));

    console.log('\n📄 Creating blog post file...');
    const filepath = createBlogPostFile(refinedPost);
    console.log('✅ Created:', filepath);

    console.log('\n📤 Committing and pushing to GitHub...');
    commitAndPush(filepath, refinedPost);

    console.log('\n🎉 Blog post published successfully!');
    console.log('File:', path.basename(filepath));
    console.log('URL: https://shahabty.github.io/blog/' + refinedPost.slug + '/');

  } catch (error) {
    console.error('\n❌ Error:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main();
