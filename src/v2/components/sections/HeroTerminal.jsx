import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, TerminalPrompt } from '../ui/Terminal';
import { HistoryLine, TypedOutput } from '../ui/TerminalComponents';
import { COMMANDS, EASTER_EGGS } from '../../data/terminalCommands';
import { useV2Theme } from '../../context/V2ThemeProvider';
import { trackTerminalCommand, trackResumeDownload } from '../../../lib/analytics';

/**
 * HeroTerminal - Interactive terminal hero section
 */
export function HeroTerminal() {
  const { toggleTheme } = useV2Theme();
  const [history, setHistory] = useState([
    {
      command: 'welcome', // for tracking internally
      output: COMMANDS.welcome.output,
      noPrompt: true
    }
  ]);
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

  // Removed auto-run useEffect as history is now pre-populated

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

    // Handle cd navigation (easter egg for devs)
    if (command.startsWith('cd ')) {
      let path = command.slice(3).trim();
      // Normalize: remove trailing slash
      if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1);
      }
      const sections = {
        'about': 'about',
        'projects': 'projects',
        'skills': 'skills',
        'contact': 'contact',
        '~': null, // home
      };

      const sectionId = sections[path];

      if (path in sections) {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setHistory(prev => [...prev, {
              command: cmd,
              output: [`📂 Navigating to /${sectionId}...`],
            }]);
          }
        } else {
          // Home
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setHistory(prev => [...prev, {
            command: cmd,
            output: ['📂 Navigating to home...'],
          }]);
        }
        return;
      } else {
        setHistory(prev => [...prev, {
          command: cmd,
          output: [`cd: no such directory: ${path}`],
        }]);
        return;
      }
    }

    // Check for command or easter egg
    const commandData = COMMANDS[command];
    const easterEgg = EASTER_EGGS[command];

    if (commandData) {
      // Track command usage
      trackTerminalCommand(command);

      // Handle special actions
      if (commandData.action === 'download') {
        trackResumeDownload();
        window.open(commandData.target, '_blank');
      } else if (commandData.action === 'theme') {
        toggleTheme();
      }

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
  }, [toggleTheme]);

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

  // Responsive placeholder
  const [placeholder, setPlaceholder] = useState('Type a command and press Enter');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPlaceholder('Type command...');
      } else {
        setPlaceholder('Type a command and press Enter');
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (value) => {
    if (isTyping) return;
    executeCommand(value);
    setInputValue('');
  };

  // Focus input on terminal click
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-16 pb-12 sm:pb-12">
      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 sm:mb-8"
      >
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--v2-bg-secondary)]/80 backdrop-blur-xl border border-[var(--v2-border)]/50 mb-8 sm:mb-10">
          <span className="w-2 h-2 rounded-full bg-[var(--v2-accent)] animate-pulse" />
          <span className="text-xs sm:text-sm text-[var(--v2-text-secondary)]">
            Currently at Capgemini · Insights & Data
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          I build <span className="text-gradient">AI-powered systems</span> <br />
          and clean developer experiences.
        </h1>
      </motion.div>

      {/* Terminal */}
      <Terminal
        title="portfolio — -zsh — 80×24"
        className="w-full max-w-2xl shadow-2xl"
      >
        <div
          ref={terminalRef}
          onClick={handleTerminalClick}
          className="max-h-[25vh] sm:max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--v2-border)] scrollbar-track-transparent"
        >
          {/* Command History */}
          <AnimatePresence>
            {history.map((entry, index) => (
              <HistoryLine
                key={index}
                entry={entry}
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
              <span className="text-[var(--v2-accent)] mono text-sm font-semibold">nabil@portfolio</span>
              <span className="text-amber-500 ml-1">~</span>
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
                    setHistory([{ command: 'clear', output: ['Ooh, someone knows their Linux shortcuts!'] }]);
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
                placeholder={placeholder}
                className="ml-2 flex-1 bg-transparent text-[var(--v2-text-primary)] outline-none mono placeholder:text-[var(--v2-text-dimmed)]"
                autoComplete="off"
                spellCheck={false}
                autoFocus
              />
              <span className="terminal-cursor" />
            </motion.div>
          )}
        </div>
      </Terminal>

      {/* Terminal Hint + Status Badge + Resume */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-4 sm:mt-6 flex flex-col items-center gap-4"
      >
        {/* Hint */}
        <div className="flex items-center gap-2 text-[var(--v2-text-dimmed)] text-[10px] sm:text-sm px-4 whitespace-nowrap">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="mono">
            <span className="text-[var(--v2-accent)] font-bold">Type commands</span> to interact, or{' '}
            <span className="text-amber-400 font-bold">scroll down</span> to explore
          </span>
        </div>
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

