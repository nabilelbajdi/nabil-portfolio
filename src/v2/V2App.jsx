import { V2ThemeProvider } from './context/V2ThemeProvider';
import { PageWrapper } from './components/layout/PageWrapper';
import { HeroTerminal } from './components/sections/HeroTerminal';
import './styles/v2.css';

/**
 * V2Content - The actual page content
 */
function V2Content() {
  return (
    <PageWrapper>
      {/* Hero Section with Interactive Terminal */}
      <HeroTerminal />

      {/* Placeholder for upcoming sections */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--v2-text-muted)] mb-4">About Section</h2>
          <p className="text-[var(--v2-text-dimmed)] mono text-sm">Coming soon...</p>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--v2-text-muted)] mb-4">Projects Section</h2>
          <p className="text-[var(--v2-text-dimmed)] mono text-sm">Coming soon...</p>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--v2-text-muted)] mb-4">Skills Section</h2>
          <p className="text-[var(--v2-text-dimmed)] mono text-sm">Coming soon...</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--v2-text-muted)] mb-4">Contact Section</h2>
          <p className="text-[var(--v2-text-dimmed)] mono text-sm">Coming soon...</p>
        </div>
      </section>
    </PageWrapper>
  );
}

/**
 * V2App - Entry point with providers
 */
function V2App() {
  return (
    <V2ThemeProvider defaultTheme="dark">
      <V2Content />
    </V2ThemeProvider>
  );
}

export default V2App;
