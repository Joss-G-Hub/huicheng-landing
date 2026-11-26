import { useState } from 'react';
import { WORLD } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';
import WorldMap from './WorldMap.jsx';

export default function World() {
  const [active, setActive] = useState(null);
  return (
    <section id="mundo" className="section section--steel">
      <div className="container">
        <div className="section-head reveal">
          <Eyebrow es={WORLD.eyebrow} zh={WORLD.eyebrowZh} tone="gold" />
          <h2 className="h2 words">{WORLD.title}</h2>
          <p className="lead lead--muted">{WORLD.text}</p>
        </div>
        <WorldMap active={active} onActive={setActive} />
        <ul className="world">
          {WORLD.countries.map((c, i) => (
            <li
              key={c.name}
              data-tilt
              className={`world__item reveal${active === c.name ? ' is-active' : ''}`}
              style={{ '--d': `${i * 90}ms` }}
              onMouseEnter={() => setActive(c.name)}
              onMouseLeave={() => setActive(null)}
            >
              <h3>
                {c.name}
                <span lang="zh-Hans">{c.zh}</span>
              </h3>
              <p>{c.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
