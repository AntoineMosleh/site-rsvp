# Feature #2: Database Schema (Supabase)

**Status:** 🟢 Completed

**Phase:** Setup

**Priority:** Critical

---

## Description

Create the Supabase project and define all database tables (families, members, rsvp_responses, church_attendance, restaurant_attendance) with proper indexes, constraints, and RLS policies. Insert sample data for testing.

---

## Acceptance Criteria

- [ ] Supabase project created
- [x] `families` table created with unique family_name
- [x] `members` table created with family_id FK and display_order
- [x] `rsvp_responses` table created with unique constraint on family_id
- [x] `church_attendance` table created with composite unique (rsvp_id, member_id)
- [x] `restaurant_attendance` table created with composite unique (rsvp_id, member_id)
- [x] All indexes created for performance
- [x] RLS policies configured for security
- [x] Sample data inserted (Mosleh and Dupond families)

---

## Dependencies

**Must be completed after:**
- Feature #1: Project Setup & Configuration

**Blocks:**
- Feature #3: Supabase Client Configuration
- Feature #8: RSVP Dynamic Route
- Feature #11: GET /api/family/[name]

---

## Implementation Notes

- SQL files ready in `supabase/` folder -- user must run them in Supabase SQL Editor
- `001_schema.sql`: All 5 tables, indexes, constraints, and RLS policies
- `002_sample_data.sql`: Mosleh (4 members) and Dupond (3 members) test families
- `TIMESTAMPTZ` used instead of `TIMESTAMP` for timezone-aware dates
- RLS: SELECT open on all tables (anon), INSERT open on rsvp/attendance tables only
- No UPDATE/DELETE policies from client -- admin edits via Supabase dashboard
- TypeScript types in `lib/types/database.ts` matching the schema + API response types

---

## Testing Checklist

- [ ] Can insert a family via Supabase dashboard
- [ ] Can query families and their members
- [ ] Unique constraints prevent duplicate entries
- [ ] RLS policies block unauthorized access

---

## Completion Date

2026-01-29
