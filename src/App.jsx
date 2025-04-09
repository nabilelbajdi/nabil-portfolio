import { ThemeProvider } from './context/ThemeProvider';
import { MainNav } from './components/layout/MainNav';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { SpotlightEffect } from './components/ui/SpotlightEffect';
import { useEffect, useState } from 'react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <ThemeProvider>
      {/* Global background elements */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-zinc-900/90" />
      <div className="fixed top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl opacity-70 dark:opacity-40 -z-40" />
      <div className="fixed bottom-[-20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-purple-600/20 to-blue-400/20 blur-3xl opacity-70 dark:opacity-40 -z-40" />
      
      <div className="min-h-screen relative z-0">
        {/* Cursor spotlight effect placed inside the ThemeProvider context */}
        <SpotlightEffect mousePosition={mousePosition} />
        
        <MainNav />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
