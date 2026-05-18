-- ============================================
-- Wedding RSVP - Database Schema
-- Run this in the Supabase SQL Editor
-- ============================================

-- 1. FAMILIES TABLE
CREATE TABLE families (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_families_name ON families(family_name);

-- 2. MEMBERS TABLE
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_members_family ON members(family_id);

-- 3. RSVP RESPONSES TABLE
CREATE TABLE rsvp_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(family_id)
);

CREATE INDEX idx_rsvp_family ON rsvp_responses(family_id);
CREATE INDEX idx_rsvp_submitted ON rsvp_responses(submitted_at DESC);

-- 4. CHURCH ATTENDANCE TABLE
CREATE TABLE church_attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rsvp_id UUID NOT NULL REFERENCES rsvp_responses(id) ON DELETE CASCADE,
  member_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  attending BOOLEAN NOT NULL,

  UNIQUE(rsvp_id, member_id)
);

CREATE INDEX idx_church_rsvp ON church_attendance(rsvp_id);

-- 5. RESTAURANT ATTENDANCE TABLE
CREATE TABLE restaurant_attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rsvp_id UUID NOT NULL REFERENCES rsvp_responses(id) ON DELETE CASCADE,
  member_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  attending BOOLEAN NOT NULL,

  UNIQUE(rsvp_id, member_id)
);

CREATE INDEX idx_restaurant_rsvp ON restaurant_attendance(rsvp_id);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE families ENABLE ROW LEVEL SECURITY;
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE rsvp_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE church_attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE restaurant_attendance ENABLE ROW LEVEL SECURITY;

-- FAMILIES: anyone can read (guests need to look up their family)
CREATE POLICY "families_select" ON families
  FOR SELECT USING (true);

-- MEMBERS: anyone can read (guests need to see their family members)
CREATE POLICY "members_select" ON members
  FOR SELECT USING (true);

-- RSVP RESPONSES: anyone can read (to check if already submitted) and insert (to submit)
CREATE POLICY "rsvp_select" ON rsvp_responses
  FOR SELECT USING (true);

CREATE POLICY "rsvp_insert" ON rsvp_responses
  FOR INSERT WITH CHECK (true);

-- CHURCH ATTENDANCE: anyone can read and insert
CREATE POLICY "church_select" ON church_attendance
  FOR SELECT USING (true);

CREATE POLICY "church_insert" ON church_attendance
  FOR INSERT WITH CHECK (true);

-- RESTAURANT ATTENDANCE: anyone can read and insert
CREATE POLICY "restaurant_select" ON restaurant_attendance
  FOR SELECT USING (true);

CREATE POLICY "restaurant_insert" ON restaurant_attendance
  FOR INSERT WITH CHECK (true);
