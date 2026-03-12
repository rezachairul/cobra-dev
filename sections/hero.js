// sections/hero.js

// Import 
import React from "react";
import { TextHoverEffect } from "../components/ui/text-hover-effect";

// Export
export default function Hero() {
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
          Hi, I'm Reza Chairul
        </h1>
        <h4 className="text-5xl font-bold mb-4">
          Full-Stack & GIS Developer
        </h4>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I build modern web applications and geospatial platforms 
          that transform complex data into interactive digital solutions.
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
            <a href="#contact">View My Projects</a>
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
            <a href="#contact">Contact Me</a>
          </button>

        </div>
      </div>
    </section>
  );
}