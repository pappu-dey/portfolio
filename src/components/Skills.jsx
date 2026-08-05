import { useScrollReveal } from '../hooks/useScrollAnimation';

const skillItems = [
  { name: 'HTML', img: '/image/html.webp' },
  { name: 'CSS', img: '/image/css.webp' },
  { name: 'JavaScript', img: '/image/Js.webp' },
  { name: 'React', img: '/image/react.webp' },
  { name: 'Firebase', img: '/image/firebase.webp' },
  { name: 'Python', img: '/image/python.webp' },
  { name: 'Java', img: '/image/java.webp' },
  { name: 'Android Studio', img: '/image/andst.webp' },
  { name: 'SQL', img: '/image/sql.webp' },
];

const services = [
  { name: 'Android Development', tags: ['Java', 'XML', 'Android Studio'] },
  { name: 'Frontend Development', tags: ['React', 'HTML', 'CSS'] },
  { name: 'Backend & Database',   tags: ['Firebase', 'SQL', 'Node'] },
  { name: 'UI / UX Design',       tags: ['Clean UI', 'Responsive', 'Animations'] },
];

function MarqueeRow({ reverse }) {
  const doubled = [...skillItems, ...skillItems];
  return (
    <div style={{ overflow: 'hidden', padding: '8px 0' }}>
      <div
        className="marquee-track"
        style={reverse ? { animationDirection: 'reverse' } : {}}
      >
        {doubled.map((s, i) => (
          <span className="marquee-item" key={i}>
            <img src={s.img} alt={s.name} />
            {s.name}
            {i < doubled.length - 1 && <span className="marquee-separator" />}
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
      <section id="skills" className="services">
        {/* Heading with scroll reveal */}
        <h2 className="services-heading reveal-up" ref={headingRef}>Services</h2>

        <div className="services-list">
          {services.map((s, i) => (
            <ServiceRow key={s.name} service={s} index={i} />
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

function ServiceRow({ service, index }) {
  const ref = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });
  return (
    <div
      className="service-item reveal-up"
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="service-name">{service.name}</span>
      <div className="service-tags">
        {service.tags.map((t) => (
          <span className="service-tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}
