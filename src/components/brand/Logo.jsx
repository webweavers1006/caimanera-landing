import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({ className }) {
  return (
    <Image
      src="/img/caimanera_icon.png"
      alt=""
      aria-hidden="true"
      width={512}
      height={512}
      sizes="64px"
      className={cn("shrink-0 object-contain", className)}
    />
  );
}

export function Logo({ className, markClassName, wordmarkClassName, showWordmark = true }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("size-9 rounded-[11px] shadow-[0_6px_20px_-6px_rgba(22,163,74,0.65)]", markClassName)} />
      {showWordmark && (
        <span
          className={cn(
            "font-display text-[1.38rem] font-semibold tracking-[-0.045em] text-foreground",
            wordmarkClassName
          )}
        >
          caimanera<span className="text-primary">.</span>
        </span>
      )}
    </span>
  );
}
