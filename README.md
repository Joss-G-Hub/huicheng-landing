# Landing Huicheng

Landing page de Huicheng hecha en React + Vite, siguiendo el
Manual de Identidad Corporativa Huicheng 2026.

## Cómo correrla

Necesitas Node.js 18 o superior.

```bash
npm install
npm run dev       # abre http://localhost:5173
npm run build     # genera la carpeta dist/ lista para subir a cualquier hosting
```

## Dónde está cada cosa

| Archivo | Qué contiene |
|---|---|
| `src/data/content.js` | **Todos los textos.** Para cambiar un párrafo, correo o teléfono, edita solo este archivo. |
| `src/components/` | Una pieza por sección: `Header`, `Hero`, `About` (Nosotros), `Operations` (Cómo operamos), `Portfolio`, `Mission`, `Blog`, `Contact`, `Footer`. |
| `src/styles.css` | Colores, tipografías y medidas. Los colores del manual están arriba como variables (`--rojo`, `--negro`, `--mostaza`…). |
| `public/marca/` | Logos en SVG extraídos del manual (Huicheng, Xuri Motos, Orijinaru, Horux, Accexuri). |
| `public/img/` | Fotos en .webp. |

## Funciones

- Menú fijo que resalta la sección visible y baja con desplazamiento suave.
- Menú desplegable en celular (se cierra con Escape, al elegir una opción o al pasar a escritorio).
- Formulario de contacto con validación de cada campo, aviso de correo mal escrito y mensajes de envío, éxito y error.
- Accesible: enlace "Saltar al contenido", foco visible, etiquetas en los campos, textos alternativos.

## Pendiente antes de publicar

1. **Conectar el formulario.** En `src/data/content.js`, pon en `FORM_ENDPOINT` la dirección que
   recibirá los mensajes (por ejemplo un formulario de Formspree o el backend de la empresa).
   Mientras esté vacío, el formulario funciona en **modo demostración**: valida y muestra
   "¡Gracias!", pero no envía nada (lo avisa en pantalla).
2. **Datos de contacto:** se usan los del sitio actual https://huicheng-global.com
   (huicheng_group@outlook.com, +86 181 0251 3690, sede en Guangzhou).
3. **Textos en chino:** los marcados con (*) en `content.js` son traducciones nuevas y
   deben ser revisados por la empresa. Ojo: el sitio actual escribe 汇成 y el logo 辉程.
4. **Blog:** reemplazar las tres publicaciones de ejemplo en `POSTS`.
5. **Mapa de la portada:** `hero-mapa.webp` es un recorte del boceto del manual y ya trae el logo.
   Si la empresa entrega el mapa sin logo, colócalo y pon encima `marca/logo-huicheng-bilingue.svg`.
   El mapa solo resalta México y Ecuador; faltan China y Cuba.
6. **Tono de rojo:** la web usa `#AE192F` (Pantone 186C según el manual); el logo usa `#CC122C`.
   Confirmar con la empresa cuál es el oficial para la web.
7. **Fuentes:** Gotham Bold Italic y Aloevera (de pago) se reemplazaron por Poppins ExtraBold Italic.

## Páginas y movimiento (actualización)

- **Páginas separadas:** cada pestaña del menú abre su propia página (`#/nosotros`, `#/portafolio`,
  `#/mundo`, `#/blog`, `#/contacto`). Inicio muestra un resumen con botones "Ver más".
  El enrutador está en `src/lib/router.js` (sin librerías extra) y funciona en cualquier hosting estático.
  Qué secciones tiene cada página se define en `src/App.jsx` (objeto `SECTIONS`).
- **Parallax:** `src/lib/motion.js`. Añade `data-speed="0.2"` a un elemento para que se mueva a otra
  velocidad al hacer scroll, `--depth` para que siga al mouse, y la clase `reveal` para que aparezca
  con animación. Respeta la opción "reducir movimiento" del sistema.

## Efectos de scroll v2

Todo está en `src/lib/motion.js` (sin librerías) y en la sección "EFECTOS LLAMATIVOS v2" de `src/styles.css`:

- Barra de progreso de lectura arriba de la página.
- Títulos que entran palabra por palabra (clase `words`).
- Frase grande que se ilumina palabra por palabra al hacer scroll (`words words--scrub` + `data-progress`).
- Sección fijada que se anima mientras haces scroll (`data-pin`): riel horizontal de productos en Accexuri,
  cadena de suministro con el isotipo dibujándose en Huicheng. En celular se vuelve una sección normal.
- Imágenes que se descubren con un barrido de color (`reveal-img`).
- Tarjetas que se inclinan en 3D con el mouse (`data-tilt`).
- Contadores que suben desde 0 (`data-count`).
- Portada que se despide al hacer scroll (variable `--sy`).
- Todo se desactiva si el sistema tiene activado "reducir movimiento".
