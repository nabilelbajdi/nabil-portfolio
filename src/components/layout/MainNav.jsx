import { useState, useEffect } from "react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { cn } from "../../lib/utils";

export function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show navbar at the top of the page
      if (currentScrollY < 20) {
        setScrolled(false);
        setHidden(false);
        setLastScrollY(currentScrollY);
        return;
      }

      // Determine scroll direction and update navbar visibility
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }

      setScrolled(true);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 transition-all duration-300",
          scrolled
            ? "py-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm"
            : "py-5 bg-transparent",
          hidden && "-translate-y-full"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img 
              src="/assets/images/logo.png" 
              alt="Nabil El Bajdi" 
              className="h-12 w-auto -my-2" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="px-4 py-2 rounded-md text-foreground/80 dark:text-zinc-300 hover:text-foreground dark:hover:text-white hover:bg-secondary transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 transform transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={cn(
            "absolute right-0 top-0 h-full w-64 bg-white dark:bg-zinc-900 shadow-xl transform transition-transform duration-300 ease-in-out mobile-menu-container",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Close button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-foreground focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Menu Items */}
          <div className="flex flex-col h-full pt-16 pb-6 px-4">
            <ul className="flex-1 flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-lg font-medium text-foreground/80 dark:text-zinc-300 hover:text-foreground dark:hover:text-white hover:bg-secondary rounded-md transition-colors duration-150"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
} 