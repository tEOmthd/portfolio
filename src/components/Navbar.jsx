import React, { useState } from "react";
import "../style/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Monportfolio
        </a>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a
              href="#hero"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#skills"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Compétences
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#experiences"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Expériences
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Projets
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
