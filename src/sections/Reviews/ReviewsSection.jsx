import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Aarav S.",
    review: "The perfect space for our fashion shoot. The lighting control and aesthetic are unmatched in Noida.",
    role: "Content Creator"
  },
  {
    name: "Priya K.",
    review: "We recorded our 5-episode podcast series here. Dead silent, highly professional, and exactly what we needed.",
    role: "Podcast Host"
  },
  {
    name: "Rohan M.",
    review: "Stunning interiors and very premium feel. It elevates every piece of content we shoot. Highly recommended.",
    role: "Videographer"
  }
];

const ReviewsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="reviews" className="py-24 relative bg-theme-bg overflow-hidden z-10 transition-colors duration-700">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-warm-beige text-xs tracking-[0.4em] uppercase mb-4 block font-semibold"
          >
            Client Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-theme-text font-medium"
          >
            Words from <span className="italic text-warm-beige text-glow">Creators</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="p-8 rounded-2xl glass-card border border-glass-border hover:border-warm-beige/30 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="text-warm-beige text-lg tracking-widest mb-6 group-hover:scale-110 transition-transform duration-500">
                ★★★★★
              </div>
              <p className="text-theme-text-secondary text-sm leading-relaxed mb-8 flex-grow font-normal">
                "{item.review}"
              </p>
              <div>
                <h4 className="text-theme-text font-medium">{item.name}</h4>
                <span className="text-xs text-warm-beige font-mono uppercase tracking-widest mt-1 block">
                  {item.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
