import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import headDark from '../assets/Head-Dark.png';
import headLight from '../assets/Head-Light.png';
import adityaDP from '../assets/Aditya_DP.png';

const Home = () => {
  const { theme } = useTheme();
  const [activeMedia, setActiveMedia] = useState<'head' | 'photo'>('head');
  const heroImage = theme === 'dark' ? headDark : headLight;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMedia((prev) => (prev === 'head' ? 'photo' : 'head'));
    }, 10000);
    return () => clearInterval(interval);
  }, [activeMedia]);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* Background gradient orb */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '10%',
          right: '-5%',
          height: '600px',
          width: '600px',
          borderRadius: '50%',
          filter: 'blur(80px)',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          animation: 'pulseGlow 6s ease-in-out infinite',
        }}
      />

      {/* Subtle secondary orb */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          bottom: '5%',
          left: '-8%',
          height: '400px',
          width: '400px',
          borderRadius: '50%',
          filter: 'blur(60px)',
          background: 'radial-gradient(circle, var(--gold-light) 0%, transparent 70%)',
          animation: 'pulseGlow 8s ease-in-out infinite 2s',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          margin: '0 auto',
          display: 'flex',
          width: '100%',
          maxWidth: '1200px',
          alignItems: 'center',
          gap: '60px',
          padding: '0 24px',
          textAlign: 'left',
        }}
        className="hero-content"
      >
        {/* Left: Text */}
        <div style={{ flex: 1, maxWidth: '560px' }}>
          <h1
            className="animate-fade-in-up"
            style={{
              color: 'var(--text-primary)',
              marginBottom: '8px',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              lineHeight: 1.08,
              fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            }}
          >
            I'm{' '}
            <span className="accent-gradient">Aditya</span>
          </h1>

          <h2
            className="animate-fade-in-up delay-100"
            style={{
              color: 'var(--text-secondary)',
              marginBottom: '24px',
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
              fontWeight: 600,
            }}
          >
            Developer · Creator · Problem Solver
          </h2>

          <p
            className="animate-fade-in-up delay-200"
            style={{
              color: 'var(--text-secondary)',
              marginBottom: '36px',
              maxWidth: '480px',
              fontSize: '1.05rem',
              lineHeight: 1.75,
            }}
          >
            Crafting elegant digital experiences with clean code and creative thinking.
            I turn ideas into polished, performant applications.
          </p>

          <div
            className="animate-fade-in-up delay-300"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}
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
            className="animate-fade-in-up delay-500"
            style={{
              marginTop: '56px',
              display: 'flex',
              gap: '40px',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '32px',
            }}
          >
            {[
              { value: '4', label: 'Projects' },
              { value: '12', label: 'Tech Stack' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: 'var(--accent)',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--text-tertiary)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Images (Collage Style) */}
        <div
          className="hero-image-wrapper"
          style={{
            position: 'relative',
            flex: 1,
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Main Container */}
          <div
            onClick={() => setActiveMedia((prev) => (prev === 'head' ? 'photo' : 'head'))}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1/1',
              cursor: 'pointer',
            }}
            title="Click to toggle image"
          >
            {/* 3D Head Image */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                opacity: activeMedia === 'head' ? 1 : 0,
                transform: activeMedia === 'head' ? 'scale(1)' : 'scale(0.95)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: activeMedia === 'head' ? 'auto' : 'none',
              }}
            >
              {/* Glow ring */}
              <div
                className="animate-pulse-glow"
                style={{
                  position: 'absolute',
                  inset: '5%',
                  borderRadius: 'var(--radius-xl)',
                  filter: 'blur(40px)',
                  background: 'linear-gradient(135deg, var(--accent-glow), var(--gold-light))',
                }}
              />
              <img
                src={heroImage}
                alt="Aditya Singh — 3D Creative Workspace"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-lg)',
                }}
              />
            </div>

            {/* Personal Photo */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                zIndex: 10,
                width: '70%',
                aspectRatio: '3/4',
                overflow: 'hidden',
                borderRadius: 'var(--radius-xl)',
                borderWidth: '8px',
                borderStyle: 'solid',
                borderColor: 'var(--bg-primary)',
                boxShadow: 'var(--shadow-xl)',
                background: 'var(--bg-primary)',
                opacity: activeMedia === 'photo' ? 1 : 0,
                transform: `translate(-50%, -50%) ${activeMedia === 'photo' ? 'scale(1)' : 'scale(0.95)'}`,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: activeMedia === 'photo' ? 'auto' : 'none',
              }}
            >
              <img
                src={adityaDP}
                alt="Aditya Singh"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* Slide Indicators */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '20px',
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveMedia('head');
              }}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: activeMedia === 'head' ? 'var(--accent)' : 'var(--text-tertiary)',
                opacity: activeMedia === 'head' ? 1 : 0.4,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              title="Creative Workspace"
              aria-label="Switch to Workspace logo"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveMedia('photo');
              }}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: activeMedia === 'photo' ? 'var(--accent)' : 'var(--text-tertiary)',
                opacity: activeMedia === 'photo' ? 1 : 0.4,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              title="Personal Photo"
              aria-label="Switch to personal photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
