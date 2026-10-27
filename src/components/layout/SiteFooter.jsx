import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { APP_LINKS, CONTACT_EMAIL, NAV_LINKS, SITE } from "@/lib/config";

const productLinks = [
  { label: "Radar de partidos", href: "/#radar" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Pases", href: "/#pases" },
  { label: "Canchas", href: "/#canchas" },
  { label: "Preguntas frecuentes", href: "/#faq" },
];

const appLinks = [
  { label: "Iniciar sesión", href: APP_LINKS.login },
  { label: "Buscar partidos", href: APP_LINKS.matches },
  { label: "Ver canchas", href: APP_LINKS.courts },
  { label: "Mi cuenta", href: APP_LINKS.account },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <div className="shell relative pb-10 pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.65fr_0.65fr_0.8fr]">
          <div className="max-w-sm">
            <Link href="/" aria-label="Caimanera, ir al inicio" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-5 text-sm leading-6 text-foreground-muted">
              La plataforma hiperlocal para encontrar partidos y canchas cerca de
              ti. Menos coordinación, más juego.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/[0.08] px-3 py-1.5 text-[0.7rem] font-medium text-primary">
                <span className="size-1.5 rounded-full bg-primary" />
                Beta abierta
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-[0.7rem] text-foreground-muted">
                <MapPin className="size-3" />
                {SITE.location}
              </span>
            </div>
          </div>

          <FooterColumn title="Producto" links={productLinks} />
          <FooterColumn title="La app" links={appLinks} />

          <div>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-foreground-muted">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-foreground-muted transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 text-primary/80" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <Link
                  href="/#canchas"
                  className="inline-flex items-center gap-2 text-foreground-muted transition-colors hover:text-foreground"
                >
                  <ArrowUpRight className="size-4 text-primary/80" />
                  Suma tu cancha
                </Link>
              </li>
            </ul>
            <Button
              href={APP_LINKS.login}
              variant="outline"
              size="sm"
              className="mt-6"
              showArrow
            >
              Entrar a la app
            </Button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-line pt-6 text-[0.72rem] text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Caimanera. Hecho para jugar cerca.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="/terminos"
              className="transition-colors hover:text-foreground"
            >
              Términos y condiciones
            </a>
            <a
              href="/privacidad"
              className="transition-colors hover:text-foreground"
            >
              Privacidad
            </a>
            <a
              href="/creditos"
              className="transition-colors hover:text-foreground"
            >
              Créditos de imágenes
            </a>
            <span className="hidden text-line-strong sm:inline">·</span>
            <span>Fútbol 5 · Fútbol 7 · Pádel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-foreground-muted">
        {title}
      </p>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((link) => {
          const className =
            "text-foreground-muted transition-colors hover:text-foreground";
          return (
            <li key={link.label}>
              {link.href.startsWith("/") ? (
                <Link href={link.href} className={className}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} className={className}>
                  {link.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
