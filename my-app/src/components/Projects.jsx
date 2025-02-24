import React, { useState } from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Jeu de Gestion de Chemins de Fer',
      description: 'Un jeu 2D où les villes sont reliées par des chemins de fer. Réorganiser le réseau ferroviaire avec le moins de mouvements possible et en suivant différentes contraintes.',
      image: '../src/assets/projet/CaptureRerail.png',
      tags: ['C++', 'Raylib'],
      codeLink: 'https://etulab.univ-amu.fr/sae-s3.a.01-2024/sae-s3.a.01-2024-sujet06'
    },
    {
      id: 2,
      title: "Application de gestion de plaque l'immatriculation",
      description: "Une application offrant une gestion de plaques d'immatriculation avec différents details sur les véhicules (controle technique, type de véhicule etc...)",
      image: '../src/assets/projet/CaptureGestionImmatriculation.png', 
      tags: ['C++', 'Qt'],
      codeLink: 'https://etulab.univ-amu.fr/iut-arles-info/enseignement/2024-2025/s2.01/binome15'
    },
    {
      id: 3,
      title: 'memory matching',
      description: "L'objectif est de trouver dans un temps limité toutes les paires de cartes identiques sachant que l'on ne peut retourner que deux cartes à la fois.",
      image: '/images/projects/velib-app.jpg', // Remplace avec le bon chemin
      tags: ['JavaScript', 'HTML', 'CSS'],
      demoLink: 'https://demo-velib.com', // Remplace par le lien de démo approprié
      codeLink: 'https://github.com/yourusername/velib-app' // Remplace par le lien de ton code
    },
    {
      id: 4,
      title: 'Site Vitrine Responsive',
      description: 'Site vitrine entièrement responsive pour une entreprise locale, développé avec HTML, CSS et JavaScript.',
      image: '/images/projects/site-vitrine.jpg', // Remplace avec le bon chemin
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://demo-site.com', // Remplace par le lien de démo approprié
      codeLink: 'https://github.com/yourusername/site-vitrine' // Remplace par le lien de ton code
    },
    {
      id: 5,
      title: 'Application de Gestion de Tâches',
      description: 'Une application complète de gestion de tâches avec authentification et stockage en base de données.',
      image: '/images/projects/gestion-taches.jpg', // Remplace avec le bon chemin
      tags: ['React', 'Firebase', 'Material-UI'],
      demoLink: 'https://demo-gestion-taches.com', // Remplace par le lien de démo approprié
      codeLink: 'https://github.com/yourusername/gestion-taches' // Remplace par le lien de ton code
    },
    {
      id: 6,
      title: 'Application de Suivi de Projets',
      description: 'Un outil pour suivre l’avancement des projets avec un tableau de bord interactif.',
      image: '/images/projects/suivi-projets.jpg', // Remplace avec le bon chemin
      tags: ['React', 'Node.js'],
      demoLink: 'https://demo-suivi-projets.com', // Remplace par le lien de démo approprié
      codeLink: 'https://github.com/yourusername/suivi-projets' // Remplace par le lien de ton code
    }
  ];
  
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  
  return (
    <section id="projects" className="projects">
      <div className="section-title">
        <h2>Mes Projets</h2>
        <div className="underline"></div>
      </div>
      
      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          Tous
        </button>
        <button 
          className={filter === 'React' ? 'active' : ''} 
          onClick={() => setFilter('React')}
        >
          React
        </button>
        <button 
          className={filter === 'C++' ? 'active' : ''} 
          onClick={() => setFilter('C++')}
        >
          C++
        </button>
        <button 
          className={filter === 'JavaScript' ? 'active' : ''} 
          onClick={() => setFilter('JavaScript')}
        >
          JavaScript
        </button>
      </div>
      
      <div className="projects-container">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
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
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
