import React, { useState } from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Projet E-commerce',
      description: 'Une boutique en ligne développée avec React et Node.js',
      image: '/images/projects/project1.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
      demoLink: 'https://demo-project.com',
      codeLink: 'https://github.com/yourusername/project1'
    },
    {
      id: 2,
      title: 'Application de Gestion de Tâches',
      description: 'Application complète de gestion de tâches avec authentification',
      image: '/images/projects/project2.jpg',
      tags: ['React', 'Firebase', 'Material-UI'],
      demoLink: 'https://demo-project.com',
      codeLink: 'https://github.com/yourusername/project2'
    },
    {
      id: 3,
      title: 'Site Vitrine Responsive',
      description: 'Site vitrine entièrement responsive pour une entreprise locale',
      image: '/images/projects/project3.jpg',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://demo-project.com',
      codeLink: 'https://github.com/yourusername/project3'
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
          className={filter === 'Node.js' ? 'active' : ''} 
          onClick={() => setFilter('Node.js')}
        >
          Node.js
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
