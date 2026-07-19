"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/utils/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  glow?: boolean;
  as?: React.ElementType;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className,
  tilt = true,
  glow = true,
  as: Component = "div",
  onClick,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );

    // Update CSS variables for glow position
    if (glow && cardRef.current) {
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      cardRef.current.style.setProperty("--mouse-x", `${percentX}%`);
      cardRef.current.style.setProperty("--mouse-y", `${percentY}%`);
    }
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <Component
      ref={cardRef}
      className={cn(
        "glass-card tilt-card relative overflow-hidden",
        className
      )}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {glow && <div className="tilt-card-shine" />}
      {glow && <div className="tilt-card-border" />}
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
