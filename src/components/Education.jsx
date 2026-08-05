import { useScrollReveal } from '../hooks/useScrollAnimation';

const eduItems = [
  {
    logo: '/image/hs.webp',
    name: 'Nakunda Katyayani High School',
    degree: 'Higher Secondary',
    period: '2019 – 2021',
  },
  {
    logo: '/image/wbsctve.webp',
    name: 'Raja Ranjit Kishore Govt. Polytechnic',
    degree: 'Diploma in Computer Science & Technology',
    period: '2021 – 2024',
  },
  {
    logo: '/image/narula.webp',
    name: 'Narula Institute of Technology',
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2024 – Pursuing',
  },
];

function EduRow({ item, index }) {
  const ref = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });
  return (
    <div
      className="edu-item reveal-up"
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="edu-left">
        <div className="edu-logo">
          <img src={item.logo} alt={item.name} />
        </div>
        <div>
          <div className="edu-name">{item.name}</div>
          <div className="edu-degree">{item.degree}</div>
        </div>
      </div>
      <div className="edu-period">{item.period}</div>
    </div>
  );
}

export default function Education() {
  const headingRef = useScrollReveal();

  return (
    <section id="education" className="education">
      <h2 className="education-heading reveal-up" ref={headingRef}>Education</h2>
      <div className="education-list">
        {eduItems.map((e, i) => (
          <EduRow key={e.name} item={e} index={i} />
        ))}
      </div>
    </section>
  );
}
