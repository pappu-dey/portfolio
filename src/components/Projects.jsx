import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollAnimation';

const allProjects = [
  {
    id: 1,
    title: 'Mock Interview Platform',
    subtitle: 'Full Stack App · React & Spring Boot',
    year: '2026',
    category: 'WEB',
    img: '/image/mock_interview.png',
    fallback: 'https://via.placeholder.com/800x500/0d0d0d/ffffff?text=Mock+Interview+Platform',
    description:
      'A comprehensive full-stack interview preparation platform (PrepPilot) featuring technical and HR mock interview sessions, real-time performance analytics dashboard, topic-wise practice, AI recommendations, and mentor feedback. Built with Spring Security for role-based authentication and MySQL with Hibernate/JDBC for robust data persistence.',
    tools: ['React', 'Spring Boot', 'Java JDBC', 'Hibernate', 'MySQL', 'Spring Security'],
    skills: ['Full Stack Architecture', 'REST API Design', 'Role-Based Authentication', 'Database ORM Mapping', 'Analytics Dashboard UI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/pappu-dey/Mock-Interview-Platforms' },
    ],
  },
  {
    id: 2,
    title: 'Learnoboy',
    subtitle: 'Web App · Next.js & TypeScript',
    year: '2026',
    category: 'WEB',
    img: '/image/learnoboy.png',
    fallback: 'https://via.placeholder.com/800x500/0d0d0d/ffffff?text=Learnoboy',
    description:
      'An educational article sharing and interactive coding practice platform designed for students and developers. Enables users to read, write, and share technical articles while practicing coding problems in an integrated environment. Built with Next.js, TypeScript, MongoDB, and Tailwind CSS.',
    tools: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    skills: ['Full-Stack Development', 'Interactive Code Runner', 'Article Publishing System', 'NoSQL Database Modeling', 'Server-Side Rendering'],
    links: [
      { label: 'View Live', href: 'https://www.learnoboy.online/' },
      { label: 'GitHub', href: 'https://github.com/pappu-dey/Learnoboy', outline: true },
    ],
  },
  {
    id: 3,
    title: 'MovieRock',
    subtitle: 'Web App · MERN Stack & TMDB API',
    year: '2025',
    category: 'WEB',
    img: '/image/movierock.png',
    fallback: 'https://via.placeholder.com/800x500/0d0d0d/ffffff?text=MovieRock',
    description:
      'A dynamic movie suggestion and discovery web application. Powered by the TMDB API, it delivers personalized film recommendations, trending movies, detailed cast information, trailers, and user rating features. Built using the full MERN stack (MongoDB, Express.js, React, Node.js).',
    tools: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TMDB API'],
    skills: ['MERN Stack Architecture', 'RESTful API Integration', 'Recommendation Engine', 'Async Data Fetching', 'Responsive Media UI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/pappu-dey/movierock' },
    ],
  },
  {
    id: 4,
    title: 'Multifunctional Calculator',
    subtitle: 'Android App · Java',
    year: '2024',
    category: 'ANDROID',
    img: '/image/calculator.webp',
    fallback: 'https://via.placeholder.com/800x500/1a1a1a/ffffff?text=Calculator+App',
    description:
      'A feature-rich Android calculator built in Java that goes beyond basic arithmetic. It supports scientific operations, history tracking, and a clean Material Design UI. Designed with precision for everyday and advanced calculations.',
    tools: ['Android Studio', 'Java', 'XML Layouts', 'Material Design', 'Gradle'],
    skills: ['Android Development', 'UI/UX Design', 'Object-Oriented Programming', 'App Publishing'],
    links: [
      { label: 'Download APK', href: 'https://drive.google.com/file/d/1Eo9Spi7VOw3-suGY6weYVqybr7vDAAH3/view?usp=drivesdk' },
      { label: 'GitHub', href: 'https://github.com/pappu-dey/Calculator-app', outline: true },
    ],
  },
  {
    id: 5,
    title: 'Tic Tac Toe Game',
    subtitle: 'Web App · HTML CSS JS',
    year: '2024',
    category: 'WEB',
    img: '/image/tictactoe.webp',
    fallback: 'https://via.placeholder.com/800x500/0d0d0d/ffffff?text=Tic+Tac+Toe',
    description:
      'A fully interactive browser-based Tic Tac Toe game with smooth animations and two-player mode. Features win detection, draw handling, and a clean reset mechanism. Built entirely with vanilla web technologies — no frameworks, no dependencies.',
    tools: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'DOM API', 'Netlify'],
    skills: ['Game Logic & Algorithms', 'DOM Manipulation', 'CSS Animations', 'Responsive Design'],
    links: [
      { label: 'Play Online', href: 'https://tic-tac-toep.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/pappu-dey/tictactoe', outline: true },
    ],
  },
  {
    id: 6,
    title: 'News Website',
    subtitle: 'Web App · News API',
    year: '2024',
    category: 'WEB',
    img: '/image/news.webp',
    fallback: 'https://via.placeholder.com/800x500/222/ffffff?text=News+Website',
    description:
      'A dynamic news aggregator that fetches real-time headlines from a public News API. Users can browse by category — tech, sports, politics, and more. The clean layout prioritises readability with a fast and responsive interface.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'News API', 'Fetch API', 'Netlify'],
    skills: ['REST API Integration', 'Async JavaScript', 'Dynamic Content Rendering', 'Responsive Layouts'],
    links: [
      { label: 'View Live', href: 'https://celebrated-torte-38112d.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/pappu-dey/josnews.com', outline: true },
    ],
  },
  {
    id: 7,
    title: 'BMI Calculator',
    subtitle: 'Web App · HTML CSS JS',
    year: '2024',
    category: 'WEB',
    img: '/image/bmical.webp',
    fallback: 'https://via.placeholder.com/800x500/333/ffffff?text=BMI+Calculator',
    description:
      'A sleek Body Mass Index calculator that instantly classifies health status based on user input. Supports both metric and imperial units with real-time feedback and visually engaging result display.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    skills: ['Form Validation', 'Real-time Calculations', 'UX Feedback Design', 'Unit Conversion Logic'],
    links: [
      { label: 'View Live', href: 'https://bmi-calc-lilac.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/pappu-dey/bmi-calc', outline: true },
    ],
  },
  {
    id: 8,
    title: 'Portfolio Website',
    subtitle: 'Web App · React + Vite',
    year: '2026',
    category: 'WEB',
    img: '/image/calculator.webp',
    fallback: 'https://via.placeholder.com/800x500/111/ffffff?text=Portfolio',
    description:
      'A fully custom personal portfolio built with React and Vite. Features Swiss-style design, smooth page transitions with a shader curtain effect, scroll-driven animations, and a project detail system with full-page reveal.',
    tools: ['React', 'Vite', 'CSS3', 'JavaScript (ES6)'],
    skills: ['Frontend Architecture', 'Animation Engineering', 'Swiss Design System', 'Component Design'],
    links: [
      { label: 'View Live', href: '#' },
      { label: 'GitHub', href: 'https://github.com/pappu-dey', outline: true },
    ],
  },
  {
    id: 9,
    title: 'Weather App',
    subtitle: 'Web App · OpenWeather API',
    year: '2025',
    category: 'WEB',
    img: '/image/news.webp',
    fallback: 'https://via.placeholder.com/800x500/1a1a2e/ffffff?text=Weather+App',
    description:
      'A real-time weather application that fetches live data for any city worldwide using the OpenWeather API. Displays temperature, humidity, wind speed, and a 5-day forecast with weather condition icons.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeather API', 'Fetch API'],
    skills: ['API Integration', 'Data Parsing', 'Responsive UI', 'Error Handling'],
    links: [
      { label: 'View Live', href: '#' },
      { label: 'GitHub', href: 'https://github.com/pappu-dey', outline: true },
    ],
  },
  {
    id: 10,
    title: 'Quiz App',
    subtitle: 'Android App · Java',
    year: '2025',
    category: 'ANDROID',
    img: '/image/tictactoe.webp',
    fallback: 'https://via.placeholder.com/800x500/0a0a0a/ffffff?text=Quiz+App',
    description:
      'An Android quiz application featuring multiple categories, a timer, score tracking, and a results summary screen. Built with Java and SQLite for local question storage.',
    tools: ['Android Studio', 'Java', 'SQLite', 'Material Design'],
    skills: ['Android Development', 'Database Design', 'Timer Logic', 'Score Tracking'],
    links: [
      { label: 'GitHub', href: 'https://github.com/pappu-dey', outline: true },
    ],
  },
];

const INITIAL_COUNT = 4;

/** Single Swiss-style project row */
function ProjectRow({ project, index, onClick, isNew }) {
  const rowRef = useRef(null);

  useEffect(() => {
    if (!rowRef.current) return;
    if (isNew) {
      // Newly revealed rows animate in immediately
      const t = setTimeout(() => {
        rowRef.current?.classList.add('ps-row--visible');
      }, index * 60);
      return () => clearTimeout(t);
    }
    // Normal rows use IntersectionObserver
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) rowRef.current?.classList.add('ps-row--visible'); },
      { threshold: 0.05 }
    );
    obs.observe(rowRef.current);
    return () => obs.disconnect();
  }, [isNew, index]);

  return (
    <div
      className="ps-row"
      ref={rowRef}
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
      aria-label={`View details for ${project.title}`}
    >
      {/* Index */}
      <span className="ps-row-num">{String(project.id).padStart(2, '0')}</span>

      {/* Category tag */}
      <span className="ps-row-cat">{project.category}</span>

      {/* Title + subtitle */}
      <div className="ps-row-info">
        <span className="ps-row-title">{project.title}</span>
        <span className="ps-row-sub">{project.subtitle}</span>
      </div>

      {/* Year */}
      <span className="ps-row-year">{project.year}</span>

      {/* Arrow */}
      <span className="ps-row-arrow">↗</span>
    </div>
  );
}

export default function Projects({ onSelectProject }) {
  const headingRef = useScrollReveal();
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [newlyAdded, setNewlyAdded]     = useState(false);

  const visibleProjects = allProjects.slice(0, visibleCount);
  const hasMore         = visibleCount < allProjects.length;

  const handleLoadMore = () => {
    setNewlyAdded(true);
    setVisibleCount((c) => Math.min(c + 3, allProjects.length));
    setTimeout(() => setNewlyAdded(false), 800);
  };

  return (
    <section id="projects" className="ps-section">

      {/* ── Swiss header ── */}
      <div className="ps-header reveal-up" ref={headingRef}>
        <div className="ps-header-left">
          <span className="ps-header-label">SELECTED WORK</span>
          <h2 className="ps-heading">Projects</h2>
        </div>
        <div className="ps-header-right">
          <span className="ps-count">
            {String(allProjects.length).padStart(2, '0')} TOTAL
          </span>
          <a
            href="https://github.com/pappu-dey"
            target="_blank"
            rel="noreferrer"
            className="ps-github-link"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* ── Column labels ── */}
      <div className="ps-col-labels">
        <span>NO.</span>
        <span>TYPE</span>
        <span>PROJECT</span>
        <span>YEAR</span>
        <span />
      </div>

      {/* ── Project rows ── */}
      <div className="ps-list">
        {visibleProjects.map((p, idx) => (
          <ProjectRow
            key={p.id}
            project={p}
            index={idx}
            onClick={onSelectProject}
            isNew={newlyAdded && idx >= visibleCount - 3}
          />
        ))}
      </div>

      {/* ── Load More button ── */}
      {hasMore && (
        <div className="ps-load-more-wrap">
          <button className="ps-load-more-btn" onClick={handleLoadMore}>
            <span className="ps-lm-inner">
              <span className="ps-lm-text">LOAD MORE</span>
              <span className="ps-lm-count">+{allProjects.length - visibleCount} MORE</span>
            </span>
            <span className="ps-lm-line" />
          </button>
        </div>
      )}

      {/* ── All loaded state ── */}
      {!hasMore && visibleCount > INITIAL_COUNT && (
        <div className="ps-all-loaded">
          <span className="ps-all-loaded-line" />
          <span className="ps-all-loaded-text">ALL {allProjects.length} PROJECTS SHOWN</span>
          <span className="ps-all-loaded-line" />
        </div>
      )}

    </section>
  );
}
