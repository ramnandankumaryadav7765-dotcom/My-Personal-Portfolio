import React, { useState } from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactModal from './components/ContactModal';

// Set SHOW_MARQUEE_SECTION to false if you prefer the portfolio with the Marquee section completely removed.
// When true, it displays the 100% personalized developer stack & craft showcase.
const SHOW_MARQUEE_SECTION = true;

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main
      className="bg-[#0C0C0C] text-[#D7E2EA] font-kanit min-h-screen w-full relative"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection onOpenContact={() => setIsContactOpen(true)} />
      {SHOW_MARQUEE_SECTION && <MarqueeSection />}
      <AboutSection onOpenContact={() => setIsContactOpen(true)} />
      <ServicesSection />
      <ProjectsSection />

      {/* Workable Contact Modal with email copy, direct Gmail link, and socials */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
};

export default App;
