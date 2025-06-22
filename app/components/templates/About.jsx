"use client";
import React from "react";

import BlurText from "../ui/BlurText";
import ProfileCard from "../ui/ProfileCard";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-black py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <BlurText
          text="About Me"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-5xl font-bold mb-10 text-white text-center md:text-left"
        />

        {/* Container flex horizontal */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Foto / Profile Card di kiri */}
          <div className="flex-shrink-0">
            <ProfileCard
              name="Reza Chairul"
              title="GIS Engineer"
              handle="ITERA"
              status="WebGIS"
              contactText="Contact Me"
              avatarUrl="/assets/img/Profile.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => window.open("https://www.linkedin.com/in/reza-chairul6", "_blank")}
            />
          </div>

          {/* Paragraf di kanan */}
          <div className="text-lg leading-relaxed text-gray-300 text-justify md:text-justify">
            <p>
              Hi there! 👋 I'm <span className="font-semibold text-white">Reza Chairul Manam</span>, I'm currently living in Lampung, Indonesia.
              I'm an Informatics Engineering student at the Institut Teknologi Sumatera who loves everything about WebGIS and web development.
              Currently, I'm working with
              <span className="text-rose-400"> <a href="https://laravel.com/">Laravel</a></span>,
              <span className="text-blue-400"> <a href="https://react.dev/">React</a></span>,
              <span className="text-green-400"> <a href="https://www.postgresql.org/">PostgreSQL</a></span>, and
              <span className="text-sky-400"> <a href="https://tailwindcss.com/">Tailwind CSS</a></span> to build interactive and scalable applications.
            </p>
            <p className="mt-4">
              Right now, I'm focused on a WebGIS project, exploring how geospatial data can be visualized and managed efficiently. I enjoy problem-solving and bringing ideas to life through code.
            </p>
            <p className="mt-4">
              Beyond coding, I have a passion for <span className="font-semibold text-white">graphic design</span>,
              <span className="font-semibold text-white"> photography</span>, and
              <span className="font-semibold text-white"> video editing</span>. Whether it's creating visuals, capturing moments, or editing content, I love expressing creativity in different ways.
            </p>
            <p className="mt-4 font-semibold text-indigo-300">
              Let’s connect and create something awesome together! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}