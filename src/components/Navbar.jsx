import { useState } from 'react';
import '../style/Navbar.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';
import { SECTIONS } from '../constants';

// active : section en cours, mise en évidence quand la colonne latérale n'est pas affichée
function Navbar({ theme, toggleTheme, active = null }) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLang();
  const T = translations[lang];

  const close = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" onClick={close}>
          TM<span>.</span>
        </a>

        <ul className={`nav-menu${isOpen ? ' active' : ''}`}>
          {SECTIONS.map(id => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="nav-link"
                aria-current={active === id ? 'true' : undefined}
                onClick={close}
              >
                {T.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? T.accessibility.theme_to_dark : T.accessibility.theme_to_light}
          >
            <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'} />
          </button>

          <button
            className="menu-icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? T.accessibility.close_menu : T.accessibility.open_menu}
          >
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
