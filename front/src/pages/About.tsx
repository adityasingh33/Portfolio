const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Git', icon: '🔀' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Express', icon: '🚀' },
];

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '-10%',
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          opacity: 0.4,
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label animate-fade-in-up">
            <span>✦</span> About Me
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
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: Story */}
          <div className="animate-fade-in-up delay-300">
            <div className="card" style={{ padding: 36 }}>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: 16,
                  color: 'var(--text-primary)',
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                My Journey
              </h3>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                I'm a developer who thrives on learning and exploring new technologies.
                From building my first "Hello World" to designing complex full-stack applications,
                every project has been a stepping stone in my journey.
              </p>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                I believe in writing clean, maintainable code and creating user experiences
                that feel natural and intuitive. When I'm not coding, you'll find me exploring
                new frameworks, contributing to open-source, or brainstorming the next big idea.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 24,
                  marginTop: 24,
                  paddingTop: 20,
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                {[
                  { icon: '🎓', label: 'Student' },
                  { icon: '💡', label: 'Innovator' },
                  { icon: '🤝', label: 'Team Player' },
                ].map((trait) => (
                  <div
                    key={trait.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ fontSize: '1.1rem' }}>{trait.icon}</span>
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
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: 20,
                color: 'var(--text-primary)',
                fontFamily: "'Outfit', sans-serif",
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span style={{ color: 'var(--accent)' }}>◆</span> Tech Stack & Skills
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 12,
              }}
              className="skills-grid"
            >
              {skills.map((skill, i) => (
                <div
                  key={skill.name}
                  className={`animate-fade-in-up delay-${Math.min((i + 3) * 100, 800)}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '14px 16px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    cursor: 'default',
                    transition: 'all var(--transition-base)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ fontSize: '1.15rem' }}>{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div
              style={{
                marginTop: 24,
                padding: '20px 24px',
                background: 'var(--accent-light)',
                borderRadius: 'var(--radius-md)',
                borderLeft: '3px solid var(--accent)',
              }}
            >
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                "Constantly learning and adapting — currently exploring AI/ML integrations
                and cloud-native architectures."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
