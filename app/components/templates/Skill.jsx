"use client";

import React from "react";
import {
    FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaPython, FaPhp, FaGithub,
    FaCameraRetro, FaVideo, FaFigma, FaGitAlt
} from "react-icons/fa";
import {
    SiTailwindcss, SiLatex, SiPostgresql, SiJavascript, SiAdobephotoshop , SiCanva, SiAdobepremierepro
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import BlurText from "../ui/BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Skill() {
    const programmingSkills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-3xl" />, url: "https://getbootstrap.com/docs/" },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-3xl" />, url: "https://tailwindcss.com/docs" },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-300 text-3xl" />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "React JS", icon: <FaReact className="text-cyan-400 text-3xl" />, url: "https://react.dev/learn" },
        { name: "Python", icon: <FaPython className="text-yellow-300 text-3xl" />, url: "https://docs.python.org/3/" },
        { name: "PHP", icon: <FaPhp className="text-indigo-300 text-3xl" />, url: "https://www.php.net/docs.php" },
        { name: "LaTeX", icon: <SiLatex className="text-white text-3xl" />, url: "https://www.latex-project.org/help/documentation/" },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300 text-3xl" />, url: "https://www.postgresql.org/docs/" },
        { name: "VS Code", icon: <VscVscode className="text-blue-500 text-3xl" />, url: "https://code.visualstudio.com/docs" },
        { name: "Git", icon: <FaGitAlt className="text-orange-400 text-3xl" />, url: "https://git-scm.com/doc" },
        { name: "GitHub", icon: <FaGithub className="text-white text-3xl" />, url: "https://docs.github.com/" },
    ];

    const designSkills = [
        { name: "Fotografi", icon: <FaCameraRetro className="text-white text-3xl" />, url: "#" },
        { name: "Videografi", icon: <FaVideo className="text-white text-3xl" />, url: "#" },
        { name: "Photoshop", icon: <SiAdobephotoshop className="text-pink-500 text-3xl" />, url: "https://helpx.adobe.com/photoshop/tutorials.html" },
        { name: "Adobe Premiere", icon: <SiAdobepremierepro className="text-purple-400 text-3xl" />, url: "https://helpx.adobe.com/premiere-pro/tutorials.html" },
        { name: "Figma", icon: <FaFigma className="text-pink-400 text-3xl" />, url: "https://help.figma.com/hc/en-us" },
        { name: "Canva", icon: <SiCanva className="text-blue-300 text-3xl" />, url: "https://www.canva.com/design-school/" },
    ];

    return (
        <section id="skill" className="py-16 px-6 bg-black text-white text-center">
            <BlurText
                text="Skills"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl font-bold mb-6 text-white"
            />
            <p className="max-w-2xl mx-auto text-gray-300 text-justify">
                I have experience in web programming, particularly in the field of WebGIS,
                as well as skills in visual design and media processing. Below are the tools and technologies I frequently use:
            </p>

            {/* Programming & Tools */}
            <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Programming & Tools</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {programmingSkills.map((skill, index) => (
                        <a
                            key={index}
                            href={skill.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 rounded-lg py-4 px-4 text-white shadow-md flex flex-col items-center hover:scale-105 transition-transform"
                        >
                            {skill.icon}
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Design & Media Editing */}
            <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">Design & Media Editing</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {designSkills.map((skill, index) => (
                        <a
                            key={index}
                            href={skill.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 rounded-lg py-4 px-4 text-white shadow-md flex flex-col items-center hover:scale-105 transition-transform"
                        >
                            {skill.icon}
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
