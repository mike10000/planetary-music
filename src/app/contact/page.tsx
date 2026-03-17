import { Suspense } from "react";
import ContactContent from "@/components/ContactContent";
import ContactHeroSection from "@/components/ContactHeroSection";

export const metadata = {
  title: "Contact Us | Planetary Music",
  description:
    "Get in touch with Planetary Music for event booking, musician inquiries, or general questions. We're here to help elevate your event.",
};

export default function ContactPage() {
  return (
    <main>
      <Suspense fallback={
        <section className="bg-[#1a2744] py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Ready to elevate your event? We&apos;d love to hear from you.
            </p>
          </div>
        </section>
      }>
        <ContactHeroSection />
      </Suspense>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="animate-pulse h-64 rounded-lg bg-gray-100" />}>
            <ContactContent />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
