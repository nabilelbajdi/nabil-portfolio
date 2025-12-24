import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useV2Theme } from '../../hooks/useV2Theme';
import { PALETTE_COMMANDS } from '../../data/paletteCommands';

export function CommandPalette({ isOpen, onClose }) {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const { toggleTheme } = useV2Theme();

  const filteredCommands = PALETTE_COMMANDS.filter(cmd =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.section.toLowerCase().includes(search.toLowerCase())
  );

  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.section]) acc[cmd.section] = [];
    acc[cmd.section].push(cmd);
    return acc;
  }, {});

  const flatFilteredCommands = filteredCommands;

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  const executeCommand = useCallback((command) => {
    switch (command.action) {
      case 'scroll':
        document.querySelector(command.target)?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'theme':
        toggleTheme();
        break;
      case 'link':
        window.open(command.target, '_blank');
        break;
      case 'navigate':
        window.location.href = command.target;
        break;
    }
    onClose();
  }, [onClose, toggleTheme]);

  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, flatFilteredCommands.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (flatFilteredCommands[selectedIndex]) {
          executeCommand(flatFilteredCommands[selectedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
    }
  }, [flatFilteredCommands, selectedIndex, executeCommand, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[300]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-[301] px-4"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)] rounded-xl shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--v2-border)]">
                <svg className="w-4 h-4 text-[var(--v2-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  aria-label="Search commands"
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent text-[var(--v2-text-primary)] placeholder:text-[var(--v2-text-dimmed)] outline-none text-sm"
                />
                <kbd className="hidden sm:inline-flex px-2 py-0.5 text-xs mono text-[var(--v2-text-dimmed)] bg-[var(--v2-bg-tertiary)] rounded border border-[var(--v2-border)]">
                  esc
                </kbd>
              </div>

              <div className="max-h-80 overflow-y-auto py-2">
                {Object.keys(groupedCommands).length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm text-[var(--v2-text-muted)]">
                    No commands found
                  </div>
                ) : (
                  Object.entries(groupedCommands).map(([section, sectionCommands]) => (
                    <div key={section}>
                      <div className="px-4 py-2 text-xs mono text-[var(--v2-text-dimmed)] uppercase tracking-wider">
                        {section}
                      </div>
                      {sectionCommands.map((cmd) => {
                        const globalIndex = flatFilteredCommands.findIndex(c => c.id === cmd.id);
                        const isSelected = globalIndex === selectedIndex;

                        return (
                          <button
                            key={cmd.id}
                            onClick={() => executeCommand(cmd)}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={`w-full px-4 py-2 flex items-center gap-3 text-left text-sm transition-colors ${isSelected
                              ? 'bg-[var(--v2-accent)]/10 text-[var(--v2-text-primary)]'
                              : 'text-[var(--v2-text-secondary)] hover:bg-[var(--v2-bg-tertiary)]'
                              }`}
                          >
                            <span className={`w-5 h-5 flex items-center justify-center rounded ${isSelected ? 'text-[var(--v2-accent)]' : 'text-[var(--v2-text-muted)]'
                              }`}>
                              {cmd.action === 'scroll' && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              )}
                              {cmd.action === 'theme' && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                              )}
                              {cmd.action === 'link' && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              )}
                              {cmd.action === 'navigate' && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                              )}
                            </span>
                            <span className="flex-1">{cmd.label}</span>
                            {isSelected && (
                              <kbd className="px-1.5 py-0.5 text-xs mono text-[var(--v2-text-dimmed)] bg-[var(--v2-bg-tertiary)] rounded">
                                ↵
                              </kbd>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// useCommandPalette hook is exported from src/v2/hooks/useCommandPalette.js
