import { POSTS } from '../data/content.js';
import Eyebrow from './Eyebrow.jsx';

export default function Blog() {
  return (
    <section id="blog" className="section section--tight-bottom">
      <div className="container">
        <div className="blog__head">
          <div>
            <Eyebrow es="BLOG" zh="博客" />
            <h2 className="h2 h2--sm words">Noticias de la cadena de suministro</h2>
          </div>
        </div>

        <div className="posts">
          {POSTS.map((p, i) => (
            <article key={i} data-tilt className="post reveal" style={{ '--d': `${i * 100}ms` }}>
              <a href={p.href} className="post__link">
                {p.image ? (
                  <img src={p.image} alt="" loading="lazy" width="400" height="200" />
                ) : (
                  <div className="post__ph" aria-hidden="true">[Imagen de la publicación]</div>
                )}
                <div className="post__body">
                  <p className="post__meta">{p.meta}</p>
                  <h3>{p.title}</h3>
                  {p.excerpt && <p className="post__excerpt">{p.excerpt}</p>}
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
