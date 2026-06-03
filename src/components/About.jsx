import '../style/About.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';
import { useReveal } from '../hooks/useReveal';

const STACK = [
  {
    category: { fr: 'Frontend', en: 'Frontend' },
    items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Three.js'],
  },
  {
    category: { fr: 'Backend', en: 'Backend' },
    items: ['Node.js', 'Express', 'JWT / Auth'],
  },
  {
    category: { fr: 'Systèmes & Jeux', en: 'Systems & Games' },
    items: ['C# / Unity', 'C++', 'Java', 'Linux / Bash'],
  },
  {
    category: { fr: 'Data & Infra', en: 'Data & Infra' },
    items: ['MySQL / PostgreSQL', 'SQLite', 'Docker', 'Git / CI-CD', 'PowerApps', 'PowerBI'],
  },
  {
    category: { fr: 'Notions', en: 'Notions' },
    items: ['Python', 'PHP / Laravel'],
  },
];

function About() {
  const { lang } = useLang();
  const T = translations[lang].about;
  const ref = useReveal();

  return (
    <section id="about" className="section about-section reveal-section" ref={ref}>
      <div className="container">
        <h2 className="section-title">{T.title}</h2>

        <div className="about-layout">
          <div className="about-text">
            <p>{T.p1}</p>
            <p>{T.p2}</p>
            <p className="about-personal">{T.p3}</p>
          </div>

          <div className="about-stack">
            <span className="about-stack-label">{T.stack_label}</span>
            <div className="stack-categories">
              {STACK.map(({ category, items }) => (
                <div key={category.fr} className="stack-category">
                  <span className="stack-cat-title">{category[lang]}</span>
                  <div className="stack-tags">
                    {items.map(item => (
                      <span key={item} className="stack-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
