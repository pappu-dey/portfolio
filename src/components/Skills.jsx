import { useScrollReveal } from '../hooks/useScrollAnimation';

const imageMap = {
  java: '/image/java.webp',
  python: '/image/python.webp',
  sql: '/image/sql.webp',
  mysql: '/image/sql.webp',
  html: '/image/html.webp',
  css: '/image/css.webp',
  javascript: '/image/Js.webp',
  react: '/image/react.webp',
  'android studio': '/image/andst.webp',
  firebase: '/image/firebase.webp',
};

function SkillIcon({ name, size = 18 }) {
  const key = name.toLowerCase().trim();
  const imgPath = imageMap[key];

  if (imgPath) {
    return (
      <img
        src={imgPath}
        alt={name}
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          borderRadius: 4,
          flexShrink: 0,
        }}
      />
    );
  }

  switch (key) {
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} style={{ flexShrink: 0 }}>
          <path fill="#47A248" d="M12 2C11.5 3 7 8.5 7 13.5C7 16.5 9.2 19 12 19.8V22H12.5V19.8C15.3 19 17.5 16.5 17.5 13.5C17.5 8.5 13 3 12.5 2L12 2Z" />
          <path fill="#3F8B40" d="M12 2V19.8C14.8 19 17 16.5 17 13.5C17 9 13.2 4 12 2Z" />
        </svg>
      );
    case 'spring boot':
    case 'springboot':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} style={{ flexShrink: 0 }}>
          <path fill="#6DB33F" d="M117.8 45.4L68.6 17c-2.8-1.6-6.4-1.6-9.2 0L10.2 45.4c-2.8 1.6-4.6 4.7-4.6 8v56.8c0 3.3 1.8 6.4 4.6 8l49.2 28.4c1.4.8 3 1.2 4.6 1.2s3.2-.4 4.6-1.2l49.2-28.4c2.8-1.6 4.6-4.7 4.6-8V53.4c0-3.3-1.8-6.4-4.6-8z" />
          <path fill="#FFFFFF" d="M64 96.5c-17.9 0-32.5-14.6-32.5-32.5 0-13.9 8.8-25.8 21.2-30.5 3.2 7.9 10.4 13.8 19.2 15.1-9 3.1-15.6 11.5-15.6 21.4 0 12.2 9.9 22.1 22.1 22.1 6.8 0 12.8-3.1 16.9-7.9 3.6 7.2-2.1 12.3-11.3 12.3z" />
        </svg>
      );
    case 'express':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} style={{ flexShrink: 0 }}>
          <rect width="256" height="256" rx="56" fill="#000000" />
          <text x="50%" y="65%" textAnchor="middle" fill="#FFFFFF" fontWeight="900" fontSize="110" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-4px">ex</text>
        </svg>
      );
    case 'node.js':
    case 'node':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} style={{ flexShrink: 0 }}>
          <path fill="#339933" d="M128 16l96 55.4v110.8L128 238 32 182.2V67.4L128 16z" />
          <path fill="#FFFFFF" d="M128 70l45 26v52l-45 26-45-26V96l45-26zm-15 52c0 8.3 6.7 15 15 15s15-6.7 15-15-6.7-15-15-15-15 6.7-15 15z" />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} style={{ flexShrink: 0 }}>
          <path fill="#F05032" d="M21.7 10.75L13.25 2.3c-.4-.4-1.05-.4-1.45 0l-2.45 2.45 3.1 3.1c.45-.15.95-.05 1.3.3.45.45.5 1.15.2 1.7l3.05 3.05c.55-.3 1.25-.25 1.7.2.55.55.55 1.45 0 2-.55.55-1.45.55-2 0-.45-.45-.5-1.15-.2-1.7l-2.9-2.9v6.8c.2.1.35.25.45.45.4.55.3 1.35-.2 1.85-.55.55-1.45.55-2 0-.55-.55-.55-1.45 0-2 .2-.2.45-.35.75-.4V10.1c-.3-.05-.55-.2-.75-.4L8.85 6.8 2.3 13.35c-.4.4-.4 1.05 0 1.45l8.45 8.45c.4.4 1.05.4 1.45 0l9.5-9.5c.4-.4.4-1.05 0-1.5z" />
        </svg>
      );
    case 'netlify':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} style={{ flexShrink: 0 }}>
          <path fill="#00C7B7" d="M6.3 3h11.4L21 6.3v11.4L17.7 21H6.3L3 17.7V6.3L6.3 3zm1 2L5 7.3v9.4L7.3 19h9.4l2.3-2.3V7.3L16.7 5H7.3z" />
          <path fill="#00C7B7" d="M12 7l4 5-4 5-4-5 4-5z" />
        </svg>
      );
    case 'vercel':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} style={{ flexShrink: 0 }}>
          <path fill="currentColor" d="M12 2L24 22H0L12 2Z" />
        </svg>
      );
    case 'data structures & algorithms':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      );
    case 'oop':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        </svg>
      );
    case 'dbms':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'operating systems':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case 'computer networks':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="5" y1="12" x2="5" y2="16" />
          <line x1="19" y1="12" x2="19" y2="16" />
        </svg>
      );
    default:
      return (
        <span className="skill-pill-dot" />
      );
  }
}

const skillCategories = [
  {
    id: '01',
    category: 'Programming Languages',
    skills: ['Java', 'Python', 'SQL'],
  },
  {
    id: '02',
    category: 'Core Concepts',
    skills: [
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    id: '03',
    category: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Spring Boot'],
  },
  {
    id: '04',
    category: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    id: '05',
    category: 'Tools & Platforms',
    skills: ['Git', 'Android Studio', 'Firebase', 'Netlify', 'Vercel'],
  },
];

const marqueeSkills = [
  'Java',
  'Python',
  'SQL',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'Spring Boot',
  'MySQL',
  'MongoDB',
  'Git',
  'Android Studio',
  'Firebase',
  'Netlify',
  'Vercel',
];

function MarqueeRow({ reverse }) {
  const doubled = [...marqueeSkills, ...marqueeSkills];
  return (
    <div style={{ overflow: 'hidden', padding: '8px 0' }}>
      <div
        className="marquee-track"
        style={reverse ? { animationDirection: 'reverse' } : {}}
      >
        {doubled.map((name, i) => (
          <span className="marquee-item" key={i}>
            <SkillIcon name={name} size={24} />
            {name}
            {i < doubled.length - 1 && <span className="marquee-separator" />}
          </span>
        ))}
      </div>
    </div>
  );
}

function CategoryRow({ item, index }) {
  const rowRef = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });

  return (
    <div
      className="skills-row reveal-up"
      ref={rowRef}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="skills-row-left">
        <span className="skills-row-num">{item.id}</span>
        <h3 className="skills-category-title">{item.category}</h3>
      </div>
      <div className="skills-pills-wrap">
        {item.skills.map((skill, sIdx) => (
          <span
            className="skill-pill"
            key={skill}
            style={{ transitionDelay: `${index * 90 + sIdx * 40 + 80}ms` }}
          >
            <SkillIcon name={skill} size={16} />
            <span>{skill}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headingRef = useScrollReveal();

  return (
    <>
      <section id="skills" className="skills-section services">
        <div className="skills-header reveal-up" ref={headingRef}>
          <div className="skills-header-top">
            <span className="skills-label">/ SKILLS &amp; TECH STACK</span>
            <span className="skills-count">[ 05 CATEGORIES ]</span>
          </div>
          <h2 className="skills-heading services-heading">Skills</h2>
        </div>

        <div className="skills-list services-list">
          {skillCategories.map((item, index) => (
            <CategoryRow key={item.category} item={item} index={index} />
          ))}
        </div>
      </section>

      <div className="skills-marquee-section">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </>
  );
}


