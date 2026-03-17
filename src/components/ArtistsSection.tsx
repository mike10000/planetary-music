"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import type { Artist } from "@/lib/artists";
import BookArtistModal from "./BookArtistModal";

type ArtistsSectionProps = {
  artists: Artist[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
};

export default function ArtistsSection({
  artists,
  selectedTag,
  onTagSelect,
}: ArtistsSectionProps) {
  const [bookingArtist, setBookingArtist] = useState<Artist | null>(null);

  const filteredArtists = useMemo(() => {
    if (!selectedTag) return artists;
    return artists.filter((a) =>
      a.genres.some((g) => g.toLowerCase() === selectedTag.toLowerCase())
    );
  }, [artists, selectedTag]);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#d4a84b]/10 blur-3xl animate-artist-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-2/3 h-80 w-80 rounded-full bg-[#d4a84b]/8 blur-3xl animate-artist-glow"
        style={{ animationDelay: "2s" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {filteredArtists.length === 0 ? (
            <p className="py-12 text-center text-gray-600">
              No artists match this genre. Try selecting a different tag.
            </p>
          ) : (
            filteredArtists.map((artist) => (
              <article
                key={artist.id}
                className="grid gap-12 lg:grid-cols-2 lg:gap-16"
              >
                <div className="group relative">
                  <div
                    className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#d4a84b]/30 to-[#d4a84b]/5 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-80 animate-artist-glow"
                    aria-hidden
                  />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={artist.imageUrl}
                      alt={artist.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-[#1a2744]">
                    {artist.name}
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {artist.genres.map((genre) => (
                      <button
                        key={genre}
                        onClick={() =>
                          onTagSelect(
                            selectedTag?.toLowerCase() === genre.toLowerCase()
                              ? null
                              : genre
                          )
                        }
                        className="rounded-full bg-[#d4a84b]/20 px-3 py-1 text-sm font-medium text-[#1a2744] transition hover:bg-[#d4a84b]/30"
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                  <p className="mt-6 text-gray-600">{artist.description}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={() => setBookingArtist(artist)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#d4a84b] px-5 py-2.5 text-sm font-medium text-[#1a2744] transition hover:bg-[#e5b95c]"
                    >
                      Book Artist
                    </button>
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
            ))
          )}
        </div>
      </div>

      {/* Video samples - from filtered artists */}
      {filteredArtists.filter((a) => a.videoUrl).length > 0 && (
        <section className="mt-20 bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-[#1a2744]">
              Sample Performances
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Get a taste of what our artists bring to the stage.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {filteredArtists
                .filter((a) => a.videoUrl)
                .slice(0, 2)
                .map((artist) => (
                  <div
                    key={artist.id}
                    className="rounded-xl bg-white p-4 shadow-sm"
                  >
                    <h3 className="font-semibold text-[#1a2744]">
                      {artist.name}
                    </h3>
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
      )}

      {bookingArtist && (
        <BookArtistModal
          artistName={bookingArtist.name}
          isOpen={!!bookingArtist}
          onClose={() => setBookingArtist(null)}
        />
      )}
    </section>
  );
}
