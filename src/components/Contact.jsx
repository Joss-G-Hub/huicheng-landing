import { useRef, useState } from 'react';
import { CONTACT, FORM_ENDPOINT } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';
import { to } from '../lib/router.js';
import { setThanksName } from '../lib/thanks.js';

const EMPTY = { nombre: '', empresa: '', pais: '', correo: '', mensaje: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const e = {};
  if (!v.nombre.trim()) e.nombre = 'Escribe tu nombre.';
  if (!v.empresa.trim()) e.empresa = 'Escribe el nombre de tu empresa.';
  if (!v.pais.trim()) e.pais = 'Indica tu país.';
  if (!v.correo.trim()) e.correo = 'Escribe tu correo.';
  else if (!EMAIL_RE.test(v.correo.trim())) e.correo = 'Revisa el formato del correo (ej. nombre@empresa.com).';
  if (v.mensaje.trim().length < 10) e.mensaje = 'Cuéntanos un poco más (mínimo 10 caracteres).';
  return e;
}

function Field({ id, label, error, as = 'input', ...rest }) {
  const Tag = as;
  return (
    <div className={`field${as === 'textarea' ? ' field--full' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <Tag
        id={id}
        name={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && <p id={`${id}-error`} className="field__error">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const formRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        // Modo demostración: sin endpoint configurado no se envía nada.
        await new Promise((r) => setTimeout(r, 700));
      }
      // Enviado: lleva a la página de Gracias (#/gracias).
      setThanksName(values.nombre);
      setValues(EMPTY);
      setStatus('idle');
      window.location.hash = to('gracias');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="section section--contact">
      <div className="container">
        <div className="contact">
          <div className="contact__info reveal">
            <Eyebrow es={CONTACT.eyebrow} zh={CONTACT.eyebrowZh} />
            <h2 className="h2 h2--sm">{CONTACT.title}</h2>
            <p className="lead">{CONTACT.text}</p>
            <ul className="contact__list">
              <li><strong>Correo:</strong> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><strong>Teléfono:</strong> <a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
              <li>
                <strong>Sede:</strong> {CONTACT.address}
                <span className="contact__zh" lang="zh-Hans">{CONTACT.addressZh}</span>
              </li>
            </ul>
          </div>

          {status === 'sent' ? (
            <div className="contact__done" role="status">
              <img src="marca/isotipo-huicheng.svg" alt="" width="46" height="50" />
              <h3>¡Gracias! Recibimos tu solicitud.</h3>
              <p>Nuestro equipo te escribirá con la cotización.</p>
              {!FORM_ENDPOINT && (
                <p className="contact__demo">Modo demostración: el formulario aún no está conectado a un correo, así que no se envió nada.</p>
              )}
              <button type="button" className="btn btn--outline" onClick={() => setStatus('idle')}>Enviar otra solicitud</button>
            </div>
          ) : (
            <form ref={formRef} className="form" onSubmit={onSubmit} noValidate>
              <Field id="nombre" label="Nombre" autoComplete="name" value={values.nombre} onChange={onChange} error={errors.nombre} />
              <Field id="empresa" label="Empresa" autoComplete="organization" value={values.empresa} onChange={onChange} error={errors.empresa} />
              <Field id="pais" label="País" autoComplete="country-name" value={values.pais} onChange={onChange} error={errors.pais} />
              <Field id="correo" label="Correo" type="email" autoComplete="email" value={values.correo} onChange={onChange} error={errors.correo} />
              <Field id="mensaje" label="¿Qué productos o marcas te interesan?" as="textarea" rows={4} value={values.mensaje} onChange={onChange} error={errors.mensaje} />
              {status === 'error' && (
                <p className="form__alert" role="alert">No pudimos enviar tu solicitud. Inténtalo de nuevo en unos minutos.</p>
              )}
              <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Solicitar cotización'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
