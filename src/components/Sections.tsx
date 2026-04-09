'use client';

import { motion } from 'framer-motion';
export const Specification = () => {
  const specs = [
    { title: "Architectural Integrity", desc: "Designed by award-winning Scottish practices to blend heritage with modernism.", icon: <Trees size={20} /> },
    { title: "Sustainable Innovation", desc: "Air-source heat pumps and solar integration as standard in every home.", icon: <TrendingUp size={20} /> },
    { title: "Bespoke Joinery", desc: "Hand-finished timber elements crafted by local master artisans.", icon: <Layers size={20} /> },
    { title: "Smart Integration", desc: "Discrete, future-proofed home automation for seamless living.", icon: <Shield size={20} /> }
  ];

  return (
    <section className="py-32 bg-torridon-cream border-y border-torridon-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-torridon-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">The Standard</span>
            <h2 className="text-4xl md:text-5xl font-serif text-torridon-green mb-6">A Curated <span className="italic">Specification.</span></h2>
            <p className="text-torridon-green/60 max-w-xl font-sans">Excellence is not an option; it is our foundation. We source the finest materials to ensure every Torridon home stands the test of time.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {specs.map((spec, i) => (
            <Reveal key={i}>
              <div className="group text-center">
                <div className="w-16 h-16 mx-auto mb-8 border border-torridon-gold/20 flex items-center justify-center text-torridon-gold group-hover:bg-torridon-green group-hover:text-white transition-all duration-500 transform group-hover:rotate-[360deg]">
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

export const LandJourney = () => {
  const steps = [
    { step: "01", title: "Confidential Appraisal", desc: "We conduct a discrete, no-obligation assessment of your land's development potential." },
    { step: "02", title: "Strategic Planning", desc: "Our expert team navigates the complexities of local planning to maximize site value." },
    { step: "03", title: "Seamless Acquisition", desc: "Transparent terms and efficient legal processes to ensure a smooth transition of ownership." }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <Reveal>
              <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block">The Process</span>
              <h2 className="text-4xl md:text-5xl font-serif text-torridon-green mb-8 leading-tight">Your Land’s <br /><span className="italic">Next Chapter.</span></h2>
              <p className="text-torridon-green/60 font-sans mb-10">We believe in partnerships built on transparency. Our process is designed to protect your interests while unlocking incredible value.</p>
              <a href="#contact" className="text-torridon-gold uppercase tracking-[0.2em] text-[10px] font-bold flex items-center gap-4 group">
                Download Landowner Guide 
                <div className="w-8 h-[1px] bg-torridon-gold group-hover:w-16 transition-all duration-500" />
              </a>
            </Reveal>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((item, i) => (
              <Reveal key={i}>
                <div className="relative pt-12">
                  <span className="absolute top-0 left-0 text-6xl font-serif text-torridon-gold/10">{item.step}</span>
                  <h4 className="text-xl font-serif text-torridon-green mb-4 relative z-10">{item.title}</h4>
                  <p className="text-sm text-torridon-green/60 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Director = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-6 border border-torridon-gold/10 rounded-sm translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
            <div className="relative z-10 aspect-[4/5] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Director of Torridon Homes" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-torridon-green p-10 text-white hidden md:block max-w-xs shadow-2xl">
              <span className="text-torridon-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">The Visionary</span>
              <p className="font-serif text-lg italic leading-relaxed">
                "We don't just build houses; we curate the backdrop for Scottish life."
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block">Leadership</span>
              <h2 className="text-4xl md:text-6xl font-serif text-torridon-green mb-8 leading-tight">A Letter from <br /><span className="italic">The Director.</span></h2>
              <div className="space-y-6 text-torridon-green/70 font-sans leading-relaxed text-lg">
                <p>
                  Torridon Homes was founded on a simple, uncompromising principle: that small-scale developments deserve large-scale architectural ambition. 
                </p>
                <p>
                  Having spent decades navigating the unique landscape of the Scottish Central Belt, I recognized a gap for a developer who prioritizes quality over volume. By focusing on fewer than 12 dwellings per project, we ensure that every brick, every joint, and every finishing touch meets my personal standard of excellence.
                </p>
                <p>
                  Whether you are a landowner looking for a respectful legacy or an investor seeking precision-engineered returns, I invite you to join us in redefining boutique living in Scotland.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-torridon-gold/20 flex items-center gap-6">
                <div>
                  <div className="text-xl font-serif text-torridon-green">Iain Martin</div>
                  <div className="text-xs uppercase tracking-widest text-torridon-gold font-bold">Managing Director</div>
                </div>
                <div className="h-10 w-[1px] bg-torridon-gold/30" />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Signature_of_John_Hancock.svg" 
                  alt="Signature" 
                  className="h-12 opacity-40 grayscale contrast-125"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RegionalExpertise = () => {
  return (
    <section className="py-32 bg-torridon-green relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
              <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block">Our Advantage</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Central Belt <br /><span className="italic">Specialists.</span></h2>
              <p className="text-white/60 text-lg font-sans mb-10 leading-relaxed">
                Our deep understanding of local planning frameworks, environmental considerations, and community dynamics across Central Scotland gives us an unmatched edge.
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
              <Reveal><div className="h-64 bg-[url('https://images.unsplash.com/photo-1548141313-79d264f3317c?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-60" /></Reveal>
              <Reveal><div className="h-48 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-60" /></Reveal>
            </div>
            <div className="space-y-4 pt-12">
              <Reveal><div className="h-48 bg-[url('https://images.unsplash.com/photo-1552526483-3765f0285223?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-60" /></Reveal>
              <Reveal><div className="h-64 bg-[url('https://images.unsplash.com/photo-1510620389141-ce393d258661?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-60" /></Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Sustainability = () => {
  return (
    <section className="py-32 bg-torridon-cream relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-torridon-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <Reveal>
            <span className="text-torridon-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">The Future of Living</span>
            <h2 className="text-4xl md:text-6xl font-serif text-torridon-green mb-8 italic">The Green Standard.</h2>
            <p className="text-torridon-green/60 max-w-2xl mx-auto font-sans text-lg">
              We believe luxury and sustainability are not mutually exclusive. Our "Fabric First" approach ensures every home is as efficient as it is elegant.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Passive-Inspired Design", 
              desc: "Optimizing natural light and thermal mass to reduce energy reliance year-round.",
              icon: <Trees className="mb-6 text-torridon-gold" size={32} />
            },
            { 
              title: "Renewable Energy", 
              desc: "Integrated air-source heat pumps and solar arrays as a standard specification.",
              icon: <TrendingUp className="mb-6 text-torridon-gold" size={32} />
            },
            { 
              title: "Local Sourcing", 
              desc: "Prioritizing Scottish materials to reduce carbon miles and support local industry.",
              icon: <MapPin className="mb-6 text-torridon-gold" size={32} />
            }
          ].map((item, i) => (
            <Reveal key={i}>
              <div className="p-10 bg-white shadow-xl shadow-torridon-green/5 border-t-2 border-transparent hover:border-torridon-gold transition-all duration-500 group">
                {item.icon}
                <h4 className="text-xl font-serif text-torridon-green mb-4">{item.title}</h4>
                <p className="text-sm text-torridon-green/60 leading-relaxed font-sans">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Insights = () => {
  const posts = [
    {
      date: "Spring 2026",
      title: "The Rise of Boutique Living in the Central Belt",
      category: "Market Report",
      img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop"
    },
    {
      date: "Winter 2025",
      title: "Sustainable Architecture: More Than Just a Trend",
      category: "Innovation",
      img: "https://images.unsplash.com/photo-1518005020251-58296d8e87d4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      date: "Autumn 2025",
      title: "Unlocking Land Value: A Guide for Scottish Landowners",
      category: "Land Strategy",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <Reveal>
            <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block">Journal</span>
            <h2 className="text-4xl md:text-5xl font-serif text-torridon-green leading-tight">Torridon <span className="italic">Insights.</span></h2>
          </Reveal>
          <Reveal>
            <button className="text-torridon-gold uppercase tracking-[0.2em] text-[10px] font-bold pb-2 border-b border-torridon-gold/30 hover:border-torridon-gold transition-colors">
              View All Articles
            </button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <Reveal key={i}>
              <div className="group cursor-none">
                <div className="aspect-[16/11] overflow-hidden mb-6 relative">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-widest font-bold text-torridon-green">
                    {post.category}
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-torridon-gold font-sans mb-2">{post.date}</div>
                <h4 className="text-xl font-serif text-torridon-green group-hover:text-torridon-gold transition-colors duration-300 leading-tight">
                  {post.title}
                </h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ImmersiveGallery = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop", size: "col-span-2 row-span-2", title: "Light & Space" },
    { url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop", size: "col-span-1 row-span-1", title: "Material Detail" },
    { url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop", size: "col-span-1 row-span-2", title: "Modern Heritage" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", size: "col-span-1 row-span-1", title: "The Scottish Edge" }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16">
            <span className="text-torridon-gold uppercase tracking-widest text-xs font-sans mb-4 block">Aesthetic</span>
            <h2 className="text-4xl md:text-5xl font-serif text-torridon-green leading-tight">The Art of <span className="italic">Boutique Living.</span></h2>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
          {images.map((img, i) => (
            <Reveal key={i} className={img.size}>
              <div className="group relative w-full h-full overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-torridon-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-[10px] uppercase tracking-widest font-bold border-b border-white/40 pb-1">{img.title}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Collaborations = () => {
  return (
    <section className="py-24 bg-torridon-cream border-y border-torridon-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-torridon-gold uppercase tracking-[0.3em] text-[9px] font-bold mb-4 block">The Network</span>
            <h3 className="text-2xl font-serif text-torridon-green">Working with Scotland’s <span className="italic">Finest.</span></h3>
          </div>
        </Reveal>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
          {['Architects', 'Planners', 'Artisans', 'Engineers', 'Landscapers'].map((partner, i) => (
            <Reveal key={i}>
              <span className="text-xl md:text-2xl font-serif text-torridon-green tracking-tighter hover:text-torridon-gold transition-colors duration-300">
                [ {partner} ]
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQs = () => {
  const faqs = [
    { q: "What is your typical development timeframe?", a: "From land acquisition to completion, our boutique projects typically span 18-24 months, ensuring rigorous attention to detail at every phase." },
    { q: "How do you evaluate land opportunities?", a: "We conduct a comprehensive feasibility study including local market demand, planning constraints, and environmental impact to ensure a fair and profitable appraisal." },
    { q: "What investment structures do you offer?", a: "We offer bespoke Joint Venture opportunities and fixed-return funding models, tailored to the specific requirements of our professional partners." },
    { q: "Why focus exclusively on under 12 dwellings?", a: "This scale allows us to maintain 'The Torridon Standard'—a level of architectural integrity and finish that is lost in larger, mass-market developments." }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-torridon-green mb-6 italic">Common Enquiries.</h2>
            <div className="w-12 h-[1px] bg-torridon-gold mx-auto" />
          </div>
        </Reveal>
        
        <div className="space-y-12">
          {faqs.map((faq, i) => (
            <Reveal key={i}>
              <div className="group">
                <h4 className="text-xl font-serif text-torridon-green mb-4 flex items-start gap-6">
                  <span className="text-torridon-gold font-sans text-xs pt-1">0{i+1}</span>
                  {faq.q}
                </h4>
                <p className="text-sm text-torridon-green/60 font-sans leading-relaxed pl-12 border-l border-torridon-gold/5 group-hover:border-torridon-gold transition-colors duration-500">
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

import { MapPin, Users, Home, TrendingUp, Shield, Trees, Layers } from 'lucide-react';

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

export const Philosophy = () => {
  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <Reveal>
            <span className="text-torridon-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-torridon-green mb-8 max-w-3xl mx-auto leading-tight">
              Building with <span className="italic">Purpose</span> and <span className="italic">Precision.</span>
            </h2>
            <div className="w-20 h-[1px] bg-torridon-gold mx-auto" />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-4 border border-torridon-gold/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Interior Detail" 
                className="relative z-10 w-full aspect-[4/5] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
          </Reveal>

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
      </div>
    </section>
  );
};
export const StrategicLocations = () => {
  return (
    <section className="py-24 bg-torridon-green text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif">Strategic <span className="italic">Locations.</span></h2>
          </Reveal>
          <Reveal>
            <p className="text-white/50 max-w-sm font-sans text-sm">Targeting prime sites across the most sought-after pockets of the Central Belt.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Edinburgh', 'Stirling', 'Linlithgow', 'East Lothian', 'Dunbar', 'Falkirk', 'Livingston', 'Perthshire Border'].map((loc, i) => (
            <Reveal key={i}>
              <div className="group cursor-none">
                <div className="text-torridon-gold/20 text-xs font-sans mb-2">0{i+1}</div>
                <div className="text-xl md:text-2xl font-serif border-b border-white/10 pb-4 group-hover:border-torridon-gold transition-colors duration-500">
                  {loc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PriorityInvestor = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-torridon-gold/30 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <div className="inline-block p-3 rounded-full border border-torridon-gold/20 mb-8">
            <Users className="text-torridon-gold" size={24} />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-torridon-green mb-8">Priority Investor <span className="italic">Circle.</span></h2>
          <p className="text-torridon-green/60 text-lg font-sans mb-12 max-w-2xl mx-auto">
            Gain early access to financial projections, land appraisal data, and exclusive partnership opportunities before they reach the wider market.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input 
              type="email" 
              placeholder="Your Professional Email" 
              className="w-full sm:w-80 p-5 bg-torridon-cream border-none outline-none font-sans text-sm focus:ring-1 ring-torridon-gold/50"
            />
            <button className="w-full sm:w-auto px-10 py-5 bg-torridon-green text-white font-sans uppercase tracking-widest text-xs font-bold hover:bg-torridon-gold hover:text-torridon-green transition-all shadow-xl shadow-torridon-green/10">
              Request Invitation
            </button>
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-widest text-torridon-green/30 font-sans">Strictly Confidential • Boutique Opportunities Only</p>
        </Reveal>
      </div>
    </section>
  );
};

export const Developments = () => {
...

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
              location: 'Overton, Edinburgh', 
              name: 'The Capital View', 
              units: '9 Luxury Apartments',
              img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
              tag: 'Coming Soon'
            },
            { 
              location: 'Spott, Dunbar', 
              name: 'The Coastal Collection', 
              units: '6 Eco-Conscious Homes',
              img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
              tag: 'Coming Soon'
            },
            { 
              location: 'Stirling District', 
              name: 'The Ochil Collection', 
              units: '8 Luxury Detached Villas',
              img: 'https://images.unsplash.com/photo-1600607687940-4e2003e25d27?q=80&w=2070&auto=format&fit=crop',
              tag: 'In Planning'
            },
            { 
              location: 'West Lothian', 
              name: 'Linlithgow Mews', 
              units: '4 High-End Townhouses',
              img: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop',
              tag: 'Coming Soon'
            }
          ].map((item, i) => (
            <Reveal key={i}>
              <div className="group relative overflow-hidden bg-torridon-green aspect-[16/10]">
                <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90`} style={{ backgroundImage: `url('${item.img}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-torridon-green via-torridon-green/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-torridon-gold text-[10px] uppercase tracking-[0.3em] font-sans mb-3 block">{item.location}</span>
                  <h3 className="text-3xl md:text-4xl font-serif mb-3 leading-tight">{item.name}</h3>
                  <div className="flex items-center gap-3 text-white/60 mb-8">
                    <Home size={16} />
                    <span className="text-sm font-sans tracking-wide uppercase text-[10px]">{item.units}</span>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-torridon-gold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <span>Register Early Access</span>
                    <div className="w-12 h-[1px] bg-torridon-gold origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200" />
                  </div>
                </div>
                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 text-[10px] uppercase font-bold tracking-[0.2em]">
                  {item.tag}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
