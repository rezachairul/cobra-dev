"use client";

import dynamic from "next/dynamic";

// ✅ Hero ada di folder yang sama => "./Hero"
const Hero = dynamic(() => import("./Hero"), { ssr: false });

export default function HeroWrapper() {
  return <Hero />;
}
