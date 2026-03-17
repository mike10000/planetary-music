import { createSupabaseClient } from "./supabase";
import { artists as staticArtists } from "@/data/artists";

export type Artist = {
  id: string;
  name: string;
  description: string;
  website?: string;
  videoUrl?: string;
  imageUrl: string;
  genres: string[];
};

function dbToArtist(db: {
  id: string;
  name: string;
  description: string;
  website: string | null;
  video_url: string | null;
  image_url: string;
  genres: string[];
}): Artist {
  return {
    id: db.id,
    name: db.name,
    description: db.description,
    website: db.website ?? undefined,
    videoUrl: db.video_url ?? undefined,
    imageUrl: db.image_url,
    genres: db.genres ?? [],
  };
}

export async function getArtists(tag?: string | null): Promise<Artist[]> {
  const supabase = createSupabaseClient();

  if (supabase) {
    try {
      let query = supabase.from("artists").select("*").order("name");
      if (tag?.trim()) {
        query = query.contains("genres", [tag.trim()]);
      }
      const { data, error } = await query;
      if (error) throw error;
      if (data?.length) return data.map(dbToArtist);
    } catch (e) {
      console.error("Supabase artists fetch failed:", e);
    }
  }

  // Fallback to static data
  let result = [...staticArtists];
  if (tag?.trim()) {
    const t = tag.trim().toLowerCase();
    result = result.filter((a) =>
      a.genres.some((g) => g.toLowerCase() === t)
    );
  }
  return result;
}

export function getAllTags(artists: Artist[]): string[] {
  const set = new Set<string>();
  for (const a of artists) {
    for (const g of a.genres) set.add(g);
  }
  return Array.from(set).sort();
}
