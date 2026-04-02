// context/LanguageContext.js
"use client";

// import
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

// export
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) setLanguage(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "EN" ? "ID" : "EN";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);