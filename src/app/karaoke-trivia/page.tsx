import PageHeader from "@/components/PageHeader";
import BookingFormSection from "@/components/BookingFormSection";
import VenueContactInfo from "@/components/VenueContactInfo";

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
        tags={["Bars", "Restaurants", "Corporate Events", "Private Parties"]}
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <VenueContactInfo />
            <BookingFormSection formType="karaoke" />
          </div>
        </div>
      </section>
    </main>
  );
}
