import { NextRequest, NextResponse } from "next/server";

const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

export async function POST(request: NextRequest) {
  if (!GOOGLE_APPS_SCRIPT_URL) {
    console.error("GOOGLE_APPS_SCRIPT_URL is not configured");
    return NextResponse.json(
      {
        success: false,
        errors: [
          "Form submission is not configured. Please add GOOGLE_APPS_SCRIPT_URL to your environment.",
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

      // Handle checkbox arrays (desiredFeatures)
      const desiredFeatures = formData.getAll("desiredFeatures") as string[];
      if (desiredFeatures.length > 0) {
        data.desiredFeatures = desiredFeatures.filter(Boolean);
      }
    }

    // GAS often fails with application/json - use text/plain so e.postData.contents is populated
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, errors: result.errors || ["Submission failed"] },
        { status: response.status }
      );
    }

    return NextResponse.json(result);
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
