import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/Contact.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';
import { useReveal } from '../hooks/useReveal';

const LINKS = [
  {
    key: 'github',
    href: 'https://github.com/tEOmthd',
    icon: 'fab fa-github',
    handle: 'tEOmthd',
  },
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/teo-mathiaud-653160347/',
    icon: 'fab fa-linkedin-in',
    handle: 'Téo Mathiaud',
  },
  {
    key: 'email',
    href: 'mailto:mathiaud.teo@gmail.com',
    icon: 'fas fa-envelope',
    handle: 'mathiaud.teo@gmail.com',
  },
];

function Contact() {
  const { lang } = useLang();
  const T = translations[lang].contact;
  const ref = useReveal();

  return (
    <section id="contact" className="section contact-section reveal-section" ref={ref}>
      <div className="container">
        <h2 className="section-title">{T.title}</h2>

        <div className="contact-intro">
          <p className="contact-subtitle">{T.subtitle}</p>
          <p className="contact-open">{T.open}</p>
        </div>

        <div className="contact-links">
          {LINKS.map(({ key, href, icon, handle }) => (
            <a
              key={key}
              href={href}
              target={key !== 'email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact-card"
              aria-label={`${T[key]} — ${handle}`}
            >
              <div className="contact-card-icon">
                <i className={icon} />
              </div>
              <span className="contact-card-label">{T[key]}</span>
              <span className="contact-card-handle">{handle}</span>
              <i className="fas fa-arrow-up-right contact-card-arrow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
