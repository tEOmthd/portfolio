import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1>Bonjour, je suis <span className="highlight">Votre Nom</span></h1>
        <h2>Développeur Web Frontend</h2>
        <p>Je crée des expériences web interactives et responsives</p>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">Voir mes projets</a>
          <a href="#contact" className="btn btn-secondary">Me contacter</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
