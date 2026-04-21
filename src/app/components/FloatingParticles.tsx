import { motion } from 'motion/react';

interface Particle {
  size: number;
  left: number;
  top: number;
  rotation: number;
  delay: number;
  duration: number;
  rotationAngle?: number;
}

const particles: Particle[] = [
  // Large circles (75px)
  { size: 75, left: 9, top: 106, rotation: 180, delay: 0, duration: 10 },
  { size: 75, left: 75, top: 132, rotation: 180, delay: 0.3, duration: 11 },
  { size: 75, left: 126, top: 137, rotation: 180, delay: 0.6, duration: 9.5 },
  { size: 75, left: 144, top: 77, rotation: 180, delay: 0.9, duration: 10.5 },
  { size: 75, left: -53, top: 77, rotation: 180, delay: 1.2, duration: 11.5 },
  { size: 75, left: 63, top: 164, rotation: 180, delay: 0.4, duration: 9.8 },
  { size: 75, left: 8, top: 152, rotation: 180, delay: 0.7, duration: 10.2 },
  { size: 75, left: -47, top: 133, rotation: 180, delay: 1, duration: 11.2 },
  { size: 75, left: -37, top: 200, rotation: 180, delay: 1.5, duration: 10.8 },
  { size: 75, left: 124, top: 198, rotation: 180, delay: 0.2, duration: 9.3 },

  // Small accent circles
  { size: 23, left: 20, top: 20, rotation: 165, delay: 0.5, duration: 8, rotationAngle: 165 },
  { size: 6.3, left: 39, top: 22, rotation: 165, delay: 0.8, duration: 7.5, rotationAngle: 165 },
  { size: 23, left: 118, top: 102, rotation: 7.28, delay: 1.1, duration: 8.5, rotationAngle: 7.28 },
  { size: 11, left: 113, top: 113, rotation: 7.28, delay: 0.6, duration: 9, rotationAngle: 7.28 },
  { size: 41, left: 165, top: -5, rotation: 7.28, delay: 1.3, duration: 10.3, rotationAngle: 7.28 },
  { size: 11, left: 160, top: 24, rotation: 7.28, delay: 0.9, duration: 8.8, rotationAngle: 7.28 },
];

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            rotate: particle.rotationAngle || particle.rotation,
            scale: 0.7,
            opacity: 0
          }}
          animate={{
            rotate: particle.rotationAngle || particle.rotation,
            scale: [0.85, 1, 0.9, 1],
            opacity: [0, 0.5, 0.5, 0.5],
            y: [0, -10, 0, -10, 0],
            x: [0, 3, 0, -3, 0],
          }}
          transition={{
            delay: particle.delay,
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            className="w-full h-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox={`0 0 ${particle.size} ${particle.size}`}
          >
            <ellipse
              cx={particle.size / 2}
              cy={particle.size / 2}
              rx={particle.size / 2}
              ry={particle.size / 2}
              fill={`url(#particle-gradient-${index})`}
              fillOpacity="0.34"
            />
            <defs>
              <radialGradient
                id={`particle-gradient-${index}`}
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform={`translate(${particle.size / 2} ${particle.size / 2}) rotate(90) scale(${particle.size / 2})`}
              >
                <stop stopColor="#0F6190" />
                <stop offset="1" stopColor="white" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
