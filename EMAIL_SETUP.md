# Form Email Setup

Forms will show "Form is not configured" until Gmail credentials are set.

## Local (npm run dev)

1. **Create `.env.local`** in the project root (same folder as `package.json`).

2. **Add these lines** (use your real values, no quotes):
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-char-app-password
   ```

3. **Get a Gmail App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Turn on 2-Step Verification if needed
   - Create an App Password for "Mail"
   - Copy the 16-character password (no spaces)

4. **Restart the dev server** – env vars load only at startup:
   ```bash
   # Stop the server (Ctrl+C), then:
   npm run dev
   ```

5. **Format checks:**
   - No spaces around `=`
   - No quotes around values
   - File name is exactly `.env.local` (starts with a dot)

## Vercel (production)

1. Go to your project on [vercel.com](https://vercel.com) → Settings → Environment Variables
2. Add:
   - `GMAIL_USER` = your Gmail address
   - `GMAIL_APP_PASSWORD` = your App Password
3. Redeploy the project for changes to take effect.
