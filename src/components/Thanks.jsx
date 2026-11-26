import { THANKS, WHATSAPP, FORM_ENDPOINT } from '../data/content.js';
import { to } from '../lib/router.js';
import { getThanksName } from '../lib/thanks.js';

// Página de Gracias: aparece después de enviar el formulario de contacto.
export default function Thanks() {
  const name = getThanksName();
  const wa = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`;
  return (
    <section className="ty">
      <img className="ty__deco" data-speed="0.25" src="marca/isotipo-huicheng.svg" alt="" aria-hidden="true" />
      <div className="container ty__inner">
        <svg className="ty__check" viewBox="0 0 120 120" aria-hidden="true">
          <circle className="ty__ring" cx="60" cy="60" r="54" pathLength="100" />
          <path className="ty__tick" d="M36 62 L53 78 L86 44" pathLength="100" />
        </svg>
        <p className="ty__zh" lang="zh-Hans">{THANKS.zh}</p>
        <h1 className="ty__title words">{name ? `¡Gracias, ${name}!` : THANKS.title}</h1>
        <p className="ty__text">{THANKS.text}</p>
        {!FORM_ENDPOINT && <p className="ty__demo">{THANKS.demo}</p>}

        <ol className="ty__steps">
          {THANKS.steps.map((s, i) => (
            <li key={s.title} className="reveal" style={{ '--d': `${200 + i * 120}ms` }}>
              <span className="ty__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2>{s.title} <span lang="zh-Hans">{s.zh}</span></h2>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="ty__actions">
          <a className="btn btn--primary btn--lg" href={to('inicio')}>Volver al inicio</a>
          <a className="btn btn--outline btn--lg" href={to('portafolio')}>Ver portafolio</a>
        </div>
        <p className="ty__wa">
          ¿Es urgente? <a href={wa} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp <span aria-hidden="true">→</span></a>
        </p>
      </div>
    </section>
  );
}
