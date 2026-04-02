// sections/hero.js
"use client";

// Import 
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TextHoverEffect } from "../components/ui/text-hover-effect";

// Export
export default function Hero() {

  const { language } = useLanguage();

  const heroText = {
    EN: {
      title: "Hi, I'm Reza Chairul",
      role: "Full-Stack & GIS Developer",
      desc: "I build modern web applications and geospatial platforms that transform complex data into interactive digital solutions.",
      projectBtn: "View My Projects",
      contactBtn: "Contact Me",
    },
    ID: {
      title: "Hai, saya Reza Chairul",
      role: "Full-Stack & GIS Developer",
      desc: "Saya membangun aplikasi web modern dan platform geospasial yang mengubah data kompleks menjadi solusi digital interaktif.",
      projectBtn: "Lihat Proyek Saya",
      contactBtn: "Hubungi Saya",
    }
  };

  const t = heroText[language];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* Background Text */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-50">
        <div className="h-[40vh] w-full">
          <TextHoverEffect text="COBRADEV" />
        </div>
      </div>

      {/* Mobile Decorative Text */}
      <div
        className="
          md:hidden
          absolute
          left-[-320px]
          top-[40%]
          rotate-[-90deg]
          opacity-100
          w-[800px]
        "
      >
        <TextHoverEffect text="COBRADEV" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          {t.title}
        </h1>
        <h4 className="text-5xl font-bold mb-4">
          {t.role}
        </h4>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t.desc}
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mt-10">

          {/* Primary Button */}
          <button
            className="
            px-6 py-3
            font-semibold
            text-white
            rounded-full
            border border-purple-500
            bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500
            transition-all duration-300
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
          "
          >
            <a href="#project">{t.projectBtn}</a>
          </button>

          {/* Secondary Button */}
          <button
            className="
            px-6 py-3
            font-semibold
            rounded-full
            border border-purple-500
            backdrop-blur-md
            bg-white/5
            transition-all duration-300
            hover:scale-105
            hover:bg-white/10
            hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
            bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500
            text-transparent bg-clip-text
          "
          >
            <a href="#contact">{t.contactBtn}</a>
          </button>

        </div>
      </div>
    </section>
  );
}