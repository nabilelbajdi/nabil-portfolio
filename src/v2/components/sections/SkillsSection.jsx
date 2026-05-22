import { motion } from 'framer-motion';
import { SKILL_CATEGORIES, CURRENT_FOCUS } from '../../../data/skills';

function SkillCategory({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-3 sm:p-5 rounded-2xl bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)] hover:border-[var(--v2-accent)]/30 transition-colors"
    >
      <h3 className="text-[10px] sm:text-sm font-medium text-[var(--v2-text-primary)] mb-2 sm:mb-3 whitespace-nowrap truncate leading-normal pb-0.5">
        {category.name === 'AI / Machine Learning' ? (
          <>
            <span className="sm:hidden">AI / ML</span>
            <span className="hidden sm:inline">AI / Machine Learning</span>
          </>
        ) : (
          category.name
        )}
      </h3>
      <ul className="space-y-1.5">
        {category.items.map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-[var(--v2-text-secondary)]">
            <span className="w-1 h-1 rounded-full bg-[var(--v2-accent)]" />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <span className="text-[var(--v2-accent)] mono text-sm mb-2 block">// skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--v2-text-primary)] mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-[var(--v2-text-secondary)] max-w-2xl mx-auto md:mx-0">
            Tools and technologies I use to build full-stack applications and AI systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* Current Focus — first, highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="p-3 sm:p-5 rounded-2xl bg-[var(--v2-bg-secondary)] border border-[var(--v2-accent)]/30 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--v2-accent)] to-[var(--v2-secondary)]" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--v2-accent)]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-2 sm:mb-3 relative">
              <h3 className="text-[10px] sm:text-sm font-medium text-[var(--v2-text-primary)] leading-normal">
                {CURRENT_FOCUS.name}
              </h3>
              <span className="text-[9px] sm:text-[10px] mono text-[var(--v2-accent)] bg-[var(--v2-accent)]/10 px-1.5 py-0.5 rounded-full border border-[var(--v2-accent)]/20">
                active
              </span>
            </div>
            <ul className="space-y-1.5 relative">
              {CURRENT_FOCUS.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-[var(--v2-text-secondary)]">
                  <span className="w-1 h-1 rounded-full bg-[var(--v2-accent)]" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCategory key={category.id} category={category} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
