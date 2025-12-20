import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../../data/socialLinks';
import { trackContactClick, trackResumeDownload } from '../../../lib/analytics';

export function ContactSection() {
    // Filter to show GitHub and LinkedIn
    const displayedSocials = SOCIAL_LINKS.filter(link =>
        link.id === 'github' || link.id === 'linkedin'
    );

    return (
        <section id="contact" className="py-24 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="text-[var(--v2-accent)] mono text-sm mb-2 block">// contact</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--v2-text-primary)] mb-4">
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-[var(--v2-text-secondary)] max-w-lg mx-auto">
                        Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="p-4 sm:p-8 rounded-2xl bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)] mb-6 sm:mb-8"
                >
                    <div className="mono text-[10px] sm:text-xs text-[var(--v2-text-dimmed)] mb-3 sm:mb-6">% cat contact.json</div>
                    <div className="space-y-1.5 sm:space-y-4 mono text-[10px] sm:text-sm">
                        <div className="flex flex-row items-baseline sm:items-center gap-2 sm:gap-0">
                            <span className="text-amber-400 w-16 sm:w-24 shrink-0">"email"</span>
                            <span className="text-[var(--v2-text-muted)]">:</span>
                            <a
                                href="mailto:nabilelbajdii@gmail.com"
                                className="ml-2 text-[var(--v2-text-secondary)] hover:text-[var(--v2-accent)] transition-colors truncate"
                            >
                                "nabilelbajdii@gmail.com"
                            </a>
                        </div>
                        <div className="flex flex-row items-baseline sm:items-center gap-2 sm:gap-0">
                            <span className="text-amber-400 w-16 sm:w-24 shrink-0">"location"</span>
                            <span className="text-[var(--v2-text-muted)]">:</span>
                            <span className="ml-2 text-[var(--v2-text-secondary)]">"Stockholm, Sweden"</span>
                        </div>
                        <div className="flex flex-row items-baseline sm:items-center gap-2 sm:gap-0">
                            <span className="text-amber-400 w-16 sm:w-24 shrink-0">"status"</span>
                            <span className="text-[var(--v2-text-muted)]">:</span>
                            <span className="ml-2 text-[var(--v2-text-secondary)]">"At Capgemini"</span>
                        </div>

                        {/* Social Links */}
                        <div className="pt-3 sm:pt-4 border-t border-[var(--v2-border)]">
                            <div className="flex flex-row items-baseline sm:items-center gap-2 sm:gap-0 mb-1 sm:mb-2">
                                <span className="text-amber-400 w-16 sm:w-24 shrink-0">"socials"</span>
                                <span className="text-[var(--v2-text-muted)]">:</span>
                                <span className="ml-2 text-[var(--v2-text-muted)]">&#123;</span>
                            </div>
                            <div className="space-y-2 ml-0 sm:ml-6">
                                {displayedSocials.map((social, index) => (
                                    <div key={social.id} className="flex flex-row items-baseline sm:items-center gap-2 sm:gap-0">
                                        <span className="text-amber-400 w-16 sm:w-20 shrink-0">{`"${social.id}"`}</span>
                                        <span className="text-[var(--v2-text-muted)]">:</span>
                                        <a
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-2 text-[var(--v2-text-secondary)] hover:text-[var(--v2-accent)] transition-colors inline-flex items-center gap-2 truncate"
                                        >
                                            "{social.url.replace('https://', '').replace('www.', '')}"
                                            <svg className="w-3 h-3 opacity-50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        {index < displayedSocials.length - 1 && <span className="text-[var(--v2-text-muted)]">,</span>}
                                    </div>
                                ))}
                            </div>
                            <div className="text-[var(--v2-text-muted)] ml-0 sm:ml-2 mt-2">&#125;</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
                >
                    <a
                        href="mailto:nabilelbajdii@gmail.com"
                        onClick={() => trackContactClick('email')}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-[var(--v2-accent)] text-[var(--v2-bg-primary)] font-medium text-sm sm:text-base rounded-lg hover:opacity-90 transition-opacity"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span>Say Hello</span>
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={trackResumeDownload}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-[var(--v2-bg-tertiary)] text-[var(--v2-text-primary)] font-medium text-sm sm:text-base rounded-lg border border-[var(--v2-border)] hover:border-[var(--v2-border-hover)] transition-colors"
                    >
                        <span>View Resume</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}


