import Link from "next/link";
import WebsiteMarketingForm from "@/components/WebsiteMarketingForm";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Websites & Marketing for Artists | Planetary Music",
  description:
    "Professional websites and marketing services for bands and artists. Build your online presence, reach more fans, and grow your audience.",
};

export default function WebsitesMarketingPage() {
  return (
    <main>
      <PageHeader
        title="Websites & Marketing for Artists"
        description="Your band deserves a professional online presence. We build custom websites and create marketing strategies that help you reach more fans, book more gigs, and grow your career."
        tags={["Websites", "Social Media", "Press Kits"]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-[#1a2744]">
                What We Offer
              </h2>
              <ul className="mt-6 space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#d4a84b]">•</span>
                  <span>Custom-designed band websites that reflect your brand</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#d4a84b]">•</span>
                  <span>Tour dates, music players, and booking integration</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#d4a84b]">•</span>
                  <span>Social media strategy and content planning</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#d4a84b]">•</span>
                  <span>Email marketing and fan list building</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#d4a84b]">•</span>
                  <span>Press kits and promotional materials</span>
                </li>
              </ul>
              <p className="mt-8 text-gray-600">
                Fill out the form to get started. We&apos;ll review your
                submission and schedule a call to discuss your vision.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block text-[#d4a84b] font-medium hover:text-[#b8923f]"
              >
                Have questions? Contact us →
              </Link>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="text-xl font-semibold text-[#1a2744]">
                Website &amp; Marketing Request
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Complete the form below with your band&apos;s information. The more
                detail you provide, the better we can tailor our proposal.
              </p>
              <div className="mt-6">
                <WebsiteMarketingForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
