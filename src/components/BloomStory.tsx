import React from 'react';
import { motion } from 'framer-motion';

export const BloomStory: React.FC = () => {
  return (
    <section id="bloom-story" className="relative w-full bg-[#080506] py-28 md:py-40 overflow-hidden border-t border-[#F5EDE7]/5">
      {/* Background Lighting Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-radial-gradient from-[#5A0B18]/25 to-transparent blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.3em] uppercase text-[#E5C378]"
          >
            The Origin of Bloom
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#F5EDE7] tracking-tight mt-3"
          >
            Every bloom has a story.
          </motion.h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Container with Parallax Hover and Framing */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative group"
            data-cursor-view
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#F5EDE7]/10 glass-card p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src="/images/img1.jpeg"
                  alt="Bloom Damask Rose"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080506]/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Gold Detail Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center space-x-3 p-5 rounded-2xl glass-panel border border-[#D4AF37]/30 shadow-2xl">
              <span className="text-3xl">🌹</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#E5C378]">100% Organic</p>
                <p className="text-[11px] text-[#F5EDE7]/60">Hand-harvested Damask Rose Petals</p>
              </div>
            </div>
          </motion.div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start lg:pl-6"
          >
            <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl font-light text-[#F0E5DF] leading-relaxed mb-8">
              "Born from the elegance of nature, Bloom transforms the timeless beauty of the rose into modern beauty rituals."
            </p>

            <div className="space-y-6 text-sm sm:text-base text-[#F5EDE7]/70 font-light leading-relaxed mb-10">
              <p>
                We believe true radiance is not created in a laboratory, but nurtured in nature's most romantic sanctuaries. Every lipstick tube and botanical elixir is crafted using ancient cold-pressed extraction methods, preserving the velvety essence and antioxidant power of freshly bloomed roses.
              </p>
              <p>
                From organic soil to your lips, our formulas honor pure botanicals, hyper-pigmented natural mineral earth, and sustainable luxury craftsmanship.
              </p>
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#F5EDE7]/10 w-full">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#E5C378]">100%</span>
                <p className="text-[11px] uppercase tracking-widest text-[#F5EDE7]/50 mt-1">Botanical</p>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#E5C378]">14 hr</span>
                <p className="text-[11px] uppercase tracking-widest text-[#F5EDE7]/50 mt-1">Comfort Wear</p>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#E5C378]">Zero</span>
                <p className="text-[11px] uppercase tracking-widest text-[#F5EDE7]/50 mt-1">Synthetics</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
