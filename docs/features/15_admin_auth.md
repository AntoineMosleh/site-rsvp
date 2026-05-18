# Feature #15: Admin Authentication & Route Protection

**Status:** 🔴 Not Started

**Phase:** Admin Dashboard

**Priority:** High

---

## Description

Build the admin login page with a password form and protect the `/admin` route so only authenticated users can access the dashboard. Redirect unauthenticated users to the login page.

---

## Acceptance Criteria

- [ ] Admin login page at `/admin/login` or `/admin` (when not authenticated)
- [ ] Password input form with submit button
- [ ] Calls POST /api/admin/login on submit
- [ ] Stores authentication token/cookie on success
- [ ] Redirects to dashboard on successful login
- [ ] Shows error message on invalid password
- [ ] Route protection middleware or client-side check
- [ ] Logout button that clears the session
- [ ] Clean, minimal login UI matching wedding theme

---

## Dependencies

**Must be completed after:**
- Feature #1: Project Setup & Configuration
- Feature #13: POST /api/admin/login

**Blocks:**
- Feature #16: Admin Statistics Cards
- Feature #17: Admin Response List
- Feature #18: CSV Export

---

## Implementation Notes

[To be filled during development]

---

## Testing Checklist

- [ ] Login with correct password grants access
- [ ] Login with wrong password shows error
- [ ] Direct access to `/admin` without auth redirects to login
- [ ] Logout clears session and redirects to login
- [ ] Refresh page maintains authenticated state

---

## Completion Date

[To be filled when completed]
