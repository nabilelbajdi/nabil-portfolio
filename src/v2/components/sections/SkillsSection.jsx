import { motion } from 'framer-motion';
import { SKILL_CATEGORIES, CURRENT_FOCUS } from '../../../data/skills';

function SkillCategory({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-3 sm:p-5 rounded-2xl bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)]"
    >
      <h3 className="text-[10px] sm:text-sm font-medium text-[var(--v2-text-primary)] mb-2 sm:mb-3 whitespace-nowrap truncate">
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
    </motion.div >
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
            Tech Stack
          </h2>
          <p className="text-[var(--v2-text-secondary)] max-w-2xl mx-auto md:mx-0">
            Tools and technologies I use to build full-stack applications and AI systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCategory key={category.name} category={category} index={index} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-3 sm:p-5 rounded-2xl bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)]"
          >
            <h3 className="text-[10px] sm:text-sm font-medium text-[var(--v2-text-primary)] mb-2 sm:mb-3 whitespace-nowrap truncate">
              {CURRENT_FOCUS.name}
            </h3>
            <ul className="space-y-1.5">
              {CURRENT_FOCUS.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-[var(--v2-text-secondary)]">
                  <span className="w-1 h-1 rounded-full bg-[var(--v2-accent)]" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
