import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Custom 404 page with interactive terminal
 */
export function NotFound() {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState([
    { type: 'command', text: 'find /page' },
    { type: 'error', text: 'Error: Page not found in filesystem' },
  ]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const navigate = useNavigate();

  // Focus input on mount and when clicking terminal
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = command.trim().toLowerCase();
    
    if (!cmd) return;

    // Add command to history
    const newHistory = [...history, { type: 'command', text: cmd }];

    // Process command
    if (cmd === 'cd /home' || cmd === 'cd ~' || cmd === 'cd /' || cmd === 'home') {
      setHistory([...newHistory, { type: 'success', text: 'Navigating to home...' }]);
      setTimeout(() => navigate('/'), 500);
    } else if (cmd === 'cd /v1' || cmd === 'v1') {
      setHistory([...newHistory, { type: 'success', text: 'Navigating to v1...' }]);
      setTimeout(() => window.location.href = 'https://v1.nabilelbajdi.com', 500);
    } else if (cmd === 'help' || cmd === '?') {
      setHistory([...newHistory, { 
        type: 'help', 
        text: 'Available commands:\n  cd /home  - Go to homepage\n  cd /v1    - Classic portfolio\n  clear     - Clear terminal\n  help      - Show this message' 
      }]);
    } else if (cmd === 'clear' || cmd === 'cls') {
      setHistory([]);
    } else if (cmd === 'ls') {
      setHistory([...newHistory, { type: 'output', text: 'home/  v1/' }]);
    } else if (cmd === 'pwd') {
      setHistory([...newHistory, { type: 'output', text: '/404' }]);
    } else {
      setHistory([...newHistory, { 
        type: 'error', 
        text: `Command not found: ${cmd}. Type 'help' for available commands.` 
      }]);
    }

    setCommand('');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-[#0a0a0b] text-white p-4"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="max-w-lg w-full">
        {/* Terminal window */}
        <div className="rounded-lg border border-zinc-800 overflow-hidden shadow-2xl">
          {/* Terminal header */}
          <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-zinc-500 font-mono ml-2">404 — not found</span>
          </div>

          {/* Terminal content */}
          <div 
            ref={terminalRef}
            className="bg-[#0a0a0b] p-6 font-mono text-sm max-h-80 overflow-y-auto"
          >
            <div className="space-y-2">
              {/* Command history */}
              {history.map((item, i) => (
                <div key={i}>
                  {item.type === 'command' && (
                    <div className="flex">
                      <span className="text-cyan-400 mr-2">$</span>
                      <span className="text-zinc-300">{item.text}</span>
                    </div>
                  )}
                  {item.type === 'error' && (
                    <div className="text-red-400 pl-4">{item.text}</div>
                  )}
                  {item.type === 'success' && (
                    <div className="text-green-400 pl-4">{item.text}</div>
                  )}
                  {item.type === 'output' && (
                    <div className="text-zinc-400 pl-4">{item.text}</div>
                  )}
                  {item.type === 'help' && (
                    <pre className="text-zinc-400 pl-4 whitespace-pre-wrap">{item.text}</pre>
                  )}
                </div>
              ))}

              {/* Hint after initial error */}
              {history.length === 2 && (
                <div className="text-zinc-600 text-xs mt-4 pt-4 border-t border-zinc-800">
                  Type <span className="text-cyan-400/70">cd /home</span> to go home or{' '}
                  <span className="text-cyan-400/70">cd /v1</span> for classic version.{' '}
                  <span className="text-cyan-400/70">help</span> for more commands.
                </div>
              )}

              {/* Input line */}
              <form onSubmit={handleCommand} className="flex items-center mt-4">
                <span className="text-cyan-400 mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  className="flex-1 bg-transparent text-zinc-300 outline-none caret-cyan-400"
                  placeholder=""
                  autoComplete="off"
                  spellCheck="false"
                />
                <span className="w-2 h-5 bg-cyan-400 animate-pulse" />
              </form>
            </div>
          </div>
        </div>

        {/* ASCII art */}
        <pre className="text-center text-zinc-700 text-xs mt-8 font-mono select-none">
{`
    ___  ___  ___
   /   |/   |/   |
  / /| | /| | /| |
 / ___ |/ | |/ | |
/_/  |_|  |_|  |_|
`}
        </pre>
      </div>
    </div>
  );
}
