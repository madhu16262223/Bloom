import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, addToCart, setActiveProductModal } = useCart();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!isSearchOpen) return null;

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesQuery =
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.tagline.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase());

    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;

    return matchesQuery && matchesCat;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[130] flex items-start justify-center pt-20 px-4 sm:px-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSearchOpen(false)}
          className="fixed inset-0 bg-[#080506]/90 backdrop-blur-xl"
        />

        {/* Search Modal Panel */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-4xl rounded-3xl bg-[#080506] border border-[#F5EDE7]/10 glass-panel shadow-2xl overflow-hidden p-6 sm:p-8"
        >
          {/* Top Search Input */}
          <div className="relative pb-6 border-b border-[#F5EDE7]/10 flex items-center">
            <Search className="w-6 h-6 text-[#E5C378] mr-4" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 20 lipsticks by shade, finish, or name..."
              className="w-full bg-transparent font-serif text-2xl sm:text-3xl text-[#F5EDE7] placeholder-[#F5EDE7]/30 focus:outline-none"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 text-[#F5EDE7]/60 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Filter Pills */}
          <div className="py-4 flex flex-wrap gap-2 border-b border-[#F5EDE7]/5">
            {['All', 'Velvet Matte', 'Liquid Silk', 'Satin Rouge', 'Nude Collection', 'Luxe Sets'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#C41E3A] text-white'
                    : 'bg-[#16080C] text-[#F5EDE7]/60 hover:text-white border border-[#F5EDE7]/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Grid */}
          <div className="mt-6 max-h-[60vh] overflow-y-auto space-y-4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 text-[#F5EDE7]/40">
                <p className="font-serif text-xl">No lipsticks found matching "{query}".</p>
                <p className="text-xs mt-1">Try searching for "Velvet", "Red", "Nude", or "Berry".</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center space-x-4 p-3 rounded-2xl glass-card border border-[#F5EDE7]/5 hover:border-[#D4AF37]/30 transition-all"
                  >
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-xl bg-[#16080C]"
                    />
                    <div className="flex-grow">
                      <span className="text-[10px] text-[#E5C378] uppercase tracking-widest">
                        {product.category}
                      </span>
                      <h5 className="font-serif text-base text-[#F5EDE7] line-clamp-1">
                        {product.name}
                      </h5>
                      <p className="text-xs text-[#F5EDE7]/80 font-light">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="flex flex-col space-y-1">
                      <button
                        onClick={() => {
                          setActiveProductModal(product);
                          setIsSearchOpen(false);
                        }}
                        className="p-1.5 rounded-full bg-[#16080C] text-[#F5EDE7] hover:text-[#E5C378]"
                        title="Quick View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => addToCart(product)}
                        className="p-1.5 rounded-full bg-[#C41E3A] text-white hover:bg-[#800E22]"
                        title="Add to Bag"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
