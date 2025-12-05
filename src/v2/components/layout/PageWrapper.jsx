import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useV2Theme } from '../../context/V2ThemeProvider';
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

      {/* Gradient orbs for depth */}
      <div
        className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--v2-accent) 0%, transparent 70%)',
          opacity: 0.03,
          filter: 'blur(80px)',
        }}
      />
      <div
        className="fixed bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
          opacity: 0.03,
          filter: 'blur(80px)',
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

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[100]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.015,
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

