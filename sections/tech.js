// sections/tech.js

"use client";
// Import 
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";

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
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiLatex,
  SiFlutter,
  SiQgis,
  SiLeaflet,
} from "react-icons/si";

// Export
export default function Tech() {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  const sectionText = {
    EN: "Tech",
    ID: "Kemampuan Teknologi"
  };

  const techGroups = [
    {
      title: "Frontend",
      items: [
        { name: "HTML5", level: 95, icon: FaHtml5 },
        { name: "CSS3", level: 94, icon: FaCss3Alt },
        { name: "React", level: 82, icon: FaReact },
        { name: "JavaScript", level: 81, icon: SiJavascript },
        { name: "Tailwind CSS", level: 84, icon: SiTailwindcss },
        { name: "Bootstrap", level: 88, icon: FaBootstrap },
        { name: "Figma", level: 85, icon: FaFigma },
      ]
    },
    {
      title: "Backend",
      items: [
        { name: "PHP", level: 90, icon: FaPhp },
        { name: "Laravel", level: 92, icon: FaLaravel },
      ]
    },
    {
      title: "Mobile",
      items: [
        { name: "Flutter", level: 50, icon: SiFlutter },
      ]
    },
    {
      title: "GIS",
      items: [
        { name: "QGis", level: 50, icon: SiQgis },
        { name: "Leaflet JS", level: 50, icon: SiLeaflet },
      ]
    },
    {
      title: "Database",
      items: [
        { name: "MySQL", level: 93, icon: SiMysql },
        { name: "SQLite", level: 85, icon: SiSqlite },
        { name: "PostgreSQL", level: 88, icon: SiPostgresql },
      ]
    },
    {
      title: "Tools & Workflow",
      items: [        
        { name: "Git", level: 89, icon: FaGitAlt },
        { name: "Docker", level: 86, icon: FaDocker },
        { name: "LaTeX", level: 86, icon: SiLatex },
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="tech" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <h2 className="text-lg md:text-xl font-medium font-mono mb-8 tracking-widest bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
          {sectionText[language]}
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {techGroups.map((group, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                px-4 py-2 rounded-lg text-sm font-mono
                border transition-all duration-300
                ${
                  activeTab === index
                    ? "bg-purple-100 dark:bg-purple-600/20 border-purple-500 text-purple-700 dark:text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.35)] dark:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    : "border-gray-300 dark:border-purple-500/20 text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300"
                }
              `}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <div className="relative overflow-hidden">
          <div
            key={activeTab}
            className="animate-slide"
          >
            <div className="grid md:grid-cols-3 gap-5">
              {techGroups[activeTab].items.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <TechCard
                    key={index}
                    tech={tech}
                    Icon={Icon}
                    startAnimation={startAnimation}
                  />
                );
              })}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
function TechCard({ tech, Icon, startAnimation }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!startAnimation) {
      setProgress(0);
      return;
    }

    let start = 0;
    const end = tech.level;
    const duration = 1200;
    const stepTime = Math.max(10, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setProgress(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [startAnimation, tech.level]);

  return (
    <div className="
    bg-white dark:bg-[#0b0b18]
    border border-gray-200 dark:border-purple-500/20
    rounded-xl p-5 
    shadow-[0_0_20px_rgba(168,85,247,0.15)]
    hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
    transition-all duration-300">
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-gray-800 dark:text-gray-300">
          <Icon size={18} className="text-purple-800 dark:text-purple-300" />
          {tech.name}
        </div>

        <span className="text-purple-800 dark:text-purple-300 text-sm">
          {progress}%
        </span>
      </div>

      <div className="w-full h-2 bg-purple-900/30 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r 
          from-purple-500 via-fuchsia-500 to-purple-600
          shadow-[0_0_15px_rgba(168,85,247,0.8)]
          transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}