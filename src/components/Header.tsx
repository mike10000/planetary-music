"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = scrollY > 60;

  const navLinkClass =
    "relative text-sm font-extrabold tracking-wide transition-colors duration-200 nav-link";

  return (
    <header
      className="sticky top-0 z-50 bg-[#fefcf8]/95 backdrop-blur-md transition-all duration-500"
      style={
        mounted
          ? {
              boxShadow: scrolled
                ? "0 4px 20px rgba(45,35,24,0.06), 0 0 0 1px rgba(45,35,24,0.04)"
                : "0 1px 0 rgba(45,35,24,0.04)",
            }
          : undefined
      }
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="Planetary Music"
            width={120}
            height={48}
            className="h-9 w-auto object-contain sm:h-10"
            priority
          />
        </Link>
        <div className="flex items-center gap-1 sm:gap-8">
          <Link
            href="/artists"
            className={`${navLinkClass} px-3 py-2 rounded-lg text-[#2d2318] hover:text-[#d4a84b]`}
          >
            Artists
          </Link>
          <Link
            href="/services/websites-marketing"
            className={`${navLinkClass} px-3 py-2 rounded-lg text-[#2d2318] hover:text-[#d4a84b]`}
          >
            Websites &amp; Marketing
          </Link>
          <Link
            href="/contact"
            className={`${navLinkClass} px-3 py-2 rounded-lg text-[#2d2318] hover:text-[#d4a84b]`}
          >
            Contact
          </Link>
          <div className="ml-2 flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact?type=venue"
              className="rounded-full bg-[#d4a84b] px-4 py-2 text-sm font-extrabold text-[#1a2744] shadow-lg shadow-[#d4a84b]/20 transition-all duration-200 hover:bg-[#e5b95c] hover:shadow-[#d4a84b]/30 hover:scale-[1.02]"
            >
              Venues
            </Link>
            <Link
              href="/contact?type=musician"
              className="rounded-full border-2 border-[#2d2318] px-4 py-2 text-sm font-extrabold text-[#2d2318] transition-all duration-200 hover:bg-[#2d2318]/5"
            >
              Musicians
            </Link>
            <a
              href="tel:+17039800379"
              className="ml-2 flex items-center gap-1.5 rounded-full border-2 border-[#2d2318] px-3 py-2 text-sm font-extrabold text-[#2d2318] transition-all duration-200 hover:bg-[#2d2318]/5 sm:ml-4 sm:px-4"
              aria-label="Call (703) 980-0379"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-[#d4a84b] sm:h-5 sm:w-5"
                aria-hidden
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="hidden sm:inline">(703) 980-0379</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
