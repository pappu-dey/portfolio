export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Tagline */}
        <div className="footer-tagline">
          Turning Ideas<br />into Code.
        </div>

        {/* Quick links */}
        <div>
          <div className="footer-col-title">/Quick Links</div>
          <div className="footer-links-grid">
            {quickLinks.map((l) => (
              <a key={l.label} href={l.href} className="footer-link-pill">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="footer-col-title">/Contact</div>
          <a
            href="https://www.linkedin.com/in/pappu-dey-0bb84924a/"
            target="_blank"
            rel="noreferrer"
            className="footer-contact-email"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* Giant watermark */}
      <div className="footer-watermark" aria-hidden="true">PAPPU DEY</div>

      {/* Bottom row */}
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Pappu Dey. All rights reserved.</span>
        <div className="footer-social">
          <a href="https://github.com/pappu-dey" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/pappu-dey-0bb84924a/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/downlode/pappu cv.pdf" download>Download CV</a>
        </div>
      </div>
    </footer>
  );
}
