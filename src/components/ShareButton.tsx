'use client';

import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

export default function ShareButton({ title, text, url }: ShareButtonProps) {
  const handleShare = async () => {
    const fullUrl = `https://torridon-homes.co.uk${url}`;
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url: fullUrl });
      } catch {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(fullUrl);
      } catch {
        // clipboard failed
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-torridon-gold text-sm font-medium tracking-wide hover:text-torridon-forest transition-colors"
    >
      <Share2 size={14} />
      Share
    </button>
  );
}
