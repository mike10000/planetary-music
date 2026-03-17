import Link from "next/link";
import HeroSection from "@/components/HeroSection";

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
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#1a2744]">
            Our Entertainment Portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            We understand that a truly memorable occasion requires a
            multi-dimensional approach. We offer a comprehensive suite of
            entertainment services designed to elevate your event and engage
            your guests:
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="text-2xl">🎸</div>
              <h3 className="mt-4 font-semibold text-[#1a2744]">
                Exceptional Live Bands
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                From live jazz and Top 40 hits to classic rock and country, our
                curated roster features the finest musicians in the region.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="text-2xl">🎧</div>
              <h3 className="mt-4 font-semibold text-[#1a2744]">
                Professional DJ Services
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Expertly mixed, tailored playlists guaranteed to set the perfect
                mood and keep the dance floor full.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="text-2xl">🎤</div>
              <h3 className="mt-4 font-semibold text-[#1a2744]">
                Interactive Event Experiences
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Engaging, professionally hosted karaoke and trivia nights
                designed to entertain audiences of all types.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="text-2xl">✨</div>
              <h3 className="mt-4 font-semibold text-[#1a2744]">
                Bespoke Performances
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Customized entertainment solutions crafted specifically to
                align with your unique vision and event requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* CTA */}
      <section className="bg-[#1a2744] py-20 text-white">
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
          <p className="mt-8 text-white/80">
            Or give us a call:{" "}
            <a href="tel:+15551234567" className="font-medium hover:text-[#d4a84b]">
              (555) 123-4567
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
