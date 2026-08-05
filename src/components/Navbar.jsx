import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to slightly style navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (!e.target.closest('.navbar') && !e.target.closest('.navbar-mobile-menu')) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <a href="#home" className="navbar-logo">Pappu Dey</a>

        {/* Desktop links */}
        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger — mobile only */}
        <button
          className={`navbar-menu-btn${open ? ' navbar-menu-btn--open' : ''}`}
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="ham-line ham-line--top" />
          <span className="ham-line ham-line--mid" />
          <span className="ham-line ham-line--bot" />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`navbar-mobile-menu${open ? ' navbar-mobile-menu--open' : ''}`}
        aria-hidden={!open}
      >
        {links.map((l, i) => (
          <a
            key={l.label}
            href={l.href}
            className="navbar-mobile-link"
            style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
            onClick={() => setOpen(false)}
          >
            {l.label}
            <span className="navbar-mobile-arrow">↗</span>
          </a>
        ))}
      </div>
    </>
  );
}
