"use client";

import React, { useState } from "react";
import GlassCard from "./GlassCard";
import { X, ZoomIn } from "lucide-react";
import { img } from "@/utils/imagePath";

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
        {items.map((item) => (
          <GlassCard key={item.id} className="p-4 flex flex-col justify-between" glow>
            <div className="space-y-3">
              <div
                className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer border border-glass"
                onClick={() => setActiveImage(item.image)}
              >
                <img
                  src={img(item.image)}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>

              {item.id !== "inspire-manak" && (
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
              )}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Lightbox Modal */}
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
            <img
              src={img(activeImage)}
              alt="Certificate full view"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
