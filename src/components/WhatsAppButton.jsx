import { WHATSAPP } from '../data/content.js';

// Botón fijo abajo a la derecha que abre una conversación de WhatsApp con un mensaje listo.
export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`;
  return (
    <a className="wa" href={href} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp (se abre en una pestaña nueva)">
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path fill="currentColor" d="M12 3C6.9 3 2.8 6.7 2.8 11.3c0 2.5 1.2 4.7 3.1 6.2L5 21l3.9-1.9c1 .3 2 .5 3.1.5 5.1 0 9.2-3.7 9.2-8.3S17.1 3 12 3Zm-4 9.6a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm4 0a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm4 0a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Z" />
      </svg>
      <span className="wa__label">WhatsApp</span>
    </a>
  );
}
