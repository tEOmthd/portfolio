import { useState, useEffect } from 'react';
import "../style/Projets.css";

const projects = [
  {
    id: 1,
    title: "Jeu de Gestion Ferroviaire",
    description: "Jeu 2D de gestion de réseau ferroviaire avec optimisation des déplacements.",
    image: "/portfolio/assets/projet/CaptureRerail.png",
    tags: ['C++', 'Raylib'],
    codeLink: 'propriete-iut',
    Description: "Conception et développement d'un jeu 2D de gestion ferroviaire où l'objectif est de réorganiser un réseau de chemins de fer en minimisant le nombre de déplacements.",
    DefisTechniques: [
      "Gestion des collisions entre les rails",
      "Vérification de la validité des solutions proposées",
      "Optimisation des performances pour les réseaux complexes"
    ],
    ApprochesEtSolutions: [
      "Modélisation du réseau sous forme de graphe",
      "Algorithme de détection de collision entre segments",
      "Structures de données optimisées (tables de hachage)"
    ],
    CompetencesAcquises: [
      "Programmation avancée en C++ avec Raylib",
      "Conception d'algorithmes optimisés",
      "Gestion de projets de développement de jeux"
    ]
  },
  {
    id: 2,
    title: "Gestion des Plaques d'Immatriculation",
    description: "Application de gestion complète des plaques d'immatriculation et informations véhicules.",
    image: "/portfolio/assets/projet/CaptureGestionImmatriculation.png",
    tags: ['C++', 'Qt'],
    codeLink: 'propriete-iut',
    Description: "Application permettant la gestion des plaques d'immatriculation et des informations associées (contrôle technique, type de véhicule, etc.).",
    DefisTechniques: [
      "Gestion des dates et validation des périodes de contrôle technique",
      "Conception d'une interface utilisateur intuitive",
      "Validation des formats de plaques pour différentes régions"
    ],
    ApprochesEtSolutions: [
      "Classe dédiée à la gestion des dates avec contrôles de validité",
      "Framework Qt pour une interface réactive",
      "Regex pour la conformité des formats d'immatriculation"
    ],
    CompetencesAcquises: [
      "Développement C++ avec Qt",
      "Conception d'interfaces ergonomiques",
      "Validation et sécurisation des données"
    ]
  },
  {
    id: 3,
    title: "Memory Matching Game",
    description: "Jeu de memory en React avec animations et gestion du temps.",
    image: "/portfolio/assets/projet/CaptureMemoryGame.png",
    tags: ['JavaScript', 'React'],
    codeLink: 'https://github.com/tEOmthd/ReactMemoryGame',
    Description: "Jeu de memory développé en React où le joueur doit retrouver toutes les paires de cartes avant la fin du temps imparti.",
    DefisTechniques: [
      "Gestion dynamique de l'état du jeu (cartes, paires, score)",
      "Animations fluides lors du retournement des cartes",
      "Gestion du chronomètre et de la fin de partie"
    ],
    ApprochesEtSolutions: [
      "Hooks React (useState, useEffect) pour la gestion d'état",
      "Animations CSS pour l'expérience utilisateur",
      "Système d'événements pour la logique du jeu"
    ],
    CompetencesAcquises: [
      "Développement d'applications interactives avec React",
      "Gestion d'état et cycle de vie des composants",
      "Interfaces animées et responsives"
    ]
  },
  {
    id: 4,
    title: "Gestionnaire de Mots de Passe",
    description: "Application Java de gestion sécurisée des mots de passe.",
    image: "/portfolio/assets/projet/CaptureGestionnaireMotDePasse.png",
    tags: ['Java'],
    codeLink: 'https://github.com/tEOmthd/GestionnaireDeMotDepasse',
    Description: "Gestionnaire de mots de passe permettant aux utilisateurs de stocker et sécuriser leurs identifiants.",
    DefisTechniques: [
      "Protection des données sensibles",
      "Implémentation du chiffrement des mots de passe",
      "Interface utilisateur fluide et intuitive"
    ],
    ApprochesEtSolutions: [
      "Chiffrement AES pour les mots de passe",
      "Système de mot de passe maître avec hachage sécurisé",
      "Interface graphique avec Swing"
    ],
    CompetencesAcquises: [
      "Programmation sécurisée en Java",
      "Cryptographie appliquée",
      "Développement d'interfaces utilisateurs"
    ]
  }
];

const FILTERS = ['tout', 'JavaScript', 'C++', 'Java'];

function Projects() {
  const [filter, setFilter] = useState('tout');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = filter === 'tout'
    ? projects
    : projects.filter(p => p.tags.includes(filter));

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [selectedProject]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Projets</h2>
        </div>

        <div className="filter-buttons">
          {FILTERS.map(tag => (
            <button
              key={tag}
              className={filter === tag ? 'active' : ''}
              onClick={() => setFilter(tag)}
            >
              {tag === 'tout' ? 'Tous' : tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="project-img">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <div className="project-links">
          {project.codeLink === 'propriete-iut' ? (
            <span className="propriete-iut">Propriété IUT</span>
          ) : (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-secondary"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fab fa-github" /> Code
            </a>
          )}
          <button className="btn btn-sm btn-primary" onClick={(e) => { e.stopPropagation(); onClick(project); }}>
            Détails
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose} aria-label="Fermer">
          <i className="fas fa-times" />
        </button>
        <div className="modal-content">
          <h2>{project.title}</h2>
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="modal-tags">
            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>
          <div className="modal-section">
            <h3>Description</h3>
            <p>{project.Description}</p>
          </div>
          <div className="modal-section">
            <h3>Défis techniques</h3>
            <ul>{project.DefisTechniques.map(d => <li key={d}>{d}</li>)}</ul>
          </div>
          <div className="modal-section">
            <h3>Approches & Solutions</h3>
            <ul>{project.ApprochesEtSolutions.map(s => <li key={s}>{s}</li>)}</ul>
          </div>
          <div className="modal-section">
            <h3>Compétences acquises</h3>
            <ul>{project.CompetencesAcquises.map(c => <li key={c}>{c}</li>)}</ul>
          </div>
          <div className="modal-links">
            {project.codeLink === 'propriete-iut' ? (
              <span className="propriete-iut">Propriété IUT — code indisponible</span>
            ) : (
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <i className="fab fa-github" /> Voir le code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
