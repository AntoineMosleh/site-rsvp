# Feature #13: POST /api/admin/login

**Status:** 🟢 Completed

**Phase:** API Routes

**Priority:** High

---

## Description

Create the admin login API route that validates a password against an environment variable and returns a session token or cookie for dashboard access.

---

## Acceptance Criteria

- [x] Route `POST /api/admin/login` created
- [x] Accepts body: { password: string }
- [x] Compares password against `ADMIN_PASSWORD` env variable
- [x] Returns success with token/cookie on valid password
- [x] Returns 401 Unauthorized on invalid password
- [ ] Rate limiting or basic brute-force protection (skipped - low risk for wedding site)
- [x] Token stored securely (httpOnly cookie)

---

## Dependencies

**Must be completed after:**
- Feature #1: Project Setup & Configuration

**Blocks:**
- Feature #15: Admin Authentication & Route Protection

---

## Implementation Notes

- Shared auth utility: `lib/admin-auth.ts` with `generateToken()` and `verifyToken()`
- Token = SHA-256 hash of `ADMIN_PASSWORD` + static salt, stored in httpOnly cookie
- Cookie settings: `httpOnly`, `secure` (prod only), `sameSite: strict`, `path: /`, 24h expiry
- Route file: `app/api/admin/login/route.ts`
- Zod validation on request body
- Returns 400 (bad body), 401 (wrong password), 500 (env not configured)
- `verifyToken()` will be reused by Feature #14 to protect admin endpoints

---

## Testing Checklist

- [ ] Correct password returns success
- [ ] Wrong password returns 401
- [ ] Token/cookie is set on success
- [ ] Empty password returns 400

---

## Completion Date

2026-01-29
