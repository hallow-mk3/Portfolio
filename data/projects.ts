export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  role: string;
  year: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "hallow-os",
    title: "AetherOS",
    description: "A fully sandboxed, web-based operating system built with WebAssembly, Rust, and Next.js. Features real-time multi-threading, custom window manager, and dynamic filesystem mapping.",
    tags: ["Next.js", "WebAssembly", "Rust", "TypeScript", "Tailwind CSS"],
    link: "https://aether-os.swasthik.dev",
    github: "https://github.com/swasthik/aether-os",
    role: "Lead Architect",
    year: "2026",
    featured: true,
  },
  {
    id: "helios-render",
    title: "Helios Engine",
    description: "A high-performance, real-time physically based web rendering engine utilizing WebGPU. Achieves cinema-grade global illumination and volumetrics directly in the browser.",
    tags: ["WebGPU", "TypeScript", "WGSL", "Shaders", "Math"],
    link: "https://helios.swasthik.dev",
    github: "https://github.com/swasthik/helios-engine",
    role: "Graphics Engineer",
    year: "2025",
    featured: true,
  },
  {
    id: "nexus-db",
    title: "Nexus DB",
    description: "A distributed, local-first document store for collaborative applications. Syncs automatically via CRDTs over WebRTC and backs up to IPFS, ensuring zero-latency offline performance.",
    tags: ["React", "TypeScript", "CRDTs", "WebRTC", "IndexedDB"],
    link: "https://nexus-db.swasthik.dev",
    github: "https://github.com/swasthik/nexus-db",
    role: "Creator & Maintainer",
    year: "2025",
    featured: true,
  },
  {
    id: "spectre-ai",
    title: "Spectre AI",
    description: "A lightweight, local-first LLM orchestrator running directly on browser hardware. Utilizes WebGPU acceleration to execute custom model chains under 5ms inference latency.",
    tags: ["Next.js", "ONNX Runtime", "WebGPU", "AI", "Tailwind CSS"],
    link: "https://spectre.swasthik.dev",
    github: "https://github.com/swasthik/spectre-ai",
    role: "AI Engineer",
    year: "2026",
    featured: false,
  }
];
