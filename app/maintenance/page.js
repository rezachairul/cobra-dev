// maintenance/page.js

"use client";

import { useEffect, useState, useRef } from "react";

export default function MaintenancePage() {
  const targetDate = new Date("2026-04-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const canvasRef = useRef(null);

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Particle Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speedY: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(168, 85, 247, 0.7)";

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.y += p.speedY;
        if (p.y > canvas.height) p.y = 0;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden text-white">
      {/* Canvas Particle */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-40"
      />

      {/* Neon Glow Background */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600 blur-[200px] opacity-30 rounded-full top-[-100px] left-[-100px] animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-fuchsia-500 blur-[180px] opacity-20 rounded-full bottom-[-150px] right-[-150px] animate-pulse" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-widest bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
          SYSTEM EVOLUTION
        </h1>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Rebuilding infrastructure. Optimizing performance.
          Deploying next-generation architecture.
          Stay tuned for a faster, more reliable experience. We’re working hard to bring you an improved service. Thank you for your patience and support!
          <br />
          <span className="text-lg md:text-xl font-extrabold tracking-widest bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">CobraDev Team</span>
        </p>

        <div className="mt-10 grid grid-cols-4 gap-4">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="bg-white/5 border border-purple-500/20 backdrop-blur-lg rounded-xl py-4 shadow-[0_0_20px_rgba(168,85,247,0.3)]" >
              <div className="text-3xl font-bold text-purple-400">
                {value}
              </div>
              <div className="text-xs uppercase text-gray-400 tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-gray-400 text-sm">
          For urgent inquiries:
          <br />
          <span className="text-purple-400">
            <a href="mailto:rezachairul6@gmail.com" className="hover:underline">
              rezachairul6@gmail.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}