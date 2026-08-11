import React from 'react';
import { motion } from 'framer-motion';

export const CTASection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#16080C] py-32 md:py-48 overflow-hidden border-t border-[#F5EDE7]/10">
      {/* Deep Burgundy Glowing Radial Backdrop */}
      <div className="absolute inset-0 bg-radial-gradient from-[#5A0B18]/40 via-[#300912]/30 to-[#080506] pointer-events-none" />

      {/* Floating Animated Glow Spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#800E22]/20 blur-[130px] animate-pulse-glow pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Rose Icon Motif */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#300912]/80 backdrop-blur-md shadow-2xl"
        >
          <span className="text-3xl">🌹</span>
        </motion.div>

        {/* Large Cinematic Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#F5EDE7] tracking-tight leading-[1.05]"
        >
          LET YOUR BEAUTY BLOOM.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-sm sm:text-base text-[#F0E5DF] font-light tracking-widest uppercase max-w-md"
        >
          Discover luxury botanical lipsticks and elevated beauty rituals crafted for extraordinary presence.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="#products"
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#800E22] via-[#C41E3A] to-[#D4AF37] p-[1px] shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            <span className="flex items-center rounded-full bg-[#080506] px-10 py-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#FAFAF7] transition-all duration-300 group-hover:bg-transparent group-hover:text-[#FAFAF7]">
              Shop Bloom
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
