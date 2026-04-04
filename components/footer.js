// components/footer.js

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-gray-800 dark:text-gray-400 mt-1 mb-10">
      <div className="border-t border-gray-400 dark:border-gray-800 py-8">
        <div className="flex flex-col items-center gap-3 text-center">

          {/* Logo */}
          <div className="flex items-center gap-2 tracking-widest">
            <img
              src="/assets/img/logo-cobradev.svg"
              alt="CobraDev Logo"
              className="w-8 h-8 object-contain"
            />

            <h1 className="text-lg md:text-xl font-bold tracking-widest text-gray-400 dark:text-white">
              COBRA<span className="text-gray-800 dark:text-gray-400">DEV</span>
            </h1>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-800 dark:text-gray-400">
            © {new Date().getFullYear()} COBRADEV — Built with Honor & Respect
          </p>

        </div>
      </div>
    </footer>
  );
}