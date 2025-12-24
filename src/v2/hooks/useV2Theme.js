import { useContext } from 'react';
import { V2ThemeContext } from '../context/V2ThemeContext';

export const useV2Theme = () => {
    const context = useContext(V2ThemeContext);
    if (!context) {
        throw new Error('useV2Theme must be used within V2ThemeProvider');
    }
    return context;
};
