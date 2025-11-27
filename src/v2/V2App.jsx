import { Link } from 'react-router-dom';
import './styles/v2.css';

/**
 * V2App - The new portfolio experience
 * Features: Terminal hero, bento grid, 3D cards, command palette
 */
function V2App() {
  return (
    <div className="v2 min-h-screen bg-[var(--v2-bg-primary)] text-[var(--v2-text-primary)]">
      {/* Noise/grain overlay for texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Placeholder content - will be replaced with actual sections */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Terminal-style header */}
        <div className="mb-8 font-mono text-sm text-[var(--v2-text-muted)]">
          <span className="text-[var(--v2-accent)]">~</span> / portfolio / v2
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-[var(--v2-accent)]">V2</span> Coming Soon
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-[var(--v2-text-secondary)] mb-12 max-w-md text-center">
          A completely reimagined portfolio experience. 
          Interactive. Immersive. Unique.
        </p>
        
        {/* Terminal-style command preview */}
        <div className="bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)] rounded-lg p-6 mb-12 font-mono text-sm max-w-lg w-full">
          <div className="flex items-center gap-2 mb-4 text-[var(--v2-text-muted)]">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-2">terminal</span>
          </div>
          <div className="space-y-2">
            <p>
              <span className="text-[var(--v2-accent)]">$</span> whoami
            </p>
            <p className="text-[var(--v2-text-secondary)]">
              → Nabil El Bajdi - AI Developer
            </p>
            <p>
              <span className="text-[var(--v2-accent)]">$</span> cat status.txt
            </p>
            <p className="text-[var(--v2-text-secondary)]">
              → Building something amazing...
            </p>
            <p className="flex items-center">
              <span className="text-[var(--v2-accent)]">$</span>
              <span className="ml-1 w-2 h-4 bg-[var(--v2-accent)] animate-pulse"></span>
            </p>
          </div>
        </div>
        
        {/* Link to V1 */}
        <Link 
          to="/v1" 
          className="group inline-flex items-center gap-2 px-6 py-3 bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)] rounded-lg text-[var(--v2-text-secondary)] hover:text-[var(--v2-text-primary)] hover:border-[var(--v2-accent)] transition-all duration-300"
        >
          <span>View Current Portfolio (V1)</span>
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        
        {/* Version indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-xs text-[var(--v2-text-muted)] font-mono">
          <span>react 19</span>
          <span className="w-1 h-1 rounded-full bg-[var(--v2-border)]"></span>
          <span>framer-motion</span>
          <span className="w-1 h-1 rounded-full bg-[var(--v2-border)]"></span>
          <span>tailwind v4</span>
        </div>
      </div>
    </div>
  );
}

export default V2App;

