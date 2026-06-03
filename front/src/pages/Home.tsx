import { useTheme } from '../context/ThemeContext';
import headDark from '../assets/Head-Dark.png';
import headLight from '../assets/Head-Light.png';

const Home = () => {
  const { theme } = useTheme();
  const heroImage = theme === 'dark' ? headDark : headLight;

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Background gradient orb */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)`,
          filter: 'blur(80px)',
          animation: 'pulseGlow 6s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle secondary orb */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-8%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, var(--gold-light) 0%, transparent 70%)`,
          filter: 'blur(60px)',
          animation: 'pulseGlow 8s ease-in-out infinite 2s',
          pointerEvents: 'none',
        }}
      />

      <div
        className="section-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 60,
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left: Text */}
        <div
          style={{ flex: '1 1 50%', maxWidth: 560 }}
          className="hero-text"
        >
          <div
            className="animate-fade-in-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
              color: 'var(--accent)',
              background: 'var(--accent-light)',
              borderRadius: 'var(--radius-full)',
              marginBottom: 24,
            }}
          >
            <span style={{ fontSize: '0.9rem' }}>👋</span> Welcome to my world
          </div>

          <h1
            className="animate-fade-in-up delay-100"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              marginBottom: 8,
              color: 'var(--text-primary)',
            }}
          >
            I'm{' '}
            <span className="accent-gradient">Aditya</span>
          </h1>

          <h2
            className="animate-fade-in-up delay-200"
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: 24,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Developer · Creator · Problem Solver
          </h2>

          <p
            className="animate-fade-in-up delay-300"
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 480,
            }}
          >
            Crafting elegant digital experiences with clean code and creative thinking.
            I turn ideas into polished, performant applications.
          </p>

          <div
            className="animate-fade-in-up delay-400"
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <a href="#projects" className="accent-btn">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            <a href="#contact" className="outline-btn">
              Get In Touch
            </a>
          </div>

          {/* Quick stats */}
          <div
            className="animate-fade-in-up delay-600"
            style={{
              display: 'flex',
              gap: 40,
              marginTop: 56,
              paddingTop: 32,
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            {[
              { value: '10+', label: 'Projects' },
              { value: '2+', label: 'Years Exp' },
              { value: '5+', label: 'Tech Stack' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    fontFamily: "'Outfit', sans-serif",
                    color: 'var(--accent)',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: 'var(--text-tertiary)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase' as const,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Hero Image */}
        <div
          style={{
            flex: '1 1 45%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
          className="hero-image-wrap"
        >
          {/* Glow ring behind image */}
          <div
            style={{
              position: 'absolute',
              width: '85%',
              height: '85%',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, var(--accent-glow), var(--gold-light))',
              filter: 'blur(40px)',
              animation: 'pulseGlow 5s ease-in-out infinite',
            }}
          />
          <img
            src={heroImage}
            alt="Aditya Singh — 3D Creative Workspace"
            className="animate-float"
            style={{
              width: '100%',
              maxWidth: 560,
              position: 'relative',
              zIndex: 1,
              borderRadius: 'var(--radius-lg)',
              transition: 'opacity var(--transition-theme)',
            }}
          />
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          #home .section-container {
            flex-direction: column-reverse !important;
            text-align: center;
            gap: 32px !important;
          }
          .hero-text { max-width: 100% !important; align-items: center; }
          .hero-text > div:last-child {
            justify-content: center;
          }
          .hero-text p { margin-left: auto; margin-right: auto; }
          .hero-image-wrap { max-width: 400px; }
        }
      `}</style>
    </section>
  );
};

export default Home;
