import React, { useState } from 'react';
import '../style/App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Experiences from './Experiences';
import BackToTop from './BackToTop'

function App() {
  return (
    <div className="App">
      <BackToTop />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
