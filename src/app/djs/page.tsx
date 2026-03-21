import PageHeader from "@/components/PageHeader";
import BookingFormSection from "@/components/BookingFormSection";
import VenueContactInfo from "@/components/VenueContactInfo";

export const metadata = {
  title: "DJs | Planetary Music",
  description:
    "Professional DJ services for weddings, corporate events, and private parties. Premier DJ talent across the Washington D.C. area.",
};

export default function DJsPage() {
  return (
    <main>
      <PageHeader
        title="DJs"
        description="Professional DJ services to keep your event moving. From weddings to corporate parties, our DJs bring the energy and expertise to create unforgettable experiences."
        tags={["Weddings", "Corporate Events", "Club Nights", "Private Parties"]}
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <VenueContactInfo />
            <BookingFormSection formType="dj" />
          </div>
        </div>
      </section>
    </main>
  );
}
