import { useState } from 'react';
import '../style/Navbar.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';

function Navbar({ theme, toggleTheme }) {
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
          <li><a href="#projects" className="nav-link" onClick={close}>{T.nav.projects}</a></li>
          <li><a href="#experience" className="nav-link" onClick={close}>{T.nav.experience}</a></li>
          <li><a href="#about" className="nav-link" onClick={close}>{T.nav.about}</a></li>
          <li><a href="#contact" className="nav-link" onClick={close}>{T.nav.contact}</a></li>
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
