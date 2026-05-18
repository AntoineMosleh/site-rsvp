import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import type { FamilyWithMembers } from "@/lib/types/database";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  // 1. Fetch family by link/slug (case-sensitive)
  const { data: family, error: familyError } = await supabase
    .from("families")
    .select("id, family_name, link")
    .eq("link", name)
    .single();

  if (familyError || !family) {
    return NextResponse.json(
      { error: "Family not found" },
      { status: 404 }
    );
  }

  // 2. Fetch members sorted by display_order
  const { data: members, error: membersError } = await supabase
    .from("members")
    .select("id, first_name, display_order")
    .eq("family_id", family.id)
    .order("display_order", { ascending: true });

  if (membersError) {
    return NextResponse.json(
      { error: "Failed to fetch family members" },
      { status: 500 }
    );
  }

  // 3. Check if RSVP already submitted
  const { data: rsvp } = await supabase
    .from("rsvp_responses")
    .select("id")
    .eq("family_id", family.id)
    .single();

  const response: FamilyWithMembers = {
    family: { id: family.id, family_name: family.family_name },
    members: members ?? [],
    hasSubmitted: !!rsvp,
  };

  return NextResponse.json(response);
}
