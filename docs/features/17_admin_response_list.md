# Feature #17: Admin Response List, Search & Filters

**Status:** 🔴 Not Started

**Phase:** Admin Dashboard

**Priority:** High

---

## Description

Build the response list section of the admin dashboard showing all RSVP responses as cards/table with family details, attendance per member, search by family name, and sort by submission date.

---

## Acceptance Criteria

- [ ] List all RSVP responses as cards
- [ ] Each card shows: family name, phone number, submission date
- [ ] Each card shows church attendance per member (check/cross icons)
- [ ] Each card shows restaurant attendance per member (check/cross icons)
- [ ] Search input to filter by family name
- [ ] Sort by submission date (newest first by default)
- [ ] Responsive layout (cards on mobile, table-like on desktop)
- [ ] Empty state when no responses yet
- [ ] Loading state while fetching

---

## Dependencies

**Must be completed after:**
- Feature #14: GET /api/admin/responses
- Feature #15: Admin Authentication
- Feature #16: Admin Statistics Cards (page order)

**Blocks:**
- None

---

## Implementation Notes

[To be filled during development]

---

## Testing Checklist

- [ ] All responses display correctly
- [ ] Search filters responses in real-time
- [ ] Sort by date works
- [ ] Attendance icons are accurate (green check / red cross)
- [ ] Mobile layout is usable
- [ ] Empty state renders when no responses

---

## Completion Date

[To be filled when completed]
