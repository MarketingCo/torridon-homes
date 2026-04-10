'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const words = "TORRIDON".split("");

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.2 }
          }}
          className="fixed inset-0 z-[10000] bg-torridon-green flex items-center justify-center flex-col"
        >
          <div className="overflow-hidden flex">
            {words.map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.33, 1, 0.68, 1] as [number, number, number, number], 
                  delay: i * 0.05 
                }}
                className="text-white text-5xl md:text-7xl font-serif tracking-tighter"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="w-32 h-[1px] bg-torridon-gold mt-6 origin-left"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-torridon-gold uppercase tracking-[0.4em] text-[10px] mt-4 font-sans"
          >
            HOMES
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
