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
          <p className="text-white/60 max-w-sm leading-relaxed font-sans text-sm">
            A boutique property developer dedicated to creating exclusive, high-specification developments across the Central Belt of Scotland. We focus on projects of fewer than 12 dwellings to ensure unmatched attention to detail.
          </p>
        </div>

        <div>
          <h4 className="text-torridon-gold uppercase tracking-widest text-xs font-sans font-bold mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm font-sans tracking-wide text-white/70">
            <li><Link href="#land" className="hover:text-white transition-colors duration-300">Land Acquisition</Link></li>
            <li><Link href="#jv" className="hover:text-white transition-colors duration-300">Joint Ventures</Link></li>
            <li><Link href="#developments" className="hover:text-white transition-colors duration-300">Developments</Link></li>
            <li><Link href="#contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-torridon-gold uppercase tracking-widest text-xs font-sans font-bold mb-8">Contact</h4>
          <address className="not-italic text-sm text-white/60 leading-relaxed font-sans space-y-2">
            <span className="block">Central Belt, Scotland</span>
            <a
              href="tel:+441315550123"
              className="block hover:text-white transition-colors duration-300"
            >
              0131 555 0123
            </a>
            <a
              href="mailto:hello@torridonhomes.co.uk"
              className="block text-white hover:text-torridon-gold transition-colors duration-300"
            >
              hello@torridonhomes.co.uk
            </a>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-white/30 font-sans">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p>© {new Date().getFullYear()} Torridon Homes Ltd. All rights reserved.</p>
          <span className="hidden md:block w-px h-3 bg-white/20" />
          <p>{' '}
            <a
              className="text-torridon-gold/70 hover:text-torridon-gold transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </p>
        </div>
        <div className="flex space-x-8">
          <Link href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
