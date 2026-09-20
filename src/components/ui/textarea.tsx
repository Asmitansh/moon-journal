import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "w-full min-h-44 resize-y rounded-xl bg-bg-deep/60 px-4 py-3.5 font-display text-lg leading-relaxed text-fg placeholder:text-subtle/80",
        "shadow-paper transition-[box-shadow] duration-150 ease-out",
        "hover:shadow-paper-hover",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        className,
      )}
      {...props}
    />
  );
}
