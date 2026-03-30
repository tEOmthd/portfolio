import "../style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="footer-logo">TM.</span>

        <nav className="footer-links">
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#experiences">Parcours</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-social">
          <a href="https://github.com/tEOmthd" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/teo-mathiaud-653160347/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Téo Mathiaud — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}

export default Footer;
