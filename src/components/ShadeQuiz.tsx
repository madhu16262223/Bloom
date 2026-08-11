import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, CheckCircle2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

export const ShadeQuiz: React.FC = () => {
  const { isQuizOpen, setIsQuizOpen, addToCart } = useCart();
  const [step, setStep] = useState(1);
  const [undertone, setUndertone] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('');
  const [finish, setFinish] = useState<string>('');
  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);

  if (!isQuizOpen) return null;

  const handleFinish = (selectedFinish: string) => {
    setFinish(selectedFinish);

    // AI recommendation algorithm
    let matched = PRODUCTS[0];
    if (selectedFinish === 'Liquid Silk') {
      matched = PRODUCTS.find((p) => p.category === 'Liquid Silk') || PRODUCTS[4];
    } else if (selectedFinish === 'Satin Rouge') {
      matched = PRODUCTS.find((p) => p.category === 'Satin Rouge') || PRODUCTS[8];
    } else if (undertone === 'Neutral' || occasion === 'Everyday Nude') {
      matched = PRODUCTS.find((p) => p.category === 'Nude Collection') || PRODUCTS[12];
    }

    setRecommendedProduct(matched);
    setStep(4); // Result step
  };

  const resetQuiz = () => {
    setStep(1);
    setUndertone('');
    setOccasion('');
    setFinish('');
    setRecommendedProduct(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsQuizOpen(false)}
          className="fixed inset-0 bg-[#080506]/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl rounded-3xl bg-[#080506] border border-[#F5EDE7]/10 glass-panel shadow-2xl overflow-hidden my-6 p-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#F5EDE7]/10 mb-8">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-[#E5C378]" />
              <h3 className="font-serif text-2xl font-light text-[#F5EDE7]">
                AI Shade Matchmaker
              </h3>
            </div>
            <button
              onClick={() => {
                resetQuiz();
                setIsQuizOpen(false);
              }}
              className="text-[#F5EDE7]/60 hover:text-white p-1"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Step 1: Undertone */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-xs uppercase tracking-widest text-[#E5C378] font-medium">
                Step 1 of 3
              </span>
              <h4 className="font-serif text-3xl font-light text-[#F5EDE7] mt-1 mb-6">
                What is your primary skin undertone?
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Cool / Pink Undertone', desc: 'Veins appear blue/purple, silver jewelry complements best' },
                  { name: 'Warm / Golden Undertone', desc: 'Veins appear greenish, gold jewelry complements best' },
                  { name: 'Neutral / Olive', desc: 'Mix of cool and warm, both gold and silver look stunning' },
                  { name: 'Rich Deep Undertone', desc: 'Deep warm or cool undertones with high pigment contrast' },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setUndertone(item.name);
                      setStep(2);
                    }}
                    className="p-5 rounded-2xl border border-[#F5EDE7]/10 bg-[#16080C]/60 hover:border-[#D4AF37] hover:bg-[#300912]/50 text-left transition-all group"
                  >
                    <h5 className="font-serif text-xl font-normal text-[#F5EDE7] group-hover:text-[#E5C378]">
                      {item.name}
                    </h5>
                    <p className="text-xs text-[#F5EDE7]/60 font-light mt-1">{item.desc}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Occasion */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-xs uppercase tracking-widest text-[#E5C378] font-medium">
                Step 2 of 3
              </span>
              <h4 className="font-serif text-3xl font-light text-[#F5EDE7] mt-1 mb-6">
                What occasion are you shopping for?
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Everyday Subtle Nude', desc: 'Effortless understated chic for work and daily wear' },
                  { name: 'Iconic Statement Red', desc: 'Bold classic crimson red that commands attention' },
                  { name: 'Midnight Glamour', desc: 'Deep moody wine berry for formal evening couture' },
                  { name: 'Fresh Radiant Satin', desc: 'Luminous coral pink glow for daytime events' },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setOccasion(item.name);
                      setStep(3);
                    }}
                    className="p-5 rounded-2xl border border-[#F5EDE7]/10 bg-[#16080C]/60 hover:border-[#D4AF37] hover:bg-[#300912]/50 text-left transition-all group"
                  >
                    <h5 className="font-serif text-xl font-normal text-[#F5EDE7] group-hover:text-[#E5C378]">
                      {item.name}
                    </h5>
                    <p className="text-xs text-[#F5EDE7]/60 font-light mt-1">{item.desc}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Finish */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-xs uppercase tracking-widest text-[#E5C378] font-medium">
                Step 3 of 3
              </span>
              <h4 className="font-serif text-3xl font-light text-[#F5EDE7] mt-1 mb-6">
                What is your preferred texture finish?
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Velvet Matte', desc: 'Weightless powdery matte finish' },
                  { name: 'Liquid Silk', desc: 'High-shine liquid mirror gloss coat' },
                  { name: 'Satin Rouge', desc: 'Creamy satin moisture glow' },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleFinish(item.name)}
                    className="p-5 rounded-2xl border border-[#F5EDE7]/10 bg-[#16080C]/60 hover:border-[#D4AF37] hover:bg-[#300912]/50 text-left transition-all group"
                  >
                    <h5 className="font-serif text-xl font-normal text-[#F5EDE7] group-hover:text-[#E5C378]">
                      {item.name}
                    </h5>
                    <p className="text-xs text-[#F5EDE7]/60 font-light mt-1">{item.desc}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 4: AI Recommendation Result */}
          {step === 4 && recommendedProduct && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[#E5C378] font-medium">
                  Your Signature Match
                </span>
                <h4 className="font-serif text-4xl font-light text-[#F5EDE7] mt-1">
                  {recommendedProduct.name}
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center p-4 rounded-2xl glass-card border border-[#F5EDE7]/10 mb-8">
                <div className="sm:col-span-5 relative aspect-square rounded-xl overflow-hidden bg-[#16080C]">
                  <img
                    src={recommendedProduct.mainImage}
                    alt={recommendedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="sm:col-span-7 space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#E5C378]">
                    {recommendedProduct.category}
                  </span>
                  <p className="text-xs text-[#F5EDE7]/70 font-light leading-relaxed">
                    {recommendedProduct.description}
                  </p>
                  <p className="font-serif text-2xl text-[#F5EDE7]">
                    ₹{recommendedProduct.price.toLocaleString('en-IN')}
                  </p>
                  <div className="flex items-center space-x-2 text-xs text-[#E5C378]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>99.4% Match to your skin undertone ({undertone})</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={resetQuiz}
                  className="px-6 py-4 rounded-full border border-[#F5EDE7]/20 text-xs font-semibold uppercase tracking-widest text-[#F5EDE7]"
                >
                  Retake Quiz
                </button>
                <button
                  onClick={() => {
                    addToCart(recommendedProduct);
                    setIsQuizOpen(false);
                    resetQuiz();
                  }}
                  className="flex-grow rounded-full bg-gradient-to-r from-[#800E22] via-[#C41E3A] to-[#D4AF37] py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Match To Bag • ₹{recommendedProduct.price.toLocaleString('en-IN')}</span>
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
