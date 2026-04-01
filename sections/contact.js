// sections/contact.js

// Import 
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMessageCircle,
} from "@tabler/icons-react";


// Export
export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 max-w-5xl mx-auto text-center" >
      {/* Title */}
      <h2 className="text-lg md:text-xl font-medium font-mono mb-8 tracking-widest bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
        Contact
      </h2>

      {/* Headline */}
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        Mari Bangun Sesuatu yang Hebat Bersama
      </h3>

      {/* Description */}
      <p className="text-gray-400 max-w-xl mx-auto mb-10">
        Saya selalu terbuka untuk kolaborasi, diskusi project, atau sekadar
        berbagi ide tentang teknologi dan pengembangan software.
      </p>

      {/* Main CTA Button */}
      <div className="flex justify-center mb-10">
        <a
          href="mailto:emailkamu@email.com"
          className=" flex items-center gap-2  px-6 py-3  rounded-xl  font-mono border border-purple-500/20 text-purple-300 bg-purple-600/20 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] hover:scale-105 transition-all duration-300 "
        >
          <IconMessageCircle size={20} />
          Hubungi Saya
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6">
        <a
          href="mailto:rezachairul6@gmail.com"
          className=" p-3 rounded-xl border border-purple-500/20 text-gray-400 hover:text-purple-300 hover:bg-purple-600/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-110 transition-all duration-300 "
        >
          <IconMail size={20} />
        </a>

        <a
          href="https://github.com/rezachairul"
          target="_blank"
          className=" p-3 rounded-xl border border-purple-500/20 text-gray-400 hover:text-purple-300 hover:bg-purple-600/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-110 transition-all duration-300 "
        >
          <IconBrandGithub size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/reza-chairul6/"
          target="_blank"
          className=" p-3 rounded-xl border border-purple-500/20 text-gray-400 hover:text-purple-300 hover:bg-purple-600/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-110 transition-all duration-300 "
        >
          <IconBrandLinkedin size={20} />
        </a>

        <a
          href="https://www.instagram.com/rezachairul6/"
          target="_blank"
          className=" p-3 rounded-xl border border-purple-500/20 text-gray-400 hover:text-purple-300 hover:bg-purple-600/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-110 transition-all duration-300 "
        >
          <IconBrandInstagram size={20} />
        </a>
      </div>
    </section>
  );
}