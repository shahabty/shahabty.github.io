# UI Review Findings (2026-09-07)

Reviewed via code audit (Web Interface Guidelines), CSS inspection, and live browser metrics at 375px viewport on http://127.0.0.1:4321/.

## Critical

1. **No visible focus styles** — `src/styles/global.css`
   - Interactive links/buttons have no `:focus-visible` ring/outline.
   - Fix: add `:focus-visible` styles for `a`, `.button`, `.nav a`, `.badge`, `.category-filters a`.

2. **Mobile nav cramped / wraps awkwardly** — `src/styles/global.css` (`.site-header__inner`, `.nav`)
   - At 375px, `Blog` wraps to a second row while header uses fixed `height: var(--header-h)` (~68px). Touch hit area for nav links ~25px tall (below 44px).
   - Fix: allow auto header height (`min-height` instead of fixed `height`), increase nav link padding for ≥44px targets, tighten mobile brand size / gap, optionally stack header on very small screens.

3. **Low contrast body/meta text** — `src/styles/global.css`
   - `--ink-soft: #4d5a6c` and especially `--ink-faint: #7a8698` on light gray/blue backgrounds risk WCAG AA failures for small text (confirmed soft text renders as `rgb(77, 90, 108)`).
   - Fix: darken `--ink-soft` and `--ink-faint` (and/or bump meta/badge font size).

## Important

4. **Missing skip link** — `src/layouts/BaseLayout.astro`, `src/components/Header.astro`
   - No “Skip to content” link for keyboard users.
   - Fix: add skip link targeting `<main id="main">`.

5. **Sticky header focus/scroll overlap** — `src/styles/global.css`
   - Sticky header can obscure focused anchors; no `scroll-padding-top`.
   - Fix: `html { scroll-padding-top: calc(var(--header-h) + 0.75rem); }`.

6. **No safe-area insets** — `src/styles/global.css`
   - Notched phones: header/footer/body lack `env(safe-area-inset-*)`.
   - Fix: pad header/footer/container with safe-area env vars.

7. **Missing `touch-action: manipulation`** — `src/styles/global.css`
   - Fix: set on interactive controls to reduce double-tap zoom delay.

8. **Safari mask prefix** — `src/styles/global.css` (`body::before`)
   - Uses `mask-image` without `-webkit-mask-image`.
   - Fix: add `-webkit-` prefixed mask properties.

9. **`font-weight: 550`** — `src/styles/global.css` (`h1–h4`)
   - Not reliably supported across browsers; may render inconsistently.
   - Fix: use `500` or `600`.

10. **Title max-widths too tight for real copy** — `src/styles/global.css`
    - `.hero__title { max-width: 22ch }` and `.page-hero h1 { max-width: 14ch }` force awkward wraps for longer genuine titles.
    - Fix: widen to ~28–36ch / remove overly tight caps; use `text-wrap: pretty` on headings.

11. **Category filter / badge touch targets small** — `src/styles/global.css`
    - Filters use `padding: 0.4rem 0.85rem`; badges smaller.
    - Fix: increase padding to meet ~44px min height on touch.

12. **Backdrop-filter fallback already partial** — ok-ish with rgba background; ensure opacity high enough when blur unsupported (raise solid alpha slightly).

## Nice-to-have

13. Add `<meta name="theme-color" content="...">` in `BaseLayout.astro`.
14. Preload critical fonts (Fraunces/Figtree) with `font-display: swap` already via Google CSS — optional `<link rel="preload">`.
15. `overflow-x: clip` on `body`/`html` as belt-and-suspenders against horizontal scroll.
16. Visually hidden “opens in a new window” for `target="_blank"` links.

## Out of scope for CSS agent but already being handled by parent
- Slogan-like copy rewrite in `src/data/site.ts`, pages, and blog posts (parent agent).
