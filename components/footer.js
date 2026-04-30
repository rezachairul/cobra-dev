// components/footer.js

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--footer-bg)] mt-10 mb-10">
        {/* horizontal line */}
        <div
          className="
            absolute top-0 left-0 w-full h-[1.5px]
            bg-gradient-to-r from-transparent via-purple-500 to-transparent
            opacity-70
            blur-[0.5px]
          "
        />

        <div className="flex flex-col items-center gap-3 text-center pt-6">

          {/* Logo */}
          <div className="flex items-center gap-2 tracking-widest">
            <img
              src="/assets/img/logo-cobradev.svg"
              alt="CobraDev Logo"
              className="w-8 h-8 object-contain"
            />

            <h1 className="text-lg md:text-xl font-bold tracking-widest">
              COBRADEV
            </h1>
          </div>

          {/* Copyright */}
          <p className="text-xs">
            © {new Date().getFullYear()} COBRADEV — Built with Honor & Respect
          </p>

        </div>
    </footer>
  );
}