import Link from "next/link";
import EmailSignup from "./EmailSignup";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a2744]/10 bg-[#1a2744] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Email signup */}
        <div className="mb-12 rounded-xl bg-white/5 px-6 py-8">
          <h3 className="text-lg font-semibold text-[#d4a84b]">
            Stay in the loop
          </h3>
          <p className="mt-2 text-sm text-white/80">
            Sign up to hear about events, promotions, and services.
          </p>
          <div className="mt-4">
            <EmailSignup />
          </div>
        </div>
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
            <p className="mt-4 text-sm text-white/80">
              <a href="tel:+15551234567" className="hover:text-[#d4a84b]">
                (555) 123-4567
              </a>
            </p>
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
