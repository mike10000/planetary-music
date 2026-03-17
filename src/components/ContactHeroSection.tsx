"use client";

import { useSearchParams } from "next/navigation";

export default function ContactHeroSection() {
  const searchParams = useSearchParams();
  const type = (searchParams?.get("type") as "venue" | "musician") || "general";

  if (type === "musician") {
    return (
      <section className="bg-[#1a2744] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Join as a Musician</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Planetary Music is Dave Mascetello&apos;s booking agency for the Washington
            D.C. area. Sign up below to be considered for bookings—corporate
            events, weddings, private parties, and venues across the region.
          </p>
        </div>
      </section>
    );
  }

  if (type === "venue") {
    return (
      <section className="bg-[#1a2744] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Book for Your Venue</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Tell us about your event and we&apos;ll match you with the perfect
            talent—live bands, DJs, karaoke, trivia, and more.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#1a2744] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/90">
          Ready to elevate your event? We&apos;d love to hear from you. Fill out
          the form below or give us a call.
        </p>
      </div>
    </section>
  );
}
