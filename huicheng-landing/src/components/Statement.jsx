import { STATEMENT } from '../data/content.js';

// Frase grande cuyas palabras se encienden a medida que haces scroll.
export default function Statement() {
  const n = STATEMENT.text.split(/\s+/).length;
  return (
    <section className="statement" data-progress>
      <img className="statement__deco" data-speed="0.25" src="marca/isotipo-huicheng.svg" alt="" aria-hidden="true" />
      <div className="container">
        <p className="statement__text words words--scrub" style={{ '--n': n }}>{STATEMENT.text}</p>
        <p className="statement__zh" lang="zh-Hans">{STATEMENT.zh}</p>
      </div>
    </section>
  );
}
