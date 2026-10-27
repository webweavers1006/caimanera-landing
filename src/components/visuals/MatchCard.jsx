import { ArrowUpRight, Clock3, MapPin, Users } from "lucide-react";
import { cn, formatUsd } from "@/lib/utils";

const sportStyles = {
  "Fútbol 5": "border-primary/25 bg-primary/10 text-primary",
  "Fútbol 7": "border-cyan/25 bg-cyan/10 text-cyan",
  Pádel: "border-accent/25 bg-accent/10 text-accent",
};

export function SportBadge({ sport, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-1 font-mono text-[0.56rem] font-medium uppercase tracking-[0.12em]",
        sportStyles[sport] || "border-line bg-white/[0.05] text-foreground-muted",
        className
      )}
    >
      <span className="size-1 rounded-full bg-current" />
      {sport}
    </span>
  );
}

export function MatchCard({
  match,
  active = false,
  onSelect,
  className,
  compact = false,
  showLevel = true,
}) {
  const spotsLeft = match.capacity - match.joined;
  const occupancy = Math.min(100, Math.round((match.joined / match.capacity) * 100));
  const Tag = onSelect ? "button" : "div";

  return (
    <Tag
      type={onSelect ? "button" : undefined}
      onClick={onSelect ? () => onSelect(match.id) : undefined}
      aria-pressed={onSelect ? active : undefined}
      className={cn(
        "group relative w-full overflow-hidden rounded-[1.15rem] border bg-card/80 p-3.5 text-left transition-all duration-300",
        active
          ? "border-primary/45 bg-primary/[0.075] shadow-[0_16px_40px_-24px_oklch(0.84_0.14_165_/_0.5)]"
          : "border-line hover:border-line-strong hover:bg-card-elevated/70",
        onSelect && "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
        compact ? "sm:p-3" : "sm:p-4",
        className
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-10 -top-12 size-28 rounded-full blur-2xl transition-opacity duration-300",
          active ? "bg-primary/15 opacity-100" : "bg-primary/10 opacity-0 group-hover:opacity-100"
        )}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0">
          <SportBadge sport={match.sport} />
          <h3
            className={cn(
              "mt-2 truncate font-display font-semibold tracking-[-0.03em] text-foreground",
              compact ? "text-[1.05rem]" : "text-[1.15rem] sm:text-[1.22rem]"
            )}
          >
            {match.title}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-[0.72rem] text-foreground-muted">
            <MapPin className="size-3 shrink-0 text-primary/80" />
            <span className="truncate">{match.venue}</span>
            <span className="text-line-strong">·</span>
            <span className="shrink-0">{match.distance}</span>
          </p>
        </div>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line bg-white/[0.04] text-foreground-muted transition-all duration-300 group-hover:border-primary/35 group-hover:text-primary">
          <ArrowUpRight className="size-3.5" />
        </span>
      </div>

      <div className="relative mt-3 flex items-center gap-2 text-[0.68rem] text-foreground-muted">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.045] px-2 py-1">
          <Clock3 className="size-3 text-primary/75" />
          <span className="font-medium text-foreground/85">{match.day}</span>
          {match.time}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.045] px-2 py-1">
          <Users className="size-3 text-primary/75" />
          <span className="font-medium text-foreground/85">{spotsLeft}</span>
          {spotsLeft === 1 ? "cupo" : "cupos"}
        </span>
        {showLevel && !compact && (
          <span className="hidden truncate rounded-full bg-white/[0.045] px-2 py-1 sm:inline-flex">
            {match.level}
          </span>
        )}
      </div>

      <div className="relative mt-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5" aria-hidden="true">
            {["JP", "MA", "LR"].slice(0, Math.min(3, match.joined)).map((initials, index) => (
              <span
                key={initials}
                className={cn(
                  "flex size-5 items-center justify-center rounded-full border border-card text-[0.44rem] font-semibold text-white/90",
                  index === 0 && "bg-primary-strong",
                  index === 1 && "bg-[oklch(0.48_0.12_205)]",
                  index === 2 && "bg-[oklch(0.56_0.14_50)]"
                )}
              >
                {initials}
              </span>
            ))}
          </div>
          <div className="min-w-0">
            <div className="h-1 w-16 overflow-hidden rounded-full bg-white/10 sm:w-20">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-strong to-primary"
                style={{ width: `${occupancy}%` }}
              />
            </div>
            <p className="mt-1 text-[0.56rem] text-foreground-muted">
              {match.joined} de {match.capacity} jugadores
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-display text-xl font-semibold leading-none text-foreground">
            {formatUsd(match.price)}
          </p>
          <p className="mt-1 text-[0.56rem] text-foreground-muted">por jugador</p>
        </div>
      </div>
    </Tag>
  );
}
