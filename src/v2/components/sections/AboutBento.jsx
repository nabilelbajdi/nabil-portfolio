import { motion } from 'framer-motion';
import { BentoCard, BentoText } from '../ui/BentoGrid';

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
            Get to know me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          <BentoCard 
            variant="gradient" 
            delay={0.1}
            className="md:col-span-4 md:row-span-2 relative overflow-hidden group min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--v2-bg-primary)] via-transparent to-transparent z-10" />
            <img 
              src="/assets/images/profile.jpg" 
              alt="Nabil El Bajdi"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-xl font-bold text-white mb-1">Nabil El Bajdi</h3>
              <p className="text-white/70 text-sm">AI Developer</p>
            </div>
          </BentoCard>

          <BentoCard variant="default" delay={0.15} className="md:col-span-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--v2-accent)]/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl" />
            <div className="relative h-full flex flex-col justify-center">
              <div className="mono text-xs text-[var(--v2-text-dimmed)] mb-4">{'<philosophy>'}</div>
              <h3 className="text-2xl font-bold text-[var(--v2-text-primary)] leading-tight mb-2">
                Where{' '}
                <span className="relative inline-block">
                  <span className="text-[var(--v2-accent)]">Logic</span>
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--v2-accent)]/30" />
                </span>
                {' '}Meets{' '}
                <span className="relative inline-block">
                  <span className="text-purple-400">Creativity</span>
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-purple-400/30" />
                </span>
              </h3>
              <div className="mono text-xs text-[var(--v2-text-dimmed)] mt-4">{'</philosophy>'}</div>
            </div>
          </BentoCard>

          <BentoCard variant="solid" delay={0.2} className="md:col-span-3 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            <div className="relative h-full flex flex-col">
              <div className="flex items-center gap-2 mb-auto">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="mono text-xs text-green-500/80">LOCATION</span>
              </div>
              <div className="mt-4">
                <div className="mono text-lg text-[var(--v2-text-primary)] font-medium leading-tight">Stockholm</div>
                <div className="mono text-lg text-[var(--v2-text-muted)]">Sweden</div>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--v2-border)]">
                <span className="text-xs text-[var(--v2-accent)]">Open to opportunities</span>
              </div>
            </div>
          </BentoCard>

          <BentoCard variant="default" delay={0.25} className="md:col-span-8">
            <BentoText className="text-base leading-relaxed">
              I'm a developer who enjoys the sweet spot between{' '}
              <span className="text-[var(--v2-text-primary)] font-medium">logic</span> and{' '}
              <span className="text-[var(--v2-text-primary)] font-medium">creativity</span>, 
              where thoughtful code meets meaningful design. Whether it's architecting{' '}
              <span className="text-[var(--v2-accent)]">backend systems</span>, shaping{' '}
              <span className="text-[var(--v2-accent)]">clean user flows</span>, or experimenting with{' '}
              <span className="text-[var(--v2-accent)]">AI</span>, I find joy in building systems 
              that are both intelligent and intuitive.
            </BentoText>
            <div className="mt-4 pt-4 border-t border-[var(--v2-border)]">
              <BentoText>
                I have a background in <span className="text-[var(--v2-text-primary)] font-medium">DevOps</span>, 
                including hands-on experience as a DevOps engineer. Now I'm diving deeper into{' '}
                <span className="text-[var(--v2-text-primary)] font-medium">AI and Machine Learning</span>.
              </BentoText>
            </div>
          </BentoCard>

          <BentoCard variant="outline" delay={0.3} hover={false} className="md:col-span-4">
            <div className="mono text-xs text-[var(--v2-text-dimmed)] mb-3">stack.config</div>
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
          </BentoCard>

          <BentoCard variant="gradient" delay={0.35} className="md:col-span-4 relative">
            <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full border border-[var(--v2-accent)]/10" />
            <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full border border-[var(--v2-accent)]/20" />
            <div className="relative">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xs font-medium text-[var(--v2-accent)] uppercase tracking-wider">Building</span>
                <span className="flex-1 h-px bg-[var(--v2-border)]" />
              </div>
              <h4 className="text-lg font-semibold text-[var(--v2-text-primary)] mb-2">GameGloom</h4>
              <p className="text-sm text-[var(--v2-text-secondary)] leading-relaxed">
                Full-stack gaming platform with AI-powered recommendations
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1 flex-1 rounded-full bg-[var(--v2-bg-tertiary)] overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[var(--v2-accent)] to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <span className="text-xs mono text-[var(--v2-text-muted)]">75%</span>
              </div>
            </div>
          </BentoCard>

          <BentoCard variant="solid" delay={0.4} className="md:col-span-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />
            <div className="flex items-baseline gap-2 mb-4 mt-1">
              <span className="text-xs font-medium text-[var(--v2-text-muted)] uppercase tracking-wider">Learning</span>
              <span className="flex-1 h-px bg-[var(--v2-border)]" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                <span className="text-sm text-[var(--v2-text-primary)]">AI/ML Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                <span className="text-sm text-[var(--v2-text-secondary)]">NLP & Transformers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-teal-500" />
                <span className="text-sm text-[var(--v2-text-secondary)]">RAG & LLMs</span>
              </div>
            </div>
          </BentoCard>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4"
        >
          <BentoCard variant="default" hover={false} className="!p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-4 text-xl text-[var(--v2-text-muted)]">
                <span>gaming</span>
                <span className="text-[var(--v2-text-dimmed)]">/</span>
                <span>fitness</span>
                <span className="text-[var(--v2-text-dimmed)]">/</span>
                <span>travel</span>
              </div>
              <div className="h-px sm:h-6 sm:w-px bg-[var(--v2-border)] flex-shrink-0" />
              <p className="text-sm text-[var(--v2-text-secondary)]">
                When I'm not coding — these keep me inspired.
              </p>
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  );
}
