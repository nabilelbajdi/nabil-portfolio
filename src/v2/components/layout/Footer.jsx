import { Github, Linkedin, Mail, CircleCheck } from 'lucide-react';
import { SOCIAL_LINKS } from '../../../data/socialLinks';
import { Tooltip } from '../ui/Tooltip';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-[var(--v2-border)] bg-[var(--v2-bg-secondary)]/30 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Copyright & Status */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-sm text-[var(--v2-text-secondary)]">
            <span>© {currentYear} Nabil El Bajdi</span>
          </div>
          <div className="flex items-center gap-2 text-xs mono text-[var(--v2-text-dimmed)]">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500/50"></span>
              </span>
              Stockholm, Sweden
            </span>
          </div>
        </div>

        {/* Center: Tech Stack (Visible on larger screens) */}
        <div className="hidden md:flex gap-3 text-xs mono text-[var(--v2-text-dimmed)]">
          <Tooltip content="react.dev" position="top">
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--v2-accent)] transition-colors cursor-pointer">React</a>
          </Tooltip>
          <span>·</span>
          <Tooltip content="vitejs.dev" position="top">
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--v2-accent)] transition-colors cursor-pointer">Vite</a>
          </Tooltip>
          <span>·</span>
          <Tooltip content="tailwindcss.com" position="top">
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--v2-accent)] transition-colors cursor-pointer">Tailwind</a>
          </Tooltip>
          <span>·</span>
          <Tooltip content="motion.dev" position="top">
            <a href="https://motion.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--v2-accent)] transition-colors cursor-pointer">Motion</a>
          </Tooltip>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          <Tooltip content="GitHub" position="top">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--v2-text-muted)] hover:text-[var(--v2-accent)] transition-colors cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </Tooltip>

          <Tooltip content="LinkedIn" position="top">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--v2-text-muted)] hover:text-[var(--v2-accent)] transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </Tooltip>

          <Tooltip content="Email" position="top">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-[var(--v2-text-muted)] hover:text-[var(--v2-accent)] transition-colors cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </Tooltip>
        </div>
      </div>

      {/* Mobile Tech Stack (Bottom) */}
      <div className="md:hidden flex justify-center mt-6 text-[10px] mono text-[var(--v2-text-dimmed)] gap-2">
        <span>Built with React & Tailwind</span>
      </div>
    </footer>
  );
}
