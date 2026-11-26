import { PORTFOLIO } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

export default function Portfolio() {
  const { main, independent } = PORTFOLIO;
  return (
    <section id="portafolio" className="section">
      <div className="container">
        <div className="section-head reveal">
          <Eyebrow es={PORTFOLIO.eyebrow} zh={PORTFOLIO.eyebrowZh} />
          <h2 className="h2 words">{PORTFOLIO.title}</h2>
          <p className="lead">{PORTFOLIO.text}</p>
        </div>

        <div className="brands">
          <article className="brand-main reveal" data-tilt>
            <span className="tag tag--light">MARCA PRINCIPAL</span>
            <div className="brand-main__logo">
              <img src={main.logo} alt={main.name} height="92" />
            </div>
            <p>
              {main.text}{' '}
              <a className="brand-main__link" href={main.link} target="_blank" rel="noopener noreferrer">
                {main.link.replace('https://', '')}
              </a>
            </p>
            <ul className="subbrands">
              {main.subbrands.map((s) => (
                <li key={s.name}>
                  <strong>{s.name}</strong>
                  <span>{s.text}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="brand-list reveal" style={{ '--d': '120ms' }}>
            <span className="tag">MARCAS INDEPENDIENTES</span>
            {independent.map((b) => (
              <article key={b.name} className="brand-card" data-tilt>
                <div className="brand-card__logo">
                  <img
                    src={b.logo}
                    alt={b.name}
                    style={b.wide ? { width: 150, height: 'auto' } : { height: b.h, width: 'auto' }}
                  />
                </div>
                <p>
                  <strong>{b.name}.</strong> {b.text}
                  {b.link && (
                    <>
                      {' '}
                      <a href={b.link} target="_blank" rel="noopener noreferrer">
                        {b.link.replace('https://', '')}
                      </a>
                    </>
                  )}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
