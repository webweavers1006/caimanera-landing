"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, MapPin, Search, Smartphone } from "lucide-react";
import { STEPS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneFrame } from "@/components/visuals/PhoneFrame";

const stepIcons = [MapPin, Search, Check];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(Number(visible.target.dataset.step));
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.1, 0.4, 0.7] }
    );

    stepRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const activeStep = STEPS[active];

  return (
    <section id="como-funciona" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-[oklch(0.55_0.14_285_/_0.12)] blur-[120px]"
      />
      <div className="shell relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Cómo funciona"
            title={
              <>
                Tres pasos.
                <br />
                <span className="text-gradient">Cero fricción.</span>
              </>
            }
            description="La app está diseñada para resolver una sola cosa muy bien: que pasar de la idea de jugar a estar en la cancha tome menos que organizar un grupo."
          />
          <Reveal delay={0.15} className="shrink-0">
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-white/[0.03] p-4">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Smartphone className="size-5" />
              </span>
              <div>
                <p className="text-[0.8rem] font-semibold text-foreground">Funciona en tu navegador</p>
                <p className="mt-0.5 text-[0.68rem] text-foreground-muted">
                  Sin descargas. En móvil primero.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 lg:hidden">
          <div className="grid grid-cols-3 gap-2" role="tablist" aria-label="Pasos de Caimanera">
            {STEPS.map((step, index) => (
              <button
                key={step.id}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls="mobile-step-panel"
                onClick={() => setActive(index)}
                className={cn(
                  "flex flex-col items-start gap-1 rounded-2xl border p-3 text-left transition-all",
                  active === index
                    ? "border-primary/40 bg-primary/[0.08] text-foreground"
                    : "border-line bg-white/[0.02] text-foreground-muted"
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[0.58rem]",
                    active === index ? "text-primary" : "text-foreground-muted"
                  )}
                >
                  {step.number}
                </span>
                <span className="text-[0.75rem] font-semibold">{step.eyebrow}</span>
              </button>
            ))}
          </div>

          <div id="mobile-step-panel" role="tabpanel" className="mt-6">
            <div className="relative flex justify-center py-2">
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-10 h-56 rounded-full bg-primary/10 blur-3xl"
              />
              <PhoneFrame screen={activeStep.screen} className="relative" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mt-8 rounded-3xl border border-line bg-card/50 p-6"
              >
                <p className="eyebrow flex items-center gap-2 text-primary">
                  <span className="h-px w-5 bg-primary/70" />
                  Paso {activeStep.number} · {activeStep.eyebrow}
                </p>
                <h3 className="font-display mt-3 text-3xl font-semibold tracking-[-0.045em]">
                  {activeStep.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground-muted">
                  {activeStep.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {activeStep.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-[0.82rem] text-foreground/80">
                      <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3" />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-16 hidden gap-16 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-start xl:gap-24">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-[1.15rem] top-8 w-px bg-gradient-to-b from-primary/40 via-line to-transparent"
            />
            {STEPS.map((step, index) => {
              const Icon = stepIcons[index];
              const isActive = active === index;
              return (
                <Reveal
                  key={step.id}
                  delay={index * 0.06}
                  className="relative pb-4 last:pb-0"
                >
                  <div
                    ref={(node) => {
                      stepRefs.current[index] = node;
                    }}
                    data-step={index}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    aria-label={`Paso ${step.number}: ${step.title}`}
                    onClick={() => setActive(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActive(index);
                      }
                    }}
                    className={cn(
                      "relative cursor-pointer rounded-3xl border p-6 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 xl:p-7",
                      isActive
                        ? "border-primary/25 bg-primary/[0.045] shadow-[0_24px_60px_-40px_oklch(0.84_0.14_165_/_0.6)]"
                        : "border-transparent hover:border-line hover:bg-white/[0.02]"
                    )}
                  >
                    <div className="flex items-start gap-5">
                      <span
                        className={cn(
                          "relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border font-mono text-[0.62rem] transition-colors",
                          isActive
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-line-strong bg-background text-foreground-muted"
                        )}
                      >
                        {step.number}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <Icon
                            className={cn(
                              "size-4 transition-colors",
                              isActive ? "text-primary" : "text-foreground-muted"
                            )}
                          />
                          <p
                            className={cn(
                              "font-mono text-[0.6rem] uppercase tracking-[0.14em]",
                              isActive ? "text-primary" : "text-foreground-muted"
                            )}
                          >
                            {step.eyebrow}
                          </p>
                        </div>
                        <h3 className="font-display mt-2 text-[1.9rem] font-semibold tracking-[-0.045em] text-foreground xl:text-[2.15rem]">
                          {step.title}
                        </h3>
                        <p className="pretty mt-2.5 text-[0.9rem] leading-6 text-foreground-muted">
                          {step.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {step.bullets.map((bullet) => (
                            <span
                              key={bullet}
                              className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 text-[0.64rem] text-foreground-muted"
                            >
                              {bullet}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={0.1} className="mt-5 pl-14">
              <a
                href="#faq"
                className="group inline-flex items-center gap-2 text-[0.78rem] font-medium text-foreground-muted transition-colors hover:text-foreground"
              >
                ¿Tienes dudas? Mira las preguntas frecuentes
                <ArrowRight className="size-3.5 text-primary transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          <div className="sticky top-28 flex flex-col items-center">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/10"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.045]"
              />
              <PhoneFrame screen={activeStep.screen} className="relative z-10" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -right-16 top-16 z-20 hidden rounded-full border border-line bg-[oklch(0.2_0.025_280_/_0.9)] px-3 py-1.5 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-primary backdrop-blur-md xl:block"
                >
                  {activeStep.number} · {activeStep.eyebrow}
                </motion.span>
              </AnimatePresence>
              <div className="absolute -left-14 bottom-28 z-20 hidden animate-float rounded-2xl border border-line bg-[oklch(0.2_0.025_280_/_0.92)] px-3 py-2.5 shadow-2xl backdrop-blur-md xl:block">
                <p className="font-mono text-[0.48rem] uppercase tracking-[0.1em] text-primary">
                  En vivo
                </p>
                <p className="mt-1 text-[0.62rem] font-semibold text-foreground">
                  3 cupos disponibles
                </p>
              </div>
            </div>
            <p className="mt-8 flex items-center gap-2 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-foreground-muted">
              <span className="size-1.5 rounded-full bg-primary" />
              Vista previa de la app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
