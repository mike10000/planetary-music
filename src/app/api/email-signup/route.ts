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
        errors: ["Form is not configured. Add RESEND_API_KEY and FORM_FROM_EMAIL."],
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

    await sendFormEmail({
      subject: formatFormEmailSubject("Newsletter Signup"),
      replyTo: email,
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
