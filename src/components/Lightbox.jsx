import { useCallback, useEffect, useRef, useState } from 'react';

// Galería con zoom. Cualquier componente la abre con:
//   openLightbox(listaDeFotos, posicion)
// Cada foto: { src, w, h, title, photo }. Se cierra con Escape, la X o tocando el fondo;
// las flechas del teclado pasan de una foto a otra.
export const openLightbox = (items, index = 0) =>
  window.dispatchEvent(new CustomEvent('lightbox:open', { detail: { items, index } }));

export default function Lightbox() {
  const [data, setData] = useState(null);
  const closeRef = useRef(null);
  const lastFocus = useRef(null);

  const close = useCallback(() => setData(null), []);
  const go = useCallback((step) => {
    setData((d) => d && { ...d, index: (d.index + step + d.items.length) % d.items.length });
  }, []);

  useEffect(() => {
    const onOpen = (e) => {
      lastFocus.current = document.activeElement;
      setData(e.detail);
    };
    window.addEventListener('lightbox:open', onOpen);
    return () => window.removeEventListener('lightbox:open', onOpen);
  }, []);

  useEffect(() => {
    if (!data) return undefined;
    document.body.classList.add('no-scroll');
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
      lastFocus.current?.focus?.();
    };
    // Solo al abrir y cerrar, no al cambiar de foto.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!data]);

  if (!data) return null;
  const item = data.items[data.index];
  const many = data.items.length > 1;

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={`Foto: ${item.title}`} onClick={close}>
      <button ref={closeRef} type="button" className="lb__close" onClick={close} aria-label="Cerrar">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
      </button>
      <figure className="lb__figure" onClick={(e) => e.stopPropagation()}>
        <div className={`lb__stage${item.photo ? ' lb__stage--photo' : ''}`}>
          <img key={item.src} src={item.src} alt={item.title} width={item.w} height={item.h} />
        </div>
        <figcaption className="lb__caption">
          <span className="lb__count">{String(data.index + 1).padStart(2, '0')} / {String(data.items.length).padStart(2, '0')}</span>
          <strong>{item.title}</strong>
        </figcaption>
      </figure>
      {many && (
        <>
          <button type="button" className="lb__nav lb__nav--prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Foto anterior">
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button type="button" className="lb__nav lb__nav--next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Foto siguiente">
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </>
      )}
    </div>
  );
}
