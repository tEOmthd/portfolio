import { useEffect, useState } from 'react';

// Section qui croise une ligne horizontale placée à 40 % de la hauteur de l'écran
export function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  const key = ids.join(',');

  useEffect(() => {
    const sections = key.split(',').map(id => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return;

    const visible = new Set();
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        const current = sections.find(section => visible.has(section.id));
        if (current) setActive(current.id);
      },
      { rootMargin: '-40% 0px -59% 0px' }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
