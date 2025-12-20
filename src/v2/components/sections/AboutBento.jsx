import { motion } from 'framer-motion';
import { BentoCard, BentoText } from '../ui/BentoGrid';
import { SkeletonImage } from '../ui/SkeletonImage';

export function AboutBento() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-[var(--v2-accent)] mono text-sm mb-2 block">// about</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--v2-text-primary)]">
            Get to know <span className="text-gradient">me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4">

          <BentoCard
            variant="gradient"
            delay={0.1}
            className="order-1 md:order-none col-span-2 md:col-span-4 md:row-span-2 relative overflow-hidden group min-h-[300px] sm:min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <SkeletonImage
              src="/assets/images/profile.jpg"
              alt="Nabil El Bajdi"
              className="absolute inset-0 w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Nabil El Bajdi</h3>
              <p className="text-white/70 text-sm">AI Developer</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-5 h-3 rounded-sm overflow-hidden">
                  <svg viewBox="0 0 16 10" className="w-full h-full">
                    <rect width="16" height="10" fill="#006AA7" />
                    <rect x="5" width="2" height="10" fill="#FECC00" />
                    <rect y="4" width="16" height="2" fill="#FECC00" />
                  </svg>
                </div>
                <span className="text-white/50 text-xs">Stockholm, Sweden</span>
              </div>
            </div>
          </BentoCard>

          <BentoCard variant="default" delay={0.15} className="order-2 md:order-none col-span-2 md:col-span-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--v2-accent)]/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl" />
            <div className="relative h-full flex flex-col justify-center">
              <div className="mono text-xs text-[var(--v2-text-dimmed)] mb-3 sm:mb-4">{'<philosophy>'}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--v2-text-primary)] leading-tight mb-2">
                Where{' '}
                <span className="relative inline-block">
                  <span className="text-[var(--v2-accent)]">Logic</span>
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--v2-accent)]/30" />
                </span>
                {' '}Meets{' '}
                <span className="relative inline-block">
                  <span className="text-amber-400">Creativity</span>
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-amber-400/30" />
                </span>
              </h3>
              <div className="mono text-xs text-[var(--v2-text-dimmed)] mt-3 sm:mt-4">{'</philosophy>'}</div>
            </div>
          </BentoCard>

          <BentoCard variant="default" delay={0.2} className="order-3 md:order-none col-span-1 md:col-span-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--v2-accent)]/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-amber-500/5 rounded-full blur-2xl" />
            <div className="relative h-full flex flex-col gap-2 md:gap-0 md:justify-between">
              <div className="mono text-[10px] sm:text-xs text-[var(--v2-text-dimmed)]">// off_duty</div>
              <div className="space-y-1 mt-3 sm:mt-4">
                <div className="text-base sm:text-lg text-[var(--v2-text-primary)]">gaming</div>
                <div className="text-base sm:text-lg text-[var(--v2-text-muted)]">fitness</div>
                <div className="text-base sm:text-lg text-[var(--v2-text-muted)]">travel</div>
              </div>
            </div>
          </BentoCard>

          <BentoCard variant="default" delay={0.25} className="order-5 md:order-none col-span-2 md:col-span-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--v2-accent)]/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl" />
            <div className="relative">
              <BentoText className="text-base leading-relaxed">
                I'm a developer who loves building things that work well and feel right to use.
                I started out in{' '}
                <span className="text-[var(--v2-accent)] font-medium">DevOps</span>, spending six months
                at <span className="text-amber-400 font-medium">Scila</span> automating CI/CD pipelines
                with <span className="text-[var(--v2-text-primary)] font-medium">Jenkins</span>, <span className="text-[var(--v2-text-primary)] font-medium">Ansible</span>, and <span className="text-[var(--v2-text-primary)] font-medium">Docker</span>.
                That taught me how to think in systems and care about reliability.
              </BentoText>
              <div className="mt-4 pt-4 border-t border-[var(--v2-border)]">
                <BentoText>
                  Now I'm studying{' '}
                  <span className="text-[var(--v2-accent)] font-medium">AI Engineering</span> at
                  Nackademin and interning at{' '}
                  <span className="text-amber-400 font-medium">Capgemini</span>, where I'm
                  working on <span className="text-[var(--v2-accent)] font-medium">AI agent systems</span>. On the side, I build full-stack projects like GameGloom, and this portfolio.
                </BentoText>
              </div>
            </div>
          </BentoCard>

          <BentoCard variant="gradient" delay={0.3} className="order-6 md:order-none col-span-2 md:col-span-4 relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full border border-[var(--v2-accent)]/10" />
            <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full border border-[var(--v2-accent)]/20" />
            <div className="relative">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xs font-medium text-[var(--v2-accent)] uppercase tracking-wider">Stack</span>
                <span className="flex-1 h-px bg-[var(--v2-border)]" />
              </div>
              <div className="space-y-2">
                {[
                  { label: 'languages', value: 'Python, JavaScript' },
                  { label: 'frontend', value: 'React, Tailwind' },
                  { label: 'backend', value: 'FastAPI, PostgreSQL' },
                  { label: 'devops', value: 'Docker, AWS, GH Actions' },
                ].map((item) => (
                  <div key={item.label} className="flex items-baseline gap-2 text-sm">
                    <span className="mono text-[var(--v2-text-muted)] w-20 flex-shrink-0">{item.label}</span>
                    <span className="text-[var(--v2-text-secondary)]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard variant="solid" delay={0.35} className="order-4 md:order-none col-span-1 md:col-span-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--v2-accent)] via-amber-500 to-amber-400" />
            <div className="flex items-baseline gap-2 mb-4 mt-1">
              <span className="text-xs font-medium text-[var(--v2-text-muted)] uppercase tracking-wider">Building</span>
              <span className="flex-1 h-px bg-[var(--v2-border)]" />
            </div>
            <h4 className="text-lg font-semibold text-[var(--v2-text-primary)] mb-2">GameGloom</h4>
            <p className="text-sm text-[var(--v2-text-secondary)] leading-relaxed hidden sm:block">
              Full-stack gaming platform with AI-powered recommendations
            </p>
            <p className="text-xs text-[var(--v2-text-secondary)] leading-relaxed block sm:hidden">
              AI-powered gaming platform
            </p>
            <a
              href="https://gamegloom.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-xs text-[var(--v2-accent)] hover:underline"
            >
              gamegloom.com
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </BentoCard>
          <BentoCard variant="solid" delay={0.4} className="order-7 md:order-none col-span-2 md:col-span-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--v2-accent)] via-amber-500 to-amber-400" />
            <div className="flex items-baseline gap-2 mb-4 mt-1">
              <span className="text-xs font-medium text-[var(--v2-text-muted)] uppercase tracking-wider">Currently Learning</span>
              <span className="flex-1 h-px bg-[var(--v2-border)]" />
            </div>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2 text-sm text-[var(--v2-text-secondary)]">
                <span className="w-1 h-1 rounded-full bg-[var(--v2-accent)]" />
                AI/ML Engineering
              </li>
              <li className="flex items-center gap-2 text-sm text-[var(--v2-text-secondary)]">
                <span className="w-1 h-1 rounded-full bg-[var(--v2-accent)]" />
                LLM Applications
              </li>
              <li className="flex items-center gap-2 text-sm text-[var(--v2-text-secondary)]">
                <span className="w-1 h-1 rounded-full bg-[var(--v2-accent)]" />
                Building AI Agents
              </li>
              <li className="flex items-center gap-2 text-sm text-[var(--v2-text-secondary)]">
                <span className="w-1 h-1 rounded-full bg-[var(--v2-accent)]" />
                RAG Systems
              </li>
            </ul>
          </BentoCard>

        </div>
      </div>
    </section >
  );
}
