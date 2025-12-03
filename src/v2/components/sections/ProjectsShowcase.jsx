import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "GameGloom",
    description: "Full-stack gaming platform with AI-powered recommendations. Discover games based on your preferences, track your collection, and explore detailed game information.",
    tags: ["Python", "React", "FastAPI", "PostgreSQL", "AWS"],
    image: "/assets/images/screenshots/gamegloom/gamegloom-gamepage.jpg",
    demoLink: "https://gamegloom.com",
    codeLink: "https://github.com/nabilelbajdi/gamegloom",
    status: "wip",
    year: "2025",
  },
  {
    id: 2,
    title: "Mental Health Dashboard",
    description: "Interactive data visualization analyzing mental health trends across demographics. Built with Streamlit for real-time data exploration.",
    tags: ["Python", "Pandas", "Streamlit", "Plotly"],
    image: "/assets/images/screenshots/mental-health-dashboard/mhd-dashboard.jpg",
    demoLink: "https://mental-health-dashboard.streamlit.app/",
    codeLink: "https://github.com/nabilelbajdi/mental-health-dashboard",
    status: "completed",
    year: "2025",
  },
  {
    id: 3,
    title: "DevOps Resume",
    description: "Modern resume with comprehensive DevOps practices — automated CI/CD pipeline, Docker containerization, and performance monitoring.",
    tags: ["Jekyll", "GitHub Actions", "Docker", "CI/CD"],
    image: "/assets/images/screenshots/resume/resume-bg.svg",
    demoLink: "https://nabilelbajdi.github.io/resume/",
    codeLink: "https://github.com/nabilelbajdi/resume",
    status: "completed",
    year: "2024",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="grid md:grid-cols-12 gap-6 py-8 border-b border-[var(--v2-border)]">
        <div className="md:col-span-7 order-2 md:order-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="mono text-xs text-[var(--v2-text-dimmed)]">{project.year}</span>
            {project.status === 'wip' && (
              <span className="px-2 py-0.5 text-xs mono bg-[var(--v2-accent)]/10 text-[var(--v2-accent)] rounded">
                IN PROGRESS
              </span>
            )}
          </div>
          
          <h3 className="text-2xl font-bold text-[var(--v2-text-primary)] mb-3 group-hover:text-[var(--v2-accent)] transition-colors">
            {project.title}
          </h3>
          
          <p className="text-[var(--v2-text-secondary)] leading-relaxed mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 text-xs mono text-[var(--v2-accent)]/70 bg-[var(--v2-bg-tertiary)] rounded border border-[var(--v2-border)]"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            {project.demoLink && (
              <a 
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--v2-text-primary)] hover:text-[var(--v2-accent)] transition-colors"
              >
                <span>View Project</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {project.codeLink && (
              <a 
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--v2-text-muted)] hover:text-[var(--v2-text-primary)] transition-colors"
              >
                <span>Source</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            )}
          </div>
        </div>
        
        <div className="md:col-span-5 order-1 md:order-2">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-[var(--v2-bg-tertiary)] border border-[var(--v2-border)] group-hover:scale-[1.02] transition-transform duration-300">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsShowcase() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-[var(--v2-accent)] mono text-sm mb-2 block">// projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--v2-text-primary)] mb-4">
            Selected Work
          </h2>
          <p className="text-[var(--v2-text-secondary)] max-w-2xl">
            Projects built with thoughtful code and clean architecture. Each one taught me something new.
          </p>
        </motion.div>

        <div className="border-t border-[var(--v2-border)]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-[var(--v2-text-dimmed)] mono">
            More projects coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
}

