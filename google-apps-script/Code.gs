/**
 * Planetary Music - Websites & Marketing Form Backend
 * Paste this into Google Apps Script (Extensions → Apps Script) in your Google Sheet.
 * Deploy as Web app: Execute as "Me", Who has access "Anyone".
 * Copy the Web app URL and add to .env.local as GOOGLE_APPS_SCRIPT_URL
 */

const CONFIG = {
  NOTIFY_EMAILS: ["info@miketintnerproductions.com"],
  SHEET_NAME: "Responses",
};

function doPost(e) {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);

  try {
    if (!e) {
      throw new Error("No request received. Redeploy the script and ensure 'Anyone, even anonymous' is set.");
    }

    let data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        throw new Error("Invalid JSON in request body.");
      }
    } else if (e.parameter && Object.keys(e.parameter).length > 0) {
      data = e.parameter;
    } else {
      throw new Error("No POST body. Ensure Content-Type: text/plain with JSON body.");
    }

    const row = buildRow(data);
    appendToSheet(row);
    sendEmailNotification(row, data);

    return output.setContent(
      JSON.stringify({
        success: true,
        message:
          "Thank you! We've received your website & marketing inquiry.",
      })
    );
  } catch (err) {
    console.error(err);
    return output.setContent(
      JSON.stringify({
        success: false,
        errors: [
          err.message || "An error occurred. Please try again or call us.",
        ],
      })
    );
  }
}

function doOptions(e) {
  const output = ContentService.createTextOutput("");
  output.setHeader("Access-Control-Allow-Origin", "*");
  output.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  output.setHeader("Access-Control-Allow-Headers", "Content-Type");
  return output;
}

function doGet(e) {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(
    JSON.stringify({
      status: "ok",
      message:
        "Planetary Music Website & Marketing form backend is running.",
    })
  );
  return output;
}

function appendToSheet(row) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(CONFIG.SHEET_NAME) || ss.getSheets()[0];
  sheet.appendRow(row);
}

function buildRow(data) {
  const get = (key) => (data[key] || "").toString().trim();
  const getArray = (key) => {
    const val = data[key];
    if (Array.isArray(val)) return val.join(", ");
    return (val || "").toString().trim();
  };

  return [
    new Date(),
    get("personName"),
    get("personEmailWork"),
    get("personPhoneWork"),
    get("bandName"),
    get("genres"),
    get("yearFormed"),
    get("location"),
    get("memberCount"),
    get("bandMembers"),
    get("bandBio"),
    get("existingWebsite"),
    get("facebook"),
    get("instagram"),
    get("spotify"),
    get("youtube"),
    get("otherLinks"),
    get("logoAssets"),
    get("photos"),
    get("videoLinks"),
    get("musicSamples"),
    get("pressReviews"),
    get("preferredDomain"),
    getArray("desiredFeatures"),
    get("desiredFeaturesText"),
    get("timeline"),
    get("budgetRange"),
    get("additionalNotes"),
  ];
}

function sendEmailNotification(row, data) {
  const subject =
    "New Website & Marketing Request: " +
    (data.bandName || data.companyName || "Unknown");
  const body = buildEmailBody(row, data);

  CONFIG.NOTIFY_EMAILS.forEach(function (email) {
    if (email && email.trim()) {
      MailApp.sendEmail({
        to: email.trim(),
        subject: subject,
        body: body,
        name: "Planetary Music",
      });
    }
  });
}

function buildEmailBody(row, data) {
  const sections = [
    "=== NEW WEBSITE & MARKETING INQUIRY ===",
    "",
    "--- CONTACT ---",
    "Name: " + (data.personName || ""),
    "Email: " + (data.personEmailWork || ""),
    "Phone: " + (data.personPhoneWork || ""),
    "",
    "--- BAND INFO ---",
    "Band/Artist: " + (data.bandName || ""),
    "Genres: " + (data.genres || ""),
    "Year Formed: " + (data.yearFormed || ""),
    "Location: " + (data.location || ""),
    "Members: " + (data.memberCount || ""),
    "Band Bio: " + (data.bandBio || ""),
    "",
    "--- ONLINE PRESENCE ---",
    "Website: " + (data.existingWebsite || "None"),
    "Facebook: " + (data.facebook || ""),
    "Instagram: " + (data.instagram || ""),
    "Spotify: " + (data.spotify || ""),
    "YouTube: " + (data.youtube || ""),
    "",
    "--- REQUIREMENTS ---",
    "Preferred Domain: " + (data.preferredDomain || ""),
    "Desired Features: " +
      (Array.isArray(data.desiredFeatures)
        ? data.desiredFeatures.join(", ")
        : data.desiredFeatures || ""),
    "Timeline: " + (data.timeline || ""),
    "Budget: " + (data.budgetRange || ""),
    "",
    "--- ADDITIONAL NOTES ---",
    data.additionalNotes || "(none)",
  ];

  return sections.join("\n");
}
