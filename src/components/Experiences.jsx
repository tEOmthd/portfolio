import '../style/Experiences.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';
import { useReveal } from '../hooks/useReveal';

const CERT_YEAR = '2026';

const CERTIFICATIONS = [
  {
    id: 'claude-101',
    title: 'Claude 101',
    url: 'https://verify.skilljar.com/c/gvbz8hjra8dg',
  },
  {
    id: 'claude-code-101',
    title: 'Claude Code 101',
    url: 'https://verify.skilljar.com/c/x4y7q3xrwygj',
  },
  {
    id: 'intro-claude',
    title: 'Introduction to Claude',
    url: 'https://verify.skilljar.com/c/msadhfh56f7f',
  },
];

const EXPERIENCES = [
  {
    id: 'crypto',
    title: { fr: 'CryptoporticusVR', en: 'CryptoporticusVR' },
    org: { fr: 'Service Patrimoine, Ville d\'Arles', en: 'Heritage Department, City of Arles' },
    period: { fr: '16 mars au 19 juin 2026', en: 'March 16 to June 19, 2026' },
    tags: [],
    // détaillé dans l'étude de cas : une seule ligne ici
    description: {
      fr: 'Seul développeur et Product Owner.',
      en: 'Only developer and Product Owner.',
    },
    caseLink: '#case-crypto',
  },
  {
    id: 'harsco',
    title: { fr: 'Harsco Environmental', en: 'Harsco Environmental' },
    org: { fr: 'Site ArcelorMittal, Fos-sur-Mer', en: 'ArcelorMittal site, Fos-sur-Mer' },
    period: { fr: 'Mars à juin 2025', en: 'March to June 2025' },
    tags: ['Power Apps', 'Power Automate', 'Power BI', 'SharePoint'],
    description: {
      fr: 'Application Power Apps de saisie sur tablette pour remplacer des rapports papier. Données dans des listes SharePoint, flux Power Automate, rapports Power BI hebdomadaires avec indicateurs. Contrainte principale : être utilisable sans formation par les équipes terrain.',
      en: 'Power Apps tablet app for field data entry, replacing paper reports. Data in SharePoint lists, Power Automate flows, weekly Power BI reports with KPIs. Main constraint: field teams had to be able to use it without training.',
    },
  },
];

const FORMATIONS = [
  {
    id: 'master',
    title: { fr: 'Master ILSEN', en: 'ILSEN Master\'s' },
    org: { fr: 'Avignon Université', en: 'Avignon Université' },
    period: { fr: 'Depuis sept. 2026', en: 'Since Sept. 2026' },
    tags: [],
    description: {
      fr: 'Master Informatique, Ingénierie du Logiciel de la Société Numérique. Je cherche une alternance pour le suivre.',
      en: "Master's in Computer Science, Software Engineering for the Digital Society. I'm looking for a work-study position to follow it.",
    },
  },
  {
    id: 'but',
    title: { fr: 'BUT Informatique', en: 'BUT in Computer Science' },
    org: { fr: "IUT Aix-Marseille, site d'Arles", en: 'IUT Aix-Marseille, Arles campus' },
    period: { fr: '2023 à 2026', en: '2023 to 2026' },
    tags: [],
    description: {
      fr: 'Développement logiciel, bases de données, réseaux, méthodes agiles. Projet tutoré en équipe : première version de CryptoporticusVR.',
      en: 'Software development, databases, networking, agile methods. Team capstone project: first version of CryptoporticusVR.',
    },
  },
];

function ExpRow({ item, lang, T }) {
  return (
    <li className="exp-row">
      <span className="date">{item.period[lang]}</span>
      <h4>
        {item.title[lang]}
        <span className="exp-org"> · {item.org[lang]}</span>
      </h4>
      <p className="exp-desc">
        {item.description[lang]}
        {item.caseLink && (
          <>
            {' '}
            <a href={item.caseLink} className="text-link">
              {T.see_case} <span aria-hidden="true">↑</span>
            </a>
          </>
        )}
      </p>
      {item.tags.length > 0 && <p className="tech-line">{item.tags.join(', ')}</p>}
    </li>
  );
}

function Experiences() {
  const { lang } = useLang();
  const T = translations[lang].experience;
  const ref = useReveal();

  return (
    <section id="experience" className="section exp-section reveal-section" ref={ref}>
      <div className="container">
        <h2 className="section-title">{T.title}</h2>

        <div className="exp-columns">
          <div className="exp-group">
            <h3 className="exp-group-title">{T.section_pro}</h3>
            <ol className="exp-list">
              {EXPERIENCES.map(item => <ExpRow key={item.id} item={item} lang={lang} T={T} />)}
            </ol>
          </div>

          <div className="exp-group">
            <h3 className="exp-group-title">{T.section_formation}</h3>
            <ol className="exp-list">
              {FORMATIONS.map(item => <ExpRow key={item.id} item={item} lang={lang} T={T} />)}
            </ol>
          </div>
        </div>

        <p className="cert-line">
          <span className="cert-line-label">{T.section_certifications}</span>
          Anthropic :{' '}
          {CERTIFICATIONS.map((cert, i) => (
            <span key={cert.id}>
              {i > 0 && ', '}
              <a href={cert.url} target="_blank" rel="noopener noreferrer" title={`${T.verify} : ${cert.title}`}>
                {cert.title}
              </a>
            </span>
          ))}
          {' '}({CERT_YEAR})
        </p>
      </div>
    </section>
  );
}

export default Experiences;
