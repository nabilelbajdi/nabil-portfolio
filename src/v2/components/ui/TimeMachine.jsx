import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackTimeMachineClick } from '../../../lib/analytics';

// Portfolio save slots - add new objects here for future versions
const SAVE_SLOTS = [
  {
    id: 1,
    version: 'v1',
    title: 'Portfolio v1',
    date: '2025',
    url: 'https://v1.nabilelbajdi.com',
    screenshot: '/assets/images/portfolio-v1.png',
    playtime: '63 hrs',
    completion: 100,
    isEmpty: false,
  },
  {
    id: 2,
    isEmpty: true,
  },
  {
    id: 3,
    isEmpty: true,
  },
];

function SaveSlot({ slot, isSelected, onSelect, onLoad }) {
  return (
    <motion.div
      layout
      onClick={() => !slot.isEmpty && onSelect(slot.id)}
      onDoubleClick={() => !slot.isEmpty && onLoad(slot)}
      whileHover={!slot.isEmpty ? { scale: 1.01 } : {}}
      whileTap={!slot.isEmpty ? { scale: 0.99 } : {}}
      className={`
        save-slot
        ${isSelected ? 'save-slot-selected' : ''}
        ${slot.isEmpty ? 'save-slot-empty' : 'save-slot-filled'}
      `}
      transition={{ layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
    >
      {/* Slot header */}
      <motion.div layout="position" className="save-slot-header">
        <span className="save-slot-number">SLOT {slot.id}</span>
      </motion.div>

      {/* Slot content */}
      <div className="save-slot-content">
        {slot.isEmpty ? (
          <div className="save-slot-empty-text">
            <span className="blink">▓▓▓</span> NO DATA <span className="blink">▓▓▓</span>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {isSelected ? (
              /* Expanded view with full browser mockup - only when selected */
              <motion.div
                key="expanded"
                initial={{ opacity: 0, height: 0, scale: 0.95 }}
                animate={{ opacity: 1, height: 'auto', scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="save-slot-detailed"
              >
                {/* Full detailed browser mockup */}
                <div className="browser-mockup">
                  {/* Browser chrome */}
                  <div className="browser-chrome">
                    <div className="chrome-dots">
                      <div className="chrome-dot red" />
                      <div className="chrome-dot yellow" />
                      <div className="chrome-dot green" />
                    </div>

                    {/* Navigation buttons */}
                    <div className="chrome-nav">
                      <svg className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      <svg className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>

                    {/* URL bar */}
                    <div className="chrome-url-bar">
                      <svg className="lock-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="url-text">{slot.url}</span>
                      <span className="url-divider">|</span>
                      <svg className="star-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                    src={slot.screenshot}
                    alt={slot.title}
                    className="browser-screenshot"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div className="browser-overlay">
                    <span className="overlay-text">load {slot.version}</span>
                  </div>
                </div>

                {/* Info bar below screenshot */}
                <div className="save-slot-info-bar">
                  <div className="info-left">
                    <span className="info-title">{slot.title}</span>
                    <span className="info-meta">📅 {slot.date} • ⏱ {slot.playtime}</span>
                  </div>
                  <div className="info-right">
                    <div className="mini-progress">
                      <div className="mini-progress-fill" style={{ width: `${slot.completion}%` }} />
                    </div>
                    <span className="info-percent">{slot.completion}%</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Compact view - only title and meta, no screenshot */
              <motion.div
                key="compact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="save-slot-compact"
              >
                <div className="compact-info">
                  <span className="compact-title">{slot.title}</span>
                  <span className="compact-meta">📅 {slot.date} • ⏱ {slot.playtime}</span>
                </div>
                <div className="compact-right">
                  <span className="compact-percent">{slot.completion}%</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Selection indicator */}
      <AnimatePresence>
        {isSelected && !slot.isEmpty && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="save-slot-cursor"
          >
            ▶
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function TimeMachine() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const scrollYRef = useRef(0);

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.scrollTo(0, scrollYRef.current);
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || isLoading) return;

    const handleKeyDown = (e) => {
      const filledSlots = SAVE_SLOTS.filter(s => !s.isEmpty);
      const currentIndex = filledSlots.findIndex(s => s.id === selectedSlot);

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          if (currentIndex > 0) {
            setSelectedSlot(filledSlots[currentIndex - 1].id);
          }
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (currentIndex < filledSlots.length - 1) {
            setSelectedSlot(filledSlots[currentIndex + 1].id);
          }
          break;
        case 'Enter':
          e.preventDefault();
          const slot = SAVE_SLOTS.find(s => s.id === selectedSlot);
          if (slot && !slot.isEmpty) {
            handleLoadSlot(slot);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedSlot, isLoading]);

  const handleOpen = () => {
    trackTimeMachineClick();
    setIsOpen(true);
  };

  const handleClose = () => {
    if (!isLoading) {
      setIsOpen(false);
    }
  };

  const handleLoadSlot = (slot) => {
    if (slot.url && !isLoading) {
      setIsLoading(true);
      // Brief loading animation (600ms)
      setTimeout(() => {
        window.open(slot.url, '_blank');
        setIsLoading(false);
      }, 600);
    }
  };

  // Click handler for slots - single click on selected slot loads it
  const handleSlotClick = (slot) => {
    if (slot.isEmpty) return;

    if (selectedSlot === slot.id) {
      // Already selected, load it
      handleLoadSlot(slot);
    } else {
      // Select this slot
      setSelectedSlot(slot.id);
    }
  };

  return (
    <>
      {/* Load Game Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="load-game-overlay"
          >
            {/* CRT Screen Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className={`load-game-container crt-flicker ${isLoading ? 'is-loading' : ''}`}
            >
              {/* Scanlines overlay */}
              <div className="crt-scanlines" />

              {/* Screen glow */}
              <div className="crt-glow" />

              {/* Header with glitch effect */}
              <div className="load-game-header glitch" data-text="LOAD GAME">
                <span className="blink">▶</span> LOAD GAME
              </div>

              {/* Loading overlay */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="loading-overlay"
                  >
                    <span className="loading-text">loading<span className="loading-dots"></span></span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Save slots */}
              <div className="save-slots-container">
                {SAVE_SLOTS.map((slot) => (
                  <SaveSlot
                    key={slot.id}
                    slot={slot}
                    isSelected={selectedSlot === slot.id}
                    onSelect={(id) => handleSlotClick(SAVE_SLOTS.find(s => s.id === id))}
                    onLoad={handleLoadSlot}
                  />
                ))}
              </div>

              {/* Footer controls */}
              <div className="load-game-footer">
                <div className="control-hint">
                  <span className="key">↑↓</span> Select
                </div>
                <div className="control-hint">
                  <span className="key">ENTER</span> Load
                </div>
                <div className="control-hint">
                  <span className="key">ESC</span> Back
                </div>
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close load game menu"
                className="load-game-close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[200]"
      >
        <div className="relative flex flex-col items-center">
          <motion.button
            onClick={handleOpen}
            disabled={isOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 sm:w-20 sm:h-20 cursor-pointer"
          >
            <img
              src="/spinning-floppy.gif"
              alt="Load previous versions"
              className="w-full h-full object-contain"
            />
          </motion.button>

          <span className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] mono text-[var(--v2-text-dimmed)] uppercase tracking-wider">
            Load Game
          </span>
        </div>
      </motion.div>
    </>
  );
}
