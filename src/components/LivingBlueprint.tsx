'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const LivingBlueprint = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div ref={ref} className="w-full max-w-4xl mx-auto py-20 opacity-40">
      <motion.svg
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto text-torridon-gold"
        style={{ opacity }}
      >
        {/* Foundation & Outer Walls */}
        <motion.path
          d="M50 350 L750 350 L750 150 L400 50 L50 150 Z"
          stroke="currentColor"
          strokeWidth="1"
          style={{ pathLength }}
        />
        {/* Internal Structure */}
        <motion.path
          d="M50 150 L750 150 M400 50 L400 350 M200 150 L200 350 M600 150 L600 350"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 4"
          style={{ pathLength }}
        />
        {/* Detail Lines */}
        <motion.path
          d="M100 350 L100 370 M700 350 L700 370 M400 350 L400 370"
          stroke="currentColor"
          strokeWidth="1"
          style={{ pathLength }}
        />
        {/* Annotation Text (Placeholder SVG version) */}
        <motion.text
          x="410"
          y="30"
          className="text-[10px] font-sans uppercase tracking-[0.4em] fill-current italic font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Section detail // T-01
        </motion.text>
      </motion.svg>
    </div>
  );
};

export default LivingBlueprint;
