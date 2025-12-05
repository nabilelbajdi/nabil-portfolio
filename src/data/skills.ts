/**
 * Centralized skills data used across V1 and V2 portfolio versions.
 * Single source of truth for all skill/technology information.
 */

export interface SkillCategory {
  id: string;
  name: string;
  items: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
  },
  {
    id: 'aiml',
    name: 'AI / Machine Learning',
    items: ['PyTorch', 'Pandas / NumPy', 'Hugging Face', 'Sentence Transformers', 'Google Gemini / ADK'],
  },
  {
    id: 'backend',
    name: 'Backend',
    items: ['FastAPI', 'PostgreSQL', 'SQLAlchemy 2', 'Alembic', 'REST APIs'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    items: ['React (Vite)', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'Component-driven UI'],
  },
  {
    id: 'devops',
    name: 'DevOps / Cloud',
    items: ['Docker', 'GitHub Actions', 'Jenkins', 'AWS (EC2, RDS, S3)', 'Linux / Bash'],
  },
];

export const CURRENT_FOCUS: SkillCategory = {
  id: 'focus',
  name: 'Current Focus',
  items: ['AI Agent Systems', 'Google ADK', 'MCP Tools', 'RAG Concepts', 'Full-stack AI Apps'],
};

/**
 * Get all skill categories including current focus
 */
export const getAllSkills = (): SkillCategory[] => [...SKILL_CATEGORIES, CURRENT_FOCUS];

/**
 * Get core skill categories (without current focus)
 */
export const getCoreSkills = (): SkillCategory[] => SKILL_CATEGORIES;

/**
 * Format skills for terminal display
 */
export const getSkillsTerminalOutput = (): string[] => [
  '// Tech Stack',
  '',
  ...SKILL_CATEGORIES.map(cat =>
    `${cat.name.toLowerCase().padEnd(14)}${cat.items.join(', ')}`
  ),
  '',
  '→ Type "projects" to see these in action',
];
