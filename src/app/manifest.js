export default function manifest() {
  return {
    id: "/",
    name: "Caimanera — Tu próximo partido está cerca",
    short_name: "Caimanera",
    description:
      "Descubre canchas y partidos cerca de ti, reserva en segundos y juega más con un solo pase.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui", "browser"],
    background_color: "#0e1018",
    theme_color: "#0e1018",
    lang: "es",
    dir: "ltr",
    categories: ["sports", "lifestyle"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Cómo funciona",
        short_name: "Cómo funciona",
        url: "/#como-funciona",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Pases",
        short_name: "Pases",
        url: "/#pases",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
    ],
  };
}
