// components/footer.js

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-20">
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CobraDev — Built with Honor & Respect 
      </div>
    </footer>
  );
}