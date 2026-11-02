import React from 'react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import ImageWithFallback from '../components/ImageWithFallback';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between bg-[#0C0C0C] select-none"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Upper Section: Navbar + Hero Heading */}
      <div className="w-full flex flex-col z-20">
        {/* Navbar */}
        <FadeIn delay={0} y={-20} className="w-full">
          <nav className="w-full flex items-center justify-between px-6 md:px-10 pt-5 md:pt-7">
            <a
              href="#about"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              About
            </a>
            <a
              href="#what-i-do"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              What I Do
            </a>
            <a
              href="#projects"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              Projects
            </a>
            <a
              href="mailto:ramnandankumaryadav7765@gmail.com"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Contact
            </a>
          </nav>
        </FadeIn>

        {/* Hero Heading: Kept upper so it is fully visible above the portrait */}
        <div className="w-full overflow-hidden mt-3 sm:mt-4 md:mt-5">
          <FadeIn delay={0.15} y={30}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[clamp(2.2rem,8.5vw,11.5rem)] select-none">
              Hi, i'm Ramnandan
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* 2. Hero Portrait (Centered and anchored towards the bottom so it never covers the heading) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 w-[260px] sm:w-[340px] md:w-[410px] lg:w-[470px] max-h-[55vh] sm:max-h-[58vh] md:max-h-[62vh] pointer-events-auto flex justify-center items-end">
        <FadeIn delay={0.4} y={30} className="w-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center"
          >
            <div className="relative w-full aspect-[4/5] max-h-[55vh] sm:max-h-[58vh] md:max-h-[62vh] rounded-[36px] sm:rounded-[44px] md:rounded-[50px] overflow-hidden border border-[#D7E2EA]/15 shadow-2xl bg-[#14161B]">
              <ImageWithFallback
                src="/images/ramnandan-portrait.png"
                alt="Ramnandan Kumar Portrait"
                loading="eager"
                placeholderTitle="Ramnandan Kumar"
                placeholderCategory="Hero Portrait (/images/ramnandan-portrait.png)"
                className="w-full h-full object-cover object-top rounded-[36px] sm:rounded-[44px] md:rounded-[50px]"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 3. Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative pointer-events-auto">
        {/* Left Subtext */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a computer science student and aspiring software engineer driven by problem-solving, building useful products, and exploring technology
          </p>
        </FadeIn>

        {/* Right Contact Button: Workable email & contact trigger */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
