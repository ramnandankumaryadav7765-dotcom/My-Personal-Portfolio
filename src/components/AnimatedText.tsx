import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, total, progress }) => {
  const start = index / total;
  const end = Math.min(1, start + Math.max(0.015, 1 / total));
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  let charCounter = 0;
  const totalChars = text.length;

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIndex) => {
        const wordStartIndex = charCounter;
        charCounter += word.length + 1; // +1 for space

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIdx) => {
              const globalIndex = wordStartIndex + charIdx;
              return (
                <Character
                  key={charIdx}
                  char={char}
                  index={globalIndex}
                  total={totalChars}
                  progress={scrollYProgress}
                />
              );
            })}
            {wordIndex < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
