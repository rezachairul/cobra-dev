import React from "react";

import Link from 'next/link';


import { 
    IconArrowLeft,
    IconDownload,
    IconHome,
    IconPhoneCall,
    IconMail,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandGithub,
    IconCopyright,
    IconWorldWww,
} from "@tabler/icons-react";

export const metadata = {
  title: "Resume | CobraDev",
  description: "My Resume Page - CobraDev",
};

export default function Resume() {

    return (
        <section id="Resume" className="py-16 bg-black text-white">
            {/* <SplashCursor /> */}
            {/* Header */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b pb-4 gap-4 md:gap-0 text-center md:text-left">
                    <Link href="/" className="text-gray-200 flex items-center gap-2 hover:text-purple-500 justify-center md:justify-start">
                        <IconArrowLeft size={20} />
                        Back Home
                    </Link>

                    <h2 className="text-3xl font-bold text-gray-100">My Resume</h2>

                    <a 
                        href="/assets/CV_RezaChairul.pdf" 
                        download="Reza_Chairul_Manam_CV.pdf" 
                        className="px-6 py-2 border-purple-700 text-purple-700 border-2 rounded-lg hover:border-purple-500 hover:bg-purple-500 hover:text-white flex items-center gap-2 justify-center md:justify-end"
                    >
                        <IconDownload size={20} />
                        Download
                    </a>
                </div>

                {/* Nama dan Kontak */}
                <div className="text-center mt-5">
                    <h1 className="text-2xl md:text-4xl font-bold">REZA CHAIRUL MANAM</h1>

                    {/* Alamat */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 mt-2 text-sm md:text-base text-center md:text-left">
                        <a href="https://maps.app.goo.gl/1yq6J2GwWhRBXKWA8" className="flex items-center gap-2">
                        <IconHome size={20} className="text-white hidden md:inline" />
                        <span>Jl. Padmosari I No. 240, RT 005/RW 002, Desa Haduyang, Kec. Natar, Kab. Lampung Selatan, Lampung</span>
                        </a>
                    </div>

                    {/* Kontak */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 mt-2 text-base md:text-lg text-center md:text-left">
                        <a href="https://wa.me/6288269620552" className="flex items-center gap-2">
                        <IconPhoneCall size={20} className="text-red-500" />
                        <span>+62 882 6962 0552</span>
                        </a>
                        <a href="mailto:rezachairul6@gmail.com" className="flex items-center gap-2">
                        <IconMail size={20} className="text-gray-400" />
                        <span>rezachairul6@gmail.com</span>
                        </a>
                    </div>

                    {/* Sosial Media */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4">
                        <a href="https://www.linkedin.com/in/reza-chairul6" className="flex items-center gap-2 text-blue-600 hover:text-blue-500">
                        <IconBrandLinkedin size={24} /> <span>reza-chairul6</span>
                        </a>
                        <a href="https://github.com/rezachairul" className="flex items-center gap-2 text-gray-200 hover:text-gray-500">
                        <IconBrandGithub size={24} /> <span>rezachairul</span>
                        </a>
                        <a href="https://instagram.com/rezachairul6" className="flex items-center gap-2 text-pink-600 hover:text-pink-500">
                        <IconBrandInstagram size={24} /> <span>rezachairul6</span>
                        </a>
                        <a href="https://cobradev.vercel.app" className="flex items-center gap-2 text-purple-600 hover:text-purple-500">
                        <IconWorldWww size={24} /> <span>CobraDev</span>
                        </a>
                    </div>
                </div>


                {/* Profile Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">PROFILE</h3>
                    <p className="text-lg text-justify leading-relaxed text-gray-300">
                        Hi there! 👋 I&apos;m <span className="font-semibold text-white">Reza Chairul Manam</span>, I&apos;m currently living in Lampung, Indonesia.
                        I&apos;m an Informatics Engineering student at the Sumatra Institute of Technology who loves everything about WebGIS and web development. Currently, I&apos;m working with
                        <span className="text-rose-400"><a href="https://laravel.com/"> Laravel</a></span>, <span className="text-blue-400"> <a href="https://react.dev/"> React</a></span>, <span className="text-green-400"><a href="https://www.postgresql.org/"> PostgreSQL</a></span>,
                        and <span className="text-sky-400"><a href="https://tailwindcss.com/"> Tailwind CSS</a></span> to build interactive and scalable applications.
                    </p>
                    <p className="mt-4 text-lg text-justify leading-relaxed text-gray-300">
                        Right now, I&apos;m focused on a WebGIS project, exploring how geospatial data can be visualized and managed efficiently. I enjoy
                        problem-solving and bringing ideas to life through code.
                    </p>
                    <p className="mt-4 text-lg text-justify leading-relaxed text-gray-300">
                        Beyond coding, I have a passion for <span className="font-semibold text-white">graphic design</span>, <span className="font-semibold text-white">photography</span>,
                        and <span className="font-semibold text-white">video editing</span>. Whether it&apos;s creating visuals, capturing moments, or editing content,
                        I love expressing creativity in different ways.
                    </p>
                    <p className="mt-4 text-lg text-justify font-semibold text-indigo-300">
                        Let&apos;s connect and create something awesome together! 🚀
                    </p>
                </div>

                {/* Education Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">EDUCATION</h3>
                    <div className="flex justify-between text-gray-300">
                        <div>
                        <span className="font-semibold">Bachelor&apos;s Degree – Informatics Engineering</span><br />
                        Institut Teknologi Sumatera, Lampung<br />
                        GPA: 3.00/4.00 scale
                        </div>
                        <span className="font-semibold">2020 – 2026</span>
                    </div>
                    <p className="mt-2 text-gray-300 italic">
                        Final Thesis: WebGIS-Based Heavy Equipment Distribution Point Information System Design Using Agile LSD Method, Case Study: PT. Fajar Anugerah Dinamika.
                    </p>
                </div>

                {/* Experience Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">EXPERIENCE</h3>
                    <p className="font-semibold mt-2">Company/Institution</p>
                    <p className="text-gray-700">Job Title | <span className="font-semibold">mm yyyy - mm yyyy</span></p>
                    <ul className="list-disc pl-5 mt-2 text-gray-700">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Ut in euismod nulla. Integer auctor nisi a massa hendrerit, id porta orci efficitur.</li>
                    </ul>
                </div>

                {/* Projects Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">PROJECTS</h3>

                    {/* 2025 */}
                    <div className="flex justify-between items-center mt-2">
                        <p className="font-semibold">hellomuse.site</p>
                        <p className="font-semibold">2025</p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 text-gray-300">
                        <li>Developed a visual-driven website to showcase creative projects in a modern, engaging format.</li>
                        <li>Implemented responsive design and interactive UI components for better user experience.</li>
                    </ul>

                    <div className="flex justify-between items-center mt-4">
                        <p className="font-semibold">Star Warship</p>
                        <p className="font-semibold">2025</p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 text-gray-300">
                        <li>Built an arcade-style spaceship game focusing on shooting mechanics and dynamic enemy behavior.</li>
                        <li>Designed multiple enemy types and levels to increase gameplay difficulty and player engagement.</li>
                    </ul>

                    <div className="flex justify-between items-center mt-4">
                        <p className="font-semibold">Sistem Monitoring Inventori K4 - PLN UPDK</p>
                        <p className="font-semibold">2025</p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 text-gray-300">
                        <li>Developed an inventory monitoring system to track and manage equipment data for PLN UPDK.</li>
                        <li>Implemented CRUD functionalities, user authentication, and real-time monitoring dashboards.</li>
                    </ul>

                    {/* 2024 */}
                    <div className="flex justify-between items-center mt-4">
                        <p className="font-semibold">Ruang Nada</p>
                        <p className="font-semibold">2024</p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 text-gray-300">
                        <li>Designed a mobile application to simplify booking and borrowing of musical equipment and studio rooms for a campus music organization.</li>
                        <li>Focused on intuitive UI/UX for student users and admin workflows.</li>
                    </ul>

                    <div className="flex justify-between items-center mt-4">
                        <p className="font-semibold">SDGS Center ITERA</p>
                        <p className="font-semibold">2024</p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 text-gray-300">
                        <li>Developed an informative website to support ITERA’s Sustainable Development Goals initiatives.</li>
                        <li>Managed content structure and responsive layouts to reach a broader academic audience.</li>
                    </ul>

                    {/* Early 2023 */}
                    <div className="flex justify-between items-center mt-4">
                        <p className="font-semibold">Perpusda Lampung</p>
                        <p className="font-semibold">Early 2023</p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 text-gray-300">
                        <li>Created an online library catalog system with user registration and book management features.</li>
                        <li>Enabled efficient search and borrowing processes for library visitors.</li>
                    </ul>

                    <div className="flex justify-between items-center mt-4">
                        <p className="font-semibold">Sistem Informasi Desa</p>
                        <p className="font-semibold">Early 2023</p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 text-gray-300">
                        <li>Developed a village information system to manage population data and administrative services.</li>
                        <li>Improved data transparency and service efficiency for village officials and residents.</li>
                    </ul>

                    <div className="flex justify-between items-center mt-4">
                        <p className="font-semibold">Bandar Lampung Health Facilities Map</p>
                        <p className="font-semibold">Early 2023</p>
                    </div>
                    <ul className="list-disc pl-5 mt-2 text-gray-300">
                        <li>Created a WebGIS-based mapping system to display the distribution of health facilities in Bandar Lampung.</li>
                        <li>Enabled the public to easily find nearby hospitals, clinics, and health centers.</li>
                    </ul>
                </div>

                {/* Organizational Experience Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">ORGANIZATIONAL EXPERIENCE</h3>
                    <ul className="mt-2 text-gray-400">
                        <li className="flex justify-between">
                            <span>
                                <span className="font-semibold text-gray-300">Unit Kegiatan Mahasiswa Bidang Seni Musik ITERA</span><br />
                                Ketua Umum
                            </span>
                            <span className="font-semibold text-gray-300">Feb 2023 - Feb 2024</span>
                        </li>
                        <li className="flex justify-between">
                            <span>
                                <span className="font-semibold text-gray-300">Unit Kegiatan Mahasiswa Bidang Seni Musik ITERA</span><br />
                                Kepala Departemen Eksternal
                            </span>
                            <span className="font-semibold text-gray-300">Feb 2022 - Feb 2023</span>
                        </li>
                        <li className="flex justify-between">
                            <span>
                                <span className="font-semibold text-gray-300">Himpunan Mahasiswa Teknik Informatika ITERA</span><br />
                                Staff Magang M-Rakyat HMIF
                            </span>
                            <span className="font-semibold text-gray-300">Jul 2022</span>
                        </li>
                        <li className="flex justify-between">
                            <span>
                                <span className="font-semibold text-gray-300">Himpunan Mahasiswa Teknik Informatika ITERA</span><br />
                                Ketua Pelaksana Funcoastic HMEI
                            </span>
                            <span className="font-semibold text-gray-300">Jun 2022</span>
                        </li>
                    </ul>
                </div>
                
                {/* Training And Certification */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">TRAINING AND CERTIFICATION</h3>
                    <ul className="mt-2 text-gray-300">
                        <li className="flex justify-between">
                            <span>Certified WebGIS Developer</span>
                            <span>ESRI (2024)</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Laravel & React Full-Stack Development</span>
                            <span>Udemy (2023)</span>
                        </li>
                    </ul>
                </div>

                {/* Publication */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">PUBLICATION</h3>
                    <ul className="mt-2 text-gray-300">
                        <li className="flex justify-between">
                            <span>&quot;WebGIS-Based Heavy Equipment Tracking&quot;</span>
                            <span>ITERA Journal (2025)</span>
                        </li>
                        <li className="flex justify-between">
                            <span>&quot;Optimizing Agile LSD for Geospatial Data&quot;</span>
                            <span>National Conference (2024)</span>
                        </li>
                    </ul>
                </div>

                {/* Languages */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">LANGUAGES</h3>
                    <ul className="mt-2 text-gray-300">
                        <li className="flex justify-between">
                            <span>English</span>
                            <span>Intermediate (TOEFL Prediction Test score xxx)</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Indonesian</span>
                            <span>Native</span>
                        </li>
                    </ul>
                </div>

                {/* Skills */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2">SKILLS</h3>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full border-collapse border border-gray-800 text-gray-300">
                            <thead>
                                <tr className="bg-gray-800">
                                    <th className="border border-gray-600 px-4 py-2">Hard Skill</th>
                                    <th className="border border-gray-600 px-4 py-2">Soft Skill</th>
                                    <th className="border border-gray-600 px-4 py-2">Measurement Unit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-600 px-4 py-2">
                                        <span className="font-semibold">Advance in:</span>
                                        <ul className="list-disc list-inside">
                                            <li>WebGIS Development (Laravel, Leaflet, OpenLayers)</li>
                                            <li>Full-Stack Web Development (Laravel, React, PostgreSQL, Tailwind CSS)</li>
                                        </ul>
                                        <span className="font-semibold">Intermediate in:</span>
                                        <ul className="list-disc list-inside">
                                            <li>Geospatial Data Processing</li>
                                            <li>Graphic Design & Video Editing</li>
                                        </ul>
                                    </td>
                                    <td className="border border-gray-600 px-4 py-2">
                                        <ul className="list-disc list-inside">
                                            <li>Leadership</li>
                                            <li>Teamwork</li>
                                            <li>Communication</li>
                                            <li>Adaptability</li>
                                            <li>Hard worker & Persistence</li>
                                        </ul>
                                    </td>
                                    <td className="border border-gray-600 px-4 py-2">
                                        <ul className="list-disc list-inside">
                                            <li>Project Experience</li>
                                            <li>Problem-Solving Ability</li>
                                            <li>Certifications</li>
                                            <li>Team Collaboration</li>
                                            <li>Self-Learning Initiative</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* End of resume */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold border-b pb-2"></h3>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 text-center text-gray-400">
                    <p className="flex justify-center items-center gap-1">
                        <IconCopyright size={16} /> {new Date().getFullYear()} 
                        <Link href="/" className="text-purple-900 font-semibold hover:text-purple-700">CobraDev</Link> 
                        All Rights Reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}
