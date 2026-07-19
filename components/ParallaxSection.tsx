"use client";

import React, { useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number; // 0.1 to 0.8
  className?: string;
}

export default function ParallaxSection({
  children,
  speed = 0.2,
  className = "",
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const top = rect.top;
      const windowHeight = window.innerHeight;
      
      // Calculate position relative to viewport
      if (top < windowHeight && rect.bottom > 0) {
        setOffset(top * speed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
}
