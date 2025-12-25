import { useState, useEffect, useMemo } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useV2Theme } from '../../hooks/useV2Theme';
import { MobileMenu } from '../ui/MobileMenu';
import { Github, Linkedin, FileText, Search, Sun, Moon, Menu } from 'lucide-react';
import { NAV_ITEMS } from '../../../data/navigation';

import { Tooltip } from '../ui/Tooltip';

export function Header({ onOpenCommandPalette }) {
  const { theme, toggleTheme } = useV2Theme();
  const { scrollYProgress } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect if user is on Mac
  const isMac = useMemo(() => {
    if (typeof navigator === 'undefined') return false;
    return /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
  }, []);

  const keyboardShortcut = isMac ? '⌘K' : 'Ctrl+K';

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[var(--v2-accent)] origin-left z-[200]"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-300 ${hasScrolled
          ? 'py-3 bg-[var(--v2-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--v2-border)]'
          : 'py-5 bg-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group"
          >
            {/* Logo Icon */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[var(--v2-accent)] group-hover:scale-110 transition-transform"
            >
              <defs>
                <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" className="opacity-30" />
              <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" className="opacity-50" />
              <text x="12" y="15.5" textAnchor="middle" fill="url(#iconGradient)" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold">N</text>
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-40" />
            </svg>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--v2-text-secondary)] hover:text-[var(--v2-text-primary)] transition-colors duration-200 link-underline"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Tooltip content="Search commands" position="bottom">
              <button
                className="group hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs text-[var(--v2-text-muted)] bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)] rounded-lg hover:border-[var(--v2-border-hover)] hover:text-[var(--v2-text-secondary)] transition-colors cursor-pointer"
                onClick={onOpenCommandPalette}
              >
                <Search className="w-3 h-3" />
                <span className="mono">{keyboardShortcut}</span>
              </button>
            </Tooltip>

            {/* Theme Toggle */}
            <div className="hidden sm:flex items-center gap-1">
              <Tooltip content={theme === 'dark' ? 'Light mode' : 'Dark mode'} position="bottom">
                <button
                  onClick={toggleTheme}
                  className="p-2 text-[var(--v2-text-secondary)] hover:text-[var(--v2-accent)] rounded-lg transition-colors group cursor-pointer"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  ) : (
                    <Moon className="w-4 h-4 group-hover:-rotate-12 transition-transform duration-300" />
                  )}
                </button>
              </Tooltip>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-[var(--v2-text-secondary)] hover:text-[var(--v2-text-primary)] hover:bg-[var(--v2-bg-tertiary)] rounded-lg transition-all duration-200 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
