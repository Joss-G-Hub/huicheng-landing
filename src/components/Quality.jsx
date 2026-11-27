import { useState } from 'react';
import { QUALITY } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

// "Calidad garantizada": interruptor Aprobado / Rechazado sobre el informe de inspección.
// El sello cae como un estampado y la lista se marca punto por punto.
export default function Quality() {
  const [state, setState] = useState('approved');
  const ok = state === 'approved';
  const info = QUALITY[state];

  return (
    <section className="section section--cream qa">
      <div className="container qa__grid">
        <div className="qa__media reveal">
          <div className="qa__tablet" data-tilt>
            <img src="img/inspeccion-tablet.webp" alt="Informe de inspección técnica de Huicheng en una tablet" width="721" height="1000" loading="lazy" />
            <p key={state} className={`qa__stamp qa__stamp--${state}`} aria-hidden="true">
              {info.label}
              <small>{info.en}</small>
            </p>
          </div>
        </div>

        <div className="qa__copy">
          <div className="reveal">
            <Eyebrow es={QUALITY.eyebrow} zh={QUALITY.eyebrowZh} />
            <h2 className="h2 h2--sm words">{QUALITY.title}</h2>
            <p className="lead">{QUALITY.text}</p>
          </div>

          <div className="qa__switch reveal" role="radiogroup" aria-label="Estado de la inspección">
            {['approved', 'rejected'].map((k) => (
              <button
                key={k}
                type="button"
                role="radio"
                aria-checked={state === k}
                className={`qa__opt qa__opt--${k}`}
                onClick={() => setState(k)}
              >
                {QUALITY[k].label}
              </button>
            ))}
            <span className="qa__thumb" aria-hidden="true" />
          </div>

          <ul key={state} className="qa__list" aria-live="polite">
            {QUALITY.checks.map((c, i) => {
              const fail = !ok && QUALITY.fails.includes(c);
              return (
                <li key={c} className={fail ? 'is-fail' : 'is-ok'} style={{ '--i': i }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                    {fail
                      ? <path d="M6 6l12 12M18 6L6 18" pathLength="100" />
                      : <path d="M5 12.5l4.5 4.5L19 7.5" pathLength="100" />}
                  </svg>
                  <span>{c}</span>
                  <em>{fail ? 'No cumple' : 'Cumple'}</em>
                </li>
              );
            })}
          </ul>
          <p className="qa__note">{info.note}</p>
        </div>
      </div>
    </section>
  );
}
