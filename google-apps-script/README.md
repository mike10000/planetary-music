# Google Apps Script – Websites & Marketing Form Backend

This script receives form submissions from the Websites & Marketing form, writes them to a Google Sheet, and sends email notifications.

## Setup

### 1. Create a Google Sheet

1. Create a new Google Sheet (e.g. "Planetary Music – Website & Marketing Requests").
2. Import the CSV from the project root: `website-marketing-responses.csv`
   - **File → Import → Upload** and select `website-marketing-responses.csv`
   - Or paste the header row manually into row 1.
3. Rename the first tab to **Responses** (or update `SHEET_NAME` in the script).

### 2. Add the Script

1. In the sheet: **Extensions → Apps Script**.
2. Delete any default code and paste the contents of `Code.gs`.
3. Edit `CONFIG.NOTIFY_EMAILS` to add more recipients:
   ```javascript
   NOTIFY_EMAILS: ["info@miketintnerproductions.com", "another@email.com"],
   ```

### 3. Deploy as Web App

1. **Run the script once** (e.g. Run → doGet) to authorize permissions.
2. Click **Deploy → New deployment**.
3. Click the gear icon → **Web app**.
4. Settings:
   - **Execute as:** Me
   - **Who has access:** **Anyone, even anonymous** (required for external POST)
5. Click **Deploy**.
6. Copy the **Web app URL** (e.g. `https://script.google.com/macros/s/.../exec`).

**Important:** After editing the script, create a **new deployment version** (Deploy → Manage deployments → Edit → Version: New version) so changes take effect. The URL stays the same.

### 4. Add URL to Your Project

Add to `.env.local`:

```
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Restart the dev server after adding the variable.
