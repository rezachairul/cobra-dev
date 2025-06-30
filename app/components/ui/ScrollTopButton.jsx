"use client";
import { useEffect, useState } from "react";
import { IconJetpack } from "@tabler/icons-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 left-4 md:right-6 md:left-auto z-50 p-3 rounded-full bg-[#101010] text-white shadow-lg hover:bg-[#222] transition-all"
            aria-label="Scroll to top"
        >
            <IconJetpack size={20} stroke={2} />
        </button>

    )
  );
}
