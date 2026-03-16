"use client";

import { useState } from "react";

type FormType = "general" | "venue" | "musician";

interface OvertureFormProps {
  formType: FormType;
}

export default function OvertureForm({ formType }: OvertureFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formType === "venue") {
      const note = formData.get("personNote") || "";
      formData.set("booking1Note", `Venue booking inquiry: ${note}`);
    } else if (formType === "musician") {
      const note = formData.get("personNote") || "";
      formData.set("personNote", `Musician signup: ${note}`);
    }

    try {
      const res = await fetch("/api/overture", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrors(data.errors || {});
      }
    } catch {
      setStatus("error");
      setErrors({ form: "Something went wrong. Please try again or call (555) 123-4567." });
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 p-8 text-center">
        <p className="text-lg font-medium text-green-800">
          Thank you for reaching out! We&apos;ll get back to you soon.
        </p>
        <p className="mt-2 text-green-700">
          In the meantime, feel free to call us at (555) 123-4567.
        </p>
      </div>
    );
  }

  const isVenue = formType === "venue";
  const isMusician = formType === "musician";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="personName" className="block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            id="personName"
            name="personName"
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]"
          />
        </div>
        <div>
          <label htmlFor="personEmailWork" className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="personEmailWork"
            name="personEmailWork"
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="personPhoneWork" className="block text-sm font-medium text-gray-700">
          Phone *
        </label>
        <input
          type="tel"
          id="personPhoneWork"
          name="personPhoneWork"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]"
        />
      </div>

      {isVenue && (
        <>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Venue / Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]"
            />
          </div>
          <div>
            <label htmlFor="booking1Date" className="block text-sm font-medium text-gray-700">
              Event Date (if known)
            </label>
            <input
              type="text"
              id="booking1Date"
              name="booking1Date"
              placeholder="e.g. June 15, 2025"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]"
            />
          </div>
          <div>
            <label htmlFor="booking1VenueName" className="block text-sm font-medium text-gray-700">
              Venue Name / Location
            </label>
            <input
              type="text"
              id="booking1VenueName"
              name="booking1VenueName"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]"
            />
          </div>
        </>
      )}

      {isMusician && (
        <div>
          <label htmlFor="personWebsiteWork" className="block text-sm font-medium text-gray-700">
            Website / Portfolio
          </label>
          <input
            type="url"
            id="personWebsiteWork"
            name="personWebsiteWork"
            placeholder="https://"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]"
          />
        </div>
      )}

      <div>
        <label htmlFor="personNote" className="block text-sm font-medium text-gray-700">
          {isVenue ? "Tell us about your event" : isMusician ? "Tell us about yourself and your music" : "Message"} *
        </label>
        <textarea
          id="personNote"
          name="personNote"
          required
          rows={5}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]"
          placeholder={
            isVenue
              ? "Event type, expected guests, preferred style of music..."
              : isMusician
                ? "Genres, experience, instruments, availability..."
                : "How can we help?"
          }
        />
      </div>

      {status === "error" && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
          {typeof errors === "object"
            ? Object.values(errors).join(" ")
            : "Something went wrong. Please try again or call (555) 123-4567."}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-[#1a2744] px-5 py-3 font-semibold text-white transition hover:bg-[#2a3a5c] disabled:opacity-50 sm:w-auto sm:px-8"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
