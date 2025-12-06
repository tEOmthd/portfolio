import React from "react";
import "../style/About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="section-title">
        <h2>À propos de moi</h2>
        <div className="underline"></div>
      </div>
      <div className="about-container">
        <div className="about-img">
          <img
            src="/portfolio/assets/TeoAbout.jpg"
            alt="Ma photo de profil"
          />
        </div>
        <div className="about-content">
          <h3>Qui suis-je?</h3>
          <p>
            Bienvenue sur mon <strong>portfolio</strong> ! Je suis étudiant en <strong>2ème année</strong> dans un <strong>BUT informatique</strong>. J'aime me casser la tête sur des <strong>problèmes complexes</strong> et relever des <strong>défis</strong>.
          </p>
          <p>
            Mon parcours dans l'informatique a commencé au <strong>lycée</strong>, j'avais la spécialité <strong>NSI</strong> et j'adorais les différents <strong>projets</strong> et <strong>algorithmes</strong> que nous devions implémenter. Aujourd'hui, j'ai décidé de me consacrer à l'<strong>informatique</strong> et de poursuivre mes <strong>études</strong> dans cette filière.
          </p>
          <p>
            Je suis à la recherche d'un <strong>stage de 16 semaines</strong> à partir du <strong>16 février</strong> au <strong>12 juin 2024</strong>, idéalement dans les domaines du <strong>développement web</strong>, <strong>mobile</strong> ou <strong>logiciel</strong>.
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
          </div>
          <a
            href="/portfolio/assets/CVMathiaudTeo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Voir mon CV
          </a>{" "}
        </div>
      </div>
    </section>
  );
}

export default About;
