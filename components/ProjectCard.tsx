"use client";

import React, { useState } from "react";
import { Project } from "@/data/projects";
import GlassCard from "./GlassCard";
import { ArrowUpRight, Github, X } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "active":
        return "bg-emerald-500 text-emerald-100 border-emerald-500/20";
      case "development":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/20";
      default:
        return "bg-neutral-500/20 text-neutral-400 border-neutral-500/20";
    }
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <GlassCard className="flex flex-col justify-between min-h-[340px] p-6 sm:p-8" glow>
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-mono text-text-tertiary">{project.year}</span>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${getStatusColor(project.status)}`}>
                  {project.status === "development" ? "In Development" : project.status}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-tertiary text-text-secondary border border-glass">
                  {project.role}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-text-primary mb-3 font-display">
              {project.title}
            </h3>

            <p className="text-text-secondary text-sm leading-relaxed mb-6 font-light line-clamp-3">
              {project.description}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono text-text-secondary bg-bg-tertiary px-2 py-1 rounded border border-glass"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-[10px] font-mono text-text-tertiary bg-bg-tertiary px-2 py-1 rounded border border-glass">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-glass text-xs font-medium text-text-primary">
              <span>Read Details</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-secondary" />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Modal Popup Detail Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card bg-bg-secondary p-6 sm:p-8 border border-glass shadow-2xl space-y-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-glass-bg text-text-secondary hover:text-text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="text-xs font-mono text-text-tertiary">{project.year}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${getStatusColor(project.status)}`}>
                    {project.status === "development" ? "In Development" : project.status}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-tertiary text-text-secondary border border-glass">
                    {project.role}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary font-display">
                {project.title}
              </h2>

              <p className="text-text-secondary text-sm leading-relaxed font-light">
                {project.description}
              </p>

              {project.details && project.details.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-tertiary">Key Modules & Roadmap</h4>
                  <ul className="space-y-2 border-l border-glass pl-4">
                    {project.details.map((detail, index) => (
                      <li key={index} className="text-xs sm:text-sm text-text-secondary font-light">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-text-secondary bg-bg-tertiary px-2 py-1 rounded border border-glass"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-glass">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors border border-glass bg-glass-bg px-4 py-2 rounded-lg"
                >
                  <Github className="w-4 h-4" /> View GitHub Repository
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
