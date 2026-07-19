"use client";

import React from "react";
import Button from "./Button";
import { ArrowDown, Copy, Check } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@swasthik.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-16 pb-12 sm:pb-20 flex flex-col items-start justify-center overflow-hidden">
      {/* Cinematic grid overlay and glowing accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF2E63]/5 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 max-w-4xl">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/60 border border-zinc-800/80 text-[11px] text-zinc-400 font-mono mb-8 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF2E63]"></span>
          Personal Space / Creative Developer
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08] font-display">
          Shaping digital spaces <br className="hidden sm:inline" />
          with <span className="text-[#FF2E63] relative">aesthetic intent.</span>
        </h1>

        {/* Subtext */}
        <p className="text-zinc-400 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-12 font-sans font-light">
          I am Swasthik Shetty. I design and build highly-detailed web architectures, graphics engines, and tools that live at the intersection of visual refinement and strict system performance.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/projects" className="gap-2">
            Explore Projects <ArrowDown className="w-4 h-4" />
          </Button>
          
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md border border-zinc-850 text-zinc-300 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" /> Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> hello@swasthik.dev
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
