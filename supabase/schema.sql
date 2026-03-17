-- Run this in Supabase SQL Editor (Dashboard > SQL Editor) to create the artists table

CREATE TABLE IF NOT EXISTS artists (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  website TEXT,
  video_url TEXT,
  image_url TEXT NOT NULL,
  genres TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (optional - disable if you want public read access)
ALTER TABLE artists ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON artists
  FOR SELECT USING (true);

-- Seed data (optional - run after creating table)
INSERT INTO artists (id, name, description, website, video_url, image_url, genres) VALUES
  ('people-of-earth', 'People of Earth', 'People of Earth delivers high-energy performances blending classic rock, Top 40 hits, and timeless favorites. Known for their dynamic stage presence and ability to get any crowd on their feet, they''ve become a staple at venues across the East Coast.', 'https://example.com/people-of-earth', 'https://www.youtube.com/embed/dQw4w9WgXcQ', '/people-of-earth.jpg', ARRAY['Classic Rock', 'Top 40', 'Party Band']),
  ('dave-m', 'Dave M.', 'Dave M. brings decades of experience as a guitarist and performer. His versatile repertoire spans jazz, blues, and contemporary hits, making him the perfect choice for sophisticated events and intimate gatherings alike.', 'https://example.com/dave-m', 'https://www.youtube.com/embed/dQw4w9WgXcQ', '/dave-headshot.png', ARRAY['Jazz', 'Blues', 'Acoustic']),
  ('east-coast-soul', 'East Coast Soul', 'East Coast Soul delivers authentic soul, R&B, and Motown classics that transport audiences to another era. Their horn section and powerhouse vocals create an unforgettable live experience.', 'https://example.com/east-coast-soul', 'https://www.youtube.com/embed/dQw4w9WgXcQ', '/people-of-earth.jpg', ARRAY['Soul', 'R&B', 'Motown']),
  ('jet-capriest', 'Jet Capriest', 'Jet Capriest brings raw energy and soul to every performance. A commanding vocalist with an unmistakable stage presence, he captivates audiences with his passionate delivery and dynamic range.', 'https://example.com/jet-capriest', 'https://www.youtube.com/embed/dQw4w9WgXcQ', '/jet-capriest.png', ARRAY['Soul', 'R&B', 'Live Performance']),
  ('capital-country', 'Capital Country', 'Capital Country brings the heart of Nashville to the East Coast. From traditional country to modern hits, their harmonies and instrumentation capture the spirit of American roots music.', 'https://example.com/capital-country', 'https://www.youtube.com/embed/dQw4w9WgXcQ', '/people-of-earth.jpg', ARRAY['Country', 'Americana', 'Bluegrass'])
ON CONFLICT (id) DO NOTHING;
