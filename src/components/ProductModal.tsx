import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ProductShade } from '../types';

export const ProductModal: React.FC = () => {
  const { activeProductModal, setActiveProductModal, addToCart } = useCart();
  const product = activeProductModal;

  const [selectedShade, setSelectedShade] = useState<ProductShade | undefined>(
    product?.shades?.[0]
  );
  const [selectedImage, setSelectedImage] = useState<string>(product?.mainImage || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const currentDisplayImage = selectedShade?.productImage || selectedImage || product.mainImage;

  const handleAdd = () => {
    addToCart(product, selectedShade, quantity);
    setActiveProductModal(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveProductModal(null)}
          className="fixed inset-0 bg-[#080506]/85 backdrop-blur-lg"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl rounded-3xl bg-[#080506] border border-[#F5EDE7]/10 glass-panel shadow-2xl overflow-hidden my-8"
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveProductModal(null)}
            className="absolute top-6 right-6 z-20 p-2 rounded-full bg-[#16080C] text-[#F5EDE7]/60 hover:text-white border border-[#F5EDE7]/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-10">
            {/* Image Preview Side */}
            <div className="md:col-span-6 flex flex-col items-center">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#16080C] border border-[#F5EDE7]/10 mb-4">
                <img
                  src={currentDisplayImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedImage(product.mainImage)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border ${
                    selectedImage === product.mainImage ? 'border-[#D4AF37]' : 'border-[#F5EDE7]/10'
                  }`}
                >
                  <img src={product.mainImage} alt="Main view" className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => setSelectedImage(product.hoverImage)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border ${
                    selectedImage === product.hoverImage ? 'border-[#D4AF37]' : 'border-[#F5EDE7]/10'
                  }`}
                >
                  <img src={product.hoverImage} alt="Model wearing" className="w-full h-full object-cover" />
                </button>
              </div>
            </div>

            {/* Product Details Side */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#E5C378] font-medium">
                  {product.category}
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#F5EDE7] mt-1">
                  {product.name}
                </h3>

                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[#F5EDE7]/60">({product.reviewsCount} reviews)</span>
                </div>

                <div className="mt-4 font-serif text-3xl text-[#F5EDE7] font-light">
                  ₹{product.price.toLocaleString('en-IN')}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#F5EDE7]/70 font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Shades Picker if available */}
                {product.shades && product.shades.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-[#F5EDE7]/10">
                    <label className="text-xs uppercase tracking-widest text-[#E5C378] font-medium block mb-2">
                      Shade: {selectedShade?.name}
                    </label>
                    <div className="flex space-x-3">
                      {product.shades.map((shade) => (
                        <button
                          key={shade.id}
                          onClick={() => setSelectedShade(shade)}
                          className={`w-8 h-8 rounded-full transition-transform ${
                            selectedShade?.id === shade.id
                              ? 'scale-110 ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-[#080506]'
                              : 'hover:scale-105'
                          }`}
                          style={{ backgroundColor: shade.hex }}
                          title={shade.name}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Formula details list */}
                <div className="mt-6 space-y-2">
                  {product.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-[#F5EDE7]/70">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity & CTA */}
              <div className="mt-8 pt-6 border-t border-[#F5EDE7]/10 flex items-center space-x-4">
                <div className="flex items-center space-x-3 border border-[#F5EDE7]/20 rounded-full px-4 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-[#F5EDE7]/60 hover:text-white"
                  >
                    -
                  </button>
                  <span className="text-xs font-semibold px-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-[#F5EDE7]/60 hover:text-white"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-grow rounded-full bg-gradient-to-r from-[#800E22] via-[#C41E3A] to-[#D4AF37] py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Bag</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
