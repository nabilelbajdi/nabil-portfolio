import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TimeVortexSvg } from './TimeVortexSvg';

export function TimeMachine() {
  const [isHovered, setIsHovered] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  const handleTimeTravel = () => {
    setIsActivated(true);
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  };

  return (
    <>
      <AnimatePresence>
        {isActivated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] flex items-center justify-center bg-[#020617]"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotate: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 360 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-96 h-96 mx-auto"
              >
                <TimeVortexSvg showStars={true} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 mono text-sm"
              >
                <div className="text-[var(--v2-text-muted)] mb-2">Entering wormhole...</div>
                <motion.div 
                  className="text-[var(--v2-accent)] text-lg"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  Portfolio V1
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-[200]"
      >
        <div className="relative flex flex-col items-center">
          <motion.button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleTimeTravel}
            disabled={isActivated}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer w-24 h-24"
          >
            <div className={isHovered ? 'vortex-spin-fast' : 'vortex-spin-slow'}>
              <TimeVortexSvg showStars={true} />
            </div>
          </motion.button>
          
          <span className="mt-2 text-[10px] mono text-[var(--v2-text-dimmed)] uppercase tracking-wider">
            Time Machine
          </span>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute -top-10 px-3 py-1.5 bg-[var(--v2-bg-tertiary)] border border-[var(--v2-border)] rounded-lg shadow-xl whitespace-nowrap"
              >
                <span className="text-xs text-[var(--v2-text-secondary)]">Visit V1</span>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--v2-bg-tertiary)] border-r border-b border-[var(--v2-border)] rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
