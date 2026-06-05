import {
  Atom,
  FileCode2,
  Braces,
  Server,
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

const CplusplusIcon = ({ size = 18, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    style={style}
  >
    <path d="M2 12c0-5.52 4.48-10 10-10 3.39 0 6.4 1.69 8.21 4.28L16.5 9.07c-.96-1.3-2.52-2.12-4.28-2.12-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5c1.76 0 3.32-.82 4.28-2.12l3.71 2.79C18.4 20.31 15.39 22 12 22c-5.52 0-10-4.48-10-10zm15-1h-2v2h-1v-2h-2v-1h2V8h1v2h2v1zm5 0h-2v2h-1v-2h-2v-1h2V8h1v2h2v1z" />
  </svg>
);

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
}

const skills: Skill[] = [
  { name: 'React', icon: Atom, color: '#61dafb' },
  { name: 'TypeScript', icon: FileCode2, color: '#3178c6' },
  { name: 'JavaScript', icon: Braces, color: '#f7df1e' },
  { name: 'Node.js', icon: Server, color: '#68a063' },
  { name: 'C++', icon: CplusplusIcon, color: '#00599C' },
  { name: 'MongoDB', icon: Database, color: '#4db33d' },
  { name: 'PostgreSQL', icon: Layers, color: '#336791' },
  { name: 'Git', icon: GitBranch, color: '#f05032' },
  { name: 'Docker', icon: Container, color: '#2496ed' },
  { name: 'Tailwind CSS', icon: Palette, color: '#38bdf8' },
  { name: 'Solidity', icon: Hexagon, color: '#636890' },
  { name: 'Express', icon: Rocket, color: '#e8743a' },
];

const About = () => {
  return (
    <section id="about" style={{ position: 'relative', padding: '100px 0' }}>
      {/* Background accent */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '50%',
          left: '-10%',
          height: '350px',
          width: '350px',
          borderRadius: '50%',
          opacity: 0.4,
          filter: 'blur(80px)',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
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
            <Sparkles size={14} /> About Me
          </div>
          <h2 className="section-title animate-fade-in-up delay-100">
            A Glimpse Into <span className="accent-gradient">Who I Am</span>
          </h2>
          <p
            className="section-subtitle animate-fade-in-up delay-200"
            style={{ margin: '0 auto' }}
          >
            Passionate about building things that live on the internet.
            I love turning complex problems into simple, elegant solutions.
          </p>
        </div>

        {/* Two-column: Story + Details */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '48px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: Story */}
          <div className="animate-fade-in-up delay-300">
            <div className="card" style={{ padding: '36px' }}>
              <h3
                style={{
                  marginBottom: '16px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                My Journey
              </h3>
              <p
                style={{
                  marginBottom: '16px',
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                }}
              >
                I'm a developer who thrives on learning and exploring new technologies.
                From building my first "Hello World" to designing complex full-stack applications,
                every project has been a stepping stone in my journey.
              </p>
              <p
                style={{
                  marginBottom: '16px',
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                }}
              >
                I believe in writing clean, maintainable code and creating user experiences
                that feel natural and intuitive. When I'm not coding, you'll find me exploring
                new frameworks, contributing to open-source, or brainstorming the next big idea.
              </p>
              <div
                style={{
                  marginTop: '24px',
                  display: 'flex',
                  gap: '24px',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '20px',
                }}
              >
                {[
                  { Icon: GraduationCap, label: 'Student' },
                  { Icon: Lightbulb, label: 'Innovator' },
                  { Icon: Users, label: 'Team Player' },
                ].map((trait) => (
                  <div
                    key={trait.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                    }}
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
              style={{
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              <Sparkles size={16} style={{ color: 'var(--accent)' }} /> Tech Stack & Skills
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
              }}
              className="skills-grid"
            >
              {skills.map((skill) => {
                const IconComp = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="skill-item"
                    style={{
                      display: 'flex',
                      cursor: 'default',
                      alignItems: 'center',
                      gap: '10px',
                      borderRadius: 'var(--radius-md)',
                      padding: '14px 16px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
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
              style={{
                marginTop: '24px',
                borderRadius: 'var(--radius-md)',
                borderLeft: '3px solid var(--accent)',
                padding: '20px 24px',
                background: 'var(--accent-light)',
              }}
            >
              <p
                style={{
                  fontSize: '0.88rem',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                }}
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
