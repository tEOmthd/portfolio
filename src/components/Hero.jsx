import React, { useEffect, useRef } from 'react';
import "../style/Hero.css";


function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Ajuster la taille du canvas
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    setTimeout(resizeCanvas, 100);
    
    // Paramètres des vagues en pointillés
    const dottedWaves = [
      { y: 0.7, length: 0.5, amplitude: 20, speed: 0.005, color: 'rgba(184, 115, 51, 0.2)', dotSize: 2, dotSpacing: 10 },
      { y: 0.6, length: 0.7, amplitude: 15, speed: 0.007, color: 'rgba(165, 97, 33, 0.4)', dotSize: 2, dotSpacing: 8 },
      { y: 0.5, length: 0.4, amplitude: 25, speed: 0.01, color: 'rgba(160, 86, 17, 0.6)', dotSize: 2, dotSpacing: 12 },
      { y: 0.4, length: 0.6, amplitude: 20, speed: 0.006, color: 'rgba(184, 115, 51,0.8)', dotSize: 2, dotSpacing: 9 },
      { y: 0.3, length: 0.5, amplitude: 15, speed: 0.008, color: 'rgba(184, 115, 51,1)', dotSize: 2, dotSpacing: 11 }
    ];
    
    let time = 0;
    
    // Fonction pour dessiner une vague en pointillés
    const drawDottedWave = (wave) => {
      ctx.fillStyle = wave.color;
      
      for (let x = 0; x < canvas.width; x += wave.dotSpacing) {
        const dx = x / canvas.width * wave.length * Math.PI * 2;
        const y = Math.sin(dx + time * wave.speed) * wave.amplitude + canvas.height * wave.y;
        
        // Dessiner un point
        ctx.beginPath();
        ctx.arc(x, y, wave.dotSize, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    
    // Fonction d'animation
    const animate = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dessiner chaque vague en pointillés
      dottedWaves.forEach(wave => drawDottedWave(wave));
      
      time += 1;
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Nettoyage
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <canvas 
        ref={canvasRef} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
      <div className="hero-container" style={{ position: 'relative', zIndex: 1 }}>
        <h1>Bonjour, je suis <span className="highlight">Mathiaud Téo</span></h1>
        <h2>Etudiant Informatique</h2>
        <p><strong>Compétent et rigoureux, l'étudiant dont vous avez besoin</strong></p>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">Voir mes projets</a>
          <a href="#contact" className="btn btn-secondary">Me contacter</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;