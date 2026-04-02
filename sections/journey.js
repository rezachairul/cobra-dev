// sections/journey.js
"use client";

// Import 
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";

import { TbMapSearch } from "react-icons/tb";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { BsRocketTakeoff } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";

// Export
export default function Journey() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const sectionText = {
    EN: "Journey",
    ID: "Perjalanan"
  };

  const journeyText = {
    EN: [
      {
        title: "Started with GIS",
        desc: "Studied Geographic Information Systems and spatial data analysis, building strong analytical foundations.",
        icon: TbMapSearch
      },
      {
        title: "Discovered Web Development",
        desc: "Learned HTML, CSS, and JavaScript to create interactive spatial data visualizations.",
        icon: FaComputer
      },
      {
        title: "Built WebGIS Projects",
        desc: "Developed mapping applications integrating geospatial data with modern frontend tools.",
        icon: BsGlobeAsiaAustralia
      },
      {
        title: "Full-Stack Development",
        desc: "Expanded into backend using PHP, Laravel, and relational databases.",
        icon: BsGear
      },
      {
        title: "Current Focus",
        desc: "Building modern full-stack web apps with React, Tailwind, and scalable architecture.",
        icon: BsRocketTakeoff
      }
    ],

    ID: [
      {
        title: "Awal dengan GIS",
        desc: "Mempelajari Sistem Informasi Geografis dan analisis data spasial sebagai fondasi analitis yang kuat.",
        icon: TbMapSearch
      },
      {
        title: "Mengenal Web Development",
        desc: "Belajar HTML, CSS, dan JavaScript untuk membuat visualisasi data spasial yang interaktif.",
        icon: FaComputer
      },
      {
        title: "Membangun Project WebGIS",
        desc: "Mengembangkan aplikasi peta dengan integrasi data geospasial dan teknologi frontend modern.",
        icon: BsGlobeAsiaAustralia
      },
      {
        title: "Full-Stack Development",
        desc: "Mengembangkan backend menggunakan PHP, Laravel, dan database relasional.",
        icon: BsGear
      },
      {
        title: "Fokus Saat Ini",
        desc: "Membangun aplikasi web full-stack modern dengan React, Tailwind, dan arsitektur scalable.",
        icon: BsRocketTakeoff
      }
    ]
  };

  const journeys = journeyText[language];

  return (
    <section ref={sectionRef} id="journey" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-lg md:text-xl font-medium font-mono mb-16 tracking-widest 
        bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 
        text-transparent bg-clip-text 
        drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
          {sectionText[language]}
        </h2>

        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] 
          bg-gradient-to-b from-purple-500 via-fuchsia-500 to-purple-700 
          shadow-[0_0_20px_rgba(168,85,247,0.8)]
          hidden md:block" />

          <div className="space-y-12">
            {journeys.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex md:items-center w-full ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`
                    w-full md:w-[45%]
                    bg-[#0b0b18]
                    border border-purple-500/20
                    rounded-xl p-5
                    shadow-[0_0_20px_rgba(168,85,247,0.15)]
                    hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
                    transition-all duration-500
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                    `}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-3">

                      <div className="text-2xl text-purple-400 
                      drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                        <Icon />
                      </div>

                      <div>
                        <h3 className="text-purple-300 font-mono mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}