export interface Achievement {
  id: string;
  title: string;
  category: "award" | "certificate" | "competition";
  description: string;
  date: string;
  image: string;
  issuer?: string;
  details?: string;
}

export const achievements: Achievement[] = [
  {
    id: "state-web-design",
    title: "3rd Place in State Level Web Design",
    category: "competition",
    description: "Won 3rd place in state level web designing competition at Footprints 2025 organized by Canara Pre-University College, Mangaluru.",
    date: "November 21-22, 2025",
    image: "/images/cert-state-web-design.jpg",
    issuer: "Canara Pre-University College"
  },
  {
    id: "district-web-design",
    title: "3rd Place in District Level Web Design",
    category: "competition",
    description: "Won 3rd place in district level web designing competition held during Sharada AcadExpo 2K25.",
    date: "November 15, 2025",
    image: "/images/cert-district-web-design.jpg",
    issuer: "Sharada P.U. College, Mangaluru"
  },
  {
    id: "it-champion",
    title: "1st Place in Interclass IT Champion",
    category: "competition",
    description: "Secured 1st place in the IT Champion competition held at Canara High School Urva, Mangalore during the academic year 2025-26.",
    date: "November 17, 2025",
    image: "/images/cert-it-champion.jpg",
    issuer: "Canara High School Urva"
  },
  {
    id: "inspire-manak",
    title: "Selected for INSPIRE Award MANAK",
    category: "award",
    description: "Selected for the prestigious INSPIRE Award MANAK and received a ₹10,000 grant from the Department of Science and Technology, Government of India for project development.",
    date: "2025-2026",
    image: "/images/nasa-boarding-pass.jpeg", // We use a fallback if no specific certificate is there
    issuer: "Government of India (DST)"
  },
  {
    id: "nvidia-jetson-nano",
    title: "NVIDIA Certificate of Competency",
    category: "certificate",
    description: "Successfully demonstrated competence in completing 'Getting Started with AI on Jetson Nano' program.",
    date: "2025",
    image: "/images/cert-nvidia-ai.png",
    issuer: "NVIDIA Deep Learning Institute"
  },
  {
    id: "ibm-skillsbuild",
    title: "IBM SkillsBuild Completion Certificate",
    category: "certificate",
    description: "Completed course on 'How AI shows up at work: Automation, augmentation, and human judgment'.",
    date: "June 12, 2026",
    image: "/images/cert-ibm-skillsbuild.png",
    issuer: "IBM SkillsBuild"
  },
  {
    id: "hp-life-critical-thinking",
    title: "HP LIFE Certification",
    category: "certificate",
    description: "Completed 'Critical Thinking in the AI Era' course by HP Foundation.",
    date: "June 12, 2026",
    image: "/images/cert-hp-life.png",
    issuer: "HP LIFE / HP Foundation"
  },
  {
    id: "nasa-boarding-pass",
    title: "NASA Roman Space Telescope Boarding Pass",
    category: "award",
    description: "Participated in NASA's honorary Boarding Pass program for the Nancy Grace Roman Space Telescope mission launching to L2.",
    date: "2026",
    image: "/images/nasa-boarding-pass.jpeg",
    issuer: "NASA"
  }
];
