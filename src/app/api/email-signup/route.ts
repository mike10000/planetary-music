import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  buildSubmittedFieldsSection,
  formatFormEmailSubject,
  getRecipientEmails,
} from "@/lib/email-config";

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
    const data = await request.json();
    const { email } = data;

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
      to: getRecipientEmails(),
      subject: formatFormEmailSubject("Newsletter Signup"),
      text: [
        "New newsletter signup:",
        "",
        `Email: ${email.trim()}`,
        "",
        "Interested in: Events, promotions, and services",
        "",
        buildSubmittedFieldsSection(data),
      ].join("\n"),
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
