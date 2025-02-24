import React, { useState } from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Jeu de Gestion de Chemins de Fer',
      description: 'Un jeu 2D où les villes sont reliées par des chemins de fer. Gère le réseau ferroviaire avec le moins de mouvements possible.',
      image: '/images/projects/project1.jpg', // Assure-toi que l'image est à ce chemin
      tags: ['C++', 'Raylib'],
      demoLink: 'https://demo-game.com', // Remplace par le lien de démo approprié
      codeLink: 'https://github.com/yourusername/railway-game' // Remplace par le lien de ton code
    },
    {
      id: 2,
      title: 'API Marvel Project',
      description: 'Une application web qui récupère et affiche des données sur les héros Marvel, avec pagination et recherche.',
      image: '/images/projects/project2.jpg', // Assure-toi que l'image est à ce chemin
      tags: ['JavaScript', 'API', 'React'],
      demoLink: 'https://demo-marvel.com', // Remplace par le lien de démo approprié
      codeLink: 'https://github.com/yourusername/marvel-api' // Remplace par le lien de ton code
    },
    {
      id: 3,
      title: 'Application de Vélib',
      description: 'Une application qui affiche les vélos disponibles aux stations Vélib à Paris en utilisant des requêtes HTTP.',
      image: '/images/projects/project3.jpg', // Assure-toi que l'image est à ce chemin
      tags: ['JavaScript', 'HTML', 'CSS'],
      demoLink: 'https://demo-velib.com', // Remplace par le lien de démo approprié
      codeLink: 'https://github.com/yourusername/velib-app' // Remplace par le lien de ton code
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
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                  Demo
                </a>
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
