"use client";

import React, { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Search } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

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
    <div className="space-y-12 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="space-y-4 max-w-3xl">
        <SectionHeading
          label="PORTFOLIO"
          title="Selected Engineering Works."
          subtitle="A showcase of Space Apps, community tools, astronomy websites, and educational visualizations. Filter by tech stacks or search keywords."
        />
      </section>

      {/* Filter and Search Bar */}
      <section className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pb-6 border-b border-glass">
        {/* Search */}
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs glass-input rounded-lg"
          />
        </div>

        {/* Tags list */}
        <div className="flex flex-wrap items-center gap-2 max-w-full overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1.5 rounded-md text-[10px] font-mono border transition-all duration-300 ${
              selectedTag === null
                ? "bg-text-primary border-text-primary text-bg-primary"
                : "bg-bg-tertiary border-glass text-text-secondary hover:text-text-primary"
            }`}
          >
            All Stacks
          </button>

          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-md text-[10px] font-mono border transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-text-primary border-text-primary text-bg-primary"
                  : "bg-bg-tertiary border-glass text-text-secondary hover:text-text-primary"
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
          <div className="col-span-full py-16 text-center border border-dashed border-glass rounded-xl bg-glass-bg">
            <p className="text-text-secondary text-sm">No projects matching your filters.</p>
          </div>
        )}
      </section>
    </div>
  );
}
