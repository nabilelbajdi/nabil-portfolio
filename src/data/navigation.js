/**
 * Centralized navigation configuration.
 * Single source of truth for all navigation items.
 */

export const NAV_ITEMS = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

/**
 * Navigation items with home (for mobile menus)
 */
export const NAV_ITEMS_WITH_HOME = [
  { id: 'home', label: 'Home', href: '#home' },
  ...NAV_ITEMS,
];

/**
 * Get navigation items for command palette
 */
export const getNavCommandsForPalette = () => 
  NAV_ITEMS_WITH_HOME.map(item => ({
    id: item.id,
    label: `Go to ${item.label}`,
    section: 'Navigation',
    action: 'scroll',
    target: item.href,
  }));
