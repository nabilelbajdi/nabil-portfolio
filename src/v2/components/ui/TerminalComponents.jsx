import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TerminalPrompt, TerminalOutput } from './Terminal';

/**
 * HistoryLine - Renders a single history entry
 */
export function HistoryLine({ entry }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3"
        >
            {!entry.noPrompt && <TerminalPrompt>{entry.command}</TerminalPrompt>}
            <TerminalOutput className="mt-1 whitespace-pre-wrap">
                {entry.output.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}
                {entry.links && (
                    <div className="flex flex-wrap gap-3 mt-2">
                        {entry.links.map((link) => (
                            <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--v2-bg-tertiary)] border border-[var(--v2-border)] rounded-md text-[var(--v2-accent)] hover:border-[var(--v2-accent)] transition-colors text-sm"
                            >
                                <span>{link.icon}</span>
                                <span>{link.label}</span>
                            </a>
                        ))}
                    </div>
                )}
            </TerminalOutput>
        </motion.div>
    );
}

/**
 * TypedOutput - Shows command output instantly (realistic terminal behavior)
 */
export function TypedOutput({ lines, onComplete, links }) {
    useEffect(() => {
        // Small delay then complete - feels snappy like real terminal
        const timer = setTimeout(() => {
            onComplete?.();
        }, 50);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <TerminalOutput className="mt-1">
            {lines.map((line, i) => (
                <div key={i} className="whitespace-pre">{line}</div>
            ))}
            {links && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-wrap gap-3 mt-2"
                >
                    {links.map((link) => (
                        <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--v2-bg-tertiary)] border border-[var(--v2-border)] rounded-md text-[var(--v2-accent)] hover:border-[var(--v2-accent)] transition-colors text-sm"
                        >
                            <span>{link.icon}</span>
                            <span>{link.label}</span>
                        </a>
                    ))}
                </motion.div>
            )}
        </TerminalOutput>
    );
}
