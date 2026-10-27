import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="eyebrow mb-4 flex items-center gap-2.5">
          {align === "left" && <span className="h-px w-6 bg-primary/70" />}
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display balance text-[clamp(2.25rem,5.6vw,4.25rem)] font-semibold text-foreground",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="pretty mt-5 max-w-2xl text-[0.98rem] leading-7 text-foreground-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </Reveal>
  );
}
