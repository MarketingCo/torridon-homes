import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Torridon Homes",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-torridon-cream text-torridon-forest px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-torridon-gold mb-6 font-torridon-serif">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 font-torridon-serif">
          Page Not Found
        </h2>
        <p className="text-lg text-torridon-forest/70 mb-10 leading-relaxed font-torridon-sans">
          Sorry, the page you are looking for does not exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-12 py-6 bg-torridon-gold text-torridon-forest font-torridon-sans text-sm font-medium tracking-wide transition-all duration-500 overflow-hidden shadow-2xl hover:bg-torridon-forest hover:text-white"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
