import '../style/Hero.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';

function Hero() {
  const { lang } = useLang();
  const T = translations[lang].hero;

  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <h1 className="hero-name">
          Téo<br />Mathiaud
        </h1>
        <p className="hero-sub">{T.sub}</p>
        <div className="hero-links">
          <a href="#projects" className="text-link">{T.cta_projects} <span aria-hidden="true">↓</span></a>
          <a
            href="/portfolio/assets/CVMathiaudTeo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {T.cta_cv} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
