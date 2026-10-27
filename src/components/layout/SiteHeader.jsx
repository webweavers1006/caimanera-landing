"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { APP_LINKS, NAV_LINKS } from "@/lib/config";
import { cn } from "@/lib/utils";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-primary-strong via-primary to-accent"
    />
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const menuButtonRef = useRef(null);
  const onHome = pathname === "/";

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 18));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!onHome) return;

    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    const backgroundNodes = [
      document.querySelector("header"),
      document.querySelector("main"),
      document.querySelector("footer"),
    ].filter(Boolean);

    document.body.style.overflow = "hidden";
    backgroundNodes.forEach((node) => node.setAttribute("inert", ""));
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = document.getElementById("mobile-menu");
      if (!dialog) return;
      const focusable = [...dialog.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )].filter((element) => element.getClientRects().length > 0);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;

      if (event.shiftKey && current === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      backgroundNodes.forEach((node) => node.removeAttribute("inert"));
      window.removeEventListener("keydown", onKeyDown);
      menuButton?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      <ScrollProgress />
      <header className="fixed inset-x-0 top-0 z-50 pt-2 sm:pt-3">
        <div className="shell">
          <nav
            aria-label="Navegación principal"
            className={cn(
              "flex h-16 items-center justify-between rounded-2xl px-3.5 transition-all duration-500 sm:px-4",
              scrolled
                ? "glass shadow-[0_18px_50px_-24px_rgba(0,0,0,0.85)]"
                : "border border-transparent bg-transparent"
            )}
          >
            <a
              href={onHome ? "#top" : "/"}
              className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Caimanera, ir al inicio"
            >
              <Logo />
            </a>

            <div className="hidden items-center gap-0.5 lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={onHome ? link.href : `/${link.href}`}
                  aria-current={onHome && activeSection === link.href ? "location" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[0.8rem] font-medium text-foreground-muted transition-colors hover:text-foreground xl:px-4 xl:text-[0.84rem]",
                    onHome && activeSection === link.href && "text-foreground"
                  )}
                >
                  {onHome && activeSection === link.href && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full border border-line bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden items-center gap-2 rounded-full border border-line bg-white/[0.035] px-3 py-1.5 text-[0.68rem] font-medium text-foreground-muted xl:flex">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                </span>
                Beta abierta
              </span>
              <Button
                href={APP_LINKS.login}
                size="sm"
                variant="secondary"
                className="hidden sm:inline-flex"
                showArrow
              >
                Entrar
              </Button>
              <button
                ref={menuButtonRef}
                type="button"
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen(true)}
                className="flex size-10 items-center justify-center rounded-full border border-line bg-white/[0.04] text-foreground transition-colors hover:bg-white/[0.09] lg:hidden"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[oklch(0.13_0.022_280_/_0.98)] backdrop-blur-2xl lg:hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 grid-lines opacity-60"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="shell relative flex h-20 shrink-0 items-center justify-between">
              <Logo />
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setMenuOpen(false)}
                className="flex size-10 items-center justify-center rounded-full border border-line bg-white/[0.06] text-foreground"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="shell relative flex flex-1 flex-col justify-between pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-8">
              <nav aria-label="Navegación móvil" className="flex flex-col">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={onHome ? link.href : `/${link.href}`}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + index * 0.045, duration: 0.4 }}
                    className="group flex items-center justify-between border-b border-line py-4"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[0.64rem] text-primary">
                        0{index + 1}
                      </span>
                      <span className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
                        {link.label}
                      </span>
                    </span>
                    <ArrowUpRight className="size-5 text-foreground-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
                className="mt-10 space-y-3"
              >
                <Button href={APP_LINKS.login} size="lg" className="w-full" showArrow>
                  Entrar a Caimanera
                </Button>
                <p className="text-center text-xs leading-5 text-foreground-muted">
                  La plataforma está en beta abierta.
                  <br />
                  Fútbol 5, fútbol 7 y pádel · Caracas.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
