import '../style/Projets.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';
import { useReveal } from '../hooks/useReveal';

const CASE_STUDIES = [
  {
    id: 'nlm',
    title: { fr: 'NLM Production', en: 'NLM Production' },
    tags: ['React', 'TypeScript', 'Strapi', 'PostgreSQL', 'Vercel'],
    media: {
      image: '/portfolio/assets/projet/CaptureNLMProduction.png',
      alt: { fr: "Page d'accueil du site NLM Production", en: 'NLM Production home page' },
    },
    liveLink: 'https://nlmproduction.fr/',
    privateCode: 'client',
    role: {
      fr: 'Développeur full-stack, design avec la cliente',
      en: 'Full-stack developer, design with the client',
    },
    blocks: [
      {
        label: { fr: 'Contexte', en: 'Context' },
        text: {
          fr: "Site vitrine d'une vidéaste et photographe d'Avignon, en ligne sur nlmproduction.fr.",
          en: 'Showcase site for a videographer and photographer based in Avignon, live at nlmproduction.fr.',
        },
      },
      {
        label: { fr: "Ce que j'ai fait", en: 'What I did' },
        text: {
          fr: 'Front en React et TypeScript sur Vercel. Contenu géré par la cliente dans Strapi (PostgreSQL), sur un VPS Hetzner. Déploiement par GitHub Actions et PM2. Galerie masonry avec lightbox, vidéos YouTube et Vimeo, SEO (JSON-LD, Open Graph, sitemap).',
          en: 'React and TypeScript front end on Vercel. Content managed by the client in Strapi (PostgreSQL), on a Hetzner VPS. Deployment through GitHub Actions and PM2. Masonry gallery with lightbox, YouTube and Vimeo videos, SEO (JSON-LD, Open Graph, sitemap).',
        },
      },
      {
        label: { fr: 'Résultat', en: 'Outcome' },
        text: {
          fr: "Le site est en ligne et la cliente publie ses photos et vidéos sans passer par moi. J'en assure l'hébergement et la maintenance.",
          en: 'The site is live and she publishes her photos and videos without going through me. I handle hosting and maintenance.',
        },
      },
    ],
  },
  {
    id: 'crypto',
    title: {
      fr: "Visite virtuelle des cryptoportiques d'Arles",
      en: 'Virtual tour of the Arles cryptoporticus',
    },
    subtitle: 'CryptoporticusVR',
    tags: ['Unity 6', 'C#', 'XR Interaction Toolkit', 'Node.js', 'Socket.IO', 'Docker'],
    // Visuels en attente de l'accord de la Ville d'Arles : renseigner video / poster / images
    media: { video: null, poster: null, images: [] },
    liveLink: null,
    privateCode: 'arles',
    role: {
      fr: 'Seul développeur et Product Owner (stage)',
      en: 'Only developer and Product Owner (internship)',
    },
    blocks: [
      {
        label: { fr: 'Contexte', en: 'Context' },
        text: {
          fr: "Les cryptoportiques d'Arles sont classés au patrimoine mondial de l'UNESCO mais ne sont pas accessibles aux personnes à mobilité réduite. Le but est de les rendre visitables en virtuel.",
          en: 'The Arles cryptoporticus is a UNESCO World Heritage site that people with reduced mobility cannot access. The goal is to make it visitable virtually.',
        },
      },
      {
        label: { fr: 'En équipe, projet tutoré du BUT (Scrum)', en: 'As a team, BUT capstone project (Scrum)' },
        text: {
          fr: 'Première version : maquette web en Three.js et serveur Node.js / TypeScript (API REST, Socket.IO, MySQL, Docker) pour le multijoueur, le multilingue et un quiz.',
          en: 'First version: a Three.js web mock-up and a Node.js / TypeScript server (REST API, Socket.IO, MySQL, Docker) for multiplayer, multiple languages and a quiz.',
        },
      },
      {
        label: {
          fr: 'Seul, en stage au Service Patrimoine (16 mars au 19 juin 2026)',
          en: 'Solo, internship at the Heritage Department (March 16 to June 19, 2026)',
        },
        text: {
          fr: "Seul développeur et Product Owner, j'ai repris l'ensemble. L'application Unity 6 / C# a deux scènes : PC au clavier et à la souris, casque Meta Quest 3 / 3S. J'ai repris le serveur multijoueur : les casques se connectent à un PC sur le même Wi-Fi et font la visite ensemble. J'ai travaillé avec Laokess (scénarisation), l'école MoPA (reconstruction 3D par nuage de points) et des étudiants en patrimoine et en multimédia.",
          en: 'As the only developer and Product Owner, I took over the whole project. The Unity 6 / C# app has two scenes: PC with keyboard and mouse, and Meta Quest 3 / 3S headset. I took over the multiplayer server: headsets connect to a PC on the same Wi-Fi and take the tour together. I worked with Laokess (storytelling), the MoPA school (3D reconstruction from a point cloud) and heritage and multimedia students.',
        },
      },
      {
        label: { fr: 'Résultat', en: 'Outcome' },
        text: {
          fr: "Présentée le 2 juin 2026 lors d'une journée professionnelle à Arles, puis au public aux Journées européennes du patrimoine en septembre 2026. J'ai rédigé la documentation de passation.",
          en: 'Presented on June 2, 2026 at a professional day in Arles, then to the public during European Heritage Days in September 2026. I wrote the handover documentation.',
        },
      },
    ],
    points: {
      fr: [
        "XR Interaction Toolkit, deux profils URP, interface en World Space, minimap, points d'intérêt audio, objets à examiner",
        'Builds Windows, APK Quest et WebGL',
      ],
      en: [
        'XR Interaction Toolkit, two URP profiles, World Space UI, minimap, audio points of interest, objects to examine',
        'Windows, Quest APK and WebGL builds',
      ],
    },
    aside: {
      label: { fr: 'À côté : maquette web en Three.js', en: 'Alongside: a Three.js web mock-up' },
      text: {
        fr: "Une reconstitution des cryptoportiques par époques, avec des points d'intérêt et la ville actuelle générée à partir d'OpenStreetMap.",
        en: 'A reconstruction of the cryptoporticus by period, with points of interest and the present-day city generated from OpenStreetMap.',
      },
      link: 'https://cryptoportique-viewer.vercel.app/',
    },
  },
];

const STUDY_PROJECTS = [
  {
    id: 'password-manager',
    title: { fr: 'Gestionnaire de mots de passe', en: 'Password manager' },
    tech: 'Java',
    detail: { fr: 'chiffrement AES, mot de passe maître haché', en: 'AES encryption, hashed master password' },
    codeLink: 'https://github.com/tEOmthd/GestionnaireDeMotDepasse',
  },
];

function CaseMedia({ study, lang }) {
  const { media } = study;

  if (media.video) {
    return (
      <video
        src={media.video}
        poster={media.poster ?? undefined}
        autoPlay
        muted
        loop
        playsInline
        aria-label={study.title[lang]}
      />
    );
  }

  if (media.image) {
    return <img src={media.image} alt={media.alt[lang]} loading="lazy" />;
  }

  return (
    <div className="case-media-empty" aria-hidden="true">
      <span>{study.subtitle ?? study.title[lang]}</span>
    </div>
  );
}

function CaseStudy({ study, lang, T }) {
  return (
    <article className="case-study">
      <div className="case-media">
        <CaseMedia study={study} lang={lang} />
      </div>

      <div className="case-body">
        {study.subtitle && <p className="case-subtitle">{study.subtitle}</p>}
        <h3>{study.title[lang]}</h3>
        <p className="case-role">{study.role[lang]}</p>

        {study.blocks.map(block => (
          <p key={block.label.fr} className="case-block">
            <strong>{block.label[lang]}.</strong> {block.text[lang]}
          </p>
        ))}

        {study.points && (
          <ul className="case-points">
            {study.points[lang].map(point => <li key={point}>{point}</li>)}
          </ul>
        )}

        {study.aside && (
          <p className="case-block case-aside">
            <strong>{study.aside.label[lang]}.</strong> {study.aside.text[lang]}{' '}
            <a href={study.aside.link} target="_blank" rel="noopener noreferrer">{T.see_mockup}</a>
          </p>
        )}

        <div className="case-tags">
          {study.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>

        <div className="case-links">
          {study.liveLink && (
            <a href={study.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              <i className="fas fa-external-link-alt" /> {T.live}
            </a>
          )}
          {study.privateCode && (
            <span className="label-academic">
              <i className="fas fa-lock" /> {T[`private_code_${study.privateCode}`]}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const { lang } = useLang();
  const T = translations[lang].projects;
  const ref = useReveal();

  return (
    <section id="projects" className="section reveal-section" ref={ref}>
      <div className="container">
        <h2 className="section-title">{T.title}</h2>

        <div className="case-studies">
          {CASE_STUDIES.map(study => (
            <CaseStudy key={study.id} study={study} lang={lang} T={T} />
          ))}
        </div>

        <div className="study-projects">
          <h3 className="study-projects-title">{T.study_title}</h3>
          <ul>
            {STUDY_PROJECTS.map(project => (
              <li key={project.id}>
                <strong>{project.title[lang]}</strong>
                <span> · {project.tech} · {project.detail[lang]}</span>
                {project.codeLink && (
                  <>
                    {' · '}
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">{T.code}</a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
