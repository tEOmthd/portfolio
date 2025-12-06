import React, { useState, useEffect } from 'react';
import "../style/BoutonBackToTop.css"


const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Gestion du scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Ajouter l'écouteur d'événement
    window.addEventListener('scroll', toggleVisibility);

    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          id="back-to-top" 
          title="Retour en haut" 
          onClick={scrollToTop}
          className="back-to-top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default BackToTop;