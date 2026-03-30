import "../style/About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-img">
          <img src="/portfolio/assets/TeoAbout.jpg" alt="Photo de profil de Téo Mathiaud" />
        </div>
        <div className="about-content">
          <div className="section-header">
            <h2>À propos</h2>
          </div>
          <p>
            Étudiant en <strong>3ème année de BUT Informatique</strong> à l&apos;IUT Aix-Marseille, j&apos;aime me casser la tête sur des
            problèmes complexes et relever des défis. Mon parcours a commencé au lycée avec la spécialité <strong>NSI</strong>,
            où j&apos;ai découvert ma passion pour les algorithmes et le développement.
          </p>
          <p>
            Aujourd&apos;hui, je me positionne comme développeur <strong>fullstack</strong>, à l&apos;aise aussi bien côté
            frontend que backend. Je suis ouvert à toute opportunité qui me permettra de progresser et de contribuer
            à des projets concrets.
          </p>
          <div className="about-details">
            <div className="detail">
              <strong>Localisation</strong>
              Arles · Nîmes · Montpellier · Aix
            </div>
            <div className="detail">
              <strong>Formation</strong>
              BUT Informatique — Année 3/3
            </div>
            <div className="detail">
              <strong>Email</strong>
              teo.mathiaud@etu.univ-amu.fr
            </div>
            <div className="detail">
              <strong>Disponibilité</strong>
              Ouvert aux opportunités
            </div>
          </div>
          <a
            href="/portfolio/assets/CVMathiaudTeo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <i className="fas fa-download" /> Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
