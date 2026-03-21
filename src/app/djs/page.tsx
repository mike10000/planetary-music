import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "DJs | Planetary Music",
  description:
    "Professional DJ services for weddings, corporate events, and private parties. Premier DJ talent across the Washington D.C. area.",
};

export default function DJsPage() {
  return (
    <main>
      <PageHeader
        title="DJs"
        description="Professional DJ services to keep your event moving. From weddings to corporate parties, our DJs bring the energy and expertise to create unforgettable experiences."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-2xl text-lg text-gray-600">
            Our curated roster of professional DJs delivers top-tier entertainment for any occasion. Whether you need a wedding DJ, corporate event host, or club-style party atmosphere, we connect you with the right talent.
          </p>
          <Link
            href="/contact?type=venue"
            className="mt-8 inline-flex rounded-full bg-[#d4a84b] px-6 py-3 text-sm font-semibold text-[#1a2744] transition hover:bg-[#e5b95c]"
          >
            Book a DJ
          </Link>
        </div>
      </section>
    </main>
  );
}
