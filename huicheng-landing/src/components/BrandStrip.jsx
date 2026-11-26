import { BRAND_STRIP } from '../data/content.js';
import { to } from '../lib/router.js';

// Banda con los logos de las marcas del grupo, deslizándose sin parar.
// La lista se repite dos veces para que el movimiento no tenga cortes.
export default function BrandStrip() {
  const Row = ({ hidden }) => (
    <ul className="bstrip__row" aria-hidden={hidden || undefined}>
      {BRAND_STRIP.logos.map((b) => (
        <li key={b.name}>
          <a href={to('portafolio')} tabIndex={hidden ? -1 : undefined} aria-label={hidden ? undefined : `${b.name}: ver portafolio`}>
            <img src={b.logo} alt="" style={{ height: b.h }} />
          </a>
        </li>
      ))}
    </ul>
  );
  return (
    <section className="bstrip" aria-label={BRAND_STRIP.title}>
      <p className="bstrip__title">
        {BRAND_STRIP.title} <span lang="zh-Hans">{BRAND_STRIP.zh}</span>
      </p>
      <div className="bstrip__viewport">
        <div className="bstrip__track">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
