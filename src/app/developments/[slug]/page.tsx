'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Home, MapPin, Shield, TrendingUp, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const projects = {
  'overton-edinburgh': {
    name: 'The Capital View',
    location: 'Overton, Edinburgh',
    units: '9 Luxury Apartments',
    status: 'Upcoming',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    overview: 'A milestone in urban boutique living. Situated on an elevated site in Overton, this development offers unparalleled views across the Edinburgh skyline to the Firth of Forth.',
    specs: ['Penthouse Level with Wrap-around Terraces', 'Intelligent Home Automation', 'Secure Underground Parking & EV Charging'],
    investment: 'Projected GDV £12.5M | Target Yield 18%'
  },
  'spott-dunbar': {
    name: 'Coastal Collection',
    location: 'Spott, Dunbar',
    units: '6 Eco-Conscious Homes',
    status: 'Coming Soon',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    overview: 'Sustainable luxury on the East Lothian coast. Six detached villas designed with passive solar principles and reclaimed Scottish stone.',
    specs: ['A-Rated Energy Performance', 'Triple Glazing & Air Source Heat Pumps', 'Private Coastal View Gardens'],
    investment: 'Projected GDV £8.2M | Fully Funded'
  }
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects[slug as keyof typeof projects];

  if (!project) return null;

  return (
    <main className="min-h-screen bg-torridon-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-torridon-green">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img src={project.img} className="w-full h-full object-cover opacity-60 grayscale-[30%]" alt={project.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-torridon-green via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/#developments" className="inline-flex items-center gap-2 text-torridon-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-8 hover:gap-4 transition-all">
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
            <h1 className="text-6xl md:text-8xl font-serif text-white italic leading-tight mb-4">{project.name}</h1>
            <div className="flex items-center justify-center gap-6 text-white/60 uppercase tracking-[0.2em] text-[10px] font-bold">
              <span className="flex items-center gap-2"><MapPin size={12} /> {project.location}</span>
              <span className="w-1 h-1 bg-torridon-gold rounded-full" />
              <span>{project.units}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2">
            <span className="text-torridon-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">The Narrative</span>
            <h2 className="text-4xl md:text-5xl font-serif text-torridon-green mb-8 italic">Boutique Architecture <br />meets Regional Heritage.</h2>
            <p className="text-torridon-green/70 text-xl font-sans leading-relaxed mb-12 italic">
              {project.overview}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-torridon-gold/10">
              <div>
                <h4 className="text-torridon-green font-serif text-2xl mb-6 italic">Technical Specification</h4>
                <ul className="space-y-4">
                  {project.specs.map((s, i) => (
                    <li key={i} className="flex items-start gap-4 text-torridon-green/60 text-sm italic leading-relaxed">
                      <div className="mt-1.5"><CheckCircle2 size={14} className="text-torridon-gold" /></div>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-torridon-green p-8 md:p-12 text-white rounded-sm shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 bg-torridon-gold text-torridon-green text-[8px] font-bold uppercase tracking-widest">Confidential</div>
                <h4 className="text-white font-serif text-2xl mb-6 italic">Investor Data</h4>
                <p className="text-white/60 text-xs font-sans mb-8 leading-relaxed italic">{project.investment}</p>
                <button className="w-full py-4 border border-white/20 text-white uppercase tracking-widest text-[9px] font-bold hover:bg-white hover:text-torridon-green transition-all">Request Full Appraisal</button>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="p-10 bg-white border border-torridon-gold/10 shadow-xl">
              <span className="text-torridon-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Status Update</span>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 bg-torridon-gold rounded-full animate-pulse" />
                <span className="text-2xl font-serif text-torridon-green italic">{project.status}</span>
              </div>
              <div className="space-y-6">
                <button className="w-full py-5 bg-torridon-green text-white uppercase tracking-widest text-[10px] font-bold hover:bg-torridon-gold transition-all shadow-xl">Register Interest</button>
                <button className="w-full py-5 border border-torridon-green text-torridon-green uppercase tracking-widest text-[10px] font-bold hover:bg-torridon-green hover:text-white transition-all">Download Brochure</button>
              </div>
            </div>
            
            <div className="aspect-[4/5] bg-torridon-green overflow-hidden rounded-sm">
              <img src={project.img} className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" alt="Detail" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
