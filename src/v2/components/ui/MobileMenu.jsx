import { motion, AnimatePresence } from 'framer-motion';
import { useV2Theme } from '../../context/V2ThemeProvider';
import { NAV_ITEMS_WITH_HOME } from '../../../data/navigation';
import { SOCIAL_LINKS } from '../../../data/socialLinks';

export function MobileMenu({ isOpen, onClose }) {
  const { theme, toggleTheme } = useV2Theme();

  const handleNavClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[250] md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-[var(--v2-bg-primary)] border-l border-[var(--v2-border)] z-[251] md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-[var(--v2-border)]">
                <span className="font-semibold text-[var(--v2-text-primary)]">Menu</span>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 text-[var(--v2-text-muted)] hover:text-[var(--v2-text-primary)] hover:bg-[var(--v2-bg-tertiary)] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--v2-accent)]/50"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 p-4">
                <ul className="space-y-1">
                  {NAV_ITEMS_WITH_HOME.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="w-full px-4 py-3 text-left text-[var(--v2-text-secondary)] hover:text-[var(--v2-text-primary)] hover:bg-[var(--v2-bg-secondary)] rounded-lg transition-colors"
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-[var(--v2-border)]">
                  <div className="px-4 py-2 text-xs mono text-[var(--v2-text-dimmed)] uppercase tracking-wider">
                    Links
                  </div>
                  <ul className="space-y-1 mt-2">
                    {SOCIAL_LINKS.map((link, index) => (
                      <motion.li
                        key={link.url}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (NAV_ITEMS_WITH_HOME.length + index) * 0.05 }}
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-3 text-[var(--v2-text-muted)] hover:text-[var(--v2-text-primary)] hover:bg-[var(--v2-bg-secondary)] rounded-lg transition-colors"
                        >
                          <span>{link.name}</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </nav>

              <div className="p-4 border-t border-[var(--v2-border)]">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between px-4 py-3 text-[var(--v2-text-secondary)] hover:text-[var(--v2-text-primary)] bg-[var(--v2-bg-secondary)] rounded-lg transition-colors"
                >
                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                  {theme === 'dark' ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

