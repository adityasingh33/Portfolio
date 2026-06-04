import {
  Atom,
  FileCode2,
  Braces,
  Server,
  Code2,
  Database,
  Layers,
  GitBranch,
  Container,
  Palette,
  Hexagon,
  Rocket,
  GraduationCap,
  Lightbulb,
  Users,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
}

const skills: Skill[] = [
  { name: 'React', icon: Atom, color: '#61dafb' },
  { name: 'TypeScript', icon: FileCode2, color: '#3178c6' },
  { name: 'JavaScript', icon: Braces, color: '#f7df1e' },
  { name: 'Node.js', icon: Server, color: '#68a063' },
  { name: 'Python', icon: Code2, color: '#3776ab' },
  { name: 'MongoDB', icon: Database, color: '#4db33d' },
  { name: 'PostgreSQL', icon: Layers, color: '#336791' },
  { name: 'Git', icon: GitBranch, color: '#f05032' },
  { name: 'Docker', icon: Container, color: '#2496ed' },
  { name: 'Tailwind CSS', icon: Palette, color: '#38bdf8' },
  { name: 'Solidity', icon: Hexagon, color: '#363636' },
  { name: 'Express', icon: Rocket, color: '#e8743a' },
];

const About = () => {
  return (
    <section id="about" className="relative py-[100px] md:py-[60px]">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute top-1/2 left-[-10%] h-[350px] w-[350px] rounded-full opacity-40 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-1 mx-auto max-w-[1200px] px-6 md:px-4">
        {/* Header */}
        <div className="mb-[60px] text-center">
          <div className="section-label animate-fade-in-up">
            <Sparkles size={14} /> About Me
          </div>
          <h2 className="section-title animate-fade-in-up delay-100">
            A Glimpse Into <span className="accent-gradient">Who I Am</span>
          </h2>
          <p className="section-subtitle animate-fade-in-up delay-200 mx-auto">
            Passionate about building things that live on the internet.
            I love turning complex problems into simple, elegant solutions.
          </p>
        </div>

        {/* Two-column: Story + Details */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-start">
          {/* Left: Story */}
          <div className="animate-fade-in-up delay-300">
            <div className="card p-9">
              <h3
                className="mb-4 font-display text-[1.25rem] font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                My Journey
              </h3>
              <p
                className="mb-4 text-[0.95rem] leading-[1.8]"
                style={{ color: 'var(--text-secondary)' }}
              >
                I'm a developer who thrives on learning and exploring new technologies.
                From building my first "Hello World" to designing complex full-stack applications,
                every project has been a stepping stone in my journey.
              </p>
              <p
                className="mb-4 text-[0.95rem] leading-[1.8]"
                style={{ color: 'var(--text-secondary)' }}
              >
                I believe in writing clean, maintainable code and creating user experiences
                that feel natural and intuitive. When I'm not coding, you'll find me exploring
                new frameworks, contributing to open-source, or brainstorming the next big idea.
              </p>
              <div
                className="mt-6 flex gap-6 border-t pt-5"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                {[
                  { Icon: GraduationCap, label: 'Student' },
                  { Icon: Lightbulb, label: 'Innovator' },
                  { Icon: Users, label: 'Team Player' },
                ].map((trait) => (
                  <div
                    key={trait.label}
                    className="flex items-center gap-2 text-[0.85rem] font-medium"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <trait.Icon size={18} style={{ color: 'var(--accent)' }} />
                    {trait.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Skills */}
          <div className="animate-fade-in-up delay-400">
            <h3
              className="mb-5 flex items-center gap-2 font-display text-[1.1rem] font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              <Sparkles size={16} style={{ color: 'var(--accent)' }} /> Tech Stack & Skills
            </h3>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {skills.map((skill, i) => {
                const IconComp = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`skill-item animate-fade-in-up delay-${Math.min((i + 3) * 100, 800)} flex cursor-default items-center gap-2.5 rounded-[var(--radius-md)] px-4 py-3.5 text-[0.85rem] font-medium`}
                    style={{
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <IconComp size={18} style={{ color: skill.color, flexShrink: 0 }} />
                    {skill.name}
                  </div>
                );
              })}
            </div>

            {/* Additional info */}
            <div
              className="mt-6 rounded-[var(--radius-md)] border-l-[3px] px-6 py-5"
              style={{
                background: 'var(--accent-light)',
                borderLeftColor: 'var(--accent)',
              }}
            >
              <p
                className="text-[0.88rem] italic leading-[1.6]"
                style={{ color: 'var(--text-secondary)' }}
              >
                "Constantly learning and adapting — currently exploring AI/ML integrations
                and cloud-native architectures."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
