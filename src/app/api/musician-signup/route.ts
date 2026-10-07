import { NextRequest, NextResponse } from "next/server";
import {
  buildSubmittedFieldsSection,
  formatFormEmailSubject,
} from "@/lib/email-config";
import { isEmailConfigured, sendFormEmail } from "@/lib/send-form-email";

export async function POST(request: NextRequest) {
  if (!isEmailConfigured()) {
    return NextResponse.json(
      {
        success: false,
        errors: ["Form is not configured. Please add RESEND_API_KEY and FORM_FROM_EMAIL."],
      },
      { status: 500 }
    );
  }

  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, errors: ["Email is required."] },
        { status: 400 }
      );
    }

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
      "",
      buildSubmittedFieldsSection(data),
    ].join("\n");

    await sendFormEmail({
      subject: formatFormEmailSubject("Musician Signup"),
      text: `New musician signup:\n\n${body}`,
      replyTo: email,
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
