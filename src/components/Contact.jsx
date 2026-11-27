import { useRef, useState } from 'react';
import { CONTACT, FORM_ENDPOINT, QUOTE, WHATSAPP } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';
import { to } from '../lib/router.js';
import { setThanksName } from '../lib/thanks.js';

// Contacto + cotizador en una sola sección:
// 1) marcas, 2) productos, 3) país (botones) y 4) datos de contacto.
// A la derecha se va llenando una "Proforma". Al enviar, lleva a la página de Gracias.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMPTY = { nombre: '', empresa: '', correo: '', comentarios: '' };
const toggleIn = (list, x) => (list.includes(x) ? list.filter((v) => v !== x) : [...list, x]);

function Field({ id, label, error, as = 'input', optional, ...rest }) {
  const Tag = as;
  return (
    <div className={`field${as === 'textarea' ? ' field--full' : ''}`}>
      <label htmlFor={id}>{label}{optional && <span className="field__opt"> (opcional)</span>}</label>
      <Tag id={id} name={id} aria-invalid={error ? 'true' : undefined} aria-describedby={error ? `${id}-error` : undefined} {...rest} />
      {error && <p id={`${id}-error`} className="field__error">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [country, setCountry] = useState('');
  const [other, setOther] = useState('');
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | error
  const formRef = useRef(null);

  const dest = country === 'Otro país' ? other.trim() : country;
  const stepsDone = [brands.length > 0, products.length > 0, !!dest].filter(Boolean).length;
  const ready = stepsDone === 3;

  const clear = (k) => errors[k] && setErrors((er) => ({ ...er, [k]: undefined }));
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    clear(name);
  };

  const validate = () => {
    const e = {};
    if (!brands.length) e.marcas = 'Elige al menos una marca.';
    if (!products.length) e.productos = 'Elige al menos un tipo de producto.';
    if (!dest) e.pais = country === 'Otro país' ? 'Escribe tu país.' : 'Elige el país de destino.';
    if (!values.nombre.trim()) e.nombre = 'Escribe tu nombre.';
    if (!values.empresa.trim()) e.empresa = 'Escribe el nombre de tu empresa.';
    if (!values.correo.trim()) e.correo = 'Escribe tu correo.';
    else if (!EMAIL_RE.test(values.correo.trim())) e.correo = 'Revisa el formato del correo (ej. nombre@empresa.com).';
    return e;
  };

  const summary = `Marcas: ${brands.join(', ')}\nProductos: ${products.join(', ')}\nDestino: ${dest}`;
  const wa = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(`Hola Huicheng, quiero solicitar una cotización.\n${summary}`)}`;

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector(`[data-field="${first}"], [name="${first}"]`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      const payload = { ...values, marcas: brands, productos: products, pais: dest };
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        // Modo demostración: sin endpoint configurado no se envía nada.
        await new Promise((r) => setTimeout(r, 700));
      }
      setThanksName(values.nombre);
      setStatus('idle');
      window.location.hash = to('gracias');
    } catch {
      setStatus('error');
    }
  };

  const Row = ({ label, value }) => (
    <div className="qt__row">
      <span>{label}</span>
      <strong key={value || 'vacio'} className={value ? 'is-set' : undefined}>{value || '—'}</strong>
    </div>
  );

  return (
    <section id="contacto" className="section section--cream qt">
      <div className="container">
        <div className="section-head reveal">
          <Eyebrow es={CONTACT.eyebrow} zh={CONTACT.eyebrowZh} />
          <h2 className="h2 h2--sm words">{CONTACT.title}</h2>
          <p className="lead">{CONTACT.text}</p>
        </div>

        <div className="qt__grid">
          <form ref={formRef} className="qt__steps reveal" onSubmit={onSubmit} noValidate>
            <fieldset className="qt__step">
              <legend><span>01</span> Marcas</legend>
              <div className="qt__brands">
                {QUOTE.brands.map((b, i) => (
                  <button
                    key={b.key}
                    type="button"
                    data-field={i === 0 ? 'marcas' : undefined}
                    aria-pressed={brands.includes(b.key)}
                    className="qt__brand"
                    onClick={() => { setBrands((l) => toggleIn(l, b.key)); clear('marcas'); }}
                  >
                    <img src={b.logo} alt="" style={{ height: b.h }} />
                    <span className="qt__brand-name">{b.key}</span>
                  </button>
                ))}
              </div>
              {errors.marcas && <p className="field__error" role="alert">{errors.marcas}</p>}
            </fieldset>

            <fieldset className="qt__step">
              <legend><span>02</span> Productos</legend>
              <div className="qt__chips">
                {QUOTE.products.map((p, i) => (
                  <button
                    key={p}
                    type="button"
                    data-field={i === 0 ? 'productos' : undefined}
                    aria-pressed={products.includes(p)}
                    className="qt__chip"
                    onClick={() => { setProducts((l) => toggleIn(l, p)); clear('productos'); }}
                  >
                    {p}
                  </button>
                ))}
              </div>
              {errors.productos && <p className="field__error" role="alert">{errors.productos}</p>}
            </fieldset>

            <fieldset className="qt__step">
              <legend><span>03</span> País de destino</legend>
              <div className="qt__chips" role="radiogroup" aria-label="País de destino">
                {QUOTE.countries.map((c, i) => (
                  <button
                    key={c}
                    type="button"
                    role="radio"
                    data-field={i === 0 ? 'pais' : undefined}
                    aria-checked={country === c}
                    className="qt__chip"
                    onClick={() => { setCountry(c); clear('pais'); }}
                  >
                    {c}
                  </button>
                ))}
              </div>
              {country === 'Otro país' && (
                <div className="qt__other">
                  <label htmlFor="qt-otro">¿Cuál?</label>
                  <input id="qt-otro" type="text" value={other} onChange={(e) => { setOther(e.target.value); clear('pais'); }} placeholder="Escribe tu país" autoComplete="country-name" />
                </div>
              )}
              {errors.pais && <p className="field__error" role="alert">{errors.pais}</p>}
            </fieldset>

            <fieldset className="qt__step">
              <legend><span>04</span> Tus datos</legend>
              <div className="form">
                <Field id="nombre" label="Nombre" autoComplete="name" value={values.nombre} onChange={onChange} error={errors.nombre} />
                <Field id="empresa" label="Empresa" autoComplete="organization" value={values.empresa} onChange={onChange} error={errors.empresa} />
                <div className="field field--full">
                  <label htmlFor="correo">Correo</label>
                  <input id="correo" name="correo" type="email" autoComplete="email" value={values.correo} onChange={onChange} aria-invalid={errors.correo ? 'true' : undefined} aria-describedby={errors.correo ? 'correo-error' : undefined} />
                  {errors.correo && <p id="correo-error" className="field__error">{errors.correo}</p>}
                </div>
                <Field id="comentarios" label="Comentarios" optional as="textarea" rows={3} value={values.comentarios} onChange={onChange} placeholder="Cantidades, modelos o cualquier detalle que nos ayude." />
              </div>
            </fieldset>

            {status === 'error' && <p className="form__alert" role="alert">No pudimos enviar tu solicitud. Inténtalo de nuevo en unos minutos.</p>}
            <div className="qt__submit">
              <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Solicitar cotización'}
              </button>
              <a className={`qt__mail${ready ? '' : ' is-off'}`} href={ready ? wa : undefined} aria-disabled={!ready} target="_blank" rel="noopener noreferrer">
                o envíala por WhatsApp
              </a>
            </div>
          </form>

          <aside className="qt__side reveal" style={{ '--d': '120ms' }}>
            <div className="qt__sheet" data-ready={ready || undefined} aria-live="polite">
              <div className="qt__sheet-head">
                <img src="marca/logo-huicheng.svg" alt="Huicheng" width="140" height="21" />
                <span className="qt__progress" aria-label={`${stepsDone} de 3 pasos completos`}>
                  {[0, 1, 2].map((n) => <i key={n} className={n < stepsDone ? 'on' : undefined} />)}
                </span>
              </div>
              <p className="qt__title">Proforma</p>
              <p className="qt__sub">Solicitud de cotización</p>
              <Row label="Marcas" value={brands.join(', ')} />
              <Row label="Productos" value={products.join(', ')} />
              <Row label="Destino" value={dest} />
              <Row label="Empresa" value={values.empresa.trim()} />
              {!ready && <p className="qt__hint">Elige marcas, productos y destino para armar tu proforma.</p>}
            </div>

            <ul className="contact__list qt__info">
              <li><strong>Correo:</strong> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><strong>Teléfono:</strong> <a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
              <li>
                <strong>Sede:</strong> {CONTACT.address}
                <span className="contact__zh" lang="zh-Hans">{CONTACT.addressZh}</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
