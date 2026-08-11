import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Heart, Droplets } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const ProductShowcase: React.FC = () => {
  const [rotatePos, setRotatePos] = useState({ x: 0, y: 0 });
  const { addToCart } = useCart();
  const product = PRODUCTS[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10 to +10deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setRotatePos({ x, y });
  };

  const handleMouseLeave = () => {
    setRotatePos({ x: 0, y: 0 });
  };

  const featureLabels = [
    { text: 'LONG LASTING', icon: Sparkles, pos: 'top-10 left-4 sm:left-12' },
    { text: 'HYDRATING', icon: Droplets, pos: 'top-1/3 right-4 sm:right-12' },
    { text: 'VEGAN', icon: ShieldCheck, pos: 'bottom-1/3 left-4 sm:left-12' },
    { text: 'CRUELTY FREE', icon: Heart, pos: 'bottom-12 right-4 sm:right-12' },
  ];

  return (
    <section className="relative w-full bg-[#080506] py-28 md:py-40 overflow-hidden border-t border-[#F5EDE7]/5">
      {/* Background Lighting Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-radial-gradient from-[#5A0B18]/25 via-[#300912]/15 to-transparent blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.3em] uppercase text-[#E5C378]"
          >
            3D Product Architecture
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl font-light text-[#F5EDE7] tracking-tight mt-2"
          >
            Anatomy of Perfection
          </motion.h2>
          <p className="mt-3 text-xs sm:text-sm text-[#F5EDE7]/60 font-light">
            Hover over the central cylinder to inspect reflection perspectives and formulation callouts.
          </p>
        </div>

        {/* Interactive Center Stage */}
        <div className="relative min-h-[500px] sm:min-h-[600px] flex items-center justify-center">
          {/* Animated Feature Tags */}
          {featureLabels.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`absolute z-20 hidden sm:flex items-center space-x-3 px-5 py-3 rounded-full glass-panel border border-[#D4AF37]/30 shadow-2xl ${item.pos}`}
              >
                <Icon className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-medium tracking-widest text-[#F5EDE7] uppercase">
                  {item.text}
                </span>
              </motion.div>
            );
          })}

          {/* Center 3D Interactive Product Vessel */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-72 sm:w-96 aspect-[3/4] cursor-grab active:cursor-grabbing perspective-1000"
            data-cursor-view
          >
            <div
              className="w-full h-full rounded-3xl glass-panel p-4 border border-[#F5EDE7]/10 transition-transform duration-200 ease-out shadow-2xl flex items-center justify-center overflow-hidden"
              style={{
                transform: `rotateY(${rotatePos.x}deg) rotateX(${rotatePos.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src="/images/img7.jpeg"
                alt="Aurelia Paris Haute Lipstick"
                className="w-full h-full object-cover object-center rounded-2xl filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
              />

              {/* Gold Reflection Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded-3xl" />
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <button
            onClick={() => addToCart(product)}
            className="rounded-full bg-gradient-to-r from-[#800E22] to-[#C41E3A] px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FAFAF7] shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#C41E3A]/40 hover:scale-105"
          >
            Acquire Haute Edition — ₹{product.price.toLocaleString('en-IN')}
          </button>
        </div>
      </div>
    </section>
  );
};
