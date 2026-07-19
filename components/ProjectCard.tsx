import React from "react";
import { Project } from "@/data/projects";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-[#0d0d11] border border-zinc-900 rounded-xl p-6 sm:p-8 hover:border-zinc-800 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[280px]">
      
      {/* Decorative Cinematic Background Grid/Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF2E63]/5 rounded-full blur-3xl group-hover:bg-[#FF2E63]/10 transition-all duration-500 pointer-events-none" />
      
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-xs font-mono text-zinc-500">{project.year}</span>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">{project.role}</span>
        </div>

        <h3 className="text-xl font-semibold text-white group-hover:text-[#FF2E63] transition-colors duration-300 mb-3 flex items-center gap-1.5">
          {project.title}
        </h3>
        
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-zinc-500 bg-zinc-900/50 px-2.5 py-1 rounded-md border border-zinc-900 group-hover:border-zinc-850 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-zinc-900/50">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white font-medium transition-colors duration-300"
          >
            Launch Project <ArrowUpRight className="w-3.5 h-3.5 text-[#FF2E63]" />
          </a>
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors duration-300"
            >
              <Github className="w-3.5 h-3.5" /> Source
            </a>
          )}
        </div>
      </div>

    </div>
  );
}
