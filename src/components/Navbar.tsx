import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Sparkles, Sliders, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen, setIsSearchOpen, setIsTryOnOpen, setIsQuizOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Lipsticks', href: '#products' },
    { name: 'Shade Selector', href: '#lipstick-collection' },
    { name: '3D Engraving', href: '#engraving-studio' },
    { name: 'Our Story', href: '#bloom-story' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-header py-4 shadow-2xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-2xl md:text-3xl font-light tracking-[0.25em] text-[#F5EDE7] hover:text-[#E5C378] transition-colors"
          >
            BLOOM
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-[#F5EDE7]/80 hover:text-[#E5C378] transition-colors duration-300 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Advanced Quick Trigger Buttons */}
            <button
              onClick={() => setIsTryOnOpen(true)}
              className="px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#16080C]/80 text-[11px] uppercase tracking-widest text-[#E5C378] hover:bg-[#C41E3A] hover:border-[#C41E3A] hover:text-white transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Virtual Try-On</span>
            </button>

            <button
              onClick={() => setIsQuizOpen(true)}
              className="px-3.5 py-1.5 rounded-full border border-[#F5EDE7]/20 bg-[#16080C]/50 text-[11px] uppercase tracking-widest text-[#F5EDE7]/80 hover:border-[#D4AF37] hover:text-[#E5C378] transition-all flex items-center space-x-1.5"
            >
              <Sliders className="w-3.5 h-3.5 text-[#E5C378]" />
              <span>Shade Quiz</span>
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-5 md:space-x-7">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="text-[#F5EDE7]/80 hover:text-[#E5C378] transition-colors p-1"
              title="Search Lipsticks"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Cart"
              className="relative text-[#F5EDE7]/80 hover:text-[#E5C378] transition-colors p-1"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#C41E3A] text-[10px] font-bold text-white shadow-lg">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#F5EDE7] p-1 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#080506]/95 backdrop-blur-2xl flex flex-col justify-between px-8 pt-32 pb-12 lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="font-serif text-3xl font-light text-[#F5EDE7] hover:text-[#E5C378] transition-colors tracking-wide"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="pt-4 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsTryOnOpen(true);
                  }}
                  className="w-full py-3 rounded-full border border-[#D4AF37] bg-[#16080C] text-xs uppercase tracking-widest text-[#E5C378] flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch Virtual Try-On</span>
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsQuizOpen(true);
                  }}
                  className="w-full py-3 rounded-full border border-[#F5EDE7]/20 bg-[#16080C]/50 text-xs uppercase tracking-widest text-[#F5EDE7] flex items-center justify-center space-x-2"
                >
                  <Sliders className="w-4 h-4 text-[#E5C378]" />
                  <span>Take Shade Matchmaker Quiz</span>
                </button>
              </div>
            </div>

            <div className="pt-8 border-t border-[#F5EDE7]/10 flex flex-col space-y-4">
              <p className="text-xs uppercase tracking-widest text-[#E5C378]/80">
                Haute Botanique Lipstick Artistry.
              </p>
              <div className="flex space-x-6 text-sm text-[#F5EDE7]/60">
                <a href="#cart" onClick={() => { setIsMobileMenuOpen(false); setIsCartOpen(true); }}>
                  Bag ({totalItems})
                </a>
                <span>•</span>
                <a href="#">Client Care</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
