// data/prjects.js

// Import
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaGlobe
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiLatex,
  SiPrisma
} from "react-icons/si";

import { RiNextjsLine } from "react-icons/ri";

// export
export const projects = [
  {
    id: 1,
    title: "Web Profile CobraDev",
    slug: "web-profile-cobradev",
    year: 2026,
    src:"/assets/img/project/P_2026_Cobra.png",
    excerpt: "Website company profile CobraDev...",
    description: "Penjelasan lengkap CobraDev...",
    githubUrl: "#",
    siteUrl: "#",
    technologies: [
      { name: "Next.js", icon: RiNextjsLine },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Prisma", icon: SiPrisma },
      { name: "Docker", icon: FaDocker }

    ]
  },
  // {
  //   id: 2,
  //   title: "Xaviala",
  //   slug: "xaviala",
  //   year: 2026,
  //   src:"#",
  //   excerpt: "Platform Xaviala...",
  //   description: "Penjelasan lengkap Xaviala...",
  //   githubUrl: "#",
  //   siteUrl: "#",
  //   technologies: [
  //     { name: "Next.js", icon: RiNextjsLine },
  //     { name: "Tailwind", icon: SiTailwindcss }
  //   ]
  // },
  {
    id: 3,
    title: "Web Profile UKMBSM",
    slug: "web-profile-ukmbsm",
    year: 2026,
    src:"/assets/img/project/P_2026_ukmbsm.png",
    excerpt: "Website company profile UKMBSM...",
    description: "Penjelasan lengkap UKMBSM...",
    githubUrl: "#",
    siteUrl: "#",
    technologies: [
      { name: "Laravel.js", icon: FaLaravel },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Docker", icon: FaDocker }
    ]
  },
  {
    id: 4,
    title: "PLN NP UPDK",
    slug: "pln-np-updk-bandar-lampung",
    year: 2025,
    src:"/assets/img/project/P_2025_PLN.jpg",
    excerpt: "Platform PLN NP UPDK Bandar Lampung...",
    description: "Penjelasan lengkap PLN NP UPDK Bandar Lampung...",
    githubUrl: "#",
    siteUrl: "#",
    technologies: [
      { name: "Laravel.js", icon: FaLaravel },
      { name: "Tailwind", icon: SiTailwindcss }
    ]
  },
  {
    id: 5,
    title: "Web Muse",
    slug: "web-muse",
    year: 2025,
    src:"/assets/img/project/P_2025_Muse.png",
    excerpt: "Website Muse...",
    description: "Penjelasan lengkap Muse...",
    githubUrl: "#",
    siteUrl: "#",
    technologies: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt }
    ]
  },
  {
    id: 6,
    title: "Locatorgis",
    slug: "locatorgis",
    year: 2025,
    src:"/assets/img/project/P_2025_locatorgis.png",
    excerpt: "Platform Locatorgis...",
    description: "Penjelasan lengkap Locatorgis...",
    githubUrl: "#",
    siteUrl: "#",
    technologies: [
      { name: "Laravel.js", icon: FaLaravel },
      { name: "Tailwind", icon: SiTailwindcss }
    ]
  },
  {
    id: 7,
    title: "Game Star War Ship",
    slug: "game-star-war-ship",
    year: 2025,
    src:"/assets/img/project/P_2025_Game.png",
    excerpt: "Game Star War Ship...",
    description: "Penjelasan lengkap Game Star War Ship...",
    githubUrl: "#",
    siteUrl: "#",
    technologies: [
      { name: "Python", icon: FaPython },
    ]
  },
  {
    id: 8,
    title: "SDGS Center Itera",
    slug: "sdgs-center-itera",
    year: 2024,
    src:"/assets/img/project/P_2024_SDGS_Center_Itera.png",
    excerpt: "Platform SDGS Center Itera...",
    description: "Penjelasan lengkap SDGS Center Itera...",
    githubUrl: "#",
    siteUrl: "#",
    technologies: [
      { name: "Laravel.js", icon: FaLaravel },
      { name: "Tailwind", icon: SiTailwindcss }
    ]
  },
  {
    id: 9,
    title: "UI/UX Ruang Nada",
    slug: "ui-ux-ruang-nada",
    year: 2024,
    src:"/assets/img/project/P_2024_IMK.png",
    excerpt: "Website company profile Ruang Nada...",
    description: "Penjelasan lengkap Ruang Nada...",
    githubUrl: "#",
    siteUrl: "#",
    technologies: [
      { name: "Figma", icon: FaFigma },
    ]
  },
]