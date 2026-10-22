import '../style/Contact.css';
import { useLang } from '../contexts/LangContext';
import { translations } from '../i18n';
import { useReveal } from '../hooks/useReveal';

const EMAIL = 'mathiaud.teo@gmail.com';

const LINKS = [
  { key: 'linkedin', href: 'https://www.linkedin.com/in/teomthd/' },
  { key: 'github', href: 'https://github.com/tEOmthd' },
];

function Contact() {
  const { lang } = useLang();
  const T = translations[lang].contact;
  const ref = useReveal();

  return (
    <section id="contact" className="section contact-section reveal-section" ref={ref}>
      <div className="container">
        <h2 className="section-title">{T.title}</h2>

        <p className="contact-open">{T.open}</p>

        <a href={`mailto:${EMAIL}`} className="contact-email">{EMAIL}</a>

        <div className="contact-links">
          {LINKS.map(({ key, href }) => (
            <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="text-link">
              {T[key]} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
