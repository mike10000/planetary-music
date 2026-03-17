"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    const updateParallax = () => {
      const scrollY = window.scrollY;
      if (!videoRef.current) return;

      // Parallax: video moves with scroll (higher = more visible movement)
      const parallaxY = scrollY * 0.9;
      videoRef.current.style.transform = `translate3d(0, calc(-10% + ${parallaxY}px), 0)`;
    };

    const handleScroll = () => requestAnimationFrame(updateParallax);

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] overflow-hidden bg-[#1a2744] py-24 text-white"
    >
      {/* Parallax video - fixed so it stays while content scrolls over it */}
      <div
        ref={videoRef}
        className="parallax-video-container absolute left-0 top-0 h-[120%] w-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-25"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#1a2744]/60 via-[#1a2744]/40 to-[#1a2744]/80"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1
          className={`hero-title text-4xl sm:text-5xl lg:text-7xl xl:text-8xl ${
            mounted ? "" : "opacity-0"
          }`}
        >
          <span className={`hero-word inline ${mounted ? "hero-word-reveal" : ""}`}>
            Making Music
          </span>
          <br />
          <span className={`hero-word block ${mounted ? "hero-word-reveal-delay-1" : ""}`}>
            Around the World
          </span>
        </h1>
        <p
          className={`mx-auto mt-8 max-w-2xl text-lg text-white/90 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Premier full-service booking and entertainment agency. Your vision.
          Our talent. Beyond the band, we deliver a total entertainment
          experience.
        </p>
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/contact?type=venue"
            className="hero-cta w-full rounded-full bg-[#d4a84b] px-8 py-4 text-center font-semibold text-[#1a2744] transition hover:bg-[#e5b95c] hover:scale-105 sm:w-auto"
          >
            Book for Your Venue
          </Link>
          <Link
            href="/contact?type=musician"
            className="hero-cta w-full rounded-full border-2 border-white px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10 hover:scale-105 sm:w-auto"
          >
            Join as a Musician
          </Link>
        </div>
      </div>

    </section>
  );
}
