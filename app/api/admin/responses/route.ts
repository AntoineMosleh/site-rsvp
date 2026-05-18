import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";
import { verifyToken } from "@/lib/admin-auth";
import type {
  AdminDashboardData,
  DashboardResponse,
  MemberAttendanceDetail,
} from "@/lib/types/database";

export async function GET(request: Request) {
  // 1. Verify admin authentication
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token || !verifyToken(token)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  // 2. Optional search filter
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");

  // 3. Fetch statistics in parallel
  const [familiesCount, responsesCount, churchCount, restaurantCount] =
    await Promise.all([
      supabase.from("families").select("*", { count: "exact", head: true }),
      supabase.from("rsvp_responses").select("*", { count: "exact", head: true }),
      supabase
        .from("church_attendance")
        .select("*", { count: "exact", head: true })
        .eq("attending", true),
      supabase
        .from("restaurant_attendance")
        .select("*", { count: "exact", head: true })
        .eq("attending", true),
    ]);

  // 4. Fetch all RSVP responses with family info
  let rsvpQuery = supabase
    .from("rsvp_responses")
    .select("id, family_id, submitted_at")
    .order("submitted_at", { ascending: false });

  const { data: rsvpResponses, error: rsvpError } = await rsvpQuery;

  if (rsvpError) {
    return NextResponse.json(
      { error: "Failed to fetch responses" },
      { status: 500 }
    );
  }

  // 5. Get all family IDs from responses
  const familyIds = rsvpResponses.map((r) => r.family_id);
  const rsvpIds = rsvpResponses.map((r) => r.id);

  // 6. Fetch families, members, and attendance in parallel
  const [familiesResult, membersResult, churchResult, restaurantResult] =
    await Promise.all([
      supabase
        .from("families")
        .select("id, family_name")
        .in("id", familyIds.length > 0 ? familyIds : [""]),
      supabase
        .from("members")
        .select("id, family_id, first_name, display_order")
        .in("family_id", familyIds.length > 0 ? familyIds : [""])
        .order("display_order", { ascending: true }),
      supabase
        .from("church_attendance")
        .select("rsvp_id, member_id, attending")
        .in("rsvp_id", rsvpIds.length > 0 ? rsvpIds : [""]),
      supabase
        .from("restaurant_attendance")
        .select("rsvp_id, member_id, attending")
        .in("rsvp_id", rsvpIds.length > 0 ? rsvpIds : [""]),
    ]);

  // 7. Build lookup maps
  const familyMap = new Map(
    (familiesResult.data ?? []).map((f) => [f.id, f.family_name])
  );

  const membersByFamily = new Map<string, typeof membersResult.data>();
  for (const member of membersResult.data ?? []) {
    const list = membersByFamily.get(member.family_id) ?? [];
    list.push(member);
    membersByFamily.set(member.family_id, list);
  }

  const churchByRsvp = new Map<string, Map<string, boolean>>();
  for (const ca of churchResult.data ?? []) {
    if (!churchByRsvp.has(ca.rsvp_id)) churchByRsvp.set(ca.rsvp_id, new Map());
    churchByRsvp.get(ca.rsvp_id)!.set(ca.member_id, ca.attending);
  }

  const restaurantByRsvp = new Map<string, Map<string, boolean>>();
  for (const ra of restaurantResult.data ?? []) {
    if (!restaurantByRsvp.has(ra.rsvp_id))
      restaurantByRsvp.set(ra.rsvp_id, new Map());
    restaurantByRsvp.get(ra.rsvp_id)!.set(ra.member_id, ra.attending);
  }

  // 8. Assemble responses
  let responses: DashboardResponse[] = rsvpResponses.map((rsvp) => {
    const familyName = familyMap.get(rsvp.family_id) ?? "Unknown";
    const members = membersByFamily.get(rsvp.family_id) ?? [];
    const churchMap = churchByRsvp.get(rsvp.id) ?? new Map();
    const restaurantMap = restaurantByRsvp.get(rsvp.id) ?? new Map();

    const memberDetails: MemberAttendanceDetail[] = members.map((m) => ({
      first_name: m.first_name,
      church: churchMap.get(m.id) ?? false,
      restaurant: restaurantMap.get(m.id) ?? false,
    }));

    return {
      family_name: familyName,
      submitted_at: rsvp.submitted_at,
      members: memberDetails,
    };
  });

  // 9. Apply search filter
  if (search) {
    responses = responses.filter((r) =>
      r.family_name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const data: AdminDashboardData = {
    statistics: {
      total_families: familiesCount.count ?? 0,
      total_responses: responsesCount.count ?? 0,
      church_attendees: churchCount.count ?? 0,
      restaurant_attendees: restaurantCount.count ?? 0,
    },
    responses,
  };

  return NextResponse.json(data);
}
