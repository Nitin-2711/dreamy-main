import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, MessageCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "The Space", href: "#showcase" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Experience", href: "#experience" }
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 backdrop-blur-xl bg-theme-bg/85 border-b border-glass-border shadow-[0_4px_30px_rgba(0,0,0,0.03)]' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center max-w-7xl">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex flex-col select-none group"
          >
            <span className={`font-heading text-lg md:text-xl tracking-[0.25em] font-medium group-hover:text-glow transition-all duration-300 ${
              isScrolled ? 'text-theme-text' : 'text-white'
            }`}>
              DREAMY STUDIO
            </span>
            <span className="text-[9px] font-mono tracking-[0.35em] text-warm-beige uppercase">
              Galaxy Blue Sapphire
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`text-xs uppercase tracking-widest transition-colors duration-300 font-semibold relative py-1 group ${
                  isScrolled 
                    ? 'text-theme-text-secondary hover:text-warm-beige' 
                    : 'text-white/80 hover:text-warm-beige'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-warm-beige transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions & Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Elegant Theme Switcher */}
            <button
              onClick={toggleTheme}
              className={`w-11 h-11 rounded-full border flex items-center justify-center hover:border-warm-beige/50 hover:bg-warm-beige/5 transition-all duration-300 cursor-pointer ${
                isScrolled ? 'border-glass-border text-theme-text' : 'border-white/20 text-white'
              }`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <span className="text-sm">☀️</span>
              ) : (
                <span className="text-sm">🌙</span>
              )}
            </button>

            <a
              href="#booking"
              onClick={(e) => handleScrollTo(e, '#booking')}
              className={`px-6 py-2.5 rounded-full border transition-all duration-500 flex items-center gap-2 group cursor-pointer ${
                isScrolled 
                  ? 'border-warm-beige/30 bg-warm-beige/5 text-theme-text hover:bg-warm-beige hover:text-theme-bg hover:shadow-[0_0_20px_rgba(200,169,106,0.25)]' 
                  : 'border-white/30 bg-white/5 text-white hover:bg-warm-beige hover:text-theme-bg hover:shadow-[0_0_20px_rgba(200,169,106,0.25)]'
              }`}
            >
              <Calendar size={14} className="group-hover:scale-110 transition-transform" />
              <span className="uppercase tracking-widest text-[10px] font-bold">Get Pricing</span>
            </a>
            
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/dreamy.studios21?igsh=OXo0N3o0djh0ZzIx"
              target="_blank"
              rel="noreferrer"
              className={`w-11 h-11 rounded-full border flex items-center justify-center hover:border-warm-beige/50 hover:bg-warm-beige/5 transition-all duration-300 cursor-pointer ${
                isScrolled ? 'border-glass-border text-theme-text' : 'border-white/20 text-white'
              }`}
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'border-glass-border text-theme-text' : 'border-white/20 text-white'
              }`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'border-glass-border text-theme-text' : 'border-white/20 text-white'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-theme-bg/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 pt-28 overflow-y-auto"
          >
            {/* Background Ambient Spheres for Luxury feel */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
              <div className="absolute top-[20%] left-[-20%] w-[300px] h-[300px] rounded-full bg-warm-beige/10 blur-[80px]"></div>
              <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-warm-beige/5 blur-[100px]"></div>
            </div>

            {/* Nav Links Container */}
            <div className="flex flex-col gap-6 relative z-10">
              <span className="text-[10px] uppercase tracking-[0.4em] text-warm-beige font-mono mb-2">Navigation Menu</span>
              {menuItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="font-heading text-2xl sm:text-3xl text-theme-text hover:text-warm-beige transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Bottom Actions */}
            <div className="flex flex-col gap-3 relative z-10 mt-8 mb-6">
              <a
                href="#booking"
                onClick={(e) => handleScrollTo(e, '#booking')}
                className="w-full py-4 rounded-xl bg-warm-beige text-[#0F1115] font-semibold text-center uppercase tracking-widest text-xs shadow-lg hover:shadow-warm-beige/30 transition-all flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                Get Pricing
              </a>
              
              <a
                href="https://wa.me/918700961196?text=Hi%20Dreamy%20Studios%2021,%20I%20would%20like%20to%20know%20the%20pricing."
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl border border-glass-border text-theme-text font-semibold text-center uppercase tracking-widest text-xs hover:bg-warm-beige/5 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                Book via WhatsApp
              </a>
              
              <a
                href="https://www.instagram.com/dreamy.studios21?igsh=OXo0N3o0djh0ZzIx"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl border border-glass-border text-theme-text font-semibold text-center uppercase tracking-widest text-xs hover:bg-warm-beige/5 transition-all flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>

              <div className="text-[10px] text-center text-theme-text-secondary font-mono tracking-widest mt-6 uppercase">
                Dreamy Studio • Galaxy Blue Sapphire
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default Header;
