# Lessons

- Avoid slogan-y / “viral persona” marketing copy for this site. Prefer plain, first-person writing that sounds like Shahab talking: humble, outdoorsy, human-first, curious about AI without theatrical metaphors.
- In Astro templates, put explicit `{' '}` between text and adjacent `<a>` tags — whitespace between tags collapses in the built HTML.
- After dependency/`package.json` edits, regenerate `package-lock.json` before push so GitHub Actions `npm ci` succeeds.
- Astro 7 on this setup rejected compound endpoint extensions as TypeScript (`.xml.ts`, `.txt.ts`, `.md.ts`); use `.js` endpoints for those routes.
