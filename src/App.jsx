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
import { PAGES } from './data/content.js';
import { useRoute } from './lib/router.js';
import { useMotion } from './lib/motion.js';

// Qué secciones muestra cada página del menú.
const SECTIONS = {
  nosotros: [About, Operations, Mission],
  portafolio: [Portfolio],
  mundo: [World, Headquarters],
  blog: [Blog],
  contacto: [Contact],
};
const PAGE_IDS = ['inicio', ...Object.keys(SECTIONS)];

export default function App() {
  const route = useRoute(PAGE_IDS);
  useMotion(route);

  useEffect(() => {
    document.title = route === 'inicio'
      ? 'Huicheng — Conectando mercados globales'
      : `${PAGES[route].title} | Huicheng`;
  }, [route]);

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <FX />
      <Header active={route} />
      <main id="contenido" key={route} className="page">
        {route === 'inicio' ? (
          <>
            <Hero />
            <ValueBand />
            <Statement />
            <SupplyChain />
            <Teasers />
            <Headquarters />
            <CtaBand />
          </>
        ) : (
          <>
            <PageHero page={PAGES[route]} />
            {SECTIONS[route].map((S, i) => <S key={i} />)}
            {route !== 'contacto' && <CtaBand />}
          </>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
