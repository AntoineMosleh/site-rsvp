"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Church Ceremony at Saint Georges Orthodox Church",
    time: "6:00 PM",
    venue: "",
    photo: "/photos/church.png",
    mapLink: process.env.NEXT_PUBLIC_CHURCH_MAP_LINK || "#",
  },
  {
    name: "Reception Dinner at Aldea Events Venue",
    time: "7:30 PM",
    venue: "",
    photo: "/photos/restaurant.png",
    mapLink: process.env.NEXT_PUBLIC_RESTAURANT_MAP_LINK || "#",
  },
];

export function LocationsSection() {
  return (
    <section className="bg-champagne px-6 py-16 md:py-24">
      <h2 className="mb-12 text-center font-vibes text-4xl text-burgundy md:text-5xl">
        Ceremony & Reception
      </h2>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {locations.map((location) => (
          <div key={location.name} className="flex flex-col items-center">
            {/* Photo with hover zoom */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-champagne-dark">
              <Image
                src={location.photo}
                alt={location.venue}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              {/* Placeholder when no image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-vibes text-2xl text-text-light">
                  {location.venue}
                </span>
              </div>
            </div>

            {/* Venue name */}
            <h3 className="mt-4 font-playfair text-xl italic leading-relaxed text-burgundy md:text-2xl">
              {location.name}
            </h3>
            <p className="mt-2 font-playfair text-base italic text-burgundy md:text-lg">
              {location.time}
            </p>

            {/* Google Maps button */}
            <a
              href={location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-burgundy px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-burgundy-dark"
            >
              <MapPin className="h-4 w-4" />
              View on Map
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
