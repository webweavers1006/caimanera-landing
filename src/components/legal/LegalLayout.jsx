import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import { APP_LINKS, CONTACT_EMAIL } from "@/lib/config";
import { Reveal } from "@/components/ui/Reveal";

export function LegalPageLayout({
  eyebrow = "Legal",
  title,
  description,
  updated,
  toc,
  children,
}) {
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

        <Reveal className="mt-8 max-w-3xl">
          <p className="eyebrow flex items-center gap-2.5 text-primary">
            <span className="h-px w-6 bg-primary/70" />
            {eyebrow}
          </p>
          <h1 className="font-display balance mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold text-foreground">
            {title}
          </h1>
          <p className="pretty mt-5 max-w-2xl text-[0.95rem] leading-7 text-foreground-muted sm:text-[1.02rem]">
            {description}
          </p>
          <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-foreground-muted/75">
            Última actualización · {updated}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[15rem_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-foreground-muted">
              En esta página
            </p>
            <nav aria-label="Índice legal" className="mt-4">
              <ol className="space-y-2.5 border-l border-line">
                {toc.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group flex items-baseline gap-2 border-l border-transparent py-0.5 pl-4 text-[0.74rem] leading-5 text-foreground-muted transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      <span className="font-mono text-[0.54rem] text-primary/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-8 rounded-2xl border border-line bg-white/[0.025] p-4">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="size-4" />
              </span>
              <p className="mt-3 text-[0.72rem] font-semibold text-foreground">Tus datos, en claro</p>
              <p className="mt-1 text-[0.66rem] leading-5 text-foreground-muted">
                Si tienes dudas sobre este documento, escríbenos.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 inline-flex items-center gap-1.5 text-[0.66rem] font-medium text-primary"
              >
                <Mail className="size-3" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </aside>

          <article className="min-w-0 max-w-3xl">{children}</article>
        </div>

        <Reveal className="mt-16 flex flex-col justify-between gap-4 rounded-2xl border border-line bg-white/[0.025] p-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-[0.8rem] font-semibold text-foreground">¿Listo para jugar?</p>
            <p className="mt-1 text-[0.72rem] text-foreground-muted">
              Encuentra un partido cerca de ti y reserva tu cupo.
            </p>
          </div>
          <a
            href={APP_LINKS.matches}
            className="group inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-primary px-4 text-[0.72rem] font-semibold text-primary-foreground transition-colors hover:bg-[oklch(0.89_0.12_165)]"
          >
            Abrir Caimanera
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </main>
  );
}

export function LegalSection({ id, number, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line py-8 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[0.6rem] text-primary">{String(number).padStart(2, "0")}</span>
        <h2 className="font-display text-[1.55rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.75rem]">
          {title}
        </h2>
      </div>
      <div className="legal-copy mt-4">{children}</div>
    </section>
  );
}

export function LegalNote({ children }) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-primary/[0.055] p-4 text-[0.8rem] leading-6 text-foreground/75">
      {children}
    </div>
  );
}
