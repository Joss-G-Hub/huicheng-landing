import { useState } from 'react';
import { FAQ } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

// Preguntas frecuentes en acordeón: una abierta a la vez; el "+" gira y se vuelve "×".
export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq">
      <div className="container faq__grid">
        <div className="section-head reveal">
          <Eyebrow es={FAQ.eyebrow} zh={FAQ.eyebrowZh} />
          <h2 className="h2 h2--sm words">{FAQ.title}</h2>
        </div>
        <ul className="faq__list">
          {FAQ.items.map((it, i) => {
            const on = open === i;
            return (
              <li key={it.q} className="faq__item reveal" data-open={on || undefined} style={{ '--d': `${i * 80}ms` }}>
                <h3>
                  <button type="button" aria-expanded={on} aria-controls={`faq-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(on ? -1 : i)}>
                    {it.q}
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq__panel" id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div><p>{it.a}</p></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
