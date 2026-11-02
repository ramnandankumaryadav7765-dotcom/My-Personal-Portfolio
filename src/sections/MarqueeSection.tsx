import React, { useEffect, useRef, useState } from 'react';
import {
  Globe,
  Terminal,
  Layers,
  Sparkles,
  GraduationCap,
  Code2,
  Cpu,
  Video,
  Database,
  GitBranch,
  ExternalLink,
} from 'lucide-react';

interface ShowcaseCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string; // Tailwind color class for glow/accents
  isLive?: boolean;
  link?: string;
  linkText?: string;
}

const ROW_1_CARDS: ShowcaseCard[] = [
  {
    id: 'smartdesk',
    badge: 'LIVE FULL STACK APP',
    title: 'SmartDesk AI Platform',
    description:
      'Account-aware customer support platform with Gemini AI assistant, live ticket resolution, order lookups, and owner dashboard.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini AI', 'Render'],
    icon: Globe,
    accentColor: 'border-emerald-500/40 text-emerald-400',
    isLive: true,
    link: 'https://smartdesk-ai-customer-support.onrender.com/',
    linkText: 'smartdesk-ai-customer-support.onrender.com',
  },
  {
    id: 'dsa',
    badge: 'ALGORITHMS & LOGIC',
    title: 'DSA & LeetCode Problem Solving',
    description:
      'Daily algorithmic problem solving strengthening data structure mastery, time-complexity analysis, and logical foundations in C++.',
    tags: ['C++', 'Binary Trees', 'Dynamic Programming', 'Graphs', 'Arrays'],
    icon: Terminal,
    accentColor: 'border-amber-500/40 text-amber-400',
    link: 'https://leetcode.com/u/Ramnandan_Kumar/',
    linkText: 'leetcode.com/u/Ramnandan_Kumar',
  },
  {
    id: 'fullstack',
    badge: 'FULL STACK ARCHITECTURE',
    title: 'Full Stack Engineering',
    description:
      'Connecting responsive client experiences with scalable RESTful services, secure token authentication, and database schemas.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Firebase Auth'],
    icon: Layers,
    accentColor: 'border-blue-500/40 text-blue-400',
  },
  {
    id: 'gemini',
    badge: 'AI & LLM INTEGRATION',
    title: 'Gemini API & Intelligent Agents',
    description:
      'Building practical AI tools combining context-aware system prompts, dynamic order data injection, and automated support replies.',
    tags: ['Google Gemini API', 'Context Injection', 'Prompt Design', 'AI Agents'],
    icon: Sparkles,
    accentColor: 'border-purple-500/40 text-purple-400',
  },
  {
    id: 'academics',
    badge: 'ACADEMIC EXCELLENCE',
    title: 'Sage University, Indore',
    description:
      '2nd-year B.Tech in Computer Science & Technology with 8.31 First-Year CGPA (Semester 1: 7.96 SGPA, Semester 2: 8.64 SGPA).',
    tags: ['B.Tech CST', 'Sage University', '8.31 CGPA', 'Indore, MP'],
    icon: GraduationCap,
    accentColor: 'border-cyan-500/40 text-cyan-400',
  },
  {
    id: 'frontend',
    badge: 'MODERN UI CRAFT',
    title: 'Fluid Interactive Interfaces',
    description:
      'Crafting fluid visual systems, dark themes, responsive typography, and smooth physics-based micro-interactions.',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    icon: Code2,
    accentColor: 'border-indigo-500/40 text-indigo-400',
  },
];

const ROW_2_CARDS: ShowcaseCard[] = [
  {
    id: 'github-analyzer',
    badge: 'DEVELOPER TOOLING',
    title: 'GitHub Profile Analyzer',
    description:
      'A developer project exploring how repository commit history, languages, and profile statistics translate into AI-driven recommendations.',
    tags: ['GitHub REST API', 'Developer Analytics', 'TypeScript', 'Insights'],
    icon: Cpu,
    accentColor: 'border-sky-500/40 text-sky-400',
    link: 'https://github.com/ramnandankumaryadav7765-dotcom',
    linkText: 'github.com/ramnandankumaryadav7765-dotcom',
  },
  {
    id: 'happy-coder',
    badge: 'CREATIVE & TUTORIALS',
    title: 'Happy Coder Content Initiative',
    description:
      'Explaining complex Data Structures & Algorithms and LeetCode problems through accessible Hinglish explanations and visual storytelling.',
    tags: ['Visual Storytelling', 'Video Editing', 'Hinglish Tutorials', 'DSA'],
    icon: Video,
    accentColor: 'border-rose-500/40 text-rose-400',
    link: 'https://www.instagram.com/codeinmotion1/',
    linkText: '@codeinmotion1',
  },
  {
    id: 'cpp',
    badge: 'SYSTEMS & LOGIC',
    title: 'C++ Algorithmic Foundations',
    description:
      'Writing performant, clean code with strong algorithmic complexity analysis, recursion, pointers, and STL containers.',
    tags: ['C++ STL', 'Pointers', 'Recursion', 'Time Complexity'],
    icon: Terminal,
    accentColor: 'border-emerald-500/40 text-emerald-400',
  },
  {
    id: 'database',
    badge: 'DATA PERSISTENCE',
    title: 'MongoDB & Data Modeling',
    description:
      'Designing robust document schemas, indexing strategies, data validations, and aggregation pipelines for scalable applications.',
    tags: ['MongoDB', 'Mongoose', 'Schema Design', 'NoSQL Queries'],
    icon: Database,
    accentColor: 'border-green-500/40 text-green-400',
  },
  {
    id: 'git-render',
    badge: 'ENGINEERING WORKFLOW',
    title: 'Git, GitHub & Render Cloud',
    description:
      'Managing clean branch histories, semantic commits, cloud deployment pipelines, and environment variables on Render.',
    tags: ['Git Version Control', 'Render Cloud Hosting', 'CI/CD Pipelines'],
    icon: GitBranch,
    accentColor: 'border-orange-500/40 text-orange-400',
  },
  {
    id: 'video-editing',
    badge: 'VISUAL STORYTELLING',
    title: 'Content Creation & Video Editing',
    description:
      'Crafting educational video pacing, motion visual cues, sound design, and narrative flow to make complex programming concepts intuitive.',
    tags: ['Visual Storytelling', 'Editing Pacing', 'Sound Design', 'Tech Media'],
    icon: Video,
    accentColor: 'border-pink-500/40 text-pink-400',
  },
];

// Tripled lists for seamless scrolling
const ROW_1_TRIPLED = [...ROW_1_CARDS, ...ROW_1_CARDS, ...ROW_1_CARDS];
const ROW_2_TRIPLED = [...ROW_2_CARDS, ...ROW_2_CARDS, ...ROW_2_CARDS];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Row 1 moves RIGHT on scroll: translateX(offset - 200)
  const row1Transform = `translate3d(${-2200 + (offset - 200)}px, 0, 0)`;
  // Row 2 moves LEFT on scroll: translateX(-(offset - 200))
  const row2Transform = `translate3d(${-(offset - 200)}px, 0, 0)`;

  const renderCard = (card: ShowcaseCard, keyPrefix: string, index: number) => {
    const Icon = card.icon;
    const CardWrapper = card.link ? 'a' : 'div';
    const linkProps = card.link
      ? {
          href: card.link,
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      : {};

    return (
      <CardWrapper
        key={`${keyPrefix}-${card.id}-${index}`}
        {...(linkProps as any)}
        className="w-[380px] sm:w-[420px] h-[250px] sm:h-[270px] flex-shrink-0 rounded-2xl bg-[#12141C] border border-[#232734] hover:border-[#D7E2EA]/40 hover:bg-[#161924] transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between shadow-xl group relative overflow-hidden text-left"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#D7E2EA]/[0.02] rounded-full blur-2xl pointer-events-none group-hover:bg-[#D7E2EA]/[0.06] transition-all duration-300" />

        {/* Top Bar: Badge + Icon / Live Status */}
        <div className="flex items-center justify-between gap-3 w-full relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#191D28] border border-[#2C3242] flex items-center justify-center text-[#D7E2EA]/80 group-hover:text-white transition-colors duration-200">
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#D7E2EA]/70">
              {card.badge}
            </span>
          </div>

          {card.isLive ? (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Online on Render
            </span>
          ) : card.link ? (
            <span className="text-[#D7E2EA]/40 group-hover:text-[#D7E2EA] transition-colors duration-200">
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          ) : null}
        </div>

        {/* Middle: Title & Description */}
        <div className="my-2 relative z-10">
          <h4 className="text-lg sm:text-xl font-bold font-kanit uppercase tracking-tight text-[#D7E2EA] group-hover:text-white transition-colors duration-200 mb-2">
            {card.title}
          </h4>
          <p className="text-xs sm:text-[13px] text-[#9BA7B4] font-light leading-relaxed line-clamp-3">
            {card.description}
          </p>
        </div>

        {/* Bottom Bar: Tags & Link preview */}
        <div className="relative z-10 pt-2 border-t border-[#1F2330] flex items-center justify-between gap-2 overflow-hidden">
          <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-6">
            {card.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1A1D27] text-[#D7E2EA]/75 border border-[#2A2F40]"
              >
                {tag}
              </span>
            ))}
            {card.tags.length > 3 && (
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-[#1A1D27] text-[#D7E2EA]/50">
                +{card.tags.length - 3}
              </span>
            )}
          </div>

          {card.linkText && (
            <span className="text-[10px] font-mono text-[#D7E2EA]/50 group-hover:text-emerald-400 transition-colors duration-200 truncate max-w-[140px]">
              {card.linkText}
            </span>
          )}
        </div>
      </CardWrapper>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="marquee"
      className="bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden w-full select-none"
    >
      {/* Section Sub-header */}
      <div className="max-w-6xl mx-auto px-6 mb-8 flex items-center justify-between">
        <span className="text-xs uppercase font-mono tracking-widest text-[#D7E2EA]/60 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D7E2EA]/40" />
          Technical Stack & Craft Highlights
        </span>
        <span className="text-[11px] font-mono text-[#D7E2EA]/40 hidden sm:inline">
          Scroll to explore &bull; 100% Ramnandan Kumar
        </span>
      </div>

      <div className="flex flex-col gap-4 w-full overflow-hidden">
        {/* Row 1: Moves right on scroll */}
        <div
          className="flex flex-nowrap gap-4 w-max"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {ROW_1_TRIPLED.map((card, index) => renderCard(card, 'row1', index))}
        </div>

        {/* Row 2: Moves left on scroll */}
        <div
          className="flex flex-nowrap gap-4 w-max"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {ROW_2_TRIPLED.map((card, index) => renderCard(card, 'row2', index))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
