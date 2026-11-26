import { useEffect } from 'react';

// Barra de progreso de lectura (rojo Huicheng) y cursor personalizado (solo con mouse).
// La posición del cursor la actualiza src/lib/motion.js (variables --cx y --cy).
export default function FX() {
  useEffect(() => {
    const root = document.documentElement;
    const HOVER = 'a, button, [role="button"], [data-tilt], input, select, textarea, label';
    const over = (e) => root.classList.toggle('cursor-hover', !!e.target.closest?.(HOVER));
    const down = () => root.classList.add('cursor-down');
    const up = () => root.classList.remove('cursor-down');
    const out = (e) => { if (!e.relatedTarget) root.classList.add('cursor-out'); };
    const back = () => root.classList.remove('cursor-out');
    document.addEventListener('pointerover', over);
    document.addEventListener('pointerdown', down);
    document.addEventListener('pointerup', up);
    document.addEventListener('pointerout', out);
    document.addEventListener('pointerenter', back, true);
    document.addEventListener('pointermove', back, { passive: true });
    return () => {
      document.removeEventListener('pointerover', over);
      document.removeEventListener('pointerdown', down);
      document.removeEventListener('pointerup', up);
      document.removeEventListener('pointerout', out);
      document.removeEventListener('pointerenter', back, true);
      document.removeEventListener('pointermove', back);
    };
  }, []);

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <div className="hcursor" aria-hidden="true">
        <span className="hcursor__ring" />
        <img className="hcursor__dot" src="marca/isotipo-huicheng.svg" alt="" width="12" height="13" />
      </div>
    </>
  );
}
