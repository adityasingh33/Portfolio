import { projects, achievements } from '../data/project';
import ProjectCard from '../components/Projectcard/ProjectCard';

const Project = () => {
  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-8%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--gold-light) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          opacity: 0.5,
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label animate-fade-in-up">
            <span>◆</span> Portfolio
          </div>
          <h2 className="section-title animate-fade-in-up delay-100">
            Projects & <span className="accent-gradient">Achievements</span>
          </h2>
          <p
            className="section-subtitle animate-fade-in-up delay-200"
            style={{ margin: '0 auto' }}
          >
            A collection of projects I've built and milestones I'm proud of.
            Each one represents a challenge conquered and a lesson learned.
          </p>
        </div>

        {/* Project Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            marginBottom: 80,
          }}
          className="project-grid"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Achievements */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h3
              className="animate-fade-in-up"
              style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              <span className="accent-gradient">Achievements</span>
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 20,
            }}
            className="achievements-grid"
          >
            {achievements.map((achievement, i) => (
              <div
                key={achievement.id}
                className={`animate-fade-in-up delay-${Math.min((i + 2) * 100, 800)}`}
                style={{
                  textAlign: 'center',
                  padding: '32px 20px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'all var(--transition-base)',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.borderColor = 'var(--gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>
                  {achievement.icon}
                </div>
                <h4
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: 6,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {achievement.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          .project-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Project;
