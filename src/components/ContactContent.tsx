"use client";

import { useSearchParams } from "next/navigation";
import ContactFormWrapper from "./ContactFormWrapper";
import ContactInfoSection from "./ContactInfoSection";

export default function ContactContent() {
  const searchParams = useSearchParams();
  const type = (searchParams?.get("type") as "venue" | "musician") || "general";

  if (type === "musician") {
    return (
      <div className="flex flex-col gap-12">
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <ContactFormWrapper />
        </div>
        <ContactInfoSection />
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <ContactInfoSection />
      <div className="rounded-xl bg-white p-8 shadow-lg">
        <ContactFormWrapper />
      </div>
    </div>
  );
}
