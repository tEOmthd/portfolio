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

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <LangProvider>
      <div className="App">
        <BackToTop />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
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
