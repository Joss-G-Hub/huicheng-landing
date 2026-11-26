import { OPERATIONS } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

export default function Operations() {
  return (
    <section id="operacion" className="section section--cream">
      <div className="container split split--center">
        <div className="stack-lg reveal">
          <div>
            <Eyebrow es={OPERATIONS.eyebrow} zh={OPERATIONS.eyebrowZh} />
            <h2 className="h2 words">{OPERATIONS.title}</h2>
            <p className="lead">{OPERATIONS.text}</p>
          </div>
          <ul className="pillars">
            {OPERATIONS.pillars.map((p) => (
              <li key={p.title}>
                <span className="pillars__mark" aria-hidden="true" />
                <div>
                  <h3>{p.title} <span className="zh-inline" lang="zh-Hans">{p.zh}</span></h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="photos reveal" style={{ '--d': '120ms' }}>
          {OPERATIONS.photos.map((ph) => (
            <figure key={ph.src} className="photo-card reveal-img" data-tilt>
              <img src={ph.src} alt={ph.alt} loading="lazy" width="400" height="300" />
              <figcaption><strong>{ph.strong}</strong> {ph.text}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
