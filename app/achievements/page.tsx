"use client";

import React from "react";
import { achievements as allAchievements } from "@/data/achievements";
import SectionHeading from "@/components/SectionHeading";
import CertificateGallery from "@/components/CertificateGallery";

export default function AchievementsPage() {
  const competitions = allAchievements.filter(a => a.category === "competition");
  const academicAndAwards = allAchievements.filter(a => a.category === "award" || a.category === "certificate");

  return (
    <div className="space-y-16 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="space-y-4 max-w-3xl">
        <SectionHeading
          label="RECOGNITION"
          title="Achievements & Certificates."
          subtitle="Honors, competitive coding, state/district awards, and specialized AI/CS certifications completed during my academic journey."
        />
      </section>

      {/* Competitions */}
      <section className="space-y-6">
        <SectionHeading
          label="01 / COMPETITIONS"
          title="Hackathons & IT Challenges"
        />
        <div className="border-t border-glass pt-6">
          <CertificateGallery items={competitions} />
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="space-y-6">
        <SectionHeading
          label="02 / CERTIFICATIONS"
          title="Industry & Academic Honors"
        />
        <div className="border-t border-glass pt-6">
          <CertificateGallery items={academicAndAwards} />
        </div>
      </section>
    </div>
  );
}
