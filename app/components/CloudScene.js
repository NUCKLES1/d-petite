"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, Cloud } from "@react-three/drei";

/**
 * CloudScene renders a realistic cloud environment using react-three-fiber and drei's Cloud helper.
 */
export default function CloudScene() {
  return (
    <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
      {/* Lighting for realism */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />

      {/* Sky background */}
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />

      {/* Clouds */}
      <Suspense fallback={null}>
        <Cloud
          position={[0, 5, 0]}
          speed={0.2} // Cloud movement speed
          opacity={0.5}
          width={20} // Cloud spread width
          depth={6} // Z-depth
          segments={40} // Smoothness
        />
        <Cloud
          position={[-10, 7, -5]}
          speed={0.15}
          opacity={0.45}
          width={15}
          depth={5}
          segments={35}
        />
      </Suspense>

      {/* Camera controls */}
      <OrbitControls />
    </Canvas>
  );
}
