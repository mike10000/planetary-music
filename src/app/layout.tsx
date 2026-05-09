import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://planetarymusic.com";

const SITE_DESCRIPTION =
  "Premier full-service booking and entertainment agency. Exceptional live bands, DJ services, karaoke, trivia, and bespoke performances for events of all scales.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Planetary Music | Elevating Events Across the East Coast",
    template: "%s | Planetary Music",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Planetary Music",
  openGraph: {
    type: "website",
    siteName: "Planetary Music",
    url: SITE_URL,
    title: "Planetary Music | Elevating Events Across the East Coast",
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planetary Music | Elevating Events Across the East Coast",
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
