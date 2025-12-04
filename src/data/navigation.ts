/**
 * Centralized navigation configuration.
 * Single source of truth for all navigation items.
 */

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface NavCommand {
  id: string;
  label: string;
  section: string;
  action: string;
  target: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

/**
 * Navigation items with home (for mobile menus)
 */
export const NAV_ITEMS_WITH_HOME: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  ...NAV_ITEMS,
];

/**
 * Get navigation items for command palette
 */
export const getNavCommandsForPalette = (): NavCommand[] => 
  NAV_ITEMS_WITH_HOME.map(item => ({
    id: item.id,
    label: `Go to ${item.label}`,
    section: 'Navigation',
    action: 'scroll',
    target: item.href,
  }));
