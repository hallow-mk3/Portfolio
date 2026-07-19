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
  status: "active" | "development" | "planning";
  details?: string[];
}

export const projects: Project[] = [
  {
    id: "astronomy-club",
    title: "Astronomy Club Website",
    description: "An immersive space club dashboard under development featuring an event calendar, official space agency missions, discovery timeline, and interactive member directory.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "NASA API", "Framer Motion"],
    link: "https://astronomy.swasthik.dev",
    github: "https://github.com/hallow-mk3/astronomy-club",
    role: "Lead Creator",
    year: "2026",
    featured: true,
    status: "development",
    details: [
      "Dynamic Event Calendar for club gatherings and star gazing sessions",
      "Interactive Member Page displaying member roles and profiles",
      "Dynamic Space Agency Discoveries & upcoming mission scheduler",
      "Integrated Live Photo Gallery pulling space exploration feeds"
    ]
  },
  {
    id: "space-explorer",
    title: "Space Explorer",
    description: "A space visualization tool facilitating ISS pass prediction across cities, James Webb Space Telescope explorer, Asteroid tracking, and Astronomy Picture of the Day educational content.",
    tags: ["React", "CSS Variables", "Leaflet", "NASA API", "W3C Geolocation"],
    link: "https://space.swasthik.dev",
    github: "https://github.com/hallow-mk3/space-explorer",
    role: "Sole Creator",
    year: "2025",
    featured: true,
    status: "active",
    details: [
      "ISS Orbit & pass predictions utilizing satellite coordinate models",
      "High-resolution JWST Explorer mapping recent images with scientific explanation overlays",
      "Asteroid Approach Tracker graphing celestial distance and velocity metrics",
      "Educative APOD dashboard complete with astronomy terminology parsing"
    ]
  },
  {
    id: "entropy",
    title: "Entropy",
    description: "A community platform hosting hackathons, issuing automated virtual certificates, sharing famous scientist papers, self-paced teaching workshops, and streak-based badges.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "PDFKit", "JWT"],
    link: "https://entropy.swasthik.dev",
    github: "https://github.com/hallow-mk3/entropy",
    role: "Founder & Developer",
    year: "2026",
    featured: true,
    status: "active",
    details: [
      "Gamified streak system complete with badges and daily login verification",
      "Self-paced Teaching Workshop platform hosting computer science challenges",
      "Scientist & Student Research Papers archival network",
      "Hackathon Leaderboards with automated virtual certificate generation using PDF canvas"
    ]
  }
];
