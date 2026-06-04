import { useTheme } from '../context/ThemeContext';
import headDark from '../assets/Head-Dark.png';
import headLight from '../assets/Head-Light.png';

const Home = () => {
  const { theme } = useTheme();
  const heroImage = theme === 'dark' ? headDark : headLight;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background gradient orb */}
      <div
        className="pointer-events-none absolute top-[10%] right-[-5%] h-[600px] w-[600px] rounded-full blur-[80px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        }}
      />

      {/* Subtle secondary orb */}
      <div
        className="pointer-events-none absolute bottom-[5%] left-[-8%] h-[400px] w-[400px] rounded-full blur-[60px]"
        style={{
          background: 'radial-gradient(circle, var(--gold-light) 0%, transparent 70%)',
          animation: 'pulseGlow 8s ease-in-out infinite 2s',
        }}
      />

      <div className="relative z-1 mx-auto flex w-full max-w-[1200px] flex-col-reverse items-center gap-8 px-6 text-center lg:flex-row lg:gap-[60px] lg:text-left">
        {/* Left: Text */}
        <div className="flex-1 lg:max-w-[560px]">
          <h1
            className="animate-fade-in-up mb-2 font-[Outfit] font-black leading-[1.08] text-[clamp(2.4rem,6vw,4rem)]"
            style={{ color: 'var(--text-primary)' }}
          >
            I'm{' '}
            <span className="accent-gradient">Aditya</span>
          </h1>

          <h2
            className="animate-fade-in-up delay-100 mb-6 font-[Outfit] text-[clamp(1.3rem,3vw,1.8rem)] font-semibold"
            style={{ color: 'var(--text-secondary)' }}
          >
            Developer · Creator · Problem Solver
          </h2>

          <p
            className="animate-fade-in-up delay-200 mx-auto mb-9 max-w-[480px] text-[1.05rem] leading-[1.75] lg:mx-0"
            style={{ color: 'var(--text-secondary)' }}
          >
            Crafting elegant digital experiences with clean code and creative thinking.
            I turn ideas into polished, performant applications.
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-wrap justify-center gap-4 lg:justify-start">
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
            className="animate-fade-in-up delay-500 mt-14 flex justify-center gap-10 border-t pt-8 lg:justify-start"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            {[
              { value: '10+', label: 'Projects' },
              { value: '2+', label: 'Years Exp' },
              { value: '5+', label: 'Tech Stack' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-[Outfit] text-[1.6rem] font-extrabold"
                  style={{ color: 'var(--accent)' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[0.8rem] font-medium uppercase tracking-[0.04em]"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Images */}
        <div className="relative flex flex-1 flex-col items-center justify-center gap-6 max-w-[400px] lg:max-w-[520px]">
          {/* 3D Head Image (still, no animation) */}
          <div className="relative w-full">
            {/* Glow ring behind image */}
            <div
              className="absolute inset-0 rounded-[var(--radius-xl)] blur-[40px] animate-pulse-glow"
              style={{
                background: 'linear-gradient(135deg, var(--accent-glow), var(--gold-light))',
              }}
            />
            <img
              src={heroImage}
              alt="Aditya Singh — 3D Creative Workspace"
              className="relative z-1 w-full max-w-[520px] rounded-[var(--radius-lg)]"
              style={{ transition: 'opacity var(--transition-theme)' }}
            />
          </div>

          {/* Personal Photo Placeholder */}
          <div
            className="relative z-1 flex w-full max-w-[280px] flex-col items-center justify-center overflow-hidden rounded-[var(--radius-xl)] border-2 border-dashed"
            style={{
              borderColor: 'var(--border)',
              background: 'var(--bg-surface)',
              aspectRatio: '3 / 4',
            }}
          >
            <div
              className="mb-3 flex size-14 items-center justify-center rounded-full text-2xl"
              style={{ background: 'var(--accent-light)' }}
            >
              📷
            </div>
            <p
              className="px-4 text-center font-[Outfit] text-sm font-medium"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Your photo here
            </p>
            <p
              className="mt-1 px-4 text-center text-xs"
              style={{ color: 'var(--text-tertiary)', opacity: 0.6 }}
            >
              Replace this with your personal photo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
