# Supabase Setup for Artists CMS

The artists page uses Supabase as an optional CMS. If Supabase is not configured, the site falls back to static data.

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click **New Project**
3. Name it (e.g. "Planetary Music"), set a password, choose a region
4. Wait for the project to be created

## 2. Create the artists table

1. In your Supabase project, go to **SQL Editor**
2. Click **New query**
3. Copy and paste the contents of `supabase/schema.sql`
4. Click **Run**

This creates the `artists` table and seeds it with the current artist data.

## 3. Add environment variables

1. In Supabase, go to **Project Settings** → **API**
2. Copy the **Project URL** and **anon public** key
3. In your project root, add to `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 4. Managing artists

- Go to [Supabase Dashboard](https://supabase.com/dashboard) → your project → **Table Editor**
- Select the `artists` table to add, edit, or remove artists
- The `genres` column is an array of strings (e.g. `["Jazz", "Blues"]`)

## Tag filtering

The artists page now shows a filter bar with all genre tags. Clicking a tag filters the list to artists with that genre. The genre tags on each artist card are also clickable to filter.
