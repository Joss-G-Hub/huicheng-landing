import { useEffect } from 'react';

/*
  Motor de movimiento (parallax y animaciones ligadas al scroll).
  Se activa con atributos/clases en el HTML, sin librerías externas:

  data-speed="0.2"   Parallax: el elemento se mueve más lento (+) o más rápido (−) que el scroll.
                     Escribe la variable CSS --py.
  data-progress      Progreso de la sección mientras cruza la pantalla, de 0 (entrando por abajo)
                     a 1 (saliendo por arriba). Escribe --p. El CSS lo usa para escalar, girar, etc.
  data-pin           Para secciones "fijadas" (contenido position: sticky). Progreso de 0 a 1
                     mientras la sección está fija. Escribe --p. Se usa para el scroll horizontal.
  data-count="120"   Número que cuenta desde 0 hasta el valor al aparecer en pantalla.
  data-tilt          Tarjeta que se inclina en 3D siguiendo el mouse.
  .reveal            Aparece deslizándose al entrar en pantalla (añade .is-in).
  .words             Divide el texto en palabras para animarlas una por una.
  --depth (inline)   Capa que sigue un poco al mouse (usa --mx / --my del documento).

  Además escribe en <html>: --page-p (progreso de toda la página, para la barra superior),
  --sy (píxeles desplazados, para la salida de la portada),
  --mx / --my (posición del mouse de -0.5 a 0.5).
  Respeta la opción del sistema "reducir movimiento".
*/

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

function splitWords(el) {
  if (el.dataset.splitDone) return;
  const walk = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const parts = child.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
          const w = document.createElement('span');
          w.className = 'w';
          const inner = document.createElement('span');
          inner.className = 'w__i';
          inner.textContent = part;
          w.appendChild(inner);
          frag.appendChild(w);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1 && !child.classList.contains('w')) {
        walk(child);
      }
    });
  };
  walk(el);
  el.querySelectorAll('.w__i').forEach((w, i) => w.style.setProperty('--i', i));
  el.dataset.splitDone = '1';
}

function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const dur = 1400;
  const t0 = performance.now();
  const step = (t) => {
    const k = clamp((t - t0) / dur);
    const eased = 1 - Math.pow(1 - k, 3);
    el.textContent = Math.round(target * eased).toLocaleString('es');
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function useMotion(key) {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('.words').forEach(splitWords);
    const reveals = [...document.querySelectorAll('.reveal, .reveal-img, .words')];
    const counters = [...document.querySelectorAll('[data-count]')];

    if (reduce) {
      reveals.forEach((el) => el.classList.add('is-in'));
      counters.forEach((el) => { el.textContent = el.dataset.count; });
      root.style.setProperty('--page-p', '0');
      return undefined;
    }

    // Aparición al entrar en pantalla
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        if (e.target.dataset.count) countUp(e.target);
        io.unobserve(e.target);
      }),
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
    counters.forEach((el) => { el.textContent = '0'; io.observe(el); });

    // Capas ligadas al scroll
    const speed = [...document.querySelectorAll('[data-speed]')];
    const prog = [...document.querySelectorAll('[data-progress]')];
    const pins = [...document.querySelectorAll('[data-pin]')];
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      root.style.setProperty('--page-p', max > 0 ? (window.scrollY / max).toFixed(4) : '0');
      root.style.setProperty('--sy', Math.round(window.scrollY));

      for (const el of speed) {
        const box = (el.parentElement || el).getBoundingClientRect();
        if (box.bottom < -300 || box.top > vh + 300) continue;
        const offset = box.top + box.height / 2 - vh / 2;
        el.style.setProperty('--py', `${(-offset * parseFloat(el.dataset.speed)).toFixed(1)}px`);
      }
      for (const el of prog) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) continue;
        el.style.setProperty('--p', clamp((vh - r.top) / (vh + r.height)).toFixed(4));
      }
      for (const el of pins) {
        const r = el.getBoundingClientRect();
        const room = r.height - vh;
        el.style.setProperty('--p', room > 0 ? clamp(-r.top / room).toFixed(4) : '0');
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    // Mouse: profundidad global y tarjetas con inclinación 3D
    const fine = window.matchMedia('(pointer: fine)').matches;
    const onMove = (e) => {
      root.style.setProperty('--mx', (e.clientX / window.innerWidth - 0.5).toFixed(3));
      root.style.setProperty('--my', (e.clientY / window.innerHeight - 0.5).toFixed(3));
      root.style.setProperty('--cx', `${e.clientX}px`);
      root.style.setProperty('--cy', `${e.clientY}px`);
    };
    const tilts = fine ? [...document.querySelectorAll('[data-tilt]')] : [];
    const tiltMove = (e) => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--rx', `${((e.clientY - r.top) / r.height - 0.5) * -10}deg`);
      el.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - 0.5) * 12}deg`);
      el.style.setProperty('--gx', `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty('--gy', `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    const tiltLeave = (e) => {
      e.currentTarget.style.setProperty('--rx', '0deg');
      e.currentTarget.style.setProperty('--ry', '0deg');
    };
    tilts.forEach((el) => { el.addEventListener('pointermove', tiltMove); el.addEventListener('pointerleave', tiltLeave); });

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    if (fine) window.addEventListener('pointermove', onMove, { passive: true });
    root.classList.toggle('has-fine-pointer', fine);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('pointermove', onMove);
      tilts.forEach((el) => { el.removeEventListener('pointermove', tiltMove); el.removeEventListener('pointerleave', tiltLeave); });
    };
  }, [key]);
}
