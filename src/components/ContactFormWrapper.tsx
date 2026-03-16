"use client";

import { useSearchParams } from "next/navigation";
import OvertureForm from "./OvertureForm";

export default function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const type = (searchParams?.get("type") as "venue" | "musician") || "general";

  return (
    <>
      <h3 className="text-xl font-semibold text-[#1a2744]">
        {type === "venue"
          ? "Book for Your Venue"
          : type === "musician"
            ? "Join as a Musician"
            : "General Inquiry"}
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        {type === "venue"
          ? "Tell us about your event and we'll match you with the perfect talent."
          : type === "musician"
            ? "Share your music and we'll review your application."
            : "Send us a message and we'll get back to you shortly."}
      </p>
      <div className="mt-6">
        <OvertureForm formType={type} />
      </div>
    </>
  );
}
