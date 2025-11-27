import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, TerminalPrompt, TerminalOutput } from '../ui/Terminal';
import { useTypewriter } from '../../hooks/useTypewriter';

/**
 * Command definitions with their outputs
 */
const COMMANDS = {
  help: {
    output: [
      'Available commands:',
      '',
      '  whoami      → Learn about me',
      '  skills      → View my tech stack',
      '  projects    → See my work',
      '  contact     → Get in touch',
      '  social      → Find me online',
      '  clear       → Clear terminal',
      '',
      'Tip: Click any command or type and press Enter',
    ],
  },
  whoami: {
    output: [
      '┌─────────────────────────────────────────┐',
      '│  Nabil El Bajdi                         │',
      '│  AI Developer & Creative Problem Solver │',
      '└─────────────────────────────────────────┘',
      '',
      'I build systems that simplify complexity.',
      'Through automation, web development, and AI,',
      'I make technology smarter and life easier.',
      '',
      '📍 Stockholm, Sweden',
      '🎓 DevOps Engineering + AI/ML Studies',
      '💼 Open to opportunities',
    ],
  },
  skills: {
    output: [
      '// Tech Stack',
      '',
      'languages:    Python, JavaScript, TypeScript',
      'frontend:     React, Tailwind CSS, Framer Motion',
      'backend:      FastAPI, Node.js, PostgreSQL',
      'devops:       Docker, GitHub Actions, AWS',
      'ai/ml:        PyTorch, Scikit-learn, Hugging Face',
      '',
      '→ Type "projects" to see these in action',
    ],
    scrollTo: '#skills',
  },
  projects: {
    output: [
      'Featured Projects:',
      '',
      '🎮 GameGloom',
      '   Full-stack gaming platform with AI recommendations',
      '   → gamegloom.com',
      '',
      '📊 Mental Health Dashboard', 
      '   Interactive data visualization with Streamlit',
      '',
      '📄 DevOps Resume',
      '   CI/CD automated resume with monitoring',
      '',
      '→ Scroll down to explore each project',
    ],
    scrollTo: '#projects',
  },
  contact: {
    output: [
      'Let\'s connect!',
      '',
      '📧 Email:    nabilelbajdii@gmail.com',
      '💼 LinkedIn: /in/nabil-el-bajdi',
      '🐙 GitHub:   /nabilelbajdi',
      '',
      '→ Type "social" for clickable links',
    ],
    scrollTo: '#contact',
  },
  social: {
    output: [
      'Find me online:',
      '',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/nabilelbajdi', icon: '🐙' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nabil-el-bajdi-51726b24b/', icon: '💼' },
      { label: 'Email', url: 'mailto:nabilelbajdii@gmail.com', icon: '📧' },
    ],
  },
  clear: {
    action: 'clear',
  },
};

// Easter egg commands
const EASTER_EGGS = {
  sudo: ['Nice try! 🔐', '', 'But you don\'t have root access here.'],
  vim: ['*opens vim*', '', '...', '', 'How do I exit? 😱', '', '(jk, try :q!)'],
  'rm -rf': ['🚨 ABORT ABORT ABORT', '', 'Just kidding. Nice try though.'],
  coffee: ['☕ Brewing...', '', '██████████ 100%', '', 'Here\'s your mass coffee!'],
  hello: ['Hello, World! 👋', '', 'Welcome to my portfolio.'],
  hi: ['Hey there! 👋'],
  ls: ['about/  projects/  skills/  contact/', '', '→ Type any folder name to explore'],
  pwd: ['/home/nabil/portfolio/v2'],
  date: [new Date().toLocaleString()],
  neofetch: [
    '        .--.        nabil@portfolio',
    '       |o_o |       ----------------',
    '       |:_/ |       OS: Portfolio V2',
    '      //   \\ \\      Host: React 19',
    '     (|     | )     Kernel: Vite 6.2',
    '    /\'\\_   _/`\\     Shell: Framer Motion',
    '    \\___)=(___/     Theme: Midnight Terminal',
  ],
};

/**
 * HistoryLine - Renders a single history entry
 */
function HistoryLine({ entry, onCommandClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-3"
    >
      <TerminalPrompt>{entry.command}</TerminalPrompt>
      <TerminalOutput className="mt-1 whitespace-pre-wrap">
        {entry.output.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {entry.links && (
          <div className="flex flex-wrap gap-3 mt-2">
            {entry.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--v2-bg-tertiary)] border border-[var(--v2-border)] rounded-md text-[var(--v2-accent)] hover:border-[var(--v2-accent)] transition-colors text-sm"
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        )}
      </TerminalOutput>
    </motion.div>
  );
}

/**
 * TypedOutput - Animates typing for command output
 */
function TypedOutput({ lines, onComplete, links }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  
  const currentLine = lines[currentLineIndex];
  const { displayText, isComplete } = useTypewriter(currentLine || '', {
    speed: 15,
    enabled: currentLineIndex < lines.length,
  });

  useEffect(() => {
    if (isComplete && currentLineIndex < lines.length) {
      setVisibleLines(prev => [...prev, lines[currentLineIndex]]);
      
      if (currentLineIndex < lines.length - 1) {
        const timer = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        onComplete?.();
      }
    }
  }, [isComplete, currentLineIndex, lines, onComplete]);

  return (
    <TerminalOutput className="mt-1">
      {visibleLines.map((line, i) => (
        <div key={i} className="whitespace-pre">{line}</div>
      ))}
      {currentLineIndex < lines.length && (
        <div className="whitespace-pre">{displayText}</div>
      )}
      {links && visibleLines.length === lines.length && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap gap-3 mt-2"
        >
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--v2-bg-tertiary)] border border-[var(--v2-border)] rounded-md text-[var(--v2-accent)] hover:border-[var(--v2-accent)] transition-colors text-sm"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </motion.div>
      )}
    </TerminalOutput>
  );
}

/**
 * HeroTerminal - Interactive terminal hero section
 */
export function HeroTerminal() {
  const [history, setHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentCommand, setCurrentCommand] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  // Hide scroll hint once user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-run intro sequence on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      executeCommand('help');
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, currentCommand]);

  const executeCommand = useCallback((cmd) => {
    const command = cmd.toLowerCase().trim();
    
    if (!command) return;

    // Handle clear command
    if (command === 'clear') {
      setHistory([]);
      setCurrentCommand(null);
      return;
    }

    // Check for command or easter egg
    const commandData = COMMANDS[command];
    const easterEgg = EASTER_EGGS[command];

    if (commandData) {
      setIsTyping(true);
      setCurrentCommand({
        command: cmd,
        output: commandData.output || [],
        links: commandData.links,
        scrollTo: commandData.scrollTo,
      });
    } else if (easterEgg) {
      setIsTyping(true);
      setCurrentCommand({
        command: cmd,
        output: easterEgg,
      });
    } else {
      // Unknown command
      setHistory(prev => [...prev, {
        command: cmd,
        output: [`Command not found: ${cmd}`, '', 'Type "help" for available commands.'],
      }]);
    }
  }, []);

  const handleTypingComplete = useCallback(() => {
    if (currentCommand) {
      setHistory(prev => [...prev, {
        command: currentCommand.command,
        output: currentCommand.output,
        links: currentCommand.links,
      }]);
      
      // Scroll to section if specified
      if (currentCommand.scrollTo) {
        setTimeout(() => {
          document.querySelector(currentCommand.scrollTo)?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }, 500);
      }
      
      setCurrentCommand(null);
      setIsTyping(false);
    }
  }, [currentCommand]);

  const handleSubmit = (value) => {
    if (isTyping) return;
    executeCommand(value);
    setInputValue('');
  };

  const handleQuickCommand = (cmd) => {
    if (isTyping) return;
    executeCommand(cmd);
  };

  // Focus input on terminal click
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-12">
      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight">
          <span className="text-[var(--v2-text-primary)]">Hi, I'm </span>
          <span className="text-[var(--v2-accent)] text-glow">Nabil</span>
        </h1>
        <p className="text-lg text-[var(--v2-text-secondary)] max-w-md mx-auto">
          AI Developer & Creative Problem Solver
        </p>
      </motion.div>

      {/* Terminal */}
      <Terminal 
        title="nabil@portfolio:~" 
        className="w-full max-w-2xl shadow-2xl"
      >
        <div 
          ref={terminalRef}
          onClick={handleTerminalClick}
          className="max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--v2-border)] scrollbar-track-transparent"
        >
          {/* Command History */}
          <AnimatePresence>
            {history.map((entry, index) => (
              <HistoryLine 
                key={index} 
                entry={entry} 
                onCommandClick={handleQuickCommand}
              />
            ))}
          </AnimatePresence>

          {/* Currently Typing Output */}
          {currentCommand && (
            <div className="mb-3">
              <TerminalPrompt>{currentCommand.command}</TerminalPrompt>
              <TypedOutput 
                lines={currentCommand.output} 
                links={currentCommand.links}
                onComplete={handleTypingComplete}
              />
            </div>
          )}

          {/* Input Line */}
          {!isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <span className="terminal-prompt">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit(inputValue)}
                placeholder="Type a command..."
                className="ml-2 flex-1 bg-transparent text-[var(--v2-text-primary)] outline-none mono placeholder:text-[var(--v2-text-dimmed)] text-sm sm:text-base"
                autoComplete="off"
                spellCheck={false}
                autoFocus
              />
              <span className="terminal-cursor" />
            </motion.div>
          )}
        </div>
      </Terminal>

      {/* Quick Commands */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-wrap justify-center gap-2 mt-6"
      >
        {['whoami', 'skills', 'projects', 'contact'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleQuickCommand(cmd)}
            disabled={isTyping}
            className="px-4 py-2 text-sm mono text-[var(--v2-text-muted)] bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)] rounded-lg hover:text-[var(--v2-accent)] hover:border-[var(--v2-accent)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {cmd}
          </button>
        ))}
      </motion.div>

      {/* Scroll Hint */}
      <AnimatePresence>
        {!hasScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--v2-text-dimmed)]"
          >
            <span className="text-xs mono">scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

