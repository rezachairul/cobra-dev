// sections/hero.js

// Import 
import React from "react";
import { TextHoverEffect } from "../components/ui/text-hover-effect";

// Export
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

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
      {/* Foreground Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Reza 👋
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Fullstack & GIS Developer passionate about building modern web
          applications and geospatial solutions.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fullstack & GIS Developer passionate about building modern web
            applications and geospatial solutions.
          </p>
        </div>
      </div>
    </section>
  );
}