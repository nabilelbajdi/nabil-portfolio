/**
 * Combines multiple class values into a single string.
 * Filters out falsy values for conditional class application.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
} 