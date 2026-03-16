"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData();
    formData.set("personEmailWork", email.trim());
    formData.set("personName", "Newsletter Subscriber");
    formData.set("personNote", "Email signup: Events, promotions, and services");

    try {
      const res = await fetch("/api/overture", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.errors?.[0] || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center">
        <p className="text-sm font-medium text-[#d4a84b]">
          Thanks for signing up! We&apos;ll keep you in the loop.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === "submitting"}
          className="min-w-0 flex-1 rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder:text-white/60 focus:border-[#d4a84b] focus:outline-none focus:ring-1 focus:ring-[#d4a84b] disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-lg bg-[#d4a84b] px-5 py-2.5 font-semibold text-[#1a2744] transition hover:bg-[#e5b95c] disabled:opacity-50"
        >
          {status === "submitting" ? "Signing up..." : "Sign Up"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-300">{errorMessage}</p>
      )}
    </div>
  );
}
