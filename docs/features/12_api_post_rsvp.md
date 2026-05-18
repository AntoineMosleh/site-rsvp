# Feature #12: POST /api/rsvp

**Status:** 🟢 Completed

**Phase:** API Routes

**Priority:** Critical

---

## Description

Create the API route that saves an RSVP response including phone number, church attendance, and restaurant attendance for each family member. Uses atomic transactions to ensure data consistency.

---

## Acceptance Criteria

- [x] Route `POST /api/rsvp` created
- [x] Accepts body: family_id, phone_number, church_attendance[], restaurant_attendance[]
- [x] Server-side Zod validation of request body
- [x] Creates rsvp_response record with phone_number and timestamp
- [x] Creates church_attendance records for each member
- [x] Creates restaurant_attendance records for each member
- [x] Atomic transaction (all or nothing)
- [x] Prevents duplicate submissions (unique family_id constraint)
- [x] Returns success message or error
- [x] Proper HTTP status codes (201, 400, 409, 500)

---

## Dependencies

**Must be completed after:**
- Feature #3: Supabase Client Configuration

**Blocks:**
- Feature #9: RSVP Form

---

## Implementation Notes

- Route file: `app/api/rsvp/route.ts`
- Zod v4 validation schema for the full request body (family_id UUID, phone_number, attendance arrays)
- Sequential inserts: rsvp_responses → church_attendance → restaurant_attendance
- Manual rollback on failure: delete rsvp_response (ON DELETE CASCADE cleans up attendance records)
- PostgreSQL error code `23505` (unique_violation) detected for duplicate family_id → 409 Conflict
- Returns 201 on success, 400 on validation error, 409 on duplicate, 500 on server error

---

## Testing Checklist

- [ ] Valid submission creates all records
- [ ] Duplicate submission returns 409 Conflict
- [ ] Invalid phone number returns 400
- [ ] Missing fields return validation errors
- [ ] Partial failure rolls back transaction

---

## Completion Date

2026-01-29
