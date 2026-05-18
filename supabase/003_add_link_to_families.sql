-- ============================================
-- Migration: Add unique link/slug column to families
-- Run this in the Supabase SQL Editor after 001_schema.sql
-- ============================================

-- Add link column to families table (UNIQUE and NOT NULL)
ALTER TABLE families ADD COLUMN link TEXT UNIQUE NOT NULL;

-- Create unique index on link column (already created by UNIQUE constraint)
-- The link values will be populated by 003_insert_all_families.sql
