import { NextRequest, NextResponse } from "next/server";
import {
  buildSubmittedFieldsSection,
  formatFormEmailSubject,
} from "@/lib/email-config";
import { isEmailConfigured, sendFormEmail } from "@/lib/send-form-email";

function buildEmailBody(data: Record<string, unknown>, formType: string): string {
  const get = (key: string) => (data[key] || "").toString().trim();

  const lines = [
    `=== ${formType.toUpperCase()} INQUIRY ===`,
    "",
    "--- CONTACT ---",
    `Name: ${get("personName")}`,
    `Email: ${get("personEmailWork")}`,
    `Phone: ${get("personPhoneWork")}`,
    "",
  ];

  const isVenueType = ["venue", "dj", "karaoke"].includes(formType);
  if (isVenueType) {
    lines.push(
      "--- EVENT INFO ---",
      `Venue/Company: ${get("companyName")}`,
      `Event Date: ${get("booking1Date")}`,
      `Venue/Location: ${get("booking1VenueName")}`,
      "",
    );
  }

  lines.push(
    "--- MESSAGE ---",
    get("personNote") || "(none)",
    "",
    buildSubmittedFieldsSection(data),
  );

  return lines.join("\n");
}

export async function POST(request: NextRequest) {
  if (!isEmailConfigured()) {
    return NextResponse.json(
      {
        success: false,
        errors: ["Form is not configured. Add RESEND_API_KEY and FORM_FROM_EMAIL."],
      },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const formType = (formData.get("formType") as string) || "general";
    const data = Object.fromEntries(formData.entries());

    const subjectMap: Record<string, string> = {
      venue: "Venue Booking",
      dj: "DJ Booking",
      karaoke: "Karaoke/Trivia Booking",
    };
    const subject = formatFormEmailSubject(
      `Planetary Music: ${subjectMap[formType] || "Contact"} from ${(data.personName || "").toString().trim() || "Unknown"}`
    );
    const body = buildEmailBody(data, formType);

    await sendFormEmail({
      subject,
      text: body,
      replyTo: (data.personEmailWork || "").toString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: ["Something went wrong. Please try again or call (703) 980-0379."],
      },
      { status: 500 }
    );
  }
}
