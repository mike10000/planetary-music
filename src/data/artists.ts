export interface Artist {
  id: string;
  name: string;
  description: string;
  website?: string;
  videoUrl?: string;
  imageUrl: string;
  genres: string[];
}

export const artists: Artist[] = [
  {
    id: "people-of-earth",
    name: "People of Earth",
    description:
      "People of Earth delivers high-energy performances blending classic rock, Top 40 hits, and timeless favorites. Known for their dynamic stage presence and ability to get any crowd on their feet, they've become a staple at venues across the East Coast.",
    website: "https://example.com/people-of-earth",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: "/people-of-earth.jpg",
    genres: ["Classic Rock", "Top 40", "Party Band"],
  },
  {
    id: "dave-m",
    name: "Dave M.",
    description:
      "Dave M. brings decades of experience as a guitarist and performer. His versatile repertoire spans jazz, blues, and contemporary hits, making him the perfect choice for sophisticated events and intimate gatherings alike.",
    website: "https://example.com/dave-m",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: "/dave-headshot.png",
    genres: ["Jazz", "Blues", "Acoustic"],
  },
  {
    id: "east-coast-soul",
    name: "East Coast Soul",
    description:
      "East Coast Soul delivers authentic soul, R&B, and Motown classics that transport audiences to another era. Their horn section and powerhouse vocals create an unforgettable live experience.",
    website: "https://example.com/east-coast-soul",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: "/people-of-earth.jpg",
    genres: ["Soul", "R&B", "Motown"],
  },
  {
    id: "jet-capriest",
    name: "Jet Capriest",
    description:
      "Jet Capriest brings raw energy and soul to every performance. A commanding vocalist with an unmistakable stage presence, he captivates audiences with his passionate delivery and dynamic range. Whether headlining a club or elevating a private event, Jet delivers an unforgettable live experience.",
    website: "https://example.com/jet-capriest",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: "/jet-capriest.png",
    genres: ["Soul", "R&B", "Live Performance"],
  },
  {
    id: "capital-country",
    name: "Capital Country",
    description:
      "Capital Country brings the heart of Nashville to the East Coast. From traditional country to modern hits, their harmonies and instrumentation capture the spirit of American roots music.",
    website: "https://example.com/capital-country",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: "/people-of-earth.jpg",
    genres: ["Country", "Americana", "Bluegrass"],
  },
];
