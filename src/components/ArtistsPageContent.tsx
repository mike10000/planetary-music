"use client";

import { useState } from "react";
import type { Artist } from "@/lib/artists";
import ArtistsPageHeader from "./ArtistsPageHeader";
import ArtistsSection from "./ArtistsSection";

type ArtistsPageContentProps = {
  artists: Artist[];
  allTags: string[];
};

export default function ArtistsPageContent({
  artists,
  allTags,
}: ArtistsPageContentProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <>
      <ArtistsPageHeader
        allTags={allTags}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />
      <ArtistsSection
        artists={artists}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />
    </>
  );
}
