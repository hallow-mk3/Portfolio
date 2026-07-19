"use client";

import React, { useState, useMemo } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Search } from "lucide-react";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tagsSet.add(t)));
    return Array.from(tagsSet);
  }, []);

  // Filter projects by search query and selected tag
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.role.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <div className="space-y-12 py-8">
      
      {/* Page Header */}
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-xs font-mono text-[#FF2E63] uppercase tracking-widest">PORTFOLIO</h1>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Selected engineering works.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          A showcase of full-stack products, systems tools, and experimental WebGPU rendering pipelines. Filter by tech stacks or search keywords.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pb-4 border-b border-zinc-900">
        
        {/* Search */}
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-[#0c0d11] border border-zinc-900 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all duration-300"
          />
        </div>

        {/* Tags list */}
        <div className="flex flex-wrap items-center gap-2 max-w-full overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1.5 rounded-md text-xs font-mono border transition-all duration-300 ${
              selectedTag === null
                ? "bg-[#FF2E63] border-[#FF2E63] text-white"
                : "bg-zinc-900 border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-800"
            }`}
          >
            All Stacks
          </button>
          
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono border transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-[#FF2E63] border-[#FF2E63] text-white"
                  : "bg-zinc-900 border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-full py-16 text-center border border-dashed border-zinc-900 rounded-xl bg-zinc-900/10">
            <p className="text-zinc-500 text-sm">No projects matching your filters.</p>
          </div>
        )}
      </section>

    </div>
  );
}
