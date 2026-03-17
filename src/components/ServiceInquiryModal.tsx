"use client";

import { useState, useEffect } from "react";

type ServiceInquiryModalProps = {
  serviceName: string;
  serviceIcon?: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function ServiceInquiryModal({
  serviceName,
  serviceIcon,
  isOpen,
  onClose,
}: ServiceInquiryModalProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setErrorMessage("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/service-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceName,
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          eventDate: formData.get("eventDate"),
          venue: formData.get("venue"),
          message: formData.get("message"),
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.errors?.form || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or call (703) 980-0379.");
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-inquiry-title"
    >
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {serviceIcon && <span className="text-2xl">{serviceIcon}</span>}
            <h2 id="service-inquiry-title" className="text-xl font-bold text-[#1a2744]">
              Enquire about {serviceName}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {status === "success" ? (
          <div className="mt-6 rounded-xl bg-green-50 p-6 text-center">
            <p className="text-lg font-medium text-green-800">
              Thank you! We&apos;ll get back to you soon about {serviceName}.
            </p>
            <p className="mt-2 text-green-700">
              Questions? Call us at (703) 980-0379.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 rounded-full bg-[#1a2744] px-6 py-2 font-semibold text-white transition hover:bg-[#2a3a5c]"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="service-name" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                id="service-name"
                name="name"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]"
              />
            </div>
            <div>
              <label htmlFor="service-email" className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                id="service-email"
                name="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]"
              />
            </div>
            <div>
              <label htmlFor="service-phone" className="block text-sm font-medium text-gray-700">
                Phone *
              </label>
              <input
                type="tel"
                id="service-phone"
                name="phone"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]"
              />
            </div>
            <div>
              <label htmlFor="service-eventDate" className="block text-sm font-medium text-gray-700">
                Event Date (if known)
              </label>
              <input
                type="text"
                id="service-eventDate"
                name="eventDate"
                placeholder="e.g. June 15, 2025"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]"
              />
            </div>
            <div>
              <label htmlFor="service-venue" className="block text-sm font-medium text-gray-700">
                Venue / Location
              </label>
              <input
                type="text"
                id="service-venue"
                name="venue"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]"
              />
            </div>
            <div>
              <label htmlFor="service-message" className="block text-sm font-medium text-gray-700">
                Tell us about your event *
              </label>
              <textarea
                id="service-message"
                name="message"
                required
                rows={4}
                placeholder="Event type, expected guests, what you're looking for..."
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]"
              />
            </div>
            {status === "error" && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-full bg-[#d4a84b] px-6 py-3 font-semibold text-[#1a2744] transition hover:bg-[#e5b95c] disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Submit Enquiry"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
