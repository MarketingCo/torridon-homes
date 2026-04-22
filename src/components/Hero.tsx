'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Magnetic from './Magnetic';

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section id="home" ref={container} className="relative h-[120vh] w-full flex items-center justify-center overflow-hidden bg-torridon-green">
      {/* Background Video/Image with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-torridon-green/40 z-10" />
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 4, ease: "easeOut", delay: 2.5 }}
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" 
        />
      </motion.div>

      {/* Cinematic Text Mask / Reveal */}
      <div className="relative z-20 text-center px-6 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          style={{ opacity }}
        >
          <span className="text-torridon-gold uppercase tracking-[0.6em] text-[10px] md:text-xs font-bold mb-8 block drop-shadow-2xl">
            Boutique Scottish Developer
          </span>
          
          <div className="relative mb-12">
            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mix-blend-difference">
              TORRIDON <br />
              <span className="italic text-torridon-gold drop-shadow-2xl">HOMES</span>
            </h1>
          </div>

          <p className="text-white/90 text-lg md:text-2xl font-sans max-w-2xl mx-auto mb-16 leading-relaxed italic font-light drop-shadow-lg">
            "Redefining the boutique standard across the Scottish Central Belt."
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <Magnetic>
              <motion.a 
                href="#land"
                className="group relative inline-flex items-center justify-center px-12 py-6 bg-torridon-gold text-torridon-green font-sans uppercase tracking-[0.2em] text-[10px] font-bold transition-all duration-500 overflow-hidden shadow-2xl"
              >
                <span className="relative z-10">Land Acquisition</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
              </motion.a>
            </Magnetic>

            <Magnetic>
              <motion.a 
                href="#jv"
                className="group relative inline-flex items-center justify-center px-12 py-6 border border-white/30 text-white font-sans uppercase tracking-[0.2em] text-[10px] font-bold transition-all duration-500 overflow-hidden backdrop-blur-sm shadow-2xl"
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
        transition={{ delay: 4.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 text-white/40 cursor-pointer hidden md:block"
        onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="uppercase tracking-[0.4em] text-[8px] mb-4 font-bold">Explore Vision</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-torridon-gold to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
