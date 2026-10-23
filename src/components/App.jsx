import { useState, useEffect } from 'react';
import '../style/App.css';
import { LangProvider } from '../contexts/LangContext';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Experiences from './Experiences';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import BackToTop from './BackToTop';
import SectionNav from './SectionNav';
import { SECTIONS } from '../constants';
import { useActiveSection } from '../hooks/useActiveSection';

const OBSERVED = ['hero', ...SECTIONS];

function App() {
  const [theme, setTheme] = useState('dark');
  const [sideNav, setSideNav] = useState(false);
  const active = useActiveSection(OBSERVED);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <LangProvider>
      <div className="App">
        <BackToTop />
        <Navbar theme={theme} toggleTheme={toggleTheme} active={sideNav ? null : active} />
        <SectionNav active={active} onFitChange={setSideNav} />
        <Hero />
        <Projects />
        <Experiences />
        <About />
        <Contact />
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
