"use client";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setMenuIsOpen] = useState(false);
    const toggleMenu = () => setMenuIsOpen(!isMenuOpen);

    const navItems = [
        { label: "About", to: "about" },
        { label: "Works", to: "works" },
        { label: "Skills", to: "skill" },
        { label: "Contact Me", to: "contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full px-6 py-4 z-50
                        bg-black/30 backdrop-blur-md shadow-lg text-white">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img src="/assets/img/logo-cobradev.svg" alt="Logo" className="w-8 h-8" />
                    <h1 className="text-2xl font-bold">CobraDev</h1>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-8 font-medium text-lg">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <ScrollLink
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-purple-400 transition-colors"
                            >
                                {item.label}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 p-4 space-y-4">
                    {navItems.map((item) => (
                    <ScrollLink
                        key={item.to}
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => setMenuIsOpen(false)}
                        className="block text-center text-lg font-semibold text-white
                                px-4 py-2 rounded-md cursor-pointer transition-colors hover:text-purple-600"
                    >
                        {item.label}
                    </ScrollLink>
                    ))}
                </div>
            )}
        </nav>
    );
}
