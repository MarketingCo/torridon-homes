'use client';

import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { MapPin, Users, Home, TrendingUp, Shield, Trees, Layers, ChevronRight, Mail, Phone, Send, X } from 'lucide-react';

/* 
  25. BLUEPRINT X-RAY COMPONENT
*/
export const BlueprintImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  return (
    <div className={`relative group overflow-hidden bg-torridon-green ${className}`}>
      {/* Base Photo */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-20 group-hover:blur-[2px]" 
      />
      
      {/* Blueprint Grid & Technical Drawing Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none p-8 md:p-12 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-full h-full text-torridon-gold opacity-40">
          <path d="M0,0 L200,0 L200,200 L0,200 Z" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" />
          <path d="M0,50 L200,50 M0,100 L200,100 M0,150 L200,150" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <path d="M50,0 L50,200 M100,0 L100,200 M150,0 L150,200" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="4 4" />
          <path d="M40,40 L160,160 M160,40 L40,160" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
        <div className="absolute top-12 left-12 border-l border-torridon-gold pl-4 text-left">
          <div className="text-torridon-gold text-[8px] font-bold uppercase tracking-[0.4em]">Section Detail // AA-01</div>
          <div className="text-white/40 text-[6px] uppercase tracking-widest mt-1">Scale 1:50 @ A1</div>
        </div>
        <div className="absolute bottom-12 right-12 text-right">
          <div className="text-torridon-gold text-[8px] font-bold uppercase tracking-[0.4em]">Torridon Standard</div>
          <div className="text-white/40 text-[6px] uppercase tracking-widest mt-1">Precision Engineered</div>
        </div>
      </div>
    </div>
  );
};

/* 
  26. PROJECT ROADMAP (DUNBAR & EDINBURGH FOCUS)
*/
export const ProjectRoadmap = () => {
  const roadmaps = [
    {
      site: "Spott, Dunbar",
      phases: [
        { title: "Acquisition", date: "Q1 2024", status: "Complete" },
        { title: "Planning Permission", date: "Q3 2024", status: "Complete" },
        { title: "Groundworks", date: "Q1 2025", status: "In Progress" },
        { title: "First Release", date: "Q3 2025", status: "Upcoming" }
      ]
    },
    {
      site: "Overton, Edinburgh",
      phases: [
        { title: "Strategic Site Secure", date: "Q2 2024", status: "Complete" },
        { title: "Architectural Design", date: "Q4 2024", status: "Complete" },
        { title: "Pre-Planning", date: "Q1 2025", status: "Active" },
        { title: "Sales Launch", date: "Q4 2025", status: "Upcoming" }
      ]
    }
  ];

  return (
    <section className="py-32 bg-torridon-cream border-y border-torridon-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {roadmaps.map((road, i) => (
            <Reveal key={i}>
              <div className="bg-white p-10 md:p-16 shadow-2xl rounded-sm">
                <span className="text-torridon-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block italic">Development Stream</span>
                <h3 className="text-3xl md:text-4xl font-serif text-torridon-green mb-12 italic">{road.site}</h3>
                <div className="space-y-10">
                  {road.phases.map((phase, pi) => (
                    <div key={pi} className="relative pl-10 border-l border-torridon-gold/20">
                      <div className={`absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full ${phase.status === 'Complete' ? 'bg-torridon-gold' : 'bg-torridon-green animate-pulse'}`} />
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-serif text-torridon-green italic leading-none">{phase.title}</h4>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-torridon-gold">{phase.status}</span>
                      </div>
                      <p className="text-xs text-torridon-green/40 font-sans tracking-widest uppercase">{phase.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 
  REUSABLE ANIMATION COMPONENT 
*/
const Reveal = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* 
  01. PHILOSOPHY 
*/
export const Philosophy = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="philosophy" ref={container} className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
        <Reveal>
          <span className="text-torridon-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block tracking-widest">Our Philosophy</span>
          <h2 className="text-4xl md:text-6xl font-serif text-torridon-green mb-8 max-w-3xl mx-auto leading-tight">
            Building with <span className="italic text-torridon-gold">Purpose</span> <br /> and <span className="italic text-torridon-gold">Precision.</span>
          </h2>
          <div className="w-20 h-[1px] bg-torridon-gold mx-auto" />
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="relative group">
          <Reveal>
            <div className="absolute -inset-4 border border-torridon-gold/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            <div className="relative z-10 w-full aspect-[4/5] overflow-hidden shadow-2xl">
              <motion.img 
                style={{ y }}
                src="https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Interior Detail" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-125"
              />
            </div>
          </Reveal>
        </div>

        <div className="space-y-12">
          {[
            { 
              title: "Exclusivity by Design", 
              desc: "By limiting our developments to under 12 dwellings, we maintain a level of craftsmanship and personal oversight that large-scale developers simply cannot match." 
            },
            { 
              title: "The Torridon Standard", 
              desc: "Every home is a testament to Scottish architectural heritage, reimagined for modern luxury living with high-specification finishes and sustainable technology." 
            },
            { 
              title: "Rooted in Location", 
              desc: "We don't just build houses; we curate living experiences that respect and enhance the unique character of the Central Belt's most desirable locations." 
            }
          ].map((item, i) => (
            <Reveal key={i}>
              <div className="group">
                <h4 className="text-2xl font-serif text-torridon-green mb-4 flex items-center gap-4">
                  <span className="text-torridon-gold/30 font-sans text-sm italic">0{i+1}</span>
                  {item.title}
                </h4>
                <p className="text-torridon-green/60 font-sans leading-relaxed pl-8 border-l border-torridon-gold/10 group-hover:border-torridon-gold transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 
  02. SPECIFICATION 
*/
export const Specification = () => {
  const specs = [
    { title: "Architectural Integrity", desc: "Designed by award-winning practices to blend heritage with modernism.", icon: <Trees size={24} /> },
    { title: "Sustainable Innovation", desc: "Air-source heat pumps and solar integration as standard in every home.", icon: <TrendingUp size={24} /> },
    { title: "Bespoke Joinery", desc: "Hand-finished timber elements crafted by local master artisans.", icon: <Layers size={24} /> },
    { title: "Smart Integration", desc: "Discrete, future-proofed home automation for seamless living.", icon: <Shield size={24} /> }
  ];

  return (
    <section className="py-32 bg-torridon-cream border-y border-torridon-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-24">
            <span className="text-torridon-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">The Build Quality</span>
            <h2 className="text-4xl md:text-5xl font-serif text-torridon-green mb-6 italic">A Curated Specification.</h2>
            <p className="text-torridon-green/60 max-w-xl font-sans">Excellence is not an option; it is our foundation. We source the finest materials to ensure every Torridon home stands the test of time.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {specs.map((spec, i) => (
            <Reveal key={i}>
              <div className="group text-center">
                <div className="w-20 h-20 mx-auto mb-8 border border-torridon-gold/20 flex items-center justify-center text-torridon-gold group-hover:bg-torridon-green group-hover:text-white transition-all duration-700 transform group-hover:rotate-[360deg]">
                  {spec.icon}
                </div>
                <h4 className="text-xl font-serif text-torridon-green mb-4">{spec.title}</h4>
                <p className="text-sm text-torridon-green/60 leading-relaxed font-sans">{spec.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 
  03. REGIONAL EXPERTISE 
*/
export const RegionalExpertise = () => {
  return (
    <section className="py-32 bg-torridon-green relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
              <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block">Regional Expertise</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 italic">Central Belt Specialists.</h2>
              <p className="text-white/60 text-lg font-sans mb-10 leading-relaxed max-w-md">
                Our deep understanding of local planning frameworks and environmental dynamics across Central Scotland gives us an unmatched edge.
              </p>
              
              <div className="space-y-4">
                {[
                  { region: "Edinburgh & The Lothians", detail: "Navigating high-value urban infill and conservation areas." },
                  { region: "Stirling & Forth Valley", detail: "Expertise in semi-rural boutique developments." },
                  { region: "The Coastal Belt", detail: "Sustainable, weather-resilient coastal architecture." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 hover:border-torridon-gold/30 transition-colors">
                    <div className="text-torridon-gold mt-1"><MapPin size={18} /></div>
                    <div>
                      <h4 className="text-white font-serif text-lg">{item.region}</h4>
                      <p className="text-white/40 text-sm font-sans">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1548141313-79d264f3317c?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60 hover:scale-110 transition-transform duration-1000" alt="Scotland" />
              </div>
              <div className="h-48 overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60 hover:scale-110 transition-transform duration-1000" alt="Scotland" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="h-48 overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1552526483-3765f0285223?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60 hover:scale-110 transition-transform duration-1000" alt="Scotland" />
              </div>
              <div className="h-64 overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1510620389141-ce393d258661?q=80&w=1932&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60 hover:scale-110 transition-transform duration-1000" alt="Scotland" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* 
  04. INTERACTIVE MAP 
*/
export const InteractiveMap = () => {
  const locations = [
    { name: "Edinburgh", x: "70%", y: "55%", status: "Active" },
    { name: "Stirling", x: "40%", y: "35%", status: "Active" },
    { name: "Dunbar", x: "90%", y: "60%", status: "Upcoming" },
    { name: "Linlithgow", x: "55%", y: "45%", status: "Planning" }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden border-b border-torridon-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block">Strategic Focus</span>
            <h2 className="text-4xl md:text-5xl font-serif text-torridon-green mb-8 leading-tight italic">Dominating the Central Belt.</h2>
            <p className="text-torridon-green/60 text-lg font-sans mb-10 leading-relaxed">
              Our operations are geographically focused to ensure rapid response times, local supply chain integration, and deep knowledge of regional nuances.
            </p>
            <div className="space-y-6">
              {['Edinburgh & Lothians', 'Greater Stirling', 'Coastal East Lothian'].map((area, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-torridon-gold group-hover:scale-150 transition-transform duration-500" />
                  <span className="text-torridon-green font-serif text-xl">{area}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="relative h-[400px] md:h-[600px] bg-torridon-cream/50 rounded-sm overflow-hidden border border-torridon-gold/10 p-12">
            <svg viewBox="0 0 800 600" className="w-full h-full opacity-20">
              <path d="M100,200 Q200,100 400,150 T700,100" fill="none" stroke="#c5a059" strokeWidth="2" />
              <path d="M150,300 Q300,200 500,250 T750,200" fill="none" stroke="#c5a059" strokeWidth="1" />
            </svg>
            <div className="absolute inset-0">
              {locations.map((loc, i) => (
                <motion.div key={i} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 0.8 }} className="absolute cursor-pointer group" style={{ left: loc.x, top: loc.y }}>
                  <div className="relative">
                    <div className="w-4 h-4 bg-torridon-green rounded-full shadow-lg group-hover:scale-150 transition-transform duration-300" />
                    <div className="absolute top-0 left-0 w-4 h-4 bg-torridon-gold rounded-full animate-ping opacity-75" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-torridon-green text-white text-[10px] uppercase tracking-widest px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {loc.name} — <span className="text-torridon-gold">{loc.status}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* 
  05. LAND ACQUISITION 
*/
export const LandAcquisition = () => {
  return (
    <section id="land" className="py-32 bg-torridon-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <Reveal>
          <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block">Opportunity</span>
          <h2 className="text-4xl md:text-6xl font-serif text-torridon-green mb-8 leading-tight">Unlock the True <br /><span className="italic text-torridon-gold">Value of Your Land.</span></h2>
          <p className="text-torridon-green/70 text-lg font-sans mb-10 leading-relaxed max-w-xl">
            We are actively seeking land opportunities. Whether urban infill, garden plots, or brownfield, we offer a transparent appraisal process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-torridon-green text-torridon-gold flex items-center justify-center"><MapPin size={24} /></div>
              <div><h4 className="font-serif text-torridon-green text-lg italic">Strategic Bias</h4><p className="text-xs text-torridon-green/60">Focused on high-value Central Belt areas.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-torridon-green text-torridon-gold flex items-center justify-center"><Home size={24} /></div>
              <div><h4 className="font-serif text-torridon-green text-lg italic">Boutique Scale</h4><p className="text-xs text-torridon-green/60">Maximum value from <12 dwelling sites.</p></div>
            </div>
          </div>
          <a href="#contact" className="inline-block px-12 py-6 bg-torridon-green text-white font-sans uppercase tracking-widest text-xs font-bold hover:bg-torridon-gold transition-all duration-500 shadow-2xl">Submit Land Appraisal</a>
        </Reveal>
        <div className="relative h-[500px] md:h-[700px] overflow-hidden rounded-sm shadow-2xl">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop" className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3s]" alt="Scotland" />
          <div className="absolute bottom-8 left-8 bg-torridon-green p-10 text-white max-w-xs shadow-2xl">
            <p className="text-sm italic font-serif leading-relaxed">"Our mission is to respect the heritage of the land while building for the future."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* 
  06. LANDOWNER JOURNEY 
*/
export const LandJourney = () => {
  const steps = [
    { step: "01", title: "Confidential Appraisal", desc: "Discrete assessment of your land's potential." },
    { step: "02", title: "Strategic Planning", desc: "Expert team navigates local planning nuances." },
    { step: "03", title: "Acquisition", desc: "Transparent terms and efficient legal processes." }
  ];
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-24">
        <div>
          <Reveal>
            <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block">The Process</span>
            <h2 className="text-4xl font-serif text-torridon-green mb-8 italic leading-tight">Your Land’s <br />Next Chapter.</h2>
            <p className="text-torridon-green/60 font-sans mb-10 text-sm">Partnerships built on transparency. Protecting your interests while unlocking value.</p>
            <a href="#contact" className="text-torridon-gold uppercase tracking-[0.2em] text-[10px] font-bold flex items-center gap-4 group">Download Landowner Guide <div className="w-8 h-[1px] bg-torridon-gold group-hover:w-16 transition-all duration-500" /></a>
          </Reveal>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 lg:pt-0">
          {steps.map((item, i) => (
            <Reveal key={i}><div className="relative pt-12 border-t border-torridon-gold/10"><span className="absolute top-4 left-0 text-4xl font-serif text-torridon-gold/20">{item.step}</span><h4 className="text-xl font-serif text-torridon-green mb-4">{item.title}</h4><p className="text-xs text-torridon-green/60 leading-relaxed font-sans">{item.desc}</p></div></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 
  07. DIRECTOR VISION 
*/
export const Director = () => {
  return (
    <section className="py-32 bg-torridon-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative group order-2 lg:order-1">
          <div className="absolute -inset-6 border border-torridon-gold/10 translate-x-4 translate-y-4 group-hover:translate-x-2 transition-transform duration-700" />
          <div className="relative z-10 aspect-[4/5] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale transition-all duration-1000 scale-105 group-hover:scale-100" alt="Director" />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-torridon-green p-10 text-white hidden md:block max-w-xs shadow-2xl">
            <span className="text-torridon-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block tracking-widest">Leadership</span>
            <p className="font-serif text-lg italic">"We don't just build houses; we curate the backdrop for Scottish life."</p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block">Director’s Letter</span>
            <h2 className="text-4xl md:text-6xl font-serif text-torridon-green mb-8 italic leading-tight">Architectural Ambition.</h2>
            <div className="space-y-6 text-torridon-green/70 font-sans leading-relaxed text-lg">
              <p>Torridon Homes was founded on a simple principle: that small-scale developments deserve large-scale architectural ambition.</p>
              <p>Having spent decades in the Scottish Central Belt, I recognized a gap for a developer who prioritizes quality over volume.</p>
            </div>
            <div className="mt-12 pt-8 border-t border-torridon-gold/20 flex items-center gap-6">
              <div><div className="text-xl font-serif text-torridon-green italic">Iain Martin</div><div className="text-[10px] uppercase tracking-widest text-torridon-gold font-bold">Managing Director</div></div>
              <div className="h-10 w-[1px] bg-torridon-gold/30" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Signature_of_John_Hancock.svg" className="h-12 opacity-40 grayscale" alt="Signature" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* 
  08. JOINT VENTURES 
*/
export const JointVentures = () => {
  return (
    <section id="jv" className="py-32 bg-torridon-green text-torridon-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] grayscale bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <Reveal>
          <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block tracking-widest font-bold">Partnership</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight italic">Strategic Investment.</h2>
          <p className="text-white/60 text-lg font-sans mb-16 max-w-2xl mx-auto leading-relaxed">Partnering with professional investors to deliver boutique housing. Agile, high-quality, and high-return.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-20">
            {[ { icon: TrendingUp, title: 'Market Expertise', desc: 'Deep Central Scotland dynamics.' }, { icon: Shield, title: 'Risk Management', desc: 'Conservative, effective strategies.' }, { icon: Users, title: 'Collaborative Vision', desc: 'Aligned goals in every project.' } ].map((item, i) => (
              <div key={i} className="p-10 border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-torridon-gold transition-colors">
                <item.icon className="text-torridon-gold mb-6" size={32} /><h4 className="text-xl font-serif text-white italic mb-4">{item.title}</h4><p className="text-sm text-white/40 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
          <a href="#contact" className="inline-block px-12 py-6 border border-torridon-gold text-torridon-gold font-sans uppercase tracking-widest text-xs font-bold hover:bg-torridon-gold hover:text-torridon-green transition-all duration-500">Inquire About Joint Ventures</a>
        </Reveal>
      </div>
    </section>
  );
};

/* 
  09. PRIORITY INVESTOR CIRCLE 
*/
export const PriorityInvestor = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <div className="inline-block p-4 rounded-full border border-torridon-gold/20 mb-8"><Users className="text-torridon-gold" size={24} /></div>
          <h2 className="text-4xl md:text-6xl font-serif text-torridon-green mb-8 italic">Priority Investor Circle.</h2>
          <p className="text-torridon-green/60 text-lg font-sans mb-12 max-w-2xl mx-auto">Early access to financial projections and pre-launch opportunities.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input type="email" placeholder="Professional Email" className="w-full sm:w-80 p-6 bg-torridon-cream border-none outline-none font-sans text-sm focus:ring-1 ring-torridon-gold/50" />
            <button className="w-full sm:w-auto px-12 py-6 bg-torridon-green text-white font-sans uppercase tracking-widest text-xs font-bold hover:bg-torridon-gold transition-all shadow-2xl">Request Invitation</button>
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-widest text-torridon-green/30 font-sans font-bold">Strictly Confidential • Boutique Opportunities</p>
        </Reveal>
      </div>
    </section>
  );
};

/* 
  10. INSIGHTS (JOURNAL) 
*/
export const Insights = () => {
  const posts = [
    { date: "2026", title: "Boutique Living Trends", category: "Market", img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop" },
    { date: "2025", title: "Sustainable Architecture", category: "Innovation", img: "https://images.unsplash.com/photo-1518005020251-58296d8e87d4?q=80&w=2070&auto=format&fit=crop" },
    { date: "2025", title: "Unlocking Land Value", category: "Strategy", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop" }
  ];
  return (
    <section className="py-32 bg-torridon-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <Reveal><span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block font-bold">Journal</span><h2 className="text-4xl md:text-5xl font-serif text-torridon-green italic leading-tight">Torridon Insights.</h2></Reveal>
        <Reveal><button className="text-torridon-gold uppercase tracking-[0.2em] text-[10px] font-bold pb-2 border-b border-torridon-gold/30">View All Articles</button></Reveal>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {posts.map((post, i) => (
          <Reveal key={i}><div className="group cursor-pointer"><div className="aspect-[16/11] overflow-hidden mb-6 relative rounded-sm shadow-xl"><img src={post.img} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt="Blog" /><div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[9px] uppercase tracking-widest font-bold text-torridon-green">{post.category}</div></div><div className="text-[10px] uppercase tracking-widest text-torridon-gold font-sans mb-2">{post.date}</div><h4 className="text-xl font-serif text-torridon-green group-hover:text-torridon-gold transition-colors duration-300 italic">{post.title}</h4></div></Reveal>
        ))}
      </div>
    </section>
  );
};

/* 
  11. IMMERSIVE GALLERY 
*/
export const ImmersiveGallery = () => {
  const images = [ { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop", size: "col-span-2 row-span-2", title: "Light & Space" }, { url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop", size: "col-span-1 row-span-1", title: "Material Detail" }, { url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop", size: "col-span-1 row-span-2", title: "Modern Heritage" }, { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", size: "col-span-1 row-span-1", title: "Scottish Edge" } ];
  return (
    <section className="py-32 bg-white"><div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">{images.map((img, i) => (
      <Reveal key={i} className={img.size}><div className="group relative w-full h-full overflow-hidden rounded-sm shadow-2xl"><img src={img.url} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="Gallery" /><div className="absolute inset-0 bg-torridon-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" /><div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0"><span className="text-[10px] uppercase tracking-widest font-bold border-b border-white/40 pb-1">{img.title}</span></div></div></Reveal>
    ))}</div></section>
  );
};

/* 
  12. DEVELOPMENTS (HORIZONTAL SCROLL + SPOTLIGHT MODAL) 
*/
export const Developments = () => {
  const targetRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const projects = [
    { 
      id: 1,
      location: 'Overton, Edinburgh', 
      name: 'The Capital View', 
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', 
      tag: 'Coming Soon',
      overview: 'Overlooking the Edinburgh skyline, this development focuses on oversized glazing and expansive terraces.',
      specs: ['Penthouse Level Available', 'Underground Secure Parking', 'Private Landscaped Gardens']
    },
    { 
      id: 2,
      location: 'Spott, Dunbar', 
      name: 'Coastal Collection', 
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop', 
      tag: 'Coming Soon',
      overview: 'Six detached villas designed with passive heating principles, overlooking the North Sea.',
      specs: ['A-Rated Efficiency', 'Native Stone Cladding', 'EV Charging Standard']
    },
    { 
      id: 3,
      location: 'Stirling District', 
      name: 'Ochil Collection', 
      img: 'https://images.unsplash.com/photo-1600607687940-4e2003e25d27?q=80&w=2070&auto=format&fit=crop', 
      tag: 'In Planning',
      overview: 'Exclusive gated community in the shadow of the Ochil Hills.',
      specs: ['Gated Entrance', 'Bespoke Designer Kitchens', 'Rural Scenic Views']
    },
    { 
      id: 4,
      location: 'West Lothian', 
      name: 'Linlithgow Mews', 
      img: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop', 
      tag: 'Upcoming',
      overview: 'Urban refinement meets historic Linlithgow. Four contemporary townhouses around a private courtyard.',
      specs: ['Central Historic Location', 'Timber-Frame Precision', 'Discrete Mews Setting']
    }
  ];

  return (
    <section id="developments" ref={targetRef} className="relative h-[300vh] bg-torridon-green">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-20 left-6 md:left-12 z-20">
          <span className="text-torridon-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Portfolio</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-tight">Future <br />Developments.</h2>
        </div>
        
        <motion.div style={{ x }} className="flex gap-12 pl-[30vw] md:pl-[40vw]">
          {projects.map((item, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedProject(item)}
              className="group relative flex-shrink-0 w-[80vw] md:w-[45vw] aspect-[16/10] bg-torridon-cream overflow-hidden shadow-2xl rounded-sm cursor-pointer"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-80" style={{ backgroundImage: `url('${item.img}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-torridon-green/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full text-white">
                <span className="text-torridon-gold text-[10px] uppercase tracking-[0.3em] font-sans mb-3 block">{item.location}</span>
                <h3 className="text-3xl md:text-5xl font-serif mb-4 italic">{item.name}</h3>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-torridon-gold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span>Explore Development</span>
                  <div className="w-12 h-[1px] bg-torridon-gold" />
                </div>
              </div>
              
              <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 text-[10px] uppercase font-bold tracking-[0.2em]">
                {item.tag}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-torridon-green/95 backdrop-blur-xl p-6 md:p-20 flex items-center justify-center"
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-10 right-10 text-white hover:text-torridon-gold transition-colors"><X size={40} /></button>
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
              <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="relative aspect-square overflow-hidden rounded-sm shadow-2xl">
                <img src={selectedProject.img} className="w-full h-full object-cover" alt="Project" />
              </motion.div>
              <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-col justify-center">
                <span className="text-torridon-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">{selectedProject.location}</span>
                <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 italic">{selectedProject.name}</h2>
                <p className="text-white/60 text-lg font-sans mb-12 leading-relaxed italic">{selectedProject.overview}</p>
                <div className="space-y-6 mb-12">
                  <h4 className="text-white text-xs uppercase tracking-widest font-bold pb-4 border-b border-white/10">Project Highlights</h4>
                  <ul className="space-y-4">
                    {selectedProject.specs.map((s: any, i: number) => (
                      <li key={i} className="flex items-center gap-4 text-white/80 text-sm italic"><div className="w-1 h-1 bg-torridon-gold rounded-full" />{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-6">
                  <button className="px-10 py-5 bg-torridon-gold text-torridon-green uppercase tracking-widest text-[10px] font-bold hover:bg-white transition-all">Request Full Brochure</button>
                  <button className="px-10 py-5 border border-white/20 text-white uppercase tracking-widest text-[10px] font-bold hover:bg-white hover:text-torridon-green transition-all">Investment Data</button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* 
  13. COLLABORATIONS 
*/
export const Collaborations = () => (
  <section className="py-24 bg-white border-y border-torridon-gold/10">
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16"><Reveal><span className="text-torridon-gold uppercase tracking-[0.3em] text-[9px] font-bold mb-4 block">The Network</span><h3 className="text-2xl font-serif text-torridon-green italic">Working with Scotland’s Finest.</h3></Reveal></div>
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">{['Architects', 'Planners', 'Artisans', 'Engineers', 'Landscapers'].map((p, i) => <Reveal key={i}><span className="text-xl md:text-2xl font-serif text-torridon-green tracking-tighter hover:text-torridon-gold transition-colors italic">[ {p} ]</span></Reveal>)}</div>
  </section>
);

/* 
  14. FAQS 
*/
export const FAQs = () => {
  const faqs = [ { q: "Development timeframe?", a: "Typically 18-24 months for our boutique projects." }, { q: "Evaluation process?", a: "Feasibility studies including market demand and planning constraints." }, { q: "Investment models?", a: "Bespoke Joint Ventures and fixed-return funding." }, { q: "Why <12 dwellings?", a: "To maintain the 'Torridon Standard' of bespoke architectural finish." } ];
  return (
    <section className="py-32 bg-white"><div className="max-w-4xl mx-auto px-6"><Reveal><div className="text-center mb-20"><h2 className="text-4xl font-serif text-torridon-green mb-6 italic">Common Enquiries.</h2><div className="w-12 h-[1px] bg-torridon-gold mx-auto" /></div></Reveal><div className="space-y-12">{faqs.map((f, i) => (
      <Reveal key={i}><div className="group"><h4 className="text-xl font-serif text-torridon-green mb-4 flex items-start gap-6"><span className="text-torridon-gold font-sans text-xs pt-1">0{i+1}</span>{f.q}</h4><p className="text-sm text-torridon-green/60 font-sans leading-relaxed pl-12 border-l border-torridon-gold/5 group-hover:border-torridon-gold transition-colors">{f.a}</p></div></Reveal>
    ))}</div></div></section>
  );
};

/* 
  15. NEWSLETTER 
*/
export const Newsletter = () => (
  <section className="py-32 bg-white text-center relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-torridon-gold/20 to-transparent" /><Reveal><span className="text-torridon-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Stay Connected</span><h2 className="text-4xl md:text-5xl font-serif text-torridon-green mb-8 italic">The Torridon Journal.</h2><p className="text-torridon-green/60 font-sans mb-12 max-w-lg mx-auto text-sm px-6">Receive curated property insights and exclusive partnership opportunities.</p><div className="flex flex-col sm:flex-row gap-4 justify-center px-6 max-w-2xl mx-auto"><input type="email" placeholder="Email Address" className="px-8 py-6 bg-torridon-cream border-none text-torridon-green outline-none focus:ring-1 ring-torridon-gold/30 font-sans text-sm w-full sm:flex-1" /><button className="px-12 py-6 bg-torridon-green text-white uppercase tracking-widest text-xs font-bold hover:bg-torridon-gold transition-all shadow-2xl">Subscribe</button></div></Reveal></section>
);

/* 
  16. SUSTAINABILITY 
*/
export const Sustainability = () => (
  <section className="py-32 bg-torridon-cream relative overflow-hidden"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-torridon-gold/5 rounded-full blur-3xl pointer-events-none" /><div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center"><Reveal><span className="text-torridon-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">The Future</span><h2 className="text-4xl md:text-6xl font-serif text-torridon-green mb-8 italic text-torridon-gold">The Green Standard.</h2><p className="text-torridon-green/60 max-w-2xl mx-auto font-sans text-lg mb-20 leading-relaxed">Luxury and sustainability are not mutually exclusive.</p></Reveal><div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">{[ { title: "Passive Design", desc: "Optimizing light and thermal mass.", icon: <Trees className="text-torridon-gold mb-6" size={32} /> }, { title: "Renewables", desc: "Heat pumps and solar as standard.", icon: <TrendingUp className="text-torridon-gold mb-6" size={32} /> }, { title: "Local Sourcing", desc: "Prioritizing Scottish materials.", icon: <MapPin className="text-torridon-gold mb-6" size={32} /> } ].map((item, i) => (
    <Reveal key={i}><div className="p-10 bg-white border-t-2 border-transparent hover:border-torridon-gold transition-all shadow-xl shadow-torridon-green/5">{item.icon}<h4 className="text-xl font-serif text-torridon-green mb-4 italic">{item.title}</h4><p className="text-sm text-torridon-green/60 font-sans">{item.desc}</p></div></Reveal>
  ))}</div></div></section>
);

/* 
  17. STRATEGIC LOCATIONS 
*/
export const StrategicLocations = () => (
  <section className="py-24 bg-torridon-green text-white"><div className="max-w-7xl mx-auto px-6 md:px-12"><div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8"><Reveal><h2 className="text-3xl md:text-5xl font-serif italic">Strategic Locations.</h2></Reveal><Reveal><p className="text-white/50 max-w-sm font-sans text-sm">Targeting prime sites across the most sought-after pockets of the Central Belt.</p></Reveal></div><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{['Edinburgh', 'Stirling', 'Linlithgow', 'East Lothian', 'Dunbar', 'Falkirk', 'Livingston', 'Perthshire Border'].map((loc, i) => (
    <Reveal key={i}><div className="group border-b border-white/10 pb-4 hover:border-torridon-gold transition-colors"><div className="text-torridon-gold/20 text-[10px] font-sans mb-2">0{i+1}</div><div className="text-xl font-serif italic">{loc}</div></div></Reveal>
  ))}</div></div></section>
);

/* 
  19. CRAFTSMAN DETAIL 
*/
export const CraftsmanDetail = () => {
  const textures = [ { title: "Honest Stone", desc: "Sourced from Scottish quarries.", img: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=2068&auto=format&fit=crop" }, { title: "Oak & Grain", desc: "Hand-finished timber elements.", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop" }, { title: "Brushed Metal", desc: "Discrete luxury accents.", img: "https://images.unsplash.com/photo-1558442086-841974765140?q=80&w=2013&auto=format&fit=crop" } ];
  return (
    <section className="py-32 bg-white"><div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">{textures.map((t, i) => (
      <Reveal key={i}><div className="group"><div className="aspect-square overflow-hidden mb-8 rounded-full border border-torridon-gold/10 p-2 group-hover:border-torridon-gold transition-all duration-700"><img src={t.img} className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100" alt={t.title} /></div><h4 className="text-2xl font-serif text-torridon-green text-center mb-4 italic">{t.title}</h4><p className="text-center text-sm text-torridon-green/60 font-sans leading-relaxed max-w-xs mx-auto">{t.desc}</p></div></Reveal>
    ))}</div></section>
  );
};

/* 
  20. SUBTLE STATS (ANIMATED)
*/
export const SubtleStats = () => {
  const stats = [
    { label: "Boutique Focus", value: 100, suffix: "%", detail: "Exclusively <12 Unit Sites" },
    { label: "Strategic Area", value: 1, suffix: "st", detail: "Central Belt Primary" },
    { label: "Project Yield", value: 92, suffix: "%", detail: "Precision-Engineered Returns" },
    { label: "Design Ethos", value: 12, suffix: "/12", detail: "Architect-Led Architecture" }
  ];

  return (
    <section className="py-32 bg-torridon-green text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
          {stats.map((s, i) => (
            <Reveal key={i}>
              <div className="text-center md:text-left group">
                <div className="text-torridon-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{s.label}</div>
                <div className="text-5xl md:text-7xl font-serif mb-4 italic flex items-baseline justify-center md:justify-start">
                  <Counter value={s.value} />
                  <span className="text-3xl text-torridon-gold ml-1">{s.suffix}</span>
                </div>
                <div className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-sans font-bold">{s.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      let startTime: number | null = null;

      const animate = (now: number) => {
        if (!startTime) startTime = now;
        const progress = now - startTime;
        const current = Math.min(Math.floor((progress / duration) * end), end);
        setCount(current);
        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={nodeRef}>{count}</span>;
};

import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

/* 
  22. TRAJECTORY (TIMELINE)
*/
export const Trajectory = () => {
  const events = [
    { year: "2022", title: "The Vision", desc: "Torridon Homes founded with a commitment to architectural integrity over volume." },
    { year: "2023", title: "Strategic Acquisition", desc: "Securing prime urban infill sites across the Lothians and Forth Valley." },
    { year: "2024", title: "The Boutique Model", desc: "Formalizing the <12 dwelling specialization to ensure unmatched quality control." },
    { year: "2025", title: "Current Expansion", desc: "Launching The Capital View and Coastal Collection to the Scottish market." },
    { year: "2030", title: "The Vision 2030", desc: "Setting the definitive standard for boutique, sustainable living in Scotland." }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="trajectory" ref={containerRef} className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-32">
          <Reveal>
            <span className="text-torridon-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">The Legacy</span>
            <h2 className="text-5xl md:text-7xl font-serif text-torridon-green italic">Trajectory of <br />Excellence.</h2>
          </Reveal>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 w-[1px] h-full bg-torridon-gold/10 -translate-x-1/2 hidden md:block" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 md:left-1/2 top-0 w-[1px] h-full bg-torridon-gold -translate-x-1/2 hidden md:block"
          />

          <div className="space-y-32">
            {events.map((e, i) => (
              <Reveal key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Desktop Year Marker */}
                <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 bg-white border-2 border-torridon-gold rounded-full z-10 hidden md:block" />
                
                <div className="w-full md:w-1/2 px-0 md:px-20 text-left md:text-right">
                  <div className={`md:text-right ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-4xl md:text-6xl font-serif text-torridon-gold/20 mb-4 block italic">{e.year}</span>
                    <h4 className="text-2xl font-serif text-torridon-green mb-4 italic">{e.title}</h4>
                    <p className="text-sm text-torridon-green/60 font-sans leading-relaxed max-w-sm ml-0 md:ml-auto mr-0 md:mr-auto">
                      {e.desc}
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* 
  23. ATMOSPHERIC SEPARATOR (SCOTTISH MIST)
*/
export const AtmosphericSeparator = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-torridon-green">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover grayscale opacity-40 scale-110" 
          alt="Atmospheric Scotland"
        />
      </div>
      
      {/* Moving Mist Overlay */}
      <motion.div 
        animate={{ 
          x: [-100, 100],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 z-10 bg-[url('https://www.transparenttextures.com/patterns/fog.png')] opacity-20 pointer-events-none"
      />

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <Reveal>
          <div className="text-center px-6">
            <h2 className="text-white text-4xl md:text-6xl font-serif italic mb-8 drop-shadow-2xl">
              Rooted in the <span className="text-torridon-gold">landscape.</span>
            </h2>
            <div className="w-24 h-[1px] bg-torridon-gold mx-auto" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* 
  24. INVESTOR VAULT PREVIEW
*/
export const VaultPreview = () => {
  return (
    <section className="py-40 bg-torridon-green relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-torridon-gold" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-torridon-gold" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <Reveal>
            <span className="text-torridon-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block tracking-widest">Exclusive Access</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 italic">The Private <br />Investor Vault.</h2>
            <p className="text-white/60 text-lg font-sans mb-12 leading-relaxed max-w-md italic italic">Gain access to our comprehensive development pipeline and project-specific modelling.</p>
            <div className="flex gap-8 items-center">
              <div className="flex flex-col"><span className="text-white text-3xl font-serif">£42M+</span><span className="text-torridon-gold text-[10px] uppercase tracking-widest font-bold">Active GDV</span></div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div className="flex flex-col"><span className="text-white text-3xl font-serif">18.4%</span><span className="text-torridon-gold text-[10px] uppercase tracking-widest font-bold">Avg. Project Yield</span></div>
            </div>
          </Reveal>
          <Reveal className="relative group cursor-none">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 bg-torridon-gold text-torridon-green text-[8px] font-bold uppercase tracking-widest tracking-widest">Secure Environment</div>
              <div className="space-y-8 blur-[6px] opacity-40 select-none pointer-events-none">
                <div className="h-4 w-1/3 bg-white/20 rounded-full" /><div className="grid grid-cols-3 gap-4"><div className="h-20 bg-white/10" /><div className="h-20 bg-white/10" /><div className="h-20 bg-white/10" /></div><div className="h-32 bg-white/10" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-torridon-gold flex items-center justify-center mb-6 shadow-2xl shadow-torridon-gold/20"><Shield className="text-torridon-green" size={28} /></div>
                <h4 className="text-white font-serif text-2xl mb-4 italic italic">Unlock Financial Data</h4>
                <p className="text-white/60 text-[10px] font-sans mb-10 max-w-xs mx-auto uppercase tracking-widest leading-loose font-bold tracking-widest">Requires authorized partner credentials or verified NDAs.</p>
                <button className="px-10 py-5 bg-white text-torridon-green uppercase tracking-widest text-[10px] font-bold hover:bg-torridon-gold transition-all duration-500 shadow-2xl shadow-2xl shadow-torridon-green/20">Request Access</button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
