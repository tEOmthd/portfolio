import { useState } from 'react';
import '../style/Maquette3D.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { MAQUETTE_URL } from '../constants';

// Captures de la maquette en mode ?embed=1, une par vue
const POSTERS = {
  romaine: '/portfolio/assets/projet/maquette-cryptoportiques.jpg',
  medievale: '/portfolio/assets/projet/maquette-cryptoportiques-chapelle.jpg',
};

// Image fixe au chargement ; l'iframe (Three.js) ne se charge qu'au clic, et jamais sur mobile
function Maquette3D({ view = 'romaine', caption = false, eager = false, className = '' }) {
  const { lang } = useLang();
  const T = translations[lang].maquette;
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [active, setActive] = useState(false);

  return (
    <figure className={`maquette ${className}`}>
      <div className="maquette-frame">
        {active && !isMobile ? (
          <iframe
            src={`${MAQUETTE_URL}?embed=1`}
            title={T.iframe_title}
            allow="fullscreen; xr-spatial-tracking"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={POSTERS[view]}
              width="1200"
              height="750"
              alt={T.poster_alt[view]}
              loading={eager ? 'eager' : 'lazy'}
            />
            <div className="maquette-overlay">
              {isMobile ? (
                <a href={MAQUETTE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  {T.open} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <button type="button" className="btn btn-primary" onClick={() => setActive(true)}>
                  {T.explore}
                </button>
              )}
            </div>
          </>
        )}
      </div>
      {caption && <figcaption className="maquette-caption">{T.caption}</figcaption>}
    </figure>
  );
}

export default Maquette3D;
