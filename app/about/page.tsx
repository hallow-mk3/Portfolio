"use client";

import React from "react";
import { Cpu, Code2, Database } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import { img } from "@/utils/imagePath";

export default function About() {
  const skills = [
    {
      category: "Frontend Core",
      items: ["Next.js (App Router)", "TypeScript", "React 19", "Tailwind CSS", "Framer Motion"],
      icon: <Code2 className="w-4 h-4 text-text-primary" />,
    },
    {
      category: "Languages & Tools",
      items: ["Python", "JavaScript", "C / C++", "Git", "GitHub Actions"],
      icon: <Cpu className="w-4 h-4 text-text-primary" />,
    },
    {
      category: "Data & Systems",
      items: ["MongoDB", "REST APIs", "Local Storage", "Kaggle", "Data Structures"],
      icon: <Database className="w-4 h-4 text-text-primary" />,
    },
  ];

  return (
    <div className="space-y-16 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Intro section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-6">
          <SectionHeading
            label="ABOUT ME"
            title="Building tools for space, science, and education."
            subtitle="I am Swasthik K Shetty, a 16-year-old creator (born January 30, 2010) focused on space exploration apps, educational platforms, and student community portals."
          />
          <div className="space-y-4 text-sm text-text-secondary leading-relaxed font-light">
            <p>
              I believe software is most powerful when it makes complex subjects like astronomy, data science, and physics accessible to anyone. From tracking asteroid approaches to organizing hackathons for students, I create interfaces that aim to inform and inspire.
            </p>
            <p>
              By combining web technologies with open-source science APIs (like NASA's live feeds), I strive to build fast, responsive products. I also participate in platforms like Kaggle (including the Space Titanic competition) to sharpen my machine learning and data analysis skills.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-glass shadow-xl group">
            <img
              src={img("/images/profile.jpg")}
              alt="Swasthik K Shetty"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-65" />
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="space-y-8 pt-8 border-t border-glass">
        <SectionHeading
          label="TECHNICAL SKILLS"
          title="Tools & Technologies"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <GlassCard key={skillGroup.category} className="p-6 flex flex-col gap-4" glow>
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-bg-tertiary border border-glass rounded">
                  {skillGroup.icon}
                </span>
                <h4 className="font-semibold text-text-primary text-sm sm:text-base font-display">
                  {skillGroup.category}
                </h4>
              </div>
              <ul className="space-y-2 flex-grow">
                {skillGroup.items.map((item) => (
                  <li key={item} className="text-xs text-text-secondary font-mono flex items-center gap-2">
                    <span className="w-1 h-1 bg-text-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Action / Next steps */}
      <section className="pt-8 border-t border-glass flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button href="/projects" variant="primary" className="w-full sm:w-auto text-xs">
          Explore Projects
        </Button>
        <Button href="/achievements" variant="outline" className="w-full sm:w-auto text-xs">
          View Achievements
        </Button>
      </section>
    </div>
  );
}
