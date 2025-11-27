import { motion } from 'framer-motion';

/**
 * BentoGrid - Asymmetric grid layout for modern card arrangements
 */
export function BentoGrid({ children, className = '' }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  );
}

/**
 * BentoCard - Individual card in the bento grid
 * 
 * Variants:
 * - default: Standard card
 * - glass: Glassmorphism effect
 * - gradient: Gradient background
 * - outline: Border only
 */
export function BentoCard({ 
  children, 
  className = '',
  variant = 'default',
  delay = 0,
  hover = true,
}) {
  const variantClasses = {
    default: 'bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)]',
    glass: 'bg-[var(--v2-bg-secondary)]/50 backdrop-blur-xl border border-[var(--v2-border)]/50',
    gradient: 'bg-gradient-to-br from-[var(--v2-accent)]/10 to-purple-500/10 border border-[var(--v2-accent)]/20',
    outline: 'bg-transparent border border-[var(--v2-border)]',
    solid: 'bg-[var(--v2-bg-tertiary)] border border-[var(--v2-border)]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -3, transition: { duration: 0.2 } } : {}}
      className={`
        rounded-2xl p-6 
        ${variantClasses[variant]}
        ${hover ? 'transition-all duration-300 hover:shadow-lg hover:shadow-[var(--v2-accent)]/5 hover:border-[var(--v2-border-hover)]' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export function BentoText({ children, className = '' }) {
  return (
    <p className={`text-sm text-[var(--v2-text-secondary)] leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

