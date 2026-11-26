import { MISSION } from '../data/content.js';

export default function Mission() {
  return (
    <section className="section section--red" aria-label="Misión y visión">
      <img className="deco deco--red" data-speed="0.3" src="marca/isotipo-huicheng-blanco.svg" alt="" aria-hidden="true" />
      <div className="container split reveal">
        {MISSION.map((m) => (
          <div key={m.title}>
            <h2 className="h2-italic">{m.title} <span className="zh-inline zh-inline--light" lang="zh-Hans">{m.zh}</span></h2>
            <p className="lead lead--light">{m.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
