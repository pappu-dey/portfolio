import { useEffect, useRef } from 'react';

/**
 * Splits text into individual word spans so each can animate independently.
 * Each word gets a `--word-index` CSS variable for staggered delays.
 */
function AnimatedText({ text, className = '', tag: Tag = 'span' }) {
  const words = text.split(' ');
  return (
    <Tag className={`animated-text ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="word-wrap"
          style={{ '--word-index': i }}
        >
          <span className="word-inner">{word}</span>
        </span>
      ))}
    </Tag>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);

  // Trigger text reveal on mount (hero is always visible)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    // small delay so page paint is done
    const t = setTimeout(() => {
      section.classList.add('hero--revealed');
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="hero" ref={sectionRef}>
      {/* Decorative sparkles */}
      <div className="hero-sparkle top-left" aria-hidden="true">✦</div>
      <div className="hero-sparkle bottom-right" aria-hidden="true"></div>

      {/* Giant title — word-by-word reveal */}
      <div className="hero-title-block">
        {/* Name line */}
        <p className="hero-name">
          <span className="word-wrap" style={{ '--word-index': 0 }}>
            <span className="word-inner">Pappu Dey</span>
          </span>
        </p>

        <h1 className="hero-title">
          {/* Line 1: ANDROID & WEB */}
          <span className="hero-line">
            <span className="word-wrap" style={{ '--word-index': 1 }}>
              <span className="word-inner">ANDROID</span>
            </span>
            {' '}
            <span className="word-wrap" style={{ '--word-index': 2 }}>
              <span className="word-inner">&amp;</span>
            </span>
            {' '}
            <span className="word-wrap" style={{ '--word-index': 3 }}>
              <span className="word-inner">WEB</span>
            </span>
          </span>

          <br />

          {/* Line 2: DEVELOPER */}
          <span className="hero-line">
            <span className="word-wrap" style={{ '--word-index': 4 }}>
              <span className="word-inner">DEVELOPER</span>
            </span>
          </span>
        </h1>
      </div>

      {/* Bottom meta */}
      <div className="hero-meta">
        <span className="hero-year">©2026</span>
        <span className="hero-since">/CREATING SINCE 2024</span>
      </div>
    </section>
  );
}
