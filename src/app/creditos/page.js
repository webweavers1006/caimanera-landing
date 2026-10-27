import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ImageIcon } from "lucide-react";

export const metadata = {
  title: "Créditos de imágenes",
  description:
    "Fuentes, autores y licencias de las fotografías utilizadas en la landing de Caimanera.",
  alternates: { canonical: "/creditos" },
  robots: { index: true, follow: true },
};

const credits = [
  {
    image: "/img/court-aerial.jpg",
    alt: "Botines naranjas sobre una cancha de césped sintético",
    title: "Botines sobre césped sintético",
    author: "Unsplash",
    source: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
  },
  {
    image: "/img/football-action.jpg",
    alt: "Balón sobre el césped de una cancha de fútbol",
    title: "Balón en el césped",
    author: "Unsplash",
    source: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
  },
  {
    image: "/img/football-stadium.jpg",
    alt: "Balones de fútbol sobre la grama de una cancha",
    title: "Balones en la cancha",
    author: "Unsplash",
    source: "https://images.unsplash.com/photo-1551958219-acbc608c6377",
    license: "Unsplash License",
    licenseUrl: "https://unsplash.com/license",
  },
  {
    image: "/img/padel-panoramic.jpg",
    alt: "Cancha de pádel panorámica con paredes de cristal",
    title: "Mejorset Full Panoramic Padel Court",
    author: "OCHAPPS",
    source:
      "https://commons.wikimedia.org/wiki/File:Mejorset_Full_Panoramic_Padel_Court_Delivered_by_SG_Padel.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    note: "Imagen recortada y optimizada para la landing.",
  },
];

export default function CreditsPage() {
  return (
    <main id="contenido" className="relative pb-20 pt-32 sm:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-96">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute left-1/2 top-0 h-64 w-[46rem] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[100px]" />
      </div>
      <div className="shell relative">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-[0.72rem] font-medium text-foreground-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
          Volver al inicio
        </Link>

        <p className="eyebrow mt-10 flex items-center gap-2.5 text-primary">
          <span className="h-px w-6 bg-primary/70" />
          Créditos
        </p>
        <h1 className="font-display balance mt-4 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold text-foreground">
          Las imágenes también <span className="text-gradient">juegan.</span>
        </h1>
        <p className="pretty mt-5 max-w-2xl text-[0.95rem] leading-7 text-foreground-muted sm:text-[1.02rem]">
          Las fotografías de esta landing vienen de Unsplash y Wikimedia
          Commons. Aquí están las fuentes, los autores y las licencias.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {credits.map((credit) => (
            <article
              key={credit.image}
              className="overflow-hidden rounded-3xl border border-line bg-card/50"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={credit.image}
                  alt={credit.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[0.55rem] uppercase tracking-[0.12em] text-primary">
                      {credit.license}
                    </p>
                    <h2 className="mt-1 text-[0.95rem] font-semibold text-foreground">
                      {credit.title}
                    </h2>
                    <p className="mt-0.5 text-[0.7rem] text-foreground-muted">
                      {credit.author}
                    </p>
                  </div>
                  <span className="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ImageIcon className="size-4" />
                  </span>
                </div>
                {credit.note && (
                  <p className="mt-2 text-[0.64rem] leading-5 text-foreground-muted/80">
                    {credit.note}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.65rem]">
                  <a
                    href={credit.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
                  >
                    Ver fuente
                    <ArrowUpRight className="size-3 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={credit.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-muted underline decoration-line-strong underline-offset-2 transition-colors hover:text-foreground"
                  >
                    Licencia
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-[0.72rem] leading-5 text-foreground-muted">
          El logo, los datos de canchas, partidos y planes son parte del
          proyecto Caimanera. Los datos del catálogo son de demostración.
        </p>
      </div>
    </main>
  );
}
