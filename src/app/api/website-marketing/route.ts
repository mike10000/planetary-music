import { NextRequest, NextResponse } from "next/server";
import {
  buildSubmittedFieldsSection,
  formatFormEmailSubject,
} from "@/lib/email-config";
import { isEmailConfigured, sendFormEmail } from "@/lib/send-form-email";

function buildEmailBody(data: Record<string, unknown>): string {
  const get = (key: string) => (data[key] || "").toString().trim();
  const getArray = (key: string) => {
    const val = data[key];
    if (Array.isArray(val)) return val.join(", ");
    return (val || "").toString().trim();
  };

  return [
    "=== NEW WEBSITE & MARKETING INQUIRY ===",
    "",
    "--- CONTACT ---",
    `Name: ${get("personName")}`,
    `Email: ${get("personEmailWork")}`,
    `Phone: ${get("personPhoneWork")}`,
    "",
    "--- BAND INFO ---",
    `Band/Artist: ${get("bandName")}`,
    `Genres: ${get("genres")}`,
    `Year Formed: ${get("yearFormed")}`,
    `Location: ${get("location")}`,
    `Members: ${get("memberCount")}`,
    `Band Members & Roles: ${get("bandMembers")}`,
    `Band Bio: ${get("bandBio")}`,
    "",
    "--- ONLINE PRESENCE ---",
    `Website: ${get("existingWebsite") || "None"}`,
    `Facebook: ${get("facebook")}`,
    `Instagram: ${get("instagram")}`,
    `Spotify: ${get("spotify")}`,
    `YouTube: ${get("youtube")}`,
    `Other Links: ${get("otherLinks")}`,
    "",
    "--- ASSETS & MEDIA ---",
    `Logo & Branding Assets: ${get("logoAssets")}`,
    `High-Resolution Photos: ${get("photos")}`,
    `Video Links: ${get("videoLinks")}`,
    `Music Samples: ${get("musicSamples")}`,
    `Press / Reviews: ${get("pressReviews")}`,
    "",
    "--- REQUIREMENTS ---",
    `Preferred Domain: ${get("preferredDomain")}`,
    `Desired Features: ${getArray("desiredFeatures")}`,
    `Other Desired Features: ${get("desiredFeaturesText")}`,
    `Timeline: ${get("timeline")}`,
    `Budget: ${get("budgetRange")}`,
    "",
    "--- ADDITIONAL NOTES ---",
    get("additionalNotes") || "(none)",
    "",
    buildSubmittedFieldsSection(data),
  ].join("\n");
}

export async function POST(request: NextRequest) {
  if (!isEmailConfigured()) {
    console.error("RESEND_API_KEY and FORM_FROM_EMAIL must be configured");
    return NextResponse.json(
      {
        success: false,
        errors: [
          "Form submission is not configured. Add RESEND_API_KEY and FORM_FROM_EMAIL to your environment.",
        ],
      },
      { status: 500 }
    );
  }

  try {
    const contentType = request.headers.get("content-type") || "";
    let data: Record<string, unknown>;

    if (contentType.includes("application/json")) {
      data = await request.json();
    } else {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());

      const desiredFeatures = formData.getAll("desiredFeatures") as string[];
      if (desiredFeatures.length > 0) {
        data.desiredFeatures = desiredFeatures.filter(Boolean);
      }
    }

    const subject = formatFormEmailSubject(
      `New Website & Marketing Request: ${data.bandName || data.companyName || "Unknown"}`
    );
    const body = buildEmailBody(data);

    await sendFormEmail({
      subject,
      text: body,
      replyTo: (data.personEmailWork || "").toString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! We've received your website & marketing inquiry.",
    });
  } catch (error) {
    console.error("Website marketing form submission error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: [
          "An error occurred while submitting the form. Please try again or call us directly.",
        ],
      },
      { status: 500 }
    );
  }
}
