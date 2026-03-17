import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import EmailSignup from "@/components/EmailSignup";
import ServicesCards from "@/components/ServicesCards";

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
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-[#1a2744]">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center p-12 text-white">
                <span className="text-2xl">🌐</span>
                <h2 className="mt-4 text-3xl font-bold">
                  Websites &amp; Marketing for Artists
                </h2>
                <p className="mt-6 text-lg text-white/90">
                  Your band deserves a professional online presence. We build
                  custom websites and create marketing strategies that help you
                  reach more fans, book more gigs, and grow your career.
                </p>
                <ul className="mt-8 space-y-3 text-white/90">
                  <li className="flex gap-2">
                    <span className="text-[#d4a84b]">•</span>
                    Custom-designed band websites
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#d4a84b]">•</span>
                    Tour dates, music players &amp; booking integration
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#d4a84b]">•</span>
                    Social media strategy &amp; content planning
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#d4a84b]">•</span>
                    Press kits &amp; promotional materials
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 p-12 lg:p-16">
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="text-lg font-medium text-white">
                    Ready to build your online presence?
                  </p>
                  <Link
                    href="/services/websites-marketing"
                    className="mt-6 rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    Submit a request
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
