import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Eye, ShoppingBag, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedProducts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Lipsticks');
  const { addToCart, setActiveProductModal } = useCart();

  const categories = ['All Lipsticks', 'Velvet Matte', 'Liquid Silk', 'Satin Rouge', 'Nude Collection', 'Luxe Sets'];

  const filteredProducts =
    activeCategory === 'All Lipsticks'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="relative w-full bg-[#080506] py-28 md:py-36 border-t border-[#F5EDE7]/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-medium tracking-[0.3em] uppercase text-[#E5C378]"
            >
              Haute Cosmetic Collection • {PRODUCTS.length} Lipsticks
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl sm:text-6xl font-light text-[#F5EDE7] tracking-tight mt-2"
            >
              THE LIPSTICK COLLECTION
            </motion.h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-8 lg:mt-0 flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#C41E3A] text-[#FAFAF7] shadow-lg shadow-[#C41E3A]/30'
                    : 'bg-[#16080C] text-[#F5EDE7]/60 hover:text-[#F5EDE7] hover:bg-[#300912]/50 border border-[#F5EDE7]/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl glass-card p-4 transition-all duration-500"
              data-cursor-view
            >
              {/* Product Badges */}
              {product.isBestSeller && (
                <span className="absolute top-7 left-7 z-10 rounded-full bg-[#D4AF37]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#080506]">
                  Best Seller
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-7 left-7 z-10 rounded-full bg-[#C41E3A] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  New Arrival
                </span>
              )}

              {/* Image Container: Tube Image + Model Image on Hover */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#16080C] mb-6">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
                />
                <img
                  src={product.hoverImage}
                  alt={`${product.name} model wearing`}
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                />

                {/* Quick Actions Hover Overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-center space-x-3 bg-[#080506]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]">
                  <button
                    onClick={() => setActiveProductModal(product)}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FAFAF7] text-[#080506] shadow-xl hover:bg-[#E5C378] transition-colors"
                    title="Quick View"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => addToCart(product, product.shades?.[0])}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C41E3A] text-white shadow-xl hover:bg-[#800E22] transition-colors"
                    title="Add to Bag"
                  >
                    <ShoppingBag className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-medium tracking-widest text-[#E5C378] uppercase">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1 text-[#D4AF37]">
                      <Star className="h-3 w-3 fill-current" />
                      <span className="text-xs text-[#F5EDE7]/70">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-normal text-[#F5EDE7] group-hover:text-[#E5C378] transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#F5EDE7]/60 font-light line-clamp-2">
                    {product.tagline}
                  </p>
                </div>

                {/* Footer Price in INR ₹ */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#F5EDE7]/10">
                  <span className="font-serif text-xl text-[#F5EDE7] font-light">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <button
                    onClick={() => addToCart(product, product.shades?.[0])}
                    className="text-xs uppercase tracking-widest font-semibold text-[#E5C378] hover:text-white transition-colors"
                  >
                    + Add to Bag
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
