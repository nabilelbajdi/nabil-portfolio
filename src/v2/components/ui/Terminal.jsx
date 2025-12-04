import { forwardRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Terminal - Reusable terminal window component
 * 
 * Features:
 * - macOS-style window chrome
 * - Customizable title
 * - Entrance animation
 */
export const Terminal = forwardRef(function Terminal({ 
  children, 
  title = 'terminal',
  className = '',
  animate = true,
}, ref) {
  const Wrapper = animate ? motion.div : 'div';
  const wrapperProps = animate ? {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.5, ease: 'easeOut' },
  } : {};

  return (
    <Wrapper
      ref={ref}
      className={`terminal overflow-hidden ${className}`}
      {...wrapperProps}
    >
      {/* Window Chrome */}
      <div className="terminal-header flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <div className="terminal-dot red w-3 h-3" />
          <div className="terminal-dot yellow w-3 h-3" />
          <div className="terminal-dot green w-3 h-3" />
        </div>
        <span className="ml-2 text-xs text-gray-300 font-bold flex items-center gap-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif' }}>
          <img src="/mac-folder.png" alt="folder" className="w-4 h-4" />
          {title}
        </span>
      </div>
      
      {/* Terminal Body */}
      <div className="terminal-body">
        {children}
      </div>
    </Wrapper>
  );
});

/**
 * TerminalLine - A single line in the terminal
 */
export function TerminalLine({ children, className = '' }) {
  return (
    <div className={`terminal-line ${className}`}>
      {children}
    </div>
  );
}

/**
 * TerminalPrompt - Command prompt with $ symbol
 */
export function TerminalPrompt({ children, showCursor = false }) {
  return (
    <div className="flex items-center">
      <span className="text-purple-400 mono text-sm">nabil@portfolio</span>
      <span className="text-[var(--v2-accent)] ml-1">~</span>
      <span className="text-white ml-2">%</span>
      <span className="ml-2 text-[var(--v2-text-primary)]">{children}</span>
      {showCursor && <span className="terminal-cursor" />}
    </div>
  );
}

/**
 * TerminalOutput - Command output/response
 */
export function TerminalOutput({ children, className = '' }) {
  return (
    <div className={`pl-4 text-[var(--v2-text-secondary)] ${className}`}>
      {children}
    </div>
  );
}

/**
 * TerminalInput - Interactive command input
 */
export function TerminalInput({ 
  value, 
  onChange, 
  onSubmit, 
  disabled = false,
  placeholder = '',
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !disabled) {
      onSubmit?.(value);
    }
  };

  return (
    <div className="flex items-center">
      <span className="text-purple-400 mono text-sm">nabil@portfolio</span>
      <span className="text-[var(--v2-accent)] ml-1">~</span>
      <span className="text-white ml-2">%</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={placeholder}
        aria-label="Terminal command input"
        className="ml-2 flex-1 bg-transparent text-[var(--v2-text-primary)] outline-none mono placeholder:text-[var(--v2-text-dimmed)] focus:ring-1 focus:ring-[var(--v2-accent)]/50 rounded"
        autoComplete="off"
        spellCheck={false}
      />
      <span className="terminal-cursor" />
    </div>
  );
}

