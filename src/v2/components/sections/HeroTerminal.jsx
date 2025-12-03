import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, TerminalPrompt, TerminalOutput } from '../ui/Terminal';

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
      'Type a command and press Enter, or just scroll down.',
    ],
  },
  whoami: {
    output: [
      '┌─────────────────────────────────────────┐',
      '│  Nabil El Bajdi                         │',
      '│  AI Developer & Full-Stack Engineer     │',
      '└─────────────────────────────────────────┘',
      '',
      'I build intelligent systems that actually work.',
      'From DevOps pipelines to AI agents, I like',
      'making complex things simple and reliable.',
      '',
      '📍 Stockholm, Sweden',
      '🎓 AI Engineering @ Nackademin (2026)',
      '💼 Currently at Capgemini',
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
  'sudo su': ['🚫 Permission denied', '', 'This isn\'t that kind of portfolio.'],
  'sudo rm -rf /': ['🔥 Deleting universe...', '', 'Just kidding. I\'m not that reckless.'],
  vim: ['*opens vim*', '', '...', '', 'How do I exit? 😱', '', '(jk, try :q!)'],
  ':q!': ['You escaped vim! 🎉', '', 'Not many can say that.'],
  ':wq': ['Saved and exited! ✨', '', 'A true vim master.'],
  nano: ['Ah, a person of culture. 🧐', '', 'nano > vim (don\'t @ me)'],
  emacs: ['*laughs in keybindings*', '', 'How are your pinky fingers doing?'],
  'rm -rf': ['🚨 ABORT ABORT ABORT', '', 'Just kidding. Nice try though.'],
  'rm -rf /': ['😱 You monster!', '', 'Good thing this is read-only.'],
  coffee: ['☕ Brewing...', '', '██████████ 100%', '', 'Here\'s your mass coffee!'],
  tea: ['🍵 Steeping...', '', 'A developer of refined taste, I see.'],
  hello: ['Hello, World! 👋', '', 'Welcome to my portfolio.'],
  hi: ['Hey there! 👋'],
  hey: ['Hey yourself! 😄'],
  ls: ['about/  projects/  skills/  contact/', '', '→ Type any folder name to explore'],
  'ls -la': ['drwxr-xr-x  nabil  staff  about/', 'drwxr-xr-x  nabil  staff  projects/', 'drwxr-xr-x  nabil  staff  skills/', 'drwxr-xr-x  nabil  staff  contact/', '-rw-r--r--  nabil  staff  .secret', '', 'Wait, what\'s that .secret file? 👀'],
  'cat .secret': ['🔓 You found the secret!', '', 'Here\'s a cookie: 🍪', '', 'Thanks for exploring!'],
  pwd: ['/home/nabil/portfolio/v2'],
  cd: ['Already home. 🏠'],
  'cd ..': ['You can\'t escape that easily!'],
  'cd /': ['Root access denied. Nice try though.'],
  whoami: null, // Handled by main commands
  date: [new Date().toLocaleString()],
  uptime: [`Portfolio running for ${Math.floor(Math.random() * 365)} days, ${Math.floor(Math.random() * 24)} hours`],
  top: ['PID  USER   %CPU  COMMAND', '001  nabil  100%  creativity.js', '002  nabil   85%  problem-solving.exe', '003  nabil   42%  coffee-intake.sh'],
  htop: ['Fancy! But this terminal is too minimal for htop. 😎'],
  man: ['No manual entry. Just vibes. ✨'],
  git: ['git commit -m "visited portfolio" 📝'],
  'git status': ['On branch: hired-soon', 'Your resume: ready to merge'],
  'git push': ['Pushing your visit to the cloud... ☁️', '', 'Thanks for stopping by!'],
  npm: ['npm install talent --save', '', 'Installing... Done! ✅'],
  'npm install': ['📦 Installing dependencies...', '', 'node_modules: 847MB', 'Just kidding. React is already here.'],
  yarn: ['🧶 Yarn? In this economy?', '', 'jk yarn is great too'],
  pip: ['🐍 Wrong terminal, but I appreciate Python devs!'],
  python: ['>>> print("Hello from Python!")', 'Hello from Python!', '', '(This is actually JavaScript though 😅)'],
  node: ['Welcome to Node.js (but React)', '> console.log("hired?")', 'hopefully!'],
  exit: ['👋 Goodbye!', '', '...', '', 'Wait, where would you even go?'],
  quit: ['There is no escape. 😈', '', 'Just kidding, scroll down!'],
  matrix: ['Wake up, Neo...', '', 'The Matrix has you.', '', 'Follow the white rabbit. 🐇'],
  hack: ['🔓 Accessing mainframe...', '████░░░░░░ 40%', '███████░░░ 70%', '██████████ 100%', '', 'Access granted! JK, this is just CSS. 😂'],
  ping: ['PING nabilelbajdi.com', '64 bytes: time=1ms ✓', '64 bytes: time=1ms ✓', '64 bytes: time=1ms ✓', '', 'Portfolio is online! 🌐'],
  curl: ['curl https://hire.nabil.dev', '', '{"status": "available", "coffee": "required"}'],
  wget: ['Downloading talent.zip...', '', 'Download complete! 📥'],
  cat: ['🐱 Meow?', '', 'Try: cat .secret'],
  dog: ['🐕 Woof!', '', 'Good boy.'],
  neofetch: [
    '        .--.        nabil@portfolio',
    '       |o_o |       ----------------',
    '       |:_/ |       OS: Portfolio V2',
    '      //   \\ \\      Host: React 19',
    '     (|     | )     Kernel: Vite 6.2',
    '    /\'\\_   _/`\\     Shell: Framer Motion',
    '    \\___)=(___/     Theme: Midnight Terminal',
  ],
  screenfetch: ['Try neofetch instead. It\'s cooler. 😎'],
  fortune: [
    '🔮 Your fortune:',
    '',
    '"A great developer will visit your portfolio today."',
    '',
    'Oh wait, that\'s you! 🎉',
  ],
  cowsay: [
    ' _____________',
    '< Hire Nabil! >',
    ' -------------',
    '        \\   ^__^',
    '         \\  (oo)\\_______',
    '            (__)\\       )\\/\\',
    '                ||----w |',
    '                ||     ||',
  ],
  sl: ['🚂 Choo choo!', '', 'You meant "ls", didn\'t you?'],
  please: ['Since you asked nicely... ✨', '', 'Try: help'],
  thanks: ['You\'re welcome! 🙏'],
  lol: ['😂'],
  haha: ['I\'m glad you\'re having fun!'],
  69: ['Nice. 😏'],
  420: ['Blaze it? 🌿', '', 'This is a professional portfolio though.'],
  42: ['The answer to life, the universe, and everything.', '', 'You\'re a person of culture. 🎩'],
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
 * TypedOutput - Shows command output instantly (realistic terminal behavior)
 */
function TypedOutput({ lines, onComplete, links }) {
  useEffect(() => {
    // Small delay then complete - feels snappy like real terminal
    const timer = setTimeout(() => {
      onComplete?.();
    }, 50);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <TerminalOutput className="mt-1">
      {lines.map((line, i) => (
        <div key={i} className="whitespace-pre">{line}</div>
      ))}
      {links && (
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
        <p className="text-lg text-[var(--v2-text-secondary)] max-w-lg mx-auto">
          I build intelligent systems that turn complex ideas into simple, usable experiences.
        </p>
      </motion.div>

      {/* Terminal */}
      <Terminal 
        title="portfolio — -zsh — 80×24" 
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
              <span className="text-purple-400 mono text-sm">nabil@portfolio</span>
              <span className="text-[var(--v2-accent)] ml-1">~</span>
              <span className="text-white ml-2">%</span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmit(inputValue);
                  } else if (e.ctrlKey && e.key === 'l') {
                    e.preventDefault();
                    setHistory([{ command: 'clear', output: ['✨ Ooh, someone knows their Linux shortcuts!'] }]);
                    setCurrentCommand(null);
                  } else if (e.ctrlKey && e.key === 'c') {
                    e.preventDefault();
                    setInputValue('');
                    setHistory(prev => [...prev, { command: '^C', output: ['Interrupted. Type "help" to start fresh.'] }]);
                  } else if (e.ctrlKey && e.key === 'u') {
                    e.preventDefault();
                    setInputValue('');
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const lastCmd = history.filter(h => h.command && !h.command.startsWith('^')).pop();
                    if (lastCmd) setInputValue(lastCmd.command);
                  }
                }}
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

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex items-center gap-4 mt-8"
      >
        <a
          href="https://github.com/nabilelbajdi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--v2-text-muted)] hover:text-[var(--v2-accent)] transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/nabilelbajdi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--v2-text-muted)] hover:text-[var(--v2-accent)] transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <span className="w-1 h-1 rounded-full bg-[var(--v2-text-dimmed)]" />
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[var(--v2-text-muted)] hover:text-[var(--v2-accent)] transition-colors"
          aria-label="Resume"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <span className="text-sm">Resume</span>
        </a>
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

