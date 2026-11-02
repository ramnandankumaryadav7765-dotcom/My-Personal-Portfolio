import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import ImageWithFallback from '../components/ImageWithFallback';
import { Github } from 'lucide-react';

interface ProjectData {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  githubLink?: string;
  buttonLabel?: string;
  isLiveDeployed?: boolean;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  col1Img1Alt: string;
  col1Img2Alt: string;
  col2ImgAlt: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'Personal Full Stack + AI Project',
    title: 'SmartDesk AI Customer Support',
    description:
      'An AI-powered customer support platform for small businesses. Customers can create accounts, submit support tickets, follow replies, look up orders, and use a help center with an account-aware Gemini assistant. The owner has a dedicated dashboard to manage tickets, orders, knowledge articles, and AI tools.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase Auth',
      'Google Auth',
      'Gemini API',
      'Render Hosting',
    ],
    // Directly opens the live application deployed on Render
    link: 'https://smartdesk-ai-customer-support.onrender.com/',
    githubLink:
      'https://github.com/ramnandankumaryadav7765-dotcom/SmartDesk-AI-Customer-Support',
    buttonLabel: 'Live Project',
    isLiveDeployed: true,
    col1Img1: '/images/projects/smartdesk/customer-portal.png',
    col1Img2: '/images/projects/smartdesk/admin-dashboard.png',
    col2Img: '/images/projects/smartdesk/ai-assistant.png',
    col1Img1Alt: 'SmartDesk Customer Portal Interface',
    col1Img2Alt: 'SmartDesk Admin Management Dashboard',
    col2ImgAlt: 'SmartDesk Account-Aware Gemini AI Assistant',
  },
  {
    number: '02',
    category: 'Personal Developer Content Initiative',
    title: 'Happy Coder',
    description:
      'A developer-focused content initiative around explaining Data Structures & Algorithms and LeetCode problems through accessible Hinglish explanations, coding demonstrations, and visual storytelling. This represents my interest in content creation and video editing; do not describe it as a completed software application.',
    technologies: ['DSA & LeetCode', 'Video Editing', 'Visual Storytelling', 'Hinglish Tutorials'],
    link: 'https://www.instagram.com/codeinmotion1/',
    buttonLabel: 'Happy Coder',
    isLiveDeployed: false,
    col1Img1: '/images/projects/happy-coder/video-thumbnail-1.png',
    col1Img2: '/images/projects/happy-coder/video-thumbnail-2.png',
    col2Img: '/images/projects/happy-coder/editing-workspace.png',
    col1Img1Alt: 'Happy Coder DSA Video Thumbnail 1',
    col1Img2Alt: 'Happy Coder LeetCode Walkthrough Thumbnail 2',
    col2ImgAlt: 'Happy Coder Video Editing Workspace Timeline',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] sm:h-[90vh] md:h-[95vh] w-full flex items-start justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(5rem + ${index * 28}px)`,
        }}
        className="sticky w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden z-10"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-[11px] sm:text-xs md:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/70">
                  {project.category}
                </span>
                {project.isLiveDeployed && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] sm:text-xs font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live on Render
                  </span>
                )}
              </div>
              <h3 className="font-black uppercase text-lg sm:text-2xl md:text-3xl text-[#D7E2EA] tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto flex-wrap">
            {/* Live Project Button (directly opens the live application on Render) */}
            <LiveProjectButton
              href={project.link}
              label={project.buttonLabel || 'Live Project'}
            />

            {/* Optional GitHub Repository button if separate repository link exists */}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] px-4 py-3 sm:py-3.5 text-xs sm:text-sm uppercase tracking-wider hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA] transition-colors duration-200"
                title="View Source Code on GitHub"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Short Description & Technology Tags */}
        <div className="mb-6">
          <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed max-w-3xl mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] sm:text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#181B22] border border-[#D7E2EA]/20 text-[#D7E2EA]/90"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Row: Two-column Image Grid */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full">
          {/* Left Column: 40% width with 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            {/* Top image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161920] border border-[#D7E2EA]/10 shadow-inner group relative"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <ImageWithFallback
                src={project.col1Img1}
                alt={project.col1Img1Alt}
                placeholderTitle={project.col1Img1Alt}
                placeholderCategory={project.title}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>

            {/* Bottom image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161920] border border-[#D7E2EA]/10 shadow-inner group relative"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <ImageWithFallback
                src={project.col1Img2}
                alt={project.col1Img2Alt}
                placeholderTitle={project.col1Img2Alt}
                placeholderCategory={project.title}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
          </div>

          {/* Right Column: 60% width with 1 tall image */}
          <div className="w-full md:w-[60%] flex">
            <div className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161920] border border-[#D7E2EA]/10 shadow-inner min-h-[220px] md:min-h-full group relative">
              <ImageWithFallback
                src={project.col2Img}
                alt={project.col2ImgAlt}
                placeholderTitle={project.col2ImgAlt}
                placeholderCategory={project.title}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32 select-none"
    >
      {/* Heading: "Project" (singular) */}
      <FadeIn delay={0} y={40} className="w-full mb-16 sm:mb-20 md:mb-28">
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {/* 3 Sticky-Stacking Project Cards */}
      <div className="flex flex-col gap-12 sm:gap-16 w-full max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
