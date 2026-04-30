// sections/contact.js

"use client";

// Import
import { useLanguage } from "@/context/LanguageContext";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMessageCircle,
} from "@tabler/icons-react";


// Export
export default function Contact() {
  const { language } = useLanguage();

  const contactText = {
    EN: {
      title: "Contact",
      heading: "Let's Build Something Great Together",
      desc: "I'm always open to collaboration, project discussions, or just sharing ideas about technology and software development.",
      button: "Contact Me",
    },
    ID: {
      title: "Kontak",
      heading: "Mari Bangun Sesuatu yang Hebat Bersama",
      desc: "Saya selalu terbuka untuk kolaborasi, diskusi proyek, atau sekadar berbagi ide tentang teknologi dan pengembangan software.",
      button: "Hubungi Saya",
    }
  };
  const t = contactText[language];

  return (
    <section id="contact" className="py-28 px-6 max-w-5xl mx-auto text-center" >
      {/* Title */}
      <h2 className="text-lg md:text-xl font-medium font-mono mb-8 tracking-widest bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
        {t.title}
      </h2>

      {/* Headline */}
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        {t.heading}
      </h3>

      {/* Description */}
      <p className="text-gray-800 dark:text-gray-400 max-w-xl mx-auto mb-10">
        {t.desc}
      </p>

      {/* Main CTA Button */}
      <div className="flex justify-center mb-10">
        <a
          href="mailto:rezachairul6@gmail.com"
          className="
            flex items-center gap-2 px-6 py-3 rounded-xl font-mono

            border border-purple-500/40 dark:border-purple-300/70

            bg-white dark:bg-transparent

            text-purple-900 dark:text-purple-300

            shadow-[0_0_10px_rgba(168,85,247,0.25)]
            dark:shadow-[0_0_25px_rgba(168,85,247,0.8)]

            hover:scale-105

            hover:!bg-purple-900 hover:!text-white
            dark:hover:!bg-white dark:hover:!text-purple-900

            transition-all duration-300
          "
        >
          <IconMessageCircle size={20} />
          {t.button}
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6">
        <a
          href="mailto:rezachairul6@gmail.com"
          className=" p-3 rounded-xl border border-purple-500 dark:border-purple-500/20 text-gray-800 dark:text-gray-500 hover:text-purple-300 hover:bg-purple-600/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-110 transition-all duration-300 dark:hover:text-gray-600"
        >
          <IconMail size={20} />
        </a>

        <a
          href="https://github.com/rezachairul"
          target="_blank"
          className=" p-3 rounded-xl border border-purple-500 dark:border-purple-500/20 text-gray-800 dark:text-gray-500 hover:text-purple-300 hover:bg-purple-600/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-110 transition-all duration-300 dark:hover:text-gray-600"
        >
          <IconBrandGithub size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/reza-chairul6/"
          target="_blank"
          className=" p-3 rounded-xl border border-purple-500 dark:border-purple-500/20 text-gray-800 dark:text-gray-500 hover:text-purple-300 hover:bg-purple-600/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-110 transition-all duration-300 dark:hover:text-gray-600"
        >
          <IconBrandLinkedin size={20} />
        </a>

        <a
          href="https://www.instagram.com/rezachairul6/"
          target="_blank"
          className=" p-3 rounded-xl border border-purple-500 dark:border-purple-500/20 text-gray-800 dark:text-gray-500 hover:text-purple-300 hover:bg-purple-600/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-110 transition-all duration-300 dark:hover:text-gray-600"
        >
          <IconBrandInstagram size={20} />
        </a>
      </div>
    </section>
  );
}