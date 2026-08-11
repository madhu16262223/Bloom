import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsFinished(true), 300);
          setTimeout(onComplete, 900);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#080506] px-4"
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-radial-gradient from-[#5A0B18]/20 via-[#16080C]/40 to-[#080506] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Rose Motif Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#16080C]/80"
            >
              <span className="text-2xl text-[#D4AF37]">🌹</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl font-light tracking-[0.25em] text-[#F5EDE7] uppercase"
            >
              BLOOM
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-3 font-serif italic text-lg md:text-xl tracking-wider text-[#E5C378]"
            >
              Beauty in every bloom.
            </motion.p>

            {/* Progress Bar */}
            <div className="mt-10 w-48 overflow-hidden rounded-full bg-[#16080C] p-0.5 border border-[#F5EDE7]/10">
              <motion.div
                className="h-1 rounded-full bg-gradient-to-r from-[#800E22] via-[#C41E3A] to-[#D4AF37]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <span className="mt-3 text-xs tracking-widest text-[#F5EDE7]/40 uppercase">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
