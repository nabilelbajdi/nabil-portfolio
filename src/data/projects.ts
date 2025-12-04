/**
 * Centralized project data used across V1 and V2 portfolio versions.
 * Single source of truth for all project information.
 */

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imagePosition: string;
  demoLink?: string;
  codeLink: string;
  status: "wip" | "completed" | "youarehere";
  year: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "GameGloom",
    description: "Full-stack gaming platform with AI-powered recommendations. Discover games based on your preferences, track your collection, and explore detailed game information.",
    tags: ["Python", "React", "FastAPI", "PostgreSQL", "AWS"],
    image: "/assets/images/screenshots/gamegloom/gamegloom-gamepage.jpg",
    imagePosition: "110% center",
    demoLink: "https://gamegloom.com",
    codeLink: "https://github.com/nabilelbajdi/gamegloom",
    status: "wip",
    year: "2025",
    featured: true,
  },
  {
    id: 2,
    title: "Mental Health Dashboard",
    description: "Interactive data visualization analyzing mental health trends across demographics. Built with Streamlit for real-time data exploration.",
    tags: ["Python", "Pandas", "Streamlit", "Plotly"],
    image: "/assets/images/screenshots/mental-health-dashboard/mhd-dashboard.jpg",
    imagePosition: "left center",
    demoLink: "https://mental-health-dashboard.streamlit.app/",
    codeLink: "https://github.com/nabilelbajdi/mental-health-dashboard",
    status: "completed",
    year: "2025",
    featured: true,
  },
  {
    id: 3,
    title: "DevOps Resume",
    description: "Modern resume with comprehensive DevOps practices — automated CI/CD pipeline, Docker containerization, and performance monitoring.",
    tags: ["Jekyll", "GitHub Actions", "Docker", "CI/CD"],
    image: "/assets/images/screenshots/resume/resume-bg.svg",
    imagePosition: "center center",
    demoLink: "https://nabilelbajdi.github.io/resume/",
    codeLink: "https://github.com/nabilelbajdi/resume",
    status: "completed",
    year: "2024",
    featured: true,
  },
  {
    id: 4,
    title: "This Portfolio",
    description: "This very site — built with React, styled with Tailwind, featuring dual versions with an interactive terminal interface and command palette.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    image: "/assets/images/logo.png",
    imagePosition: "center center",
    codeLink: "https://github.com/nabilelbajdi/nabil-portfolio",
    status: "youarehere",
    year: "2024",
    featured: false,
  },
];

/**
 * Get featured projects (for V2 showcase)
 */
export const getFeaturedProjects = (): Project[] => PROJECTS.filter(p => p.featured);

/**
 * Get all projects (for V1 section)
 */
export const getAllProjects = (): Project[] => PROJECTS;

/**
 * Format projects for terminal display
 */
export const getProjectsTerminalOutput = (): string[] => [
  'Featured Projects:',
  '',
  ...PROJECTS.filter(p => p.featured).flatMap(p => [
    `${p.status === 'wip' ? '🔧' : '✅'} ${p.title}`,
    `   ${p.description.slice(0, 50)}...`,
    p.demoLink ? `   → ${p.demoLink.replace('https://', '')}` : '',
    '',
  ]),
  '→ Scroll down to explore each project',
];
