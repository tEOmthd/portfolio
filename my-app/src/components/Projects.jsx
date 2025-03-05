import React, { useState } from 'react';
import "../style/Projets.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Jeu de Gestion Ferroviaire",
      description: "Développement d'un jeu 2D de gestion de réseau ferroviaire avec contraintes et optimisation des déplacements.",
      image: "/assets/projet/CaptureRerail.png",
      tags: ['C++', 'Raylib'],
      codeLink: 'propriete-iut',
      Description: "Ce projet a consisté à concevoir et développer un jeu 2D de gestion ferroviaire, où l'objectif est de réorganiser un réseau de chemins de fer en minimisant le nombre de déplacements.",
      DefisTechniques: [
        "Gestion des collisions entre les rails",
        "Vérification de la validité des solutions proposées par le joueur",
        "Optimisation des performances pour les réseaux ferroviaires complexes"
      ],
      ApprochesEtSolutions: [
        "Modélisation du réseau sous forme de graphe pour une manipulation efficace des connexions",
        "Implémentation d'un algorithme de détection de collision entre segments",
        "Utilisation de structures de données optimisées (tables de hachage) pour accélérer les vérifications"
      ],
      CompetencesAcquises: [
        "Programmation avancée en C++ avec la bibliothèque Raylib",
        "Conception et implémentation d'algorithmes optimisés",
        "Gestion de projets de développement de jeux"
      ]
    },
    {
      id: 2,
      title: "Application de Gestion des Plaques d'Immatriculation",
      description: "Développement d'une application complète de gestion des plaques d'immatriculation et des informations associées aux véhicules.",
      image: "/assets/projet/CaptureGestionImmatriculation.png",
      tags: ['C++', 'Qt'],
      codeLink: 'propriete-iut',
      Description: "Ce projet a nécessité la conception et le développement d'une application permettant la gestion des plaques d'immatriculation et des informations associées (contrôle technique, type de véhicule, etc.).",
      DefisTechniques: [
        "Gestion des dates et validation des périodes de contrôle technique",
        "Conception d'une interface utilisateur intuitive et ergonomique",
        "Validation des formats de plaques d'immatriculation pour différentes régions"
      ],
      ApprochesEtSolutions: [
        "Création d'une classe dédiée à la gestion des dates avec contrôles de validité",
        "Utilisation du framework Qt pour concevoir une interface réactive et efficace",
        "Implémentation de regex pour assurer la conformité des formats d'immatriculation"
      ],
      CompetencesAcquises: [
        "Développement d'applications en C++ avec Qt",
        "Conception d'interfaces utilisateurs ergonomiques",
        "Validation et sécurisation des données"
      ]
    },
    {
      id: 3,
      title: "Memory Matching Game",
      description: "Développement d'un jeu de memory en React, intégrant animations et gestion du temps.",
      image: "/assets/projet/CaptureMemoryGame.png",
      tags: ['JavaScript', 'React', 'HTML', 'CSS'],
      codeLink: 'https://github.com/tEOmthd/ReactMemoryGame',
      Description: "Ce projet est un jeu de memory développé en React où le joueur doit retrouver toutes les paires de cartes avant la fin du temps imparti.",
      DefisTechniques: [
        "Gestion dynamique de l'état du jeu (cartes retournées, paires trouvées, score)",
        "Implémentation d'animations fluides lors du retournement des cartes",
        "Gestion du chronomètre et de la fin de partie"
      ],
      ApprochesEtSolutions: [
        "Utilisation des hooks React (useState, useEffect) pour une gestion optimale de l'état",
        "Intégration d'animations CSS pour offrir une meilleure expérience utilisateur",
        "Mise en place d'un système d'événements pour la logique du jeu"
      ],
      CompetencesAcquises: [
        "Développement d'applications interactives avec React",
        "Gestion d'état et cycle de vie des composants",
        "Création d'interfaces animées et responsives"
      ]
    },
    {
      id: 4,
      title: "Gestionnaire de Mots de Passe",
      description: "Développement d'une application de gestion sécurisée des mots de passe en Java.",
      image: "/assets/projet/CaptureGestionnaireMotDePasse.png",
      tags: ['Java'],
      codeLink: 'https://github.com/tEOmthd/GestionnaireDeMotDepasse',
      Description: "Ce projet consiste en un gestionnaire de mots de passe permettant aux utilisateurs de stocker et sécuriser leurs identifiants.",
      DefisTechniques: [
        "Protection des données sensibles",
        "Implémentation du chiffrement des mots de passe",
        "Conception d'une interface utilisateur fluide et intuitive"
      ],
      ApprochesEtSolutions: [
        "Utilisation de l'algorithme AES pour le chiffrement des mots de passe",
        "Mise en place d'un système de mot de passe maître sécurisé avec hachage",
        "Développement de l'interface graphique avec Swing"
      ],
      CompetencesAcquises: [
        "Programmation sécurisée en Java",
        "Implémentation de cryptographie appliquée",
        "Développement d'interfaces utilisateurs"
      ]
    }
  ];
  

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(filter));

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="section-title">
        <h2>Mes Projets</h2>
        <div className="underline"></div>
      </div>
      <div className="filter-buttons">
        {['all', 'React', 'C++', 'JavaScript'].map(tag => (
          <button
            key={tag}
            className={filter === tag ? 'active' : ''}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="projects-container">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={openProjectDetails}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProjectDetails} />
      )}
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
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.codeLink === 'propriete-iut' ? (
            <span className="propriete-iut">Propriété IUT, code indisponible</span>
          ) : (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-secondary"
              onClick={(e) => e.stopPropagation()}
            >
              Code
            </a>
          )}
          <button
            className="btn btn-sm btn-primary"
            onClick={(e) => {
              e.stopPropagation();
              onClick(project);
            }}
          >
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
        <button className="close-modal" onClick={onClose}>×</button>
        <div className="modal-content">
          <h2>{project.title}</h2>
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-tags modal-tags">
            {project.tags?.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <div className="modal-section">
            <h3>Description</h3>
            <p>{project.Description}</p>
          </div>
          <div className="modal-section">
            <h3>Défis Techniques</h3>
            <ul>
              {project.DefisTechniques?.map((defi, index) => (
                <li key={index}>{defi}</li>
              )) || <p>Aucun défi technique renseigné.</p>}
            </ul>
          </div>
          <div className="modal-section">
            <h3>Approches et Solutions</h3>
            <ul>
              {project.ApprochesEtSolutions?.map((solution, index) => (
                <li key={index}>{solution}</li>
              )) || <p>Aucune solution renseignée.</p>}
            </ul>
          </div>
          <div className="modal-section">
            <h3>Compétences Acquises</h3>
            <ul>
              {project.CompetencesAcquises?.map((competence, index) => (
                <li key={index}>{competence}</li>
              )) || <p>Aucune compétence renseignée.</p>}
            </ul>
          </div>
          <div className="modal-links">
            {project.codeLink === 'propriete-iut' ? (
              <span className="propriete-iut">Propriété IUT, code indisponible</span>
            ) : (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Voir le code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;