import { CHAIN } from '../data/content.js';
import { ISO_VIEWBOX, ISO_PATHS } from '../data/isotipo.js';

// Sección fijada: mientras haces scroll, el isotipo se dibuja trazo por trazo
// (Fábricas → Ecosistema → Mercados) y el texto de cada etapa va apareciendo.
export default function SupplyChain() {
  // Los trazos se dibujan de abajo hacia arriba: origen → plataforma → destino.
  const order = [2, 1, 0];
  return (
    <section className="chain" data-pin>
      <div className="chain__sticky">
        <div className="container chain__grid">
          <div className="chain__iso" aria-hidden="true">
            <svg viewBox={ISO_VIEWBOX}>
              {ISO_PATHS.map((d, i) => (
                <g key={i}>
                  <path d={d} className="chain__ghost" />
                  <path d={d} className="chain__stroke" style={{ '--k': order.indexOf(i) }} />
                </g>
              ))}
            </svg>
          </div>
          <div className="chain__copy">
            <p className="chain__eyebrow">{CHAIN.eyebrow} <span lang="zh-Hans">{CHAIN.zh}</span></p>
            <h2 className="chain__title">{CHAIN.title}</h2>
            <ol className="chain__steps">
              {CHAIN.steps.map((s, k) => (
                <li key={s.title} className="chain__step" style={{ '--k': k }}>
                  <span className="chain__num">0{k + 1}</span>
                  <div>
                    <h3>{s.title} <span lang="zh-Hans">{s.zh}</span></h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="chain__bar" aria-hidden="true"><span /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
