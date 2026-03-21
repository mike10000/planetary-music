"use client";

import Link from "next/link";

export default function VenueContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#1a2744]">Get in Touch</h2>
      <p className="mt-4 text-gray-600">
        Whether you&apos;re looking to book a DJ, karaoke, trivia, or live
        bands, we&apos;re here to help elevate your event.
      </p>
      <div className="mt-8 space-y-4">
        <a
          href="tel:+17039800379"
          className="inline-flex items-center gap-2 rounded-full bg-[#d4a84b] px-5 py-3 text-lg font-semibold text-[#1a2744] transition hover:bg-[#e5b95c]"
        >
          <span aria-hidden>📞</span>
          (703) 980-0379
        </a>
        <p className="text-gray-600">
          Washington D.C. Metropolitan Area
        </p>
        <p className="text-gray-600">East Coast coverage</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/contact?type=venue"
          className="rounded-full border-2 border-[#1a2744] px-5 py-2.5 text-sm font-medium text-[#1a2744] transition hover:bg-[#1a2744]/5"
        >
          Book for Venue
        </Link>
        <Link
          href="/contact?type=musician"
          className="rounded-full border-2 border-[#1a2744] px-5 py-2.5 text-sm font-medium text-[#1a2744] transition hover:bg-[#1a2744]/5"
        >
          I&apos;m a Musician
        </Link>
      </div>
    </div>
  );
}
