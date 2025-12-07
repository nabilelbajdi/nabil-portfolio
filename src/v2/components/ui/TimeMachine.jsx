import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackTimeMachineClick } from '../../../lib/analytics';

// Blob Background - Same gentle, mesmerizing vibe as the hero blob
function BlobBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* The morphing blob container */}
      <div className="relative" style={{ width: '60vmin', height: '60vmin' }}>
        <div className="time-machine-blob" />
        <div className="time-machine-blob" />
        <div className="time-machine-blob" />
        <div className="time-machine-blob" />
        <div className="time-machine-blob" />
      </div>
    </div>
  );
}


export function TimeMachine() {
  const [isHovered, setIsHovered] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const scrollYRef = useRef(0);

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (isConfirming) {
      scrollYRef.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      // Restore scroll position
      window.scrollTo(0, scrollYRef.current);
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isConfirming]);

  const handleClick = () => {
    trackTimeMachineClick();
    setIsConfirming(true);
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
            className="fixed inset-0 z-[400] flex items-center justify-center bg-[#0a0a0b]"
          >
            {/* Blob Background */}
            <BlobBackground />

            {/* Close button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleCancel();
              }}
              aria-label="Close time machine dialog"
              className="absolute top-16 right-6 z-[999] p-2 text-white/70 hover:text-white rounded transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content - Star Wars crawl perspective */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 text-center"
              style={{
                perspective: '400px',
                perspectiveOrigin: 'center bottom'
              }}
            >
              <div
                style={{
                  transform: 'rotateX(18deg)',
                  transformOrigin: 'center bottom',
                  textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)'
                }}
              >
                <h2 className="text-xl sm:text-2xl font-semibold mb-16 text-white/90">
                  Travel back in time to<br />explore past versions
                </h2>

                {/* Version Preview */}
                <motion.a
                  href="https://v1.nabilelbajdi.com"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 20 }}
                  className="group cursor-pointer block"
                >
                  <div
                    className="relative w-72 sm:w-80 mx-auto rounded-2xl overflow-hidden transition-all duration-500"
                    style={{
                      boxShadow: '0 30px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08), 0 0 80px rgba(6,182,212,0.18)'
                    }}
                  >
                    {/* Browser chrome mockup */}
                    <div className="bg-zinc-800 px-3 py-2 flex items-center gap-1 border-b border-zinc-700">
                      <div className="w-2 h-2 rounded-full bg-red-500/80" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                      <div className="w-2 h-2 rounded-full bg-green-500/80" />

                      {/* Left arrow */}
                      <div className="flex items-center justify-center w-4 h-4 text-zinc-500 hover:text-zinc-400 transition-colors ml-2">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                      </div>

                      {/* Refresh button */}
                      <div className="flex items-center justify-center w-4 h-4 text-zinc-500 hover:text-zinc-400 transition-colors">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>

                      <div className="flex-1 bg-zinc-700 rounded px-2 py-0.5 text-[10px] text-zinc-400 font-sans flex items-center justify-between">
                        <div className="flex items-center">
                          <svg className="w-3 h-3 text-zinc-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          <span>https://v1.nabilelbajdi.com</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-zinc-600 mx-1">|</span>
                          <div className="flex items-center justify-center w-4 h-4 text-blue-500 hover:text-blue-400 transition-colors">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                    </div>

                    <img
                      src="/assets/images/portfolio-v1.png"
                      alt="Portfolio V1"
                      className="w-full object-cover transition-all duration-500"
                      style={{ transformOrigin: 'center' }}
                      loading="lazy"
                      fetchPriority="low"
                      width="600"
                      height="400"
                    />

                    {/* Hover overlay - Crystal glass effect */}
                    <div className="absolute inset-0 hidden items-center justify-center rounded-2xl border border-cyan-400/20 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 lg:flex">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white drop-shadow-lg">v1</h3>
                      </div>
                    </div>
                  </div>

                  {/* Reflection effect - subtle */}
                  <div
                    className="w-72 sm:w-80 mx-auto h-14 mt-1 rounded-2xl opacity-15 blur-sm"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)',
                      transform: 'scaleY(-0.2)',
                      transformOrigin: 'top center'
                    }}
                  />
                </motion.a>
              </div>
            </motion.div>

            {/* Credit - bottom right of screen */}
            <div className="absolute bottom-4 right-4">
              <span className="text-[10px] text-white/30">
                Click anywhere to close
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Time Machine Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[200]"
      >
        <div className="relative flex flex-col items-center">
          <motion.button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            disabled={isConfirming}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 sm:w-20 sm:h-20 cursor-pointer"
          >
            <img
              src="/tardis.gif"
              alt="Time machine"
              className="w-full h-full object-contain"
              style={{ filter: isHovered ? 'brightness(1.2)' : 'brightness(1)' }}
            />
          </motion.button>

          <span className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] mono text-[var(--v2-text-dimmed)] uppercase tracking-wider">
            Time Machine
          </span>
        </div>
      </motion.div>
    </>
  );
}
