# Feature #8: RSVP Dynamic Route & Family Loading

**Status:** 🟢 Completed

**Phase:** Main Page (Entry Point)

**Priority:** Critical

---

## Description

Create the dynamic route `/rsvp/[family]` which is the **main entry point** of the entire site. There is NO separate home page at `/`. Each family receives their own personalized link (e.g. `https://site.com/rsvp/Mosleh`). This page contains ALL sections in a single-page layout: Hero, Locations, RSVP CTA Button, RSVP Form, and Wedding List. The route loads the family data from Supabase, determines if they've already submitted, and orchestrates the full page.

The `/` route should redirect or show a simple "Please use your personalized link" message.

---

## Acceptance Criteria

- [x] Dynamic route `/rsvp/[family]` created with App Router
- [x] This is the MAIN ENTRY POINT of the site (each family gets this link)
- [x] Family name extracted from URL parameter
- [x] Family data fetched from Supabase (family info + members)
- [x] Single-page layout containing all sections: Hero > Locations > RSVP Button > RSVP Form > Wedding List
- [x] Loading state while fetching family data
- [x] 404 / "Family not found" error state for invalid family names
- [x] Check if RSVP already submitted (hasSubmitted flag)
- [ ] Page title shows "RSVP - [Family Name] Family" (deferred to Feature #21 SEO)
- [x] `/` route shows a fallback message or redirects
- [x] Family members data is pre-inserted in DB by admins (not user-managed)

---

## Dependencies

**Must be completed after:**
- Feature #3: Supabase Client Configuration
- Feature #11: GET /api/family/[name]

**Blocks:**
- Feature #4: Hero Section
- Feature #5: Locations Section
- Feature #6: RSVP Button Section
- Feature #7: Wedding List Section
- Feature #9: RSVP Form
- Feature #10: Already Submitted State

---

## Implementation Notes

- Route file: `app/rsvp/[family]/page.tsx` (client component with `"use client"`)
- Uses `useParams()` to extract family name, `useEffect` + `useCallback` for data fetching
- Fetches via `/api/family/[name]` (Feature #11)
- 3 states: loading (spinner), error ("Family Not Found"), data loaded (full page)
- `hasSubmitted` state managed locally, will be updated by RSVP form (Feature #9)
- Sections are placeholder divs, will be replaced by actual components in Features #4-7, #9-10
- Scroll anchor `id="rsvp-form"` on the form section for Feature #6

---

## Testing Checklist

- [ ] `/rsvp/Mosleh` loads Mosleh family data
- [ ] `/rsvp/Unknown` shows error state
- [ ] Loading spinner displays while fetching
- [ ] Family members are listed correctly

---

## Completion Date

2026-01-30
