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
            <p className="mt-4 text-xl font-semibold text-[#d4a84b]">
              Your Total Entertainment Solution
            </p>
            <p className="mt-6 text-lg text-gray-600">
              At Planetary Music, we believe entertainment should be seamless
              and spectacular. Serving the D.C. area and the East Coast since
              2012, we are more than just a booking agency; we are your
              full-service entertainment partners.
            </p>
            <p className="mt-6 text-lg text-gray-600">
              We pride ourselves on a &quot;limitless&quot; approach to genres
              and formats. Looking for a specific vibe? We book everything from
              reggae and blues to the latest chart-toppers. Need more than just
              music? We provide a full suite of interactive entertainment,
              including:
            </p>
            <ul className="mt-6 space-y-3 text-left text-lg text-gray-600 max-w-xl mx-auto">
              <li className="flex gap-3">
                <span className="flex-shrink-0 text-[#d4a84b]">•</span>
                <span><strong className="text-[#1a2744]">Professional DJs</strong> to keep the dance floor packed.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 text-[#d4a84b]">•</span>
                <span><strong className="text-[#1a2744]">Karaoke Hosts</strong> to let your guests be the stars.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 text-[#d4a84b]">•</span>
                <span><strong className="text-[#1a2744]">Trivia Nights</strong> for engaging, competitive fun.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 text-[#d4a84b]">•</span>
                <span><strong className="text-[#1a2744]">Custom Entertainment</strong> tailored specifically to your event&apos;s needs.</span>
              </li>
            </ul>
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
