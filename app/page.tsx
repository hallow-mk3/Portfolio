"use client";

import React from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Button from "@/components/Button";
import { ArrowRight, Sparkles, Award, Compass, MessageSquare } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GitHubActivity from "@/components/GitHubActivity";
import GlassCard from "@/components/GlassCard";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="space-y-24 py-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <Hero />

      {/* Overview stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="p-6 space-y-3" glow>
          <Compass className="w-5 h-5 text-text-primary" />
          <h3 className="text-base font-semibold text-text-primary font-display">Astronomy & Space</h3>
          <p className="text-xs text-text-secondary leading-relaxed font-light">
            Integrating orbital mechanics and cosmic trackers through NASA and telescope data layers.
          </p>
        </GlassCard>

        <GlassCard className="p-6 space-y-3" glow>
          <Sparkles className="w-5 h-5 text-text-primary" />
          <h3 className="text-base font-semibold text-text-primary font-display">Education & Tools</h3>
          <p className="text-xs text-text-secondary leading-relaxed font-light">
            Designing self-paced computer science workshops and gamified streak-learning tools.
          </p>
        </GlassCard>

        <GlassCard className="p-6 space-y-3" glow>
          <Award className="w-5 h-5 text-text-primary" />
          <h3 className="text-base font-semibold text-text-primary font-display">Recognition</h3>
          <p className="text-xs text-text-secondary leading-relaxed font-light">
            Honored with 3rd in state web design, 1st place in IT, and Government of India INSPIRE grant.
          </p>
        </GlassCard>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <SectionHeading
            label="PORTFOLIO"
            title="Featured Projects"
            subtitle="Web applications built with Next.js, API trackers, and local data layers."
          />
          <Button href="/projects" variant="outline" className="gap-1.5 text-xs py-2">
            View All <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* GitHub Contributions widget */}
      <section className="space-y-6">
        <SectionHeading
          label="COMMITMENT"
          title="Active Contribution History"
        />
        <GitHubActivity />
      </section>

      {/* Call to Action Section */}
      <section className="relative rounded-3xl border border-glass bg-bg-secondary/40 p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-text-primary/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 space-y-4 max-w-lg text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary font-display">Interested in collaborating?</h3>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
            I'm always looking to discuss astronomy web portals, student developer hackathons, and open source opportunities.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button href="/contact" className="w-full sm:w-auto text-xs py-3">
            Send Message
          </Button>
          <Button href="/about" variant="secondary" className="w-full sm:w-auto text-xs py-3">
            Read Biography
          </Button>
        </div>
      </section>
    </div>
  );
}
