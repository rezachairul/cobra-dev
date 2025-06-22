import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  
  // Membuat array posisi bintang di dalam bola dengan radius besar
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 500 }));

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotasi lebih smooth dengan interpolasi (lerp)
      ref.current.rotation.x += delta * 0.05;  
      ref.current.rotation.y += delta * 0.03;

      // Efek noise kecil agar ada sedikit pergerakan acak pada posisi
      ref.current.position.x += Math.sin(state.clock.elapsedTime * 0.1) * 0.003;
      ref.current.position.y += Math.cos(state.clock.elapsedTime * 0.1) * 0.003;

    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Menggunakan Points untuk banyak titik bintang */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={1} // Ukuran bintang diperbesar
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 100] }} className="absolute inset-0 w-full h-full">
      <ambientLight intensity={0.5} />
      <Stars />
      <Preload all />
    </Canvas>
  );
};

export default StarBackground;
