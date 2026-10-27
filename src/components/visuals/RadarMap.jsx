"use client";

import { MapPin, LocateFixed, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const AREA_LABELS = [
  { label: "LA CAIMANERA", className: "left-[8%] top-[26%]" },
  { label: "EL HATILLO", className: "right-[9%] top-[20%]" },
  { label: "PARQUE DEL ESTE", className: "bottom-[15%] right-[8%]" },
];

export function RadarMap({
  matches = [],
  activeId,
  onSelect,
  className,
  showControls = true,
  showLabels = true,
  sweep = false,
}) {
  const active = matches.find((match) => match.id === activeId) || matches[0];

  return (
    <div
      className={cn(
        "relative isolate h-full min-h-[20rem] w-full overflow-hidden rounded-[1.65rem] border border-line bg-[oklch(0.19_0.03_190)]",
        className
      )}
      role="group"
      aria-label="Mapa de partidos cercanos"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_35%,oklch(0.33_0.07_175_/_0.55),transparent_55%),radial-gradient(circle_at_20%_85%,oklch(0.32_0.06_250_/_0.45),transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.55] [background-image:linear-gradient(to_right,oklch(1_0_0_/_0.045)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0_/_0.045)_1px,transparent_1px)] [background-size:36px_36px]" />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 size-full"
      >
        <defs>
          <linearGradient id="park" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.12 155)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="oklch(0.62 0.12 155)" stopOpacity="0.06" />
          </linearGradient>
        </defs>

        <rect x="5" y="7" width="25" height="18" rx="2.5" fill="url(#park)" />
        <rect x="63" y="50" width="29" height="26" rx="3" fill="url(#park)" />
        <rect x="36" y="72" width="16" height="14" rx="2" fill="oklch(0.55 0.08 250 / 0.1)" />
        <rect x="55" y="5" width="17" height="12" rx="2" fill="oklch(1 0 0 / 0.035)" />

        <g fill="none" stroke="oklch(1 0 0 / 0.14)" strokeWidth="1.5" vectorEffect="non-scaling-stroke">
          <path d="M-6 26 C 12 22, 24 29, 38 26 S 62 16, 79 22 S 96 26, 108 23" />
          <path d="M-5 55 C 14 51, 27 60, 45 57 S 76 48, 108 56" />
          <path d="M-4 84 C 18 79, 31 88, 52 83 S 82 75, 106 84" />
          <path d="M18 -5 C 20 18, 9 32, 14 47 S 18 73, 12 108" />
          <path d="M47 -4 C 49 14, 43 28, 48 43 S 56 75, 51 105" />
          <path d="M77 -4 C 73 17, 82 34, 79 50 S 72 79, 81 104" />
          <path d="M34 38 C 38 44, 44 47, 47 57" strokeWidth="1" opacity="0.65" />
          <path d="M55 41 C 62 38, 69 33, 81 32" strokeWidth="1" opacity="0.65" />
          <path d="M27 68 C 34 63, 41 63, 48 67" strokeWidth="1" opacity="0.65" />
          <path d="M18 26 C 24 34, 26 41, 25 52" strokeWidth="1" opacity="0.65" />
        </g>

        <g fill="none" stroke="oklch(1 0 0 / 0.24)" strokeWidth="2" vectorEffect="non-scaling-stroke">
          <path d="M-2 40 C 18 35, 35 44, 54 40 S 84 30, 103 39" />
          <path d="M62 -2 C 66 20, 58 37, 63 55 S 70 84, 64 104" />
        </g>

        <g fill="oklch(1 0 0 / 0.18)">
          <circle cx="18" cy="26" r="0.65" />
          <circle cx="88" cy="39" r="0.5" />
          <circle cx="48" cy="57" r="0.55" />
          <circle cx="27" cy="68" r="0.45" />
        </g>
      </svg>

      {showLabels &&
        AREA_LABELS.map((area) => (
          <span
            key={area.label}
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute font-mono text-[0.44rem] tracking-[0.18em] text-white/30",
              area.className
            )}
          >
            {area.label}
          </span>
        ))}

      {sweep && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 size-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 size-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 size-[78%] -translate-x-1/2 -translate-y-1/2 animate-radar rounded-full opacity-30 [background:conic-gradient(from_0deg,transparent_0deg,transparent_300deg,oklch(0.84_0.14_165_/_0.35)_350deg,transparent_360deg)] [mask-image:radial-gradient(circle,transparent_38%,black_40%,black_72%,transparent_74%)]"
          />
        </>
      )}

      {matches.map((match) => {
        const isActive = match.id === active?.id;
        return (
          <div
            key={match.id}
            className="absolute"
            style={{ left: `${match.pin.x}%`, top: `${match.pin.y}%` }}
          >
            <button
              type="button"
              onClick={() => onSelect?.(match.id)}
              aria-pressed={isActive}
              aria-label={`${match.sport}: ${match.title}, ${match.venue}, ${match.distance}`}
              className={cn(
                "group relative flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isActive ? "z-20 scale-110" : "z-10 hover:scale-110"
              )}
            >
              {isActive && (
                <>
                  <span className="absolute inset-0 animate-pulse-ring rounded-full border border-primary/70" />
                  <span className="absolute -inset-2 rounded-full border border-primary/20" />
                </>
              )}
              <span
                className={cn(
                  "relative flex size-4 items-center justify-center rounded-full border-[2.5px] shadow-[0_4px_14px_rgba(0,0,0,0.5)] transition-colors",
                  isActive
                    ? "border-[oklch(0.155_0.022_280)] bg-primary"
                    : "border-[oklch(0.155_0.022_280)] bg-white/75 group-hover:bg-white"
                )}
              >
                <span
                  className={cn(
                    "size-1 rounded-full",
                    isActive ? "bg-[oklch(0.155_0.022_280)]" : "bg-[oklch(0.155_0.022_280)]/50"
                  )}
                />
              </span>
            </button>

            {isActive && (
              <div className="pointer-events-none absolute left-5 top-4 z-20 w-max max-w-[13rem] -translate-y-full rounded-xl border border-line-strong bg-[oklch(0.17_0.022_280_/_0.92)] px-3 py-2 shadow-2xl backdrop-blur-md">
                <p className="text-[0.64rem] font-semibold text-foreground">
                  {match.venue}
                </p>
                <p className="mt-0.5 font-mono text-[0.54rem] uppercase tracking-[0.1em] text-primary">
                  {match.sport} · {match.distance}
                </p>
              </div>
            )}
          </div>
        );
      })}

      <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-line bg-[oklch(0.15_0.02_280_/_0.7)] px-3 py-1.5 backdrop-blur-md">
        <MapPin className="size-3 text-primary" />
        <span className="font-mono text-[0.52rem] uppercase tracking-[0.14em] text-white/60">
          {active ? active.area : "Caracas"}
        </span>
      </div>

      {showControls && (
        <div className="absolute right-3 top-3 flex flex-col overflow-hidden rounded-xl border border-line bg-[oklch(0.15_0.02_280_/_0.72)] backdrop-blur-md">
          <span className="flex size-8 items-center justify-center border-b border-line text-white/60">
            <Plus className="size-3.5" />
          </span>
          <span className="flex size-8 items-center justify-center border-b border-line text-white/60">
            <Minus className="size-3.5" />
          </span>
          <span className="flex size-8 items-center justify-center text-primary">
            <LocateFixed className="size-3.5" />
          </span>
        </div>
      )}
    </div>
  );
}
