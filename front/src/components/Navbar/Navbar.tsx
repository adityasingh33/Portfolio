import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import leetcodeIconPng from '../../assets/leetcode icon.png';
import codechefIconPng from '../../assets/codechef icon.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Scroll spy — track which section is in view
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      id="main-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        padding: scrolled ? '12px 0' : '20px 0',
        borderBottom: scrolled ? '1px solid var(--bg-glass-border)' : '1px solid transparent',
        background: scrolled ? 'var(--bg-glass)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          maxWidth: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(16px, 4vw, 48px)',
        }}
      >
        {/* Logo */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <a
            href="#home"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              transition: 'opacity 150ms',
              background: 'linear-gradient(135deg, var(--accent), var(--gold))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'block',
            }}
          >
            AS.
          </a>
          {/* Animated Vertical Line & Social Logos */}
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pointerEvents: scrolled ? 'none' : 'auto',
              transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1), visibility 800ms cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: scrolled ? 0 : 1,
              visibility: scrolled ? 'hidden' : 'visible',
            }}
          >
            {/* Vertical Line */}
            <div
              style={{
                width: '2px',
                height: '32vh',
                background: 'linear-gradient(to bottom, var(--accent), var(--gold))',
                transformOrigin: 'top',
                animation: 'extendLine 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards, lineGlow 4s ease-in-out infinite alternate',
              }}
            />
            {/* Logos falling from the line */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                marginTop: '10px',
                animation: 'fadeInUp 1s ease-out 1.8s both',
              }}
            >
              {/* GitHub */}
              <a
                href="https://github.com/adityasingh33"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{
                  display: 'flex',
                  width: '32px',
                  height: '32px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-surface)',
                  color: 'var(--text-secondary)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all var(--transition-base)',
                }}
                title="GitHub"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/lunatica_codes/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{
                  display: 'flex',
                  width: '32px',
                  height: '32px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-surface)',
                  color: 'var(--text-secondary)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all var(--transition-base)',
                }}
                title="LeetCode"
              >
                <img
                  src={leetcodeIconPng}
                  alt="LeetCode"
                  style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                />
              </a>
              {/* CodeChef */}
              <a
                href="https://www.codechef.com/users/adityasingh_66"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{
                  display: 'flex',
                  width: '32px',
                  height: '32px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-surface)',
                  color: 'var(--text-secondary)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all var(--transition-base)',
                }}
                title="CodeChef"
              >
                <img
                  src={codechefIconPng}
                  alt="CodeChef"
                  style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right side: Nav Links + Theme toggle + Mobile menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {/* Desktop Nav Links */}
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
            className="nav-desktop-links"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link"
                    style={{
                      display: 'block',
                      borderRadius: 'var(--radius-full)',
                      padding: '8px 16px',
                      fontSize: '0.9rem',
                      transition: 'all 150ms',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                      background: isActive ? 'var(--accent-light)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Theme Toggle */}
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="theme-toggle"
              style={{
                display: 'flex',
                width: '40px',
                height: '40px',
                flexShrink: 0,
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                fontSize: '1.125rem',
                border: '1px solid var(--border)',
                background: 'var(--bg-surface)',
                color: 'var(--text-primary)',
              }}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              className={`nav-mobile-btn${mobileOpen ? ' nav-mobile-btn--open' : ''}`}
              style={{
                display: 'none',
                width: '40px',
                height: '40px',
                flexShrink: 0,
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                padding: 0,
                position: 'relative',
                border: '1px solid var(--border)',
                background: 'var(--bg-surface)',
                color: 'var(--text-primary)',
              }}
            >
              <span className="hamburger-box">
                <span className="hamburger-bar" />
                <span className="hamburger-bar" />
                <span className="hamburger-bar" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="animate-fade-in-up"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            borderBottom: '1px solid var(--bg-glass-border)',
            padding: '16px 24px',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            background: 'var(--bg-glass)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="nav-link"
                style={{
                  display: 'block',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 18px',
                  fontSize: '1rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  background: isActive ? 'var(--accent-light)' : 'transparent',
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
