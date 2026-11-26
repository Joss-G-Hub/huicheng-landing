import { to } from '../lib/router.js';

// Cabecera de las páginas interiores, con capas que se mueven a distinta velocidad (parallax).
export default function PageHero({ page }) {
  return (
    <section className="phero">
      <img className="phero__deco" data-speed="0.3" src="marca/isotipo-huicheng.svg" alt="" aria-hidden="true" />
      <div className="container phero__grid">
        <div className="phero__copy">
          <nav className="crumbs" aria-label="Ruta">
            <a href={to('inicio')}>Inicio</a> <span aria-hidden="true">/</span> <span aria-current="page">{page.title}</span>
          </nav>
          <h1 className="phero__title words">
            {page.title}
            <span className="phero__zh" lang="zh-Hans">{page.zh}</span>
          </h1>
          <p className="phero__text">{page.text}</p>
        </div>
        <div className={`phero__media reveal-img${page.map ? ' phero__media--map' : ''}`} data-speed="-0.1">
          <div className="phero__depth" style={{ '--depth': 16 }}>
            <img src={page.image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
