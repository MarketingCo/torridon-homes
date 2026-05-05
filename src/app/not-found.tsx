import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Torridon Homes",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-torridon-cream text-torridon-green px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-torridon-gold mb-6 font-serif">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 font-serif">
          Page Not Found
        </h2>
        <p className="text-lg text-torridon-green/70 mb-10 leading-relaxed font-sans">
          Sorry, the page you are looking for does not exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-12 py-6 bg-torridon-gold text-torridon-green font-sans uppercase tracking-[0.2em] text-[10px] font-bold transition-all duration-500 overflow-hidden shadow-2xl hover:bg-torridon-green hover:text-white"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
