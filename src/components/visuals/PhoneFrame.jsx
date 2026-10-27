"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  CreditCard,
  Home,
  LocateFixed,
  MapPin,
  Search,
  User,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/brand/Logo";

function StatusBar() {
  return (
    <div className="relative z-20 flex items-center justify-between px-5 pt-3 text-[0.5rem] font-semibold text-white/80">
      <span>9:41</span>
      <div className="flex items-center gap-1" aria-hidden="true">
        <span className="flex items-end gap-[2px]">
          <span className="h-1 w-[2px] rounded-sm bg-white/70" />
          <span className="h-1.5 w-[2px] rounded-sm bg-white/70" />
          <span className="h-2 w-[2px] rounded-sm bg-white/70" />
          <span className="h-2.5 w-[2px] rounded-sm bg-white/40" />
        </span>
        <span className="ml-1 h-2.5 w-4 rounded-[3px] border border-white/50 p-[1.5px]">
          <span className="block h-full w-2/3 rounded-[1px] bg-white/75" />
        </span>
      </div>
    </div>
  );
}

function BottomNav({ active = "home" }) {
  const items = [
    { key: "home", label: "Inicio", icon: Home },
    { key: "matches", label: "Partidos", icon: CalendarDays },
    { key: "account", label: "Cuenta", icon: User },
  ];

  return (
    <div className="absolute inset-x-3 bottom-2 rounded-[1.15rem] border border-white/10 bg-[oklch(0.17_0.022_280_/_0.92)] px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const isActive = active === item.key;
          return (
            <div
              key={item.key}
              className={cn(
                "flex flex-col items-center gap-1 rounded-xl px-3 py-1",
                isActive ? "text-primary" : "text-white/35"
              )}
            >
              <item.icon className="size-3.5" />
              <span className="text-[0.42rem] font-medium">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ScreenHeader({ title, subtitle, right }) {
  return (
    <div className="flex items-start justify-between gap-2 px-4 pt-4">
      <div className="flex min-w-0 items-center gap-2">
        <LogoMark className="size-6 rounded-[7px]" />
        <div className="min-w-0">
          <p className="truncate text-[0.72rem] font-semibold text-white">{title}</p>
          <p className="truncate text-[0.46rem] text-white/45">{subtitle}</p>
        </div>
      </div>
      {right}
    </div>
  );
}

function LocationScreen() {
  return (
    <div className="flex h-full flex-col">
      <div className="relative flex-1 bg-[radial-gradient(circle_at_70%_0%,oklch(0.84_0.14_165_/_0.12),transparent_55%)]">
        <StatusBar />
        <ScreenHeader
          title="Hola, Carlos"
          subtitle="¿Dónde juegas hoy?"
          right={
            <span className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60">
              <MapPin className="size-3" />
            </span>
          }
        />

        <div className="mt-4 px-4">
          <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/[0.08] px-3 py-2.5">
            <Search className="size-3.5 text-primary" />
            <span className="text-[0.58rem] text-white/55">Busca una dirección o zona</span>
          </div>
        </div>

        <div className="relative mx-4 mt-3 h-[9rem] overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.22_0.035_180)]">
          <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,oklch(1_0_0_/_0.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0_/_0.06)_1px,transparent_1px)] [background-size:22px_22px]" />
          <svg viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 size-full">
            <g fill="none" stroke="oklch(1 0 0 / 0.2)" strokeWidth="0.8">
              <path d="M-5 18 C 20 13, 37 24, 55 19 S 82 12, 105 18" />
              <path d="M-5 41 C 18 35, 38 46, 60 40 S 87 34, 105 41" />
              <path d="M28 -5 C 30 15, 22 27, 27 40 S 32 52, 29 65" />
              <path d="M69 -5 C 66 14, 76 26, 71 40 S 65 53, 72 65" />
            </g>
          </svg>
          <div className="absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_30px_8px_oklch(0.84_0.14_165_/_0.3)]">
            <LocateFixed className="size-3.5" />
            <span className="absolute inset-0 animate-pulse-ring rounded-full border border-primary" />
          </div>
          <span className="absolute bottom-2 left-2 rounded-full border border-white/10 bg-black/40 px-2 py-1 font-mono text-[0.4rem] uppercase tracking-[0.1em] text-white/60">
            La Caimanera · 1.2 km
          </span>
        </div>

        <div className="mt-4 px-4">
          <div className="flex items-center justify-between">
            <p className="text-[0.54rem] font-semibold text-white/80">Zonas cerca</p>
            <span className="text-[0.44rem] text-primary">Ver todas</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["La Caimanera", "El Hatillo", "Parque del Este"].map((zone, index) => (
              <span
                key={zone}
                className={cn(
                  "rounded-full border px-2 py-1.5 text-[0.46rem]",
                  index === 0
                    ? "border-primary/35 bg-primary/10 text-primary"
                    : "border-white/10 bg-white/[0.035] text-white/55"
                )}
              >
                {zone}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-4 mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] p-2.5">
          <span className="flex items-center gap-2 text-[0.5rem] text-white/65">
            <LocateFixed className="size-3 text-primary" />
            Usar mi ubicación actual
          </span>
          <ChevronRight className="size-3 text-white/35" />
        </div>
      </div>
      <BottomNav active="home" />
    </div>
  );
}

function MiniMatch({ sport, title, venue, time, price, spots }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.045] p-2.5">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <span className="font-mono text-[0.4rem] uppercase tracking-[0.1em] text-primary">
            {sport}
          </span>
          <p className="mt-0.5 truncate text-[0.58rem] font-semibold text-white">{title}</p>
          <p className="mt-0.5 truncate text-[0.42rem] text-white/45">{venue}</p>
        </div>
        <span className="shrink-0 rounded-lg bg-primary/12 px-2 py-1 text-[0.55rem] font-semibold text-primary">
          ${price}
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between text-[0.4rem] text-white/45">
        <span className="inline-flex items-center gap-1">
          <Clock3 className="size-2.5 text-primary/80" />
          {time}
        </span>
        <span className="inline-flex items-center gap-1">
          <Users className="size-2.5 text-primary/80" />
          {spots} cupos
        </span>
      </div>
    </div>
  );
}

function MatchesScreen() {
  return (
    <div className="flex h-full flex-col">
      <div className="relative flex-1 bg-[radial-gradient(circle_at_15%_0%,oklch(0.79_0.12_205_/_0.1),transparent_55%)]">
        <StatusBar />
        <ScreenHeader
          title="Partidos cerca"
          subtitle="Caracas · 5 km"
          right={
            <span className="flex items-center gap-1 rounded-full border border-primary/25 bg-primary/[0.08] px-2 py-1 font-mono text-[0.38rem] uppercase tracking-[0.1em] text-primary">
              <span className="size-1 rounded-full bg-primary" />
              En vivo
            </span>
          }
        />

        <div className="mt-4 flex gap-1.5 overflow-hidden px-4">
          {["Todos", "Fútbol 5", "Fútbol 7", "Pádel"].map((item, index) => (
            <span
              key={item}
              className={cn(
                "shrink-0 rounded-full border px-2.5 py-1 text-[0.44rem]",
                index === 0
                  ? "border-primary/40 bg-primary/12 text-primary"
                  : "border-white/10 bg-white/[0.035] text-white/50"
              )}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-3 space-y-2 px-4">
          <MiniMatch
            sport="Fútbol 5"
            title="Pichanga de hoy"
            venue="Cancha La Caimanera · 1.2 km"
            time="Hoy · 7:00 PM"
            price="4"
            spots="3"
          />
          <MiniMatch
            sport="Fútbol 7"
            title="Noche de jueves"
            venue="Cancha Los Mangos · 3.4 km"
            time="Jue · 8:30 PM"
            price="6"
            spots="4"
          />
          <MiniMatch
            sport="Pádel"
            title="Mixto nocturno"
            venue="Cancha El Parque · 4.8 km"
            time="Sáb · 9:00 AM"
            price="8"
            spots="1"
          />
        </div>

        <div className="mx-4 mt-3 flex items-center justify-between rounded-xl border border-primary/25 bg-primary/[0.08] px-3 py-2">
          <span className="text-[0.46rem] font-medium text-primary">Ver mapa de canchas</span>
          <MapPin className="size-3 text-primary" />
        </div>
      </div>
      <BottomNav active="matches" />
    </div>
  );
}

function ConfirmedScreen() {
  return (
    <div className="flex h-full flex-col">
      <div className="relative flex-1 bg-[radial-gradient(circle_at_50%_0%,oklch(0.84_0.14_165_/_0.14),transparent_58%)]">
        <StatusBar />
        <div className="flex flex-col items-center px-4 pt-8 text-center">
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.12 }}
            className="relative flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_10px_oklch(0.84_0.14_165_/_0.22)]"
          >
            <Check className="size-6" />
            <span className="absolute inset-0 animate-pulse-ring rounded-full border border-primary" />
          </motion.span>
          <p className="mt-4 font-display text-xl font-semibold tracking-[-0.04em] text-white">
            ¡Estás dentro!
          </p>
          <p className="mt-1 text-[0.48rem] text-white/45">
            Tu cupo quedó confirmado.
          </p>
        </div>

        <div className="relative mx-4 mt-5 overflow-hidden rounded-2xl border border-primary/25 bg-primary/[0.08] p-3">
          <div className="absolute -right-6 -top-6 size-20 rounded-full bg-primary/10 blur-2xl" />
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="font-mono text-[0.4rem] uppercase tracking-[0.12em] text-primary">
                Fútbol 5 · Confirmado
              </span>
              <p className="mt-1 text-[0.62rem] font-semibold text-white">Pichanga de hoy</p>
              <p className="mt-0.5 text-[0.42rem] text-white/45">Cancha La Caimanera</p>
            </div>
            <div className="grid size-10 grid-cols-3 gap-[2px] rounded-md bg-white p-1" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "rounded-[1px]",
                    [0, 2, 4, 6, 8].includes(index) ? "bg-[#0f172a]" : "bg-white"
                  )}
                />
              ))}
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-primary/15 pt-2 text-[0.42rem] text-white/45">
            <span className="flex items-center gap-1">
              <CalendarDays className="size-2.5 text-primary/80" />
              Hoy, 7:00 PM
            </span>
            <span className="flex items-center gap-1">
              <CreditCard className="size-2.5 text-primary/80" />
              Pase PRO · crédito
            </span>
          </div>
        </div>

        <div className="mx-4 mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5">
          <CircleCheck className="size-3.5 text-primary" />
          <div>
            <p className="text-[0.48rem] font-medium text-white/80">Pago aplicado</p>
            <p className="text-[0.4rem] text-white/40">1 crédito de tu pase · 6/8 restantes</p>
          </div>
        </div>

        <div className="mx-4 mt-3 flex items-center justify-center rounded-xl bg-primary py-2.5 text-[0.5rem] font-semibold text-primary-foreground">
          Ver en Mis partidos
        </div>
      </div>
      <BottomNav active="matches" />
    </div>
  );
}

const screens = {
  location: LocationScreen,
  matches: MatchesScreen,
  confirmed: ConfirmedScreen,
};

export function PhoneFrame({ screen = "location", className }) {
  const Screen = screens[screen] || LocationScreen;
  return (
    <div className={cn("relative w-[16.5rem] sm:w-[17.5rem]", className)}>
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,oklch(0.84_0.14_165_/_0.12),transparent_68%)] blur-2xl"
      />
      <div className="relative rounded-[2.65rem] border border-white/15 bg-[oklch(0.08_0.01_280)] p-1.5 shadow-[0_50px_110px_-35px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.06)_inset]">
        <div className="relative aspect-[9/18.6] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[oklch(0.16_0.022_280)]">
          <div className="pointer-events-none absolute left-1/2 top-1.5 z-30 h-[1.15rem] w-[5.2rem] -translate-x-1/2 rounded-full bg-black/90" />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={screen}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Screen />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <span className="absolute -right-[3px] top-[22%] h-10 w-[2px] rounded-full bg-white/15" aria-hidden="true" />
      <span className="absolute -left-[3px] top-[28%] h-7 w-[2px] rounded-full bg-white/10" aria-hidden="true" />
      <span className="absolute -left-[3px] top-[36%] h-7 w-[2px] rounded-full bg-white/10" aria-hidden="true" />
    </div>
  );
}
