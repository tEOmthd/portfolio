import React, { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../style/Contact.css"
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <h2>Contactez-moi</h2>
        <div className="underline"></div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>teo.mathiaud@etu.univ-amu.fr</p>
          </div>

          <div className="info-item">
            <i className="fas fa-phone"></i>
            <h3>Téléphone</h3>
            <p>+33 6 12 81 59 92</p>
          </div>

          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Localisation</h3>
            <p>Arles - Nîmes - Montpellier, France</p>
          </div>

          <div className="social-links">
            <a href="https://github.com/tEOmthd" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/t%C3%A9o-mathiaud-653160347/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;