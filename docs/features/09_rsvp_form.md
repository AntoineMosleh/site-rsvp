# Feature #9: RSVP Form (Checkboxes + Validation)

**Status:** 🔴 Not Started

**Phase:** RSVP Page

**Priority:** Critical

---

## Description

Build the RSVP form as a section within the `/rsvp/[family]` page (with `id="rsvp-form"` anchor). The form displays the family members **fetched from the database** (pre-inserted by admins) with phone number input, two separate checkbox groups (church and restaurant attendance), Zod validation, and submission via React Hook Form.

---

## Acceptance Criteria

- [ ] Form section has `id="rsvp-form"` for anchor scroll from CTA button
- [ ] Family members are loaded from database (NOT hardcoded -- admins insert them in Supabase)
- [ ] Phone number input with validation (international or local format)
- [ ] "Church Attendance" checkbox group listing all family members
- [ ] "Restaurant Attendance" checkbox group listing all family members
- [ ] Same members listed in both groups
- [ ] Zod schema for strict validation
- [ ] React Hook Form integration
- [ ] English error messages
- [ ] Submit button ("Confirm Attendance") in grenadine
- [ ] Success toast (react-hot-toast) after submission
- [ ] Page switches to "Already Submitted" state after success (no page redirect needed)
- [ ] Submission timestamp stored to prevent re-submission

---

## Dependencies

**Must be completed after:**
- Feature #8: RSVP Dynamic Route & Family Loading
- Feature #12: POST /api/rsvp

**Blocks:**
- Feature #10: Already Submitted State

---

## Implementation Notes

[To be filled during development]

---

## Testing Checklist

- [ ] Form renders with all family members
- [ ] Phone validation rejects invalid formats
- [ ] Zod errors display correctly in English
- [ ] Submission sends data to API
- [ ] Success toast appears after submit
- [ ] Cannot submit with empty phone number

---

## Completion Date

[To be filled when completed]
