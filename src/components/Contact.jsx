import "@fortawesome/fontawesome-free/css/all.min.css";
import "../style/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact</h2>
        </div>

        <div className="contact-body">
          <div className="contact-text">
            <p>
              Vous avez un projet, une opportunité ou simplement envie d&apos;échanger ?
              N&apos;hésitez pas à me contacter, je réponds dans les plus brefs délais.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-envelope" />
                </div>
                <div className="contact-item-info">
                  <span className="contact-item-label">Email</span>
                  <span className="contact-item-value">teo.mathiaud@etu.univ-amu.fr</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="contact-item-info">
                  <span className="contact-item-label">Localisation</span>
                  <span className="contact-item-value">Arles · Nîmes · Montpellier · Aix</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <a
              href="https://github.com/tEOmthd"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label="Profil GitHub de Téo Mathiaud"
            >
              <i className="fab fa-github" />
              <span>GitHub — tEOmthd</span>
              <i className="fas fa-arrow-right arrow" />
            </a>
            <a
              href="https://www.linkedin.com/in/teo-mathiaud-653160347/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label="Profil LinkedIn de Téo Mathiaud"
            >
              <i className="fab fa-linkedin-in" />
              <span>LinkedIn — Téo Mathiaud</span>
              <i className="fas fa-arrow-right arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
