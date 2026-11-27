// Desvanecido blanco breve al cambiar de página (ver src/lib/transition.js).
export default function Curtain({ phase }) {
  return <div className={`curtain curtain--${phase}`} aria-hidden="true" />;
}
