import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import LazyImage from '../../components/ui/LazyImage';

const GallerySection = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('interior'); // Default to interior since we have more content there
  const [selectedImg, setSelectedImg] = useState(null);

  const tabs = [
    { id: 'exterior', label: 'The Landmark Exterior' },
    { id: 'interior', label: 'The Studio Interior' }
  ];

  const galleryData = {
    exterior: [
      {
        src: "/img/plaza_environment.webp",
        title: "Premium Commercial Hub",
        tag: "Prime Location",
        desc: "A bustling high-street commercial destination perfect for urban shoots."
      },
      {
        src: "/img/plaza_entrance_lobby.webp",
        title: "Galaxy Blue Sapphire Exterior",
        tag: "Building Exterior",
        desc: "The stunning modern architecture of Galaxy Blue Sapphire Plaza."
      }
    ],
    interior: [
      {
        src: "/img/galaxy_blue_sapphire_architecture.jpeg",
        title: "Creative Lounge",
        tag: "Meeting Space",
        desc: "Open-plan lounge space seamlessly integrating comfort for team collaborations."
      },
      {
        src: "/img/the_suite.jpeg",
        title: "Lifestyle Set",
        tag: "Bedroom Setup",
        desc: "Luxurious king-size bed setup ideal for fashion and lifestyle photography."
      },
      {
        src: "/img/galaxy_blue_sapphire_night.jpeg",
        title: "Prop Kitchen",
        tag: "Culinary Set",
        desc: "Fully equipped modern kitchen setup for food styling and brand shoots."
      },
      {
        src: "/img/the_workspace.jpeg",
        title: "Client Refreshments",
        tag: "Beverage Station",
        desc: "Premium tea and coffee station to keep the creative energy flowing."
      },
      {
        src: "/img/the_lounge.jpeg",
        title: "Studio Props",
        tag: "Interior Accents",
        desc: "Elegant decorative accents adding a touch of luxury to your creative sets."
      },
      {
        src: "/img/balcony_skyline_view.jpeg",
        title: "Ambient Lighting",
        tag: "Lighting Design",
        desc: "Cozy lighting creating a relaxing and premium atmosphere for evening sessions."
      }
    ]
  };

  const activeImages = galleryData[activeTab];

  return (
    <section id="gallery" className="py-16 md:py-28 relative bg-theme-bg z-10 transition-colors duration-700">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-warm-beige text-xs tracking-[0.4em] uppercase mb-4 block font-semibold">Exquisite Showcases</span>
            <h2 className="font-heading text-3xl md:text-5xl text-theme-text">
              The <span className="italic text-warm-beige text-glow">Visual Story</span>
            </h2>
          </motion.div>

          {/* Luxury Tab Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-2 p-1.5 rounded-full border border-glass-border glass backdrop-blur-md relative overflow-x-auto hide-scrollbar w-full md:w-auto"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 md:px-6 py-2.5 md:py-3 whitespace-nowrap rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-500 cursor-pointer flex-shrink-0 ${
                  activeTab === tab.id 
                    ? 'text-[#0F1115]' 
                    : 'text-theme-text/75 hover:text-theme-text'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeGalleryTab"
                    className="absolute inset-0 bg-warm-beige rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {activeImages.map((img, idx) => (
              <motion.div 
                layout
                key={img.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative overflow-hidden rounded-2xl cursor-zoom-in group glass-card border border-glass-border aspect-[4/3]"
                onClick={() => setSelectedImg(img)}
              >
                {/* Overlay with details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-95 transition-all duration-500 z-20 flex flex-col justify-end p-6">
                  <span className="text-[9px] uppercase tracking-widest text-warm-beige font-mono mb-1">{img.tag}</span>
                  <h3 className="font-heading text-xl text-white mb-2">{img.title}</h3>
                  <p className="text-[11px] text-white/80 leading-relaxed font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {img.desc}
                  </p>
                </div>

                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full border border-white/10 z-10 text-[9px] uppercase font-mono tracking-widest text-white/90">
                  {img.tag}
                </div>

                {/* Lazy Image */}
                <LazyImage 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Preview with Details */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-theme-bg/95 backdrop-blur-2xl p-4 md:p-8 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative max-w-5xl w-full h-full flex flex-col justify-center items-center gap-6" onClick={e => e.stopPropagation()}>
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-h-[70vh] flex justify-center items-center"
              >
                <img 
                  src={selectedImg.src} 
                  alt={selectedImg.title} 
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-glass-border"
                />
              </motion.div>
              
              {/* Detailed Caption inside modal */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-2xl text-center space-y-3 px-6 select-none"
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-warm-beige font-mono font-bold block">{selectedImg.tag}</span>
                <h3 className="font-heading text-2xl md:text-3xl text-theme-text font-medium">{selectedImg.title}</h3>
                <p className="text-sm text-theme-text-secondary leading-relaxed font-normal max-w-xl mx-auto">
                  {selectedImg.desc}
                </p>
                <button 
                  onClick={() => setSelectedImg(null)}
                  className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-warm-beige hover:text-theme-text border-b border-warm-beige/30 transition-colors"
                >
                  Close Preview
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
