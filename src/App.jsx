import { ThemeProvider } from './context/ThemeProvider';
import { MainNav } from './components/layout/MainNav';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
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
