import { Suspense } from "react";
import ContactFormWrapper from "@/components/ContactFormWrapper";

export const metadata = {
  title: "Contact Us | Planetary Music",
  description:
    "Get in touch with Planetary Music for event booking, musician inquiries, or general questions. We're here to help elevate your event.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#1a2744] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Ready to elevate your event? We&apos;d love to hear from you. Fill out
            the form below or give us a call.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
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
                  className="rounded-full bg-[#1a2744] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#2a3a5c]"
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
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <Suspense fallback={<div className="animate-pulse">Loading form...</div>}>
                <ContactFormWrapper />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
