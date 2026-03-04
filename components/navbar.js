// components/navbar.js

"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ID" : "EN");
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl shadow-md z-50 rounded-full backdrop-blur-md border border-gray-200 dark:border-gray-700" >
      <div className="max-w-7xl mx-auto px-6 py-1.5 md:py-2 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-widest animate-pulse">
            COBRA<span className="text-gray-400">DEV</span>
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-4 text-gray-700 dark:text-gray-300 font-thin text-base">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#project" className="hover:text-blue-500">Project</a></li>
          <li><a href="#skill" className="hover:text-blue-500">Skill</a></li>
          <li><a href="#journey" className="hover:text-blue-500">Journey</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-sun-high text-yellow-300">
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
                className ="icon icon-tabler icons-tabler-outline icon-tabler-moon text-gray-300">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" />
              </svg>
            )}
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;