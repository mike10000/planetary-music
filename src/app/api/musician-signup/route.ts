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
        errors: ["Form is not configured. Please add GMAIL_USER and GMAIL_APP_PASSWORD."],
      },
      { status: 500 }
    );
  }

  try {
    const { name, email, phone, message } = await request.json();

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

    const nameStr = name && typeof name === "string" ? name.trim() : "";
    const phoneStr = phone && typeof phone === "string" ? phone.trim() : "";
    const messageStr = message && typeof message === "string" ? message.trim() : "";

    const body = [
      `Name: ${nameStr || "(not provided)"}`,
      `Email: ${email.trim()}`,
      `Phone: ${phoneStr || "(not provided)"}`,
      "",
      "Message:",
      messageStr || "(not provided)",
    ].join("\n");

    await transporter.sendMail({
      from: `"Planetary Music" <${gmailUser}>`,
      to: TO_EMAIL,
      subject: "Musician Signup",
      text: `New musician signup:\n\n${body}`,
    });

    return NextResponse.json({
      success: true,
      message: "Thanks for signing up! We'll be in touch soon.",
    });
  } catch (error) {
    console.error("Musician signup error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: ["Something went wrong. Please try again or call (703) 980-0379."],
      },
      { status: 500 }
    );
  }
}
