import { motion } from 'motion/react';

interface Bubble {
  size: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  opacity: number;
}

const bubbles: Bubble[] = [
  { size: 120, left: '-15%', top: '35%', delay: 0, duration: 12, opacity: 0.6 },
  { size: 95, left: '20%', top: '55%', delay: 0.5, duration: 14, opacity: 0.7 },
  { size: 140, left: '55%', top: '45%', delay: 1, duration: 13, opacity: 0.65 },
  { size: 110, left: '75%', top: '15%', delay: 1.5, duration: 15, opacity: 0.55 },
  { size: 40, left: '15%', top: '8%', delay: 0.8, duration: 10, opacity: 0.5 },
  { size: 35, left: '70%', top: '5%', delay: 1.2, duration: 11, opacity: 0.45 },
  { size: 50, left: '85%', top: '55%', delay: 1.8, duration: 13, opacity: 0.6 },
  { size: 25, left: '5%', top: '12%', delay: 0.3, duration: 9, opacity: 0.4 },
];

export default function GlassBubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            left: bubble.left,
            top: bubble.top,
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle at 35% 25%,
              rgba(255, 255, 255, 0.9) 0%,
              rgba(220, 240, 255, 0.8) 20%,
              rgba(180, 220, 245, ${bubble.opacity}) 50%,
              rgba(160, 210, 240, ${bubble.opacity * 0.6}) 100%)`,
            boxShadow: `
              inset -2px -2px 8px rgba(255, 255, 255, 0.8),
              inset 2px 2px 12px rgba(15, 97, 144, 0.15),
              0 4px 20px rgba(15, 97, 144, 0.1)
            `,
            backdropFilter: 'blur(8px)',
          }}
          initial={{
            scale: 0.8,
            opacity: 0,
            y: 20,
          }}
          animate={{
            scale: [0.95, 1.05, 0.95],
            opacity: [bubble.opacity * 0.7, bubble.opacity, bubble.opacity * 0.7],
            y: [0, -15, 0],
          }}
          transition={{
            delay: bubble.delay,
            duration: bubble.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Highlight */}
          <div
            className="absolute rounded-full"
            style={{
              top: '10%',
              left: '25%',
              width: '35%',
              height: '35%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%)',
              filter: 'blur(8px)',
            }}
          />

          {/* Secondary highlight */}
          <div
            className="absolute rounded-full"
            style={{
              top: '20%',
              left: '15%',
              width: '20%',
              height: '20%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 60%)',
              filter: 'blur(4px)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
