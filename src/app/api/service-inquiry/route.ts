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
        errors: { form: "Form is not configured. Add RESEND_API_KEY and FORM_FROM_EMAIL." },
      },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const serviceName = (body.serviceName || "").toString().trim();
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
      "=== SERVICE INQUIRY ===",
      "",
      `Service: ${serviceName || "(not specified)"}`,
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
      "",
      buildSubmittedFieldsSection(body),
    ].join("\n");

    await sendFormEmail({
      subject: formatFormEmailSubject(
        `Planetary Music: ${serviceName || "Service"} inquiry from ${name}`
      ),
      text,
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Service inquiry error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: { form: "Something went wrong. Please try again or call (703) 980-0379." },
      },
      { status: 500 }
    );
  }
}
