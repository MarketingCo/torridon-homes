import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-torridon-green text-torridon-cream pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex flex-col mb-8">
            <span className="text-3xl font-serif tracking-tighter text-white">TORRIDON</span>
            <span className="text-xs uppercase tracking-[0.3em] text-torridon-gold -mt-1">HOMES</span>
          </div>
          <p className="text-white/60 max-w-sm leading-relaxed font-sans">
            A boutique housing developer dedicated to creating exclusive, high-quality developments across the Central Belt of Scotland. We focus on projects under 12 dwellings to ensure unmatched attention to detail.
          </p>
        </div>

        <div>
          <h4 className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm font-sans tracking-wide">
            <li><Link href="#land" className="hover:text-white transition-colors">Land Acquisition</Link></li>
            <li><Link href="#jv" className="hover:text-white transition-colors">Joint Ventures</Link></li>
            <li><Link href="#developments" className="hover:text-white transition-colors">Developments</Link></li>
            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-8">Location</h4>
          <address className="not-italic text-sm text-white/60 leading-relaxed font-sans">
            Central Belt,<br />
            Scotland<br /><br />
            <a href="mailto:hello@torridonhomes.co.uk" className="text-white hover:text-torridon-gold transition-colors block mt-2">hello@torridonhomes.co.uk</a>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-[0.2em] text-white/30 font-sans">
        <p>© {new Date().getFullYear()} Torridon Homes Ltd. All rights reserved.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
