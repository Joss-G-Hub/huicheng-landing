import { useEffect, useRef, useState } from 'react';
import { GALLERY } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';
import { openLightbox } from './Lightbox.jsx';

// Galería "Huicheng por dentro": mosaico en columnas que se mueven a distinta velocidad
// (parallax), filtros por categoría y zoom al hacer clic.
const useColumns = () => {
  const get = () => (window.matchMedia('(max-width: 900px)').matches ? 2 : 3);
  const [n, setN] = useState(get);
  useEffect(() => {
    const on = () => setN(get());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return n;
};
const SPEEDS = [0.012, -0.012, 0.02]; // parallax suave

export default function Gallery() {
  const [filter, setFilter] = useState('todas');
  const [shown, setShown] = useState('todas');
  const [fading, setFading] = useState(false);
  const cols = useColumns();
  // Aparece al entrar en pantalla (observador propio: la galería es más alta que la pantalla).
  const gridRef = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { rootMargin: '0px 0px -15% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pick = (key) => {
    if (key === filter) return;
    setFilter(key);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setShown(key); return; }
    setFading(true);
    setTimeout(() => { setShown(key); setFading(false); }, 220);
  };

  const items = GALLERY.items.filter((it) => shown === 'todas' || it.cat === shown);
  const columns = Array.from({ length: cols }, () => []);
  items.forEach((it, i) => columns[i % cols].push({ ...it, i }));
  const open = (i) => openLightbox(items, i);

  return (
    <section className="section gal">
      <div className="container">
        <div className="gal__head">
          <div className="section-head reveal">
            <Eyebrow es={GALLERY.eyebrow} zh={GALLERY.eyebrowZh} />
            <h2 className="h2 words">{GALLERY.title}</h2>
            <p className="lead">{GALLERY.text}</p>
          </div>
          <div className="gal__filters reveal" role="group" aria-label="Filtrar galería">
            {GALLERY.filters.map((f) => (
              <button key={f.key} type="button" aria-pressed={filter === f.key} onClick={() => pick(f.key)}>{f.label}</button>
            ))}
          </div>
        </div>

        <div ref={gridRef} className={`gal__grid${seen ? ' is-in' : ''}${fading ? ' is-fading' : ''}`} style={{ '--cols': cols }}>
          {columns.map((col, c) => (
            <div key={c} className="gal__col" data-speed={cols > 1 ? SPEEDS[c] : undefined}>
              {col.map((it, k) => (
                <button
                  key={`${shown}-${it.src}`}
                  type="button"
                  className={`gal__item${it.photo ? ' gal__item--photo' : ''}`}
                  style={{ '--k': c + k * cols }}
                  onClick={() => open(it.i)}
                  aria-label={`Ver en grande: ${it.title}`}
                >
                  <img src={it.src} alt={it.title} width={it.w} height={it.h} loading="lazy" />
                  <span className="gal__cap">{it.title}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
