import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { V2ThemeProvider } from './context/V2ThemeProvider';
import { PageWrapper } from './components/layout/PageWrapper';
import './styles/v2.css';

/**
 * V2Content - The actual page content (separated for provider wrapping)
 */
function V2Content() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        {/* Breadcrumb path */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 mono text-sm text-[var(--v2-text-muted)]"
        >
          <span className="text-[var(--v2-accent)]">~</span>
          <span className="text-[var(--v2-text-dimmed)]">/</span>
          <span>portfolio</span>
          <span className="text-[var(--v2-text-dimmed)]">/</span>
          <span className="text-[var(--v2-text-secondary)]">v2</span>
        </motion.div>
        
        {/* Main heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-center"
        >
          <span className="text-[var(--v2-accent)] text-glow">V2</span>
          <span className="text-[var(--v2-text-primary)]"> is brewing</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-[var(--v2-text-secondary)] mb-12 max-w-lg text-center leading-relaxed"
        >
          A completely reimagined portfolio experience. 
          <br className="hidden sm:block" />
          <span className="text-[var(--v2-text-muted)]">Interactive. Immersive. Unique.</span>
        </motion.p>
        
        {/* Terminal preview */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="terminal max-w-xl w-full mb-12 shadow-lg"
        >
          <div className="terminal-header">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="ml-3 text-xs text-[var(--v2-text-muted)] mono">terminal — zsh</span>
          </div>
          <div className="terminal-body space-y-3">
            <div>
              <span className="terminal-prompt">$</span>
              <span className="text-[var(--v2-text-primary)] ml-2">whoami</span>
            </div>
            <div className="text-[var(--v2-text-secondary)] pl-4">
              → Nabil El Bajdi — AI Developer & Problem Solver
            </div>
            <div>
              <span className="terminal-prompt">$</span>
              <span className="text-[var(--v2-text-primary)] ml-2">cat status.txt</span>
            </div>
            <div className="text-[var(--v2-text-secondary)] pl-4">
              → Building something amazing...
            </div>
            <div>
              <span className="terminal-prompt">$</span>
              <span className="text-[var(--v2-text-primary)] ml-2">ls features/</span>
            </div>
            <div className="text-[var(--v2-text-secondary)] pl-4 flex flex-wrap gap-x-4">
              <span className="text-[var(--v2-accent)]">terminal-hero/</span>
              <span className="text-[var(--v2-accent)]">bento-grid/</span>
              <span className="text-[var(--v2-accent)]">3d-cards/</span>
              <span className="text-[var(--v2-accent)]">cmd-palette/</span>
            </div>
            <div className="flex items-center">
              <span className="terminal-prompt">$</span>
              <span className="terminal-cursor" />
            </div>
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            to="/" 
            className="group btn btn-secondary gap-3 px-6 py-3"
          >
            <svg 
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Back to Main Portfolio</span>
          </Link>
        </motion.div>
        
        {/* Version indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-xs text-[var(--v2-text-dimmed)] mono"
        >
          <span>react 19</span>
          <span className="w-1 h-1 rounded-full bg-[var(--v2-border)]" />
          <span>framer-motion</span>
          <span className="w-1 h-1 rounded-full bg-[var(--v2-border)]" />
          <span>tailwind v4</span>
        </motion.div>
      </div>
    </PageWrapper>
  );
}

/**
 * V2App - Entry point with providers
 */
function V2App() {
  return (
    <V2ThemeProvider defaultTheme="dark">
      <V2Content />
    </V2ThemeProvider>
  );
}

export default V2App;
