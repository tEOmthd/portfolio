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
          <img src="../src/assets/profilePicture.jpg" alt="Ma photo de profil" />
        </div>
        
        <div className="about-content">
          <h3>Qui suis-je?</h3>
          <p>
            Bienvenue sur mon portfolio ! Je suis etudiant en 2eme année dans un BUT informatique. J'aime me casser la tête sur des problème complexe et relèver des défis.
          </p>
          
          <p>
            Mon parcours dans l'informatique a commencer au lycée, j'avais la spécialité NSI et j'adorai les différents projets et algorithmes que l'on nous demander d'implementer. Aujourd'hui, j'ai décidé de me concacrer à l'informatique et de faire un BUT informatique.
          </p>
          
          <div className="about-details">
            <div className="detail">
              <strong>Nom:</strong> Mathiaud Téo
            </div>
            <div className="detail">
              <strong>Email:</strong> teo.mathiaud@etu.univ-amu.fr
            </div>
            <div className="detail">
              <strong>Localisation:</strong> Arles, Nîmes, Montpellier
            </div>
            <div className="detail">
              <strong>Disponibilité:</strong> 31 mars - 1 Septembre
            </div>
          </div>
          
          <a href="./src/assets/CVMathiaudTeo.pdf" download className="btn btn-primary">Télécharger mon CV</a>
        </div>
      </div>
    </section>
  );
}

export default About;
