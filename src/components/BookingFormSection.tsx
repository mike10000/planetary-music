"use client";

import OvertureForm from "./OvertureForm";

type BookingFormType = "dj" | "karaoke";

const config: Record<
  BookingFormType,
  { title: string; description: string }
> = {
  dj: {
    title: "Book a DJ",
    description:
      "Tell us about your event and we'll match you with the perfect DJ—weddings, corporate parties, club nights, and more.",
  },
  karaoke: {
    title: "Book Karaoke or Trivia",
    description:
      "Tell us about your venue or event and we'll connect you with the right host for karaoke nights, trivia, and interactive entertainment.",
  },
};

export default function BookingFormSection({
  formType,
}: {
  formType: BookingFormType;
}) {
  const { title, description } = config[formType];

  return (
    <div className="rounded-xl bg-white p-8 shadow-lg">
      <h3 className="text-xl font-semibold text-[#1a2744]">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <div className="mt-6">
        <OvertureForm formType={formType} />
      </div>
    </div>
  );
}
