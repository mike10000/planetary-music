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

  const scrolled = scrollY > 20;

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#1a2744]/10 backdrop-blur-md transition-all duration-300"
      style={{
        transform: `translateY(0)`,
        background: mounted
          ? scrolled
            ? "rgba(255,255,255,0.98)"
            : `rgba(255,255,255,${Math.min(0.7 + scrollY / 400, 0.95)})`
          : undefined,
        boxShadow: scrolled ? "0 4px 20px rgba(26,39,68,0.08)" : "none",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Planetary Music"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/artists"
            className="text-sm font-medium text-[#1a2744] transition hover:text-[#d4a84b]"
          >
            Artists
          </Link>
          <Link
            href="/services/websites-marketing"
            className="text-sm font-medium text-[#1a2744] transition hover:text-[#d4a84b]"
          >
            Websites &amp; Marketing
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-[#1a2744] transition hover:text-[#d4a84b]"
          >
            Contact
          </Link>
          <div className="flex gap-3">
            <Link
              href="/contact?type=venue"
              className="rounded-full bg-[#d4a84b] px-4 py-2 text-sm font-medium text-[#1a2744] transition hover:bg-[#e5b95c]"
            >
              Venues
            </Link>
            <Link
              href="/contact?type=musician"
              className="rounded-full bg-[#1a2744] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#2a3a5c]"
            >
              Musicians
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
