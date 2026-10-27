"use client";

import { cn } from "@/lib/utils";

export function SpotlightCard({ children, className, as: Tag = "div", ...props }) {
  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <Tag
      className={cn("card-spotlight", className)}
      onPointerMove={handlePointerMove}
      {...props}
    >
      {children}
    </Tag>
  );
}
