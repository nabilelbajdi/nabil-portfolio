import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check for theme preference in localStorage (V1-specific key)
    const savedTheme = localStorage.getItem('v1-theme');

    // If theme is saved in localStorage, use that
    // Otherwise, default to dark theme
    const initialTheme = savedTheme || 'dark';

    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    // Apply theme class to html element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save theme preference to localStorage (V1-specific key)
    localStorage.setItem('v1-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// useTheme hook is exported from src/hooks/useTheme.js