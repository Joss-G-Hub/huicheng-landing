import { useEffect, useState } from 'react';
import { ISO_VIEWBOX, ISO_PATHS } from '../data/isotipo.js';

// Pantalla de carga: el isotipo entra trazo por trazo y luego la pantalla sube.
// Solo aparece al abrir el sitio, no al cambiar de página.
export default function Loader() {
  const [state, setState] = useState('on');

  useEffect(() => {
    const start = performance.now();
    const minTime = 800;
    let done = false;
    const timers = [];
    const finish = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, minTime - (performance.now() - start));
      timers.push(setTimeout(() => {
        setState('out');
        timers.push(setTimeout(() => setState('gone'), 500));
      }, wait));
    };
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish);
    timers.push(setTimeout(finish, 1600)); // por si alguna imagen tarda demasiado
    return () => {
      window.removeEventListener('load', finish);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (state === 'gone') return null;
  return (
    <div className={`loader${state === 'out' ? ' loader--out' : ''}`} aria-hidden="true">
      <div className="loader__inner">
        <svg className="loader__iso" viewBox={ISO_VIEWBOX}>
          {[...ISO_PATHS].reverse().map((d, i) => <path key={i} d={d} style={{ '--i': i }} />)}
        </svg>
        <img className="loader__word" src="marca/logo-huicheng.svg" alt="" width="180" height="27" />
        <span className="loader__bar"><span /></span>
      </div>
    </div>
  );
}
