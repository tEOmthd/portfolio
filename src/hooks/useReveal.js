import { useEffect, useRef } from 'react';

// Révèle la section dès que son haut entre dans l'écran, quelle que soit sa hauteur
export function useReveal(rootMargin = '0px 0px -10% 0px') {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return ref;
}
