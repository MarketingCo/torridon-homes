
import { MapPin, ArrowLeft, ShieldCheck, Trophy, Crown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Location() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Torridon Homes - Dunblane",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "@id": "https://torridonhomes.co.uk/locations/dunblane",
    "url": "https://torridonhomes.co.uk/locations/dunblane",
    "telephone": "0131 000 0000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Central Belt Operations",
      "addressLocality": "Dunblane",
      "addressRegion": "Scotland",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 55.9533,
      "longitude": -3.1883
    },
    "areaServed": "Dunblane, Scotland"
  };

  return (
    <div className="bg-torridon-navy min-h-screen pt-32 pb-20 text-torridon-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mb-24 border-b border-torridon-gold/20">
        <Image 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Development in Dunblane"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-torridon-navy via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-torridon-gold hover:text-white mb-12 transition-colors text-xs uppercase tracking-[0.3em]">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
          <div className="flex items-center gap-3 text-torridon-gold/60 text-xs uppercase tracking-[0.4em] mb-8">
            <MapPin size={14} /> Regional Spotlight
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight mb-8">
            Luxury Development & <br /> <span className="italic text-torridon-gold">Restoration in Dunblane</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-sans max-w-3xl leading-relaxed">
            Torridon Homes is proud to bring our signature 'Elite' standard of construction and heritage restoration to the distinguished community of Dunblane.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-32">
          <div className="lg:col-span-7 space-y-12">
            <h2 className="text-4xl font-serif text-white leading-tight">
              An Unwavering Commitment <br /> to the Heritage of Dunblane
            </h2>
            <div className="font-sans text-white/70 text-lg leading-relaxed space-y-8">
              <p>
                In Dunblane, excellence is not merely expected—it is the baseline. Torridon Homes approaches every project in this historic enclave with a deep respect for local architectural vernacular, combined with the most advanced sustainable building practices available today.
              </p>
              <p>
                Whether it is the meticulous restoration of a heritage asset or the sensitive creation of a new-build luxury dwelling, our focus remains on projects under 12 units. This allows us to maintain a level of artisanal detail that larger developers simply cannot replicate in Dunblane.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
               <div>
                  <ShieldCheck className="text-torridon-gold mb-4" size={32} />
                  <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-2">Build Quality</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-tighter">Beyond NHBC Standards</p>
               </div>
               <div>
                  <Trophy className="text-torridon-gold mb-4" size={32} />
                  <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-2">Artisan Led</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-tighter">Local Master Craftsmen</p>
               </div>
               <div>
                  <Crown className="text-torridon-gold mb-4" size={32} />
                  <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-2">Elite Service</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-tighter">Bespoke Client Liaison</p>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-white/5 p-12 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-serif text-torridon-gold mb-8 tracking-tight">Project Enquiries: Dunblane</h3>
            <p className="text-sm text-white/60 mb-10 leading-relaxed font-sans">
              Our directors are currently reviewing land acquisition and restoration opportunities within the Dunblane area. 
            </p>
            <div className="space-y-6">
               <div className="p-6 bg-white/5 border border-white/5">
                  <p className="text-[10px] uppercase tracking-widest text-torridon-gold mb-2">Active Interest</p>
                  <p className="text-white text-sm">Residential plots for 1-12 dwellings.</p>
               </div>
               <div className="p-6 bg-white/5 border border-white/5">
                  <p className="text-[10px] uppercase tracking-widest text-torridon-gold mb-2">Restoration</p>
                  <p className="text-white text-sm">Listed buildings and heritage conversions.</p>
               </div>
            </div>
            <Link href="/#contact" className="w-full mt-12 bg-torridon-gold text-torridon-navy text-center py-5 text-xs font-bold uppercase tracking-[0.3em] inline-block hover:bg-white transition-all">
                Discuss a Project
            </Link>
          </div>
        </div>

        {/* Brand Ecosystem Link */}
        <div className="border-t border-white/10 pt-20 text-center">
           <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 mb-10 font-sans">Ecosystem of Trust</p>
           <div className="flex flex-wrap justify-center gap-16 opacity-30 hover:opacity-100 transition-opacity items-center">
              <span className="font-serif text-2xl text-white">TORRIDON <span className="text-torridon-gold">HOMES</span></span>
              <span className="font-black uppercase tracking-tighter text-2xl italic text-white">Balloon <span className="text-white/60">Creative</span></span>
           </div>
        </div>
      </section>
    </div>
  )
}
