import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Smartphone, Sparkles } from "lucide-react";
import { APP_LINKS, CONTACT_EMAIL } from "@/lib/config";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative pb-6 pt-10 sm:pb-10 sm:pt-14">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line shadow-stage sm:rounded-[2.5rem]">
            <Image
              src="/img/football-action.jpg"
              alt="Balón sobre el césped de una cancha de fútbol"
              fill
              sizes="(min-width: 1024px) 78rem, 100vw"
              className="object-cover object-center opacity-50"
              priority={false}
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.13_0.02_280_/_0.98)_0%,oklch(0.13_0.02_280_/_0.88)_48%,oklch(0.13_0.02_280_/_0.35)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.84_0.14_165_/_0.18),transparent_45%)]" />
            <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-30" />
            <div aria-hidden="true" className="absolute inset-0 pitch-lines opacity-40" />

            <div className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
              <div className="max-w-3xl">
                <p className="eyebrow flex items-center gap-2.5 text-primary">
                  <span className="h-px w-6 bg-primary/70" />
                  Caimanera · Beta abierta
                </p>
                <h2 className="font-display balance mt-5 text-[clamp(2.7rem,6.4vw,5.6rem)] font-semibold text-foreground">
                  La próxima jugada
                  <br />
                  empieza{" "}
                  <span className="text-gradient">aquí.</span>
                </h2>
                <p className="pretty mt-5 max-w-xl text-[0.95rem] leading-7 text-foreground-muted sm:text-[1.02rem]">
                  Ubica tu zona, encuentra un partido con cupo y reserva sin
                  fricción. La cancha, el pase y el pago ya están conectados.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={APP_LINKS.matches}
                    className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-primary px-7 text-[0.92rem] font-semibold text-primary-foreground shadow-[0_16px_44px_-14px_oklch(0.84_0.14_165_/_0.65)] transition-all duration-300 hover:bg-[oklch(0.89_0.12_165)] active:scale-[0.98]"
                  >
                    Encontrar mi partido
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={APP_LINKS.passes}
                    className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-line-strong bg-white/[0.05] px-6 text-[0.88rem] font-medium text-foreground backdrop-blur-md transition-colors hover:border-primary/30 hover:bg-white/[0.09]"
                  >
                    <Sparkles className="size-4 text-primary" />
                    Ver pases
                    <ArrowUpRight className="size-3.5 text-foreground-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[0.7rem] text-foreground-muted">
                  {[
                    { icon: Check, text: "Sin descargas" },
                    { icon: Smartphone, text: "Móvil primero" },
                    { icon: Check, text: "Pago local" },
                  ].map((item) => (
                    <span key={item.text} className="inline-flex items-center gap-1.5">
                      <span className="flex size-4 items-center justify-center rounded-full bg-primary/12 text-primary">
                        <item.icon className="size-2.5" />
                      </span>
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute -right-2 top-1/2 hidden w-[13rem] -translate-y-1/2 xl:block">
                <div className="animate-float rounded-2xl border border-line-strong bg-[oklch(0.17_0.022_280_/_0.88)] p-4 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.5rem] uppercase tracking-[0.12em] text-primary">
                      Hoy
                    </span>
                    <span className="rounded-full bg-primary/12 px-2 py-0.5 text-[0.46rem] text-primary">
                      3 cupos
                    </span>
                  </div>
                  <p className="mt-2 font-display text-lg font-semibold tracking-[-0.03em] text-foreground">
                    Pichanga de hoy
                  </p>
                  <p className="mt-1 text-[0.56rem] text-foreground-muted">
                    Cancha La Caimanera · 1.2 km
                  </p>
                  <div className="mt-3 flex items-center justify-between border-t border-line pt-2.5">
                    <span className="text-[0.52rem] text-foreground-muted">7:00 PM</span>
                    <span className="font-display text-lg font-semibold text-foreground">$4</span>
                  </div>
                </div>
                <div className="mt-3 animate-float-slow rounded-2xl border border-primary/25 bg-[oklch(0.2_0.03_280_/_0.9)] p-3 shadow-xl backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3.5" />
                    </span>
                    <div>
                      <p className="text-[0.58rem] font-semibold text-foreground">Estás dentro</p>
                      <p className="text-[0.46rem] text-foreground-muted">Cupo confirmado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col gap-3 border-t border-line bg-[oklch(0.13_0.02_280_/_0.55)] px-6 py-4 text-[0.66rem] text-foreground-muted backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
              <p className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" />
                Caracas, Venezuela · Fútbol 5 · Fútbol 7 · Pádel
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Quiero%20sumar%20mi%20cancha%20a%20Caimanera`}
                className="group inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
              >
                ¿Tienes una cancha? Hablemos
                <ArrowUpRight className="size-3 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
