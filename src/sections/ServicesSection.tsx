import React from 'react';
import FadeIn from '../components/FadeIn';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'DSA & Problem Solving',
    description:
      'Practising Data Structures & Algorithms and LeetCode problems to strengthen logical thinking, algorithmic foundations, and problem-solving skills.',
  },
  {
    number: '02',
    title: 'Frontend Development',
    description:
      'Building responsive and interactive web interfaces while strengthening my foundations in HTML, CSS, JavaScript, and modern frontend development.',
  },
  {
    number: '03',
    title: 'Backend & Full Stack Development',
    description:
      'Learning to build complete applications by connecting frontend experiences with backend logic, APIs, authentication, and databases using technologies such as Node.js, Express, and MongoDB.',
  },
  {
    number: '04',
    title: 'AI-Powered Applications',
    description:
      'Exploring practical AI integrations and building applications that combine web technologies with tools such as the Gemini API.',
  },
  {
    number: '05',
    title: 'Content Creation & Video Editing',
    description:
      'Creating digital content and exploring video editing, visual storytelling, transitions, sound, and pacing to make ideas engaging and easy to understand.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="what-i-do"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none relative z-0"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            What I Do
          </h2>
        </FadeIn>

        {/* 5 Vertical Items List */}
        <div className="flex flex-col w-full border-t border-[#0C0C0C]/15">
          {SERVICES.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.1}
              y={30}
              className="w-full"
            >
              <div className="flex flex-row items-baseline gap-4 sm:gap-8 md:gap-14 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15">
                {/* Number on left */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 w-20 sm:w-32 md:w-44 select-none"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {item.number}
                </div>

                {/* Name + description stacked vertically on right */}
                <div className="flex flex-col justify-center flex-1">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] mb-2 sm:mb-3 tracking-tight"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C] opacity-60 leading-relaxed max-w-2xl"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
