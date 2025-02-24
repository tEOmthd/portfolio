import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1>Bonjour, je suis <span className="highlight">Mathiaud Téo </span></h1>
        <h2>Etudiant Informatique</h2>
        <p>Compétent et rigoureux, l'étudiant dont vous avez besoin</p>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">Voir mes projets</a>
          <a href="#contact" className="btn btn-secondary">Me contacter</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
