import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Edit3, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const EngravingStudio: React.FC = () => {
  const [engravingText, setEngravingText] = useState('BLOOM PARIS');
  const [casingFinish, setCasingFinish] = useState<'Brushed Gold' | 'Obsidian Black' | 'Rose Gold'>('Brushed Gold');
  const { addToCart } = useCart();
  const product = PRODUCTS[0];

  const finishMap = {
    'Brushed Gold': { bg: 'from-[#D4AF37] via-[#E5C378] to-[#997A15]', textCol: 'text-[#3A0815]', img: '/images/prod_gold_bullet.png' },
    'Obsidian Black': { bg: 'from-[#16080C] via-[#080506] to-[#2B0E17]', textCol: 'text-[#D4AF37]', img: '/images/prod_obsidian.png' },
    'Rose Gold': { bg: 'from-[#E8A3B8] via-[#F7D6DE] to-[#B85C74]', textCol: 'text-[#5A0B18]', img: '/images/prod_rosegold.png' },
  };

  return (
    <section className="relative w-full bg-[#080506] py-28 md:py-40 overflow-hidden border-t border-[#F5EDE7]/5">
      {/* Background Radial Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-radial-gradient from-[#5A0B18]/25 via-[#300912]/15 to-transparent blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.3em] uppercase text-[#E5C378]"
          >
            Custom Atelier Privé
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#F5EDE7] tracking-tight mt-2"
          >
            Custom Gold Engraving.
          </motion.h2>
          <p className="mt-4 text-xs sm:text-sm text-[#F5EDE7]/60 font-light max-w-lg mx-auto">
            Personalize your magnetic lipstick bullet with complimentary gold-embossed lettering. Type your initials or custom message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive 3D Engraving Visualizer Vessel */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-80 sm:w-96 aspect-[3/4] rounded-3xl glass-panel p-6 border border-[#F5EDE7]/10 flex flex-col items-center justify-between shadow-2xl overflow-hidden">
              {/* Product Case Image */}
              <div className="relative w-full h-4/5 overflow-hidden rounded-2xl bg-[#16080C] flex items-center justify-center">
                <img
                  src={finishMap[casingFinish].img}
                  alt="Custom Engraved Lipstick"
                  className="w-full h-full object-cover"
                />

                {/* Dynamic Engraved Gold Lettering Overlay on Tube */}
                <div className="absolute bottom-16 inset-x-0 z-20 flex justify-center">
                  <div className="px-6 py-2 rounded-lg bg-[#080506]/75 backdrop-blur-md border border-[#D4AF37]/50 shadow-2xl">
                    <span className="font-serif text-lg tracking-[0.35em] text-gold-gradient font-bold uppercase">
                      {engravingText || 'BLOOM'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Engraving Tag */}
              <div className="w-full flex items-center justify-between pt-3 text-xs text-[#F5EDE7]/70">
                <span className="text-[#E5C378] font-medium">Bespoke Engraving</span>
                <span className="uppercase tracking-widest">{casingFinish}</span>
              </div>
            </div>
          </div>

          {/* Engraving Controls */}
          <div className="lg:col-span-5 space-y-8">
            {/* Input Field */}
            <div className="p-6 rounded-2xl glass-card border border-[#F5EDE7]/10">
              <label className="text-xs uppercase tracking-widest text-[#E5C378] block font-medium mb-3">
                Enter Custom Engraving Text (Max 14 Chars)
              </label>
              <div className="relative">
                <input
                  type="text"
                  maxLength={14}
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value.toUpperCase())}
                  placeholder="E.G. GURUM 2026"
                  className="w-full bg-[#16080C] border border-[#F5EDE7]/20 rounded-xl px-4 py-3.5 text-sm font-serif tracking-[0.2em] uppercase text-[#F5EDE7] focus:border-[#D4AF37] focus:outline-none"
                />
                <Edit3 className="absolute right-4 top-3.5 w-4 h-4 text-[#E5C378]" />
              </div>
              <span className="text-[11px] text-[#F5EDE7]/40 block mt-2">
                Hand-engraved using 24k gold leaf in our Paris atelier.
              </span>
            </div>

            {/* Casing Finish Selector */}
            <div className="p-6 rounded-2xl glass-card border border-[#F5EDE7]/10">
              <label className="text-xs uppercase tracking-widest text-[#E5C378] block font-medium mb-3">
                Select Casing Metal Finish:
              </label>
              <div className="space-y-3">
                {(['Brushed Gold', 'Obsidian Black', 'Rose Gold'] as const).map((finish) => (
                  <button
                    key={finish}
                    onClick={() => setCasingFinish(finish)}
                    className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${
                      casingFinish === finish
                        ? 'border-[#D4AF37] bg-[#16080C]'
                        : 'border-[#F5EDE7]/10 bg-[#12070A]/50 hover:border-[#F5EDE7]/20'
                    }`}
                  >
                    <span className="text-xs font-serif tracking-wider uppercase text-[#F5EDE7]">
                      {finish}
                    </span>
                    <span
                      className={`w-5 h-5 rounded-full bg-gradient-to-r ${finishMap[finish].bg} shadow-md`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Add Engraved Item to Cart */}
            <button
              onClick={() => addToCart(product, product.shades?.[0])}
              className="w-full rounded-full bg-gradient-to-r from-[#800E22] via-[#C41E3A] to-[#D4AF37] py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Engraved Lipstick • ₹{product.price.toLocaleString('en-IN')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
