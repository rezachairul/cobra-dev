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
    title: {
      EN: "CobraDev Profile Website",
      ID: "Web Profil CobraDev"
    },
    slug: "web-profile-cobradev",
    year: 2026,
    src:"/assets/img/project/P_2026_Cobra.png",
    excerpt: {
      EN: "CobraDev company profile website...",
      ID: "Website company profile CobraDev..."
    },
    description: {
      EN: "Full explanation of CobraDev...",
      ID: "Penjelasan lengkap CobraDev..."
    },
    githubUrl: "#",
    siteUrl: "https://cobradev.vercel.app/home",
    technologies: [
      { name: "Next.js", icon: RiNextjsLine },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Prisma", icon: SiPrisma },
      { name: "Docker", icon: FaDocker }
    ]
  },
  // {
  //   id: 2,
  //   title: {
  //     EN: "Xaviala",
  //     ID: "Xaviala"
  //   },
  //   slug: "xaviala",
  //   year: 2026,
  //   src:"/assets/img/dummy.jpg",
  //   excerpt: {
  //     EN: "Platform Xaviala...",
  //     ID: "Platform Xaviala..."
  //   },
  //   description: {
  //     EN: "Full explanation of Xaviala...",
  //     ID: "Penjelasan lengkap Xaviala..."
  //   },
  //   githubUrl: "#",
  //   siteUrl: "#",
  //   technologies: [
  //     { name: "Next.js", icon: RiNextjsLine },
  //     { name: "Tailwind", icon: SiTailwindcss },
  //     { name: "Prisma", icon: SiPrisma },
  //     { name: "Docker", icon: FaDocker }
  //   ]
  // },
  {
    id: 3,
    title: {
      EN: "UKMBSM ITERA Profile Website",
      ID: "Web Profil UKMBSM ITERA"
    },
    slug: "web-profile-ukmbsm",
    year: 2026,
    src:"/assets/img/project/P_2026_ukmbsm.png",
    excerpt: {
      EN: "Website company profile UKMBSM...",
      ID: "Website company profile UKMBSM..."
    },
    description: {
      EN: "Full explanation of UKMBSM...",
      ID: "Penjelasan lengkap UKMBSM..."
    },
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
    title: {
      EN: "PLN NP UPDK Bandar Lampung System",
      ID: "Sistem PLN NP UPDK Bandar Lampung"
    },
    slug: "pln-np-updk-bandar-lampung",
    year: 2025,
    src:"/assets/img/project/P_2025_PLN.jpg",
    excerpt: {
      EN: "Inventory management system for PLN NP UPDK Bandar Lampung...",
      ID: "Sistem manajemen inventaris PLN NP UPDK Bandar Lampung..."
    },
    description: {
      EN: "Full explanation of PLN NP UPDK Bandar Lampung system...",
      ID: "Penjelasan lengkap sistem PLN NP UPDK Bandar Lampung..."
    },
    githubUrl: "#",
    siteUrl: "#",
    technologies: [
      { name: "Laravel", icon: FaLaravel },
      { name: "Tailwind", icon: SiTailwindcss }
    ]
  },
  {
    id: 5,
    title: {
      EN: "Muse Website",
      ID: "Website Muse"
    },
    slug: "web-muse",
    year: 2025,
    src:"/assets/img/project/P_2025_Muse.png",
    excerpt: {
      EN: "Static website for Muse project...",
      ID: "Website statis untuk proyek Muse..."
    },
    description: {
      EN: "Full explanation of Muse website...",
      ID: "Penjelasan lengkap website Muse..."
    },
    githubUrl: "#",
    siteUrl: "#",
    technologies: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt }
    ]
  },
  {
    id: 6,
    title: {
      EN: "LocatorGIS Platform",
      ID: "Platform LocatorGIS"
    },
    slug: "locatorgis",
    year: 2025,
    src:"/assets/img/project/P_2025_locatorgis.png",
    excerpt: {
      EN: "Web-based GIS platform for spatial data visualization...",
      ID: "Platform WebGIS untuk visualisasi data spasial..."
    },
    description: {
      EN: "Full explanation of LocatorGIS platform...",
      ID: "Penjelasan lengkap platform LocatorGIS..."
    },
    githubUrl: "#",
    siteUrl: "#",
    technologies: [
      { name: "Laravel", icon: FaLaravel },
      { name: "Tailwind", icon: SiTailwindcss }
    ]
  },
  {
    id: 7,
    title: {
      EN: "Star War Ship Game",
      ID: "Game Star War Ship"
    },
    slug: "game-star-war-ship",
    year: 2025,
    src:"/assets/img/project/P_2025_Game.png",
    excerpt: {
      EN: "Simple 2D shooting game built with Python...",
      ID: "Game tembak-tembakan 2D sederhana menggunakan Python..."
    },
    description: {
      EN: "Full explanation of Star War Ship game...",
      ID: "Penjelasan lengkap game Star War Ship..."
    },
    githubUrl: "#",
    siteUrl: "#",
    technologies: [
      { name: "Python", icon: FaPython }
    ]
  },
  {
    id: 8,
    title: {
      EN: "SDGs Center ITERA Platform",
      ID: "Platform SDGs Center ITERA"
    },
    slug: "sdgs-center-itera",
    year: 2024,
    src:"/assets/img/project/P_2024_SDGS_Center_Itera.png",
    excerpt: {
      EN: "Web platform for SDGs Center ITERA information system...",
      ID: "Platform web untuk sistem informasi SDGs Center ITERA..."
    },
    description: {
      EN: "Full explanation of SDGs Center ITERA platform...",
      ID: "Penjelasan lengkap platform SDGs Center ITERA..."
    },
    githubUrl: "#",
    siteUrl: "#",
    technologies: [
      { name: "Laravel", icon: FaLaravel },
      { name: "Tailwind", icon: SiTailwindcss }
    ]
  },
  {
    id: 9,
    title: {
      EN: "Ruang Nada UI/UX Design",
      ID: "Desain UI/UX Ruang Nada"
    },
    slug: "ui-ux-ruang-nada",
    year: 2024,
    src:"/assets/img/project/P_2024_IMK.png",
    excerpt: {
      EN: "UI/UX design for Ruang Nada music platform...",
      ID: "Desain UI/UX untuk platform musik Ruang Nada..."
    },
    description: {
      EN: "Full explanation of Ruang Nada UI/UX design...",
      ID: "Penjelasan lengkap desain UI/UX Ruang Nada..."
    },
    githubUrl: "#",
    siteUrl: "#",
    technologies: [
      { name: "Figma", icon: FaFigma }
    ]
  },
]