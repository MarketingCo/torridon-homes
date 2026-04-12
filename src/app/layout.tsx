import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import AtmosphericBackground from "@/components/AtmosphericBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Torridon Homes | Luxury Boutique Property Developers Scotland",
  description: "Torridon Homes is a premier boutique housing developer in Scotland's Central Belt, specializing in exclusive high-end residential developments and strategic land acquisition.",
  keywords: ["Luxury Homes Scotland", "Boutique Housing Developers", "Land Acquisition Scotland", "Property Joint Ventures", "New Build Homes Central Belt", "High-end Residential Developments"],
  alternates: {
    canonical: "https://torridon-homes.com",
  },
  openGraph: {
    title: "Torridon Homes | Luxury Boutique Property Developers Scotland",
    description: "Exclusive high-end residential developments in Scotland's Central Belt. Premier boutique housing developer and land acquisition specialist.",
    url: "https://torridon-homes.com",
    siteName: "Torridon Homes",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Torridon Homes | Luxury Boutique Property Developers Scotland",
    description: "Exclusive high-end residential developments in Scotland's Central Belt.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Torridon Homes",
    "description": "Boutique housing developer based in the Central Belt of Scotland.",
    "url": "https://torridon-homes.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Edinburgh",
      "addressRegion": "Scotland",
      "addressCountry": "GB"
    }
  };

  return (
    <html
      lang="en"
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
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e110_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e110_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        {/* Atmospheric Light Leak */}
        <AtmosphericBackground />
        
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] grayscale bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" aria-hidden="true" />
        <Preloader />
        <CustomCursor />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
