import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ValueBand from './components/ValueBand.jsx';
import Teasers from './components/Teasers.jsx';
import PageHero from './components/PageHero.jsx';
import About from './components/About.jsx';
import Operations from './components/Operations.jsx';
import Mission from './components/Mission.jsx';
import Portfolio from './components/Portfolio.jsx';
import World from './components/World.jsx';
import Headquarters from './components/Headquarters.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import CtaBand from './components/CtaBand.jsx';
import Footer from './components/Footer.jsx';
import FX from './components/FX.jsx';
import SupplyChain from './components/SupplyChain.jsx';
import Statement from './components/Statement.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import BackToTop from './components/BackToTop.jsx';
import Loader from './components/Loader.jsx';
import Curtain from './components/Curtain.jsx';
import NotFound from './components/NotFound.jsx';
import Thanks from './components/Thanks.jsx';
import BrandStrip from './components/BrandStrip.jsx';
import Process from './components/Process.jsx';
import Quality from './components/Quality.jsx';
import Gallery from './components/Gallery.jsx';
import Faq from './components/Faq.jsx';
import Lightbox from './components/Lightbox.jsx';
import { PAGES } from './data/content.js';
import { useRoute } from './lib/router.js';
import { useMotion } from './lib/motion.js';
import { usePageTransition } from './lib/transition.js';

// Qué secciones muestra cada página del menú.
const SECTIONS = {
  nosotros: [About, Operations, Process, Quality, Gallery, Mission],
  portafolio: [Portfolio],
  mundo: [World, Headquarters],
  blog: [Blog],
  contacto: [Contact, Faq],
};
// 'gracias' no aparece en el menú: se llega después de enviar el formulario.
const PAGE_IDS = ['inicio', ...Object.keys(SECTIONS), 'gracias'];

export default function App() {
  const target = useRoute(PAGE_IDS);
  // "route" es la página que se ve; cambia cuando la cortina tapa la pantalla.
  const [route, phase] = usePageTransition(target);
  useMotion(route);

  useEffect(() => {
    document.title = route === 'inicio'
      ? 'Huicheng — Conectando mercados globales'
      : route === '404'
        ? 'Página no encontrada | Huicheng'
        : route === 'gracias'
          ? '¡Gracias! | Huicheng'
        : `${PAGES[route].title} | Huicheng`;
  }, [route]);

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Loader />
      <Curtain phase={phase} />
      <FX />
      <Header active={target} />
      <main id="contenido" key={route} className="page">
        {route === 'inicio' ? (
          <>
            <Hero />
            <ValueBand />
            <Statement />
            <SupplyChain />
            <BrandStrip />
            <Teasers />
            <Headquarters />
            <CtaBand />
          </>
        ) : route === '404' ? (
          <NotFound />
        ) : route === 'gracias' ? (
          <Thanks />
        ) : (
          <>
            <PageHero page={PAGES[route]} />
            {SECTIONS[route].map((S, i) => <S key={i} />)}
            {route !== 'contacto' && <CtaBand />}
          </>
        )}
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <Lightbox />
    </>
  );
}
