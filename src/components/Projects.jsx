import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollAnimation';

const projects = [
  {
    id: 1,
    title: 'Multifunctional Calculator',
    subtitle: 'Android App · Java',
    img: '/image/calculator.webp',
    fallback: 'https://via.placeholder.com/800x500/1a1a1a/ffffff?text=Calculator+App',
    links: [
      { label: 'Download APK', href: 'https://drive.google.com/file/d/1Eo9Spi7VOw3-suGY6weYVqybr7vDAAH3/view?usp=drivesdk' },
      { label: 'GitHub', href: 'https://github.com/pappu-dey/Calculator-app', outline: true },
    ],
  },
  {
    id: 2,
    title: 'Tic Tac Toe Game',
    subtitle: 'Web App · HTML CSS JS',
    img: '/image/tictactoe.webp',
    fallback: 'https://via.placeholder.com/800x500/0d0d0d/ffffff?text=Tic+Tac+Toe',
    links: [
      { label: 'Play Online', href: 'https://tic-tac-toep.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/pappu-dey/tictactoe', outline: true },
    ],
  },
  {
    id: 3,
    title: 'News Website',
    subtitle: 'Web App · News API',
    img: '/image/news.webp',
    fallback: 'https://via.placeholder.com/800x500/222/ffffff?text=News+Website',
    links: [
      { label: 'View Live', href: 'https://celebrated-torte-38112d.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/pappu-dey/josnews.com', outline: true },
    ],
  },
  {
    id: 4,
    title: 'BMI Calculator',
    subtitle: 'Web App · HTML CSS JS',
    img: '/image/bmical.webp',
    fallback: 'https://via.placeholder.com/800x500/333/ffffff?text=BMI+Calculator',
    links: [
      { label: 'View Live', href: 'https://bmi-calc-lilac.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/pappu-dey/bmi-calc', outline: true },
    ],
  },
];

/** Single card with reveal + image parallax on scroll */
function ProjectCard({ project, index }) {
  const cardRef   = useScrollReveal({ threshold: 0.08 });
  const imgRef    = useRef(null);

  // Image parallax — image moves slightly opposite to scroll, creating depth
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    let rafId;
    const update = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const wrapper = img.parentElement;
        const rect    = wrapper.getBoundingClientRect();
        const viewH   = window.innerHeight;
        // progress: 1 (entering bottom) → 0 (at center) → -1 (leaving top)
        const progress = (viewH * 0.5 - rect.top - rect.height * 0.5) / viewH;
        // subtle vertical shift: max ±20px
        const shift = progress * 40;
        img.style.transform = `scale(1.08) translateY(${shift}px)`;
      });
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', update);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="project-card"
      ref={cardRef}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="project-img-wrapper">
        <img
          ref={imgRef}
          src={project.img}
          alt={project.title}
          onError={(e) => { e.target.src = project.fallback; }}
        />
      </div>
      <div className="project-card-meta">
        <div className="project-card-title">{project.title}</div>
        <div className="project-card-subtitle">{project.subtitle}</div>
        <div className="project-card-links">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <button className={`project-btn${link.outline ? ' outline' : ''}`}>
                {link.label} {!link.outline && '↗'}
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headingRef = useScrollReveal();

  return (
    <section id="projects" className="projects">
      <div className="projects-header reveal-up" ref={headingRef}>
        <h2 className="projects-heading">Featured<br />Projects</h2>
        <a
          href="https://github.com/pappu-dey"
          target="_blank"
          rel="noreferrer"
          className="projects-view-all"
        >
          View All Work <span className="view-all-arrow">↗</span>
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((p, idx) => (
          <ProjectCard key={p.id} project={p} index={idx} />
        ))}
      </div>
    </section>
  );
}
