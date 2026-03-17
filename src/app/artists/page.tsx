import Link from "next/link";
import { getArtists, getAllTags } from "@/lib/artists";
import ArtistsPageContent from "@/components/ArtistsPageContent";

export const metadata = {
  title: "Our Artists | Planetary Music",
  description:
    "Explore our roster of exceptional live bands and musicians. From jazz to rock, country to Top 40—find the perfect talent for your event.",
};

export default async function ArtistsPage() {
  const artists = await getArtists();
  const allTags = getAllTags(artists);

  return (
    <main>
      <ArtistsPageContent artists={artists} allTags={allTags} />

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
