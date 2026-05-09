export interface Artist {
  id: string;
  name: string;
  description: string;
  website?: string;
  videoUrl?: string;
  imageUrl: string;
  imagePosition?: string;
  genres: string[];
}

export const artists: Artist[] = [
  {
    id: "lucas-mason",
    name: "Lucas Mason",
    description: "Lucas Mason is a guitarist and vocalist who creates robust live performances and delivers compelling covers from the 70s to today. His percussive playing style, powerful vocals, and thoughtful solos highlight his extensive song catalogue and allow his shows to fuse elements from diverse genres across decades of music.",
    website: "https://lucaslucaslucas.com",
    videoUrl: "https://www.youtube.com/embed/MWFgF9pZpec",
    imageUrl: "/artists/lucas-mason.jpg",
    genres: ["Acoustic", "Blues", "Classic Rock", "Live Perfomance", "Party Band", "Soul"],
  },
  {
    id: "chris-desantis",
    name: "Chris DeSantis",
    description: "I have been playing solo acoustic around Northern Virginia for several years and have a great time anywhere I play. I try to put a unique spin on the songs that I play, rock/pop/country/Americana from the 50s to today. Some songs you may love and some songs you forgot that you loved. Over the years, you may have seen me play out in a number of roles, whether it's acoustic solo, in a duo or trio, or playing lead guitar in original indie rock bands.",
    website: "https://facebook.com/ChrisDeSantisMusic",
    videoUrl: "https://www.youtube.com/embed/MsANqXdB8ok",
    imageUrl: "/artists/chris-desantis.jpg",
    genres: ["Acoustic", "Americana", "Blues", "Classic Rock", "Country", "Top 40"],
  },
  {
    id: "dm-shift",
    name: "DM Shift",
    description: "DMShift is a dynamic acoustic duo known for their powerful performances, musical versatility, and undeniable on-stage chemistry. Blending soulful vocals with masterful guitar work, Danielle Peace and Matthew Smith create a sound that is both fresh and familiar - captivating audiences with every note. Whether they are putting their unique spin on a classic cover or singing their own songs, DM Shift always brings maximum energy.",
    website: "https://www.facebook.com/share/1CGzvniCB2/",
    imageUrl: "/artists/dm-shift.jpg",
    genres: ["Acoustic", "Classic Rock", "Country", "Live Perfomance", "Motown", "R&B", "Top 40", "We love trying any style of song!!"],
  },
  {
    id: "joel-e-delgado",
    name: "Joel E Delgado",
    description: "Acoustic Easy listening a mix of 80with a country and Latin soul twist",
    website: "https://www.facebook.com/profile.php?id=61560622209108",
    imageUrl: "/artists/joel-e-delgado.jpg",
    genres: ["Acoustic", "Americana", "Bluegrass", "Blues", "Classic Rock", "Country", "Jazz", "Live Perfomance", "Motown", "Reggae"],
  },
  {
    id: "evan-ross",
    name: "Evan Ross",
    description: "Evan puts his own unique spin on acoustic covers from the 60s to today. A great mix of the songs you know and the songs you forgot you know.",
    website: "https://www.evanrossplaysmusic.com/",
    videoUrl: "https://www.youtube.com/embed/cqU_nNdfdqk",
    imageUrl: "/artists/evan-ross.jpg",
    genres: ["Acoustic", "Classic Rock", "Top 40", "Indie/alternative"],
  },
  {
    id: "chuckie-d",
    name: "Chuckie D",
    description: "Originally from Cincinnatti,Ohio and have been working as a professional musician for over 40years. I am a vocalist who also plays bass and accustic guitar. Currently playing in the band Mystery Machine as well as playing solo accustic engagements.",
    website: "https://www.facebook.com/profile.php?id=100083283305526",
    videoUrl: "https://www.youtube.com/embed/SKK_m_k2ZhQ",
    imageUrl: "/artists/chuckie-d.jpg",
    genres: ["Acoustic"],
  },
  {
    id: "bobby-crim",
    name: "Bobby Crim",
    description: "Winchester native has been playing music since he was 12 years old. When he's not touring behind the drum kit with Threesound, you can find him playing guitar. Covering everything from Frank Sinatra to Usher, he knows a good song when he hears one.",
    website: "https://www.instagram.com/bobbycrimiii?igsh=MWVubHRqZzJzOTVmMA%3D%3D&utm_source=qr",
    videoUrl: "https://www.youtube.com/embed/2HVnFvPzqh0",
    imageUrl: "/artists/bobby-crim.jpg",
    genres: ["Acoustic", "Blues", "Classic Rock", "Soul", "Top 40"],
  },
  {
    id: "jeremiah-prophett",
    name: "Jeremiah Prophett",
    description: "Jeremiah Prophett is a Virginia-based musician with a deeply personal and compelling sound, transforming familiar covers into something entirely his own. He is a truly personal type of performer who deeply feels his music, which is why his music has be branded as \"blues with a cure\".",
    website: "https://jeremiah-blues-soul.base44.app/",
    videoUrl: "https://www.youtube.com/embed/5zH9NFVbkJw",
    imageUrl: "/artists/jeremiah-prophett.jpg",
    genres: ["Acoustic", "Americana", "Classic Rock", "Country", "Live Perfomance", "Blues with a Cure"],
  },
  {
    id: "knox-engler",
    name: "Knox Engler",
    description: "Washington DC based musician, Knox Engler has been playing music professionally for over 10 years. Knox has great facility across multiple genres of music. He specializes in curating the perfect setlist to serve any show or event!",
    website: "https://knoxengler.mypixieset.com/",
    videoUrl: "https://www.youtube.com/embed/JFmEbcGNikM",
    imageUrl: "/artists/knox-engler.jpg",
    genres: ["Acoustic", "Classic Rock", "Jazz", "Live Perfomance", "Party Band", "R&B", "Soul", "Top 40", "original music"],
  },
  {
    id: "daniel-mensh",
    name: "Daniel Mensh",
    description: "Daniel Mensh is a Washington, DC-based guitarist, vocalist, and bandleader specializing in funk, R&B, and pop. He has performed with artists including Charlie Wilson, Babyface, and Gladys Knight, and leads the band 9th Gear. Known for high-energy live shows and strong musical direction, he delivers polished performances on stage and in the studio.",
    website: "https://danielmenshlive.com",
    videoUrl: "https://www.youtube.com/embed/xCM85PAfKpE",
    imageUrl: "/artists/daniel-mensh.jpg",
    genres: ["Acoustic", "Americana", "Bluegrass", "Blues", "Classic Rock", "Country", "Jazz", "Live Perfomance", "Motown", "Party Band", "R&B", "Soul", "Top 40", "Reggae"],
  },
  {
    id: "franklin-music",
    name: "Franklin Music",
    description: "1 man band looping Rock, Soul, Reggea",
    website: "https://www.franklinmusiclive.com",
    imageUrl: "/artists/franklin-music.jpg",
    genres: ["Acoustic", "Country", "Reggae", "Rock"],
  },
  {
    id: "marilyn-hucek",
    name: "Marilyn Hucek",
    description: "Marilyn Hucek is an American-Chilean singer-songwriter from Washington, D.C., crafting emotionally raw pop that blends English and Spanish influences. Inspired by personal experiences, including her late father's battle with early-onset Alzheimer's, her music explores love, loss, and identity. With over 4 million streams and more than 200 live performances, she continues to build a growing presence on stage while advocating for Alzheimer's awareness.",
    website: "https://marilynhucek.com",
    videoUrl: "https://www.youtube.com/embed/7kCr-SJhFIY",
    imageUrl: "/artists/marilyn-hucek.jpg",
    imagePosition: "center top",
    genres: ["Acoustic", "Live Perfomance", "Top 40", "Pop", "Singer-Songwriter", "Rock", "Country", "Folk", "Latin"],
  },
  {
    id: "annie-stokes",
    name: "Annie Stokes",
    description: "Annie Stokes is an award-winning singer-songwriter from just east of the Blue Ridge Mountains. Combining modern songwriting sensibilities with traditional folk sounds, she has been recognized regionally and nationally for her independently released albums and engaging live performances. She cowrites with her husband and bass player, Will Berger.",
    website: "https://www.anniestokesmusic.com",
    videoUrl: "https://www.youtube.com/embed/A86W5wW0ZdU",
    imageUrl: "/artists/annie-stokes.jpg",
    genres: ["Acoustic", "Americana", "Country"],
  },
  {
    id: "ashleigh-chevalier",
    name: "Ashleigh Chevalier",
    description: "A professionally trained vocalist with exceptional range and dynamic tonal control, Chevalier's ability to navigate between whisper-soft vulnerability and powerful emotional crescendos reflects the journey captured in her music. Her authenticity resonates with audiences across the Mid-Atlantic region and into the Caribbean, where she has established herself as a compelling performer on stages both intimate and grand. She performs a range of rock, country, and roots music that sets her in the heart of Americana Rock music",
    website: "https://instagram.com/ashleigh_chevalier",
    videoUrl: "https://www.youtube.com/embed/Y3-YigJnIjo",
    imageUrl: "/artists/ashleigh-chevalier.png",
    genres: ["Acoustic", "Americana", "Classic Rock", "Country", "Alt & Indie Rock"],
  },
  {
    id: "jet-capriest",
    name: "Jet Capriest",
    description:
      "Jet Capriest is a versatile singer, songwriter, and performer from Prince George's County, Maryland, known for blending soulful vocals, live musicianship, and genre-crossing creativity.",
    website: "https://jetcapriest.com/jet-capriest.html",
    imageUrl: "/artists/jet-capriest.png",
    genres: ["Acoustic", "Classic Rock", "Country", "Motown", "R&B", "Top 40"],
  },
  {
    id: "first-sunday",
    name: "First Sunday",
    description:
      "First Sunday is a versatile live band collective known for blending soulful musicianship, high-energy performances, and fresh interpretations of songs across generations and genres.",
    website: "https://firstsundaymusic.com",
    imageUrl: "/artists/first-sunday.png",
    genres: [
      "Classic Rock",
      "Country",
      "Live Perfomance",
      "Motown",
      "Party Band",
      "R&B",
      "Soul",
      "Top 40",
    ],
  },
];
