import { NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "@/lib/supabase";

const attendanceSchema = z.object({
  member_id: z.uuid(),
  attending: z.boolean(),
});

const rsvpSchema = z.object({
  family_id: z.uuid(),
  church_attendance: z.array(attendanceSchema).min(1, "Church attendance is required"),
  restaurant_attendance: z.array(attendanceSchema).min(1, "Restaurant attendance is required"),
});

export async function POST(request: Request) {
  // 1. Parse and validate request body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const result = rsvpSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed", details: result.error.issues },
      { status: 400 }
    );
  }

  const { family_id, church_attendance, restaurant_attendance } = result.data;

  // 2. Insert RSVP response
  const { data: rsvp, error: rsvpError } = await supabase
    .from("rsvp_responses")
    .insert({ family_id })
    .select("id")
    .single();

  if (rsvpError) {
    // Unique constraint violation = duplicate submission
    if (rsvpError.code === "23505") {
      return NextResponse.json(
        { error: "RSVP already submitted for this family" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Failed to create RSVP response" },
      { status: 500 }
    );
  }

  const rsvpId = rsvp.id;

  // 3. Insert church attendance records
  const churchRecords = church_attendance.map((record) => ({
    rsvp_id: rsvpId,
    member_id: record.member_id,
    attending: record.attending,
  }));

  const { error: churchError } = await supabase
    .from("church_attendance")
    .insert(churchRecords);

  if (churchError) {
    // Rollback: delete rsvp_response (cascades to attendance)
    await supabase.from("rsvp_responses").delete().eq("id", rsvpId);
    return NextResponse.json(
      { error: "Failed to save church attendance" },
      { status: 500 }
    );
  }

  // 4. Insert restaurant attendance records
  const restaurantRecords = restaurant_attendance.map((record) => ({
    rsvp_id: rsvpId,
    member_id: record.member_id,
    attending: record.attending,
  }));

  const { error: restaurantError } = await supabase
    .from("restaurant_attendance")
    .insert(restaurantRecords);

  if (restaurantError) {
    // Rollback: delete rsvp_response (cascades to all attendance)
    await supabase.from("rsvp_responses").delete().eq("id", rsvpId);
    return NextResponse.json(
      { error: "Failed to save restaurant attendance" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { success: true, message: "RSVP submitted successfully" },
    { status: 201 }
  );
}
