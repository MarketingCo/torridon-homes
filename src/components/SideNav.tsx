'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('');
  const sections = [
    { id: 'home', label: 'Top' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'developments', label: 'Portfolio' },
    { id: 'land', label: 'Land' },
    { id: 'jv', label: 'Partnership' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col items-end gap-6">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-4"
        >
          <AnimatePresence>
            {activeSection === s.id && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-torridon-gold pointer-events-none"
              >
                {s.label}
              </motion.span>
            )}
          </AnimatePresence>
          <div 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 border border-torridon-gold ${
              activeSection === s.id ? 'bg-torridon-gold scale-125' : 'bg-transparent group-hover:bg-torridon-gold/30'
            }`} 
          />
        </button>
      ))}
    </div>
  );
};

export default SideNav;
