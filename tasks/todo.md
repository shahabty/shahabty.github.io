# UI Responsiveness Fixes

## Checklist
- [x] Critical: focus-visible styles
- [x] Critical: mobile nav header height / touch targets
- [x] Critical: darken ink-soft / ink-faint contrast
- [x] Important: skip link + main id
- [x] Important: scroll-padding-top
- [x] Important: safe-area insets
- [x] Important: touch-action manipulation
- [x] Important: Safari -webkit-mask
- [x] Important: font-weight 550 → 600
- [x] Important: widen title max-widths + text-wrap pretty
- [x] Important: category/badge touch targets
- [x] Important: raise header backdrop alpha
- [x] Nice: theme-color meta
- [x] Nice: font preload
- [x] Nice: overflow-x clip
- [x] Run npm test + npm run build
- [x] Restart preview on 4321

## Review
- All Critical (1–3), Important (4–12), and Nice-to-have (13–15) applied
- Files: `src/styles/global.css`, `src/layouts/BaseLayout.astro` (Header unchanged; skip link lives in layout)
- `npm test` 18/18 pass; `npm run build` success
- Preview: http://127.0.0.1:4321/
