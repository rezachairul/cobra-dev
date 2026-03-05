// components/ui/loader.js

"use client";

import { useEffect, useState } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Loading time of 1 seconds. Adjust as needed.
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-700">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            
            {/* Logo */}
            <img
              src="/assets/img/logo-cobradev.svg"
              alt="CobraDev Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />

            {/* Text */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-white">
              COBRA<span className="text-purple-400">DEV</span>
            </h1>

            {/* Cobra Spinner */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="w-full h-full rounded-full 
                              bg-[conic-gradient(from_0deg,_#6D28D9,_#C4B5FD,_#6D28D9)] 
                              animate-spin
                              [mask-image:radial-gradient(circle_at_center,transparent_55%,black_56%)]">
              </div>
            </div>

          </div>
        </div>
      )}

      {!loading && children}
    </>
  );
}
