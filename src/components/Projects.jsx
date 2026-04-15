import { useState, useEffect } from 'react';
import '../style/Projets.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';
import { useReveal } from '../hooks/useReveal';

const PROJECTS_DATA = [
  {
    id: 1,
    featured: true,
    title: 'CryptoportiquesVR',
    tags: ['Unity', 'Node.js', 'TypeScript', 'React', 'Docker'],
    image: null,
    codeLink: null,
    role: {
      fr: 'Product Owner · Développement Unity & scène 3D',
      en: 'Product Owner · Unity development & 3D scene',
    },
    description: {
      fr: "Visite virtuelle immersive des Cryptoportiques d'Arles (site UNESCO), développée en partenariat avec la Mairie d'Arles. Architecture fullstack complète : expérience 3D Unity exportée en WebGL, backend Node.js/TypeScript avec Socket.io pour la visite multijoueur, frontend React. Objectif principal : rendre le site accessible aux personnes à mobilité réduite.",
      en: "Immersive virtual tour of the Cryptoportiques d'Arles (UNESCO World Heritage site), developed in partnership with the City of Arles. Full fullstack architecture: Unity 3D experience exported to WebGL, Node.js/TypeScript backend with Socket.io for multiplayer visits, React frontend. Main goal: making the site accessible to people with reduced mobility.",
    },
    challenges: {
      fr: [
        'Synchronisation temps réel des positions de plusieurs visiteurs simultanés via WebSocket',
        'Double cible Unity : export WebGL (navigateur) et Oculus XR (casque VR)',
        'Gestion des assets 3D volumineux avec Git LFS',
      ],
      en: [
        'Real-time position sync for multiple simultaneous visitors via WebSocket',
        'Dual Unity target: WebGL export (browser) and Oculus XR (VR headset)',
        'Managing large 3D assets with Git LFS',
      ],
    },
    skills_gained: {
      fr: [
        'Architecture fullstack (Unity + Node.js/TypeScript + React)',
        'Leadership technique en tant que Product Owner Scrum',
        'Développement 3D interactif avec Unity et C#',
        'WebSockets et synchronisation temps réel',
        'Déploiement conteneurisé avec Docker',
      ],
      en: [
        'Fullstack architecture (Unity + Node.js/TypeScript + React)',
        'Technical leadership as Scrum Product Owner',
        'Interactive 3D development with Unity and C#',
        'WebSockets and real-time synchronization',
        'Containerized deployment with Docker',
      ],
    },
  },
  {
    id: 2,
    title: 'Memory Matching Game',
    tags: ['React', 'JavaScript'],
    image: '/portfolio/assets/projet/CaptureMemoryGame.png',
    codeLink: 'https://github.com/tEOmthd/ReactMemoryGame',
    description: {
      fr: "Jeu de memory développé en React où le joueur doit retrouver toutes les paires de cartes avant la fin du temps imparti.",
      en: "Memory game built with React where the player must find all card pairs before time runs out.",
    },
    challenges: {
      fr: [
        "Gestion dynamique de l'état du jeu (cartes, paires, score)",
        'Animations fluides lors du retournement des cartes',
        'Gestion du chronomètre et de la fin de partie',
      ],
      en: [
        'Dynamic game state management (cards, pairs, score)',
        'Smooth flip animations',
        'Timer management and end-game logic',
      ],
    },
    skills_gained: {
      fr: ['React hooks (useState, useEffect)', 'Animations CSS', 'Gestion d\'état'],
      en: ['React hooks (useState, useEffect)', 'CSS animations', 'State management'],
    },
  },
  {
    id: 3,
    title: 'Gestionnaire de Mots de Passe',
    tags: ['Java'],
    image: '/portfolio/assets/projet/CaptureGestionnaireMotDePasse.png',
    codeLink: 'https://github.com/tEOmthd/GestionnaireDeMotDepasse',
    description: {
      fr: "Application Java de gestion sécurisée des mots de passe avec chiffrement AES et interface Swing.",
      en: "Java password manager with AES encryption and Swing interface.",
    },
    challenges: {
      fr: [
        'Chiffrement AES des données sensibles',
        'Mot de passe maître avec hachage sécurisé',
      ],
      en: [
        'AES encryption of sensitive data',
        'Master password with secure hashing',
      ],
    },
    skills_gained: {
      fr: ['Cryptographie appliquée (AES)', 'Java Swing', 'Sécurité des données'],
      en: ['Applied cryptography (AES)', 'Java Swing', 'Data security'],
    },
  },
  {
    id: 4,
    title: 'Fitness API',
    tags: ['Node.js', 'TypeScript'],
    image: null,
    codeLink: null,
    description: {
      fr: "API REST complète pour la gestion d'entraînements sportifs. JWT avec access + refresh tokens, architecture DAO/Service/Routes, 67 tests (48 unitaires + 19 intégration).",
      en: "Full REST API for sports workout management. JWT with access + refresh tokens, DAO/Service/Routes architecture, 67 tests (48 unit + 19 integration).",
    },
    challenges: {
      fr: [
        'Authentification JWT avec rotation des refresh tokens',
        'Séparation stricte DAO / Services / Routes',
        'Couverture de tests à deux niveaux : unit et intégration',
      ],
      en: [
        'JWT authentication with refresh token rotation',
        'Strict DAO / Services / Routes separation',
        'Two-level test coverage: unit and integration',
      ],
    },
    skills_gained: {
      fr: ['Node.js/TypeScript/Express', 'JWT & sécurité API', 'Tests Jest (67 tests)', 'Architecture REST'],
      en: ['Node.js/TypeScript/Express', 'JWT & API security', 'Jest testing (67 tests)', 'REST architecture'],
    },
  },
  {
    id: 5,
    title: 'Jeu de Gestion Ferroviaire',
    tags: ['C++'],
    image: '/portfolio/assets/projet/CaptureRerail.png',
    codeLink: null,
    description: {
      fr: "Jeu 2D de gestion de réseau ferroviaire en C++ avec Raylib. Objectif : réorganiser un réseau en minimisant le nombre de déplacements.",
      en: "2D railway network management game in C++ with Raylib. Goal: reorganize a network while minimizing the number of moves.",
    },
    challenges: {
      fr: [
        'Détection de collision entre segments de rails',
        'Modélisation du réseau sous forme de graphe',
        'Structures de données optimisées (tables de hachage)',
      ],
      en: [
        'Collision detection between rail segments',
        'Network modeling as a graph',
        'Optimized data structures (hash tables)',
      ],
    },
    skills_gained: {
      fr: ['C++ avec Raylib', 'Algorithmes de graphe', 'Gestion de projet de jeu'],
      en: ['C++ with Raylib', 'Graph algorithms', 'Game project management'],
    },
  },
];

function ProjectModal({ project, onClose, T }) {
  const { lang } = useLang();

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label={T.close}>
          <i className="fas fa-times" />
        </button>

        <div className="modal-body">
          {project.image ? (
            <div className="modal-image">
              <img src={project.image} alt={project.title} />
            </div>
          ) : (
            <div className="modal-image modal-image-placeholder">
              <span>{project.title}</span>
            </div>
          )}

          <div className="modal-info">
            <div className="modal-tags">
              {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
            <h2>{project.title}</h2>

            {project.role && (
              <p className="modal-role">
                <span className="modal-label">{T.role}</span>
                {project.role[lang]}
              </p>
            )}

            <div className="modal-section">
              <h4>{T.description}</h4>
              <p>{project.description[lang]}</p>
            </div>

            <div className="modal-section">
              <h4>{T.challenges}</h4>
              <ul>{project.challenges[lang].map(c => <li key={c}>{c}</li>)}</ul>
            </div>

            <div className="modal-section">
              <h4>{T.skills_gained}</h4>
              <ul>{project.skills_gained[lang].map(s => <li key={s}>{s}</li>)}</ul>
            </div>

            <div className="modal-cta">
              {project.codeLink ? (
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="fab fa-github" /> {T.code}
                </a>
              ) : (
                <span className="label-academic">{T.academic}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedCard({ project, onClick, T }) {
  const { lang } = useLang();

  return (
    <div className="project-featured" onClick={() => onClick(project)}>
      <div className="project-featured-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-featured-placeholder">
            <span>{project.title}</span>
          </div>
        )}
        <span className="featured-badge">{T.featured_badge}</span>
      </div>
      <div className="project-featured-content">
        <div className="project-tags">
          {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description[lang]}</p>
        <button className="btn btn-primary btn-sm">{T.details}</button>
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick, T }) {
  const { lang } = useLang();

  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="project-card-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-card-placeholder">
            <span>{project.title[0]}</span>
          </div>
        )}
      </div>
      <div className="project-card-content">
        <div className="project-tags">
          {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description[lang]}</p>
        <div className="project-card-footer">
          {project.codeLink ? (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
              onClick={e => e.stopPropagation()}
            >
              <i className="fab fa-github" /> {T.code}
            </a>
          ) : (
            <span className="label-academic">{T.academic}</span>
          )}
          <button className="btn btn-primary btn-sm">{T.details}</button>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const { lang } = useLang();
  const T = translations[lang].projects;
  const [selected, setSelected] = useState(null);
  const ref = useReveal();

  const featured = PROJECTS_DATA.find(p => p.featured);
  const others = PROJECTS_DATA.filter(p => !p.featured);

  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') setSelected(null); };
    if (selected) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [selected]);

  return (
    <section id="projects" className="section reveal-section" ref={ref}>
      <div className="container">
        <h2 className="section-title">{T.title}</h2>

        {featured && (
          <FeaturedCard project={featured} onClick={setSelected} T={T} />
        )}

        <div className="projects-grid">
          {others.map(project => (
            <ProjectCard key={project.id} project={project} onClick={setSelected} T={T} />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} T={T} />
      )}
    </section>
  );
}

export default Projects;
