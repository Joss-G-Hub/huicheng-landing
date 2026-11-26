import { WORLD } from '../data/content.js';

// Mapa de puntos con la sede en China y rutas animadas hacia cada mercado.
// Los puntos del mapa salen de public/img/mapa-puntos.svg (mismo tamaño: 2200 × 1154).
// Pasar el mouse (o tocar) un país lo resalta aquí y en su tarjeta.
const curve = (a, b, lift) => {
  const cx = (a.x + b.x) / 2;
  const cy = Math.min(a.y, b.y) - lift;
  return `M${a.x} ${a.y} Q${cx} ${cy} ${b.x} ${b.y}`;
};

export default function WorldMap({ active, onActive }) {
  const hub = WORLD.countries.find((c) => c.hub);
  const markets = WORLD.countries.filter((c) => !c.hub);

  return (
    <div className="wmap reveal" onMouseLeave={() => onActive(null)}>
      <svg viewBox="0 0 2200 1154" role="group" aria-label="Mapa de presencia de Huicheng: sede en China y mercados en México, Cuba y Ecuador">
        <image href="img/mapa-puntos.svg" width="2200" height="1154" pointerEvents="none" />

        {markets.map((m, i) => {
          const d = curve(hub, m, m.lift);
          const on = active === m.name;
          return (
            <g key={m.name} className={`wmap__route${on ? ' is-on' : ''}`}>
              <path d={d} className="wmap__line" pathLength="1000" />
              <path d={d} className="wmap__comet" pathLength="1000" style={{ '--dl': `${i * -1.1}s` }} />
            </g>
          );
        })}

        {WORLD.countries.map((c) => {
          const on = active === c.name;
          return (
            <g
              key={c.name}
              className={`wmap__pin${c.hub ? ' wmap__pin--hub' : ''}${on ? ' is-on' : ''}`}
              transform={`translate(${c.x} ${c.y})`}
              tabIndex={0}
              role="button"
              aria-pressed={on}
              aria-label={`${c.name}: ${c.role}`}
              onMouseEnter={() => onActive(c.name)}
              onFocus={() => onActive(c.name)}
              onBlur={() => onActive(null)}
              onClick={() => onActive(on ? null : c.name)}
            >
              <circle className="wmap__hit" r="60" />
              <circle className="wmap__pulse" r="18" />
              <circle className="wmap__dot" r={c.hub ? 18 : 13} />
              <text className="wmap__label" x={c.lx} y={c.ly} textAnchor={c.anchor || 'middle'}>
                {c.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
