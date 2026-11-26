import { HERO } from '../data/content.js';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        {/* Mapa limpio (México, Ecuador y Cuba resaltados) con el logotipo vectorial encima,
            en la posición exacta del hueco que deja la imagen. */}
        <div className="hero__map" data-speed="0.12">
          <img src="img/hero-mapa-limpio.png" alt="" width="2200" height="1154" fetchpriority="high" />
          <img className="hero__logo hero__depth" style={{ '--depth': -8 }} src="marca/logo-huicheng-bilingue.svg" alt="Huicheng 辉程贸易" width="837" height="213" />
        </div>
        <p className="hero__tagline">
          <span>{HERO.tagline}</span>
          <span aria-hidden="true" className="hero__dot" />
          <span lang="zh-Hans">{HERO.taglineZh}</span>
        </p>
        <p className="hero__kicker">{HERO.kicker}</p>
        <h1 className="hero__title words">{HERO.title}</h1>
        <p className="hero__text">{HERO.text}</p>
        <div className="hero__ctas">
          <a className="btn btn--primary btn--lg" href={HERO.primary.href}>{HERO.primary.label}</a>
          <a className="btn btn--outline btn--lg" href={HERO.secondary.href}>{HERO.secondary.label}</a>
        </div>
        <img
          className="hero__products"
          src="img/productos-repuestos.webp"
          alt="Repuestos de motocicleta: cilindro, empaques, árbol de levas, biela y culata"
          width="2400"
          height="634"
          loading="lazy"
        />
      </div>
    </section>
  );
}
