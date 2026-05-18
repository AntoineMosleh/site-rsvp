# Wedding RSVP - Features Overview

## Marie & Dante Wedding Website

### Architecture

There is NO separate home page at `/`.
Each family receives a **personalized link**: `/rsvp/[family]` (e.g. `/rsvp/Mosleh`).
This single page contains ALL content: Hero, Locations, RSVP Form, Wedding List.
Family members are **pre-inserted in the database by admins**.

---

PHASE 1: SETUP
──────────────
Feature #1:  Project Setup & Configuration
Feature #2:  Database Schema (Supabase)
Feature #3:  Supabase Client Configuration

PHASE 2: API ROUTES
───────────────────
Feature #11: GET /api/family/[name]
Feature #12: POST /api/rsvp
Feature #13: POST /api/admin/login
Feature #14: GET /api/admin/responses

PHASE 3: MAIN PAGE (/rsvp/[family] - single page per family)
─────────────────────────────────────────────────────────────
Feature #8:  RSVP Dynamic Route & Page Container (entry point)
Feature #4:  Hero Section
Feature #5:  Locations Section
Feature #6:  RSVP Button Section (scroll anchor to form)
Feature #9:  RSVP Form (Checkboxes + Validation)
Feature #10: Already Submitted State & Thank You
Feature #7:  Wedding List Section

PHASE 4: ADMIN DASHBOARD
────────────────────────
Feature #15: Admin Authentication & Route Protection
Feature #16: Admin Statistics Cards
Feature #17: Admin Response List, Search & Filters
Feature #18: CSV Export

PHASE 5: POLISH
───────────────
Feature #19: Framer Motion Animations
Feature #20: Mobile Responsive & Loading States
Feature #21: SEO Meta Tags & Performance

---

Total: 21 features across 5 phases
