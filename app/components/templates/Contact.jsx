"use client";
import { useState, Suspense } from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Earth from "../canvas/Earth";
import Stars from "../canvas/Stars";
import ContactForm from "./ContactForm";
import { IconCopyright } from "@tabler/icons-react";

import BlurText from "../ui/BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


export default function Contact() {
  const [count, setCount] = useState(0);
  return (
    <section id="contact" className="relative py-2 bg-black text-white text-center">
        {/* Canvas sebagai background yang menutupi seluruh section */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Stars />
        </div>

        {/* Contact */}
        <BlurText
                text="Contact Me"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl font-bold mb-0 text-white"
            />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 p-4">
            {/* Kolom Kiri - Earth 3D */}
            <div className="w-full md:w-1/2 h-[400px] flex items-center justify-center">
                {/* <Earth /> */}
                 <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} />
                    <OrbitControls enableZoom={false} />
                    <Suspense fallback={null}>
                        <Earth />
                    </Suspense>
                </Canvas>
            </div>

            {/* Kolom Kanan - Contact Form */}
            <div className="w-full md:w-1/2 rounded-lg shadow-md">
                <ContactForm />
            </div>
        </div>
        {/* Copyright Section */}
        <div className="mt-0 text-center text-gray-400">
            <p className="flex justify-center items-center gap-1">
                <IconCopyright size={16} /> {new Date().getFullYear()} <span className="text-purple-900 font-semibold hover:text-purple-700"><a href="/">CobraDev</a></span> All Rights Reserved.
            </p>
        </div>
    </section>
  );
}
