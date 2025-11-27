import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'languages',
    items: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    name: 'frontend',
    items: [
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 70 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    name: 'backend',
    items: [
      { name: 'FastAPI', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'SQLAlchemy', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    name: 'devops',
    items: [
      { name: 'Docker', level: 80 },
      { name: 'GitHub Actions', level: 85 },
      { name: 'AWS', level: 70 },
      { name: 'Linux/Bash', level: 80 },
    ],
  },
  {
    name: 'ai_ml',
    items: [
      { name: 'PyTorch', level: 65 },
      { name: 'Scikit-learn', level: 70 },
      { name: 'Pandas/NumPy', level: 80 },
      { name: 'Hugging Face', level: 60 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-3"
    >
      <span className="w-28 text-sm text-[var(--v2-text-secondary)] truncate">{name}</span>
      <div className="flex-1 h-2 bg-[var(--v2-bg-tertiary)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-[var(--v2-accent)] to-purple-500 rounded-full"
        />
      </div>
      <span className="w-8 text-xs mono text-[var(--v2-text-muted)] text-right">{level}%</span>
    </motion.div>
  );
}

function SkillCategory({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-5 rounded-2xl bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)]"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[var(--v2-accent)]">$</span>
        <span className="mono text-sm text-[var(--v2-text-primary)]">skills.{category.name}</span>
      </div>
      <div className="space-y-3">
        {category.items.map((skill, i) => (
          <SkillBar 
            key={skill.name} 
            name={skill.name} 
            level={skill.level} 
            delay={index * 0.1 + i * 0.05}
          />
        ))}
      </div>
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
          className="mb-12"
        >
          <span className="text-[var(--v2-accent)] mono text-sm mb-2 block">// skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--v2-text-primary)] mb-4">
            Tech Stack
          </h2>
          <p className="text-[var(--v2-text-secondary)] max-w-2xl">
            Tools and technologies I work with to build full-stack applications, automate workflows, and explore AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.name} category={category} index={index} />
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-5 rounded-2xl border border-dashed border-[var(--v2-border)] bg-[var(--v2-bg-secondary)]/30 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[var(--v2-text-dimmed)]">$</span>
              <span className="mono text-sm text-[var(--v2-text-muted)]">skills.exploring</span>
            </div>
            <div className="space-y-2 text-sm text-[var(--v2-text-muted)]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                <span>LangChain & RAG</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                <span>LLM Fine-tuning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                <span>Vector Databases</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-6 rounded-2xl bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)]"
        >
          <div className="mono text-xs text-[var(--v2-text-dimmed)] mb-4">$ cat workflow.md</div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <div>
              <span className="text-[var(--v2-text-muted)]">editor:</span>
              <span className="text-[var(--v2-text-secondary)] ml-2">VS Code + Cursor</span>
            </div>
            <div>
              <span className="text-[var(--v2-text-muted)]">terminal:</span>
              <span className="text-[var(--v2-text-secondary)] ml-2">iTerm2 + zsh</span>
            </div>
            <div>
              <span className="text-[var(--v2-text-muted)]">version_control:</span>
              <span className="text-[var(--v2-text-secondary)] ml-2">Git + GitHub</span>
            </div>
            <div>
              <span className="text-[var(--v2-text-muted)]">design:</span>
              <span className="text-[var(--v2-text-secondary)] ml-2">Figma</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

