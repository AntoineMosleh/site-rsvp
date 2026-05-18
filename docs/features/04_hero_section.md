# Feature #4: Hero Section

**Status:** 🟢 Completed

**Phase:** Home Page

**Priority:** High

---

## Description

Build the hero section as the **first section** of the `/rsvp/[family]` page. There is no separate home page at `/` -- each family accesses the entire site through their personalized link (e.g. `/rsvp/Mosleh`). The hero shows a large elegant wedding title and a cascading photo gallery.

---

## Acceptance Criteria

- [x] Hero is the first section of the `/rsvp/[family]` page (NOT a separate `/` route)
- [x] Title displayed in Great Vibes font, large sizes (5xl-8xl responsive)
- [x] 3 landscape photos (4:3 ratio) displayed below title
- [ ] Photos animate in with cascading fadeInUp (Framer Motion) - deferred to Feature #19
- [x] Generous spacing between title and photos
- [x] Cream/champagne background
- [x] Fully responsive (stacked on mobile, row on desktop)

---

## Dependencies

**Must be completed after:**
- Feature #1: Project Setup & Configuration
- Feature #8: RSVP Dynamic Route (page container)

**Blocks:**
- Feature #19: Framer Motion Animations (polish pass)

---

## Implementation Notes

- Component file: `components/hero-section.tsx`
- Styled to match the Canva wedding invitation template
- Layout: "Save the Date" → "The Wedding of" → "Dante & Marie" → Date block → Location → Family greeting → Photo gallery
- Date displayed in centered block with borders (Saturday | Aug 26 2026 | 02:00 PM)
- Photos use Next.js `Image` with `fill` + `object-cover`, fallback placeholder text
- Photos go in `public/photos/hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`
- Grid: 1 col on mobile, 3 cols on sm+ breakpoint
- Receives `familyName` prop to display "Dear [Family] Family"

---

## Testing Checklist

- [ ] Title renders with correct font
- [ ] Photos display at proper ratio
- [ ] Animations trigger on page load
- [ ] Layout is responsive on mobile

---

## Completion Date

2026-01-30
