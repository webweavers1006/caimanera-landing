import Image from "next/image";
import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  CreditCard,
  LayoutDashboard,
  MapPin,
  Plus,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { APP_LINKS, CONTACT_EMAIL } from "@/lib/config";
import { VENUES } from "@/lib/data";
import { cn, formatUsd } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const adminChecks = [
  "Partidos, canchas, fotos y cupos",
  "Inscripciones y lista de espera",
  "Pagos pendientes y confirmación",
  "Planes de pase y usuarios",
];

function OrganizerDashboard() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,oklch(0.84_0.14_165_/_0.12),transparent_65%)] blur-2xl"
      />
      <div className="relative rounded-[1.7rem] border border-line bg-[oklch(0.155_0.022_280_/_0.86)] p-3 shadow-stage backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-line px-1.5 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-lg bg-primary/12 text-primary">
              <LayoutDashboard className="size-3.5" />
            </span>
            <div>
              <p className="text-[0.62rem] font-semibold text-foreground">Panel de cancha</p>
              <p className="text-[0.48rem] text-foreground-muted">Cancha La Caimanera</p>
            </div>
          </div>
          <span className="flex items-center gap-1 rounded-full border border-primary/25 bg-primary/[0.08] px-2 py-1 font-mono text-[0.44rem] uppercase tracking-[0.08em] text-primary">
            <span className="size-1 rounded-full bg-primary" />
            Activa
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { label: "Hoy", value: "7", text: "partidos" },
            { label: "Ocupación", value: "82%", text: "de cupos" },
            { label: "Pagos", value: "3", text: "pendientes", accent: true },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-line bg-white/[0.025] p-2.5">
              <p className="text-[0.46rem] uppercase tracking-[0.08em] text-foreground-muted">
                {stat.label}
              </p>
              <p
                className={cn(
                  "font-display mt-1 text-xl font-semibold leading-none",
                  stat.accent ? "text-accent" : "text-foreground"
                )}
              >
                {stat.value}
              </p>
              <p className="mt-0.5 text-[0.44rem] text-foreground-muted">{stat.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-line bg-white/[0.025] p-3">
          <div className="flex items-center justify-between">
            <p className="text-[0.56rem] font-semibold text-foreground">Próximos partidos</p>
            <span className="text-[0.46rem] text-primary">Ver todos</span>
          </div>
          <div className="mt-2.5 space-y-2">
            {[
              { time: "7:00 PM", title: "Pichanga de hoy", spots: "3 cupos", tone: "primary" },
              { time: "8:30 PM", title: "Noche de jueves", spots: "4 cupos", tone: "cyan" },
              { time: "9:00 PM", title: "Pádel mixto", spots: "1 cupo", tone: "accent" },
            ].map((match) => (
              <div key={match.title} className="flex items-center gap-2.5">
                <span className="w-10 shrink-0 font-mono text-[0.46rem] text-foreground-muted">{match.time}</span>
                <span
                  className={cn(
                    "size-1.5 shrink-0 rounded-full",
                    match.tone === "primary" && "bg-primary",
                    match.tone === "cyan" && "bg-cyan",
                    match.tone === "accent" && "bg-accent"
                  )}
                />
                <span className="min-w-0 flex-1 truncate text-[0.54rem] text-foreground/80">{match.title}</span>
                <span className="shrink-0 rounded-full bg-white/[0.045] px-1.5 py-0.5 text-[0.44rem] text-foreground-muted">
                  {match.spots}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-line bg-white/[0.025] p-2.5">
            <span className="flex size-6 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <CreditCard className="size-3" />
            </span>
            <div>
              <p className="text-[0.48rem] font-medium text-foreground">Pago pendiente</p>
              <p className="text-[0.42rem] text-foreground-muted">Pase PRO · $34.99</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/[0.06] p-2.5">
            <span className="flex size-6 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Check className="size-3" />
            </span>
            <div>
              <p className="text-[0.48rem] font-medium text-foreground">Pago confirmado</p>
              <p className="text-[0.42rem] text-foreground-muted">Partido · $6.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 -top-5 hidden animate-float items-center gap-2 rounded-full border border-line bg-[oklch(0.2_0.025_280_/_0.94)] px-3 py-2 shadow-xl backdrop-blur-md sm:flex">
        <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-3" />
        </span>
        <span className="text-[0.56rem] font-medium text-foreground">Cupo confirmado</span>
      </div>
    </div>
  );
}

export function Venues() {
  return (
    <section id="canchas" className="relative py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Canchas"
            title={
              <>
                La cancha correcta,
                <br />
                <span className="text-gradient">sin adivinar.</span>
              </>
            }
            description="Fotos, deporte, dirección, distancia, mapa y próximos partidos. Toda la información para elegir dónde jugar antes de salir de casa."
          />
          <Reveal delay={0.1} className="shrink-0">
            <a
              href={APP_LINKS.courts}
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.035] px-4 py-2.5 text-[0.76rem] font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-white/[0.07]"
            >
              Explorar canchas
              <ArrowUpRight className="size-3.5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-11 grid gap-3.5 md:grid-cols-3">
          {VENUES.map((venue, index) => (
            <Reveal key={venue.name} delay={index * 0.08}>
              <a
                href={APP_LINKS.courts}
                className="group relative block overflow-hidden rounded-[1.7rem] border border-line bg-card/50 transition-colors hover:border-line-strong"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={venue.image}
                    alt={venue.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 92vw"
                    className="object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.018_280_/_0.95)] via-[oklch(0.13_0.018_280_/_0.15)] to-transparent" />
                  <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
                    <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1 font-mono text-[0.5rem] uppercase tracking-[0.1em] text-white/75 backdrop-blur-md">
                      {venue.sport}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/30 px-2 py-1 text-[0.5rem] text-white/80 backdrop-blur-md">
                      <Star className="size-2.5 fill-accent text-accent" />
                      {venue.rating}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-mono text-[0.5rem] uppercase tracking-[0.12em] text-primary">
                      {venue.tag}
                    </p>
                    <h3 className="font-display mt-1 text-[1.35rem] font-semibold tracking-[-0.04em] text-white">
                      {venue.name}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-1.5 text-[0.66rem] text-white/55">
                      <MapPin className="size-3 text-primary" />
                      {venue.area}
                    </p>
                    <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                      <span className="text-[0.62rem] text-white/55">
                        Desde <span className="font-semibold text-white">{formatUsd(venue.price)}</span> / hora
                      </span>
                      <span className="flex size-7 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/80 transition-all group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl border border-dashed border-line bg-white/[0.015] px-4 py-3 text-[0.66rem] text-foreground-muted">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-primary" />
            Info pública sin datos personales
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarCheck className="size-3.5 text-primary" />
            Próximos partidos por cancha
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="size-3.5 text-primary" />
            Distancia real desde tu ubicación
          </span>
          <span className="ml-auto hidden font-mono text-[0.52rem] uppercase tracking-[0.1em] text-foreground-muted/60 sm:inline">
            Datos demo · Caracas
          </span>
        </Reveal>

        <Reveal className="mt-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(140deg,oklch(0.22_0.035_280),oklch(0.17_0.022_280)_58%,oklch(0.19_0.035_170))] p-5 shadow-stage sm:rounded-[2.5rem] sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 grid-lines opacity-30"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-primary/[0.09] blur-3xl"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
              <div>
                <p className="eyebrow flex items-center gap-2.5 text-primary">
                  <span className="h-px w-6 bg-primary/70" />
                  Para canchas y organizadores
                </p>
                <h3 className="font-display balance mt-4 text-[clamp(2.2rem,4.6vw,3.7rem)] font-semibold text-foreground">
                  Tu cancha, llena.
                  <br />
                  <span className="text-gradient-soft">Tu operación, en orden.</span>
                </h3>
                <p className="pretty mt-4 max-w-lg text-[0.9rem] leading-6 text-foreground-muted">
                  Gestiona partidos, inscripciones, pagos y pases desde un panel
                  hecho para la operación diaria de una cancha. Menos planillas,
                  más tiempo en la cancha.
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {adminChecks.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.78rem] text-foreground/80">
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                        <Check className="size-2.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Quiero%20sumar%20mi%20cancha%20a%20Caimanera`}
                    className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-[0.78rem] font-semibold text-primary-foreground transition-colors hover:bg-[oklch(0.89_0.12_165)]"
                  >
                    <Plus className="size-4" />
                    Sumar mi cancha
                  </a>
                  <a
                    href={APP_LINKS.login}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-line-strong bg-white/[0.04] px-5 text-[0.78rem] font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-white/[0.07]"
                  >
                    Ver el panel
                    <ArrowUpRight className="size-3.5 text-primary" />
                  </a>
                </div>
              </div>

              <OrganizerDashboard />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
