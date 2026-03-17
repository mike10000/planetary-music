"use client";

import { useSearchParams } from "next/navigation";
import OvertureForm from "./OvertureForm";
import MusicianSignupForm from "./MusicianSignupForm";

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
            ? "Fill out the form to sign up for our roster. You can also call (703) 980-0379 or email Dave@planetarymusic.com."
            : "Send us a message and we'll get back to you shortly."}
      </p>
      <div className="mt-6">
        {type === "musician" ? (
          <MusicianSignupForm />
        ) : (
          <OvertureForm formType={type} />
        )}
      </div>
    </>
  );
}
