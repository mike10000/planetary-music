"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const musicianServices = [
  "Booking opportunities at corporate events, weddings, private parties, and venues across the East Coast",
  "Access to our curated roster and promotional support to help you reach new audiences",
  "Professional representation and event coordination so you can focus on performing",
  "Custom websites and marketing support through our Websites & Marketing services",
  "Fair compensation and clear communication for every gig",
];

export default function ContactInfoSection() {
  const searchParams = useSearchParams();
  const type = (searchParams?.get("type") as "venue" | "musician") || "general";

  if (type === "musician") {
    return (
      <div>
        <h2 className="text-2xl font-bold text-[#1a2744]">
          Sign Up to Be Booked
        </h2>
        <p className="mt-4 text-gray-600">
          Planetary Music is Dave Mascetello&apos;s booking agency serving the
          Washington D.C. metropolitan area. To join our roster and be considered
          for gigs, fill out the form above or reach out directly by phone or email.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-[#1a2744]">
          What We Offer Musicians
        </h3>
        <ul className="mt-4 space-y-3 text-gray-600">
          {musicianServices.map((service) => (
            <li key={service} className="flex gap-3">
              <span className="mt-1 flex-shrink-0 text-[#d4a84b]">•</span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/services/websites-marketing"
          className="mt-4 inline-block text-sm font-medium text-[#d4a84b] hover:text-[#b8923f]"
        >
          Learn more about Websites &amp; Marketing →
        </Link>

        <h3 className="mt-8 text-lg font-semibold text-[#1a2744]">
          Get in Touch
        </h3>
        <div className="mt-4 space-y-3">
          <a
            href="tel:+17039800379"
            className="flex items-center gap-2 text-gray-600 hover:text-[#1a2744]"
          >
            <span aria-hidden>📞</span>
            (703) 980-0379
          </a>
          <a
            href="mailto:Dave@planetarymusic.com"
            className="flex items-center gap-2 text-gray-600 hover:text-[#1a2744]"
          >
            <span aria-hidden>✉</span>
            Dave@planetarymusic.com
          </a>
          <p className="text-gray-600">
            Washington D.C. Metropolitan Area · East Coast coverage
          </p>
        </div>
        <a
          href="tel:+17039800379"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#d4a84b] px-5 py-3 text-lg font-semibold text-[#1a2744] transition hover:bg-[#e5b95c]"
        >
          <span aria-hidden>📞</span>
          Call (703) 980-0379
        </a>

        <div className="mt-8">
          <a
            href="/contact?type=venue"
            className="rounded-full border-2 border-[#1a2744] px-5 py-2.5 text-sm font-medium text-[#1a2744] transition hover:bg-[#1a2744]/5"
          >
            I&apos;m a Venue
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#1a2744]">
        Get in Touch
      </h2>
      <p className="mt-4 text-gray-600">
        Whether you&apos;re a venue looking to book talent or a musician
        interested in joining our roster, we&apos;re here to help.
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
        <p className="text-gray-600">
          East Coast coverage
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="/contact?type=venue"
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
            type === "venue"
              ? "bg-[#1a2744] text-white hover:bg-[#2a3a5c]"
              : "border-2 border-[#1a2744] text-[#1a2744] hover:bg-[#1a2744]/5"
          }`}
        >
          I&apos;m a Venue
        </a>
        <a
          href="/contact?type=musician"
          className="rounded-full border-2 border-[#1a2744] px-5 py-2.5 text-sm font-medium text-[#1a2744] transition hover:bg-[#1a2744]/5"
        >
          I&apos;m a Musician
        </a>
      </div>
    </div>
  );
}
