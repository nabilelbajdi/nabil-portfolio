import { Link } from 'react-router-dom';

/**
 * Custom 404 page with terminal aesthetic matching V2
 */
export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0b] text-white p-4">
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
          <div className="bg-[#0a0a0b] p-6 font-mono text-sm">
            <div className="space-y-3">
              <div className="flex">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-zinc-300">find /page</span>
              </div>
              
              <div className="text-red-400">
                Error: Page not found in filesystem
              </div>
              
              <div className="text-zinc-500 text-xs mt-4 pt-4 border-t border-zinc-800">
                The page you're looking for doesn't exist or has been moved.
              </div>

              <div className="flex gap-2 mt-6">
                <span className="text-cyan-400">$</span>
                <span className="text-zinc-500">Suggestions:</span>
              </div>

              <div className="pl-4 space-y-2 text-zinc-400">
                <Link 
                  to="/" 
                  className="block hover:text-cyan-400 transition-colors"
                >
                  → cd /home <span className="text-zinc-600"># Go to homepage</span>
                </Link>
                <a 
                  href="https://v1.nabilelbajdi.com" 
                  className="block hover:text-cyan-400 transition-colors"
                >
                  → cd /v1 <span className="text-zinc-600"># Classic version</span>
                </a>
              </div>

              {/* Blinking cursor */}
              <div className="flex mt-6">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="w-2 h-5 bg-cyan-400 animate-pulse" />
              </div>
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
