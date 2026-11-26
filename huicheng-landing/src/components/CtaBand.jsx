import { CTA } from '../data/content.js';
import { to } from '../lib/router.js';

// Franja final que invita a ir a Contacto.
export default function CtaBand() {
  return (
    <section className="cta">
      <img className="cta__deco" data-speed="0.25" src="marca/isotipo-huicheng-blanco.svg" alt="" aria-hidden="true" />
      <div className="container cta__inner reveal">
        <div>
          <h2 className="h2-italic">{CTA.title} <span className="zh-inline zh-inline--light" lang="zh-Hans">{CTA.zh}</span></h2>
          <p>{CTA.text}</p>
        </div>
        <a className="btn btn--white btn--lg" href={to('contacto')}>{CTA.button}</a>
      </div>
    </section>
  );
}
