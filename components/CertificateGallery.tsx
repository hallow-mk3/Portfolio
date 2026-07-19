"use client";

import React, { useState } from "react";
import Image from "next/image";
import GlassCard from "./GlassCard";
import { X, ZoomIn } from "lucide-react";

interface CertificateGalleryProps {
  items: {
    id: string;
    title: string;
    description: string;
    image: string;
    issuer?: string;
  }[];
}

export default function CertificateGallery({ items }: CertificateGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <GlassCard key={item.id} className="p-4 flex flex-col justify-between" glow>
            <div className="space-y-3">
              <div 
                className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer border border-glass"
                onClick={() => setActiveImage(item.image)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={idx < 3}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-text-tertiary">
                  {item.issuer || "Certificate"}
                </span>
                <h4 className="text-sm font-semibold text-text-primary mt-1 line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-text-secondary mt-1.5 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Simple Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setActiveImage(null)}
        >
          <button 
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setActiveImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center">
            <Image
              src={activeImage}
              alt="Certificate full view"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
