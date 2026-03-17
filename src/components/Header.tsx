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
    "relative text-sm font-semibold tracking-wide transition-colors duration-200 nav-link";

  return (
    <header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-500"
      style={
        mounted
          ? {
              boxShadow: scrolled
                ? "0 4px 20px rgba(13,21,37,0.08), 0 0 0 1px rgba(13,21,37,0.06)"
                : "0 1px 0 rgba(13,21,37,0.06)",
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
            className={`${navLinkClass} px-3 py-2 rounded-lg text-[#0d1525] hover:text-[#d4a84b]`}
          >
            Artists
          </Link>
          <Link
            href="/services/websites-marketing"
            className={`${navLinkClass} px-3 py-2 rounded-lg text-[#0d1525] hover:text-[#d4a84b]`}
          >
            Websites &amp; Marketing
          </Link>
          <Link
            href="/contact"
            className={`${navLinkClass} px-3 py-2 rounded-lg text-[#0d1525] hover:text-[#d4a84b]`}
          >
            Contact
          </Link>
          <div className="ml-2 flex gap-2 sm:gap-3">
            <Link
              href="/contact?type=venue"
              className="rounded-full bg-[#d4a84b] px-4 py-2 text-sm font-semibold text-[#1a2744] shadow-lg shadow-[#d4a84b]/20 transition-all duration-200 hover:bg-[#e5b95c] hover:shadow-[#d4a84b]/30 hover:scale-[1.02]"
            >
              Venues
            </Link>
            <Link
              href="/contact?type=musician"
              className="rounded-full border-2 border-[#0d1525] px-4 py-2 text-sm font-semibold text-[#0d1525] transition-all duration-200 hover:bg-[#0d1525]/5"
            >
              Musicians
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
