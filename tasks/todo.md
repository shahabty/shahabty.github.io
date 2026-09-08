# Responsiveness pass

## Checklist
- [x] Phone (320–390): header, blog title, filters, cards, post body
- [x] Tablet (768): about split, blog, nav
- [x] Desktop (1280+): about sticky panel, hero
- [x] Fix overflow / wrapping / touch targets
- [x] Build, push

## Review
- No horizontal overflow at 320/390/768
- Mobile header height token updated for wrapped nav + scroll padding
- Titles/prose use overflow-wrap; filters and badges tighten on small screens
- Container/grid children use min-width: 0 to prevent grid blowout
