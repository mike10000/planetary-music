"use client";

import { useState } from "react";

export default function WebsiteMarketingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    const desiredFeatures = (formData.getAll("desiredFeatures") as string[]).filter(Boolean);
    const desiredFeaturesText = (formData.get("desiredFeaturesText") as string)?.trim() || "";

    const submitData: Record<string, string | string[]> = {
      personName: (formData.get("personName") as string) || "",
      personEmailWork: (formData.get("personEmailWork") as string) || "",
      personPhoneWork: (formData.get("personPhoneWork") as string) || "",
      bandName: (formData.get("bandName") as string) || "",
      genres: (formData.get("genres") as string) || "",
      yearFormed: (formData.get("yearFormed") as string) || "",
      location: (formData.get("location") as string) || "",
      memberCount: (formData.get("memberCount") as string) || "",
      bandMembers: (formData.get("bandMembers") as string) || "",
      bandBio: (formData.get("bandBio") as string) || "",
      existingWebsite: (formData.get("existingWebsite") as string) || "",
      facebook: (formData.get("facebook") as string) || "",
      instagram: (formData.get("instagram") as string) || "",
      spotify: (formData.get("spotify") as string) || "",
      youtube: (formData.get("youtube") as string) || "",
      otherLinks: (formData.get("otherLinks") as string) || "",
      logoAssets: (formData.get("logoAssets") as string) || "",
      photos: (formData.get("photos") as string) || "",
      videoLinks: (formData.get("videoLinks") as string) || "",
      musicSamples: (formData.get("musicSamples") as string) || "",
      pressReviews: (formData.get("pressReviews") as string) || "",
      preferredDomain: (formData.get("preferredDomain") as string) || "",
      desiredFeatures: desiredFeatures,
      desiredFeaturesText,
      timeline: (formData.get("timeline") as string) || "",
      budgetRange: (formData.get("budgetRange") as string) || "",
      additionalNotes: (formData.get("additionalNotes") as string) || "",
    };

    try {
      const res = await fetch("/api/website-marketing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrors(result.errors || {});
      }
    } catch {
      setStatus("error");
      setErrors({ form: "Something went wrong. Please try again or call (703) 980-0379." });
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 p-8 text-center">
        <p className="text-lg font-medium text-green-800">
          Thank you! We&apos;ve received your website &amp; marketing inquiry.
        </p>
        <p className="mt-2 text-green-700">
          Our team will review your submission and get back to you within 1–2 business days.
        </p>
        <p className="mt-2 text-green-700">
          Questions? Call us at (703) 980-0379.
        </p>
      </div>
    );
  }

  const inputClass = "mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-[#1a2744] focus:ring-[#1a2744]";
  const labelClass = "block text-sm font-medium text-gray-700";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-[#1a2744]">Contact Information</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="personName" className={labelClass}>Primary Contact Name *</label>
            <input type="text" id="personName" name="personName" required className={inputClass} />
          </div>
          <div>
            <label htmlFor="personEmailWork" className={labelClass}>Email *</label>
            <input type="email" id="personEmailWork" name="personEmailWork" required className={inputClass} />
          </div>
          <div>
            <label htmlFor="personPhoneWork" className={labelClass}>Phone *</label>
            <input type="tel" id="personPhoneWork" name="personPhoneWork" required className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* Band Information */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-[#1a2744]">Band / Artist Information</legend>
        <div>
          <label htmlFor="bandName" className={labelClass}>Band or Artist Name *</label>
          <input type="text" id="bandName" name="bandName" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="genres" className={labelClass}>Genres / Musical Style *</label>
          <input type="text" id="genres" name="genres" required placeholder="e.g. Rock, Country, Jazz" className={inputClass} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="yearFormed" className={labelClass}>Year Formed</label>
            <input type="text" id="yearFormed" name="yearFormed" placeholder="e.g. 2015" className={inputClass} />
          </div>
          <div>
            <label htmlFor="location" className={labelClass}>Location / City</label>
            <input type="text" id="location" name="location" placeholder="e.g. Washington D.C." className={inputClass} />
          </div>
        </div>
        <div>
          <label htmlFor="memberCount" className={labelClass}>Number of Band Members</label>
          <input type="text" id="memberCount" name="memberCount" placeholder="e.g. 4" className={inputClass} />
        </div>
        <div>
          <label htmlFor="bandMembers" className={labelClass}>Band Members &amp; Roles</label>
          <textarea id="bandMembers" name="bandMembers" rows={3} placeholder="e.g. John - Vocals/Guitar, Jane - Bass, Mike - Drums" className={inputClass} />
        </div>
        <div>
          <label htmlFor="bandBio" className={labelClass}>Band Bio / Description *</label>
          <textarea id="bandBio" name="bandBio" required rows={5} placeholder="Tell us about your band, your sound, and what makes you unique..." className={inputClass} />
        </div>
      </fieldset>

      {/* Online Presence */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-[#1a2744]">Current Online Presence</legend>
        <div>
          <label htmlFor="existingWebsite" className={labelClass}>Existing Website (if any)</label>
          <input type="url" id="existingWebsite" name="existingWebsite" placeholder="https://" className={inputClass} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="facebook" className={labelClass}>Facebook URL</label>
            <input type="url" id="facebook" name="facebook" placeholder="https://facebook.com/..." className={inputClass} />
          </div>
          <div>
            <label htmlFor="instagram" className={labelClass}>Instagram URL</label>
            <input type="url" id="instagram" name="instagram" placeholder="https://instagram.com/..." className={inputClass} />
          </div>
          <div>
            <label htmlFor="spotify" className={labelClass}>Spotify URL</label>
            <input type="url" id="spotify" name="spotify" placeholder="https://open.spotify.com/..." className={inputClass} />
          </div>
          <div>
            <label htmlFor="youtube" className={labelClass}>YouTube URL</label>
            <input type="url" id="youtube" name="youtube" placeholder="https://youtube.com/..." className={inputClass} />
          </div>
        </div>
        <div>
          <label htmlFor="otherLinks" className={labelClass}>Other Links (Bandcamp, SoundCloud, TikTok, etc.)</label>
          <textarea id="otherLinks" name="otherLinks" rows={2} placeholder="One URL per line or comma-separated" className={inputClass} />
        </div>
      </fieldset>

      {/* Assets & Media */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-[#1a2744]">Assets &amp; Media</legend>
        <p className="text-sm text-gray-600">Share links to cloud storage (Dropbox, Google Drive) or describe what you have. We&apos;ll follow up for files.</p>
        <div>
          <label htmlFor="logoAssets" className={labelClass}>Logo &amp; Branding Assets</label>
          <textarea id="logoAssets" name="logoAssets" rows={2} placeholder="Link to logo files, or describe what you have (format, colors)" className={inputClass} />
        </div>
        <div>
          <label htmlFor="photos" className={labelClass}>High-Resolution Photos</label>
          <textarea id="photos" name="photos" rows={2} placeholder="Link to photo folder or describe available images" className={inputClass} />
        </div>
        <div>
          <label htmlFor="videoLinks" className={labelClass}>Video Links (performances, music videos)</label>
          <textarea id="videoLinks" name="videoLinks" rows={2} placeholder="YouTube, Vimeo, or other video URLs" className={inputClass} />
        </div>
        <div>
          <label htmlFor="musicSamples" className={labelClass}>Music Samples</label>
          <textarea id="musicSamples" name="musicSamples" rows={2} placeholder="Links to tracks, EPK, or streaming" className={inputClass} />
        </div>
        <div>
          <label htmlFor="pressReviews" className={labelClass}>Press / Reviews</label>
          <textarea id="pressReviews" name="pressReviews" rows={2} placeholder="Links to articles, quotes, or press kit" className={inputClass} />
        </div>
      </fieldset>

      {/* Website Requirements */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-[#1a2744]">Website Requirements</legend>
        <div>
          <label htmlFor="preferredDomain" className={labelClass}>Preferred Domain Name</label>
          <input type="text" id="preferredDomain" name="preferredDomain" placeholder="e.g. yourbandname.com" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Desired Website Features</label>
          <div className="mt-2 space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="desiredFeatures" value="Tour dates" className="rounded border-gray-300" />
              <span className="text-sm">Tour dates / calendar</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="desiredFeatures" value="Merch store" className="rounded border-gray-300" />
              <span className="text-sm">Merch store</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="desiredFeatures" value="Booking form" className="rounded border-gray-300" />
              <span className="text-sm">Booking / contact form</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="desiredFeatures" value="News/Blog" className="rounded border-gray-300" />
              <span className="text-sm">News / blog</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="desiredFeatures" value="Music player" className="rounded border-gray-300" />
              <span className="text-sm">Music / video player</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="desiredFeatures" value="Mailing list" className="rounded border-gray-300" />
              <span className="text-sm">Mailing list signup</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="desiredFeatures" value="Social links" className="rounded border-gray-300" />
              <span className="text-sm">Social media integration</span>
            </label>
          </div>
          <input type="text" name="desiredFeaturesText" placeholder="Other features?" className={`${inputClass} mt-2`} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="timeline" className={labelClass}>Timeline / Desired Launch Date</label>
            <input type="text" id="timeline" name="timeline" placeholder="e.g. By summer 2025" className={inputClass} />
          </div>
          <div>
            <label htmlFor="budgetRange" className={labelClass}>Budget Range</label>
            <select id="budgetRange" name="budgetRange" className={inputClass}>
              <option value="">Select range</option>
              <option value="Under $1,000">Under $1,000</option>
              <option value="$1,000 - $2,500">$1,000 - $2,500</option>
              <option value="$2,500 - $5,000">$2,500 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000+">$10,000+</option>
              <option value="Flexible">Flexible / Discuss</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="additionalNotes" className={labelClass}>Additional Notes</label>
          <textarea id="additionalNotes" name="additionalNotes" rows={4} placeholder="Anything else we should know? Design preferences, inspiration sites, marketing goals..." className={inputClass} />
        </div>
      </fieldset>

      {status === "error" && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
          {typeof errors === "object"
            ? Object.values(errors).join(" ")
            : "Something went wrong. Please try again or call (703) 980-0379."}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-[#1a2744] px-8 py-4 font-semibold text-white transition hover:bg-[#2a3a5c] disabled:opacity-50 sm:w-auto"
      >
        {status === "submitting" ? "Submitting..." : "Submit Website Request"}
      </button>
    </form>
  );
}
