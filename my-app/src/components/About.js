import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="section-title">
        <h2>À propos de moi</h2>
        <div className="underline"></div>
      </div>
      
      <div className="about-container">
        <div className="about-img">
          <img src="/images/profile.jpg" alt="Ma photo de profil" />
        </div>
        
        <div className="about-content">
          <h3>Qui suis-je?</h3>
          <p>
            Bienvenue sur mon portfolio! Je suis un développeur web passionné avec X années d'expérience
            dans la création d'applications web modernes. J'aime résoudre des problèmes complexes et
            transformer des idées en produits numériques élégants.
          </p>
          
          <p>
            Mon parcours dans le développement web a commencé [votre histoire]. Aujourd'hui, je me
            spécialise dans [vos spécialités].
          </p>
          
          <div className="about-details">
            <div className="detail">
              <strong>Nom:</strong> Votre Nom
            </div>
            <div className="detail">
              <strong>Email:</strong> votre.email@exemple.com
            </div>
            <div className="detail">
              <strong>Localisation:</strong> Votre Ville, Pays
            </div>
            <div className="detail">
              <strong>Disponibilité:</strong> Freelance / À l'écoute d'opportunités
            </div>
          </div>
          
          <a href="/cv.pdf" download className="btn btn-primary">Télécharger mon CV</a>
        </div>
      </div>
    </section>
  );
}

export default About;
