import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex flex-col mb-8">
            <span className="text-3xl font-torridon-serif tracking-tighter text-white">TORRIDON</span>
            <span className="text-sm font-medium tracking-wide text-torridon-gold -mt-1">HOMES</span>
          </div>
          <p className="text-white/60 max-w-sm leading-relaxed font-torridon-sans text-sm">
            A boutique property developer dedicated to creating exclusive, high-specification developments across the Central Belt of Scotland. We focus on projects of fewer than 12 dwellings to ensure unmatched attention to detail.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 border border-torridon-gold/30 text-torridon-gold text-sm font-medium tracking-wide">NHBC Registered</span>
            <span className="px-3 py-1 border border-torridon-gold/30 text-torridon-gold text-sm font-medium tracking-wide">LABC Warranty</span>
            <span className="px-3 py-1 border border-torridon-gold/30 text-torridon-gold text-sm font-medium tracking-wide">RICS Certified</span>
          </div>
        </div>

        <div>
          <h4 className="text-torridon-gold text-sm font-medium tracking-wide font-torridon-sans mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm font-torridon-sans tracking-wide text-white/70">
            <li><Link href="/blog" className="hover:text-white transition-colors duration-300">Journal</Link></li>
            <li><Link href="#land" className="hover:text-white transition-colors duration-300">Land Acquisition</Link></li>
            <li><Link href="#jv" className="hover:text-white transition-colors duration-300">Joint Ventures</Link></li>
            <li><Link href="#developments" className="hover:text-white transition-colors duration-300">Developments</Link></li>
            <li><Link href="#contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-torridon-gold text-sm font-medium tracking-wide font-torridon-sans mb-8">Contact</h4>
          <address className="not-italic text-sm text-white/60 leading-relaxed font-torridon-sans space-y-2">
            <span className="block">Central Belt, Scotland</span>
            <a
              href="tel:+441315550123"
              className="block hover:text-white transition-colors duration-300"
            >
              0131 555 0123
            </a>
            <a
              href="mailto:hello@torridon-homes.co.uk"
              className="block text-white hover:text-torridon-gold transition-colors duration-300"
            >
              hello@torridon-homes.co.uk
            </a>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium tracking-wide text-white/30 font-torridon-sans">
        <p>© {new Date().getFullYear()} Torridon Homes Ltd. All rights reserved.</p>
        <div className="flex space-x-8">
          <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-6 pt-6 border-t border-white/10 text-center">
        <p className="text-sm text-white/40">
          Website developed by <a href="https://marketing-company.co.uk" target="_blank" rel="noopener noreferrer" className="text-torridon-gold/70 hover:text-torridon-gold transition-colors duration-300 underline underline-offset-2">Marketing Company</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
