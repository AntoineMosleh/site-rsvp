"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import type { FamilyWithMembers } from "@/lib/types/database";

const formSchema = z.object({
  church: z.record(z.string(), z.boolean()),
  restaurant: z.record(z.string(), z.boolean()),
});

type FormData = z.infer<typeof formSchema>;

interface RsvpFormProps {
  family: FamilyWithMembers;
  onSubmitted: () => void;
  onClose: () => void;
}

export function RsvpForm({
  family,
  onSubmitted,
  onClose,
}: Readonly<RsvpFormProps>) {
  const [submitting, setSubmitting] = useState(false);

  // Build default values: all members unchecked
  const defaultCheckboxes: Record<string, boolean> = {};
  for (const member of family.members) {
    defaultCheckboxes[member.id] = false;
  }

  const {
    register,
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      church: defaultCheckboxes,
      restaurant: { ...defaultCheckboxes },
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);

    const body = {
      family_id: family.family.id,
      church_attendance: family.members.map((m) => ({
        member_id: m.id,
        attending: data.church[m.id] ?? false,
      })),
      restaurant_attendance: family.members.map((m) => ({
        member_id: m.id,
        attending: data.restaurant[m.id] ?? false,
      })),
    };

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.status === 409) {
        toast.error("Your family has already submitted a response.");
        onSubmitted();
        return;
      }

      if (!res.ok) {
        toast.error("Something went wrong. Please try again.");
        return;
      }

      toast.success("RSVP submitted successfully!");
      onSubmitted();
    } catch {
      toast.error("Unable to connect to the server.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-cream p-6 shadow-xl md:p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-text-light transition-colors hover:bg-champagne-dark hover:text-text-dark"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <h2 className="mb-1 text-center font-vibes text-4xl text-burgundy md:text-5xl">
          Your response!
        </h2>
        <p className="text-center font-playfair text-lg italic text-text-dark">
          We would be delighted to see you
        </p>
        <p className="mb-8 mt-2 text-center text-sm text-text-light">
          Please fill out this form to let us know if you will be attending the
          wedding.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Church Attendance */}
          <fieldset>
            <legend className="mb-3 font-playfair text-sm font-semibold text-text-dark">
              Church Ceremony Attendance
            </legend>
            <div className="space-y-2 rounded-lg border border-champagne-dark bg-champagne p-4">
              {family.members.map((member) => (
                <label
                  key={`church-${member.id}`}
                  className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-champagne-dark/50"
                >
                  <input
                    type="checkbox"
                    {...register(`church.${member.id}`)}
                    className="h-5 w-5 rounded border-champagne-dark text-burgundy accent-burgundy"
                  />
                  <span className="text-text-dark">{member.first_name}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Restaurant Attendance */}
          <fieldset>
            <legend className="mb-3 font-playfair text-sm font-semibold text-text-dark">
              Reception Dinner Attendance
            </legend>
            <div className="space-y-2 rounded-lg border border-champagne-dark bg-champagne p-4">
              {family.members.map((member) => (
                <label
                  key={`restaurant-${member.id}`}
                  className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-champagne-dark/50"
                >
                  <input
                    type="checkbox"
                    {...register(`restaurant.${member.id}`)}
                    className="h-5 w-5 rounded border-champagne-dark text-burgundy accent-burgundy"
                  />
                  <span className="text-text-dark">{member.first_name}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-burgundy py-4 font-playfair text-lg font-semibold text-white transition-colors hover:bg-burgundy-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Confirm Attendance"}
          </button>
        </form>
      </div>
    </div>
  );
}
