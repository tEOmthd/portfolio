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
          <img
            className="about-photo"
            src="/portfolio/assets/TeoAbout.jpg"
            width="900"
            height="1200"
            alt={T.photo_alt}
            loading="lazy"
          />

          <div className="about-text">
            <p className="about-lead">{T.p1}</p>
            <p>{T.p2}</p>
            <p>{T.p3}</p>

            <div className="about-stack">
              <h3 className="about-stack-title">{T.stack_label}</h3>
              <dl className="stack-list">
                {STACK.map(({ category, items }) => (
                  <div key={category.fr} className="stack-row">
                    <dt>{category[lang]}</dt>
                    <dd>{items.join(', ')}</dd>
                  </div>
                ))}
                <div className="stack-row">
                  <dt>{T.languages_label}</dt>
                  <dd>{T.languages}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
