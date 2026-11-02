import React from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import AnimatedText from '../components/AnimatedText';
import { Github, Linkedin, Instagram } from 'lucide-react';

// Custom Lucide-styled LeetCode SVG icon
const LeetCodeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8l-4.5 4.5a2.12 2.12 0 0 1-3 0L5 9" />
    <path d="M9 16.5l3.5 3.5a2.12 2.12 0 0 0 3 0L20 15.5" />
    <path d="M7.5 13.5l9-9" />
  </svg>
);

const ABOUT_TEXT =
  "I'm Ramnandan Kumar, a second-year B.Tech student in Computer Science & Technology at Sage University, Indore. I'm working toward becoming a Software Engineer and Full Stack Developer, strengthening my skills in DSA, problem-solving, web development, and AI-powered applications. My first-year CGPA is 8.31, with 7.96 SGPA in Semester 1 and 8.64 SGPA in Semester 2. Beyond coding, I enjoy content creation and video editing, where I explore storytelling and visual creativity.";

const SOCIAL_ITEMS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ramnandan-kumar-028a04388/',
    icon: Linkedin,
    hoverColor: 'group-hover:text-blue-400 group-hover:border-blue-500/50',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/ramnandankumaryadav7765-dotcom',
    icon: Github,
    hoverColor: 'group-hover:text-purple-400 group-hover:border-purple-500/50',
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/Ramnandan_Kumar/',
    icon: LeetCodeIcon,
    hoverColor: 'group-hover:text-amber-400 group-hover:border-amber-500/50',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/codeinmotion1/',
    icon: Instagram,
    hoverColor: 'group-hover:text-rose-400 group-hover:border-rose-500/50',
  },
];

interface AboutSectionProps {
  onOpenContact?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      {/* Decorative 3D Corner Elements */}
      {/* 1. Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon 3D Decorative Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* 2. Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Decorative Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain select-none"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* 3. Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego 3D Decorative Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* 4. Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Decorative Group"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain select-none"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Heading: "About me" */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Paragraph */}
        <div className="w-full flex justify-center">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        {/* Gap between text block and button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>

        {/* Compact row of clickable social platforms with names below logos */}
        <FadeIn delay={0.3} y={15} className="mt-8">
          <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
            {SOCIAL_ITEMS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} Profile`}
                  className="flex flex-col items-center gap-2 group p-2 transition-transform duration-200 hover:-translate-y-1"
                >
                  <div
                    className={`w-11 h-11 rounded-full bg-[#161822] border border-[#282C3C] flex items-center justify-center text-[#D7E2EA]/75 group-hover:bg-[#1E2230] group-hover:scale-110 transition-all duration-200 ${social.hoverColor}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/70 group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
