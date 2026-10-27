const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

export const APP_URL = trimTrailingSlash(
  process.env.NEXT_PUBLIC_APP_URL || "https://app.caimaneraapp.online"
);

export const SITE_URL = trimTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL || "http://127.0.0.1:5000"
);

export const CONTACT_EMAIL = "soporte@caimanera.app";

export const SITE = {
  name: "Caimanera",
  shortName: "Caimanera",
  tagline: "Tu próximo partido está cerca",
  title: "Caimanera — Encuentra tu próximo partido cerca de ti",
  description:
    "Descubre canchas y partidos cerca de ti, reserva en segundos y juega más con un solo pase. Fútbol 5, fútbol 7 y pádel en tu zona.",
  location: "Caracas, Venezuela",
  locale: "es_VE",
  keywords: [
    "partidos de fútbol",
    "canchas de fútbol",
    "pádel Caracas",
    "reservar cancha",
    "pichanga",
    "deporte amateur",
    "Caimanera",
  ],
};

export const APP_LINKS = {
  home: `${APP_URL}/`,
  login: `${APP_URL}/login`,
  matches: `${APP_URL}/login?next=%2Fpartidos`,
  courts: `${APP_URL}/login?next=%2Fcanchas`,
  account: `${APP_URL}/login?next=%2Fcuenta`,
  passes: `${APP_URL}/login?next=%2Fcuenta%2Fpases`,
};

export const NAV_LINKS = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Radar", href: "#radar" },
  { label: "Funciones", href: "#funciones" },
  { label: "Pases", href: "#pases" },
  { label: "Canchas", href: "#canchas" },
  { label: "FAQ", href: "#faq" },
];

export const SEO_KEYWORDS = SITE.keywords.join(", ");
