import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal, totalItems, clearCart } = useCart();
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const freeShippingThreshold = 2999;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleCheckout = () => {
    setIsCheckedOut(true);
    setTimeout(() => {
      clearCart();
      setIsCheckedOut(false);
      setIsCartOpen(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-[100] bg-[#080506]/80 backdrop-blur-md"
          />

          {/* Slide-over Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[101] w-full max-w-md bg-[#080506] border-l border-[#F5EDE7]/10 glass-panel shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#F5EDE7]/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-5 h-5 text-[#E5C378]" />
                <h3 className="font-serif text-2xl font-light text-[#F5EDE7]">Your Shopping Bag</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#C41E3A] text-white font-bold">
                  {totalItems}
                </span>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="text-[#F5EDE7]/60 hover:text-[#F5EDE7] p-1 transition-colors"
                aria-label="Close Cart"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Free Shipping Bar in INR */}
            <div className="bg-[#16080C] px-6 py-3 border-b border-[#F5EDE7]/5">
              <div className="flex items-center justify-between text-xs text-[#F5EDE7]/70 mb-1.5 font-light">
                {subtotal >= freeShippingThreshold ? (
                  <span className="text-[#E5C378] font-medium">✨ You unlocked Complimentary Express Shipping!</span>
                ) : (
                  <span>Add ₹{(freeShippingThreshold - subtotal).toLocaleString('en-IN')} more for Free Express Shipping</span>
                )}
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#080506] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#800E22] via-[#C41E3A] to-[#D4AF37] transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-[#F5EDE7]/50">
                  <span className="text-4xl mb-3">💄</span>
                  <p className="font-serif text-xl font-light text-[#F5EDE7]">Your bag is currently empty.</p>
                  <p className="text-xs mt-1">Discover our haute lipsticks and velvet collections.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedShade?.id || 'default'}`}
                    className="flex items-center space-x-4 p-3 rounded-xl glass-card border border-[#F5EDE7]/5"
                  >
                    <img
                      src={item.selectedShade?.productImage || item.product.mainImage}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg bg-[#16080C]"
                    />

                    <div className="flex-grow">
                      <h4 className="font-serif text-base font-normal text-[#F5EDE7] line-clamp-1">
                        {item.product.name}
                      </h4>
                      {item.selectedShade && (
                        <p className="text-[11px] text-[#E5C378] font-medium">
                          Shade: {item.selectedShade.name}
                        </p>
                      )}
                      <p className="text-xs text-[#F5EDE7]/80 font-light mt-0.5">
                        ₹{item.product.price.toLocaleString('en-IN')}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedShade?.id)}
                          className="p-1 rounded bg-[#080506] text-[#F5EDE7]/70 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedShade?.id)}
                          className="p-1 rounded bg-[#080506] text-[#F5EDE7]/70 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id, item.selectedShade?.id)}
                      className="text-[#F5EDE7]/40 hover:text-[#C41E3A] p-2 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#F5EDE7]/10 bg-[#16080C]/80">
                <div className="flex items-center justify-between text-sm text-[#F5EDE7]/70 mb-2">
                  <span>Subtotal</span>
                  <span className="font-serif text-lg font-light text-[#F5EDE7]">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#F5EDE7]/50 mb-6">
                  <span>GST & Shipping</span>
                  <span>Calculated at Checkout</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckedOut}
                  className="w-full rounded-full bg-gradient-to-r from-[#800E22] via-[#C41E3A] to-[#D4AF37] py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  {isCheckedOut ? (
                    <span className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Order Confirmed!</span>
                    </span>
                  ) : (
                    `Proceed To Checkout • ₹${subtotal.toLocaleString('en-IN')}`
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
