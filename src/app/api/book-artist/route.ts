import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "info@miketintnerproductions.com";

export async function POST(request: NextRequest) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    return NextResponse.json(
      {
        success: false,
        errors: { form: "Form is not configured. Add GMAIL_USER and GMAIL_APP_PASSWORD." },
      },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const artistName = (body.artistName || "").toString().trim();
    const name = (body.name || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const phone = (body.phone || "").toString().trim();
    const eventDate = (body.eventDate || "").toString().trim();
    const venue = (body.venue || "").toString().trim();
    const message = (body.message || "").toString().trim();

    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          errors: { form: "Name, email, and phone are required." },
        },
        { status: 400 }
      );
    }

    const text = [
      "=== ARTIST BOOKING REQUEST ===",
      "",
      `Artist requested: ${artistName || "(not specified)"}`,
      "",
      "--- CONTACT ---",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "--- EVENT ---",
      `Event Date: ${eventDate || "(not specified)"}`,
      `Venue / Location: ${venue || "(not specified)"}`,
      "",
      "--- MESSAGE ---",
      message || "(none)",
    ].join("\n");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailAppPassword },
    });

    await transporter.sendMail({
      from: `"Planetary Music" <${gmailUser}>`,
      to: TO_EMAIL,
      subject: `Planetary Music: Booking request for ${artistName || "Artist"} from ${name}`,
      text,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Book artist error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: { form: "Something went wrong. Please try again or call (703) 980-0379." },
      },
      { status: 500 }
    );
  }
}
