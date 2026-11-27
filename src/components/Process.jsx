import { useEffect, useRef, useState } from 'react';
import { PROCESS } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

// "Cómo trabajamos": los pasos se activan solos mientras bajas.
// La imagen de la derecha se queda a la vista (sticky) y cambia con un barrido diagonal;
// el texto sigue moviéndose, así que la página nunca se siente trabada.
// En celular cada paso muestra su imagen debajo del texto.

// Mini mapa del paso "Envío": la ruta de China a América se dibuja una vez y el punto la recorre.
const ROUTE = 'M1708 612 Q1149 250 590 758';
function ShipMap() {
  return (
    <svg className="proc__map" viewBox="300 300 1600 560" role="img" aria-label="Ruta de envío desde China hacia América Latina">
      <image href="img/mapa-puntos.svg" width="2200" height="1154" />
      <path d={ROUTE} className="proc__route" />
      <path d={ROUTE} className="proc__route proc__route--glow" pathLength="1000" />
      <circle className="proc__ship" r="16">
        <animateMotion dur="2.2s" repeatCount="1" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".4 0 .2 1" path={ROUTE} />
      </circle>
      <circle cx="1708" cy="612" r="16" className="proc__pin" />
      <circle cx="590" cy="758" r="13" className="proc__pin" />
      <text x="1708" y="570" textAnchor="middle" className="proc__label">China</text>
      <text x="630" y="810" className="proc__label">Destino</text>
    </svg>
  );
}

function Visual({ step }) {
  return step.img
    ? <img src={step.img} alt="" width={step.w} height={step.h} loading="lazy" />
    : <ShipMap />;
}

export default function Process() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setActive(Number(e.target.dataset.i));
      }),
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const steps = PROCESS.steps;
  return (
    <section className="section proc" style={{ '--a': active, '--n': steps.length }}>
      <div className="container">
        <div className="section-head reveal">
          <Eyebrow es={PROCESS.eyebrow} zh={PROCESS.eyebrowZh} />
          <h2 className="h2 words">{PROCESS.title}</h2>
          <p className="lead">{PROCESS.text}</p>
        </div>

        <div className="proc__grid">
          <ol className="proc__steps">
            <span className="proc__track" aria-hidden="true"><span /></span>
            {steps.map((s, i) => (
              <li
                key={s.key}
                ref={(el) => { refs.current[i] = el; }}
                data-i={i}
                className={`proc__step${i === active ? ' is-active' : ''}${i < active ? ' is-done' : ''}`}
                aria-current={i === active ? 'step' : undefined}
              >
                <span className="proc__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div className="proc__body">
                  <h3>{s.title} <span lang="zh-Hans">{s.zh}</span></h3>
                  <p>{s.text}</p>
                  <div className={`proc__inline${s.img ? '' : ' proc__inline--map'}`}><Visual step={s} /></div>
                </div>
              </li>
            ))}
          </ol>

          <div className="proc__sticky" aria-hidden="true">
            <div className={`proc__visual${steps[active].img ? '' : ' is-dark'}`}>
              {steps.map((s, i) => (
                <div key={s.key} className={`proc__slide${i === active ? ' is-on' : ''}${s.img ? '' : ' proc__slide--map'}`}>
                  <Visual key={i === active ? 'on' : 'off'} step={s} />
                </div>
              ))}
              <p className="proc__caption"><span>{String(active + 1).padStart(2, '0')}</span> {steps[active].title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
