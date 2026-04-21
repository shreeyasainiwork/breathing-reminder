import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AppleWatchFrame from './components/AppleWatchFrame';
import AppleWatchPrompt from './components/AppleWatchPrompt';
import AppleWatchBreathing from './components/AppleWatchBreathing';
import AppleWatchCompletion from './components/AppleWatchCompletion';

type AppState = 'prompt' | 'breathing' | 'completion';

export default function App() {
  const [state, setState] = useState<AppState>('prompt');

  const handleStart = () => {
    setState('breathing');
  };

  const handleComplete = () => {
    setState('completion');
  };

  const handleRepeat = () => {
    setState('breathing');
  };

  const handleDone = () => {
    setState('prompt');
  };

  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <AppleWatchFrame>
        <AnimatePresence mode="wait">
          {state === 'prompt' && (
            <motion.div
              key="prompt"
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -10 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <AppleWatchPrompt onStart={handleStart} />
            </motion.div>
          )}
          {state === 'breathing' && (
            <motion.div
              key="breathing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <AppleWatchBreathing onComplete={handleComplete} />
            </motion.div>
          )}
          {state === 'completion' && (
            <motion.div
              key="completion"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <AppleWatchCompletion onDone={handleDone} onRepeat={handleRepeat} />
            </motion.div>
          )}
        </AnimatePresence>
      </AppleWatchFrame>
    </div>
  );
}