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
        <a href="mailto:emailkamu@email.com" className="flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300" >
          <IconMessageCircle size={20} />
          Hubungi Saya
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6">
        <a href="mailto:rezachairul6@gmail.com" className="p-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition" >
          <IconMail size={20} />
        </a>

        <a href="https://github.com/rezachairul" target="_blank" className="p-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition" >
          <IconBrandGithub size={20} />
        </a>

        <a href="https://www.linkedin.com/in/reza-chairul6/" target="_blank" className="p-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition" >
          <IconBrandLinkedin size={20} />
        </a>

        <a href="https://www.instagram.com/rezachairul6/" target="_blank" className="p-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition" >
          <IconBrandInstagram size={20} />
        </a>
      </div>
    </section>
  );
}