"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#09090B]/80 backdrop-blur-md border-b border-zinc-900 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-1.5 font-bold tracking-tight text-white hover:text-[#FF2E63] transition-colors duration-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF2E63] group-hover:scale-125 transition-transform duration-300"></span>
              SWASTHIK SHETTY
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative py-1 ${
                  isActive(link.href)
                    ? "text-[#FF2E63]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF2E63] rounded-full"></span>
                )}
              </Link>
            ))}
            <Button href="/contact" size="sm" className="gap-1">
              Let's talk <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-900 bg-[#09090B] px-4 pt-2 pb-6 space-y-4 animate-fade-in">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium py-2 border-b border-zinc-900/50 ${
                isActive(link.href)
                  ? "text-[#FF2E63]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full justify-between"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </nav>
  );
}
