import type { Project } from '../../data/project';
import { FolderOpen, ExternalLink, Star } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="card flex h-full flex-col overflow-hidden p-0">
      {/* Top accent stripe */}
      <div
        className="h-1"
        style={{
          background: project.featured
            ? 'linear-gradient(90deg, var(--accent), var(--gold))'
            : 'linear-gradient(90deg, var(--accent), var(--accent-hover))',
        }}
      />

      <div className="flex flex-1 flex-col px-7 pt-7 pb-6">
        {/* Header row */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--accent-light)] text-[var(--accent)]">
            <FolderOpen size={22} />
          </div>

          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="icon-btn flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)]"
              >
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live`}
                className="icon-btn flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)]"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-2.5 font-[var(--font-display)] text-[1.15rem] font-bold leading-[1.3] text-[var(--text-primary)]">
          {project.title}
          {project.featured && (
            <span className="pill-gold ml-2.5 inline-flex items-center gap-[3px] rounded-[var(--radius-full)] px-2.5 py-[3px] align-middle text-[0.65rem]">
              <Star size={10} /> Featured
            </span>
          )}
        </h3>

        {/* Description */}
        <p className="mb-5 flex-1 text-[0.88rem] leading-[1.7] text-[var(--text-secondary)]">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
