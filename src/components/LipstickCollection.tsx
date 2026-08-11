import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductShade } from '../types';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const LipstickCollection: React.FC = () => {
  const lipstickProduct = PRODUCTS.find((p) => p.id === 'bloom-rouge-haute') || PRODUCTS[0];
  const shades = lipstickProduct.shades || [];

  const [activeShade, setActiveShade] = useState<ProductShade>(shades[0]);
  const { addToCart } = useCart();

  return (
    <section id="lipstick-collection" className="relative w-full bg-[#080506] py-28 md:py-40 overflow-hidden border-t border-[#F5EDE7]/5">
      {/* Dynamic Background Light shifting based on Active Shade */}
      <div
        className="absolute inset-0 transition-colors duration-1000 ease-out pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at 60% 50%, ${activeShade.hex} 0%, transparent 70%)`,
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.3em] uppercase text-[#E5C378]"
          >
            Haute Lipstick Artistry
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl sm:text-7xl font-light text-[#F5EDE7] tracking-tight mt-3"
          >
            Color that speaks.
          </motion.h2>
          <p className="mt-4 text-sm sm:text-base text-[#F5EDE7]/60 font-light max-w-md mx-auto">
            Experience our micro-fine pigment technology. Select a shade below to preview texture and formulation details.
          </p>
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Visual Display */}
          <div className="lg:col-span-7 relative" data-cursor-view>
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-3xl glass-panel p-4 border border-[#F5EDE7]/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeShade.id}
                  src={activeShade.productImage}
                  alt={activeShade.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full w-full object-cover object-center rounded-2xl"
                />
              </AnimatePresence>

              {/* Floating Finish Badge */}
              <div className="absolute top-8 left-8 z-10 px-4 py-1.5 rounded-full glass-panel border border-[#D4AF37]/30 text-xs font-medium text-[#E5C378] uppercase tracking-widest">
                {activeShade.finish}
              </div>
            </div>
          </div>

          {/* Interactive Shade Selector & Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-[#E5C378] font-medium mb-2">
              Selected Shade
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeShade.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-serif text-4xl sm:text-5xl font-light text-[#F5EDE7]">
                  {activeShade.name}
                </h3>
                <p className="mt-4 text-sm text-[#F5EDE7]/70 font-light leading-relaxed">
                  {activeShade.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Swatch Pickers */}
            <div className="mt-8 pt-8 border-t border-[#F5EDE7]/10">
              <label className="text-xs uppercase tracking-widest text-[#F5EDE7]/60 block mb-4">
                Select Shade Swatch ({shades.length} Available)
              </label>

              <div className="grid grid-cols-3 gap-4">
                {shades.map((shade) => {
                  const isSelected = activeShade.id === shade.id;
                  return (
                    <button
                      key={shade.id}
                      onClick={() => setActiveShade(shade)}
                      className={`group relative flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#16080C] border border-[#D4AF37] shadow-xl'
                          : 'bg-[#12070A]/50 border border-transparent hover:border-[#F5EDE7]/20'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-full transition-transform duration-300 ${
                          isSelected ? 'scale-110 ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-[#080506]' : 'group-hover:scale-105'
                        }`}
                        style={{ backgroundColor: shade.hex }}
                      />
                      <span className="mt-2 text-[11px] tracking-wider text-[#F5EDE7]/80 truncate w-full text-center">
                        {shade.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pricing in INR ₹ and Add to Bag */}
            <div className="mt-10 flex items-center space-x-6">
              <span className="font-serif text-3xl font-light text-[#F5EDE7]">
                ₹{lipstickProduct.price.toLocaleString('en-IN')}
              </span>

              <button
                onClick={() => addToCart(lipstickProduct, activeShade)}
                className="flex-grow rounded-full bg-gradient-to-r from-[#800E22] to-[#C41E3A] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FAFAF7] shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#C41E3A]/40 hover:scale-[1.02]"
              >
                Add Shade To Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
