"use client";

type ArtistsPageHeaderProps = {
  allTags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
};

export default function ArtistsPageHeader({
  allTags,
  selectedTag,
  onTagSelect,
}: ArtistsPageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#1a2744] py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4a84b]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#d4a84b]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#d4a84b]/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="hero-title hero-word text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl">
          Our Artists
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
          Discover our curated roster of top-tier live talent. Each artist brings
          exceptional skill and stage presence to elevate your event.
        </p>
        {/* Genre filter */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => onTagSelect(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              !selectedTag
                ? "bg-[#d4a84b] text-[#1a2744]"
                : "bg-[#d4a84b]/20 text-[#d4a84b] hover:bg-[#d4a84b]/30"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagSelect(tag)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                selectedTag?.toLowerCase() === tag.toLowerCase()
                  ? "bg-[#d4a84b] text-[#1a2744]"
                  : "bg-[#d4a84b]/20 text-[#d4a84b] hover:bg-[#d4a84b]/30"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
