import { NAV, NAV_CONTACT, CONTACT } from '../data/content.js';
import { to } from '../lib/router.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="marca/logo-huicheng-bilingue-negativo.svg" alt="Huicheng 辉程贸易" width="260" height="66" />
            <p>Importa con nosotros.</p>
          </div>
          <nav aria-label="Pie de página">
            <ul>
              {[{ id: 'inicio', label: 'Inicio' }, ...NAV, NAV_CONTACT].map((n) => (
                <li key={n.id}><a href={to(n.id)}>{n.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        <ul className="footer__contact">
          <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
          <li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
          <li>Guangzhou, Guangdong, China</li>
        </ul>
        <div className="footer__bottom">
          <span>PROPIEDAD EXCLUSIVA DE HUICHENG © {new Date().getFullYear()}</span>
          <span>Manufactura · Abastecimiento · Exportación</span>
        </div>
      </div>
    </footer>
  );
}
