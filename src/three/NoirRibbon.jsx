import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export function NoirRibbon({ isMobile = false }) {
  const ribbonRef = useRef();
  const masterGroup = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Very slow, majestic, organic undulation
    if (ribbonRef.current) {
      ribbonRef.current.rotation.y += delta * 0.06;
      ribbonRef.current.rotation.x = Math.sin(time * 0.2) * 0.12;
      ribbonRef.current.rotation.z = Math.cos(time * 0.15) * 0.08;
    }

    // Subtle, restrained mouse parallax
    if (masterGroup.current) {
      masterGroup.current.rotation.y = THREE.MathUtils.lerp(
        masterGroup.current.rotation.y,
        pointer.x * 0.08,
        0.03
      );
      masterGroup.current.rotation.x = THREE.MathUtils.lerp(
        masterGroup.current.rotation.x,
        -pointer.y * 0.06,
        0.03
      );
    }
  });

  return (
    <group ref={masterGroup} position={[0, 0, -2.5]} scale={isMobile ? 0.75 : 1.05}>
      <Float speed={0.9} rotationIntensity={0.15} floatIntensity={0.3}>
        {/* Single Abstract Floating Metallic Sculpture with Subtle Bronze Reflections */}
        <mesh ref={ribbonRef} position={[0, 0.2, 0]}>
          <torusKnotGeometry args={[2.5, 0.26, isMobile ? 64 : 128, 32, 2, 3]} />
          <meshPhysicalMaterial
            color="#141416"
            metalness={0.96}
            roughness={0.18}
            clearcoat={0.65}
            clearcoatRoughness={0.12}
            reflectivity={0.92}
          />
        </mesh>
      </Float>

      {/* Cinematic Lighting: Soft ambient, subtle warm bronze key and charcoal rim */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 6, 4]} intensity={1.8} color="#E8D5C4" />
      <pointLight position={[3, 2, 1]} color="#C59B6D" intensity={2.5} distance={14} decay={2} />
      <pointLight position={[-4, -2, -1]} color="#1E1E22" intensity={1.2} distance={12} decay={2} />
      <pointLight position={[0, 3, -1]} color="#8C6239" intensity={1.6} distance={10} decay={2} />
    </group>
  );
}
