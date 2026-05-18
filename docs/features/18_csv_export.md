# Feature #18: CSV Export

**Status:** 🔴 Not Started

**Phase:** Admin Dashboard

**Priority:** Medium

---

## Description

Add an "Export to CSV" button on the admin dashboard that generates and downloads a CSV file containing all RSVP responses with family names, phone numbers, and attendance details.

---

## Acceptance Criteria

- [ ] "Export to CSV" button on the dashboard
- [ ] CSV includes columns: Family Name, Phone, Submitted Date, Member Name, Church, Restaurant
- [ ] One row per member (not per family)
- [ ] Boolean values displayed as "Yes" / "No"
- [ ] File downloads with name `rsvp_responses_YYYY-MM-DD.csv`
- [ ] Proper CSV escaping for special characters
- [ ] Button disabled when no responses exist

---

## Dependencies

**Must be completed after:**
- Feature #14: GET /api/admin/responses
- Feature #15: Admin Authentication
- Feature #17: Admin Response List

**Blocks:**
- None

---

## Implementation Notes

[To be filled during development]

---

## Testing Checklist

- [ ] CSV file downloads on click
- [ ] CSV opens correctly in Excel/Google Sheets
- [ ] All data is present and accurate
- [ ] Special characters are properly escaped
- [ ] File name includes current date

---

## Completion Date

[To be filled when completed]
