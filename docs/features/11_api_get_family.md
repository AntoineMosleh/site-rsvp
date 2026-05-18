# Feature #11: GET /api/family/[name]

**Status:** 🟢 Completed

**Phase:** API Routes

**Priority:** Critical

---

## Description

Create the API route that retrieves family information and its members from Supabase by family name, and checks if an RSVP has already been submitted.

---

## Acceptance Criteria

- [x] Route `GET /api/family/[name]` created
- [x] Fetches family by `family_name` (case-insensitive)
- [x] Returns family info (id, family_name)
- [x] Returns members list (id, first_name, display_order) sorted by display_order
- [x] Returns `hasSubmitted` boolean (checks rsvp_responses table)
- [x] Returns 404 if family not found
- [x] Proper error handling with meaningful messages
- [x] TypeScript response types defined

---

## Dependencies

**Must be completed after:**
- Feature #3: Supabase Client Configuration

**Blocks:**
- Feature #8: RSVP Dynamic Route & Family Loading

---

## Implementation Notes

- Route file: `app/api/family/[name]/route.ts`
- Uses `ilike()` for case-insensitive family name lookup
- 3 sequential Supabase queries: family lookup, members fetch, RSVP check
- Returns `FamilyWithMembers` type from `lib/types/database.ts`
- Members ordered by `display_order ASC`
- 404 returned when family not found, 500 on member fetch error

---

## Testing Checklist

- [ ] `GET /api/family/Mosleh` returns correct family data
- [ ] `GET /api/family/Unknown` returns 404
- [ ] `hasSubmitted` is false for new families
- [ ] `hasSubmitted` is true after RSVP submission
- [ ] Members are sorted by display_order

---

## Completion Date

2026-01-29
