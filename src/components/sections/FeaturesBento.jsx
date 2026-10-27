import Image from "next/image";
import {
  Activity,
  ArrowUpRight,
  Banknote,
  Check,
  CreditCard,
  ImageIcon,
  LayoutDashboard,
  MapPin,
  Smartphone,
  Sparkles,
  Ticket,
  Users,
  Wallet,
} from "lucide-react";
import { FEATURES, PAYMENT_METHODS } from "@/lib/data";
import { cn, formatUsd } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const featureIcons = {
  radar: MapPin,
  spots: Users,
  payments: Wallet,
  pass: Ticket,
  venues: ImageIcon,
  admin: LayoutDashboard,
};

const paymentIcons = {
  bdt: Banknote,
  mobile: Smartphone,
  binance: Wallet,
  card: CreditCard,
};

function RadarVisual() {
  return (
    <div className="relative mt-6 h-[10.5rem] overflow-hidden rounded-2xl border border-line bg-[oklch(0.18_0.03_185)] sm:h-[11.5rem]">
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(oklch(1_0_0_/_0.12)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_45%,oklch(0.84_0.14_165_/_0.12),transparent_40%)]" />
      <svg viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 size-full">
        <g fill="none" stroke="oklch(1 0 0 / 0.12)" strokeWidth="0.7">
          <path d="M-4 15 C 18 11, 32 19, 50 15 S 80 8, 104 15" />
          <path d="M-4 37 C 20 32, 37 41, 58 36 S 88 30, 104 37" />
          <path d="M25 -4 C 27 12, 20 25, 26 38 S 31 52, 27 64" />
          <path d="M70 -4 C 66 12, 77 24, 72 38 S 68 51, 75 64" />
          <path d="M-4 51 C 18 47, 41 54, 61 50 S 87 46, 104 51" strokeWidth="1.4" />
        </g>
        <circle cx="44" cy="34" r="14" fill="none" stroke="oklch(0.84 0.14 165 / 0.15)" strokeDasharray="2 3" />
        <circle cx="44" cy="34" r="23" fill="none" stroke="oklch(0.84 0.14 165 / 0.1)" strokeDasharray="2 3" />
      </svg>
      {[
        { x: "44%", y: "56%", active: true },
        { x: "68%", y: "30%", active: false },
        { x: "24%", y: "68%", active: false },
      ].map((pin, index) => (
        <span
          key={index}
          className={cn(
            "absolute flex size-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[oklch(0.18_0.03_185)]",
            pin.active ? "bg-primary" : "bg-white/60"
          )}
          style={{ left: pin.x, top: pin.y }}
        >
          {pin.active && <span className="absolute inset-0 animate-pulse-ring rounded-full border border-primary" />}
        </span>
      ))}
      <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-full border border-line bg-background/60 px-2.5 py-1.5 backdrop-blur-md">
        <MapPin className="size-3 text-primary" />
        <span className="text-[0.58rem] text-foreground/80">La Caimanera · 1.2 km</span>
      </div>
      <div className="absolute right-2.5 top-2.5 rounded-full border border-primary/25 bg-primary/10 px-2 py-1 font-mono text-[0.5rem] uppercase tracking-[0.1em] text-primary">
        3 canchas
      </div>
    </div>
  );
}

function SpotsVisual() {
  return (
    <div className="mt-6 rounded-2xl border border-line bg-background/40 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.7rem] font-semibold text-foreground">Pichanga de hoy</p>
          <p className="mt-0.5 text-[0.6rem] text-foreground-muted">Hoy · 7:00 PM</p>
        </div>
        <span className="rounded-full border border-primary/25 bg-primary/10 px-2 py-1 font-mono text-[0.5rem] uppercase tracking-[0.1em] text-primary">
          Confirmado
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex -space-x-2" aria-hidden="true">
          {["JP", "MA", "LR", "CD", "SV", "AN"].map((initials, index) => (
            <span
              key={initials}
              className={cn(
                "flex size-7 items-center justify-center rounded-full border-2 border-card text-[0.48rem] font-semibold text-white",
                index % 3 === 0 && "bg-primary-strong",
                index % 3 === 1 && "bg-[oklch(0.48_0.12_205)]",
                index % 3 === 2 && "bg-[oklch(0.56_0.14_50)]"
              )}
            >
              {initials}
            </span>
          ))}
        </div>
        <span className="text-[0.6rem] text-foreground-muted">+1 jugador</span>
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-primary-strong to-primary" />
      </div>
      <div className="mt-2 flex items-center justify-between text-[0.56rem] text-foreground-muted">
        <span>7 confirmados</span>
        <span className="text-primary">3 cupos libres</span>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        <span className="rounded-full border border-line bg-white/[0.03] px-2 py-1 text-[0.52rem] text-foreground-muted">
          Lista de espera activa
        </span>
        <span className="rounded-full border border-line bg-white/[0.03] px-2 py-1 text-[0.52rem] text-foreground-muted">
          Sin datos personales
        </span>
      </div>
    </div>
  );
}

function PaymentsVisual() {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 gap-2">
        {PAYMENT_METHODS.map((method, index) => {
          const Icon = paymentIcons[method.kind] || CreditCard;
          const active = index === 0;
          return (
            <div
              key={method.label}
              className={cn(
                "flex items-center gap-2 rounded-xl border p-2.5 transition-colors",
                active
                  ? "border-primary/35 bg-primary/[0.08]"
                  : "border-line bg-white/[0.025]"
              )}
            >
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-lg",
                  active ? "bg-primary text-primary-foreground" : "bg-white/[0.05] text-foreground-muted"
                )}
              >
                {active ? <Check className="size-3.5" /> : <Icon className="size-3.5" />}
              </span>
              <div className="min-w-0">
                <p className="truncate text-[0.64rem] font-medium text-foreground">{method.label}</p>
                <p className="truncate text-[0.5rem] text-foreground-muted">{method.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl border border-line bg-background/40 px-3.5 py-3">
        <span className="text-[0.64rem] text-foreground-muted">Total del partido</span>
        <span className="font-display text-lg font-semibold text-foreground">{formatUsd(4, { decimals: 2 })}</span>
      </div>
    </div>
  );
}

function PassVisual() {
  return (
    <div className="mt-6">
      <div className="group/card relative overflow-hidden rounded-2xl border border-primary/25 bg-[linear-gradient(135deg,oklch(0.31_0.09_160),oklch(0.18_0.05_180)_55%,oklch(0.22_0.06_280))] p-4 shadow-[0_24px_50px_-30px_oklch(0.84_0.14_165_/_0.65)] transition-transform duration-500 group-hover:rotate-0 sm:-rotate-1">
        <div
          aria-hidden="true"
          className="absolute -right-8 -top-10 size-28 rounded-full bg-primary/20 blur-2xl"
        />
        <div className="relative flex items-start justify-between">
          <div>
            <p className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-white/55">Caimanera pass</p>
            <p className="mt-1 font-display text-2xl font-semibold tracking-[-0.04em] text-white">PRO</p>
          </div>
          <span className="flex size-7 items-center justify-center rounded-lg bg-white/10 text-primary backdrop-blur-sm">
            <Sparkles className="size-3.5" />
          </span>
        </div>
        <div className="relative mt-6 flex items-end justify-between">
          <div>
            <p className="font-mono text-[0.48rem] uppercase tracking-[0.12em] text-white/45">Restantes este mes</p>
            <p className="font-display mt-1 text-4xl font-semibold leading-none text-white">
              6<span className="text-lg text-white/40">/8</span>
            </p>
          </div>
          <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[0.5rem] text-white/70">
            Prioridad
          </span>
        </div>
        <div className="relative mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-3/4 rounded-full bg-primary" />
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Crédito automático", "Renueva desde la app", "Pago local"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-line bg-white/[0.03] px-2 py-1 text-[0.52rem] text-foreground-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function VenuesVisual() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-2">
      <div className="relative col-span-2 h-24 overflow-hidden rounded-xl border border-line sm:h-28">
        <Image
          src="/img/court-aerial.jpg"
          alt="Cancha de césped sintético"
          fill
          sizes="(min-width: 1024px) 25vw, 90vw"
          className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.02_280_/_0.9)] via-transparent to-transparent" />
        <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
          <MapPin className="size-2.5 text-primary" />
          <span className="text-[0.52rem] font-medium text-white/85">La Caimanera · 5v5</span>
        </div>
        <span className="absolute right-2 top-2 rounded-full border border-white/15 bg-black/35 px-2 py-0.5 text-[0.46rem] text-white/75">
          4.9
        </span>
      </div>
      <div className="relative h-16 overflow-hidden rounded-xl border border-line">
        <Image
          src="/img/football-stadium.jpg"
          alt="Balones en una cancha de grama"
          fill
          sizes="(min-width: 1024px) 12vw, 45vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <span className="absolute bottom-1.5 left-1.5 text-[0.46rem] text-white/80">Los Mangos</span>
      </div>
      <div className="relative h-16 overflow-hidden rounded-xl border border-line">
        <Image
          src="/img/padel-panoramic.jpg"
          alt="Cancha de pádel panorámica"
          fill
          sizes="(min-width: 1024px) 12vw, 45vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <span className="absolute bottom-1.5 left-1.5 text-[0.46rem] text-white/80">El Parque</span>
      </div>
    </div>
  );
}

function AdminVisual() {
  const bars = [36, 54, 42, 72, 58, 86, 64];
  return (
    <div className="mt-6 rounded-2xl border border-line bg-background/40 p-3.5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[0.66rem] font-semibold text-foreground">Resumen de hoy</p>
          <p className="text-[0.5rem] text-foreground-muted">Panel administrativo</p>
        </div>
        <span className="flex items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2 py-1 font-mono text-[0.46rem] uppercase tracking-[0.08em] text-primary">
          <span className="size-1 rounded-full bg-primary" />
          En vivo
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {[
          { label: "Partidos", value: "7" },
          { label: "Ocupación", value: "82%" },
          { label: "Pendientes", value: "3" },
        ].map((stat, index) => (
          <div key={stat.label} className="rounded-lg border border-line bg-white/[0.025] p-2">
            <p className="text-[0.44rem] text-foreground-muted">{stat.label}</p>
            <p className={cn("font-display mt-0.5 text-lg font-semibold", index === 2 ? "text-accent" : "text-foreground")}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex h-12 items-end gap-1">
        {bars.map((height, index) => (
          <span
            key={index}
            className={cn(
              "flex-1 rounded-t-[3px]",
              index === bars.length - 2 ? "bg-primary" : "bg-primary/20"
            )}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg border border-line bg-white/[0.025] px-2.5 py-2">
        <span className="flex items-center gap-1.5 text-[0.52rem] text-foreground-muted">
          <Activity className="size-3 text-primary" />
          Pago confirmado · Pase PRO
        </span>
        <span className="text-[0.52rem] font-semibold text-primary">{formatUsd(34.99, { decimals: 2 })}</span>
      </div>
    </div>
  );
}

const visuals = {
  radar: RadarVisual,
  spots: SpotsVisual,
  payments: PaymentsVisual,
  pass: PassVisual,
  venues: VenuesVisual,
  admin: AdminVisual,
};

export function FeaturesBento() {
  return (
    <section id="funciones" className="relative py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Funciones"
            title={
              <>
                Todo lo que pasa{" "}
                <span className="text-gradient">antes de jugar.</span>
              </>
            }
            description="Caimanera no es solo un listado de canchas. Es la capa que conecta ubicación, cupos, pagos y pases para que el partido suceda."
          />
          <div className="hidden shrink-0 lg:block">
            <div className="flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-2 font-mono text-[0.56rem] uppercase tracking-[0.14em] text-foreground-muted">
              <span className="size-1.5 rounded-full bg-primary" />
              Una sola plataforma
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-12">
          {FEATURES.map((feature, index) => {
            const Visual = visuals[feature.visual];
            const Icon = featureIcons[feature.visual];
            return (
              <Reveal
                key={feature.key}
                delay={index * 0.045}
                className={cn("md:col-span-1", feature.span)}
              >
                <SpotlightCard className="group flex h-full flex-col rounded-[1.6rem] border border-line bg-card/55 p-5 transition-colors duration-300 hover:border-line-strong sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-primary/80">
                        {feature.eyebrow}
                      </p>
                      <h3 className="font-display mt-2 text-[1.65rem] font-semibold tracking-[-0.045em] text-foreground sm:text-[1.8rem]">
                        {feature.title}
                      </h3>
                    </div>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.035] text-foreground-muted transition-colors group-hover:text-primary">
                      <Icon className="size-4" />
                    </span>
                  </div>
                  <p className="pretty mt-2.5 max-w-lg text-[0.82rem] leading-6 text-foreground-muted">
                    {feature.description}
                  </p>
                  <div className="mt-auto">
                    <Visual />
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl border border-dashed border-line bg-white/[0.015] px-5 py-4 sm:flex-row sm:items-center">
          <p className="text-[0.78rem] text-foreground-muted">
            <span className="font-medium text-foreground">Una misma cuenta.</span>{" "}
            Tus inscripciones, pagos y pases viven juntos en{" "}
            <span className="text-primary">Mis partidos</span> y{" "}
            <span className="text-primary">Mi cuenta</span>.
          </p>
          <a
            href="#pases"
            className="group inline-flex shrink-0 items-center gap-1.5 text-[0.72rem] font-semibold text-foreground transition-colors hover:text-primary"
          >
            Ver pases
            <ArrowUpRight className="size-3.5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
