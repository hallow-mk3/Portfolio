"use client";

import React from "react";
import Button from "./Button";
import { ArrowDown, Github, Mail } from "lucide-react";
import StarField from "./StarField";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden border border-glass rounded-3xl p-6 sm:p-12 mb-12">
      {/* Background Star Canvas */}
      <StarField />

      {/* Floating glass orbs background effect */}
      <div className="absolute top-1/4 left-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-text-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 max-w-4xl space-y-8 flex flex-col items-center">
        {/* Monospace Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-glass bg-glass-bg text-[10px] font-mono tracking-[0.15em] uppercase text-text-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-text-primary"></span>
          Personal Space / Creative Developer
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary font-display leading-[1.1] max-w-3xl">
          Swasthik K Shetty
        </h1>

        {/* Subtitle */}
        <p className="text-text-secondary text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-light font-sans">
          A 16-year-old developer and space enthusiast building tools for Astronomy, Science, and Student Communities.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap justify-center items-center gap-3 w-full sm:w-auto pt-4">
          <Button href="/projects" className="w-full sm:w-auto gap-2 text-xs py-3">
            Explore Projects <ArrowDown className="w-4 h-4" />
          </Button>

          <a
            href="https://github.com/hallow-mk3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 text-xs font-mono rounded-lg border border-glass bg-glass-bg hover:bg-glass-bg-hover text-text-primary transition-all duration-300"
          >
            <Github className="w-4 h-4" /> @hallow-mk3
          </a>
        </div>
      </div>
    </section>
  );
}
