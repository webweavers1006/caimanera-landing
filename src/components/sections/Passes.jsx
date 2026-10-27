import { ArrowUpRight, Check, Sparkles, Ticket } from "lucide-react";
import { APP_LINKS } from "@/lib/config";
import { PLANS } from "@/lib/data";
import { cn, formatUsd } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Passes() {
  return (
    <section id="pases" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[32rem] w-[50rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,oklch(0.84_0.14_165_/_0.08),transparent_65%)] blur-2xl"
      />
      <div className="shell relative">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-card/35 p-4 shadow-stage sm:rounded-[2.5rem] sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
          />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Pases"
              title={
                <>
                  Juega más.
                  <br />
                  <span className="text-gradient">Coordina menos.</span>
                </>
              }
              description="Un pase convierte tus partidos de la semana en un solo movimiento. Los créditos se descuentan solos al inscribirte y todo queda en tu cuenta."
            />
            <Reveal delay={0.12} className="shrink-0">
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-background/40 p-4">
                <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Ticket className="size-4" />
                </span>
                <div>
                  <p className="text-[0.76rem] font-semibold text-foreground">Compra y renueva en la app</p>
                  <p className="mt-0.5 text-[0.64rem] text-foreground-muted">
                    El pase se activa al confirmar el pago.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid items-stretch gap-3.5 lg:grid-cols-3">
            {PLANS.map((plan, index) => (
              <Reveal key={plan.tier} delay={0.08 + index * 0.07} className="h-full">
                <SpotlightCard
                  className={cn(
                    "relative flex h-full flex-col rounded-[1.6rem] border p-5 transition-all duration-300 sm:p-6",
                    plan.featured
                      ? "border-primary/40 bg-[linear-gradient(160deg,oklch(0.25_0.06_160_/_0.75),oklch(0.205_0.025_280_/_0.9))] shadow-[0_30px_80px_-40px_oklch(0.84_0.14_165_/_0.55)]"
                      : "border-line bg-background/40 hover:border-line-strong"
                  )}
                >
                  <div className="mb-3 h-6">
                    {plan.featured && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary px-2.5 py-1 font-mono text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-lg">
                        <Sparkles className="size-2.5" />
                        Recomendado
                      </span>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-foreground-muted">
                        {plan.tier.replaceAll("_", " ")}
                      </p>
                      <h3 className="font-display mt-2 text-[1.7rem] font-semibold tracking-[-0.045em] text-foreground">
                        {plan.name}
                      </h3>
                    </div>
                    <span
                      className={cn(
                        "flex size-8 items-center justify-center rounded-xl border",
                        plan.featured
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : "border-line bg-white/[0.03] text-foreground-muted"
                      )}
                    >
                      <Ticket className="size-4" />
                    </span>
                  </div>

                  <p className="pretty mt-2 min-h-[2.5rem] text-[0.8rem] leading-5 text-foreground-muted">
                    {plan.description}
                  </p>

                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="font-display text-[2.8rem] font-semibold leading-none tracking-[-0.05em] text-foreground">
                      {formatUsd(plan.price, { decimals: 2 })}
                    </span>
                    <span className="text-[0.72rem] text-foreground-muted">/ {plan.cadence}</span>
                  </div>

                  <div className="my-5 h-px bg-line" />

                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-[0.78rem] leading-5 text-foreground/80">
                        <span
                          className={cn(
                            "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
                            plan.featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                          )}
                        >
                          <Check className="size-2.5" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={APP_LINKS.passes}
                    className={cn(
                      "group mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full text-[0.78rem] font-semibold transition-all active:scale-[0.98]",
                      plan.featured
                        ? "bg-primary text-primary-foreground hover:bg-[oklch(0.89_0.12_165)]"
                        : "border border-line-strong bg-white/[0.04] text-foreground hover:border-primary/35 hover:bg-white/[0.07]"
                    )}
                  >
                    {plan.cta}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2 border-t border-line pt-5 text-[0.66rem] leading-5 text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              Precios de referencia en USD. La compra se crea como pago pendiente y se
              activa cuando se confirma en la app.
            </p>
            <a
              href={APP_LINKS.matches}
              className="group inline-flex shrink-0 items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
            >
              También puedes pagar por partido
              <ArrowUpRight className="size-3 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
