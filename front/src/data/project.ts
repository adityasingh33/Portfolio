export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  
  {
    id: 2,
    title: 'E-Commerce Dashboard',
    description:
      'A comprehensive analytics dashboard for e-commerce businesses featuring real-time sales tracking, inventory management, and data visualizations.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/adityasingh33',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website with dark/light theme, smooth animations, and an elegant design system.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/adityasingh33',
    liveUrl: '#',
  },
  
 
  
];

export const achievements = [
  {
    id: 1,
    title: 'Dean\'s List',
    description: 'Consistently recognized for academic excellence.',
    icon: 'trophy',
  },
  {
    id: 2,
    title: 'Competitve Programming',
    description: 'Ranked at 528 among 20k + participants in code chef starter 234D.',
    icon: 'medal',
  },
  {
    id: 3,
    title: 'Open Source Contributor',
    description: 'Active contributor to multiple open-source projects.',
    icon: 'gitPullRequest',
  },
  
];
