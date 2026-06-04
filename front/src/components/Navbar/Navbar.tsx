import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

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
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled
          ? 'py-3 border-b border-[var(--bg-glass-border)] backdrop-blur-[20px]'
          : 'py-5 border-b border-transparent'
      }`}
      style={{
        background: scrolled ? 'var(--bg-glass)' : 'transparent',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          className="font-display text-2xl font-extrabold tracking-tight transition-opacity duration-150"
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--gold))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          AS.
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-2 list-none m-0 p-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link block rounded-full px-[18px] py-2 text-[0.88rem]"
                  style={{
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

        {/* Right: Theme toggle + Mobile menu */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="theme-toggle flex size-[42px] shrink-0 cursor-pointer items-center justify-center rounded-full text-lg"
            style={{
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
            className={`nav-mobile-btn flex md:hidden size-[42px] shrink-0 cursor-pointer items-center justify-center rounded-full p-0 relative${mobileOpen ? ' nav-mobile-btn--open' : ''}`}
            style={{
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="absolute top-full left-0 right-0 border-b border-[var(--bg-glass-border)] px-6 py-4 backdrop-blur-[20px] animate-fade-in-up"
          style={{
            background: 'var(--bg-glass)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="nav-link block rounded-[var(--radius-md)] px-[18px] py-3.5 text-base"
                style={{
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
