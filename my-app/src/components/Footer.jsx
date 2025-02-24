import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">MonPortfolio</div>
        
        <div className="footer-links">
          <a href="#hero">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        
        <div className="copyright">
          &copy; {currentYear} Votre Nom. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
