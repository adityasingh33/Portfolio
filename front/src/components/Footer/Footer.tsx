const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      style={{
        padding: '32px 0',
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-secondary)',
        transition: 'all var(--transition-theme)',
      }}
    >
      <div
        className="section-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        {/* Left: Branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
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
              width: 1,
              height: 16,
              background: 'var(--border)',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-tertiary)',
              fontWeight: 400,
            }}
          >
            Crafted with care
          </span>
        </div>

        {/* Center: Copyright */}
        <p
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-tertiary)',
            fontWeight: 400,
            margin: 0,
          }}
        >
          © {currentYear} Aditya Singh. All rights reserved.
        </p>

        {/* Right: Back to top */}
        <a
          href="#home"
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            transition: 'color var(--transition-fast)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
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
