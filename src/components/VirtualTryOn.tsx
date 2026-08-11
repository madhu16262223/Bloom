import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ShoppingBag, Sliders, Camera, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const VirtualTryOn: React.FC = () => {
  const { isTryOnOpen, setIsTryOnOpen, tryOnProduct, addToCart } = useCart();
  const product = tryOnProduct || PRODUCTS[0];
  const shades = product.shades || [
    { id: 'crimson-bloom', name: 'Crimson Bloom', hex: '#800E22', swatchImage: '/images/img5.jpeg', productImage: '/images/prod_gold_bullet.png', description: 'Deep velvet red', finish: 'Velvet Matte' },
    { id: 'dusk-berry', name: 'Dusk Berry', hex: '#3B0916', swatchImage: '/images/img5.jpeg', productImage: '/images/img5.jpeg', description: 'Enigmatic dark plum', finish: 'Satin Velvet' },
    { id: 'nudite-blush', name: 'Nudité Blush', hex: '#C48B7A', swatchImage: '/images/img6.jpeg', productImage: '/images/img6.jpeg', description: 'Warm nude pink', finish: 'Soft Matte' },
  ];

  const [selectedShade, setSelectedShade] = useState(shades[0]);
  const [intensity, setIntensity] = useState(75);
  const [finishType, setFinishType] = useState<'Matte' | 'Gloss'>('Matte');
  const [selectedModel, setSelectedModel] = useState<string>('/images/model_rose.png');

  const models = [
    { name: 'Model 1', src: '/images/model_rose.png' },
    { name: 'Model 2', src: '/images/model_ruby.png' },
    { name: 'Model 3', src: '/images/model_nude.png' },
    { name: 'Model 4', src: '/images/model_berry.png' },
  ];

  if (!isTryOnOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsTryOnOpen(false)}
          className="fixed inset-0 bg-[#080506]/90 backdrop-blur-xl"
        />

        {/* Modal Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl rounded-3xl bg-[#080506] border border-[#F5EDE7]/10 glass-panel shadow-2xl overflow-hidden my-6"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#F5EDE7]/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-[#E5C378]" />
              <h3 className="font-serif text-2xl font-light text-[#F5EDE7]">
                BLOOM Virtual Lip Try-On Mirror
              </h3>
            </div>
            <button
              onClick={() => setIsTryOnOpen(false)}
              className="text-[#F5EDE7]/60 hover:text-white p-1 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
            {/* Left: Model Mirror Preview with Dynamic Tint Overlay */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#16080C] border border-[#F5EDE7]/10 shadow-2xl">
                {/* Base Model Image */}
                <img
                  src={selectedModel}
                  alt="Virtual Try On Model"
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />

                {/* Simulated Lip Tint Blend Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none transition-all duration-300 mix-blend-color"
                  style={{
                    backgroundColor: selectedShade.hex,
                    opacity: (intensity / 100) * 0.45,
                  }}
                />

                {/* High Gloss Specular Reflection Layer */}
                {finishType === 'Gloss' && (
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/20 to-transparent mix-blend-overlay animate-pulse" />
                )}

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full glass-panel border border-[#D4AF37]/30 text-[10px] uppercase tracking-widest text-[#E5C378]">
                  Live Simulation • {selectedShade.name}
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-[#F5EDE7]/70">
                  <span>Coverage: {intensity}%</span>
                  <span>Finish: {finishType}</span>
                </div>
              </div>

              {/* Model Picker Thumbnails */}
              <div className="mt-4 flex items-center space-x-3">
                <span className="text-xs uppercase tracking-widest text-[#F5EDE7]/50">Select Model:</span>
                {models.map((m) => (
                  <button
                    key={m.name}
                    onClick={() => setSelectedModel(m.src)}
                    className={`w-12 h-12 rounded-lg overflow-hidden border ${
                      selectedModel === m.src ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50' : 'border-[#F5EDE7]/10'
                    }`}
                  >
                    <img src={m.src} alt={m.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Controls & Shade Selector */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#E5C378]">Product</span>
                  <h4 className="font-serif text-3xl font-light text-[#F5EDE7] mt-1">
                    {product.name}
                  </h4>
                  <p className="text-xs text-[#F5EDE7]/60 mt-1">₹{product.price.toLocaleString('en-IN')}</p>
                </div>

                {/* Shade Swatch Picker */}
                <div className="pt-4 border-t border-[#F5EDE7]/10">
                  <label className="text-xs uppercase tracking-widest text-[#F5EDE7]/80 block mb-3 font-medium">
                    Choose Shade: <span className="text-[#E5C378]">{selectedShade.name}</span>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {shades.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedShade(s)}
                        className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                          selectedShade.id === s.id
                            ? 'border-[#D4AF37] bg-[#16080C]'
                            : 'border-[#F5EDE7]/10 bg-[#12070A]/50 hover:border-[#F5EDE7]/30'
                        }`}
                      >
                        <div
                          className="w-7 h-7 rounded-full mb-1.5 shadow-md"
                          style={{ backgroundColor: s.hex }}
                        />
                        <span className="text-[10px] text-[#F5EDE7]/80 truncate w-full text-center">
                          {s.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Intensity Slider */}
                <div className="pt-4 border-t border-[#F5EDE7]/10">
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#F5EDE7]/80 mb-2">
                    <span className="flex items-center space-x-2">
                      <Sliders className="w-3.5 h-3.5 text-[#E5C378]" />
                      <span>Pigment Intensity</span>
                    </span>
                    <span className="text-[#E5C378] font-semibold">{intensity}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={intensity}
                    onChange={(e) => setIntensity(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#16080C] rounded-lg appearance-none cursor-pointer accent-[#C41E3A]"
                  />
                  <div className="flex justify-between text-[10px] text-[#F5EDE7]/40 mt-1">
                    <span>Sheer Stain</span>
                    <span>Velvet Medium</span>
                    <span>Full Coverage</span>
                  </div>
                </div>

                {/* Finish Selector */}
                <div className="pt-4 border-t border-[#F5EDE7]/10">
                  <label className="text-xs uppercase tracking-widest text-[#F5EDE7]/80 block mb-2 font-medium">
                    Texture Finish:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setFinishType('Matte')}
                      className={`py-2.5 text-xs uppercase tracking-widest rounded-xl border font-medium transition-all ${
                        finishType === 'Matte'
                          ? 'bg-[#C41E3A] border-[#C41E3A] text-white'
                          : 'border-[#F5EDE7]/10 bg-[#16080C] text-[#F5EDE7]/60'
                      }`}
                    >
                      Velvet Matte
                    </button>
                    <button
                      onClick={() => setFinishType('Gloss')}
                      className={`py-2.5 text-xs uppercase tracking-widest rounded-xl border font-medium transition-all ${
                        finishType === 'Gloss'
                          ? 'bg-[#C41E3A] border-[#C41E3A] text-white'
                          : 'border-[#F5EDE7]/10 bg-[#16080C] text-[#F5EDE7]/60'
                      }`}
                    >
                      Liquid Mirror Gloss
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Bag CTA */}
              <div className="mt-8 pt-6 border-t border-[#F5EDE7]/10">
                <button
                  onClick={() => {
                    addToCart(product, selectedShade);
                    setIsTryOnOpen(false);
                  }}
                  className="w-full rounded-full bg-gradient-to-r from-[#800E22] via-[#C41E3A] to-[#D4AF37] py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Try-On Shade To Bag • ₹{product.price.toLocaleString('en-IN')}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
