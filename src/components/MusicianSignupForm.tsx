"use client";

import { useState } from "react";

export default function MusicianSignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/musician-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.errors?.[0] || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or call (703) 980-0379.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 p-8 text-center">
        <p className="text-lg font-medium text-green-800">
          Thanks for signing up! We&apos;ll be in touch soon.
        </p>
        <p className="mt-2 text-green-700">
          Questions? Call us at (703) 980-0379.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "submitting"}
          placeholder="your@email.com"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744] disabled:opacity-50"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-[#1a2744] px-5 py-3 font-semibold text-white transition hover:bg-[#2a3a5c] disabled:opacity-50 sm:w-auto sm:px-8"
      >
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
