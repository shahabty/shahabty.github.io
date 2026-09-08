# Lessons

- Avoid slogan-y / “viral persona” marketing copy for this site. Prefer plain, first-person writing that sounds like Shahab talking: humble, outdoorsy, human-first, curious about AI without theatrical metaphors.
- In Astro templates, keep inline link copy on one line with literal spaces (e.g. `on <a>GitHub</a>, <a>LinkedIn</a>`). Newlines between text and tags can collapse spacing in the built HTML.
- Prefer plain punctuation over em dashes in site copy when the user wants a simpler text style.
- After dependency/`package.json` edits, regenerate `package-lock.json` before push so GitHub Actions `npm ci` succeeds.
- Astro 7 on this setup rejected compound endpoint extensions as TypeScript (`.xml.ts`, `.txt.ts`, `.md.ts`); use `.js` endpoints for those routes.
- Do not use entrance animations with `opacity: 0` plus `animation-fill-mode: both/backwards`. If the animation fails to finish, post lists can stay invisible while the page hero still shows (looks like “All” is empty).
- GitHub Pages caches HTML (~10 minutes). After a new post ships, `/blog/` (All) can stay stale while a category page looks updated. Bust listing navigations with a deploy `SITE_BUILD_ID` query param.
