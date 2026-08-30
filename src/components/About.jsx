import { useScrollReveal } from '../hooks/useScrollAnimation';

export default function About() {
  const heyRef = useScrollReveal();
  const photoRef = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });
  const textRef = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });

  return (
    <section id="about" className="about">
      {/* Left: Big hey */}
      <div className="about-hey reveal-left" ref={heyRef}>Hey!</div>

      {/* Center: Photo */}
      <div className="about-photo-wrapper reveal-up" ref={photoRef}>
        <div className="about-photo">
          <img src="/image/pappu.png" alt="Pappu Dey" />
        </div>
      </div>

      {/* Right: Bio */}
      <div className="about-text-col reveal-right" ref={textRef}>
        <p className="about-bio-main">
          I'm Pappu Dey, an Android &amp; Web Developer based in West Bengal,
          India, currently pursuing my B.Tech at Narula Institute of Technology.
        </p>
        <p className="about-bio-secondary">
          I'm passionate about turning ideas into elegant digital experiences —
          from native Android apps with Java to modern web applications with
          React. I love clean code, smooth animations, and products that
          actually work.
        </p>
        <a href="#contact" className="about-cta">
          Get in touch <span className="about-cta-arrow">↗</span>
        </a>
      </div>
    </section>
  );
}
