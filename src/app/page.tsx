import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import EmailSignup from "@/components/EmailSignup";
import ServicesCards from "@/components/ServicesCards";
import WebsitesMarketingSection from "@/components/WebsitesMarketingSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* About */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1a2744]">
              About Us
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Established in 2012, Planetary Music is a premier, full-service
              booking and entertainment agency. Rooted in the Washington D.C.
              metropolitan area with a footprint spanning the East Coast, we
              specialize in sourcing and providing top-tier live talent for
              events of all scales and styles.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesCards />

      {/* Websites & Marketing */}
      <WebsitesMarketingSection />

      {/* Email Signup */}
      <section className="bg-[#1a2744] py-20 text-white">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Stay in the loop
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Sign up to hear about events, promotions, and services.
          </p>
          <div className="mt-8">
            <EmailSignup />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#d4a84b]/20 bg-[#1a2744] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Whatever your event demands, Planetary Music provides the expertise
            and the talent to make it extraordinary.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact?type=venue"
              className="w-full rounded-full bg-[#d4a84b] px-8 py-4 text-center font-semibold text-[#1a2744] transition hover:bg-[#e5b95c] sm:w-auto"
            >
              Book for Venues
            </Link>
            <Link
              href="/contact?type=musician"
              className="w-full rounded-full border-2 border-white px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Musicians Sign Up
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="tel:+17039800379"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20 hover:border-white"
            >
              <span aria-hidden className="text-lg">📞</span>
              (703) 980-0379
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
