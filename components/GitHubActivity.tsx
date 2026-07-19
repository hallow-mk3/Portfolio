"use client";

import React from "react";
import GlassCard from "./GlassCard";

export default function GitHubActivity() {
  // Generate dummy commit levels for Swasthik K Shetty's profile contribution representation
  // Represents a premium styled representation of github contributions in B&W theme
  const columns = 28;
  const rows = 7;
  const totalCells = columns * rows;

  const cells = Array.from({ length: totalCells }).map(() => {
    const val = Math.random();
    if (val < 0.5) return 0; // empty
    if (val < 0.75) return 1; // low
    if (val < 0.9) return 2; // medium
    if (val < 0.97) return 3; // high
    return 4; // very high
  });

  const getLevelClass = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[var(--heatmap-l1)]";
      case 2:
        return "bg-[var(--heatmap-l2)]";
      case 3:
        return "bg-[var(--heatmap-l3)]";
      case 4:
        return "bg-[var(--heatmap-l4)]";
      default:
        return "bg-[var(--heatmap-empty)]";
    }
  };

  return (
    <GlassCard className="p-6 overflow-hidden" glow>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="text-sm font-mono text-text-secondary">CONTRIBUTIONS</h3>
            <p className="text-lg font-bold text-text-primary mt-1 font-display">
              Open Source Commit History
            </p>
          </div>
          <a
            href="https://github.com/hallow-mk3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-text-secondary hover:text-text-primary underline decoration-dotted transition-colors"
          >
            @hallow-mk3
          </a>
        </div>

        <div className="flex flex-col items-center sm:items-start justify-center overflow-x-auto no-scrollbar">
          <div className="grid grid-flow-col gap-1 auto-cols-max">
            {Array.from({ length: columns }).map((_, colIdx) => (
              <div key={colIdx} className="grid grid-rows-7 gap-1">
                {Array.from({ length: rows }).map((_, rowIdx) => {
                  const cellIdx = colIdx * rows + rowIdx;
                  const level = cells[cellIdx];
                  return (
                    <div
                      key={rowIdx}
                      className={`w-[10px] h-[10px] sm:w-3 sm:h-3 rounded-sm heatmap-cell ${getLevelClass(
                        level
                      )}`}
                      title={`Commits: ${level * 2}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-text-tertiary">
          <span>Less</span>
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-sm bg-[var(--heatmap-empty)]" />
            <div className="w-2.5 h-2.5 rounded-sm bg-[var(--heatmap-l1)]" />
            <div className="w-2.5 h-2.5 rounded-sm bg-[var(--heatmap-l2)]" />
            <div className="w-2.5 h-2.5 rounded-sm bg-[var(--heatmap-l3)]" />
            <div className="w-2.5 h-2.5 rounded-sm bg-[var(--heatmap-l4)]" />
          </div>
          <span>More</span>
        </div>
      </div>
    </GlassCard>
  );
}
