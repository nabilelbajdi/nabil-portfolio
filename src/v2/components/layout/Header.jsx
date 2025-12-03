import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { useV2Theme } from '../../context/V2ThemeProvider';
import { MobileMenu } from '../ui/MobileMenu';

export function Header({ onOpenCommandPalette }) {
  const { theme, toggleTheme } = useV2Theme();
  const { scrollYProgress } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

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
        className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-300 ${
          hasScrolled 
            ? 'py-3 bg-[var(--v2-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--v2-border)]' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link 
            to="/v2" 
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--v2-accent)] flex items-center justify-center text-[var(--v2-bg-primary)] font-bold text-sm">
              N
            </div>
            <span className="font-semibold text-[var(--v2-text-primary)] group-hover:text-[var(--v2-accent)] transition-colors hidden sm:block">
              nabil.dev
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-[var(--v2-text-secondary)] hover:text-[var(--v2-accent)] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="group hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs text-[var(--v2-text-muted)] bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)] rounded-lg hover:border-[var(--v2-border-hover)] hover:text-[var(--v2-text-secondary)] transition-colors cursor-pointer"
              onClick={onOpenCommandPalette}
              title="Quick navigation"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="mono">⌘K</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 text-[var(--v2-text-secondary)] hover:text-[var(--v2-accent)] rounded-lg transition-all duration-300 hidden md:flex group cursor-pointer"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-[var(--v2-text-secondary)] hover:text-[var(--v2-text-primary)] hover:bg-[var(--v2-bg-tertiary)] rounded-lg transition-all duration-200 md:hidden"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
