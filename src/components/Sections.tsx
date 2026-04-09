'use client';

import { motion } from 'framer-motion';
import { MapPin, Users, Home, TrendingUp, Shield, Trees } from 'lucide-react';

const Reveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const LandAcquisition = () => {
  return (
    <section id="land" className="py-24 md:py-32 bg-torridon-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block">
              Opportunity
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-torridon-green mb-8 leading-tight">
              Unlock the True <br className="hidden md:block" />
              <span className="italic">Value of Your Land.</span>
            </h2>
            <p className="text-torridon-green/70 text-lg font-sans mb-10 leading-relaxed max-w-xl">
              We are actively seeking land opportunities across the Central Belt of Scotland. Whether you have an urban infill site, a garden plot, or a larger brownfield area, we offer a transparent and professional appraisal process.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-torridon-green text-torridon-gold flex items-center justify-center rounded-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-torridon-green text-lg">Central Belt Focus</h4>
                  <p className="text-sm text-torridon-green/60">Strategically located developments across Central Scotland.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-torridon-green text-torridon-gold flex items-center justify-center rounded-sm">
                  <Home size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-torridon-green text-lg">Under 12 Units</h4>
                  <p className="text-sm text-torridon-green/60">Specializing in boutique, high-value developments.</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="inline-block px-10 py-5 bg-torridon-green text-white font-sans uppercase tracking-widest text-xs font-bold hover:bg-torridon-gold hover:text-torridon-green transition-colors duration-300 shadow-xl shadow-torridon-green/10">
              Submit Your Land
            </a>
          </Reveal>
          
          <div className="relative h-[500px] md:h-[600px]">
            <Reveal>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-center shadow-2xl rounded-sm" />
              <div className="absolute -bottom-8 -left-8 bg-torridon-green p-8 text-white hidden md:block max-w-xs shadow-2xl">
                <p className="text-sm italic font-serif leading-relaxed">
                  "Our mission is to respect the heritage of the land while building for the future of Scottish living."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export const JointVentures = () => {
  return (
    <section id="jv" className="py-24 md:py-32 bg-torridon-green text-torridon-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <Reveal>
          <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block">
            Partnership
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-10 leading-tight">
            Strategic Investment <br className="hidden md:block" />
            <span className="italic">& Joint Ventures.</span>
          </h2>
          <p className="text-white/60 text-lg font-sans mb-16 max-w-2xl mx-auto leading-relaxed">
            We partner with investors and landowners to deliver exceptional boutique housing projects. Our focused approach ensures agility, quality, and strong returns.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              { 
                icon: TrendingUp, 
                title: 'Market Expertise', 
                desc: 'Deep understanding of Central Scotland’s housing market dynamics.' 
              },
              { 
                icon: Shield, 
                title: 'Risk Management', 
                desc: 'Conservative yet effective risk mitigation strategies for all partners.' 
              },
              { 
                icon: Users, 
                title: 'Collaborative Vision', 
                desc: 'Transparent communication and aligned goals in every project.' 
              }
            ].map((item, i) => (
              <div key={i} className="p-10 border border-white/10 hover:border-torridon-gold/30 transition-colors bg-white/5 backdrop-blur-sm group">
                <item.icon className="text-torridon-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-serif text-white mb-4">{item.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20">
            <a href="#contact" className="inline-block px-10 py-5 border-2 border-torridon-gold text-torridon-gold font-sans uppercase tracking-widest text-xs font-bold hover:bg-torridon-gold hover:text-torridon-green transition-all duration-300">
              Inquire About Funding
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export const Developments = () => {
  return (
    <section id="developments" className="py-24 md:py-32 bg-torridon-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <Reveal>
            <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block">
              The Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-torridon-green leading-tight">
              Future <br className="hidden md:block" />
              <span className="italic">Developments.</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-torridon-green/60 text-lg font-sans max-w-md leading-relaxed">
              We are currently in the planning and development phase for several exclusive sites. Sign up for early access to our future brochures.
            </p>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { 
              location: 'Stirling District', 
              name: 'The Ochil Collection', 
              units: '8 Luxury Detached Villas',
              img: 'https://images.unsplash.com/photo-1600607687940-4e2003e25d27?q=80&w=2070&auto=format&fit=crop'
            },
            { 
              location: 'West Lothian', 
              name: 'Linlithgow Mews', 
              units: '4 High-End Townhouses',
              img: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop'
            }
          ].map((item, i) => (
            <Reveal key={i}>
              <div className="group relative overflow-hidden bg-torridon-green">
                <div className={`h-[400px] md:h-[500px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80`} style={{ backgroundImage: `url('${item.img}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-torridon-green to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-10 w-full text-white">
                  <span className="text-torridon-gold text-xs uppercase tracking-widest font-sans mb-2 block">{item.location}</span>
                  <h3 className="text-2xl md:text-3xl font-serif mb-2">{item.name}</h3>
                  <div className="flex items-center gap-2 text-white/70">
                    <Home size={14} />
                    <span className="text-sm font-sans tracking-wide">{item.units}</span>
                  </div>
                  <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Register Interest</span>
                    <div className="w-8 h-[1px] bg-torridon-gold" />
                  </div>
                </div>
                <div className="absolute top-8 right-8 bg-torridon-gold text-torridon-green px-4 py-2 text-[10px] uppercase font-bold tracking-widest">
                  Coming Soon
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
