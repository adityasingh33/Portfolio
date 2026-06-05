import { projects, achievements } from '../data/project';
import ProjectCard from '../components/Projectcard/ProjectCard';
import { Gem, Trophy, Medal, GitPullRequest, FileText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const achievementIconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  medal: Medal,
  gitPullRequest: GitPullRequest,
  fileText: FileText,
};

const Project = () => {
  return (
    <section id="projects" style={{ position: 'relative', padding: '100px 0' }}>
      {/* Background accent */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '20%',
          right: '-8%',
          height: '400px',
          width: '400px',
          borderRadius: '50%',
          opacity: 0.5,
          filter: 'blur(80px)',
          background: 'radial-gradient(circle, var(--gold-light) 0%, transparent 70%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          margin: '0 auto',
          maxWidth: '1200px',
          padding: '0 24px',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <div className="section-label animate-fade-in-up">
            <Gem size={14} /> Portfolio
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
            marginBottom: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Achievements */}
        <div>
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h3
              className="animate-fade-in-up"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              <span className="accent-gradient">Achievements</span>
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
            className="achievements-grid"
          >
            {achievements.map((achievement) => {
              const IconComp = achievementIconMap[achievement.icon];
              return (
                <div
                  key={achievement.id}
                  className="achievement-card"
                  style={{
                    cursor: 'default',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center',
                    padding: '32px 20px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div
                    style={{
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {IconComp && <IconComp size={32} style={{ color: 'var(--gold)' }} />}
                  </div>
                  <h4
                    style={{
                      marginBottom: '6px',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {achievement.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.82rem',
                      lineHeight: 1.5,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
