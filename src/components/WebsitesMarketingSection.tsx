"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const features = [
  "Custom-designed band websites",
  "Tour dates, music players & booking integration",
  "Social media strategy & content planning",
  "Press kits & promotional materials",
];

export default function WebsitesMarketingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative overflow-hidden rounded-2xl bg-[#1a2744] shadow-xl transition-shadow duration-500 ${
            visible ? "shadow-[#d4a84b]/10" : ""
          }`}
        >
          {/* Subtle gold gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4a84b]/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#d4a84b]/10 blur-3xl pointer-events-none" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            <div
              className={`flex flex-col justify-center p-12 text-white ${
                visible ? "animate-slide-in-left opacity-100" : "opacity-0"
              }`}
              style={
                visible
                  ? { animationDelay: "0ms", animationFillMode: "both" }
                  : undefined
              }
            >
              <span
                className={`inline-block text-3xl transition-transform duration-500 ${
                  visible ? "animate-icon-pop" : ""
                }`}
                style={
                  visible
                    ? { animationDelay: "200ms", animationFillMode: "both" }
                    : undefined
                }
              >
                🌐
              </span>
              <h2 className="mt-4 text-3xl font-bold">Websites &amp; Marketing for Artists</h2>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                Your band deserves a professional online presence. We build
                custom websites and create marketing strategies that help you
                reach more fans, book more gigs, and grow your career.
              </p>
              <ul className="mt-8 space-y-3">
                {features.map((feature, i) => (
                  <li
                    key={feature}
                    className={`flex gap-3 items-center text-white/90 transition-all duration-300 ${
                      visible ? "animate-slide-in-left opacity-100" : "opacity-0"
                    }`}
                    style={
                      visible
                        ? {
                            animationDelay: `${350 + i * 80}ms`,
                            animationFillMode: "both",
                          }
                        : undefined
                    }
                  >
                    <span className="flex-shrink-0 text-[#d4a84b] text-lg">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`flex flex-col items-center justify-center bg-white/5 p-12 lg:p-16 ${
                visible ? "animate-slide-in-right opacity-100" : "opacity-0"
              }`}
              style={
                visible
                  ? { animationDelay: "150ms", animationFillMode: "both" }
                  : undefined
              }
            >
              <p className="text-center text-lg font-medium text-white">
                Ready to build your online presence?
              </p>
              <Link
                href="/services/websites-marketing"
                className="group mt-6 rounded-full border-2 border-[#d4a84b] bg-[#d4a84b]/10 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#d4a84b] hover:text-[#1a2744] hover:scale-105 hover:shadow-lg hover:shadow-[#d4a84b]/30"
              >
                Submit a request
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
