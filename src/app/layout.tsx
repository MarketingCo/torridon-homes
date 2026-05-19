import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AtmosphericBackground from "@/components/AtmosphericBackground";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Preloader from "@/components/Preloader";

const cinzel = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteUrl = "https://torridon-homes.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Torridon Homes | Residential Developments Scotland",
  description: "Specialist residential developers creating high-value homes across Scotland. Register Your Interest.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Torridon Homes",
    title: "Torridon Homes | Residential Developments Scotland",
    description: "Specialist residential developers creating high-value homes across Scotland. Register Your Interest.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://torridon-homes.co.uk/#business",
  "name": "Torridon Homes",
  "url": "https://torridon-homes.co.uk",
  "telephone": "0131 496 0882",
  "email": "info@torridon-homes.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Edinburgh",
    "addressRegion": "Scotland",
    "addressCountry": "GB"
  },
  "areaServed": [
    { "@type": "City", "name": "Edinburgh" },
    { "@type": "City", "name": "Glasgow" },
    { "@type": "City", "name": "St Andrews" }
  ],
  "priceRange": "££££"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${cinzel.variable} ${inter.variable} font-body antialiased flex flex-col min-h-screen bg-white`}>
        <Preloader />
        <SmoothScrollProvider>
          <AtmosphericBackground />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
