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
        errors: ["Form is not configured. Add GMAIL_USER and GMAIL_APP_PASSWORD."],
      },
      { status: 500 }
    );
  }

  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, errors: ["Email is required."] },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailAppPassword },
    });

    await transporter.sendMail({
      from: `"Planetary Music" <${gmailUser}>`,
      to: TO_EMAIL,
      subject: "Newsletter Signup",
      text: `New newsletter signup:\n\nEmail: ${email.trim()}\n\nInterested in: Events, promotions, and services`,
    });

    return NextResponse.json({
      success: true,
      message: "Thanks for signing up! We'll keep you in the loop.",
    });
  } catch (error) {
    console.error("Email signup error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: ["Something went wrong. Please try again."],
      },
      { status: 500 }
    );
  }
}
