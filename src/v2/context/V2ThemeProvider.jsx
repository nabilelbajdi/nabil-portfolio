import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const V2ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => null,
  toggleTheme: () => null,
});

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

  // Persist theme changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('v2-theme', theme);
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

export const useV2Theme = () => {
  const context = useContext(V2ThemeContext);
  if (!context) {
    throw new Error('useV2Theme must be used within V2ThemeProvider');
  }
  return context;
};

