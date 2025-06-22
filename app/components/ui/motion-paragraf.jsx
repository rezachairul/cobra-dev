import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const MotionParagraf = ({ children }) => {
  const { scrollY } = useScroll(); // Mengambil posisi scroll
  const scrollVelocity = useSpring(scrollY, { stiffness: 100, damping: 30 }); // Animasi scroll
  const textX = useTransform(scrollVelocity, [0, 1], [0, -300]); // Pergerakan teks horizontal

  return (
    <motion.div
      className="fixed top-1/2 left-0 right-0 text-5xl font-bold tracking-widest uppercase"
      style={{ x: textX }}
    >
      {children}
    </motion.div>
  );
};

export default MotionParagraf;
