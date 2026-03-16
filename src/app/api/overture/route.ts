import { NextRequest, NextResponse } from "next/server";

const OVERTURE_ENDPOINT = "https://overturehq.com/formapi/webform/submit.json";

export async function POST(request: NextRequest) {
  const overtureKey = process.env.OVERTURE_WEBFORM_KEY;

  if (!overtureKey) {
    console.error("OVERTURE_WEBFORM_KEY is not configured");
    return NextResponse.json(
      {
        success: false,
        errors: ["Form submission is not configured. Please add OVERTURE_WEBFORM_KEY to your environment."],
      },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const data: Record<string, string> = { key: overtureKey };

    const overtureFields = [
      "personName", "personFirstName", "personLastName", "personEmailWork",
      "personEmailPersonal", "personPhoneWork", "personPhonePersonal",
      "personWebsiteWork", "personWebsitePersonal", "personAddressLine1",
      "personAddressLine2", "personAddressLine3", "personAddressCity",
      "personAddressState", "personAddressZip", "personAddressCountry",
      "personNote", "companyName", "companyEmailWork", "companyPhoneWork",
      "companyWebsiteWork", "companyAddressLine1", "companyAddressLine2",
      "companyAddressLine3", "companyAddressCity", "companyAddressState",
      "companyAddressZip", "companyAddressCountry",
      "booking1Date", "booking1Name", "booking1Note", "booking1ArtisteName",
      "booking1VenueName", "booking1VenueAddressLine1", "booking1VenueAddressLine2",
      "booking1VenueAddressLine3", "booking1VenueAddressCity", "booking1VenueAddressState",
      "booking1VenueAddressZip", "booking1VenueAddressCountry",
    ];
    formData.forEach((value, key) => {
      if (key !== "formType" && overtureFields.includes(key) && typeof value === "string" && value.trim()) {
        data[key] = value;
      }
    });

    const params = new URLSearchParams(data);
    const response = await fetch(OVERTURE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
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
    console.error("Overture form submission error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: ["An error occurred while submitting the form. Please try again or call us directly."],
      },
      { status: 500 }
    );
  }
}
