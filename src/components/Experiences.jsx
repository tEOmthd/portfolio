import '../style/Experiences.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';
import { useReveal } from '../hooks/useReveal';

const CERTIFICATIONS = [
  {
    id: 'claude-101',
    title: 'Claude 101',
    org: 'Anthropic Education',
    year: '2026',
    url: 'https://verify.skilljar.com/c/gvbz8hjra8dg',
  },
  {
    id: 'claude-code-101',
    title: 'Claude Code 101',
    org: 'Anthropic Education',
    year: '2026',
    url: 'https://verify.skilljar.com/c/x4y7q3xrwygj',
  },
  {
    id: 'intro-claude',
    title: 'Introduction to Claude',
    org: 'Anthropic Education',
    year: '2026',
    url: 'https://verify.skilljar.com/c/msadhfh56f7f',
  },
];

const EXPERIENCES = [
  {
    id: 'crypto',
    type: 'stage',
    year: '2026',
    title: { fr: 'Stage — CryptoporticusVR', en: 'Internship — CryptoporticusVR' },
    org: { fr: 'Mairie d\'Arles', en: 'City of Arles' },
    period: { fr: '16 Mars — 19 Juin 2026', en: 'March 16 — June 19, 2026' },
    tags: ['Unity', 'C#', 'Node.js', 'TypeScript', 'React', 'Docker'],
    description: {
      fr: "Visite immersive des Cryptoportiques d'Arles (site UNESCO). Architecture fullstack : expérience 3D Unity/WebGL, backend temps réel Socket.io, frontend React. Rôle : Product Owner.",
      en: "Immersive tour of Arles' Cryptoportiques (UNESCO site). Fullstack architecture: Unity/WebGL 3D experience, real-time Socket.io backend, React frontend. Role: Product Owner.",
    },
  },
  {
    id: 'harsco',
    type: 'stage',
    year: '2025',
    title: { fr: 'Stage — Harsco Metals & Minerals France', en: 'Internship — Harsco Metals & Minerals France' },
    org: { fr: 'Harsco Metals & Minerals France (site ArcelorMittal, Fos-sur-Mer)', en: 'Harsco Metals & Minerals France (ArcelorMittal site, Fos-sur-Mer)' },
    period: { fr: 'Mars — Juin 2025 · 3 mois', en: 'March — June 2025 · 3 months' },
    tags: ['PowerApps', 'Power Automate', 'PowerBI', 'SQL'],
    description: {
      fr: "Digitalisation des rapports chantier sur tablette. Enjeu principal : une interface assez simple pour être adoptée sans formation en milieu industriel. Tableaux de bord PowerBI avec KPIs.",
      en: "Digitizing worksite reports on tablet. Main challenge: an interface simple enough for factory adoption without training. PowerBI dashboards with KPIs.",
    },
  },
];

const FORMATIONS = [
  {
    id: 'master',
    type: 'formation',
    year: '2026',
    title: {
      fr: 'Master Informatique — Ingénierie du Logiciel (ILSEN)',
      en: "Master's in Computer Science — Software Engineering (ILSEN)",
    },
    org: { fr: "Université d'Avignon", en: 'University of Avignon' },
    period: { fr: 'Sept. 2026 →', en: 'Sept. 2026 →' },
    inProgress: true,
    tags: [],
    description: {
      fr: "Master Ingénierie du Logiciel de la Société Numérique. Formation mixte : je recherche une alternance pour la suivre en rythme entreprise/école.",
      en: "Master in Software Engineering for the Digital Society. Hybrid program: I'm seeking a work-study contract (alternance) to follow it.",
    },
  },
  {
    id: 'but',
    type: 'formation',
    year: '2023',
    title: { fr: 'BUT Informatique', en: 'Bachelor of Technology — CS' },
    org: { fr: 'IUT Aix-Marseille — Arles', en: 'IUT Aix-Marseille — Arles' },
    period: { fr: '2023 → 2026', en: '2023 → 2026' },
    inProgress: false,
    tags: [],
    description: {
      fr: "Formation couvrant le développement logiciel, bases de données, réseaux et méthodes agiles. Nombreux projets en équipe, du prototype au déploiement.",
      en: "Program covering software development, databases, networking and agile methodologies. Many team projects, from prototype to deployment.",
    },
  },
];

function TimelineEntry({ item, lang, T, isLast }) {
  const isStage = item.type === 'stage';

  return (
    <div className={`tl-entry${isLast ? ' tl-entry-last' : ''}`}>
      {/* Colonne gauche : année + ligne */}
      <div className="tl-left">
        <span className="tl-year">{item.year}</span>
        {!isLast && <div className="tl-line" />}
      </div>

      {/* Colonne centrale : dot */}
      <div className="tl-track">
        <div className={`tl-dot${isStage ? ' tl-dot-stage' : ''}`} />
        {!isLast && <div className="tl-connector" />}
      </div>

      {/* Contenu */}
      <div className="tl-content">
        <div className="tl-header">
          <span className={`tl-type${isStage ? ' tl-type-stage' : ''}`}>
            {isStage ? T.internship : T.formation}
          </span>
          {item.inProgress && <span className="tl-badge">{T.in_progress}</span>}
          <span className="tl-period">{item.period[lang]}</span>
        </div>
        <h3>{item.title[lang]}</h3>
        <p className="tl-org">{item.org[lang]}</p>
        <p className="tl-desc">{item.description[lang]}</p>
        {item.tags.length > 0 && (
          <div className="tl-tags">
            {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

function CertBadge({ cert, verifyLabel }) {
  return (
    <a
      className="cert-badge"
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${verifyLabel} — ${cert.title}`}
    >
      <span className="cert-issuer">{cert.org}</span>
      <span className="cert-title">{cert.title}</span>
      <span className="cert-year">{cert.year}</span>
    </a>
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
            <div className="timeline">
              {EXPERIENCES.map((item, i) => (
                <TimelineEntry
                  key={item.id}
                  item={item}
                  lang={lang}
                  T={T}
                  isLast={i === EXPERIENCES.length - 1}
                />
              ))}
            </div>
          </div>

          <div className="exp-group">
            <h3 className="exp-group-title">{T.section_formation}</h3>
            <div className="timeline">
              {FORMATIONS.map((item, i) => (
                <TimelineEntry
                  key={item.id}
                  item={item}
                  lang={lang}
                  T={T}
                  isLast={i === FORMATIONS.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="cert-section">
          <h3 className="exp-group-title">{T.section_certifications}</h3>
          <p className="cert-sub">{T.cert_sub}</p>
          <div className="cert-scroll">
            {CERTIFICATIONS.map(cert => (
              <CertBadge key={cert.id} cert={cert} verifyLabel={T.verify} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
