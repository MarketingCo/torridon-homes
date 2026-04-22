'use client';
import { motion } from 'framer-motion';

export default function AtmosphericBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden opacity-30">
      <motion.div 
        animate={{ 
          x: ['-20%', '20%', '-20%'],
          y: ['-10%', '10%', '-10%'],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -left-1/2 w-full h-full [background:radial-gradient(circle,rgba(201,168,76,0.15),transparent_70%)] blur-[120px]"
      />
    </div>
  );
}
