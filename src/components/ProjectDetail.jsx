import { useEffect, useRef } from 'react';

export default function ProjectDetail({ project, onClose }) {
  const overlayRef = useRef(null);
  const panelRef   = useRef(null);

  // Trap scroll & animate in on mount
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // Tiny delay to allow CSS transition to run
    const t = setTimeout(() => {
      overlayRef.current?.classList.add('pd-overlay--open');
      panelRef.current?.classList.add('pd-panel--open');
    }, 20);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, []);

  // Animate out then call onClose
  const handleClose = () => {
    overlayRef.current?.classList.remove('pd-overlay--open');
    panelRef.current?.classList.remove('pd-panel--open');
    setTimeout(onClose, 500);
  };

  // Close on backdrop click
  const handleBackdrop = (e) => {
    if (e.target === overlayRef.current) handleClose();
  };

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!project) return null;

  return (
    <div
      className="pd-overlay"
      ref={overlayRef}
      onClick={handleBackdrop}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="pd-panel" ref={panelRef}>

        {/* ── Header bar ── */}
        <div className="pd-header">
          <span className="pd-label">PROJECT DETAIL</span>
          <button className="pd-close-btn" onClick={handleClose} aria-label="Close">
            <span className="pd-close-icon">
              <span /><span />
            </span>
          </button>
        </div>

        {/* ── Swiss grid body ── */}
        <div className="pd-body">

          {/* Left column */}
          <div className="pd-col-left">
            {/* Index number */}
            <span className="pd-index">
              {String(project.id).padStart(2, '0')}
            </span>

            {/* Big title */}
            <h2 className="pd-title">{project.title}</h2>

            {/* Subtitle pill */}
            <span className="pd-subtitle-pill">{project.subtitle}</span>

            {/* Image */}
            <div className="pd-img-wrapper">
              <img
                src={project.img}
                alt={project.title}
                onError={(e) => { e.target.src = project.fallback; }}
              />
            </div>
          </div>

          {/* Right column */}
          <div className="pd-col-right">

            {/* Description */}
            <div className="pd-section">
              <p className="pd-section-label">— OVERVIEW</p>
              <p className="pd-description">{project.description}</p>
            </div>

            {/* Divider */}
            <div className="pd-rule" />

            {/* Tools */}
            <div className="pd-section">
              <p className="pd-section-label">— TOOLS &amp; TECH</p>
              <div className="pd-tags">
                {project.tools.map((tool) => (
                  <span className="pd-tag" key={tool}>{tool}</span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="pd-rule" />

            {/* Skills */}
            <div className="pd-section">
              <p className="pd-section-label">— SKILLS</p>
              <div className="pd-skills-list">
                {project.skills.map((skill, i) => (
                  <div className="pd-skill-item" key={skill}>
                    <span className="pd-skill-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="pd-skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="pd-rule" />

            {/* CTA links */}
            <div className="pd-links">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`pd-link-btn${link.outline ? ' pd-link-btn--outline' : ''}`}
                >
                  {link.label}
                  <span className="pd-link-arrow">↗</span>
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
