// TypeScript types matching the Supabase database schema

export interface Family {
  id: string;
  family_name: string;
  created_at: string;
}

export interface Member {
  id: string;
  family_id: string;
  first_name: string;
  display_order: number;
  created_at: string;
}

export interface RsvpResponse {
  id: string;
  family_id: string;
  submitted_at: string;
}

export interface ChurchAttendance {
  id: string;
  rsvp_id: string;
  member_id: string;
  attending: boolean;
}

export interface RestaurantAttendance {
  id: string;
  rsvp_id: string;
  member_id: string;
  attending: boolean;
}

// API response types

export interface FamilyWithMembers {
  family: Pick<Family, "id" | "family_name">;
  members: Pick<Member, "id" | "first_name" | "display_order">[];
  hasSubmitted: boolean;
}

export interface AttendanceRecord {
  member_id: string;
  attending: boolean;
}

export interface RsvpSubmission {
  family_id: string;
  church_attendance: AttendanceRecord[];
  restaurant_attendance: AttendanceRecord[];
}

export interface MemberAttendanceDetail {
  id: string;
  first_name: string;
  church: boolean;
  restaurant: boolean;
}

export interface DashboardResponse {
  id: string;
  family_name: string;
  submitted_at: string;
  members: MemberAttendanceDetail[];
}

export interface DashboardStatistics {
  total_families: number;
  total_responses: number;
  church_attendees: number;
  restaurant_attendees: number;
}

export interface AdminDashboardData {
  statistics: DashboardStatistics;
  responses: DashboardResponse[];
}
