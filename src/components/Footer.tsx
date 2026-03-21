import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a2744]/10 bg-[#1a2744] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-[#d4a84b]">
              Planetary Music
            </h3>
            <p className="mt-2 text-sm text-white/80">
              Making Music Around The World
            </p>
            <p className="mt-4 text-sm">
              Elevating Events Across the East Coast
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/artists" className="text-sm text-white/80 hover:text-[#d4a84b]">
                  Our Artists
                </Link>
              </li>
              <li>
                <Link href="/djs" className="text-sm text-white/80 hover:text-[#d4a84b]">
                  DJs
                </Link>
              </li>
              <li>
                <Link href="/karaoke-trivia" className="text-sm text-white/80 hover:text-[#d4a84b]">
                  Karaoke & Trivia
                </Link>
              </li>
              <li>
                <Link href="/services/websites-marketing" className="text-sm text-white/80 hover:text-[#d4a84b]">
                  Websites &amp; Marketing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-[#d4a84b]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact?type=venue" className="text-sm text-white/80 hover:text-[#d4a84b]">
                  Book for Venues
                </Link>
              </li>
              <li>
                <Link href="/contact?type=musician" className="text-sm text-white/80 hover:text-[#d4a84b]">
                  Join as Musician
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <a
              href="tel:+17039800379"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#d4a84b] px-4 py-2 text-sm font-semibold text-[#1a2744] transition hover:bg-[#e5b95c]"
            >
              <span aria-hidden>📞</span>
              (703) 980-0379
            </a>
            <a
              href="mailto:Dave@PlanetaryMusic.com"
              className="mt-2 inline-flex items-center gap-2 text-sm text-white/80 hover:text-[#d4a84b]"
            >
              Dave@PlanetaryMusic.com
            </a>
            <p className="mt-2 text-sm text-white/80">
              Washington D.C. Metropolitan Area
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Planetary Music. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
