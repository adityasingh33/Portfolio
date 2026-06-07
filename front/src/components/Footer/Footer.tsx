const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '32px 0',
        background: 'var(--bg-secondary)',
        transition: 'all var(--transition-theme)',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          maxWidth: '1200px',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '0 24px',
        }}
      >
        {/* Left: Branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.15rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, var(--accent), var(--gold))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AS.
          </span>
          <span
            style={{
              display: 'inline-block',
              height: '16px',
              width: '1px',
              background: 'var(--border)',
            }}
          />
          <span
            style={{
              fontSize: '0.82rem',
              fontWeight: 400,
              color: 'var(--text-tertiary)',
            }}
          >
            Portfolio ended.Innovation didn't.
          </span>
        </div>

        {/* Center: Copyright */}
        <p
          style={{
            margin: 0,
            fontSize: '0.82rem',
            fontWeight: 400,
            color: 'var(--text-tertiary)',
          }}
        >
          © {currentYear} Aditya Singh. All rights reserved.
        </p>

        {/* Right: Back to top */}
        <a
          href="#home"
          className="footer-link"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.82rem',
            fontWeight: 500,
            color: 'var(--text-secondary)',
          }}
        >
          Back to top
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
