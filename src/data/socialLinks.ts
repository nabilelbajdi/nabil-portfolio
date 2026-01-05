/**
 * Centralized social links used across all portfolio components.
 * Single source of truth for contact/social information.
 */

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  emoji: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  currentCompany: string;
  education: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/nabilelbajdi',
    icon: 'github',
    emoji: '🐙',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nabilelbajdi/',
    icon: 'linkedin',
    emoji: '💼',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:nabilelbajdii@gmail.com',
    icon: 'email',
    emoji: '📧',
  },
];

export const RESUME_LINK: SocialLink = {
  id: 'resume',
  name: 'Resume',
  url: '/resume.pdf',
  icon: 'document',
  emoji: '📄',
};

/**
 * Personal information
 */
export const PERSONAL_INFO: PersonalInfo = {
  name: 'Nabil El Bajdi',
  title: 'AI Developer',
  email: 'nabilelbajdii@gmail.com',
  location: 'Stockholm, Sweden',
  currentCompany: 'Capgemini',
  education: 'AI Engineering @ Nackademin (2026)',
};

/**
 * Get social links for terminal display
 */
export const getSocialLinksForTerminal = () =>
  SOCIAL_LINKS.map(link => ({
    label: link.name,
    url: link.url,
    icon: link.emoji,
  }));

/**
 * Get contact info for terminal display
 */
export const getContactTerminalOutput = (): string[] => [
  "Let's connect!",
  '',
  `📧 Email:    ${PERSONAL_INFO.email}`,
  `💼 LinkedIn: /in/nabil-el-bajdi`,
  `🐙 GitHub:   /nabilelbajdi`,
  '',
  '→ Type "social" for clickable links',
];

/**
 * Get whoami info for terminal display  
 */
export const getWhoamiTerminalOutput = (): string[] => [
  '┌──────────────────────────────────────────┐',
  `│  ${PERSONAL_INFO.name.padEnd(40)}│`,
  `│  ${(PERSONAL_INFO.title + ' & Full-Stack Engineer').padEnd(40)}│`,
  '└──────────────────────────────────────────┘',
  '',
  'I build intelligent systems that actually work.',
  'From DevOps pipelines to AI agents, I like',
  'making complex things simple and reliable.',
  '',
  `📍 ${PERSONAL_INFO.location}`,
  `🎓 ${PERSONAL_INFO.education}`,
  `💼 Currently at ${PERSONAL_INFO.currentCompany}`,
];
