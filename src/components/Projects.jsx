import '../style/Projets.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';
import { useReveal } from '../hooks/useReveal';
import { MAQUETTE_URL } from '../constants';
import Maquette3D from './Maquette3D';

const CASE_STUDIES = [
  {
    id: 'nlm',
    title: { fr: 'NLM Production', en: 'NLM Production' },
    tags: ['React', 'Strapi (TypeScript)', 'PostgreSQL', 'Vercel'],
    media: {
      // capture pleine page en 1440 px de large, qui défile au survol
      image: '/portfolio/assets/projet/nlm-pleine-page.jpg',
      width: 1440,
      height: 2348,
      scroll: true,
      alt: { fr: "Page d'accueil du site NLM Production, en entier", en: 'Full NLM Production home page' },
    },
    liveLink: 'https://nlmproduction.fr/',
    privateCode: 'client',
    role: {
      fr: 'Développeur full-stack, design avec la cliente',
      en: 'Full-stack developer, design with the client',
    },
    highlights: {
      fr: ['Projet client, en production', 'Front React, back Strapi en TypeScript', 'Hébergé et maintenu par moi'],
      en: ['Client project, in production', 'React front end, Strapi back end in TypeScript', 'Hosted and maintained by me'],
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
          fr: "J'ai conçu le design avec la cliente, puis développé le site : un front React et un back Strapi en TypeScript, où elle gère ses photos et ses vidéos. J'ai mis en place l'hébergement et le déploiement automatique.",
          en: 'I designed the site with the client, then built it: a React front end and a Strapi back end in TypeScript, where she manages her photos and videos. I set up hosting and automatic deployment.',
        },
      },
      {
        label: { fr: 'Résultat', en: 'Outcome' },
        text: {
          fr: 'Le site est en ligne et la cliente publie ses photos et ses vidéos sans passer par moi.',
          en: 'The site is live and the client publishes her photos and videos without going through me.',
        },
      },
    ],
    details: {
      fr: [
        'Front React sur Vercel',
        'Back Strapi en TypeScript, PostgreSQL, sur un VPS Hetzner',
        'Déploiement par GitHub Actions et PM2',
        'Galerie masonry avec lightbox',
        'Vidéos YouTube et Vimeo',
        'SEO : JSON-LD, Open Graph, sitemap',
      ],
      en: [
        'React front end on Vercel',
        'Strapi back end in TypeScript, PostgreSQL, on a Hetzner VPS',
        'Deployment through GitHub Actions and PM2',
        'Masonry gallery with lightbox',
        'YouTube and Vimeo videos',
        'SEO: JSON-LD, Open Graph, sitemap',
      ],
    },
  },
  {
    id: 'crypto',
    title: {
      fr: "Visite virtuelle des cryptoportiques d'Arles",
      en: 'Virtual tour of the Arles cryptoporticus',
    },
    subtitle: 'CryptoporticusVR',
    tags: ['Unity 6', 'C#', 'XR Interaction Toolkit', 'Three.js', 'Node.js', 'Socket.IO'],
    // En attendant les médias VR (accord de la Ville d'Arles), le visuel est la maquette 3D
    media: { maquette: 'medievale' },
    privateCode: 'arles',
    role: {
      fr: 'Seul développeur et Product Owner (stage)',
      en: 'Only developer and Product Owner (internship)',
    },
    highlights: {
      fr: ['Seul développeur, 3 mois de stage', 'PC + Meta Quest 3 / 3S', 'Présenté aux JEP 2026'],
      en: ['Only developer, 3-month internship', 'PC + Meta Quest 3 / 3S', 'Shown at European Heritage Days 2026'],
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
        label: { fr: "Ce que j'ai fait", en: 'What I did' },
        text: {
          fr: "La première version est née d'un projet tutoré du BUT, en équipe. En stage, seul développeur et Product Owner, j'ai repris l'ensemble : une application Unity 6 / C# pour PC et casque Meta Quest 3 / 3S, et le serveur multijoueur qui permet aux casques de faire la visite ensemble sur le même Wi-Fi. J'ai travaillé avec Laokess (scénarisation), l'école MoPA (reconstruction 3D par nuage de points) et des étudiants en patrimoine et en multimédia.",
          en: 'The first version came from a team capstone project during my BUT. As an intern, the only developer and Product Owner, I took over everything: a Unity 6 / C# app for PC and Meta Quest 3 / 3S, and the multiplayer server that lets headsets take the tour together on the same Wi-Fi. I worked with Laokess (storytelling), the MoPA school (3D reconstruction from a point cloud) and heritage and multimedia students.',
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
    details: {
      fr: [
        'Unity 6 / C#, XR Interaction Toolkit, New Input System',
        'Deux profils URP (PC et Quest), interface en World Space, minimap en RenderTexture',
        "Points d'intérêt audio, objets à examiner",
        'Builds Windows, APK Quest et WebGL',
        'Serveur multijoueur repris du projet tutoré : Node.js / TypeScript, Express, Socket.IO, MySQL, Docker',
        'Git LFS pour les assets 3D',
        "Maquette web en Three.js : reconstitution par époques, points d'intérêt, ville actuelle générée à partir d'OpenStreetMap",
      ],
      en: [
        'Unity 6 / C#, XR Interaction Toolkit, New Input System',
        'Two URP profiles (PC and Quest), World Space UI, RenderTexture minimap',
        'Audio points of interest, objects to examine',
        'Windows, Quest APK and WebGL builds',
        'Multiplayer server taken over from the capstone project: Node.js / TypeScript, Express, Socket.IO, MySQL, Docker',
        'Git LFS for 3D assets',
        'Three.js web mock-up: reconstruction by period, points of interest, present-day city generated from OpenStreetMap',
      ],
    },
    actions: [
      // masqué sur mobile et tablette : l'image de la maquette porte déjà ce lien
      { href: MAQUETTE_URL, label: { fr: 'Ouvrir la maquette 3D', en: 'Open the 3D mock-up' }, desktopOnly: true },
    ],
  },
];

const OTHER_PROJECTS = [
  {
    id: 'password-manager',
    title: { fr: 'Gestionnaire de mots de passe', en: 'Password manager' },
    description: {
      fr: 'Application de bureau en Java, avec chiffrement AES et mot de passe maître haché.',
      en: 'Java desktop app with AES encryption and a hashed master password.',
    },
    image: '/portfolio/assets/projet/CaptureGestionnaireMotDePasse.png',
    width: 800,
    height: 600,
    alt: { fr: 'Fenêtre principale du gestionnaire de mots de passe', en: 'Main window of the password manager' },
    codeLink: 'https://github.com/tEOmthd/GestionnaireDeMotDepasse',
  },
];

const GITHUB_URL = 'https://github.com/tEOmthd';

function CaseMedia({ study, lang }) {
  const { media } = study;

  if (media.maquette) {
    return <Maquette3D view={media.maquette} />;
  }

  if (media.video) {
    return (
      <div className="case-media">
        <video
          src={media.video}
          poster={media.poster ?? undefined}
          autoPlay
          muted
          loop
          playsInline
          aria-label={study.title[lang]}
        />
      </div>
    );
  }

  return (
    <div className={`case-media${media.scroll ? ' is-scroll' : ''}`}>
      <img
        src={media.image}
        width={media.width}
        height={media.height}
        alt={media.alt[lang]}
        loading="lazy"
      />
    </div>
  );
}

function CaseStudy({ study, lang, T }) {
  return (
    <article className="case-study" id={`case-${study.id}`}>
      <div className="case-visual">
        <CaseMedia study={study} lang={lang} />
      </div>

      {study.highlights && (
        <ul className="case-highlights">
          {study.highlights[lang].map(item => <li key={item}>{item}</li>)}
        </ul>
      )}

      <div className="case-body">
        <header className="case-head">
          <h3>{study.title[lang]}</h3>
          {study.subtitle && <p className="case-subtitle">{study.subtitle}</p>}
          <p className="case-role">{study.role[lang]}</p>
          <div className="case-links">
            {study.liveLink && (
              <a href={study.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {T.live} <span aria-hidden="true">↗</span>
              </a>
            )}
            {study.actions?.map(action => (
              <a
                key={action.href}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary${action.desktopOnly ? ' desktop-only' : ''}`}
              >
                {action.label[lang]} <span aria-hidden="true">↗</span>
              </a>
            ))}
            {study.privateCode && (
              <span className="case-private">{T[`private_code_${study.privateCode}`]}</span>
            )}
          </div>
        </header>

        <div className="case-story">
          {study.blocks.map(block => (
            <div key={block.label.fr} className="case-block">
              <h4>{block.label[lang]}</h4>
              <p>{block.text[lang]}</p>
            </div>
          ))}

          {study.details && (
            <details className="case-details">
              <summary>{T.details}</summary>
              <ul>
                {study.details[lang].map(item => <li key={item}>{item}</li>)}
              </ul>
            </details>
          )}

          <p className="tech-line">{study.tags.join(', ')}</p>
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

        <div className="other-projects">
          <div className="other-projects-head">
            <h3>{T.other_title}</h3>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-link">
              {T.github_all} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <ul className="other-grid">
            {OTHER_PROJECTS.map(project => (
              <li key={project.id} className="project-card">
                <div className="project-card-media">
                  <img
                    src={project.image}
                    width={project.width}
                    height={project.height}
                    alt={project.alt[lang]}
                    loading="lazy"
                  />
                </div>
                <div className="project-card-body">
                  <h4>{project.title[lang]}</h4>
                  <p>{project.description[lang]}</p>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-link">
                    {T.code} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
