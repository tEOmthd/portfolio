import '../style/Footer.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';

function Footer() {
  const { lang } = useLang();
  const T = translations[lang].footer;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#hero" className="footer-logo">TM<span>.</span></a>

        <p className="footer-copy">{T.copy} — {T.tagline}</p>

        <div className="footer-social">
          <a href="https://github.com/tEOmthd" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/teo-mathiaud-653160347/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="mailto:mathiaud.teo@gmail.com" aria-label="Email">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
