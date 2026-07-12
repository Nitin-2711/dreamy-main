import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative bg-theme-bg overflow-hidden flex justify-center">
      {/* Background Glow (Optimized GPU radial-gradient) */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div 
          className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(200, 169, 106, 0.08) 0%, transparent 70%)' }}
        />
      </div>

      <motion.div 
        className="relative z-10 glass-card p-10 md:p-16 max-w-2xl w-[90%] md:w-full text-center border-warm-beige/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-warm-beige text-xs tracking-[0.3em] uppercase mb-4 block">Reserve The Studio</span>
        <h2 className="font-heading text-4xl md:text-5xl text-theme-text mb-6">
          Ready to <span className="italic text-warm-beige">Experience?</span>
        </h2>
        <p className="text-theme-text-secondary mb-12 font-normal max-w-md mx-auto leading-relaxed">
          Secure your dates now or reach out to us for collaborations and pricing. Your premium creative space awaits.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <a 
            href="https://wa.me/918700961196?text=Hi%20Dreamy%20Studios%2021,%20I%20would%20like%20to%20know%20the%20pricing." 
            target="_blank" 
            rel="noreferrer" 
            className="group relative w-full sm:w-auto px-8 md:px-10 py-4 bg-warm-beige text-[#0F1115] overflow-hidden rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,169,106,0.4)] flex items-center justify-center gap-3"
          >
            <MessageCircle size={18} />
            <span className="uppercase tracking-widest text-xs font-semibold">Book via WhatsApp</span>
          </a>
          
          <a 
            href="tel:+918700961196" 
            className="group relative w-full sm:w-auto px-8 md:px-10 py-4 bg-transparent border border-warm-beige/30 hover:border-warm-beige text-warm-beige rounded-full font-medium transition-all duration-300 hover:bg-warm-beige/10 flex items-center justify-center gap-3"
          >
            <Phone size={18} />
            <span className="uppercase tracking-widest text-xs font-semibold">Contact Now</span>
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-glass-border flex flex-wrap justify-center gap-8 md:gap-12">
          <a href="mailto:contact@dreamystudios.com" className="text-theme-text/50 hover:text-warm-beige transition-colors duration-300 flex items-center gap-2 text-sm font-medium">
            <Mail size={20} />
            <span className="hidden sm:inline">Email Us</span>
          </a>
          <a href="https://maps.google.com/?q=Galaxy+Blue+Sapphire+Plaza" target="_blank" rel="noreferrer" className="text-theme-text/50 hover:text-warm-beige transition-colors duration-300 flex items-center gap-2 text-sm font-medium">
            <MapPin size={20} />
            <span className="hidden sm:inline">Get Directions</span>
          </a>
          <a href="https://www.instagram.com/dreamy.studios21?igsh=OXo0N3o0djh0ZzIx" target="_blank" rel="noreferrer" className="text-theme-text/50 hover:text-warm-beige transition-colors duration-300 flex items-center gap-2 text-sm font-medium">
            <FaInstagram size={20} />
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
