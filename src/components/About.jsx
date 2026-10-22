import '../style/About.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';
import { useReveal } from '../hooks/useReveal';

const STACK = [
  {
    category: { fr: 'Frontend', en: 'Frontend' },
    items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
  },
  {
    category: { fr: 'Backend', en: 'Backend' },
    items: ['Node.js', 'Express', 'Strapi'],
  },
  {
    category: { fr: '3D et XR', en: '3D and XR' },
    items: ['Unity 6 / C#', 'XR Interaction Toolkit', 'Three.js'],
  },
  {
    category: { fr: 'Systèmes', en: 'Systems' },
    items: ['C++', 'Java', 'Linux / Bash'],
  },
  {
    category: { fr: 'Données et infra', en: 'Data and infra' },
    items: ['MySQL / PostgreSQL', 'Docker', 'Git / CI-CD'],
  },
  {
    category: { fr: 'Microsoft', en: 'Microsoft' },
    items: ['Power Apps', 'Power Automate', 'Power BI', 'SharePoint'],
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

            <p className="about-languages">
              <span className="about-stack-label">{T.languages_label}</span>
              {T.languages}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
