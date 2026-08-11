import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { CartProvider } from './context/CartContext';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BloomStory } from './components/BloomStory';
import { Rose3DExperience } from './components/Rose3DExperience';
import { FeaturedProducts } from './components/FeaturedProducts';
import { LipstickCollection } from './components/LipstickCollection';
import { ProductShowcase } from './components/ProductShowcase';
import { EngravingStudio } from './components/EngravingStudio';
import { IngredientsSection } from './components/IngredientsSection';
import { EditorialGallery } from './components/EditorialGallery';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { VirtualTryOn } from './components/VirtualTryOn';
import { ShadeQuiz } from './components/ShadeQuiz';
import { SearchModal } from './components/SearchModal';
import { ToastNotification } from './components/ToastNotification';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <CartProvider>
      <div className="relative min-h-screen bg-[#080506] text-[#F5EDE7]">
        {/* Loading Entrance */}
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

        {/* Custom Luxury Cursor Handler */}
        <CustomCursor />

        {/* Floating Glass Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* Section 3 & 4: Hero Visual with Rose Blooming Video */}
          <Hero />

          {/* Section 5: Bloom Story */}
          <BloomStory />

          {/* Section 6: Dedicated 3D Rose Depth & Light Canvas */}
          <Rose3DExperience />

          {/* Section 7: 20 Featured Lipsticks Collection */}
          <FeaturedProducts />

          {/* Section 8: Lipstick Collection with Interactive Shades */}
          <LipstickCollection />

          {/* Section 9: 3D Interactive Product Showcase */}
          <ProductShowcase />

          {/* Advanced Section 9.5: Atelier Privé 3D Gold Engraving Studio */}
          <div id="engraving-studio">
            <EngravingStudio />
          </div>

          {/* Section 10: Ingredients & Botanical Philosophy */}
          <IngredientsSection />

          {/* Section 11: Asymmetric Editorial Gallery */}
          <EditorialGallery />

          {/* Section 12: Call To Action */}
          <CTASection />
        </main>

        {/* Section 13: Footer */}
        <Footer />

        {/* Slide-over Cart Drawer */}
        <CartDrawer />

        {/* Quick View Product Modal */}
        <ProductModal />

        {/* Advanced Virtual Try-On Mirror */}
        <VirtualTryOn />

        {/* Advanced AI Shade Matchmaker Quiz */}
        <ShadeQuiz />

        {/* Advanced Live Search Modal */}
        <SearchModal />

        {/* Toast Privilege Notifications */}
        <ToastNotification />
      </div>
    </CartProvider>
  );
};
