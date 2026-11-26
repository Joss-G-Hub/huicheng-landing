import { VALUES } from '../data/content.js';

export default function ValueBand() {
  return (
    <section className="values" aria-label="Por qué Huicheng">
      <ul className="container values__list">
        {VALUES.map((v) => (
          <li key={v.title} className="values__item">
            <img src="marca/isotipo-huicheng-blanco.svg" alt="" width="28" height="30" />
            <div>
              <h2>
                {v.title} <span lang="zh-Hans">{v.zh}</span>
              </h2>
              <p>{v.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
