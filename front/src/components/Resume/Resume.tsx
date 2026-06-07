import { FileText, ExternalLink } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" style={{ position: 'relative', padding: '100px 0' }}>
      {/* Background decoration */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '30%',
          right: '10%',
          height: '300px',
          width: '300px',
          borderRadius: '50%',
          opacity: 0.35,
          filter: 'blur(90px)',
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
          textAlign: 'center',
        }}
      >
        <div className="section-label animate-fade-in-up">
          <FileText size={14} /> Resume
        </div>

        <h2 className="section-title animate-fade-in-up delay-100" style={{ marginBottom: '20px' }}>
          My <span className="accent-gradient">Professional Background</span>
        </h2>

        <p
          className="section-subtitle animate-fade-in-up delay-200"
          style={{ margin: '0 auto 48px auto' }}
        >
          Interested in a detailed breakdown of my experience, skills, and qualifications? 
          View or download my full resume.
        </p>

        {/* Resume Card */}
        <div
          className="animate-fade-in-up delay-300 card"
          style={{
            margin: '0 auto',
            maxWidth: '580px',
            borderRadius: 'var(--radius-xl)',
            padding: '40px 30px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '64px',
              height: '64px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-lg)',
              fontSize: '1.8rem',
              background: 'linear-gradient(135deg, var(--accent), var(--gold))',
              color: '#fff',
              boxShadow: 'var(--shadow-accent)',
            }}
          >
            <FileText size={32} />
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
            }}
          >
            Aditya Singh — Resume
          </h3>

          <p
            style={{
              maxWidth: '420px',
              fontSize: '0.92rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
            }}
          >
            Click below to open my resume directly in browser view mode. From there you can read, print, or download it.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="accent-btn"
            style={{
              padding: '16px 36px',
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            View Resume <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
