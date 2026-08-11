import React from 'react';
import { motion } from 'framer-motion';

export const EditorialGallery: React.FC = () => {
  const galleryItems = [
    {
      id: 1,
      image: '/images/img4.jpeg',
      title: 'The Art of Application',
      subtitle: 'Editorial Mirror Portrait',
      aspect: 'aspect-[4/5]',
      colSpan: 'lg:col-span-6',
    },
    {
      id: 2,
      image: '/images/img8.jpeg',
      title: 'Velvet Lip Focus',
      subtitle: 'Hyper-pigmented Finish',
      aspect: 'aspect-square',
      colSpan: 'lg:col-span-6',
    },
    {
      id: 3,
      image: '/images/img5.jpeg',
      title: 'Slate & Swatch',
      subtitle: 'Plum Mineral Swatch',
      aspect: 'aspect-video',
      colSpan: 'lg:col-span-7',
    },
    {
      id: 4,
      image: '/images/img3.jpeg',
      title: 'Botanical Sanctuary',
      subtitle: 'Damask Bloom Detail',
      aspect: 'aspect-[3/4]',
      colSpan: 'lg:col-span-5',
    },
    {
      id: 5,
      image: '/images/img6.jpeg',
      title: 'Architectural Neutral Trio',
      subtitle: 'Nudité, Blush & Taupe',
      aspect: 'aspect-[16/10]',
      colSpan: 'lg:col-span-12',
    },
  ];

  return (
    <section className="relative w-full bg-[#080506] py-28 md:py-40 overflow-hidden border-t border-[#F5EDE7]/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.3em] uppercase text-[#E5C378]"
          >
            Visual Anthology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl sm:text-7xl font-light text-[#F5EDE7] tracking-tight mt-3"
          >
            Editorial Gallery.
          </motion.h2>
          <p className="mt-4 text-sm sm:text-base text-[#F5EDE7]/60 font-light max-w-md mx-auto">
            Explore the intersection of haute couture photography, botanical elegance, and cosmetic craftsmanship.
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group overflow-hidden rounded-2xl glass-card border border-[#F5EDE7]/10 p-3 ${item.colSpan}`}
              data-cursor-view
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden rounded-xl bg-[#16080C]`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                {/* Overlay Vignette & Title Reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080506] via-[#080506]/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span className="text-[10px] uppercase tracking-widest text-[#E5C378] font-medium">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F5EDE7] mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
