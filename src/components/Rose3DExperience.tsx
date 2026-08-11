import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RoseCanvas3D } from './3d/RoseCanvas3D';
import { Sparkles, RotateCw } from 'lucide-react';

export const Rose3DExperience: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [casingColor, setCasingColor] = useState('#16080C');
  const [lipstickColor, setLipstickColor] = useState('#800E22');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const casingOptions = [
    { name: 'Obsidian Black', hex: '#16080C' },
    { name: 'Brushed Gold', hex: '#D4AF37' },
    { name: 'Rose Gold', hex: '#E8A3B8' },
  ];

  const shadeOptions = [
    { name: 'Crimson Bloom', hex: '#800E22' },
    { name: 'Dusk Berry', hex: '#3B0916' },
    { name: 'Nudité Pink', hex: '#C48B7A' },
    { name: 'Scarlet Empress', hex: '#B81D35' },
  ];

  return (
    <section className="relative w-full min-h-[90vh] bg-[#080506] py-24 overflow-hidden border-t border-[#F5EDE7]/5 flex flex-col justify-center">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full bg-radial-gradient from-[#5A0B18]/30 via-[#300912]/20 to-transparent blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.3em] uppercase text-[#E5C378]"
          >
            Real-Time 3D WebGL Atelier
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#F5EDE7] tracking-tight mt-2"
          >
            3D Lipstick Studio.
          </motion.h2>
          <p className="mt-3 text-sm sm:text-base text-[#F5EDE7]/60 font-light max-w-md mx-auto">
            Interact with our 3D metallic lipstick vessel. Move cursor to tilt perspective and customize 3D casing & lipstick shade live.
          </p>
        </div>

        {/* 3D WebGL Canvas Container */}
        <div className="relative w-full h-[550px] md:h-[650px] rounded-3xl overflow-hidden glass-panel border border-[#F5EDE7]/10 flex items-center justify-center shadow-2xl">
          {/* Canvas Component */}
          <RoseCanvas3D
            mousePos={mousePos}
            casingColor={casingColor}
            lipstickColor={lipstickColor}
          />

          {/* Controls Bar Overlay */}
          <div className="absolute bottom-6 inset-x-6 z-20 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-[#D4AF37]/30">
            {/* Casing Color Selector */}
            <div className="flex items-center space-x-3">
              <span className="text-[11px] uppercase tracking-widest text-[#E5C378] font-medium">
                Casing Finish:
              </span>
              <div className="flex space-x-2">
                {casingOptions.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setCasingColor(c.hex)}
                    className={`w-6 h-6 rounded-full border transition-transform ${
                      casingColor === c.hex
                        ? 'scale-125 border-[#D4AF37] ring-2 ring-[#D4AF37]/50'
                        : 'border-[#F5EDE7]/20 hover:scale-110'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Instruction Badge */}
            <div className="hidden md:flex items-center space-x-2 text-[11px] text-[#F5EDE7]/70 uppercase tracking-widest">
              <RotateCw className="w-3.5 h-3.5 text-[#E5C378] animate-spin-slow" />
              <span>Move mouse to tilt 3D reflections</span>
            </div>

            {/* Bullet Shade Selector */}
            <div className="flex items-center space-x-3">
              <span className="text-[11px] uppercase tracking-widest text-[#E5C378] font-medium">
                Bullet Shade:
              </span>
              <div className="flex space-x-2">
                {shadeOptions.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => setLipstickColor(s.hex)}
                    className={`w-6 h-6 rounded-full border transition-transform ${
                      lipstickColor === s.hex
                        ? 'scale-125 border-[#D4AF37] ring-2 ring-[#D4AF37]/50'
                        : 'border-[#F5EDE7]/20 hover:scale-110'
                    }`}
                    style={{ backgroundColor: s.hex }}
                    title={s.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
