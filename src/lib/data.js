/**
 * Demo content. It mirrors the public catalogue that ships with the app
 * (Caracas venues, matches and pass plans) so the landing feels like the real
 * product instead of a generic template.
 */

export const SPORTS = ["Fútbol 5", "Fútbol 7", "Pádel"];

export const MATCHES = [
  {
    id: "pichanga-hoy",
    sport: "Fútbol 5",
    title: "Pichanga de hoy",
    venue: "Cancha La Caimanera",
    area: "La Caimanera",
    distance: "1.2 km",
    day: "Hoy",
    time: "7:00 PM",
    price: 4,
    joined: 7,
    capacity: 10,
    level: "Todos los niveles",
    pin: { x: 31, y: 38 },
    featured: true,
  },
  {
    id: "noche-jueves",
    sport: "Fútbol 7",
    title: "Noche de jueves",
    venue: "Cancha Los Mangos",
    area: "El Hatillo",
    distance: "3.4 km",
    day: "Jue",
    time: "8:30 PM",
    price: 6,
    joined: 10,
    capacity: 14,
    level: "Intermedio",
    pin: { x: 66, y: 27 },
  },
  {
    id: "padel-mixto",
    sport: "Pádel",
    title: "Mixto nocturno",
    venue: "Cancha El Parque",
    area: "Parque del Este",
    distance: "4.8 km",
    day: "Sáb",
    time: "9:00 AM",
    price: 8,
    joined: 1,
    capacity: 4,
    level: "Abierto",
    pin: { x: 48, y: 68 },
  },
  {
    id: "revancha-sabado",
    sport: "Fútbol 5",
    title: "Revancha del sábado",
    venue: "Cancha La Caimanera",
    area: "La Caimanera",
    distance: "1.2 km",
    day: "Sáb",
    time: "6:30 PM",
    price: 5,
    joined: 9,
    capacity: 10,
    level: "Competitivo",
    pin: { x: 24, y: 58 },
  },
  {
    id: "torneo-relampago",
    sport: "Pádel",
    title: "Torneo relámpago",
    venue: "Cancha El Parque",
    area: "Parque del Este",
    distance: "4.8 km",
    day: "Dom",
    time: "10:00 AM",
    price: 10,
    joined: 2,
    capacity: 4,
    level: "Intermedio",
    pin: { x: 73, y: 59 },
  },
  {
    id: "viernes-liga",
    sport: "Fútbol 7",
    title: "Viernes de liga",
    venue: "Cancha Los Mangos",
    area: "El Hatillo",
    distance: "3.4 km",
    day: "Vie",
    time: "7:30 PM",
    price: 7,
    joined: 12,
    capacity: 14,
    level: "Intermedio",
    pin: { x: 62, y: 49 },
  },
];

export const VENUES = [
  {
    name: "Cancha La Caimanera",
    area: "La Caimanera",
    sport: "Fútbol 5",
    price: 25,
    image: "/img/court-aerial.jpg",
    alt: "Botines naranjas sobre una cancha de césped sintético",
    tag: "Techada · 5v5",
    rating: "4.9",
  },
  {
    name: "Cancha Los Mangos",
    area: "El Hatillo",
    sport: "Fútbol 7",
    price: 35,
    image: "/img/football-stadium.jpg",
    alt: "Balones de fútbol sobre la grama de una cancha",
    tag: "Grama · 7v7",
    rating: "4.8",
  },
  {
    name: "Cancha El Parque",
    area: "Parque del Este",
    sport: "Pádel",
    price: 20,
    image: "/img/padel-panoramic.jpg",
    alt: "Cancha de pádel panorámica con paredes de cristal",
    tag: "Panorámica",
    rating: "4.7",
  },
];

export const PLANS = [
  {
    name: "Pase Básico",
    tier: "BASIC_PASS",
    price: 19.99,
    cadence: "mes",
    matches: 4,
    description: "Para jugar una vez por semana sin pensarlo dos veces.",
    features: [
      "4 partidos al mes",
      "20% de descuento en partidos extra",
      "Historial y pagos en tu cuenta",
      "Compra y renovación desde la app",
    ],
    cta: "Quiero el Básico",
    featured: false,
  },
  {
    name: "Pase PRO",
    tier: "PRO_MONTHLY",
    price: 34.99,
    cadence: "mes",
    matches: 8,
    description: "El favorito de quienes siempre tienen un partido pendiente.",
    features: [
      "8 partidos al mes",
      "Prioridad de reserva",
      "Créditos automáticos al inscribirte",
      "Historial y pagos en tu cuenta",
    ],
    cta: "Jugar más con PRO",
    featured: true,
  },
  {
    name: "Pase VIP",
    tier: "VIP_ANNUAL",
    price: 349.99,
    cadence: "año",
    matches: 999,
    description: "Para el que convierte cada semana en una temporada.",
    features: [
      "Partidos ilimitados",
      "Prioridad total de reserva",
      "Un solo pago al año",
      "Historial y pagos en tu cuenta",
    ],
    cta: "Ser VIP",
    featured: false,
  },
];

export const FEATURES = [
  {
    key: "location",
    eyebrow: "Hiperlocal",
    title: "Tu barrio, primero",
    description:
      "GPS, direcciones o canchas conocidas. Caimanera ordena todo por distancia real para que juegues cerca, no donde sea.",
    span: "lg:col-span-7",
    visual: "radar",
  },
  {
    key: "spots",
    eyebrow: "En vivo",
    title: "Cupos que no mienten",
    description:
      "Mira quién va, cuántos faltan y si estás confirmado o en lista de espera. Sin grupos de WhatsApp eternos.",
    span: "lg:col-span-5",
    visual: "spots",
  },
  {
    key: "payments",
    eyebrow: "A tu manera",
    title: "Paga como te acomode",
    description:
      "BDT, pago móvil, Binance o tarjeta. El partido queda reservado y el pago se concilia desde la app.",
    span: "lg:col-span-5",
    visual: "payments",
  },
  {
    key: "pass",
    eyebrow: "Juega más",
    title: "Un pase, cero fricción",
    description:
      "Tus partidos incluidos se descuentan solos al inscribirte. El pase que vence primero es el que se usa.",
    span: "lg:col-span-7",
    visual: "pass",
  },
  {
    key: "venues",
    eyebrow: "Canchas",
    title: "Todo antes de salir",
    description:
      "Fotos, deporte, dirección, distancia, mapa y próximos partidos. La info que necesitas para elegir bien.",
    span: "lg:col-span-6",
    visual: "venues",
  },
  {
    key: "admin",
    eyebrow: "Para organizadores",
    title: "El panel que ordena la cancha",
    description:
      "Partidos, inscripciones, canchas, pagos, pases y usuarios en un solo lugar. Menos planilla, más cancha.",
    span: "lg:col-span-6",
    visual: "admin",
  },
];

export const STEPS = [
  {
    id: "ubicacion",
    number: "01",
    eyebrow: "Ubica",
    title: "Dinos dónde estás",
    description:
      "Usa tu ubicación actual, busca una dirección o elige una cancha conocida. La última ubicación queda guardada para la próxima.",
    bullets: ["GPS o dirección", "Zonas y canchas sugeridas", "Distancias reales"],
    screen: "location",
  },
  {
    id: "partido",
    number: "02",
    eyebrow: "Elige",
    title: "Encuentra el partido",
    description:
      "Filtra por deporte, día, distancia o cupos. Mira el mapa, abre el preview y revisa el precio antes de decidir.",
    bullets: ["Filtros en la URL", "Vista de lista o mapa", "Preview con cupos y precio"],
    screen: "matches",
  },
  {
    id: "juega",
    number: "03",
    eyebrow: "Juega",
    title: "Reserva y aparece",
    description:
      "Confirma tu cupo, elige cómo pagar o usa un crédito de tu pase. Recibe el detalle y tenlo todo en tu cuenta.",
    bullets: ["Pago o crédito de pase", "Confirmación en tu cuenta", "Cancelación desde la app"],
    screen: "confirmed",
  },
];

export const FAQS = [
  {
    question: "¿Qué es Caimanera?",
    answer:
      "Es una plataforma hiperlocal para descubrir partidos y canchas cerca de ti. Los jugadores eligen una ubicación, ven los partidos ordenados por distancia y se inscriben en segundos. Las canchas y organizadores gestionan todo desde un panel administrativo.",
  },
  {
    question: "¿Tengo que descargar una app?",
    answer:
      "No. Caimanera funciona desde el navegador y está pensada primero para el móvil. También se puede instalar como aplicación web (PWA) desde el navegador si quieres tenerla a mano.",
  },
  {
    question: "¿Dónde está disponible?",
    answer:
      "La plataforma está construida para operar por zonas hiperlocales. El catálogo demo arranca en Caracas con canchas como La Caimanera, Los Mangos y El Parque. A medida que se suman canchas y organizadores, se abren nuevas zonas.",
  },
  {
    question: "¿Cómo reservo un partido?",
    answer:
      "Elige tu ubicación, abre el partido que te interesa y revisa el preview con horario, cancha, cupos y precio. Si hay espacio, confirmas tu participación y eliges un método de pago. Si el partido está lleno, entras a la lista de espera.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "BDT, pago móvil o transferencia, Binance y tarjeta. Los pagos que no son inmediatos se registran como transacciones pendientes y el staff las confirma desde el panel de pagos.",
  },
  {
    question: "¿Cómo funciona el pase?",
    answer:
      "Compras un pase desde tu cuenta y los partidos que lo permiten descuentan un crédito automáticamente al inscribirte. Si tienes varios pases activos, se usa el que vence primero. El pase Básico incluye 4 partidos al mes; el PRO, 8; el VIP, partidos ilimitados.",
  },
  {
    question: "¿Puedo cancelar o cambiar mi cupo?",
    answer:
      "Sí. Desde Mis partidos puedes cancelar tu inscripción. Si estabas confirmado, Caimanera promueve al primero de la lista de espera y devuelve el crédito del pase cuando corresponde.",
  },
  {
    question: "¿Cómo sumo mi cancha?",
    answer:
      "Escríbenos a soporte@caimanera.app con el nombre de la cancha, la zona y los deportes que ofrece. El panel permite gestionar canchas, fotos, partidos, inscripciones, pagos y pases.",
  },
];

export const PAYMENT_METHODS = [
  { label: "BDT", detail: "Débito inmediato", kind: "bdt" },
  { label: "Pago móvil", detail: "Transferencia", kind: "mobile" },
  { label: "Binance", detail: "Cripto", kind: "binance" },
  { label: "Tarjeta", detail: "Débito o crédito", kind: "card" },
];
