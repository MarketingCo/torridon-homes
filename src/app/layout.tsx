import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import AtmosphericBackground from "@/components/AtmosphericBackground";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Torridon Homes | Boutique Property Developer Scotland",
    template: "%s | Torridon Homes",
  },
  description:
    "Torridon Homes is a boutique property developer operating across the Central Belt of Scotland. Specialising in high-specification developments of fewer than 12 dwellings. Currently seeking land acquisition and joint venture partnerships.",
  keywords: [
    "boutique property developer Scotland",
    "luxury homes Central Belt",
    "property developer Edinburgh",
    "land acquisition Scotland",
    "high specification homes Scotland",
    "joint venture property Scotland",
  ],
  metadataBase: new URL('https://torridon-homes.co.uk'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Torridon Homes | Boutique Property Developer Scotland",
    description:
      "Boutique property developer across the Central Belt of Scotland. High-specification developments of fewer than 12 dwellings.",
    url: "https://torridon-homes.co.uk",
    siteName: "Torridon Homes",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Torridon Homes — Boutique Property Developer, Scotland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Torridon Homes | Boutique Property Developer Scotland",
    description:
      "Boutique property developer across the Central Belt of Scotland.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://torridon-homes.co.uk/#business",
      "name": "Torridon Homes",
      "description":
        "Boutique property developer operating across the Central Belt of Scotland, specialising in high-specification developments of fewer than 12 dwellings.",
      "url": "https://torridon-homes.co.uk",
      "telephone": "+441315550123",
      "email": "hello@torridon-homes.co.uk",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 37 Imex Centre, Dryden Road",
        "addressLocality": "Loanhead",
        "addressRegion": "Scotland",
        "addressCountry": "GB",
        "postalCode": "EH20 9LZ",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 55.877,
        "longitude": -3.149,
      },
      "areaServed": {
        "@type": "State",
        "name": "Central Belt, Scotland",
      },
      "priceRange": "££££",
      "sameAs": [],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "28",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:30",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://torridon-homes.co.uk/#service",
      "name": "Boutique Property Development",
      "provider": { "@id": "https://torridon-homes.co.uk/#business" },
      "areaServed": { "@type": "State", "name": "Central Belt, Scotland" },
      "serviceType": "Residential Property Development",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Luxury Home Developments",
              "description": "High-specification developments of fewer than 12 dwellings across Scotland's Central Belt.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Land Acquisition",
              "description": "Strategic land acquisition and site appraisal for residential development.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Joint Venture Partnerships",
              "description": "Equity partnerships with landowners and investors for bespoke residential projects.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-torridon-cream relative overflow-x-hidden">
        {/* Global Architectural Grid */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05910_1px,transparent_1px),linear-gradient(to_bottom,#c5a05910_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        {/* Atmospheric Light Leak */}
        <AtmosphericBackground />

        <Preloader />
        <CustomCursor />
        <div className="relative z-10">
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </div>
      </body>
    </html>
  );
}
