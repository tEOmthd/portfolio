import { useState } from "react";
import "../style/Navbar.css";

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          TM<span>.</span>
        </a>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item"><a href="#hero" className="nav-link" onClick={close}>Accueil</a></li>
          <li className="nav-item"><a href="#about" className="nav-link" onClick={close}>À propos</a></li>
          <li className="nav-item"><a href="#skills" className="nav-link" onClick={close}>Compétences</a></li>
          <li className="nav-item"><a href="#experiences" className="nav-link" onClick={close}>Parcours</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link" onClick={close}>Projets</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link" onClick={close}>Contact</a></li>
        </ul>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} />
          </button>
          <button
            className="menu-icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
