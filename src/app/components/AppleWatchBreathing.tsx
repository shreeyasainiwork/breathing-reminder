import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FloatingParticles from './FloatingParticles';

interface AppleWatchBreathingProps {
  onComplete: () => void;
}

type Phase = 'inhale' | 'hold' | 'exhale';

export default function AppleWatchBreathing({ onComplete }: AppleWatchBreathingProps) {
  const [round, setRound] = useState(1);
  const [phase, setPhase] = useState<Phase>('inhale');

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const runBreathingCycle = () => {
      if (phase === 'inhale') {
        timer = setTimeout(() => {
          setPhase('hold');
        }, 4000);
      } else if (phase === 'hold') {
        timer = setTimeout(() => {
          setPhase('exhale');
        }, 2000);
      } else if (phase === 'exhale') {
        timer = setTimeout(() => {
          if (round < 3) {
            setRound(round + 1);
            setPhase('inhale');
          } else {
            onComplete();
          }
        }, 6000);
      }
    };

    runBreathingCycle();

    return () => clearTimeout(timer);
  }, [phase, round, onComplete]);

  const getPhaseText = () => {
    if (phase === 'inhale') return 'Breathe in...';
    if (phase === 'hold') return 'Hold it...';
    return 'Breathe out';
  };

  const getBreathingScale = () => {
    if (phase === 'inhale') return 1.5;
    if (phase === 'hold') return 1.5;
    return 0.75;
  };

  const getAnimationDuration = () => {
    if (phase === 'inhale') return 4;
    if (phase === 'hold') return 0;
    return 6;
  };

  return (
    <div className="relative w-[187px] h-[223px] bg-[#d8e8f2] rounded-[14px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      {/* Floating particle field */}
      <FloatingParticles />

      {/* Central breathing circle */}
      <div className="absolute left-1/2 top-[50px] -translate-x-1/2 w-[120px] h-[117px] flex items-center justify-center z-10">
        <motion.div
          animate={{
            scale: getBreathingScale(),
          }}
          transition={{
            duration: getAnimationDuration(),
            ease: [0.45, 0.05, 0.55, 0.95],
          }}
          className="relative w-full h-full"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 119.76 116.591"
          >
            <g>
              <ellipse
                cx="59.88"
                cy="58.2955"
                fill="url(#paint0_radial_breathing_main)"
                fillOpacity="0.34"
                rx="59.88"
                ry="58.2955"
              />
              <ellipse
                cx="60.412"
                cy="59.195"
                fill="url(#paint1_radial_breathing_inner)"
                fillOpacity="0.34"
                rx="19.5"
                ry="20.03"
                transform="rotate(172.975 60.412 59.195)"
              />
            </g>
            <defs>
              <radialGradient
                cx="0"
                cy="0"
                gradientTransform="translate(59.88 58.2955) rotate(90) scale(58.2955 59.88)"
                gradientUnits="userSpaceOnUse"
                id="paint0_radial_breathing_main"
                r="1"
              >
                <stop stopColor="#0F6190" />
                <stop offset="1" stopColor="white" />
              </radialGradient>
              <radialGradient
                cx="0"
                cy="0"
                gradientTransform="translate(60.412 59.195) rotate(172.975) scale(19.5009 20.031)"
                gradientUnits="userSpaceOnUse"
                id="paint1_radial_breathing_inner"
                r="1"
              >
                <stop stopColor="#0F6190" />
                <stop offset="1" stopColor="white" />
              </radialGradient>
            </defs>
          </svg>

          {/* Ambient glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(15, 97, 144, 0.35) 0%, transparent 65%)',
              filter: 'blur(18px)',
            }}
            animate={{
              opacity: phase === 'inhale' ? [0.4, 0.7] : phase === 'exhale' ? [0.7, 0.3] : 0.6,
            }}
            transition={{
              duration: getAnimationDuration(),
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>

      {/* Phase Text */}
      <AnimatePresence mode="wait">
        <motion.p
          key={`${round}-${phase}`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute font-['SF Pro',system-ui,sans-serif] font-normal left-1/2 -translate-x-1/2 text-[#041d47] text-[8px] text-center top-[148px] z-10 tracking-tight"
        >
          {getPhaseText()}
        </motion.p>
      </AnimatePresence>

      {/* Round indicator - subtle dots */}
      <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 flex gap-[6px] z-10">
        {[1, 2, 3].map((r) => (
          <motion.div
            key={r}
            className={`w-[4px] h-[4px] rounded-full ${
              r === round ? 'bg-[#041d47]' : 'bg-[rgba(4,29,71,0.25)]'
            }`}
            animate={{
              scale: r === round ? 1.2 : 1,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        ))}
      </div>
    </div>
  );
}
