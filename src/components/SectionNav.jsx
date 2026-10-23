import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import '../style/SectionNav.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { SECTIONS } from '../constants';

// Marge minimale entre la colonne et le début du contenu
const GAP = 24;

// Colonne fixe à gauche sur grand écran, affichée seulement si elle laisse le contenu libre
function SectionNav({ active, onFitChange }) {
  const { lang } = useLang();
  const T = translations[lang];
  const wide = useMediaQuery('(min-width: 1280px)');
  const navRef = useRef(null);
  const [fits, setFits] = useState(false);

  useLayoutEffect(() => {
    if (!wide) {
      setFits(false);
      return;
    }
    const measure = () => {
      const nav = navRef.current;
      const container = document.querySelector('#projects .container');
      if (!nav || !container) return;
      const contentLeft = container.getBoundingClientRect().left + parseFloat(getComputedStyle(container).paddingLeft);
      setFits(nav.getBoundingClientRect().right + GAP <= contentLeft);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [wide, lang]);

  useEffect(() => {
    onFitChange?.(fits);
  }, [fits, onFitChange]);

  const shown = fits && SECTIONS.includes(active);

  // Avancement dans la section active, écrit en variable CSS pour éviter un rendu à chaque scroll
  useEffect(() => {
    if (!shown) return;
    const section = document.getElementById(active);
    if (!section) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.4 - rect.top) / rect.height));
      navRef.current?.style.setProperty('--progress', progress.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [shown, active]);

  if (!wide) return null;

  return (
    <nav
      ref={navRef}
      className={`section-nav${shown ? ' is-shown' : ''}`}
      aria-label={T.accessibility.sections_nav}
      inert={!shown}
    >
      <ol>
        {SECTIONS.map(id => (
          <li key={id}>
            <a href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
              <span className="section-nav-track" aria-hidden="true">
                <span className="section-nav-fill" />
              </span>
              {T.nav[id]}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default SectionNav;
