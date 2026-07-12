import React from 'react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-theme-bg border-t border-glass-border pt-20 pb-12 z-10 transition-colors duration-700">
      {/* Background Subtle Gradient (Optimized GPU radial-gradient) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div 
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(200, 169, 106, 0.05) 0%, transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Intro */}
          <div className="space-y-4 md:col-span-2">
            <span className="font-heading text-xl tracking-[0.25em] text-theme-text font-medium block">
              DREAMY STUDIO
            </span>
            <p className="text-theme-text-secondary text-sm max-w-sm font-normal leading-relaxed">
              A handcrafted luxury high-rise escape inside Galaxy Blue Sapphire Plaza. Designed for creators, dreamers, and refined urban living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-warm-beige font-mono mb-6 font-semibold">Discover</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#showcase" 
                  onClick={(e) => handleScrollTo(e, '#showcase')}
                  className="text-sm text-theme-text-secondary hover:text-warm-beige transition-colors font-medium"
                >
                  The Space
                </a>
              </li>
              <li>
                <a 
                  href="#amenities" 
                  onClick={(e) => handleScrollTo(e, '#amenities')}
                  className="text-sm text-theme-text-secondary hover:text-warm-beige transition-colors font-medium"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  onClick={(e) => handleScrollTo(e, '#gallery')}
                  className="text-sm text-theme-text-secondary hover:text-warm-beige transition-colors font-medium"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  onClick={(e) => handleScrollTo(e, '#experience')}
                  className="text-sm text-theme-text-secondary hover:text-warm-beige transition-colors font-medium"
                >
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Location details */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-warm-beige font-mono mb-6 font-semibold">Location</h4>
            <address className="not-italic text-sm text-theme-text-secondary leading-relaxed font-normal space-y-2">
              <p className="font-medium text-theme-text">Dreamy Studio</p>
              <p>Galaxy Blue Sapphire Plaza</p>
              <p>Greater Noida West</p>
              <p className="text-xs text-warm-beige/70 font-mono pt-1">Nearest Metro: Noida Sector 52</p>
            </address>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="border-t border-glass-border/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-theme-text-secondary font-mono tracking-wider gap-4">
          <p>© {currentYear} Dreamy Studio. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/dreamy.studios21?igsh=OXo0N3o0djh0ZzIx" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-warm-beige transition-colors flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
            <a href="#" className="hover:text-warm-beige transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-warm-beige transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
