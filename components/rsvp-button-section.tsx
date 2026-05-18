"use client";

import { AlreadySubmitted } from "@/components/already-submitted";

interface RsvpButtonSectionProps {
  hasSubmitted: boolean;
  onOpenForm: () => void;
}

export function RsvpButtonSection({
  hasSubmitted,
  onOpenForm,
}: Readonly<RsvpButtonSectionProps>) {
  if (hasSubmitted) {
    return (
      <section className="px-6 py-20">
        <AlreadySubmitted />
      </section>
    );
  }

  return (
    <section className="px-6 py-20 text-center">
      <p className="mb-6 font-playfair text-lg italic text-text-light">
        We would be honored by your presence
      </p>
      <button
        onClick={onOpenForm}
        className="w-[300px] animate-pulse rounded-full bg-burgundy px-8 py-4 font-playfair text-lg font-semibold text-white transition-colors hover:bg-burgundy-dark hover:[animation-play-state:paused]"
      >
        RSVP Now
      </button>
    </section>
  );
}
