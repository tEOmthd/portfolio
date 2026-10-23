import '../style/Hero.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';
import Maquette3D from './Maquette3D';

function Hero() {
  const { lang } = useLang();
  const T = translations[lang].hero;

  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1 className="hero-name">
          Téo<br />Mathiaud
        </h1>

        <div className="hero-grid">
          <div className="hero-intro">
            <p className="hero-sub">{T.sub}</p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">{T.cta_projects}</a>
              <a
                href="/portfolio/assets/CVMathiaudTeo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {T.cta_cv}
              </a>
            </div>
          </div>

          <Maquette3D className="hero-maquette" view="romaine" caption eager live />
        </div>
      </div>
    </section>
  );
}

export default Hero;
