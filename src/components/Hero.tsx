'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Magnetic from './Magnetic';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-torridon-green">
      {/* Background Image Placeholder / Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 4, ease: "easeOut", delay: 2.5 }}
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" 
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-torridon-green/60 via-transparent to-torridon-green/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 3 }} // Delay for preloader
        >
          <span className="text-torridon-gold uppercase tracking-[0.4em] text-xs md:text-sm font-sans mb-6 block">
            Boutique Scottish Developer
          </span>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] tracking-tight">
            Crafting Exclusive <br className="hidden md:block" />
            <span className="italic">Living Spaces.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-12 leading-relaxed">
            Specializing in high-end developments of under 12 dwellings in Scotland's Central Belt.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <Magnetic>
              <motion.a 
                href="#land"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-torridon-gold text-torridon-green font-sans uppercase tracking-widest text-xs font-bold transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Land Acquisition</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
              </motion.a>
            </Magnetic>

            <Magnetic>
              <motion.a 
                href="#jv"
                className="group relative inline-flex items-center justify-center px-10 py-5 border border-white text-white font-sans uppercase tracking-widest text-xs font-bold transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-torridon-green">Partner With Us</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
              </motion.a>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white/40 cursor-pointer hidden md:block"
        onClick={() => document.getElementById('land')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="uppercase tracking-widest text-[9px] mb-2">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
