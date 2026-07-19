"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Instagram, Youtube } from "lucide-react";
import { socialLinks } from "@/data/social";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "instagram":
        return <Instagram className="w-4 h-4" />;
      case "youtube":
        return <Youtube className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="w-full border-t border-glass bg-bg-secondary/40 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              href="/"
              className="font-bold tracking-tight text-text-primary hover:opacity-85 transition-opacity duration-300 font-display"
            >
              SWASTHIK K SHETTY
            </Link>
            <p className="text-xs text-text-tertiary text-center md:text-left font-light">
              Crafting state-of-the-art architectures at the intersection of geometry and physics.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-glass bg-glass-bg text-text-secondary hover:text-text-primary hover:bg-glass-bg-hover transition-all duration-300"
                aria-label={social.platform}
              >
                {getIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-8 border-t border-glass text-xs text-text-tertiary gap-4">
          <p>© {currentYear} Swasthik K Shetty. All rights reserved.</p>
          <div className="flex items-center gap-1.5 font-mono text-[10px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-text-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-text-primary"></span>
            </span>
            <span>Open for collaboration & research discussions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
