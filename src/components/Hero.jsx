import '../style/Hero.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';

function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora-blob blob-1" />
      <div className="aurora-blob blob-2" />
      <div className="aurora-blob blob-3" />
    </div>
  );
}

function Hero() {
  const { lang } = useLang();
  const T = translations[lang].hero;

  return (
    <section id="hero" className="hero">
      <Aurora />
      <div className="hero-content">
        <span className="hero-label">{T.label}</span>
        <h1 className="hero-name">
          Téo<br />Mathiaud
        </h1>
        <p className="hero-tagline">{T.tagline}</p>
        <p className="hero-sub">{T.sub}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">{T.cta_projects}</a>
          <a
            href="/portfolio/assets/CVMathiaudTeo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <i className="fas fa-file-pdf" />
            {T.cta_cv}
          </a>
        </div>
      </div>
      <div className="hero-scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default Hero;
