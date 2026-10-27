"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Check, ChevronDown, MapPin, Search, Sparkles, Users } from "lucide-react";
import { APP_LINKS } from "@/lib/config";
import { MATCHES } from "@/lib/data";
import { cn, formatUsd } from "@/lib/utils";
import { RadarMap } from "@/components/visuals/RadarMap";
import { SportBadge } from "@/components/visuals/MatchCard";
import { LogoMark } from "@/components/brand/Logo";

const HERO_MATCHES = MATCHES.slice(0, 4);

function HeroVisual() {
  const [activeId, setActiveId] = useState(HERO_MATCHES[0].id);
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [5, -5]), {
    stiffness: 140,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-7, 7]), {
    stiffness: 140,
    damping: 24,
  });

  const activeMatch = HERO_MATCHES.find((match) => match.id === activeId) || HERO_MATCHES[0];

  function handlePointerMove(event) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="perspective-1200 relative mx-auto w-full max-w-[35.5rem] lg:mx-0"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="tilt-stage preserve-3d relative"
      >
        <div
          aria-hidden="true"
          className="absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle,oklch(0.84_0.14_165_/_0.18),transparent_67%)] blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-8 animate-drift rounded-full border border-dashed border-primary/10"
        />

        <div className="glass relative rounded-[2rem] p-2 shadow-stage sm:p-2.5">
          <div className="overflow-hidden rounded-[1.55rem] border border-line bg-[oklch(0.175_0.022_280_/_0.84)]">
            <div className="flex items-center justify-between gap-3 border-b border-line px-3.5 py-3">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <Search className="size-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[0.7rem] font-medium text-foreground">
                    Partidos cerca de ti
                  </p>
                  <p className="flex items-center gap-1 text-[0.55rem] text-foreground-muted">
                    <MapPin className="size-2.5 text-primary" />
                    Caracas · 5 km
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/[0.08] px-2 py-1 font-mono text-[0.5rem] uppercase tracking-[0.1em] text-primary">
                <span className="size-1 animate-blink rounded-full bg-primary" />
                En vivo
              </span>
            </div>

            <div className="relative h-[18.5rem] p-2.5 sm:h-[20.5rem]">
              <RadarMap
                matches={HERO_MATCHES}
                activeId={activeId}
                onSelect={setActiveId}
                showControls
                sweep
                className="min-h-0"
              />
              <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-1.5 rounded-full border border-line bg-[oklch(0.15_0.02_280_/_0.72)] px-2.5 py-1.5 backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="font-mono text-[0.5rem] uppercase tracking-[0.12em] text-white/65">
                  {HERO_MATCHES.length} partidos
                </span>
              </div>
            </div>

            <div className="border-t border-line p-2.5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeMatch.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-[1.15rem] border border-line bg-white/[0.035] p-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <SportBadge sport={activeMatch.sport} />
                      <p className="mt-1.5 truncate font-display text-[1.02rem] font-semibold text-foreground">
                        {activeMatch.title}
                      </p>
                      <p className="truncate text-[0.6rem] text-foreground-muted">
                        {activeMatch.venue} · {activeMatch.distance}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-display text-xl font-semibold leading-none">
                        {formatUsd(activeMatch.price)}
                      </p>
                      <p className="mt-1 text-[0.52rem] text-foreground-muted">por jugador</p>
                    </div>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-[0.58rem] text-foreground-muted">
                      <Users className="size-3 text-primary/80" />
                      {activeMatch.capacity - activeMatch.joined} cupos · {activeMatch.day} {activeMatch.time}
                    </span>
                    <a
                      href={APP_LINKS.matches}
                      className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[0.56rem] font-semibold text-primary-foreground transition-colors hover:bg-[oklch(0.89_0.12_165)]"
                    >
                      Reservar
                      <ArrowRight className="size-2.5" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="absolute -right-3 top-[20%] animate-float sm:-right-8 lg:-right-12">
          <div className="w-[9.6rem] rounded-2xl border border-line-strong bg-[oklch(0.205_0.03_280_/_0.92)] p-3 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="flex size-7 items-center justify-center rounded-lg bg-accent/12 text-accent">
                <Sparkles className="size-3.5" />
              </span>
              <span className="font-mono text-[0.45rem] uppercase tracking-[0.1em] text-primary">
                Pase PRO
              </span>
            </div>
            <p className="mt-2 text-[0.62rem] text-foreground-muted">Te quedan</p>
            <div className="flex items-end gap-1">
              <span className="font-display text-2xl font-semibold leading-none">6</span>
              <span className="mb-0.5 text-[0.55rem] text-foreground-muted">/ 8 partidos</span>
            </div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary-strong to-primary" />
            </div>
          </div>
        </div>

        <div className="absolute -bottom-5 -left-3 animate-float-slow sm:-left-8 lg:-left-12">
          <div className="flex items-center gap-2 rounded-full border border-primary/25 bg-[oklch(0.205_0.03_280_/_0.9)] py-2 pl-2 pr-3.5 shadow-xl backdrop-blur-xl">
            <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="size-3.5" />
            </span>
            <div>
              <p className="text-[0.6rem] font-semibold text-foreground">Inscripción confirmada</p>
              <p className="text-[0.48rem] text-foreground-muted">Pichanga de hoy · 7:00 PM</p>
            </div>
          </div>
        </div>

        <div className="absolute -right-1 -top-4 flex items-center gap-2 rounded-full border border-line bg-[oklch(0.205_0.03_280_/_0.9)] px-3 py-1.5 shadow-xl backdrop-blur-xl sm:-right-5">
          <LogoMark className="size-5 rounded-[6px]" />
          <span className="font-mono text-[0.52rem] uppercase tracking-[0.12em] text-foreground-muted">
            3 canchas cerca
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-lines opacity-70" />
        <div className="absolute -left-24 top-0 h-[38rem] w-[38rem] rounded-full bg-primary/[0.06] blur-[110px]" />
        <div className="absolute -right-40 top-32 h-[34rem] w-[34rem] rounded-full bg-[oklch(0.55_0.14_285_/_0.18)] blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-[38rem] -translate-x-1/2 rounded-full bg-accent/[0.035] blur-[100px]" />
        <div className="absolute left-[8%] top-24 h-2 w-2 rounded-full bg-primary/60 shadow-[0_0_24px_6px_oklch(0.84_0.14_165_/_0.35)]" />
        <div className="absolute right-[16%] top-[22%] h-1.5 w-1.5 rounded-full bg-accent/60 shadow-[0_0_20px_5px_oklch(0.85_0.16_92_/_0.25)]" />
        <div className="absolute bottom-[20%] left-[5%] h-1 w-1 rounded-full bg-cyan/60 shadow-[0_0_18px_4px_oklch(0.79_0.12_205_/_0.25)]" />
      </div>

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-9 xl:gap-12">
          <div className="min-w-0">
            <motion.div
              data-reveal=""
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/[0.07] py-1.5 pl-2 pr-3.5"
            >
              <span className="relative flex size-5 items-center justify-center rounded-full bg-primary/15">
                <span className="absolute size-2 animate-ping rounded-full bg-primary/50" />
                <span className="relative size-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.14em] text-primary">
                Beta abierta · Caracas
              </span>
            </motion.div>

            <motion.h1
              data-reveal=""
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display mt-7 text-[clamp(3.1rem,7.2vw,6.4rem)] font-semibold text-foreground"
            >
              El partido
              <br />
              está{" "}
              <span className="relative inline-block">
                <span className="text-gradient">a la vuelta</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 18"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-primary/35 sm:-bottom-2 sm:h-3"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 13C74 5 176 4 297 9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="text-outline">de la esquina.</span>
            </motion.h1>

            <motion.p
              data-reveal=""
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pretty mt-7 max-w-lg text-[0.98rem] leading-7 text-foreground-muted sm:text-[1.06rem] sm:leading-8"
            >
              Descubre canchas y partidos cerca de ti, reserva en segundos y juega
              más con un solo pase. Fútbol 5, fútbol 7 y pádel sin coordinar por
              WhatsApp.
            </motion.p>

            <motion.div
              data-reveal=""
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href={APP_LINKS.matches}
                className="group relative inline-flex h-13 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-primary px-7 text-[0.94rem] font-semibold text-primary-foreground shadow-[0_16px_44px_-14px_oklch(0.84_0.14_165_/_0.65)] transition-all duration-300 hover:bg-[oklch(0.89_0.12_165)] hover:shadow-[0_20px_54px_-14px_oklch(0.84_0.14_165_/_0.75)] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <Search className="size-4" />
                  Encontrar mi partido
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/25 blur-md transition-transform duration-700 group-hover:translate-x-[420%]"
                />
              </Link>
              <a
                href="#como-funciona"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-line-strong bg-white/[0.035] px-6 text-[0.9rem] font-medium text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.07]"
              >
                Ver cómo funciona
                <ChevronDown className="size-4 text-foreground-muted transition-transform group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div
              data-reveal=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.48 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[0.72rem] text-foreground-muted"
            >
              {["Reserva en segundos", "Cupos en tiempo real", "Paga a tu manera"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <span className="flex size-4 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Check className="size-2.5" />
                  </span>
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              data-reveal=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex items-center gap-5 border-t border-line pt-5 sm:gap-8"
            >
              <HeroStat value="3" label="deportes" />
              <span className="h-8 w-px bg-line" />
              <HeroStat value="4" label="formas de pago" />
              <span className="h-8 w-px bg-line" />
              <HeroStat value="0" label="descargas" />
            </motion.div>
          </div>

          <motion.div
            data-reveal=""
            initial={{ opacity: 0, y: 34, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:pl-4"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      <div className="shell relative mt-16 hidden items-center justify-between sm:flex lg:mt-20">
        <div className="flex items-center gap-2 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-foreground-muted/70">
          <span className="h-px w-8 bg-line-strong" />
          Hecho para la cancha real
        </div>
        <a
          href="#radar"
          className="group flex items-center gap-2 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-foreground-muted/70 transition-colors hover:text-foreground"
        >
          Desliza para explorar
          <span className="flex size-6 items-center justify-center rounded-full border border-line-strong transition-colors group-hover:border-primary/40">
            <ChevronDown className="size-3" />
          </span>
        </a>
      </div>
    </section>
  );
}

function HeroStat({ value, label }) {
  return (
    <div>
      <p className="font-display text-2xl font-semibold leading-none text-foreground">
        {value}
      </p>
      <p className={cn("mt-1 font-mono text-[0.54rem] uppercase tracking-[0.12em] text-foreground-muted")}>
        {label}
      </p>
    </div>
  );
}
