# Planetary Music Website

A Next.js website for Planetary Music, a premier booking and entertainment agency. Built for deployment on Vercel with Overture integration for contact forms.

## Features

- **Homepage** – Hero, about section, entertainment portfolio, and CTA buttons
- **Artists** – Roster with names, descriptions, videos, websites, and sample work
- **Contact** – General form, venue booking form, and musician signup form
- **Overture Integration** – All contact forms submit to Overture via Web Form API
- **Responsive** – Mobile-friendly design with Tailwind CSS

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure Overture**
   - Log in to your [Overture](https://overturehq.com) account
   - Go to Settings → Custom Web Form
   - Click "Generate Key"
   - Add your site URL (e.g. `https://planetarymusic.com`) as a referrer

3. **Environment variables**
   - Copy `.env.example` to `.env.local`
   - Set `GMAIL_USER` to your Gmail address (e.g. your-email@gmail.com)
   - Set `GMAIL_APP_PASSWORD` to a [Gmail App Password](https://myaccount.google.com/apppasswords) (not your regular password)
   - Optional: Set `FORM_RECIPIENT_EMAIL` to override where form emails go (default: info@miketintnerproductions.com). Use comma-separated addresses for multiple recipients.

4. **Run locally**
   ```bash
   npm run dev
   ```

5. **Deploy to Vercel**
   - Connect your repo to Vercel
   - Add `GMAIL_USER` and `GMAIL_APP_PASSWORD` in Vercel project settings → Environment Variables

## Customization

- **Artists** – Edit `src/data/artists.ts` to add/update artists, videos, and websites
- **Phone number** – Search for `(555) 123-4567` and replace with your real number
- **Images** – Replace files in `public/` (logo.png, dave-headshot.png, people-of-earth.jpg)

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Overture Web Form API
