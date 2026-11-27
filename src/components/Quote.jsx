import { useState } from 'react';
import { QUOTE, CONTACT, WHATSAPP } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

// Cotizador rápido: marca(s) → producto(s) → país. A la derecha, una "proforma" que se
// va llenando sola. Al completar los 3 pasos se puede enviar por WhatsApp o por correo.
const toggleIn = (list, x) => (list.includes(x) ? list.filter((v) => v !== x) : [...list, x]);

export default function Quote() {
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [country, setCountry] = useState('');
  const [other, setOther] = useState('');

  const dest = country === 'Otro país' ? other.trim() : country;
  const ready = brands.length > 0 && products.length > 0 && !!dest;
  const done = [brands.length > 0, products.length > 0, !!dest].filter(Boolean).length;

  const msg = `Hola Huicheng, quiero solicitar una cotización.\nMarcas: ${brands.join(', ')}\nProductos: ${products.join(', ')}\nDestino: ${dest}`;
  const wa = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(msg)}`;
  const mail = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Solicitud de cotización')}&body=${encodeURIComponent(msg)}`;

  const Row = ({ label, value }) => (
    <div className="qt__row">
      <span>{label}</span>
      <strong key={value || 'vacio'} className={value ? 'is-set' : undefined}>{value || '—'}</strong>
    </div>
  );

  return (
    <section className="section section--cream qt">
      <div className="container">
        <div className="section-head reveal">
          <Eyebrow es={QUOTE.eyebrow} zh={QUOTE.eyebrowZh} />
          <h2 className="h2 h2--sm words">{QUOTE.title}</h2>
          <p className="lead">{QUOTE.text}</p>
        </div>

        <div className="qt__grid">
          <div className="qt__steps reveal">
            <fieldset className="qt__step">
              <legend><span>01</span> Marcas</legend>
              <div className="qt__brands">
                {QUOTE.brands.map((b) => (
                  <button key={b.key} type="button" aria-pressed={brands.includes(b.key)} className="qt__brand" onClick={() => setBrands((l) => toggleIn(l, b.key))}>
                    <img src={b.logo} alt="" style={{ height: b.h }} />
                    <span className="qt__brand-name">{b.key}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="qt__step">
              <legend><span>02</span> Productos</legend>
              <div className="qt__chips">
                {QUOTE.products.map((p) => (
                  <button key={p} type="button" aria-pressed={products.includes(p)} className="qt__chip" onClick={() => setProducts((l) => toggleIn(l, p))}>{p}</button>
                ))}
              </div>
            </fieldset>

            <fieldset className="qt__step">
              <legend><span>03</span> País de destino</legend>
              <div className="qt__chips" role="radiogroup" aria-label="País de destino">
                {QUOTE.countries.map((c) => (
                  <button key={c} type="button" role="radio" aria-checked={country === c} className="qt__chip" onClick={() => setCountry(c)}>{c}</button>
                ))}
              </div>
              {country === 'Otro país' && (
                <div className="qt__other">
                  <label htmlFor="qt-otro">¿Cuál?</label>
                  <input id="qt-otro" type="text" value={other} onChange={(e) => setOther(e.target.value)} placeholder="Escribe tu país" autoComplete="country-name" />
                </div>
              )}
            </fieldset>
          </div>

          <aside className="qt__sheet reveal" data-ready={ready || undefined} style={{ '--d': '120ms' }} aria-live="polite">
            <div className="qt__sheet-head">
              <img src="marca/logo-huicheng.svg" alt="Huicheng" width="140" height="21" />
              <span className="qt__progress" aria-label={`${done} de 3 pasos completos`}>
                {[0, 1, 2].map((n) => <i key={n} className={n < done ? 'on' : undefined} />)}
              </span>
            </div>
            <p className="qt__title">Proforma</p>
            <p className="qt__sub">Solicitud de cotización</p>
            <Row label="Marcas" value={brands.join(', ')} />
            <Row label="Productos" value={products.join(', ')} />
            <Row label="Destino" value={dest} />
            <div className="qt__actions">
              <a className={`btn btn--primary btn--lg qt__send${ready ? '' : ' is-off'}`} href={ready ? wa : undefined} aria-disabled={!ready} target="_blank" rel="noopener noreferrer">
                Solicitar por WhatsApp
              </a>
              <a className={`qt__mail${ready ? '' : ' is-off'}`} href={ready ? mail : undefined} aria-disabled={!ready}>o envíala por correo</a>
            </div>
            {!ready && <p className="qt__hint">Completa los 3 pasos para enviar tu solicitud.</p>}
          </aside>
        </div>
      </div>
    </section>
  );
}
