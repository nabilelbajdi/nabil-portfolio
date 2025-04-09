export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          {/* Left - Logo */}
          <div className="flex justify-center md:justify-start mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-gradient">
              Nabil
            </a>
          </div>
          
          {/* Center - Copyright */}
          <div className="text-sm text-foreground/70 flex items-center justify-center mb-4 md:mb-0">
            <p>&copy; {currentYear} All rights reserved. Made with</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mx-1 text-red-500 animate-pulse-soft"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            <p>by Nabil</p>
          </div>
          
          {/* Right - Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a 
              href="#" 
              className="text-foreground/80 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-150"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a 
              href="#" 
              className="text-foreground/80 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-150"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-foreground/80 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-150"
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 