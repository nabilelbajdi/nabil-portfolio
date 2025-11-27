import { V2ThemeProvider } from './context/V2ThemeProvider';
import { PageWrapper } from './components/layout/PageWrapper';
import { Footer } from './components/layout/Footer';
import { HeroTerminal } from './components/sections/HeroTerminal';
import { AboutBento } from './components/sections/AboutBento';
import { ProjectsShowcase } from './components/sections/ProjectsShowcase';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { CommandPalette, useCommandPalette } from './components/ui/CommandPalette';
import './styles/v2.css';

function V2Content() {
  const commandPalette = useCommandPalette();
  
  return (
    <PageWrapper onOpenCommandPalette={commandPalette.open}>
      <HeroTerminal />
      <AboutBento />
      <ProjectsShowcase />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <CommandPalette isOpen={commandPalette.isOpen} onClose={commandPalette.close} />
    </PageWrapper>
  );
}

function V2App() {
  return (
    <V2ThemeProvider defaultTheme="dark">
      <V2Content />
    </V2ThemeProvider>
  );
}

export default V2App;
