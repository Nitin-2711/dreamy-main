import React, { Suspense, lazy } from 'react';
import HeroSection from '../sections/Hero/HeroSection';
import StorySection from '../sections/About/StorySection';

// Lazy load sections below the fold to minimize initial JS bundle size and speed up render
const InteractiveShowcase = lazy(() => import('../sections/Experience/InteractiveShowcase'));
const ExperienceSection = lazy(() => import('../sections/Experience/ExperienceSection'));
const AmenitiesSection = lazy(() => import('../sections/Amenities/AmenitiesSection'));
const GallerySection = lazy(() => import('../sections/Gallery/GallerySection'));
const ReviewsSection = lazy(() => import('../sections/Reviews/ReviewsSection'));
const BookingSection = lazy(() => import('../sections/Booking/BookingSection'));
const ContactSection = lazy(() => import('../sections/Contact/ContactSection'));
const FooterSection = lazy(() => import('../sections/Footer/FooterSection'));

// Simple elegant minimal fallback spinner
const SectionFallback = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-5 h-5 border border-warm-beige/20 border-t-warm-beige rounded-full animate-spin" />
  </div>
);

import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Dreamy Studio | Premium Photography & Content Creator Studio</title>
        <meta name="description" content="Dreamy Studio is a premium photography and videography studio inside Galaxy Blue Sapphire Plaza, Greater Noida West. Experience an ultra modern content creator studio designed for podcasting and shoots." />
        <link rel="canonical" href="https://dreamystudios21.netlify.app/" />
      </Helmet>
      {/* Immediate render on initial load */}
      <HeroSection />
      <StorySection />
      
      {/* Dynamic lazy chunks loaded as user scrolls down */}
      <Suspense fallback={<SectionFallback />}>
        <InteractiveShowcase />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <ExperienceSection />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <AmenitiesSection />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <GallerySection />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <ReviewsSection />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <BookingSection />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <FooterSection />
      </Suspense>
    </>
  );
};

export default Home;
