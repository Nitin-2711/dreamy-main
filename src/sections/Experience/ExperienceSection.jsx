import { motion } from 'framer-motion';
import LazyImage from '../../components/ui/LazyImage';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Premium Interior",
      desc: "Deep, matte tones and luxurious textures carefully designed to serve as the perfect backdrop for professional shoots.",
      img: "/img/interior_ambiance.jpeg"
    },
    {
      title: "Natural Lighting",
      desc: "Expansive floor-to-ceiling windows flood the space with soft, directional natural light ideal for photography.",
      img: "/img/balcony_skyline_view.jpeg"
    },
    {
      title: "Clean & Comfortable",
      desc: "A pristine environment with modern air conditioning and a dedicated workspace to spark your best ideas.",
      img: "/img/the_workspace.jpeg"
    },
    {
      title: "Prime Location",
      desc: "Located centrally in Galaxy Blue Sapphire Plaza with easy parking, high-speed WiFi, and 24/7 security.",
      img: "/img/plaza_night.webp"
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 relative bg-theme-bg overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl text-theme-text">
            Why <span className="italic text-warm-beige">Choose Us</span>
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-32">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-24`}>
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card p-2">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <LazyImage 
                      src={exp.img} 
                      alt={exp.title} 
                      className="w-full h-full"
                      imageClassName="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-theme-bg/40 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="w-full md:w-1/2 space-y-4 sm:space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="text-warm-beige text-xs sm:text-sm font-mono tracking-widest">0{idx + 1}</div>
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-theme-text">{exp.title}</h3>
                <p className="text-theme-text-secondary text-sm sm:text-base md:text-lg max-w-md font-normal leading-relaxed">
                  {exp.desc}
                </p>
                <div className="pt-4">
                  <div className="w-12 h-[1px] bg-warm-beige/40"></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
