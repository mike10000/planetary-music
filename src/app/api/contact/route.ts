import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "info@miketintnerproductions.com";

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

  if (formType === "venue") {
    lines.push(
      "--- VENUE INFO ---",
      `Venue/Company: ${get("companyName")}`,
      `Event Date: ${get("booking1Date")}`,
      `Venue/Location: ${get("booking1VenueName")}`,
      "",
    );
  }

  lines.push("--- MESSAGE ---", get("personNote") || "(none)");

  return lines.join("\n");
}

export async function POST(request: NextRequest) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    return NextResponse.json(
      {
        success: false,
        errors: ["Form is not configured. Add GMAIL_USER and GMAIL_APP_PASSWORD."],
      },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const formType = (formData.get("formType") as string) || "general";
    const data = Object.fromEntries(formData.entries());

    const subject = `Planetary Music: ${formType === "venue" ? "Venue Booking" : "Contact"} from ${(data.personName || "").toString().trim() || "Unknown"}`;
    const body = buildEmailBody(data, formType);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailAppPassword },
    });

    await transporter.sendMail({
      from: `"Planetary Music" <${gmailUser}>`,
      to: TO_EMAIL,
      subject,
      text: body,
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
