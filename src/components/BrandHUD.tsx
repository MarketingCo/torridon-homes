'use client';

import { motion } from 'framer-motion';

const BrandHUD = () => {
  return (
    <div className="fixed bottom-12 left-8 z-[100] hidden xl:flex flex-col gap-4 pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 5 }}
        className="bg-torridon-green/10 backdrop-blur-xl border border-torridon-gold/20 p-6 rounded-sm flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <span className="text-torridon-gold text-[8px] uppercase tracking-[0.4em] font-bold mb-1">Status</span>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-torridon-gold animate-pulse" />
            <span className="text-torridon-green text-[10px] uppercase tracking-widest font-bold">Operational</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-torridon-gold text-[8px] uppercase tracking-[0.4em] font-bold mb-1">Active Portfolio</span>
          <span className="text-torridon-green font-serif text-lg italic tracking-tighter">£42.5M GDV</span>
        </div>

        <div className="flex flex-col">
          <span className="text-torridon-gold text-[8px] uppercase tracking-[0.4em] font-bold mb-1">Sites Secured</span>
          <span className="text-torridon-green font-serif text-lg italic tracking-tighter">04 / 12 Target</span>
        </div>

        <div className="w-full h-[1px] bg-torridon-gold/10" />
      </motion.div>
    </div>
  );
};

export default BrandHUD;
