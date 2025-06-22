"use client";
import React, { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { TextRevealCard } from "../ui/text-reveal-card";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconMail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconFileCv,
} from "@tabler/icons-react";
import { ScrollVelocity } from "../ui/scrollVelocity";

export default function Hero() {
  // Hook untuk deteksi ukuran layar
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint Tailwind
    };

    handleResize(); // set awal
    window.addEventListener("resize", handleResize); // update saat resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileWords = [
    { text: "GIS" },
    { text: "Engineer," },
    { text: "UI/UX" },
    { text: "Designer." },
  ];

  const desktopWords = [
    { text: "I" },
    { text: "Specialize" },
    { text: "in" },
    {
      text: "Geographic Information Systems (GIS),",
      className: "text-purple-500",
    },
    { text: "Design" },
    { text: "Intuitive User Interfaces," },
    { text: "and Build Modern Web Applications." },
  ];

  const iconClass =
    "w-6 h-6 text-neutral-500 dark:text-neutral-300 transition duration-300 hover:text-white";

  const links = [
    {
      title: "Email",
      icon: <IconMail className={iconClass} />,
      href: "mailto:rezachairul6@gmail.com",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className={iconClass} />,
      href: "https://www.instagram.com/rezachairul6/",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className={iconClass} />,
      href: "https://www.linkedin.com/in/reza-chairul6",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className={iconClass} />,
      href: "https://github.com/rezachairul",
    },
    {
      title: "Resume",
      icon: <IconFileCv className={iconClass} />,
      href: "/resume/page",
    },
  ];

  const velocity = 50;

  return (
    <section className="min-h-screen overflow-x-hidden flex flex-col justify-center items-center text-center bg-black text-white px-4 py-16">
      <div className="mt-6 md:mt-16">
        <img
          src="/assets/img/logo-cobradev.svg"
          alt="Logo from freepik"
          className="mx-auto w-16 md:w-20"
        />
      </div>

      <TextRevealCard
        text="Hi, I'm Cobra Developer"
        revealText="Hi, I'm Reza Chairul"
        className="font-sans mt-4 md:mt-6 text-2xl md:text-3xl font-bold text-white"
      />

      <TypewriterEffectSmooth
        words={isMobile ? mobileWords : desktopWords}
        className="font-sans mt-4 mb-8 md:mt-6 md:mb-12"
      />

      <FloatingDock
        mobileClassName=""
        className="mb-10 md:mb-14"
        items={links}
      />

      {/* ScrollVelocity */}
      <div className="whitespace-nowrap overflow-hidden">
        <ScrollVelocity
          texts={["CobraDev"]}
          velocity={velocity}
          className="custom-scroll-text"
        />
      </div>
    </section>
  );
}
