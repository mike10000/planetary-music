import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Karaoke & Trivia | Planetary Music",
  description:
    "Karaoke and trivia entertainment for bars, restaurants, and events. Fun, engaging experiences across the Washington D.C. area.",
};

export default function KaraokeTriviaPage() {
  return (
    <main>
      <PageHeader
        title="Karaoke & Trivia"
        description="Bring the fun to your venue with our karaoke and trivia services. Perfect for bars, restaurants, corporate events, and private parties."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-2xl text-lg text-gray-600">
            Our karaoke and trivia hosts create engaging, interactive experiences that keep guests entertained and coming back. From weekly trivia nights to karaoke parties, we have the talent to elevate your event.
          </p>
          <Link
            href="/contact?type=venue"
            className="mt-8 inline-flex rounded-full bg-[#d4a84b] px-6 py-3 text-sm font-semibold text-[#1a2744] transition hover:bg-[#e5b95c]"
          >
            Book Karaoke or Trivia
          </Link>
        </div>
      </section>
    </main>
  );
}
