import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getFeaturedProjects } from '../../../data/projects';
import { SkeletonImage } from '../ui/SkeletonImage';
import { ImageLightbox } from '../ui/ImageLightbox';
import { trackProjectClick } from '../../../lib/analytics';
import { ExternalLink, Github, Clock, Lightbulb } from 'lucide-react';

const allProjects = getFeaturedProjects();

// Extract unique tags for filter buttons
const allTags = [...new Set(allProjects.flatMap(p => p.tags))].slice(0, 6);

function ProjectCard({ project, index }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <motion.article
        layout="position"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="group flex flex-col h-full bg-[var(--v2-bg-secondary)] border border-[var(--v2-border)] rounded-xl overflow-hidden hover:border-[var(--v2-accent)]/50 hover:shadow-lg hover:shadow-[var(--v2-accent)]/5 transition-all duration-300"
      >
        {/* Image */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="block relative aspect-video w-full overflow-hidden bg-[var(--v2-bg-tertiary)] cursor-zoom-in text-left"
        >
          <SkeletonImage
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: 'left center' }}
          />
          {/* Status badge overlay */}
          {project.status === 'wip' && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 px-2 py-1 text-xs mono bg-[var(--v2-accent)]/90 text-white rounded-full backdrop-blur-sm">
                <Clock className="w-3 h-3" />
                In Progress
              </span>
            </div>
          )}
          {/* Year badge */}
          <div className="absolute bottom-3 left-3">
            <span className="px-2 py-1 text-xs mono bg-black/60 text-white/80 rounded backdrop-blur-sm">
              {project.year}
            </span>
          </div>
        </button>

        {/* Content */}
        <div className="flex flex-col flex-grow p-5">
          {/* Title */}
          <h3 className="text-lg font-bold text-[var(--v2-text-primary)] mb-2 group-hover:text-[var(--v2-accent)] transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[var(--v2-text-secondary)] leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex items-center gap-1.5 mb-4 overflow-hidden">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] mono text-[var(--v2-accent)] bg-[var(--v2-accent)]/10 rounded whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-0.5 text-[10px] mono text-[var(--v2-text-muted)] bg-[var(--v2-bg-tertiary)] rounded whitespace-nowrap">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Learned callout */}
          <div className="mb-4 p-3 rounded-lg bg-[var(--v2-accent)]/5 border border-[var(--v2-accent)]/10">
            <p className="text-xs text-[var(--v2-text-secondary)] leading-relaxed">
              <Lightbulb className="w-3 h-3 inline-block mr-1 text-purple-400 align-text-bottom" />
              <span className="font-semibold text-purple-400">Learned:</span>{' '}
              {project.learned}
            </p>
          </div>

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Links */}
          <div className="flex items-center gap-4 pt-2 border-t border-[var(--v2-border)]">
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackProjectClick(project.title, 'source')}
                className="inline-flex items-center gap-1.5 text-sm text-[var(--v2-text-muted)] hover:text-[var(--v2-text-primary)] transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackProjectClick(project.title, 'demo')}
                className="inline-flex items-center gap-1.5 text-sm text-[var(--v2-accent)] hover:text-[var(--v2-accent-hover)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
          </div>
        </div>
      </motion.article>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        src={project.image}
        alt={project.title}
      />
    </>
  );
}

export function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState(null);

  const filteredProjects = activeFilter
    ? allProjects.filter((p) => p.tags.includes(activeFilter))
    : allProjects;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-[var(--v2-accent)] mono text-sm mb-2 block">// projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--v2-text-primary)] mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-[var(--v2-text-secondary)] max-w-2xl">
            A selection of things I've built. From full-stack platforms to data visualizations.
          </p>
        </motion.div>

        {/* Filter tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-2.5 py-1 text-xs rounded border transition-all cursor-pointer ${activeFilter === null
              ? 'bg-[var(--v2-accent)] text-white border-[var(--v2-accent)]'
              : 'bg-transparent text-[var(--v2-text-secondary)] border-[var(--v2-border)] hover:border-[var(--v2-accent)]/50'
              }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-2.5 py-1 text-xs rounded border transition-all cursor-pointer ${activeFilter === tag
                ? 'bg-[var(--v2-accent)] text-white border-[var(--v2-accent)]'
                : 'bg-transparent text-[var(--v2-text-secondary)] border-[var(--v2-border)] hover:border-[var(--v2-accent)]/50'
                }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="sync">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-[var(--v2-text-muted)]">No projects match this filter.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
