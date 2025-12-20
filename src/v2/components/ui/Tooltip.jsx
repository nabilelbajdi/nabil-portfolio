import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Tooltip - Premium hover tooltip component
 */
export function Tooltip({ children, content, position = 'bottom' }) {
    const [isVisible, setIsVisible] = useState(false);

    const positionClasses = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    return (
        <div
            className="relative inline-flex items-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: position === 'bottom' ? -4 : 4, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: position === 'bottom' ? -4 : 4, scale: 0.95 }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                        className={`absolute z-[200] px-2 py-1 text-[10px] mono text-[var(--v2-text-secondary)] bg-[var(--v2-bg-primary)] border border-[var(--v2-border)] rounded shadow-2xl whitespace-nowrap pointer-events-none ${positionClasses[position]}`}
                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
