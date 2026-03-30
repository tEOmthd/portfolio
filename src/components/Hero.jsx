import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import "../style/Hero.css";

const ROLES = [
  'Développeur Fullstack',
  'Étudiant BUT Informatique',
  'React · Laravel · Java · C++',
];

function ParticleBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Scene / Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 90;

    // Particles
    const COUNT = 120;
    const positions = new Float32Array(COUNT * 3);
    const velocities = [];

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 180;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      velocities.push({
        x: (Math.random() - 0.5) * 0.025,
        y: (Math.random() - 0.5) * 0.025,
      });
    }

    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const ptMat = new THREE.PointsMaterial({
      color: 0x52b788,
      size: 0.55,
      transparent: true,
      opacity: 0.65,
    });

    const points = new THREE.Points(ptGeo, ptMat);
    scene.add(points);

    // Lines
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x40916c,
      transparent: true,
      opacity: 0.22,
    });
    let linesMesh = null;
    const THRESHOLD = 22;

    const rebuildLines = () => {
      if (linesMesh) {
        scene.remove(linesMesh);
        linesMesh.geometry.dispose();
      }
      const verts = [];
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = positions[i * 3]     - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < THRESHOLD) {
            verts.push(
              positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
              positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
            );
          }
        }
      }
      if (verts.length > 0) {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(verts), 3));
        linesMesh = new THREE.LineSegments(geo, lineMat);
        scene.add(linesMesh);
      }
    };

    // Mouse parallax
    let targetX = 0, targetY = 0;
    const onMouse = (e) => {
      targetX = (e.clientX / window.innerWidth  - 0.5) * 6;
      targetY = -(e.clientY / window.innerHeight - 0.5) * 6;
    };
    window.addEventListener('mousemove', onMouse);

    // Resize
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    let frameId;
    let tick = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      tick++;

      // Update positions
      for (let i = 0; i < COUNT; i++) {
        positions[i * 3]     += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;
        if (positions[i * 3]     >  90) positions[i * 3]     = -90;
        if (positions[i * 3]     < -90) positions[i * 3]     =  90;
        if (positions[i * 3 + 1] >  50) positions[i * 3 + 1] = -50;
        if (positions[i * 3 + 1] < -50) positions[i * 3 + 1] =  50;
      }
      ptGeo.attributes.position.needsUpdate = true;

      // Rebuild lines every 4 frames
      if (tick % 4 === 0) rebuildLines();

      // Camera parallax (smooth)
      camera.position.x += (targetX - camera.position.x) * 0.03;
      camera.position.y += (targetY - camera.position.y) * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      ptGeo.dispose();
      ptMat.dispose();
      lineMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="hero-canvas" />;
}

function TypingRole() {
  const [index, setIndex]   = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex(i => (i + 1) % ROLES.length);
        setFading(false);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-role">
      <span className={`hero-role-text${fading ? ' fade' : ''}`}>{ROLES[index]}</span>
      <span className="hero-cursor" aria-hidden="true" />
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <ParticleBackground />
      <div className="hero-container">
        <p className="hero-label">{'// Bienvenue'}</p>
        <h1>Téo Mathiaud</h1>
        <TypingRole />
        <p className="hero-sub">
          Passionné par la création d&apos;applications robustes et intuitives.
        </p>
        <p className="hero-desc">
          Étudiant en BUT Informatique à l&apos;IUT Aix-Marseille, je construis des solutions
          de l&apos;interface jusqu&apos;au serveur. Ouvert aux opportunités et aux collaborations.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">
            Voir mes projets
          </a>
          <a
            href="/portfolio/assets/CVMathiaudTeo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <i className="fas fa-file-pdf" /> CV
          </a>
        </div>
        <div className="hero-scroll">scroll</div>
      </div>
    </section>
  );
}

export default Hero;
