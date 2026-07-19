"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsRevealed(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const directionStyles = {
    up: "translate-y-[30px]",
    left: "translate-x-[30px]",
    right: "-translate-x-[30px]",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isRevealed
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${directionStyles[direction]}`,
        className
      )}
    >
      {children}
    </div>
  );
}
