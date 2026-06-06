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
    <section id="projects" className="relative" style={{ padding: '100px 0' }}>
      {/* Background accent */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          top: '20%',
          right: '-8%',
          height: '400px',
          width: '400px',
          opacity: 0.5,
          filter: 'blur(80px)',
          background: 'radial-gradient(circle, var(--gold-light) 0%, transparent 70%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
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

        {/* Project Cards — centered */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto 96px auto',
          }}
        >
          <div
            className="flex flex-wrap justify-center"
            style={{ gap: '24px' }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                style={{ flex: '1 1 340px', maxWidth: '390px' }}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
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

          {/* Achievement Cards — centered */}
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div
              className="achievements-grid flex flex-wrap justify-center"
              style={{ gap: '20px' }}
            >
              {achievements.map((achievement) => {
                const IconComp = achievementIconMap[achievement.icon];
                return (
                  <div
                    key={achievement.id}
                    className="achievement-card cursor-default text-center"
                    style={{
                      flex: '1 1 240px',
                      maxWidth: '280px',
                      borderRadius: 'var(--radius-lg)',
                      padding: '32px 20px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div className="flex items-center justify-center" style={{ marginBottom: '12px' }}>
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
      </div>
    </section>
  );
};

export default Project;
