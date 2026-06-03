const EMAIL = 'adityasinghbharadwaj688@gmail.com';

const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      {/* Background accents */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          opacity: 0.3,
        }}
      />

      <div
        className="section-container"
        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        <div className="section-label animate-fade-in-up">
          <span>✉</span> Contact
        </div>

        <h2
          className="section-title animate-fade-in-up delay-100"
          style={{ marginBottom: 20 }}
        >
          Let's <span className="accent-gradient">Connect</span>
        </h2>

        <p
          className="section-subtitle animate-fade-in-up delay-200"
          style={{ margin: '0 auto 48px' }}
        >
          Have a project in mind, a question to ask, or just want to say hello?
          I'd love to hear from you. Drop me an email and let's make something great together.
        </p>

        {/* CTA Card */}
        <div
          className="animate-fade-in-up delay-300"
          style={{
            maxWidth: 580,
            margin: '0 auto',
            padding: '48px 40px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Email icon */}
          <div
            style={{
              width: 64,
              height: 64,
              margin: '0 auto 24px',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, var(--accent), var(--gold))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              boxShadow: 'var(--shadow-accent)',
            }}
          >
            📬
          </div>

          <h3
            style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              fontFamily: "'Outfit', sans-serif",
              color: 'var(--text-primary)',
              marginBottom: 12,
            }}
          >
            Ready to Start a Conversation?
          </h3>

          <p
            style={{
              fontSize: '0.92rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 420,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Whether it's a collaboration, freelance work, or just a friendly chat —
            my inbox is always open.
          </p>

          {/* Main CTA Button */}
          <a
            href={`mailto:${EMAIL}`}
            className="accent-btn"
            id="contact-email-btn"
            style={{ fontSize: '1rem', padding: '16px 36px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Send Me an Email
          </a>

          {/* Email address display */}
          <div
            style={{
              marginTop: 20,
              fontSize: '0.82rem',
              color: 'var(--text-tertiary)',
              letterSpacing: '0.02em',
            }}
          >
            {EMAIL}
          </div>
        </div>

        {/* Social links row */}
        <div
          className="animate-fade-in-up delay-500"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            marginTop: 48,
          }}
        >
          {[
            {
              name: 'GitHub',
              url: 'https://github.com/adityasingh',
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              ),
            },
            {
              name: 'LinkedIn',
              url: 'https://linkedin.com/in/adityasingh',
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              name: 'Email',
              url: `mailto:${EMAIL}`,
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith('mailto') ? undefined : '_blank'}
              rel={social.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={social.name}
              style={{
                width: 48,
                height: 48,
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border)',
                background: 'var(--bg-surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all var(--transition-base)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.background = 'var(--accent-light)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'var(--bg-surface)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
