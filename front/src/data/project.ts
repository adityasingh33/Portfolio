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
    id: 1,
    title: 'AI Chat Application',
    description:
      'A real-time AI-powered chat platform with natural language processing, context-aware responses, and a sleek conversational interface.',
    techStack: ['React', 'Node.js', 'OpenAI API', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/adityasingh',
    liveUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'E-Commerce Dashboard',
    description:
      'A comprehensive analytics dashboard for e-commerce businesses featuring real-time sales tracking, inventory management, and data visualizations.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/adityasingh',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website with dark/light theme, smooth animations, and an elegant design system.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/adityasingh',
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Task Management System',
    description:
      'A collaborative project management tool with kanban boards, team workspaces, real-time updates, and deadline tracking.',
    techStack: ['React', 'Express', 'MongoDB', 'Redux', 'JWT'],
    githubUrl: 'https://github.com/adityasingh',
  },
  {
    id: 5,
    title: 'Weather Forecast App',
    description:
      'An elegant weather application with animated visualizations, location-based forecasts, and severe weather alerts.',
    techStack: ['React', 'TypeScript', 'Weather API', 'Framer Motion'],
    githubUrl: 'https://github.com/adityasingh',
    liveUrl: '#',
  },
  {
    id: 6,
    title: 'Social Media API',
    description:
      'A RESTful API backend for a social media platform with authentication, media uploads, real-time notifications, and feed algorithms.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/adityasingh',
  },
];

export const achievements = [
  {
    id: 1,
    title: 'Dean\'s List',
    description: 'Consistently recognized for academic excellence.',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'Hackathon Winner',
    description: 'First place in university-level coding competition.',
    icon: '🥇',
  },
  {
    id: 3,
    title: 'Open Source Contributor',
    description: 'Active contributor to multiple open-source projects.',
    icon: '💻',
  },
  {
    id: 4,
    title: 'Published Research',
    description: 'Co-authored a research paper on machine learning.',
    icon: '📄',
  },
];
