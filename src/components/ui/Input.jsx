import { cn } from '../../lib/utils';

export function Input({ className, type = 'text', ...props }) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-background px-3 py-2 text-base hover:border-zinc-300 dark:hover:border-zinc-700 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 focus:ring-2 focus:ring-zinc-500/20 dark:focus:ring-zinc-400/20 transition-all disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className
      )}
      {...props}
    />
  );
} 