"use client";

import React from "react";
import { Project } from "@/data/projects";
import GlassCard from "./GlassCard";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
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

        <p className="text-text-secondary text-sm leading-relaxed mb-6 font-light">
          {project.description}
        </p>

        {project.details && project.details.length > 0 && (
          <ul className="space-y-2 mb-6 border-l border-glass pl-4">
            {project.details.map((detail, index) => (
              <li key={index} className="text-xs text-text-secondary font-light">
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-text-secondary bg-bg-tertiary px-2 py-1 rounded border border-glass"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-glass">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-text-primary hover:opacity-85 font-medium transition-opacity"
          >
            Launch Project <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              <Github className="w-3.5 h-3.5" /> Source
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
