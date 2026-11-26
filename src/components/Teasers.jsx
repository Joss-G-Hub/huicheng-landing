import { TEASERS } from '../data/content.js';
import { to } from '../lib/router.js';
import Eyebrow from './Eyebrow.jsx';

// Resumen de cada página en Inicio.
export default function Teasers() {
  return (
    <section className="section section--cream">
      <div className="container">
        <div className="section-head reveal">
          <Eyebrow es="EXPLORA" zh="探索" />
          <h2 className="h2 words">Conoce Huicheng.</h2>
        </div>
        <ul className="teasers">
          {TEASERS.map((t, i) => (
            <li key={t.id} className="reveal" style={{ '--d': `${i * 90}ms` }}>
              <a className="teaser" href={to(t.id)} data-tilt>
                <div className={`teaser__img${t.map ? ' teaser__img--map' : ''}`}>
                  <img src={t.image} alt="" loading="lazy" />
                </div>
                <div className="teaser__body">
                  <h3>{t.title} <span lang="zh-Hans">{t.zh}</span></h3>
                  <p>{t.text}</p>
                  <span className="teaser__more">Ver más <span aria-hidden="true">→</span></span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
