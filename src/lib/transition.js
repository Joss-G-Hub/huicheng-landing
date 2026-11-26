import { useEffect, useState } from 'react';

// Transición entre páginas: una cortina cubre la pantalla ('in'), se cambia la página
// mientras está tapada, y luego la cortina sale ('out'). Duraciones en milisegundos.
const IN = 260;
const OUT = 320;

export function usePageTransition(route) {
  const [shown, setShown] = useState(route);
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    if (route === shown) {
      setPhase('idle');
      return undefined;
    }
    const top = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(route);
      top();
      return undefined;
    }
    setPhase('in');
    const t1 = setTimeout(() => {
      setShown(route);
      top();
      setPhase('out');
    }, IN);
    const t2 = setTimeout(() => setPhase('idle'), IN + OUT);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  return [shown, phase];
}
