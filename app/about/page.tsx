import React from "react";
import { ArrowUpRight, Cpu, Code2, Database, ShieldAlert, Award } from "lucide-react";
import Button from "@/components/Button";

export default function About() {
  const skills = [
    {
      category: "Frontend Core",
      items: ["Next.js (App Router)", "TypeScript", "React 19", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
      icon: <Code2 className="w-4 h-4 text-[#FF2E63]" />,
    },
    {
      category: "Systems & Backend",
      items: ["Node.js", "Express", "Rust", "WebAssembly", "Go", "GraphQL", "REST APIs"],
      icon: <Cpu className="w-4 h-4 text-[#FF2E63]" />,
    },
    {
      category: "Database & Cloud",
      items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS (S3/EC2)", "Vercel", "Firebase"],
      icon: <Database className="w-4 h-4 text-[#FF2E63]" />,
    },
  ];

  const experiences = [
    {
      period: "2024 - Present",
      role: "Senior Fullstack Engineer",
      company: "Synthetix Labs",
      description: "Spearheaded frontend re-architecture to Next.js 15, yielding a 40% page load optimization. Built high-performance real-time data visualizers using WebGL.",
    },
    {
      period: "2022 - 2024",
      role: "Software Architect",
      company: "Quantum Tech",
      description: "Led development of offline-first synchronizing engines using CRDTs. Established TypeScript and testing guidelines across three engineering units.",
    },
    {
      period: "2020 - 2022",
      role: "Backend Engineer",
      company: "Novus AI",
      description: "Optimized NLP processing pipelines in Go, decreasing inference coordination delays. Managed orchestration frameworks across Docker and Kubernetes clusters.",
    },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Intro section */}
      <section className="space-y-6 max-w-3xl">
        <h1 className="text-xs font-mono text-[#FF2E63] uppercase tracking-widest">ABOUT ME</h1>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display">
          Building spaces where software meets refined design.
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-sans font-light">
          I am Swasthik Shetty. I develop rendering engines, custom digital tools, and web structures. My work is driven by a deep interest in low-level systems, geometry, and functional simplicity.
        </p>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-sans font-light">
          Rather than compiling generic templates, I approach the web browser as an expansive canvas for high-performance applications. By integrating tools like Rust and WebAssembly alongside modern runtime systems, I aim to shape layouts that are fast, solid, and delightful to navigate.
        </p>
      </section>

      {/* Skills Grid */}
      <section className="space-y-8 pt-8 border-t border-zinc-900">
        <div>
          <h2 className="text-xs font-mono text-[#FF2E63] uppercase tracking-widest mb-2">Technical Core</h2>
          <h3 className="text-2xl font-bold text-white">Capabilities & Tools</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-[#0c0d11]/60 border border-zinc-900 p-6 rounded-xl flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-zinc-900 border border-zinc-800 rounded">
                  {skillGroup.icon}
                </span>
                <h4 className="font-semibold text-white">{skillGroup.category}</h4>
              </div>
              <ul className="space-y-2 flex-grow">
                {skillGroup.items.map((item) => (
                  <li key={item} className="text-xs text-zinc-400 font-mono flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#FF2E63] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-8 pt-8 border-t border-zinc-900">
        <div>
          <h2 className="text-xs font-mono text-[#FF2E63] uppercase tracking-widest mb-2">Career Timeline</h2>
          <h3 className="text-2xl font-bold text-white">Selected Experience</h3>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-6 sm:pl-8 border-l border-zinc-850 space-y-2 group"
            >
              {/* timeline point dot */}
              <span className="absolute left-[-4.5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-900 group-hover:bg-[#FF2E63] group-hover:border-[#FF2E63]/25 group-hover:scale-125 transition-all duration-300"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex flex-wrap items-center gap-x-2">
                  <h4 className="text-lg font-semibold text-white group-hover:text-[#FF2E63] transition-colors duration-300">{exp.role}</h4>
                  <span className="text-xs text-zinc-500 font-mono">@ {exp.company}</span>
                </div>
                <span className="text-xs font-mono text-zinc-500">{exp.period}</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CV Download / Contact */}
      <section className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center gap-4">
        <Button href="/resume.pdf" variant="primary" className="w-full sm:w-auto">
          View Resume / CV
        </Button>
        <Button href="/contact" variant="outline" className="w-full sm:w-auto gap-1">
          Get in Touch <ArrowUpRight className="w-4 h-4" />
        </Button>
      </section>
    </div>
  );
}
