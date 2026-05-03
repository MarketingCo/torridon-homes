'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const partners = [
  { name: 'Crescent Builders', url: 'https://crescent-builders.co.uk', category: 'Construction' },
  { name: 'Alumise', url: 'https://www.alumise.com', category: 'Glazing' },
  { name: 'SE Joinery', url: 'https://www.southedinburghjoinery.co.uk', category: 'Joinery' },
  { name: 'Forge & Frame', url: 'https://www.steel-fabricator.vercel.app', category: 'Engineering' },
  { name: 'Builders QS', url: 'https://www.builders-qs.com', category: 'Surveying' },
];

export default function NetworkPartners() {
  return (
    <section className="py-12 bg-stone-50 border-t border-stone-100">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="shrink-0 text-left">
          <p className="font-serif italic text-xs text-stone-300">MarketingCo Collective</p>
          <p className="text-[10px] font-bold text-stone-200 uppercase tracking-widest">Network Authority</p>
        </div>
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-stone-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-stone-50 to-transparent z-10" />
          <motion.div
            animate={{ x: [0, -100 * partners.length] }}
            transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 45, ease: 'linear' } }}
            className="flex gap-16 items-center"
          >
            {[...partners, ...partners].map((p, i) => (
              <Link key={i} href={p.url} target="_blank" rel="partner" className="flex-shrink-0 group opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                <div className="flex items-center gap-3 text-stone-900">
                  <span className="text-xs font-bold uppercase tracking-tighter">{p.name}</span>
                  <span className="text-[8px] uppercase tracking-widest text-stone-400 font-black px-2 py-0.5 border border-stone-200 rounded-full group-hover:text-stone-900 group-hover:border-stone-900 transition-all">{p.category}</span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
