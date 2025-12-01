import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
  },
  {
    name: 'Backend',
    items: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'REST APIs'],
  },
  {
    name: 'DevOps',
    items: ['Docker', 'Jenkins', 'Ansible', 'AWS'],
  },
  {
    name: 'AI/ML',
    items: ['PyTorch', 'Scikit-learn', 'Pandas/NumPy', 'Hugging Face'],
  },
];

function SkillCategory({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-5 rounded-2xl bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)]"
    >
      <h3 className="text-sm font-medium text-[var(--v2-text-primary)] mb-3">
        {category.name}
      </h3>
      <ul className="space-y-1.5">
        {category.items.map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-sm text-[var(--v2-text-secondary)]">
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
          className="mb-12"
        >
          <span className="text-[var(--v2-accent)] mono text-sm mb-2 block">// skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--v2-text-primary)] mb-4">
            Tech Stack
          </h2>
          <p className="text-[var(--v2-text-secondary)] max-w-2xl">
            Tools and technologies I use to build full-stack applications and AI systems.
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
            className="p-5 rounded-2xl bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)]"
          >
            <h3 className="text-sm font-medium text-[var(--v2-text-primary)] mb-3">
              Current Focus
            </h3>
            <ul className="space-y-1.5">
              {['Google ADK', 'LLM Agents', 'RAG Pipelines', 'LangChain'].map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-[var(--v2-text-secondary)]">
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
