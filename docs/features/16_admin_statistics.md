# Feature #16: Admin Statistics Cards

**Status:** 🔴 Not Started

**Phase:** Admin Dashboard

**Priority:** High

---

## Description

Build the statistics overview section of the admin dashboard displaying total families, total responses, church attendees count, and restaurant attendees count in styled cards.

---

## Acceptance Criteria

- [ ] Four statistics cards displayed in a grid
- [ ] Card 1: Total Families (all families in database)
- [ ] Card 2: Total Responses (families who submitted RSVP)
- [ ] Card 3: Church Attendees (members attending church)
- [ ] Card 4: Restaurant Attendees (members attending restaurant)
- [ ] Cards styled with shadcn/ui Card component
- [ ] Icons for each stat (lucide-react)
- [ ] Data fetched from GET /api/admin/responses
- [ ] Responsive grid (2 cols mobile, 4 cols desktop)

---

## Dependencies

**Must be completed after:**
- Feature #14: GET /api/admin/responses
- Feature #15: Admin Authentication

**Blocks:**
- None

---

## Implementation Notes

[To be filled during development]

---

## Testing Checklist

- [ ] All four cards display correct numbers
- [ ] Numbers update when new RSVP is submitted
- [ ] Cards are responsive
- [ ] Loading state while fetching data

---

## Completion Date

[To be filled when completed]
