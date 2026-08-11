import React, { useState } from 'react';
import { ArrowRight, Instagram, Facebook, Twitter, PinIcon as Pinterest } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative w-full bg-[#080506] pt-24 pb-12 border-t border-[#F5EDE7]/10 text-[#F5EDE7]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 border-b border-[#F5EDE7]/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#" className="font-serif text-4xl font-light tracking-[0.25em] text-[#F5EDE7]">
                BLOOM
              </a>
              <p className="mt-3 font-serif italic text-lg text-[#E5C378]">
                Beauty in every bloom.
              </p>
              <p className="mt-4 text-xs text-[#F5EDE7]/60 font-light max-w-sm leading-relaxed">
                Haute botanical beauty brand inspired by wild roses, micro-fine mineral pigments, and timeless romantic aesthetics.
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <span className="text-xs uppercase tracking-widest text-[#E5C378] font-medium block mb-3">
                Join The Bloom Journal
              </span>
              {subscribed ? (
                <p className="text-xs text-[#E5C378] italic">
                  Thank you for subscribing to Bloom privileges.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex items-center max-w-md border-b border-[#F5EDE7]/30 pb-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="w-full bg-transparent text-xs text-[#F5EDE7] placeholder-[#F5EDE7]/40 focus:outline-none"
                  />
                  <button type="submit" aria-label="Subscribe" className="text-[#E5C378] hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#E5C378] font-medium mb-4">
                Explore
              </h4>
              <ul className="space-y-3 text-xs text-[#F5EDE7]/70 font-light">
                <li><a href="#products" className="hover:text-[#E5C378] transition-colors">Shop All</a></li>
                <li><a href="#lipstick-collection" className="hover:text-[#E5C378] transition-colors">Lipstick Shades</a></li>
                <li><a href="#bloom-story" className="hover:text-[#E5C378] transition-colors">Our Story</a></li>
                <li><a href="#ingredients" className="hover:text-[#E5C378] transition-colors">Botanicals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#E5C378] font-medium mb-4">
                Legal
              </h4>
              <ul className="space-y-3 text-xs text-[#F5EDE7]/70 font-light">
                <li><a href="#" className="hover:text-[#E5C378] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#E5C378] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#E5C378] transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-[#E5C378] transition-colors">Client Care</a></li>
              </ul>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#E5C378] font-medium mb-4">
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                <a href="#" aria-label="Instagram" className="p-3 rounded-full glass-panel border border-[#F5EDE7]/10 text-[#F5EDE7]/80 hover:text-[#E5C378] hover:border-[#D4AF37] transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Facebook" className="p-3 rounded-full glass-panel border border-[#F5EDE7]/10 text-[#F5EDE7]/80 hover:text-[#E5C378] hover:border-[#D4AF37] transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Twitter" className="p-3 rounded-full glass-panel border border-[#F5EDE7]/10 text-[#F5EDE7]/80 hover:text-[#E5C378] hover:border-[#D4AF37] transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Pinterest" className="p-3 rounded-full glass-panel border border-[#F5EDE7]/10 text-[#F5EDE7]/80 hover:text-[#E5C378] hover:border-[#D4AF37] transition-all">
                  <Pinterest className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-8 md:mt-0 text-xs text-[#F5EDE7]/40">
              <p>BLOOM Luxury Cosmetics Inc. Paris • New York</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5EDE7]/40 font-light">
          <p>© {new Date().getFullYear()} BLOOM Cosmetics. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed for Haute E-Commerce Experience</p>
        </div>
      </div>
    </footer>
  );
};
