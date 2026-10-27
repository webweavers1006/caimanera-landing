import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Search } from "lucide-react";
import { APP_LINKS } from "@/lib/config";

export const metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="contenido" className="relative flex min-h-svh items-center overflow-hidden pb-20 pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[110px]"
      />
      <div className="shell relative text-center">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-primary">
          Error 404
        </p>
        <p className="font-display mt-4 text-[clamp(6rem,20vw,14rem)] font-semibold leading-none text-outline">
          404
        </p>
        <h1 className="font-display mx-auto mt-2 max-w-2xl text-[clamp(2rem,4.5vw,3.4rem)] font-semibold tracking-[-0.05em] text-foreground">
          Ese partido no existe <span className="text-gradient">(o ya terminó).</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-foreground-muted">
          La página que buscas no está en esta cancha. Vuelve al inicio o entra
          a la app para encontrar tu próximo partido.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong bg-white/[0.04] px-5 text-[0.8rem] font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-white/[0.07]"
          >
            <ArrowLeft className="size-3.5" />
            Volver al inicio
          </Link>
          <a
            href={APP_LINKS.matches}
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-[0.8rem] font-semibold text-primary-foreground transition-colors hover:bg-[oklch(0.89_0.12_165)]"
          >
            <Search className="size-3.5" />
            Buscar un partido
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </main>
  );
}
