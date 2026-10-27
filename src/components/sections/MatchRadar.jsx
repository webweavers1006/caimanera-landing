"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Filter,
  MapPin,
  SlidersHorizontal,
  Sparkles,
  Users,
} from "lucide-react";
import { APP_LINKS } from "@/lib/config";
import { MATCHES, SPORTS } from "@/lib/data";
import { cn, formatUsd } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RadarMap } from "@/components/visuals/RadarMap";
import { MatchCard, SportBadge } from "@/components/visuals/MatchCard";

const FILTERS = ["Todos", ...SPORTS];

export function MatchRadar() {
  const [filter, setFilter] = useState("Todos");
  const [selectedId, setSelectedId] = useState(MATCHES[0].id);

  const filtered = useMemo(
    () => (filter === "Todos" ? MATCHES : MATCHES.filter((match) => match.sport === filter)),
    [filter]
  );
  const selected = filtered.find((match) => match.id === selectedId) || filtered[0];

  return (
    <section id="radar" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-primary/[0.045] blur-[110px]"
      />
      <div className="shell relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Demo interactiva · datos de ejemplo"
            title={
              <>
                El partido ya está{" "}
                <span className="text-gradient">en el mapa.</span>
              </>
            }
            description="Explora el radar como si estuvieras en la app: cambia de deporte, toca un pin y mira cómo se actualiza el partido. Es la misma lógica hiperlocal que ordena todo por distancia."
            className="max-w-3xl"
          />
          <div className="flex shrink-0 flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.035] px-3 py-2 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-foreground-muted">
              <MapPin className="size-3 text-primary" />
              Caracas · 5 km
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.07] px-3 py-2 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-primary">
              <span className="size-1.5 animate-blink rounded-full bg-primary" />
              Interactivo
            </span>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-line bg-card/50 shadow-stage">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          />

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-white/[0.018] px-4 py-3 sm:px-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2 rounded-full bg-white/15" />
                <span className="size-2 rounded-full bg-white/10" />
                <span className="size-2 rounded-full bg-white/[0.07]" />
              </div>
              <span className="hidden h-4 w-px bg-line sm:block" />
              <p className="flex items-center gap-2 text-[0.72rem] font-medium text-foreground/90">
                <SlidersHorizontal className="size-3.5 text-primary" />
                Buscar partidos
              </p>
            </div>
            <div className="flex items-center gap-3 text-[0.64rem] text-foreground-muted">
              <span className="hidden items-center gap-1.5 sm:inline-flex">
                <CalendarDays className="size-3.5 text-primary/75" />
                Hoy y próximos días
              </span>
              <span className="h-3 w-px bg-line" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 text-primary/75" />
                Ordenado por cercanía
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[25.5rem_1fr]">
            <div className="border-b border-line p-4 sm:p-5 lg:border-b-0 lg:border-r">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">
                    {filtered.length} partidos
                  </p>
                  <p className="mt-0.5 text-[0.68rem] text-foreground-muted">
                    Cerca de tu ubicación
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-background/50 px-2.5 py-1.5 text-[0.6rem] text-foreground-muted">
                  <Filter className="size-3 text-primary/75" />
                  Filtros
                </span>
              </div>

              <div className="hide-scrollbar mt-4 flex gap-1.5 overflow-x-auto pb-1">
                {FILTERS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFilter(item)}
                    aria-pressed={filter === item}
                    className={cn(
                      "shrink-0 rounded-full border px-3 py-1.5 text-[0.68rem] font-medium transition-all",
                      filter === item
                        ? "border-primary/40 bg-primary/12 text-primary"
                        : "border-line bg-white/[0.025] text-foreground-muted hover:border-line-strong hover:text-foreground"
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="hide-scrollbar mt-4 max-h-[31rem] space-y-2.5 overflow-y-auto pr-0.5">
                <AnimatePresence initial={false} mode="popLayout">
                  {filtered.map((match) => (
                    <motion.div
                      key={match.id}
                      layout
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.24 }}
                    >
                      <MatchCard
                        match={match}
                        active={selected?.id === match.id}
                        onSelect={setSelectedId}
                        compact
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <div className="relative min-h-[26rem] p-3 sm:p-4 lg:min-h-[36rem]">
              <RadarMap
                matches={filtered}
                activeId={selected?.id}
                onSelect={setSelectedId}
                className="h-full min-h-[24rem]"
                sweep
              />

              {selected && (
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={selected.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.22 }}
                      className="rounded-2xl border border-line-strong bg-[oklch(0.155_0.022_280_/_0.88)] p-3.5 shadow-2xl backdrop-blur-xl sm:p-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <SportBadge sport={selected.sport} />
                            <span className="font-mono text-[0.52rem] uppercase tracking-[0.12em] text-foreground-muted">
                              {selected.distance} · {selected.area}
                            </span>
                          </div>
                          <p className="mt-1.5 font-display text-xl font-semibold tracking-[-0.035em] text-foreground sm:text-2xl">
                            {selected.title}
                          </p>
                          <p className="mt-0.5 text-[0.68rem] text-foreground-muted">
                            {selected.venue} · {selected.level}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-2xl font-semibold leading-none text-foreground">
                            {formatUsd(selected.price)}
                          </p>
                          <p className="mt-1 text-[0.54rem] text-foreground-muted">por jugador</p>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3">
                        <div className="flex flex-wrap items-center gap-3 text-[0.64rem] text-foreground-muted">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock3 className="size-3.5 text-primary/80" />
                            {selected.day} · {selected.time}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Users className="size-3.5 text-primary/80" />
                            {selected.capacity - selected.joined} cupos libres
                          </span>
                        </div>
                        <Link
                          href={APP_LINKS.matches}
                          className="group inline-flex h-8 items-center gap-1.5 rounded-full bg-primary px-3.5 text-[0.64rem] font-semibold text-primary-foreground transition-colors hover:bg-[oklch(0.89_0.12_165)]"
                        >
                          Abrir en Caimanera
                          <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { icon: Sparkles, title: "Filtros que viven en la URL", text: "Comparte una búsqueda y se abre igual para todos." },
            { icon: MapPin, title: "Mapa y lista, misma data", text: "Toca un pin o una tarjeta: el contexto no se pierde." },
            { icon: Users, title: "Preview antes de reservar", text: "Cupos, precio y cancha claros antes de confirmar." },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-2xl border border-line bg-white/[0.025] p-4"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-4" />
              </span>
              <div>
                <p className="text-[0.78rem] font-semibold text-foreground">{item.title}</p>
                <p className="mt-0.5 text-[0.68rem] leading-5 text-foreground-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
