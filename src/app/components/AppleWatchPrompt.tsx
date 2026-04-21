import { motion } from 'motion/react';
import FloatingParticles from './FloatingParticles';

interface AppleWatchPromptProps {
  onStart: () => void;
}

export default function AppleWatchPrompt({ onStart }: AppleWatchPromptProps) {
  const handleDismiss = () => {
    console.log('Dismissed');
  };

  return (
    <div className="relative w-[187px] h-[223px] bg-[#d8e8f2] rounded-[14px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      {/* Floating particle field */}
      <FloatingParticles />

      {/* Text content */}
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative z-10"
      >
        <h2 className="absolute font-['SF Pro',system-ui,sans-serif] font-bold leading-[18px] left-1/2 -translate-x-1/2 text-[#0f437b] text-[15px] text-center top-[50px] w-[160px]">
          Your heart rate is shooting up
        </h2>

        <p className="absolute font-['SF Pro',system-ui,sans-serif] font-normal leading-[12px] left-1/2 -translate-x-1/2 text-[#041d47] text-[9px] text-center top-[92px] w-[140px]">
          Take a 90 Sec break?
        </p>
      </motion.div>

      {/* Dual button layout */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
        className="absolute left-0 top-[192px] w-full flex h-[31px] z-10"
      >
        {/* Dismiss button */}
        <motion.button
          onClick={handleDismiss}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex-1 bg-[#f0f8ff] h-full cursor-pointer border-none outline-none rounded-bl-[14px] flex items-center justify-center"
        >
          <p className="font-['SF Pro',system-ui,sans-serif] font-medium text-[10px] text-[#0e437b]">
            Dismiss
          </p>
        </motion.button>

        {/* Start now button */}
        <motion.button
          onClick={onStart}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex-1 bg-[#0e437b] h-full cursor-pointer border-none outline-none rounded-br-[14px] flex items-center justify-center"
        >
          <p className="font-['SF Pro',system-ui,sans-serif] font-medium text-[10px] text-white">
            Start now
          </p>
        </motion.button>
      </motion.div>
    </div>
  );
}
