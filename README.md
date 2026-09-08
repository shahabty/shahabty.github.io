# Shahab Nabavi — personal site

Personal website and blog for [Shahab Nabavi](https://shahabty.github.io), served with GitHub Pages.

## Stack

- [Astro](https://astro.build) static site
- Markdown content collections for the blog
- Vitest unit tests
- GitHub Actions deploy workflow

## Local development

Requires Node.js 22.12+.

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — local preview
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
- `npm test` — run unit tests
- `npm run blog-agent -- "text"` — AI-powered blog post refinement and publishing

## Blog categories

- **Field Notes** — AI / ML
- **Quiet Thoughts** — personal reflections
- **Frame Notes** — film, theatre, science, and the future

Add a post as a Markdown file in `src/content/blog/` with frontmatter:

```md
---
title: "Your title"
description: "Short summary"
pubDate: 2026-09-07
category: field-notes
tags: [ai]
---
```

Valid categories: `field-notes`, `quiet-thoughts`, `frame-notes`.

### Automated Blog Agent

The blog agent uses AI to refine your writing and automatically publish posts:

```bash
# Set your OpenAI API key
export OPENAI_API_KEY="sk-..."

# Publish a blog post from text
npm run blog-agent -- "Your draft blog post text here..."

# Or from a file
npm run blog-agent -- --file drafts/my-post.txt
```

The agent will:
- Fix grammar and spelling
- Improve style, clarity, and flow
- Restructure with proper headings
- Optimize for SEO
- Automatically determine the best category
- Generate relevant tags
- Create a URL-friendly slug
- Commit and push to GitHub

**Requirements**: Set `OPENAI_API_KEY` environment variable with your OpenAI API key.

## SEO / AI crawlers

- Canonical URLs, Open Graph, JSON-LD
- `robots.txt`, sitemap, RSS
- `/llms.txt` site summary for AI agents
- Per-post plain markdown at `/blog/<slug>.md`
