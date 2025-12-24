import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useV2Theme } from '../../hooks/useV2Theme';
import { Header } from './Header';

/**
 * PageWrapper - Main layout wrapper for V2 pages
 * 
 * Features:
 * - Applies theme class
 * - Grid/noise background layers
 * - Gradient orbs for depth
 * - Mouse position tracking for future cursor effects
 * - Smooth page transitions
 */
export function PageWrapper({ children, onOpenCommandPalette }) {
  const { theme } = useV2Theme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for spotlight/cursor effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`v2 ${theme} min-h-screen bg-[var(--v2-bg-primary)] text-[var(--v2-text-primary)] overflow-x-hidden`}>
      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--v2-border-subtle) 1px, transparent 1px),
            linear-gradient(to bottom, var(--v2-border-subtle) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.4,
        }}
      />


      {/* Subtle spotlight following cursor (desktop only) */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--v2-accent-glow), transparent 40%)`,
          opacity: 0.5,
        }}
      />

      {/* Header */}
      <Header onOpenCommandPalette={onOpenCommandPalette} />

      {/* Page content with entrance animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}

