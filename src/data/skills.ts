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
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    items: ['React', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
  },
  {
    id: 'backend',
    name: 'Backend',
    items: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'REST APIs'],
  },
  {
    id: 'devops',
    name: 'DevOps',
    items: ['Docker', 'Jenkins', 'Ansible', 'AWS', 'GitHub Actions'],
  },
  {
    id: 'aiml',
    name: 'AI/ML',
    items: ['PyTorch', 'Scikit-learn', 'Pandas/NumPy', 'Hugging Face'],
  },
];

export const CURRENT_FOCUS: SkillCategory = {
  id: 'focus',
  name: 'Current Focus',
  items: ['Google ADK', 'LLM Agents', 'RAG Pipelines', 'LangChain'],
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
