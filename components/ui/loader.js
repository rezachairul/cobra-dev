// components/ui/loader.js

"use client";

import { useEffect, useState } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Atur lama loading sesuai kebutuhan (contoh: 1000ms = 1 detik)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-700">
          <div className="flex flex-col items-center gap-6">

            <h1 className="text-4xl font-bold tracking-widest animate-pulse">
              COBRA<span className="text-gray-400">DEV</span>
            </h1>

            <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>

          </div>
        </div>
      )}

      {!loading && children}
    </>
  );
}