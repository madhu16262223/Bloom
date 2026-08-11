import React from 'react';
import { motion } from 'framer-motion';

export const IngredientsSection: React.FC = () => {
  const ingredients = [
    {
      title: 'ROSE EXTRACT',
      subtitle: 'Harvested from wild Damask petals',
      description: 'Rich in polyphenols and vitamin C to protect, soothe, and rejuvenate lip cellular texture.',
      number: '01',
    },
    {
      title: 'HYDRATION',
      subtitle: 'Encapsulated Hyaluronic Spheres',
      description: 'Micro-spheres penetrate deep layers, locking in moisture for 14 continuous hours.',
      number: '02',
    },
    {
      title: 'NATURAL PIGMENTS',
      subtitle: 'Pure Crushed Earth Minerals',
      description: 'Ethically sourced mineral earth pigments provide intense color payoff without chemical dyes.',
      number: '03',
    },
    {
      title: 'SKIN LOVING FORMULA',
      subtitle: 'Hypoallergenic Botanical Elixir',
      description: 'Free from parabens, synthetic fragrances, and heavy metals. Dermatologically approved.',
      number: '04',
    },
  ];

  return (
    <section id="ingredients" className="relative w-full bg-[#080506] py-28 md:py-40 border-t border-[#F5EDE7]/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.3em] uppercase text-[#E5C378]"
          >
            Botanical Alchemy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl sm:text-7xl font-light text-[#F5EDE7] tracking-tight mt-3"
          >
            Nature, refined.
          </motion.h2>
          <p className="mt-4 text-sm sm:text-base text-[#F5EDE7]/60 font-light max-w-lg mx-auto">
            Formulated without compromise. Every ingredient serves a singular purpose: elevating your natural beauty.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative glass-card rounded-2xl p-8 flex flex-col justify-between group hover:border-[#D4AF37]/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-serif text-3xl font-light text-[#E5C378]/40 group-hover:text-[#E5C378] transition-colors">
                  {item.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#C41E3A] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-normal text-[#F5EDE7] tracking-wide mb-2 group-hover:text-[#E5C378] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E5C378] font-medium tracking-wider uppercase mb-4">
                  {item.subtitle}
                </p>
                <p className="text-xs text-[#F5EDE7]/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F5EDE7]/10 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#F5EDE7]/40">
                <span>Botanical Grade</span>
                <span>100% Pure</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
