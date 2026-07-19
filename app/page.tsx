import React from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Button from "@/components/Button";
import { ArrowRight, Terminal, Cpu, Globe, Heart } from "lucide-react";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  const capabilities = [
    {
      icon: <Terminal className="w-5 h-5 text-[#FF2E63]" />,
      title: "01 / Systems",
      desc: "Compiling native Rust logic to WebAssembly, optimizing thread safety and execution overhead.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#FF2E63]" />,
      title: "02 / Graphics",
      desc: "Programming custom WGSL shaders and GPU computation shaders directly for modern browser rendering.",
    },
    {
      icon: <Globe className="w-5 h-5 text-[#FF2E63]" />,
      title: "03 / Interfaces",
      desc: "Refining visual hierarchies, pixel detail, layout systems, and micro-interactions.",
    },
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <Hero />

      {/* Capabilities Section */}
      <section className="py-8 border-t border-zinc-950">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <div key={i} className="flex flex-col gap-3 p-6 bg-[#0c0d11]/40 border border-zinc-900/60 rounded-lg">
              <div className="p-2 w-fit bg-zinc-900 border border-zinc-800 rounded-md">
                {cap.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{cap.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-mono text-[#FF2E63] uppercase tracking-widest mb-2">Selected Works</h2>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">Experiments & Executions</h3>
          </div>
          <Button href="/projects" variant="outline" className="gap-1 font-mono text-xs">
            Archive <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative rounded-2xl border border-zinc-900 bg-gradient-to-r from-[#0d0d11] to-[#09090b] p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF2E63]/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 space-y-4 max-w-lg text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">Have an idea in mind?</h3>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans font-light">
            I am always looking for interesting projects, open-source collaborations, or conversations about rendering technology and architecture.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto font-mono text-xs">
          <Button href="/contact" className="w-full sm:w-auto">Start a thread</Button>
          <Button href="/about" variant="secondary" className="w-full sm:w-auto">Biography</Button>
        </div>
      </section>
    </div>
  );
}
