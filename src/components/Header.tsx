'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Portfolio', href: '#developments' },
    { name: 'Land', href: '#land' },
    { name: 'Partnership', href: '#jv' },
  ];

  const menuVariants = {
    initial: { x: '100%' },
    animate: { 
      x: 0, 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    },
    exit: { 
      x: '100%', 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const linkVariants = {
    initial: { x: 80, opacity: 0 },
    animate: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 + (i * 0.1) }
    }),
    exit: (i: number) => ({
      x: 80,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: i * 0.05 }
    })
  };

  return (
    <>
      <header 
        className={`fixed w-full z-[1000] transition-all duration-500 ${
          scrolled ? 'bg-torridon-cream/80 backdrop-blur-xl py-4 shadow-2xl shadow-torridon-green/5' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="group relative z-[1100]">
            <div className="flex flex-col">
              <span className={`text-2xl md:text-3xl font-serif tracking-tighter transition-colors duration-500 ${
                scrolled || isOpen ? 'text-torridon-green' : 'text-white'
              }`}>
                TORRIDON
              </span>
              <span className={`text-[10px] uppercase tracking-[0.4em] font-bold -mt-1 transition-colors duration-500 ${
                scrolled || isOpen ? 'text-torridon-gold' : 'text-torridon-gold'
              }`}>
                HOMES
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <Link 
                  href={link.href}
                  className={`text-[10px] uppercase tracking-[0.3em] font-bold hover:text-torridon-gold transition-colors duration-500 ${
                    scrolled ? 'text-torridon-green' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </Magnetic>
            ))}
            <Magnetic>
              <Link 
                href="#contact"
                className={`px-8 py-3 border text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 ${
                  scrolled 
                    ? 'border-torridon-green text-torridon-green hover:bg-torridon-green hover:text-white' 
                    : 'border-white/30 text-white hover:bg-white hover:text-torridon-green backdrop-blur-sm'
                }`}
              >
                Enquire
              </Link>
            </Magnetic>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-4 relative z-[1100]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={32} className="text-torridon-green" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu size={32} className={scrolled ? 'text-torridon-green' : 'text-white'} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Full-Screen Curtain Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-[900] bg-torridon-cream flex flex-col justify-center px-12 md:px-24"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05908_1px,transparent_1px),linear-gradient(to_bottom,#c5a05908_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="relative z-10 space-y-12">
              <span className="text-torridon-gold uppercase tracking-[0.6em] text-[10px] font-bold block mb-12">Navigation</span>
              <nav className="flex flex-col space-y-8">
                {navLinks.map((link, i) => (
                  <motion.div key={link.name} custom={i} variants={linkVariants}>
                    <Link 
                      href={link.href}
                      className="text-5xl md:text-7xl font-serif text-torridon-green italic hover:text-torridon-gold transition-colors duration-500 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}.
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="pt-12 border-t border-torridon-gold/10 flex flex-col md:flex-row gap-12"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-torridon-gold font-bold block mb-4">Enquiries</span>
                  <a href="mailto:hello@torridonhomes.co.uk" className="text-lg font-serif text-torridon-green italic">hello@torridonhomes.co.uk</a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-torridon-gold font-bold block mb-4">Location</span>
                  <span className="text-lg font-serif text-torridon-green italic">Central Belt, Scotland</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
