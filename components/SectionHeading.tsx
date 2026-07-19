import React from "react";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p
        className="text-[11px] font-mono uppercase tracking-[0.2em] font-medium"
        style={{ color: "var(--text-tertiary)" }}
      >
        {label}
      </p>
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-display"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-sm sm:text-base leading-relaxed font-light max-w-2xl"
          style={{ color: "var(--text-secondary)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
