"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "🎸",
    title: "Exceptional Live Bands",
    description:
      "From live jazz and Top 40 hits to classic rock and country, our curated roster features the finest musicians in the region.",
  },
  {
    icon: "🎧",
    title: "Professional DJ Services",
    description:
      "Expertly mixed, tailored playlists guaranteed to set the perfect mood and keep the dance floor full.",
  },
  {
    icon: "🎤",
    title: "Interactive Event Experiences",
    description:
      "Engaging, professionally hosted karaoke and trivia nights designed to entertain audiences of all types.",
  },
  {
    icon: "✨",
    title: "Bespoke Performances",
    description:
      "Customized entertainment solutions crafted specifically to align with your unique vision and event requirements.",
  },
];

export default function ServicesCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#fefcf8] py-20" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-[#1a2744]">
          Our Entertainment Portfolio
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          We understand that a truly memorable occasion requires a
          multi-dimensional approach. We offer a comprehensive suite of
          entertainment services designed to elevate your event and engage your
          guests:
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-xl border border-[#2d2318]/10 bg-white p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#d4a84b]/40 hover:shadow-xl hover:shadow-[#d4a84b]/10 ${
                visible ? "animate-card-in opacity-100" : "opacity-0"
              }`}
              style={
                visible
                  ? {
                      animationDelay: `${i * 100}ms`,
                      animationFillMode: "both",
                    }
                  : undefined
              }
            >
              {/* Gold accent bar */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#d4a84b] to-[#d4a84b]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="mt-4 font-semibold text-[#1a2744] transition-colors duration-200 group-hover:text-[#d4a84b]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
