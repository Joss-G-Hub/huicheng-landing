// Etiqueta de sección bilingüe: "NOSOTROS · 我们是谁"
export default function Eyebrow({ es, zh, tone }) {
  return (
    <p className={`eyebrow${tone ? ` eyebrow--${tone}` : ''}`}>
      {es}
      {zh && <span className="eyebrow__zh" lang="zh-Hans">{zh}</span>}
    </p>
  );
}
