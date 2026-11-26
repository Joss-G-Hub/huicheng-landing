import { useEffect, useState } from 'react';

// Botón "volver arriba": aparece cuando bajas un poco y te lleva al inicio de la página.
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const up = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'instant' : 'smooth' });
  };

  return (
    <button
      type="button"
      className={`totop${show ? ' is-on' : ''}`}
      onClick={up}
      aria-label="Volver arriba"
      tabIndex={show ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
