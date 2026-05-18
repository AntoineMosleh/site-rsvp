-- ============================================
-- Migration: Remove phone_number from RSVP responses
-- Run this after the database already contains the RSVP schema
-- ============================================

ALTER TABLE rsvp_responses DROP COLUMN IF EXISTS phone_number;