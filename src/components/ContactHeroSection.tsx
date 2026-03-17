"use client";

import { useSearchParams } from "next/navigation";

export default function ContactHeroSection() {
  const searchParams = useSearchParams();
  const type = (searchParams?.get("type") as "venue" | "musician") || "general";

  const heroSectionClass =
    "relative overflow-hidden bg-[#1a2744] py-20 text-white";
  const heroAccents = (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4a84b]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#d4a84b]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#d4a84b]/40 to-transparent" />
    </>
  );
  const heroTitleClass =
    "hero-title hero-word text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl";

  if (type === "musician") {
    return (
      <section className={heroSectionClass}>
        {heroAccents}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className={heroTitleClass}>Join as a Musician</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            Planetary Music is Dave Mascetello&apos;s booking agency for the
            Washington D.C. area. Sign up below to be considered for
            bookings—corporate events, weddings, private parties, and venues
            across the region.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full bg-[#d4a84b]/20 px-4 py-1.5 text-sm font-medium text-[#d4a84b]">
              Solo Artists
            </span>
            <span className="inline-flex items-center rounded-full bg-[#d4a84b]/20 px-4 py-1.5 text-sm font-medium text-[#d4a84b]">
              Bands
            </span>
            <span className="inline-flex items-center rounded-full bg-[#d4a84b]/20 px-4 py-1.5 text-sm font-medium text-[#d4a84b]">
              DJs & Hosts
            </span>
          </div>
        </div>
      </section>
    );
  }

  if (type === "venue") {
    return (
      <section className={heroSectionClass}>
        {heroAccents}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className={heroTitleClass}>Book for Your Venue</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            Tell us about your event and we&apos;ll match you with the perfect
            talent—live bands, DJs, karaoke, trivia, and more.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full bg-[#d4a84b]/20 px-4 py-1.5 text-sm font-medium text-[#d4a84b]">
              Live Bands
            </span>
            <span className="inline-flex items-center rounded-full bg-[#d4a84b]/20 px-4 py-1.5 text-sm font-medium text-[#d4a84b]">
              DJs
            </span>
            <span className="inline-flex items-center rounded-full bg-[#d4a84b]/20 px-4 py-1.5 text-sm font-medium text-[#d4a84b]">
              Karaoke & Trivia
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={heroSectionClass}>
      {heroAccents}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className={heroTitleClass}>Contact Us</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
          Ready to elevate your event? We&apos;d love to hear from you. Fill out
          the form below or give us a call.
        </p>
      </div>
    </section>
  );
}
