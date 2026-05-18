"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import type { FamilyWithMembers } from "@/lib/types/database";
import { HeroSection } from "@/components/hero-section";
import { LocationsSection } from "@/components/locations-section";
import { RsvpButtonSection } from "@/components/rsvp-button-section";
import { RsvpForm } from "@/components/rsvp-form";
import { WeddingListSection } from "@/components/wedding-list-section";

export default function RsvpPage() {
  const params = useParams<{ family: string }>();
  const familyName = params.family;

  const [data, setData] = useState<FamilyWithMembers | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const fetchFamily = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`/api/family/${encodeURIComponent(familyName)}`);

      if (res.status === 404) {
        setError("Family not found");
        return;
      }

      if (!res.ok) {
        setError("Something went wrong");
        return;
      }

      const familyData: FamilyWithMembers = await res.json();
      setData(familyData);
      setHasSubmitted(familyData.hasSubmitted);
    } catch {
      setError("Unable to connect to the server");
    } finally {
      setLoading(false);
    }
  }, [familyName]);

  useEffect(() => {
    fetchFamily();
  }, [fetchFamily]);

  // Loading state
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-champagne-dark border-t-burgundy" />
          <p className="mt-4 font-playfair text-lg text-text-light">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
        <h1 className="font-playfair text-3xl font-bold text-text-dark">
          Family Not Found
        </h1>
        <p className="mt-4 max-w-md text-text-light">
          We couldn&apos;t find a family with that name. Please check your
          invitation link and try again.
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Section 1: Hero */}
      <HeroSection familyName={data.family.family_name} />

      {/* Section 2: Locations */}
      <LocationsSection />

      {/* Section 3: RSVP Button / Already Submitted */}
      <RsvpButtonSection
        hasSubmitted={hasSubmitted}
        onOpenForm={() => setShowForm(true)}
      />

      {/* Section 4: Wedding List */}
      <WeddingListSection />

      {/* RSVP Form Modal */}
      {showForm && !hasSubmitted && (
        <RsvpForm
          family={data}
          onSubmitted={() => {
            setHasSubmitted(true);
            setShowForm(false);
          }}
          onClose={() => setShowForm(false)}
        />
      )}
    </main>
  );
}
