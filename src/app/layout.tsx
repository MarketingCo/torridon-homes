import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AtmosphericBackground from "@/components/AtmosphericBackground";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import NetworkPartners from "@/components/NetworkPartners";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  style: "italic",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Torridon Homes | Elite Residential Developments & Site Management",
  description: "Specialist residential developers creating high-value homes across Scotland. Delivering architectural vision and master site management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${playfair.variable} ${inter.variable} font-body antialiased flex flex-col min-h-screen bg-white`}>
        <SmoothScrollProvider>
          <AtmosphericBackground />
          <Header />
          <main className="flex-grow">{children}</main>
          <NetworkPartners />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
