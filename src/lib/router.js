import { useEffect, useState } from 'react';

// Enrutador mínimo por hash (#/nosotros, #/contacto…).
// Funciona en cualquier hosting estático (Netlify, Vercel, cPanel) sin configuración extra
// y sin librerías adicionales. Los enlaces normales (#contenido) no cambian de página.

const read = () => {
  const h = window.location.hash;
  if (!h.startsWith('#/')) return null;
  return h.slice(2).split(/[?#]/)[0] || 'inicio';
};

export const to = (id) => (id === 'inicio' ? '#/' : `#/${id}`);

export function useRoute(pages) {
  const valid = (r) => (r && pages.includes(r) ? r : 'inicio');
  const [route, setRoute] = useState(() => valid(read()));

  useEffect(() => {
    const onHash = () => {
      const r = read();
      if (r !== null) setRoute(valid(r));
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Cada página nueva empieza arriba.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [route]);

  return route;
}
