// Todo el texto de la landing vive aquí, para editarlo sin tocar los componentes.
// Fuentes: Manual de Identidad Corporativa Huicheng 2026 y el sitio actual https://huicheng-global.com
// Los textos en chino marcados con (*) son traducciones nuevas: la empresa debe revisarlos.

export const NAV = [
  { id: 'nosotros', label: 'Nosotros', zh: '我们是谁' },
  { id: 'portafolio', label: 'Portafolio', zh: '产品组合' },          // (*)
  { id: 'mundo', label: 'Mundo Huicheng', zh: '辉程世界' },           // (*) el sitio usa 汇成世界; el logo usa 辉程
  { id: 'blog', label: 'Blog', zh: '博客' },
];
export const NAV_CONTACT = { id: 'contacto', label: 'Contacto', zh: '联系我们' }; // (*) el sitio usa 接触

export const HERO = {
  tagline: 'Supera tus límites',
  taglineZh: '超越你的极限',
  kicker: 'CONECTANDO',
  title: 'MERCADOS GLOBALES',
  text: 'Exportamos repuestos y accesorios de alta calidad para motocicletas, exclusivamente para distribuidores de todo el mundo.',
  primary: { label: 'Quiero ser distribuidor', href: '#/contacto' },
  secondary: { label: 'Ver portafolio', href: '#/portafolio' },
};

// Banda roja bajo la portada (fortalezas citadas en huicheng-global.com)
export const VALUES = [
  { title: 'Respuesta rápida', zh: '快速响应', text: 'Atención comercial ágil para distribuidores.' },
  { title: 'Entregas a tiempo', zh: '准时交付', text: 'Cumplimiento riguroso en cada embarque.' },
  { title: 'Soporte postventa', zh: '售后支持', text: 'Acompañamiento después de cada compra.' },
];

export const HQ = {
  eyebrow: 'NUESTRA SEDE',
  eyebrowZh: '我们的办公室',
  title: 'Guangzhou, China',
  text: 'Desde nuestra oficina en el distrito Baiyun gestionamos la operación logística, comercial y postventa con nuestros aliados distribuidores.',
  image: 'img/oficina-sede.webp',
};

export const ABOUT = {
  eyebrow: 'NOSOTROS',
  eyebrowZh: '我们是谁',
  title: 'La columna vertebral de la corporación.',
  text: 'Nos especializamos en la exportación de repuestos y accesorios de alta calidad para motocicletas, dirigidos exclusivamente a distribuidores. Con 9 años de trayectoria, hemos consolidado relaciones estratégicas en distintas regiones del mundo gracias a nuestra capacidad de respuesta, el cumplimiento en los tiempos de entrega y el soporte postventa.',
  stats: [
    { value: '9', label: 'años de trayectoria' },
    { value: '4', label: 'mercados clave: China, Ecuador, México y Cuba' },
    { value: '3', label: 'regiones: América Latina, Asia y Europa' },
  ],
  milestones: [
    {
      year: '2017',
      title: 'El génesis operativo',
      text: 'Huicheng surge impulsada por la consolidación de nuestras operaciones en mercados clave como Ecuador y México, respaldada por el éxito de nuestra marca de repuestos de motocicletas, Xuri.',
    },
    {
      year: '2026',
      title: 'El eje de la cadena de compra',
      text: 'Nos consolidamos como el núcleo que controla directamente la cadena de suministro, desde la producción hasta la distribución a los diferentes mercados.',
    },
    {
      year: 'FUTURO',
      title: 'Plataforma integral',
      text: 'Una plataforma integral y tecnológica que conecta de manera directa y automatizada a las fábricas con los mercados, dinamizando redes de valor globales.',
      highlight: true,
    },
  ],
};

export const OPERATIONS = {
  eyebrow: 'CÓMO OPERAMOS',
  eyebrowZh: '运营模式', // (*)
  title: 'Tres trazos que conectan origen y destino.',
  text: 'Nuestro isotipo es un esquema exacto de la cadena de suministro: la manufactura de origen, la plataforma operativa y los mercados de destino.',
  pillars: [
    { title: 'Fábricas', zh: '工厂', text: 'Control directo de la manufactura y gestión integral de la producción desde el punto de origen.' },
    { title: 'Ecosistema', zh: '生态系统', text: 'Plataforma tecnológica y operativa que integra, audita y optimiza toda la cadena de valor.' },
    { title: 'Mercados', zh: '市场', text: 'Dinamización de redes de valor globales y posicionamiento estratégico de nuestro portafolio de marcas.' },
  ],
  photos: [
    { src: 'img/chaleco-inspeccion.webp', alt: 'Chaleco de seguridad Huicheng para inspección en planta', strong: 'Auditoría en origen.', text: 'Validación de calidad antes de embarcar la mercancía.' },
    { src: 'img/embalaje.webp', alt: 'Caja de embalaje logístico con el logotipo de Huicheng', strong: 'Exportación.', text: 'Embalaje logístico para transporte internacional.' },
  ],
};

export const PORTFOLIO = {
  eyebrow: 'PORTAFOLIO DE MARCAS',
  eyebrowZh: '品牌组合', // (*)
  title: 'Un ecosistema global de marcas.',
  text: 'Una arquitectura híbrida que proyecta solidez industrial, potencia múltiples segmentos de mercado y asegura la rentabilidad de cada unidad de negocio.',
  main: {
    logo: 'marca/marca-xuri-motos.svg',
    name: 'Xuri Motos',
    link: 'https://xurisa.com',
    text: 'El pilar comercial de cara al consumidor. De Xuri Motos se desprenden submarcas que capitalizan su prestigio y estándar de calidad.',
    subbrands: [
      { name: 'Xuri Motos Premium', text: 'Repuestos de alta rotación y volumen.' },
      { name: 'Xuri Motos Racing', text: 'Línea técnica de rendimiento y performance.' },
      { name: 'Xuri Motos Tires', text: 'Llantas y accesorios relacionados.' },
      { name: 'Xurimotos', text: 'Motores y soluciones mecánicas.' },
    ],
  },
  independent: [
    { logo: 'marca/marca-orijinaru.svg', name: 'Orijinaru', text: 'Repuestos genuinos y precisión técnica.', h: 60 },
    { logo: 'marca/marca-horux.svg', name: 'Horux', text: 'Indumentaria, lifestyle y cultura rider.', h: 56 },
    { logo: 'marca/marca-accexuri.svg', name: 'Accexuri', text: 'Accesorios y desarrollo de nuevos productos, con sus submarcas Pro y Xtreme.', link: 'https://accexuri.com', wide: true },
  ],
};

// Sección "Mundo Huicheng": basada en el texto del sitio actual (página Mundo Huicheng / XURI World).
// x / y: posición de cada país en el mapa de puntos (2200 × 1154). lift: altura de la curva de la ruta.
export const WORLD = {
  eyebrow: 'MUNDO HUICHENG',
  eyebrowZh: '辉程世界', // (*)
  title: 'La calidad no conoce fronteras.',
  text: 'Nuestras marcas están presentes en América Latina, Asia y Europa, respaldadas por una red sólida de aliados comerciales y un equipo comprometido con el soporte logístico y postventa.',
  countries: [
    { name: 'China', zh: '中国', hub: true, x: 1708, y: 612, lx: 0, ly: -48, role: 'Base de innovación tecnológica y manufactura. Desde nuestra sede en Guangzhou gestionamos la operación logística, comercial y postventa.' },
    { name: 'Ecuador', zh: '厄瓜多尔', x: 590, y: 758, lift: 160, lx: 38, ly: 62, anchor: 'start', role: 'Lideramos el mercado con distribución nacional, patrocinios deportivos y cercanía con el consumidor final.' },
    { name: 'México', zh: '墨西哥', x: 505, y: 625, lift: 430, lx: -34, ly: -34, anchor: 'end', role: 'Trabajamos de la mano con importadores mayoristas y distribuidores clave.' },
    { name: 'Cuba', zh: '古巴', x: 602, y: 612, lift: 300, lx: 40, ly: 14, anchor: 'start', role: 'Nuestros productos se han ganado la confianza de los motociclistas por su resistencia y durabilidad.' },
  ],
};

export const MISSION = [
  { title: 'Misión', zh: '使命', text: 'Conectar la fabricación de alta calidad con los mercados globales mediante una plataforma integrada de productos, logística, tecnología y servicios, para impulsar el crecimiento sostenible de distribuidores e importadores con soluciones eficientes, transparentes y rentables.' },
  { title: 'Visión', zh: '愿景', text: 'Convertirnos en la plataforma de cadena de suministro más confiable de América Latina para el mercado de posventa de motocicletas y sus refacciones.' },
];

// Publicaciones del blog: contenido de EJEMPLO, redactado a partir de lo que hace la
// empresa. Reemplazar por las publicaciones reales cuando la empresa las entregue.
export const POSTS = [
  {
    image: 'img/chaleco-inspeccion.webp',
    meta: 'Nov 2026 · Calidad',
    title: 'Así inspeccionamos cada lote antes del embarque',
    excerpt: 'Revisamos producto, cantidades y empaque en origen para que tu mercadería llegue tal como la pediste.',
    href: '#/contacto',
  },
  {
    image: 'img/embalaje.webp',
    meta: 'Oct 2026 · Logística',
    title: 'Embalaje de exportación: cómo protegemos tu carga',
    excerpt: 'Cajas reforzadas, etiquetado bilingüe y consolidación para reducir daños y costos en el viaje.',
    href: '#/contacto',
  },
  {
    image: 'img/productos-repuestos.webp',
    meta: 'Sep 2026 · Productos',
    title: 'Repuestos y accesorios: qué ofrece nuestro portafolio',
    excerpt: 'Un recorrido por las marcas del grupo y las líneas de producto disponibles para distribuidores.',
    href: '#/portafolio',
  },
];

export const CONTACT = {
  eyebrow: 'CONTACTO',
  eyebrowZh: '联系我们', // (*)
  title: '¿Eres distribuidor o importador?',
  text: 'Importa con nosotros. Cuéntanos qué necesitas y te enviamos una cotización con términos de pago y logística de exportación claros.',
  // Datos tomados de https://huicheng-global.com
  email: 'huicheng_group@outlook.com',
  phone: '+86 181 0251 3690',
  phoneHref: 'tel:+8618102513690',
  address: 'Calle Qianhai No. 3, Torre C, Oficina 101, distrito Baiyun, Guangzhou, Guangdong, China',
  addressZh: '广东省广州市白云区钱海街3号C栋101室',
};

// Dirección a la que se envía el formulario (por ejemplo un endpoint de Formspree,
// Getform o el backend de la empresa). Mientras esté vacía, el formulario funciona
// en modo demostración: valida los datos y muestra el mensaje de éxito sin enviar nada.
export const FORM_ENDPOINT = '';

// ---------- Páginas (cada pestaña del menú abre su propia página) ----------
export const PAGES = {
  nosotros: { title: 'Nosotros', zh: '我们是谁', text: 'La columna vertebral de la corporación: manufactura, abastecimiento y exportación desde Guangzhou.', image: 'img/oficina-sede.webp' },
  portafolio: { title: 'Portafolio', zh: '产品组合', text: 'Un ecosistema global de marcas para el mercado de posventa de motocicletas.', image: 'img/productos-repuestos.webp' },
  mundo: { title: 'Mundo Huicheng', zh: '辉程世界', text: 'Presencia en América Latina, Asia y Europa con una red sólida de aliados comerciales.', image: 'img/hero-mapa.webp', map: true },
  blog: { title: 'Blog', zh: '博客', text: 'Noticias de la cadena de suministro, calidad y logística de exportación.', image: 'img/embalaje.webp' },
  contacto: { title: 'Contacto', zh: '联系我们', text: '¿Eres distribuidor o importador? Escríbenos y te enviamos una cotización.', image: 'img/chaleco-inspeccion.webp' },
};

// Adelantos que aparecen en Inicio, con botón "Ver más" hacia cada página.
export const TEASERS = [
  { id: 'nosotros', title: 'Nosotros', zh: '我们是谁', text: 'Nuestra historia, cómo operamos y nuestra misión y visión.', image: 'img/oficina-sede.webp' },
  { id: 'portafolio', title: 'Portafolio', zh: '产品组合', text: 'Xuri Motos y las marcas independientes del grupo.', image: 'img/productos-repuestos.webp' },
  { id: 'mundo', title: 'Mundo Huicheng', zh: '辉程世界', text: 'China, Ecuador, México y Cuba: dónde estamos y qué hacemos.', image: 'img/hero-mapa.webp', map: true },
  { id: 'blog', title: 'Blog', zh: '博客', text: 'Calidad, embalaje y novedades de nuestro portafolio.', image: 'img/chaleco-inspeccion.webp' },
];

export const CTA = {
  title: 'Importa con nosotros.',
  zh: '与我们一起进口',
  text: 'Cotizaciones con términos de pago y logística de exportación claros.',
  button: 'Quiero ser distribuidor',
};

// ---------- Efectos de Inicio ----------
// Cadena de suministro: el isotipo se dibuja trazo por trazo al hacer scroll (sección fijada).
export const CHAIN = {
  eyebrow: 'CADENA DE SUMINISTRO',
  zh: '供应链',
  title: 'Del origen al destino.',
  steps: [
    { title: 'Fábricas', zh: '工厂', text: 'Control directo de la manufactura y gestión integral de la producción desde el punto de origen.' },
    { title: 'Ecosistema', zh: '生态系统', text: 'Plataforma tecnológica y operativa que integra, audita y optimiza toda la cadena de valor.' },
    { title: 'Mercados', zh: '市场', text: 'Redes de valor globales y posicionamiento estratégico de nuestro portafolio de marcas.' },
  ],
};

// Frase de la misión que se enciende palabra por palabra con el scroll.
export const STATEMENT = {
  text: 'Conectamos la fabricación de alta calidad con los mercados globales.',
  zh: '连接优质制造与全球市场',
};

// ---------- Botón flotante de WhatsApp ----------
// Número tomado de https://huicheng-global.com. Cambiar si la empresa usa otro para WhatsApp.
export const WHATSAPP = {
  number: '8618102513690',
  message: 'Hola Huicheng, quiero información para ser distribuidor.',
};

// Banda de logos en movimiento (Inicio).
export const BRAND_STRIP = {
  title: 'Nuestras marcas',
  zh: '我们的品牌', // (*)
  logos: [
    { name: 'Xuri Motos', logo: 'marca/marca-xuri-motos.svg', h: 46 },
    { name: 'Orijinaru', logo: 'marca/marca-orijinaru.svg', h: 52 },
    { name: 'Horux', logo: 'marca/marca-horux.svg', h: 44 },
    { name: 'Accexuri', logo: 'marca/marca-accexuri.svg', h: 26 },
  ],
};

// Página 404 (dirección que no existe).
export const NOT_FOUND = {
  zh: '页面未找到', // (*)
  title: 'Esta ruta no está en nuestro mapa.',
  text: 'La página que buscas no existe o cambió de dirección. Vuelve al inicio o escríbenos y te ayudamos.',
};

// Página de Gracias (después de enviar el formulario).
export const THANKS = {
  zh: '谢谢', // (*)
  title: '¡Gracias por escribirnos!',
  text: 'Recibimos tu solicitud de cotización. Nuestro equipo comercial la revisará y te responderá al correo que nos dejaste.',
  demo: 'Modo demostración: el formulario aún no está conectado a un correo, así que no se envió nada.',
  steps: [
    { title: 'Revisamos tu solicitud', zh: '审核', text: 'Analizamos los productos y marcas que te interesan.' },
    { title: 'Preparamos tu cotización', zh: '报价', text: 'Con términos de pago y logística de exportación claros.' },
    { title: 'Te contactamos', zh: '联系', text: 'Te escribimos para resolver dudas y coordinar el siguiente paso.' },
  ],
};

// ---------- Cómo trabajamos (Inicio y Nosotros) ----------
// Imágenes tomadas de las aplicaciones del Manual Huicheng 2026.
export const PROCESS = {
  eyebrow: 'CÓMO TRABAJAMOS',
  eyebrowZh: '合作流程', // (*)
  title: 'De tu pedido a tu bodega.',
  text: 'Un proceso claro en cuatro pasos, con documentación y control en cada etapa.',
  steps: [
    { key: 'cotizacion', title: 'Cotización', zh: '报价', img: 'img/proforma.webp', w: 707, h: 1000,
      text: 'Nos cuentas qué productos y marcas necesitas y te enviamos una proforma con precios, términos de pago y condiciones de exportación.' },
    { key: 'inspeccion', title: 'Inspección de calidad', zh: '质检', img: 'img/inspeccion-tablet.webp', w: 721, h: 1000,
      text: 'Antes de embarcar, la mercancía se revisa en origen y el resultado queda registrado en un informe de inspección técnica.' },
    { key: 'embalaje', title: 'Embalaje', zh: '包装', img: 'img/caja.webp', w: 1000, h: 826,
      text: 'Empacamos en cajas y cintas con la identidad Huicheng, pensadas para proteger el producto durante el transporte internacional.' },
    { key: 'envio', title: 'Envío', zh: '发货', img: null,
      text: 'Coordinamos la logística de exportación desde China hasta el mercado de destino, con acompañamiento comercial y postventa.' },
  ],
};

// ---------- Calidad garantizada (Nosotros) ----------
// Puntos de control tomados del "Informe de Inspección Técnica" del manual.
export const QUALITY = {
  eyebrow: 'CALIDAD GARANTIZADA',
  eyebrowZh: '品质保证', // (*)
  title: 'Nada sale sin pasar inspección.',
  text: 'Cada pedido se revisa en origen con nuestro informe de inspección técnica, con evidencia fotográfica y un estado final claro antes del embarque.',
  checks: ['Dimensiones', 'Peso', 'Acabado', 'Prueba de resistencia', 'Prueba de caída'],
  fails: ['Acabado', 'Prueba de caída'], // solo para mostrar cómo se ve un rechazo
  approved: { label: 'Aprobado', en: 'APPROVED', note: 'Todos los puntos cumplen: la mercancía queda lista para embalaje y envío.' },
  rejected: { label: 'Rechazado', en: 'REJECTED', note: 'Si un punto no cumple, se reporta con evidencia antes del embarque.' },
};

// ---------- Galería "Huicheng por dentro" (Nosotros) ----------
// photo: true = foto a sangre; si no, producto recortado sobre fondo claro.
export const GALLERY = {
  eyebrow: 'HUICHENG POR DENTRO',
  eyebrowZh: '走进辉程', // (*)
  title: 'Una identidad que se vive.',
  text: 'Así se ve Huicheng en la oficina, en el equipo de trabajo y en cada envío.',
  filters: [
    { key: 'todas', label: 'Todas' },
    { key: 'equipo', label: 'Equipo' },
    { key: 'embalaje', label: 'Embalaje' },
    { key: 'merch', label: 'Merchandising' },
    { key: 'oficina', label: 'Oficina' },
  ],
  items: [
    { src: 'img/senaletica.webp', w: 1000, h: 819, title: 'Señalética corporativa', cat: 'oficina', photo: true },
    { src: 'img/camisa.webp', w: 594, h: 1000, title: 'Camisa ejecutiva', cat: 'equipo' },
    { src: 'img/caja.webp', w: 1000, h: 826, title: 'Caja de embalaje', cat: 'embalaje' },
    { src: 'img/tote.webp', w: 563, h: 1000, title: 'Tote bag', cat: 'merch' },
    { src: 'img/chaleco.webp', w: 666, h: 1000, title: 'Chaleco de seguridad', cat: 'equipo' },
    { src: 'img/presentacion.webp', w: 1000, h: 672, title: 'Presentación corporativa', cat: 'oficina', photo: true },
    { src: 'img/gorra.webp', w: 1000, h: 652, title: 'Gorra corporativa', cat: 'merch' },
    { src: 'img/cintas.webp', w: 1000, h: 395, title: 'Cintas de embalaje', cat: 'embalaje' },
    { src: 'img/casco.webp', w: 1000, h: 719, title: 'Casco de protección', cat: 'equipo' },
    { src: 'img/libreta.webp', w: 661, h: 1000, title: 'Libreta ejecutiva', cat: 'merch' },
    { src: 'img/tarjetas.webp', w: 1000, h: 990, title: 'Tarjeta digital y física', cat: 'oficina' },
    { src: 'img/credencial.webp', w: 862, h: 1000, title: 'Credencial corporativa', cat: 'equipo' },
    { src: 'img/termo.webp', w: 397, h: 1000, title: 'Termo metálico', cat: 'merch' },
    { src: 'img/oficina-sede.webp', w: 1920, h: 817, title: 'Sede en Guangzhou', cat: 'oficina', photo: true },
    { src: 'img/camiseta.webp', w: 811, h: 1000, title: 'Camiseta promocional', cat: 'merch' },
    { src: 'img/lanyard.webp', w: 1000, h: 692, title: 'Portacredencial', cat: 'merch' },
  ],
};

// ---------- Cotizador rápido (Contacto) ----------
export const QUOTE = {
  eyebrow: 'COTIZADOR RÁPIDO',
  eyebrowZh: '快速报价', // (*)
  title: 'Arma tu solicitud en 3 pasos.',
  text: 'Elige marcas, productos y destino. Te armamos el mensaje para que lo envíes por WhatsApp o por correo.',
  brands: [
    { key: 'Xuri Motos', logo: 'marca/marca-xuri-motos.svg', h: 34 },
    { key: 'Orijinaru', logo: 'marca/marca-orijinaru.svg', h: 40 },
    { key: 'Horux', logo: 'marca/marca-horux.svg', h: 34 },
    { key: 'Accexuri', logo: 'marca/marca-accexuri.svg', h: 18 },
  ],
  products: ['Repuestos', 'Motores', 'Llantas', 'Accesorios', 'Indumentaria'],
  countries: ['México', 'Ecuador', 'Cuba', 'Otro país'],
};

// ---------- Preguntas frecuentes (Contacto) ----------
export const FAQ = {
  eyebrow: 'PREGUNTAS FRECUENTES',
  eyebrowZh: '常见问题', // (*)
  title: 'Antes de importar con nosotros.',
  items: [
    { q: '¿Cómo solicito una cotización?', a: 'Usa el cotizador rápido o el formulario de esta página. Te respondemos con una proforma que incluye precios, términos de pago y condiciones de exportación.' },
    { q: '¿Puedo ser distribuidor de sus marcas?', a: 'Sí. Trabajamos con distribuidores e importadores. Escríbenos con los datos de tu empresa y tu mercado, y te contamos las condiciones.' },
    { q: '¿A qué países exportan?', a: 'Hoy tenemos presencia en México, Cuba y Ecuador, y nuestras marcas llegan a América Latina, Asia y Europa. Si tu país no está en la lista, escríbenos y revisamos la logística.' },
    { q: '¿Cómo controlan la calidad?', a: 'La mercancía se revisa en origen antes del embarque y el resultado queda registrado en un informe de inspección técnica con evidencia fotográfica.' },
    { q: '¿Qué marcas manejan?', a: 'Xuri Motos y sus submarcas, Orijinaru, Horux y Accexuri: repuestos, motores, llantas, accesorios e indumentaria para motociclistas.' },
  ],
};
