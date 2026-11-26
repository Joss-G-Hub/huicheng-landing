// Cortina roja que cruza la pantalla al cambiar de página (ver src/lib/transition.js).
export default function Curtain({ phase }) {
  return (
    <div className={`curtain curtain--${phase}`} aria-hidden="true">
      <img src="marca/isotipo-huicheng-blanco.svg" alt="" width="64" height="69" />
    </div>
  );
}
