import { createContext } from 'react';

export const V2ThemeContext = createContext({
    theme: 'dark',
    setTheme: () => null,
    toggleTheme: () => null,
});
