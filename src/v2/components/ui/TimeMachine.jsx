import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TimeVortexSvg } from './TimeVortexSvg';

export function TimeMachine() {
  const [isHovered, setIsHovered] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  const handleClick = () => {
    setIsConfirming(true);
  };

  const handleConfirm = () => {
    setIsConfirming(false);
    setIsActivated(true);
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  };

  const handleCancel = () => {
    setIsConfirming(false);
  };

  return (
    <>
      {/* Confirmation Screen */}
      <AnimatePresence>
        {isConfirming && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCancel}
            className="fixed inset-0 z-[400] flex items-center justify-center bg-[var(--v2-bg-primary)]/80 backdrop-blur-md"
          >
            {/* Vortex - reasonable size */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                className="w-[600px] h-[600px] vortex-spin-slow"
              >
                <TimeVortexSvg showStars={true} />
              </motion.div>
            </div>

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={handleCancel}
              className="absolute top-6 right-6 z-20 p-2 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 text-center"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)' }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                Go back in time
              </h2>
              <p className="text-sm text-white/60 mb-8">
                Explore past versions
              </p>
              
              {/* Version Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateX: 15, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateX: 8, rotateY: -12 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 20 }}
                onClick={handleConfirm}
                className="group cursor-pointer"
                style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
              >
                <div 
                  className="relative w-96 sm:w-96 mx-auto rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-110"
                  style={{ 
                    boxShadow: '0 30px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08), 0 0 80px rgba(6,182,212,0.18)',
                    transform: 'rotateX(10deg) rotateY(-14deg) rotateZ(2deg) translateZ(0)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Browser chrome mockup */}
                  <div className="bg-zinc-800 px-3 py-2 flex items-center gap-1.5 border-b border-zinc-700">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <div className="ml-2 flex-1 bg-zinc-700 rounded px-2 py-0.5 text-[10px] text-zinc-400 font-mono">
                      nabilelbajdi.com
                    </div>
                  </div>
                  
                  <img 
                    src="/assets/images/portfolio-v1.png" 
                    alt="Portfolio V1"
                    className="w-full object-cover group-hover:scale-102 transition-transform duration-500"
                    style={{ transformOrigin: 'center' }}
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 top-8 flex items-center justify-center bg-black/0 group-hover:bg-black/70 transition-all duration-300">
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-white text-3xl font-bold block">Visit V1</span>
                      <span className="text-white/60 text-sm">Click to travel</span>
                    </motion.div>
                  </div>
                  
                  {/* Year badge */}
                  <div className="absolute top-12 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-[10px] text-white/80 font-mono">
                    2024
                  </div>
                </div>
                
                {/* Reflection effect */}
                <div 
                  className="w-96 sm:w-96 mx-auto h-20 mt-2 rounded-2xl opacity-22 blur-sm"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.14), transparent)',
                    transform: 'rotateX(-10deg) rotateY(-14deg) rotateZ(2deg) scaleY(-0.28)',
                    transformOrigin: 'top center',
                    filter: 'brightness(0.95)'
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Travel Animation */}
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
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 360 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-72 h-72 mx-auto"
              >
                <TimeVortexSvg showStars={true} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 mono text-sm"
              >
                <div className="text-[var(--v2-text-muted)] mb-2">Traveling to 2024...</div>
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

      {/* Time Machine Button */}
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
            onClick={handleClick}
            disabled={isActivated || isConfirming}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer w-20 h-20"
          >
            <div className={isHovered ? 'vortex-spin-fast' : 'vortex-spin-slow'} style={{ width: '100%', height: '100%' }}>
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TimeVortexSvg showStars={true} width={80} height={80} />
              </div>
            </div>
          </motion.button>
          
          <span className="mt-2 text-[10px] mono text-[var(--v2-text-dimmed)] uppercase tracking-wider">
            Time Machine
          </span>

          <AnimatePresence>
            {isHovered && !isConfirming && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute -top-10 px-3 py-1.5 bg-[var(--v2-bg-tertiary)] border border-[var(--v2-border)] rounded-lg shadow-xl whitespace-nowrap"
              >
                <span className="text-xs text-[var(--v2-text-secondary)]">View V1</span>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--v2-bg-tertiary)] border-r border-b border-[var(--v2-border)] rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
