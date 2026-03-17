import Image from "next/image";
import Link from "next/link";
import { artists } from "@/data/artists";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Our Artists | Planetary Music",
  description:
    "Explore our roster of exceptional live bands and musicians. From jazz to rock, country to Top 40—find the perfect talent for your event.",
};

export default function ArtistsPage() {
  return (
    <main>
      <PageHeader
        title="Our Artists"
        description="Discover our curated roster of top-tier live talent. Each artist brings exceptional skill and stage presence to elevate your event."
        tags={["Jazz", "Rock", "Country", "Top 40"]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {artists.map((artist) => (
              <article
                key={artist.id}
                className="grid gap-12 lg:grid-cols-2 lg:gap-16"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={artist.imageUrl}
                    alt={artist.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-[#1a2744]">
                    {artist.name}
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {artist.genres.map((genre) => (
                      <span
                        key={genre}
                        className="rounded-full bg-[#d4a84b]/20 px-3 py-1 text-sm font-medium text-[#1a2744]"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 text-gray-600">{artist.description}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    {artist.website && (
                      <a
                        href={artist.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#1a2744] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#2a3a5c]"
                      >
                        Visit Website →
                      </a>
                    )}
                    {artist.videoUrl && (
                      <a
                        href={artist.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#1a2744] px-5 py-2.5 text-sm font-medium text-[#1a2744] transition hover:bg-[#1a2744]/5"
                      >
                        Watch Video
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video samples section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#1a2744]">
            Sample Performances
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Get a taste of what our artists bring to the stage.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {artists.filter((a) => a.videoUrl).slice(0, 2).map((artist) => (
              <div key={artist.id} className="rounded-xl bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-[#1a2744]">{artist.name}</h3>
                <div className="relative mt-4 aspect-video overflow-hidden rounded-lg">
                  <iframe
                    src={artist.videoUrl}
                    title={`${artist.name} performance`}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a2744] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Ready to book? Get in touch with our team.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact?type=venue"
              className="rounded-full bg-[#d4a84b] px-8 py-3 font-semibold text-[#1a2744] transition hover:bg-[#e5b95c]"
            >
              Book for Your Venue
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              General Inquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
