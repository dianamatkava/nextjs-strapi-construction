import "@/app/ui/global.css";
import Footer from "@/app/ui/Footer/Footer";
import AppHeader from "@/app/ui/Header/AppHeader";
import { global } from "@/app/data/globals";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { APP_FACEBOOK_URL, APP_INSTAGRAM_URL } from "./constants";
import CookieConsent from "./ui/Components/CookieConsent";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Otter Water Restoration | Water Damage & Restoration Services San Diego",
  description:
    "Professional water damage restoration services in San Diego. 24/7 emergency response, water removal, drying, and full restoration services.",
  keywords:
    "water damage restoration, water removal, flood cleanup, emergency water services, San Diego",
  alternates: {
    canonical: "https://otterwaterrestoration.com",
  },
  openGraph: {
    title:
      "Otter Water Restoration | Water Damage & Restoration Services San Diego",
    description:
      "Professional water damage restoration services in San Diego. 24/7 emergency response, water removal, drying, and full restoration services.",
    type: "website",
    locale: "en_US",
    siteName: "Otter Water Restoration",
    url: "https://otterwaterrestoration.com",
    images: [
      {
        url: "https://otterwaterrestoration.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Otter Water Restoration - Professional Water Damage Services in San Diego",
      },
    ],
    countryName: "United States",
    phoneNumbers: ["+1 619 510 1998"],
    emails: ["service@otterwaterrestoration.com"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Otter Water Restoration | Water Damage Services",
    description:
      "24/7 emergency water damage restoration services in San Diego. Fast response, professional team, guaranteed results.",
    images: ["https://otterwaterrestoration.com/twitter-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "Service"],
  name: "Otter Water Restoration",
  description:
    "Professional water damage restoration services in San Diego. 24/7 emergency response, water removal, drying, and full restoration services.",
  url: "https://otterwaterrestoration.com",
  telephone: "+1 619 510 1998",
  email: "service@otterwaterrestoration.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Diego",
    addressRegion: "CA",
    addressCountry: "US",
    address: "San Diego, California",
  },
  areaServed: "San Diego County",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [APP_FACEBOOK_URL, APP_INSTAGRAM_URL],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${plusJakartaSans.className} antialiased`}>
        {/*<CustomCursor/>*/}
        <AppHeader
          siteDescription={global.siteDescription}
          siteSlogan={global.siteSlogan}
          siteReview={global.siteReview}
        />
        {children}
        <CookieConsent />
        <Footer siteDescription={global.siteDescription} />
      </body>
    </html>
  );
}
