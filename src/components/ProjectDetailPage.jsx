import { useEffect, useRef } from 'react';

export default function ProjectDetailPage({ project, onBack }) {
  const pageRef    = useRef(null);
  const contentRef = useRef(null);

  // Stagger content reveal after page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => {
      pageRef.current?.classList.add('pdp--revealed');
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="pdp" ref={pageRef}>

      {/* ── Top bar ── */}
      <header className="pdp-topbar">
        <button className="pdp-back-btn" onClick={onBack} aria-label="Back to projects">
          <span className="pdp-back-arrow">←</span>
          <span className="pdp-back-label">BACK</span>
        </button>
        <span className="pdp-topbar-title">PROJECT DETAIL</span>
        <span className="pdp-topbar-index">
          {String(project.id).padStart(2, '0')} / 04
        </span>
      </header>

      {/* ── Hero band — full-width title ── */}
      <div className="pdp-hero-band">
        <div className="pdp-hero-inner" ref={contentRef}>
          <span className="pdp-hero-num">{String(project.id).padStart(2, '0')}</span>
          <h1 className="pdp-hero-title">{project.title}</h1>
          <span className="pdp-hero-pill">{project.subtitle}</span>
        </div>
      </div>

      {/* ── Full-width image ── */}
      <div className="pdp-cover-img">
        <img
          src={project.img}
          alt={project.title}
          onError={(e) => { e.target.src = project.fallback; }}
        />
      </div>

      {/* ── Swiss grid body ── */}
      <div className="pdp-grid">

        {/* Left column */}
        <div className="pdp-col-left">
          <div className="pdp-sticky-block">

            <div className="pdp-section">
              <p className="pdp-section-label">OVERVIEW</p>
              <p className="pdp-description">{project.description}</p>
            </div>

            <div className="pdp-section">
              <p className="pdp-section-label">TOOLS &amp; TECH</p>
              <div className="pdp-tags">
                {project.tools.map((tool) => (
                  <span className="pdp-tag" key={tool}>{tool}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right column */}
        <div className="pdp-col-right">

          <div className="pdp-section">
            <p className="pdp-section-label">SKILLS</p>
            <div className="pdp-skills-list">
              {project.skills.map((skill, i) => (
                <div className="pdp-skill-row" key={skill}>
                  <span className="pdp-skill-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="pdp-skill-bar-wrap">
                    <span className="pdp-skill-name">{skill}</span>
                    <span className="pdp-skill-line" />
                  </span>
                  <span className="pdp-skill-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pdp-rule" />

          <div className="pdp-section">
            <p className="pdp-section-label">LINKS</p>
            <div className="pdp-links">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`pdp-link-btn${link.outline ? ' pdp-link-btn--outline' : ''}`}
                >
                  <span>{link.label}</span>
                  <span className="pdp-btn-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="pdp-bottom-bar">
        <button className="pdp-back-btn pdp-back-btn--lg" onClick={onBack}>
          <span className="pdp-back-arrow">←</span>
          <span>BACK TO PROJECTS</span>
        </button>
        <span className="pdp-bottom-copy">© 2026 PAPPU DEY</span>
      </div>

    </div>
  );
}
