// components/navbar.js

"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage(); 
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    setDarkMode(savedTheme === "dark");
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", prefersDark);
    setDarkMode(prefersDark);
  }
}, []);

  const toggleTheme = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const translations = {
    EN: {
      home: "HOME",
      about: "ABOUT",
      project: "PROJECT",
      tech: "TECH",
      journey: "JOURNEY",
      contact: "CONTACT",
    },
    ID: {
      home: "BERANDA",
      about: "TENTANG",
      project: "PROYEK",
      tech: "TEKNOLOGI",
      journey: "PERJALANAN",
      contact: "KONTAK",
    }
  };

  const t = translations[language];

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl shadow-md z-50 rounded-full backdrop-blur-md border border-gray-200 dark:border-gray-700" >
        <div className="max-w-7xl mx-auto px-6 py-1.5 md:py-2 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 tracking-widest animate-pulse">
              <img
                  src="/assets/img/logo-cobradev.svg"
                  alt="CobraDev Logo"
                  className="w-8 h-8 object-contain"
              />
              <h1 className="text-lg md:text-xl font-bold tracking-widest">
                  COBRA<span className="text-gray-400">DEV</span>
              </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 text-gray-800 dark:text-gray-500 font-thin text-sm">
            <li><a href="#hero" className="hover:text-purple-800 dark:hover:text-purple-700">{t.home}</a></li>
            <li><a href="#about" className="hover:text-purple-800 dark:hover:text-purple-700">{t.about}</a></li>
            <li><a href="#project" className="hover:text-purple-800 dark:hover:text-purple-700">{t.project}</a></li>
            <li><a href="#tech" className="hover:text-purple-800 dark:hover:text-purple-700">{t.tech}</a></li>
            <li><a href="#journey" className="hover:text-purple-800 dark:hover:text-purple-700">{t.journey}</a></li>
            <li><a href="#contact" className="hover:text-purple-800 dark:hover:text-purple-700">{t.contact}</a></li>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            
            {/* Language Button */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 border rounded-full text-sm dark:border-gray-600"
            >
              {language}
            </button>

            {/* Dark Mode Button */}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              {darkMode ? (
                // Sun Icon for Light Mode
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="22" height="22" 
                  viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
                  className="icon icon-tabler icons-tabler-outline icon-tabler-sun-high text-yellow-500 dark:text-yellow-300">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656" /><path d="M6.343 17.657l-1.414 1.414" /><path d="M6.343 6.343l-1.414 -1.414" /><path d="M17.657 6.343l1.414 -1.414" /><path d="M17.657 17.657l1.414 1.414" /><path d="M4 12h-2" /><path d="M12 4v-2" /><path d="M20 12h2" /><path d="M12 20v2" />
                </svg>
              ) : (
                // Moon Icon for Dark Mode
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="22" height="22" 
                  viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
                  className ="icon icon-tabler icons-tabler-outline icon-tabler-moon text-gray-800 dark:text-gray-800 hover:text-gray-600 dark:hover:text-gray-300 transition">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" />
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icclearon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>          
            </button>

          </div>
        </div>
      </nav>

      {/* OVERLAY + DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP BLUR */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="
                fixed top-0 right-0 h-full
                w-[75%]
                md:hidden
                bg-white/30 dark:bg-black/30
                border-l border-gray-200 dark:border-gray-700
                z-50 p-6
                shadow-[0_0_30px_rgba(168,85,247,0.3)]
                backdrop-blur-xl
                "
            >
              {/* Close */}
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="
                    absolute
                    -left-5
                    top-1/2
                    -translate-y-1/2
                    w-10 h-10
                    rounded-full
                    backdrop-blur-md
                    bg-white/20 dark:bg-black/40
                    border border-purple-500/40
                    flex items-center justify-center
                    shadow-[0_0_15px_rgba(168,85,247,0.6)]
                  "
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                </motion.button>

              {/* Menu */}
              <ul className="flex flex-col gap-6 text-lg text-gray-100 dark:text-gray-300">
                <li><a href="#hero" className="hover:text-purple-500" onClick={() => setMenuOpen(false)}>{t.home}</a></li>
                <li><a href="#about" className="hover:text-purple-500" onClick={() => setMenuOpen(false)}>{t.about}</a></li>
                <li><a href="#project" className="hover:text-purple-500" onClick={() => setMenuOpen(false)}>{t.project}</a></li>
                <li><a href="#tech" className="hover:text-purple-500" onClick={() => setMenuOpen(false)}>{t.tech}</a></li>
                <li><a href="#journey" className="hover:text-purple-500" onClick={() => setMenuOpen(false)}>{t.journey}</a></li>
                <li><a href="#contact" className="hover:text-purple-500" onClick={() => setMenuOpen(false)}>{t.contact}</a></li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;