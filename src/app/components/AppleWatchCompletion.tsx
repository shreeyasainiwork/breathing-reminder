import { motion } from 'motion/react';
import FloatingParticles from './FloatingParticles';

interface AppleWatchCompletionProps {
  onDone: () => void;
  onRepeat: () => void;
}

export default function AppleWatchCompletion({ onDone, onRepeat }: AppleWatchCompletionProps) {
  return (
    <div className="relative w-[187px] h-[223px] bg-[#d8e8f2] rounded-[14px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      {/* Floating particle field */}
      <FloatingParticles />

      {/* Settled breathing circle */}
      <motion.div
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{
          scale: [1, 1.03, 1],
          opacity: 1,
        }}
        transition={{
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          opacity: {
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1],
          },
        }}
        className="absolute h-[90px] left-1/2 -translate-x-1/2 top-[45px] w-[90px] z-10"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 90 90"
        >
          <circle cx="45" cy="45" fill="url(#paint0_radial_completion)" fillOpacity="0.34" r="45" />
          <circle cx="45" cy="45" fill="url(#paint1_radial_completion)" fillOpacity="0.4" r="14" />
          <defs>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(45 45) scale(45)"
              gradientUnits="userSpaceOnUse"
              id="paint0_radial_completion"
              r="1"
            >
              <stop stopColor="#0F6190" />
              <stop offset="1" stopColor="white" />
            </radialGradient>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(45 45) scale(14)"
              gradientUnits="userSpaceOnUse"
              id="paint1_radial_completion"
              r="1"
            >
              <stop stopColor="#0F6190" />
              <stop offset="1" stopColor="white" stopOpacity="0.2" />
            </radialGradient>
          </defs>
        </svg>

        {/* Subtle ambient glow */}
        
      </motion.div>

      {/* Text content */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        className="relative z-10"
      >
        <p className="absolute font-['SF Pro',system-ui,sans-serif] font-semibold leading-[14px] left-1/2 -translate-x-1/2 text-[#0f437b] text-[14px] text-center top-[145px] w-[170px]">
          Nice work
        </p>

        <p className="absolute font-['SF Pro',system-ui,sans-serif] font-normal leading-[10px] left-1/2 -translate-x-1/2 text-[#041d47] text-[8px] text-center top-[163px] w-[160px]">
          Your breathing has slowed
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
        className="absolute left-0 top-[192px] w-full flex h-[31px] z-10"
      >
        <motion.button
          onClick={onRepeat}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex-1 bg-[rgba(15,67,123,0.15)] h-full cursor-pointer border-none outline-none rounded-bl-[14px] flex items-center justify-center"
        >
          <p className="font-['SF Pro',system-ui,sans-serif] font-medium text-[10px] text-[#0f437b]">
            Repeat
          </p>
        </motion.button>

        <motion.button
          onClick={onDone}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex-1 bg-[#0f437b] h-full cursor-pointer border-none outline-none rounded-br-[14px] flex items-center justify-center"
        >
          <p className="font-['SF Pro',system-ui,sans-serif] font-medium text-[10px] text-white">
            Done
          </p>
        </motion.button>
      </motion.div>
    </div>
  );
}
