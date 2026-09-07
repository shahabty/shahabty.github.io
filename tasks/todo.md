# Home about + responsiveness

## Checklist
- [x] Restore location/interests `about-panel` beside About on home
- [x] Rewrite `longBio` from user draft (natural, first-person)
- [x] Link Prof. Yang Wang in bio
- [x] Audit/fix mobile responsiveness (header wrap, full-width CTA, about stack)
- [x] Run tests + build; push when solid

## Review
- About uses `.split.about-layout` with prose + sticky facts panel (Based in / Interests)
- Bio rewritten through childhood → Manitoba/York → Huawei → Cerebras/tools → colleagues → film/screenwriting
- Mobile: header nav wraps under brand; primary CTA full width; facts panel stacks above bio
- `npm test` 21/21; `npm run build` ok
