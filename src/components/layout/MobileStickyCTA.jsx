import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const MobileStickyCTA = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA only when scrolling past the Hero section (usually > 600px on mobile)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#booking');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 w-full z-40 px-4 pb-4 pt-2 md:hidden pointer-events-none"
        >
          <div className="w-full glass shadow-[0_-10px_30px_rgba(0,0,0,0.15)] rounded-2xl border border-glass-border p-3 flex items-center justify-between pointer-events-auto gap-3">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918700961196?text=Hi%20Dreamy%20Studios%2021,%20I%20would%20like%20to%20know%20the%20pricing."
              target="_blank"
              rel="noreferrer"
              className="flex-1 px-4 py-3 min-h-[44px] rounded-xl bg-warm-beige text-[#0F1115] font-semibold uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(200,169,106,0.3)] transition-all"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            
            {/* Instagram CTA */}
            <a
              href="https://www.instagram.com/dreamy.studios21?igsh=OXo0N3o0djh0ZzIx"
              target="_blank"
              rel="noreferrer"
              className="flex-1 px-4 py-3 min-h-[44px] rounded-xl bg-transparent border border-warm-beige/30 text-warm-beige font-semibold uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 hover:bg-warm-beige/10 transition-all"
            >
              <FaInstagram size={16} />
              Instagram
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileStickyCTA;
