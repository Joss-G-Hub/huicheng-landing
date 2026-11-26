import { useEffect, useState } from 'react';
import { NAV, NAV_CONTACT } from '../data/content.js';
import { to } from '../lib/router.js';

// Menú fijo arriba. Cada pestaña abre su propia página; en celular se abre como panel.
export default function Header({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cerrar el menú móvil con Escape o al pasar a escritorio.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 1025px)');
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    document.body.classList.add('no-scroll');
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
      document.body.classList.remove('no-scroll');
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href={to('inicio')} className="header__brand" onClick={close} aria-label="Huicheng, ir al inicio">
          <img src="marca/isotipo-huicheng.svg" alt="" width="37" height="40" />
          <span>HUICHENG CO</span>
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav id="menu-principal" className={`header__nav${open ? ' is-open' : ''}`} aria-label="Principal">
          <ul>
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={to(item.id)}
                  className={active === item.id ? 'is-active' : undefined}
                  aria-current={active === item.id ? 'page' : undefined}
                  onClick={close}
                >
                  <span>{item.label}</span>
                  <span className="nav__zh" lang="zh-Hans">{item.zh}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href={to(NAV_CONTACT.id)} className={`btn btn--primary btn--bi${active === NAV_CONTACT.id ? ' is-active' : ''}`} aria-current={active === NAV_CONTACT.id ? 'page' : undefined} onClick={close}>
            {NAV_CONTACT.label}<span lang="zh-Hans">{NAV_CONTACT.zh}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
