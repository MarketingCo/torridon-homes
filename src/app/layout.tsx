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
  title: "Torridon Homes | Boutique Housing Developers Scotland",
  description: "Boutique housing developer based in the Central Belt of Scotland. Specializing in high-end developments of under 12 dwellings. Seeking land acquisition and joint venture opportunities.",
  openGraph: {
    title: "Torridon Homes | Boutique Housing Developers Scotland",
    description: "Boutique housing developer based in the Central Belt of Scotland. Specializing in high-end developments of under 12 dwellings.",
    url: "https://torridon-homes.com",
    siteName: "Torridon Homes",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Torridon Homes | Boutique Housing Developers Scotland",
    description: "Boutique housing developer based in the Central Belt of Scotland.",
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
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05910_1px,transparent_1px),linear-gradient(to_bottom,#c5a05910_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
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
