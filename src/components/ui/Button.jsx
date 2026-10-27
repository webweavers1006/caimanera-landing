import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_14px_36px_-14px_oklch(0.84_0.14_165_/_0.65)] hover:bg-[oklch(0.88_0.13_165)] hover:shadow-[0_18px_46px_-14px_oklch(0.84_0.14_165_/_0.75)]",
  secondary:
    "border border-line-strong bg-white/[0.055] text-foreground backdrop-blur-md hover:border-primary/35 hover:bg-white/[0.09]",
  outline:
    "border border-primary/35 bg-primary/[0.06] text-primary hover:border-primary/60 hover:bg-primary/[0.11]",
  ghost: "text-foreground-muted hover:bg-white/[0.06] hover:text-foreground",
  dark: "bg-[oklch(0.17_0.022_280)] text-foreground border border-line hover:bg-[oklch(0.22_0.025_280)]",
};

const sizes = {
  sm: "h-9 gap-1.5 rounded-full px-4 text-[0.78rem]",
  md: "h-11 gap-2 rounded-full px-5 text-sm",
  lg: "h-13 gap-2.5 rounded-full px-7 text-[0.94rem]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  showArrow = false,
  external = false,
  ...props
}) {
  const classes = cn(
    "group relative inline-flex shrink-0 items-center justify-center font-semibold transition-all duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        )}
      </span>
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
          <span className="absolute inset-x-3 top-0 h-px bg-white/60" />
          <span className="absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/20 blur-md transition-transform duration-700 group-hover:translate-x-[420%]" />
        </span>
      )}
    </>
  );

  if (href) {
    const isExternal = external || href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} className={classes} {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
