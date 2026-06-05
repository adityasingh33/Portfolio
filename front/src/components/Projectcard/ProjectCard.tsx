import type { Project } from '../../data/project';
import { FolderOpen, ExternalLink, Star } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        overflow: 'hidden',
        padding: 0,
      }}
    >
      {/* Top accent stripe */}
      <div
        style={{
          height: '4px',
          background: project.featured
            ? 'linear-gradient(90deg, var(--accent), var(--gold))'
            : 'linear-gradient(90deg, var(--accent), var(--accent-hover))',
        }}
      />

      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          padding: '28px 28px 24px',
        }}
      >
        {/* Header row */}
        <div
          style={{
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '44px',
              height: '44px',
              flexShrink: 0,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-md)',
              background: 'var(--accent-light)',
              color: 'var(--accent)',
            }}
          >
            <FolderOpen size={22} />
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="icon-btn"
                style={{
                  display: 'flex',
                  width: '36px',
                  height: '36px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
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
                className="icon-btn"
                style={{
                  display: 'flex',
                  width: '36px',
                  height: '36px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            marginBottom: '10px',
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            fontWeight: 700,
            lineHeight: 1.3,
            color: 'var(--text-primary)',
          }}
        >
          {project.title}
          {project.featured && (
            <span
              className="pill-gold"
              style={{
                marginLeft: '10px',
                verticalAlign: 'middle',
                fontSize: '0.65rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                padding: '3px 10px',
                borderRadius: 'var(--radius-full)',
              }}
            >
              <Star size={10} /> Featured
            </span>
          )}
        </h3>

        {/* Description */}
        <p
          style={{
            marginBottom: '20px',
            flex: 1,
            fontSize: '0.88rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
          }}
        >
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
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
