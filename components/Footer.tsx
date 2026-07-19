import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com", icon: <Github className="w-4 h-4" />, label: "GitHub" },
    { href: "https://linkedin.com", icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
    { href: "https://twitter.com", icon: <Twitter className="w-4 h-4" />, label: "Twitter" },
    { href: "mailto:hello@swasthik.dev", icon: <Mail className="w-4 h-4" />, label: "Email" },
  ];

  return (
    <footer className="w-full border-t border-zinc-900 bg-[#09090B] py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-bold tracking-tight text-white hover:text-[#FF2E63] transition-colors duration-300">
              SWASTHIK SHETTY
            </Link>
            <p className="text-xs text-zinc-500 text-center md:text-left font-sans font-light">
              Designing digital interfaces & systems at the edge of performance.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-zinc-900 hover:border-zinc-800 text-zinc-400 hover:text-[#FF2E63] hover:bg-zinc-900/50 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-8 border-t border-zinc-950 text-xs text-zinc-600 gap-4">
          <p>© {currentYear} Swasthik Shetty. All rights reserved.</p>
          <div className="flex items-center gap-1.5 font-mono text-[10px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open for creative collaboration & conversations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
