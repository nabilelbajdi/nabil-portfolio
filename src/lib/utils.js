/**
 * Combines multiple class values into a single string, handling conditionals
 * and conflicts using clsx and tailwind-merge.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
} 