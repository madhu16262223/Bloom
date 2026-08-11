import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 15;
      const y = (clientY / innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[105vh] w-full overflow-hidden bg-[#080506] flex items-center justify-center pt-32 md:pt-40 pb-20"
    >
      {/* 1. Seamless Atmospheric Ambient Radial Light Background (Left & Center) */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-1000 ease-out z-0"
        style={{
          transform: `translate3d(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px, 0)`,
        }}
      >
        {/* Left Crimson Light Glow */}
        <div className="absolute top-1/3 left-0 w-[650px] h-[650px] rounded-full bg-radial-gradient from-[#800E22]/45 via-[#300912]/25 to-transparent blur-[140px] animate-pulse-glow" />
        
        {/* Center Golden Warm Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] rounded-full bg-radial-gradient from-[#C41E3A]/25 via-[#5A0B18]/15 to-transparent blur-[170px]" />
      </div>

      {/* 2. Embedded Hero Rose Video Player - 100% Seamless Screen Blend with Zero Box Edges */}
      <div className="absolute inset-0 z-1 flex items-center justify-end pointer-events-none overflow-hidden">
        <div
          className="relative w-full md:w-[75%] h-[95vh] transition-transform duration-1000 ease-out hero-video-feather"
          style={{
            transform: `translate3d(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px, 0)`,
          }}
        >
          {/* Radial Vignette Mask to Soften All Video Borders */}
          <div className="absolute inset-0 z-20 vignette-overlay pointer-events-none" />

          {/* Bottom Right Watermark Mask */}
          <div className="absolute bottom-0 right-0 w-40 h-28 bg-gradient-to-tl from-[#080506] via-[#080506]/95 to-transparent z-30 pointer-events-none" />

          {/* Scaled Video Element with Mix-Blend-Mode Lighten */}
          <div className="w-full h-full overflow-hidden scale-[1.2] -translate-x-[2%] -translate-y-[2%]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center video-blend-screen opacity-95 filter contrast-110 brightness-105"
            >
              <source src="/hero1.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
      </div>

      {/* 3. Floating Micro Golden Sparkle Particles */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#E5C378] animate-float blur-[0.5px]" />
        <div className="absolute top-2/3 left-1/6 w-2.5 h-2.5 rounded-full bg-[#C41E3A] animate-float delay-1000 blur-[1px]" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-[#FAFAF7] animate-float delay-2000" />
      </div>

      {/* 4. Hero Content Overlay */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 md:pt-16">
        <div className="md:col-span-8 lg:col-span-7 flex flex-col items-start">
          {/* Brand Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#16080C]/80 backdrop-blur-md mb-6 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-[#C41E3A] animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.25em] text-[#E5C378] uppercase">
              Haute Lipstick Collection 2026
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-6xl sm:text-7xl lg:text-9xl font-light tracking-tight text-[#F5EDE7] leading-[0.95] mb-6 drop-shadow-2xl"
          >
            BLOOM
          </motion.h1>

          {/* Subtitle Text */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#F0E5DF] font-light leading-snug max-w-xl mb-4 drop-shadow-lg"
          >
            Beauty, in its most natural form.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm md:text-base tracking-widest text-[#F5EDE7]/90 uppercase font-light mb-10 max-w-md"
          >
            Where botanical rose art inspires haute lipsticks.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto"
          >
            <a
              href="#products"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#800E22] via-[#C41E3A] to-[#D4AF37] p-[1px] shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center rounded-full bg-[#16080C] px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FAFAF7] transition-all duration-300 group-hover:bg-transparent">
                <span>Explore 20 Lipsticks</span>
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </a>

            <a
              href="#lipstick-collection"
              className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#16080C]/60 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5EDE7] backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37] hover:text-[#E5C378] hover:bg-[#300912]/80"
            >
              Shade Selector
            </a>
          </motion.div>
        </div>
      </div>

      {/* 5. Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1, delay: 1.4, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#E5C378] mb-2 font-medium">
          Scroll To Explore
        </span>
        <div className="w-5 h-8 rounded-full border border-[#D4AF37]/40 flex items-start justify-center p-1 bg-[#16080C]/60 backdrop-blur-sm">
          <div className="w-1 h-2 rounded-full bg-[#E5C378] animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};
