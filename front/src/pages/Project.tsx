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
    <section id="projects" className="relative py-[100px] md:py-[60px]">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute top-[20%] right-[-8%] h-[400px] w-[400px] rounded-full opacity-50 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, var(--gold-light) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-1 mx-auto max-w-[1200px] px-6 md:px-4">
        {/* Header */}
        <div className="mb-[60px] text-center">
          <div className="section-label animate-fade-in-up">
            <Gem size={14} /> Portfolio
          </div>
          <h2 className="section-title animate-fade-in-up delay-100">
            Projects & <span className="accent-gradient">Achievements</span>
          </h2>
          <p className="section-subtitle animate-fade-in-up delay-200 mx-auto">
            A collection of projects I've built and milestones I'm proud of.
            Each one represents a challenge conquered and a lesson learned.
          </p>
        </div>

        {/* Project Grid */}
        <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Achievements */}
        <div>
          <div className="mb-10 text-center">
            <h3 className="animate-fade-in-up font-display text-[1.6rem] font-bold" style={{ color: 'var(--text-primary)' }}>
              <span className="accent-gradient">Achievements</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {achievements.map((achievement, i) => {
              const IconComp = achievementIconMap[achievement.icon];
              return (
                <div
                  key={achievement.id}
                  className={`achievement-card animate-fade-in-up delay-${Math.min((i + 2) * 100, 800)} cursor-default rounded-[var(--radius-lg)] text-center`}
                  style={{
                    padding: '32px 20px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div className="mb-3 flex items-center justify-center">
                    {IconComp && <IconComp size={32} style={{ color: 'var(--gold)' }} />}
                  </div>
                  <h4
                    className="mb-1.5 font-display text-[0.95rem] font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {achievement.title}
                  </h4>
                  <p
                    className="text-[0.82rem] leading-[1.5]"
                    style={{ color: 'var(--text-secondary)' }}
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
