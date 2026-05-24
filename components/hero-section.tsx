"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  familyName: string;
}

export function HeroSection({ familyName }: Readonly<HeroSectionProps>) {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 text-center md:py-24">
      {/* Invitation intro */}
      <div className="w-full max-w-4xl">
        <p className="font-playfair text-lg italic leading-relaxed text-burgundy md:text-2xl">
          With Joyous hearts,
        </p>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-10">
          <div>
            <p className="font-playfair text-base uppercase tracking-[0.1em] text-burgundy md:text-2xl md:tracking-[0.12em]">
              Mr &amp; Mrs
            </p>
            <p className="mt-2 font-playfair text-xl italic leading-tight text-rose md:text-3xl">
              Elie &amp; Adele Mosleh
            </p>
          </div>

          <div>
            <p className="font-playfair text-base uppercase tracking-[0.1em] text-burgundy md:text-2xl md:tracking-[0.12em]">
              Mr &amp; Mrs
            </p>
            <p className="mt-2 font-playfair text-xl italic leading-tight text-rose md:text-3xl">
              Noël &amp; Micheline El Hourani
            </p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl font-playfair text-lg italic leading-relaxed text-burgundy md:text-2xl">
          Request the honor of your presence to the wedding of their children
        </p>

        <h1 className="mt-9 font-vibes text-5xl text-burgundy md:mt-10 md:text-7xl lg:text-8xl">
          Dante &amp; Marie
        </h1>
      </div>

      {/* Date & Location */}
      <div className="mt-8 flex items-center gap-4 text-sm text-text-dark md:text-base">
        <span>Saturday</span>
        <div className="flex flex-col items-center border-x border-champagne-dark px-4">
          <span className="text-xs uppercase tracking-wider text-text-light">
            August
          </span>
          <span className="font-playfair text-3xl font-bold text-burgundy md:text-4xl">
            29
          </span>
          <span className="mt-1 text-xs text-text-light">2026</span>
        </div>
        <span>06:00 PM</span>
      </div>

      <p className="mt-4 text-sm text-text-light">Beyrouth, Lebanon</p>

      {/* Family greeting */}
      <p className="mt-8 font-playfair text-lg italic text-text-light md:text-xl">
        Dear {familyName} Family
      </p>

      {/* Photo gallery - Triangle layout */}
      <div className="mt-12 flex w-full max-w-4xl flex-col items-center gap-4">
        {/* Photo 1 - centered on top */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-champagne sm:w-2/3 md:w-1/2"
        >
          <Image
            src="/photos/hero-1.png"
            alt="Wedding photo 1"
            fill
            className="object-cover object-bottom"
            sizes="(max-width: 640px) 100vw, 50vw"
            priority
          />
        </motion.div>

        {/* Photos 2 & 3 - side by side below */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.45, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-champagne"
          >
            <Image
              src="/photos/hero-2.png"
              alt="Wedding photo 2"
              fill
              className="object-cover object-bottom"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.2, delay: 1, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-champagne"
          >
            <Image
              src="/photos/hero-3.png"
              alt="Wedding photo 3"
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
