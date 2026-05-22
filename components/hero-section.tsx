"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  familyName: string;
}

export function HeroSection({ familyName }: Readonly<HeroSectionProps>) {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 text-center md:py-24">
      {/* Save the Date */}
      <p className="text-xs uppercase tracking-[0.3em] text-text-light md:text-sm">
        Save the Date
      </p>

      {/* The Wedding of */}
      <p className="mt-6 font-vibes text-2xl text-burgundy md:text-3xl">
        The Wedding of
      </p>

      {/* Names and parents */}
      <div className="mt-4 w-full max-w-4xl">
        <div className="grid grid-cols-1 gap-4 md:hidden">
          <div className="text-center">
            <h1 className="font-vibes text-5xl text-burgundy">Dante El Hourani</h1>
            <p className="mt-2 font-playfair text-xl italic text-rose">
              Noël &amp; Micheline El Hourani
            </p>
          </div>

          <div className="flex items-center justify-center">
            <span className="font-vibes text-4xl text-rose">&amp;</span>
          </div>

          <div className="text-center">
            <h1 className="font-vibes text-5xl text-burgundy">Marie Mosleh</h1>
            <p className="mt-2 font-playfair text-xl italic text-rose">
              Elie &amp; Adele Mosleh
            </p>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-[1fr_minmax(64px,96px)_1fr] md:grid-rows-[auto_auto] md:items-center md:gap-x-8 md:gap-y-3">
          <h1 className="text-center font-vibes text-7xl text-burgundy lg:text-8xl">
            Dante El Hourani
          </h1>
          <div className="flex items-center justify-center">
            <span className="font-vibes text-5xl text-rose lg:text-6xl">&amp;</span>
          </div>
          <h1 className="text-center font-vibes text-7xl text-burgundy lg:text-8xl">
            Marie Mosleh
          </h1>

          <p className="text-center font-playfair text-2xl italic text-rose">
            Noël &amp; Micheline El Hourani
          </p>
          <div aria-hidden className="h-px" />
          <p className="text-center font-playfair text-2xl italic text-rose">
            Elie &amp; Adele Mosleh
          </p>
        </div>
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
          <span className="text-xs text-text-light">2026</span>
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
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
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
            transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
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
