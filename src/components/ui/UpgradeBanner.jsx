import { useState, useEffect } from 'react';

/**
 * Banner promoting the new portfolio version
 * Dismissible and remembers preference in localStorage
 */
export function UpgradeBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the banner before
    const dismissed = localStorage.getItem('v2-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('v2-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 dark:bg-zinc-800/95 backdrop-blur-sm text-zinc-300 py-2 px-4 text-center text-xs border-b border-zinc-700/50">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <span>
          A new version of this portfolio is available.{' '}
          <a 
            href="https://nabilelbajdi.com" 
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            View it here →
          </a>
        </span>
        <button
          onClick={handleDismiss}
          className="ml-3 p-0.5 text-zinc-500 hover:text-zinc-300 transition-colors"
          aria-label="Dismiss banner"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
