import { Circle } from "lucide-react";

const ITEMS = [
  "Fútbol 5",
  "Fútbol 7",
  "Pádel",
  "Juega cerca",
  "Cupos reales",
  "Pago local",
  "Más cancha",
];

export function Ticker() {
  return (
    <section aria-label="Deportes y promesas de Caimanera" className="relative overflow-hidden border-y border-line bg-white/[0.018]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent sm:w-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent sm:w-40"
      />
      <div className="marquee-track items-center gap-6 py-5 sm:gap-9 sm:py-6">
        {[0, 1].map((set) => (
          <div
            key={set}
            aria-hidden={set === 1}
            className="flex shrink-0 items-center gap-6 sm:gap-9"
          >
            {ITEMS.map((item, index) => (
              <div key={`${set}-${item}`} className="flex items-center gap-6 sm:gap-9">
                <span
                  className={
                    index % 3 === 1
                      ? "font-display whitespace-nowrap text-3xl font-medium text-outline sm:text-4xl"
                      : "font-display whitespace-nowrap text-3xl font-medium text-foreground/90 sm:text-4xl"
                  }
                >
                  {item}
                </span>
                <Circle className="size-2 shrink-0 fill-primary/60 text-primary/60" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
