import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-torridon-cream relative">
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] grayscale bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" aria-hidden="true" />
        <Preloader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
