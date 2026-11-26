import { ABOUT } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

export default function About() {
  return (
    <section id="nosotros" className="section section--dark">
      <img className="deco deco--about" data-speed="0.3" src="marca/isotipo-huicheng.svg" alt="" aria-hidden="true" />
      <div className="container">
        <div className="split split--end reveal">
          <div>
            <Eyebrow es={ABOUT.eyebrow} zh={ABOUT.eyebrowZh} tone="gold" />
            <h2 className="h2 words">{ABOUT.title}</h2>
          </div>
          <p className="lead lead--muted">{ABOUT.text}</p>
        </div>

        <dl className="stats reveal">
          {ABOUT.stats.map((s) => (
            <div key={s.label} className="stats__item">
              <dt data-count={s.value}>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>

        <ol className="timeline reveal">
          {ABOUT.milestones.map((m) => (
            <li key={m.year} className="timeline__item">
              <span className={`pill${m.highlight ? ' pill--light' : ''}`}>{m.year}</span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
