import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ToastNotification: React.FC = () => {
  const { toastMessage } = useCart();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-8 right-8 z-[200] max-w-sm rounded-2xl glass-panel border border-[#D4AF37]/40 p-4 shadow-2xl flex items-center space-x-3 text-xs text-[#F5EDE7]"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C41E3A] text-white">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex-grow">
            <p className="font-semibold text-[#E5C378]">BLOOM Privilege</p>
            <p className="text-[#F5EDE7]/80 font-light mt-0.5">{toastMessage}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
