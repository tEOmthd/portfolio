import { useEffect, useState } from 'react';
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

// Délai de secours quand requestIdleCallback n'existe pas (Safari)
const IDLE_FALLBACK_MS = 1500;

// Message envoyé par la maquette quand la scène est affichée ; sans lui, fondu après ce délai
const READY_MESSAGE = 'cryptoportique:ready';
const READY_FALLBACK_MS = 8000;

// Attend la fin du chargement de la page, puis un moment où le navigateur est libre
function whenIdle(callback) {
  let idle = 0;
  let timer = 0;
  const schedule = () => {
    if ('requestIdleCallback' in window) idle = window.requestIdleCallback(callback, { timeout: 3000 });
    else timer = window.setTimeout(callback, IDLE_FALLBACK_MS);
  };
  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, { once: true });

  return () => {
    window.removeEventListener('load', schedule);
    if (idle) window.cancelIdleCallback(idle);
    window.clearTimeout(timer);
  };
}

/*
 * Image fixe au chargement. Sur ordinateur :
 * - live : la maquette se charge seule en rotation, purement visuelle, puis devient manipulable au clic
 * - sinon : la maquette ne se charge qu'au clic
 * Sur mobile et tablette, l'image fixe ouvre la maquette dans un nouvel onglet.
 */
function Maquette3D({ view = 'romaine', caption = false, eager = false, live = false, className = '' }) {
  const { lang } = useLang();
  const T = translations[lang].maquette;
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const saveData = typeof navigator !== 'undefined' && navigator.connection?.saveData === true;
  const autoload = live && isDesktop && !reducedMotion && !saveData;

  const [loaded, setLoaded] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [frameLoaded, setFrameLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!autoload || loaded) return;
    return whenIdle(() => setLoaded(true));
  }, [autoload, loaded]);

  // En rotation, on ne montre la maquette qu'une fois la scène prête, pas son écran de chargement
  useEffect(() => {
    if (!frameLoaded || ready) return;
    const origin = new URL(MAQUETTE_URL).origin;
    const onMessage = event => {
      if (event.origin === origin && event.data?.type === READY_MESSAGE) setReady(true);
    };
    window.addEventListener('message', onMessage);
    const timer = window.setTimeout(() => setReady(true), READY_FALLBACK_MS);
    return () => {
      window.removeEventListener('message', onMessage);
      window.clearTimeout(timer);
    };
  }, [frameLoaded, ready]);

  const activate = () => {
    setLoaded(true);
    setInteractive(true);
    // après le clic, le visiteur voit la maquette tout de suite, chargement compris
    if (frameLoaded) setReady(true);
  };

  const showIframe = isDesktop && (loaded || interactive);
  // en mode live, l'iframe reste celle chargée en rotation : on n'en recharge pas une autre au clic
  const src = live ? `${MAQUETTE_URL}?embed=1&autorotate=1` : `${MAQUETTE_URL}?embed=1`;

  return (
    <figure className={`maquette ${className}`}>
      <div className={`maquette-frame${interactive ? ' is-interactive' : ''}`}>
        <img
          src={POSTERS[view]}
          width="1200"
          height="750"
          alt={T.poster_alt[view]}
          loading={eager ? 'eager' : 'lazy'}
        />

        {showIframe && (
          <iframe
            src={src}
            title={T.iframe_title}
            className={ready ? 'is-ready' : undefined}
            onLoad={() => (interactive ? setReady(true) : setFrameLoaded(true))}
            allow="fullscreen; xr-spatial-tracking"
            allowFullScreen
            // tant qu'elle n'est pas activée, l'iframe ne capte ni la souris ni le clavier
            tabIndex={interactive ? undefined : -1}
            aria-hidden={interactive ? undefined : 'true'}
          />
        )}

        {!interactive && (
          <div className="maquette-overlay">
            {isDesktop ? (
              <button type="button" className="btn btn-primary" onClick={activate}>
                {T.explore}
              </button>
            ) : (
              <a href={MAQUETTE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {T.open} <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
      {caption && <figcaption className="maquette-caption">{T.caption}</figcaption>}
    </figure>
  );
}

export default Maquette3D;
