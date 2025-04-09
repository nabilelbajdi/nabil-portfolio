import { useTheme } from '../../context/ThemeProvider';

export function SpotlightEffect({ mousePosition }) {
  const { theme } = useTheme();
  
  // Theme-specific spotlight styling
  let spotlightBackground;
  
  if (theme === 'dark') {
    // Purple glow for dark mode
    spotlightBackground = `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 58, 237, 0.15), transparent 80%)`;
  } else {
    // For light mode: a subtle gradient blend of light blue and light purple
    spotlightBackground = `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, 
      rgba(99, 102, 241, 0.12), 
      rgba(168, 85, 247, 0.08) 35%, 
      rgba(59, 130, 246, 0.05) 70%, 
      transparent 100%)`;
  }
  
  return (
    <div 
      className="pointer-events-none fixed inset-0 -z-30 transition duration-300 opacity-0 md:opacity-100" 
      style={{ background: spotlightBackground }}
    />
  );
} 