import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-[var(--v2-border)]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--v2-accent)] flex items-center justify-center text-[var(--v2-bg-primary)] font-bold text-sm">
              N
            </div>
            <span className="text-sm text-[var(--v2-text-muted)]">
              © {currentYear} Nabil El Bajdi
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <Link 
              to="/"
              className="text-[var(--v2-text-muted)] hover:text-[var(--v2-text-primary)] transition-colors"
            >
              View V1
            </Link>
            <a 
              href="https://github.com/nabilelbajdi/nabil-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--v2-text-muted)] hover:text-[var(--v2-text-primary)] transition-colors"
            >
              Source
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-[var(--v2-border-subtle)] text-center">
          <p className="text-xs text-[var(--v2-text-dimmed)] mono">
            Built with React + Vite + Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

