import { V2ThemeProvider } from './context/V2ThemeProvider';
import { PageWrapper } from './components/layout/PageWrapper';
import { HeroTerminal } from './components/sections/HeroTerminal';
import { AboutBento } from './components/sections/AboutBento';
import { ProjectsShowcase } from './components/sections/ProjectsShowcase';
import { SkillsSection } from './components/sections/SkillsSection';
import './styles/v2.css';

function V2Content() {
  return (
    <PageWrapper>
      <HeroTerminal />
      <AboutBento />
      <ProjectsShowcase />
      <SkillsSection />

      <section id="contact" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--v2-text-muted)] mb-4">Contact Section</h2>
          <p className="text-[var(--v2-text-dimmed)] mono text-sm">Coming soon...</p>
        </div>
      </section>
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
