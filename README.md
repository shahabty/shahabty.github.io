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

## Blog categories

- **Field Notes** — AI / ML
- **Quiet Thoughts** — personal reflections
- **Life Outside** — outdoors and living

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

Valid categories: `field-notes`, `quiet-thoughts`, `life-outside`.

## SEO / AI crawlers

- Canonical URLs, Open Graph, JSON-LD
- `robots.txt`, sitemap, RSS
- `/llms.txt` site summary for AI agents
- Per-post plain markdown at `/blog/<slug>.md`
