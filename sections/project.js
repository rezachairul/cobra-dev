// sections/project.js

"use client";
// Import 
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { projects } from "../data/projects"
import { FaGithub, FaGlobe } from "react-icons/fa";

// Export
export default function Project() {
  const { language } = useLanguage();
  const sectionText = {
    EN: "Projects",
    ID: "Proyek"
  };  

  return (
    <section id="project" className="py-20 px-6 mx-auto">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-lg md:text-xl font-medium font-mono mb-8 tracking-widest bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
          {sectionText[language]}       
        </h2>
        
        {/* data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className=" bg-[#0b0b18] border border-purple-500/20 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:-translate-y-1 transition-all duration-300 group "
            >
              {/* IMAGE */}
              <img
                src={project.src}
                className="w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition"
              />

              {/* CONTENT */}
              <div className="p-4 flex flex-col gap-3">
                
                {/* TITLE + YEAR */}
                <div className="flex justify-between items-start">
                  <h3 className="text-white font-semibold leading-tight">
                    {project.title[language]}
                  </h3>
                  <span className="text-xs text-purple-400">
                    {project.year}
                  </span>
                </div>

                {/* EXCERPT */}
                <p className="text-sm text-gray-300">
                  {project.excerpt[language]}
                </p>

                {/* MORE */}
                <span className="text-sm text-purple-400 cursor-pointer hover:underline w-fit">
                  more →
                </span>

                {/* BOTTOM SECTION */}
                <div className="flex justify-between items-center mt-2">
                  
                  {/* TECH STACK */}
                  <div className="flex gap-2">
                    {project.technologies.map((tech, i) => {
                      const Icon = tech.icon;
                      return (
                        <div key={i} className="relative group/tech">
                          <Icon className="text-lg text-purple-300 hover:text-purple-400 transition" />

                          {/* TOOLTIP */}
                          <span
                            className="
                              absolute -top-7 left-1/2 -translate-x-1/2
                              text-[10px] px-2 py-1 rounded
                              bg-purple-600 text-white
                              opacity-0 group-hover/tech:opacity-100
                              transition pointer-events-none
                              whitespace-nowrap
                            "
                          >
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* LINKS */}
                  <div className="flex gap-3 text-purple-400">
                    <a href={project.githubUrl} target="_blank">
                      <FaGithub className="text-lg hover:text-purple-300" />
                    </a>
                    <a href={project.siteUrl} target="_blank">
                      <FaGlobe className="text-lg hover:text-purple-300" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>      
    </section>
  );
}