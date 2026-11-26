import { NOT_FOUND } from '../data/content.js';
import { to } from '../lib/router.js';

// Página 404: aparece si alguien escribe una dirección que no existe (por ejemplo #/precios).
export default function NotFound() {
  return (
    <section className="nf">
      <img className="nf__deco" data-speed="0.25" src="marca/isotipo-huicheng.svg" alt="" aria-hidden="true" />
      <div className="container nf__inner">
        <p className="nf__code" aria-hidden="true">404</p>
        <p className="nf__zh" lang="zh-Hans">{NOT_FOUND.zh}</p>
        <h1 className="nf__title words">{NOT_FOUND.title}</h1>
        <p className="nf__text">{NOT_FOUND.text}</p>
        <div className="nf__actions">
          <a className="btn btn--primary btn--lg" href={to('inicio')}>Ir al inicio</a>
          <a className="btn btn--outline btn--lg" href={to('contacto')}>Contáctanos</a>
        </div>
      </div>
    </section>
  );
}
