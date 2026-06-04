const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="border-t py-8"
      style={{
        borderColor: 'var(--border-subtle)',
        background: 'var(--bg-secondary)',
        transition: 'all var(--transition-theme)',
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 md:px-4">
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <span
            className="font-display text-[1.15rem] font-extrabold"
            style={{
              background: 'linear-gradient(135deg, var(--accent), var(--gold))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AS.
          </span>
          <span
            className="inline-block h-4 w-px"
            style={{ background: 'var(--border)' }}
          />
          <span
            className="text-[0.82rem] font-normal"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Crafted with care
          </span>
        </div>

        {/* Center: Copyright */}
        <p
          className="m-0 text-[0.82rem] font-normal"
          style={{ color: 'var(--text-tertiary)' }}
        >
          © {currentYear} Aditya Singh. All rights reserved.
        </p>

        {/* Right: Back to top */}
        <a
          href="#home"
          className="footer-link flex items-center gap-1.5 text-[0.82rem] font-medium"
          style={{ color: 'var(--text-secondary)' }}
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
