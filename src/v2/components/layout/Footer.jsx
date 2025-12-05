export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 sm:px-6 border-t border-[var(--v2-border)]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--v2-text-dimmed)]">
        <span>© {currentYear} Nabil El Bajdi</span>
        <span className="mono">React · Vite · Tailwind · Framer Motion</span>
      </div>
    </footer>
  );
}

