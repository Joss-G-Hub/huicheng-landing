import { HQ } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

export default function Headquarters() {
  return (
    <section className="hq" aria-label="Nuestra sede">
      <img className="hq__img" data-speed="0.1" src={HQ.image} alt="Recepción de la oficina de Huicheng con el logotipo en la pared" loading="lazy" width="1920" height="817" />
      <div className="container hq__content reveal">
        <Eyebrow es={HQ.eyebrow} zh={HQ.eyebrowZh} tone="gold" />
        <h2 className="hq__title">{HQ.title}</h2>
        <p className="hq__text">{HQ.text}</p>
      </div>
    </section>
  );
}
