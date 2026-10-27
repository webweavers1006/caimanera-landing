# Caimanera — Landing

Landing oficial de Caimanera, la plataforma hiperlocal para descubrir partidos y canchas cerca de ti. Es un proyecto independiente de la app (no comparte build ni dependencias) y vive en otro puerto/dominio.

La app consume esta landing para los textos legales a través de `NEXT_PUBLIC_LANDING_URL`. Este proyecto es dueño de:

- La presentación pública del producto.
- La demo interactiva del radar de partidos.
- Los textos legales en `/terminos` y `/privacidad`.
- El SEO, Open Graph, sitemap, manifest y metadata de la marca.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router, React Server Components) |
| UI | React 19 + Tailwind CSS 4 |
| Animación | Framer Motion |
| Íconos | Lucide |
| Tipografía | Geist + Geist Mono (`next/font`) |
| Contenido | Datos demo locales en `src/lib/data.js` |
| Legal | Páginas estáticas `/terminos` y `/privacidad` |
| SEO | Metadata API, JSON-LD, Open Graph dinámico, sitemap y robots |

## Requisitos

- Node.js 20.19+
- pnpm

## Desarrollo

```bash
pnpm install
cp .env.example .env
pnpm dev
```

La landing queda en `http://127.0.0.1:5000`.

La app de Caimanera debe correr en `http://localhost:3001` para que los CTA funcionen en local.

> **Nota para macOS:** el puerto 5000 lo usa AirPlay Receiver. Los scripts
> `dev` y `start` escuchan en `127.0.0.1` para convivir con ese servicio y
> funcionar en local. Abre **`http://127.0.0.1:5000`**, no `localhost:5000`
> (AirPlay responde en IPv6 y puede devolver 403). Si necesitas abrir la
> landing desde otro dispositivo de la red, desactiva AirPlay Receiver
> (Ajustes del Sistema → General → AirDrop y Handoff) y usa `pnpm dev:lan` o
> `pnpm start:lan`.

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_APP_URL` | URL pública de la app. Sin barra final. |
| `NEXT_PUBLIC_SITE_URL` | URL pública de esta landing. Se usa en metadata, sitemap y JSON-LD. |

Ejemplo:

```env
NEXT_PUBLIC_APP_URL="http://localhost:3001"
NEXT_PUBLIC_SITE_URL="http://127.0.0.1:5000"
```

## Integración con la app

En el proyecto de la app (`caimaneraapp`), configura:

```env
NEXT_PUBLIC_LANDING_URL="http://127.0.0.1:5000"
```

Con eso:

- `/terminos` y `/privacidad` de la landing se enlazan desde login, footer y redirects legales.
- La app deja de mostrar los legales como texto plano.
- En producción, cambia ambas URLs por los dominios reales.

## Rutas

| Ruta | Contenido |
|------|-----------|
| `/` | Landing completa: hero, radar interactivo, cómo funciona, funciones, pases, canchas, FAQ y CTA |
| `/terminos` | Términos y condiciones |
| `/privacidad` | Política de privacidad |
| `/creditos` | Créditos y licencias de imágenes |
| `/sitemap.xml` | Sitemap |
| `/robots.txt` | Robots |
| `/manifest.webmanifest` | Manifest de la landing |
| `/opengraph-image` | Imagen Open Graph dinámica |

## Contenido

- **Planes:** Pase Básico ($19.99, 4 partidos), Pase PRO ($34.99, 8 partidos y prioridad) y Pase VIP ($349.99/año, partidos ilimitados).
- **Partidos y canchas:** datos demo alineados con los seeds de Caimanera en Caracas (La Caimanera, Los Mangos y El Parque).
- **Pagos:** BDT, pago móvil/transferencia, Binance y tarjeta.
- **Métricas:** no se inventan usuarios ni reseñas; la landing usa datos del producto y una demo claramente identificada.

Si cambian los planes, precios, canchas o métodos de pago en la app, actualiza `src/lib/data.js` para mantener la landing sincronizada.

## Estructura

```text
src/
├── app/
│   ├── page.js                  # Home
│   ├── layout.js                # Metadata, fuentes, header y footer
│   ├── globals.css              # Tokens, efectos y utilidades
│   ├── terminos/page.js
│   ├── privacidad/page.js
│   ├── not-found.js
│   ├── manifest.js
│   ├── robots.js
│   ├── sitemap.js
│   └── opengraph-image.js
├── components/
│   ├── brand/                   # Logo
│   ├── layout/                  # Header, footer
│   ├── sections/                # Secciones de la landing
│   ├── ui/                      # Button, Reveal, SpotlightCard...
│   ├── visuals/                 # RadarMap, MatchCard, PhoneFrame
│   └── legal/                   # Layout de páginas legales
└── lib/
    ├── config.js                # URLs, navegación y metadata
    ├── data.js                  # Contenido demo
    └── utils.js                 # cn, formatUsd
```

## Detalles de experiencia

- **Hero con radar real:** pins seleccionables, tarjeta de partido que cambia y visual 3D con parallax suave.
- **Demo interactiva:** filtra por deporte, toca un pin y actualiza el preview sin salir de la landing.
- **Historia con scroll:** el teléfono cambia de pantalla según el paso activo; en móvil se controla con tabs.
- **Bento de producto:** ubicación, cupos, pagos, pase, canchas y panel administrativo.
- **Pases reales:** los tres planes del seed con sus precios y características.
- **Legales:** páginas con índice lateral, texto legible y enlaces desde toda la landing.
- **Accesibilidad:** navegación semántica, foco visible, cierre con `Escape`, `aria-expanded` y soporte de `prefers-reduced-motion`.
- **Rendimiento:** imágenes locales optimizadas con `next/image`, fuentes con `display: swap` y componentes cliente solo donde hay interacción.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Desarrollo en el puerto 5000, solo `127.0.0.1` |
| `pnpm dev:lan` | Desarrollo en 5000 expuesto a la red (requiere liberar el puerto) |
| `pnpm build` | Build de producción |
| `pnpm start` | Producción en 5000, solo `127.0.0.1` |
| `pnpm start:lan` | Producción en 5000 expuesta a la red |
| `pnpm lint` | ESLint |
| `pnpm check` | Lint + build |

## Despliegue

Vercel es la opción más directa (detecta Next.js). En otros entornos:

```bash
pnpm install --prod
pnpm build
pnpm start
```

Configura `NEXT_PUBLIC_APP_URL` y `NEXT_PUBLIC_SITE_URL` en el entorno de producción y coloca HTTPS delante del sitio. Con `pnpm start`, Next escucha en `127.0.0.1:5000`, listo para Nginx/Caddy en el mismo servidor.

## Créditos de imágenes

La página `/creditos` contiene las fuentes, autores y licencias de las fotografías. Resumen:

- Unsplash License: `court-aerial.jpg`, `football-action.jpg`, `football-stadium.jpg`.
- Wikimedia Commons, CC BY-SA 4.0: `padel-panoramic.jpg` por OCHAPPS. Imagen recortada y optimizada para la landing.

Los datos de canchas, partidos y planes son de demostración y no representan disponibilidad real.
