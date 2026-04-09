'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: 'Land Acquisition', href: '#land' },
    { name: 'Joint Ventures', href: '#jv' },
    { name: 'Developments', href: '#developments' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-torridon-cream/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="group">
          <div className="flex flex-col">
            <span className={`text-2xl md:text-3xl font-serif tracking-tighter transition-colors duration-300 ${
              scrolled ? 'text-torridon-green' : 'text-torridon-green md:text-white'
            }`}>
              TORRIDON
            </span>
            <span className={`text-[10px] uppercase tracking-[0.3em] font-sans -mt-1 transition-colors duration-300 ${
              scrolled ? 'text-torridon-gold' : 'text-torridon-gold md:text-white/80'
            }`}>
              HOMES
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm uppercase tracking-widest font-sans hover:text-torridon-gold transition-colors duration-300 ${
                scrolled ? 'text-torridon-green' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact"
            className={`px-6 py-2 border text-sm uppercase tracking-widest transition-all duration-300 ${
              scrolled 
                ? 'border-torridon-green text-torridon-green hover:bg-torridon-green hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-torridon-green'
            }`}
          >
            Enquire
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-torridon-green"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className={!scrolled ? 'text-torridon-green md:text-white' : ''} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-torridon-cream border-b border-torridon-gold/20 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-serif text-torridon-green hover:text-torridon-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact"
                className="w-full py-4 bg-torridon-green text-white text-center uppercase tracking-widest text-sm"
                onClick={() => setIsOpen(false)}
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
