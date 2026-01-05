import { useEffect, useState, useCallback } from 'react';
import { V2ThemeContext } from './V2ThemeContext';

/**
 * V2ThemeProvider - Manages theme state for Portfolio V2
 * 
 * Features:
 * - Dark/light mode with localStorage persistence
 * - Separate from V1 theme to allow independent control
 * - Provides toggleTheme helper
 */
export function V2ThemeProvider({ children, defaultTheme = 'dark' }) {
  const [theme, setTheme] = useState(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('v2-theme');
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  // Persist theme changes and sync documentElement class for V1 compatibility
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('v2-theme', theme);
      // Also sync documentElement class so V1 components render correctly
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  // Prevent flash of wrong theme
  if (!mounted) {
    return (
      <div className="v2 min-h-screen bg-[#0a0a0b]" />
    );
  }

  return (
    <V2ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </V2ThemeContext.Provider>
  );
}

// useV2Theme hook is exported from src/v2/hooks/useV2Theme.js
