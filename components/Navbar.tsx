"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/achievements", label: "Achievements" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold tracking-tight text-text-primary hover:opacity-85 transition-opacity duration-300 font-display text-sm sm:text-base"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-text-primary"></span>
              SWASTHIK K SHETTY
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-mono tracking-wider uppercase transition-colors duration-300 relative py-1 ${
                  isActive(link.href)
                    ? "text-text-primary font-semibold"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-text-primary rounded-full"></span>
                )}
              </Link>
            ))}
            <div className="h-4 w-px bg-glass-border" />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-text-primary focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden border-b border-glass bg-bg-secondary/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3 animate-fade-in absolute w-full left-0 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-mono uppercase tracking-wider py-2.5 border-b border-glass ${
                isActive(link.href)
                  ? "text-text-primary font-semibold"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
