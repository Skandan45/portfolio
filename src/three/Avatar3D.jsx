import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export function Avatar3D({ scale = 1, position = [0, 0, 0] }) {
  const groupRef = useRef();
  const headGroupRef = useRef();
  const torsoRef = useRef();
  const orbitRing1Ref = useRef();
  const orbitRing2Ref = useRef();
  const haloRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Subtle idle breathing & bobbing
    if (torsoRef.current) {
      torsoRef.current.position.y = Math.sin(time * 1.6) * 0.035;
      torsoRef.current.rotation.z = Math.sin(time * 0.8) * 0.012;
    }

    // Natural head tracking responding smoothly to mouse movement
    if (headGroupRef.current) {
      headGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        headGroupRef.current.rotation.y,
        pointer.x * 0.55,
        0.08
      );
      headGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        headGroupRef.current.rotation.x,
        -pointer.y * 0.35 + Math.sin(time * 1.2) * 0.02,
        0.08
      );
    }

    // Holographic orbiting energy rings
    if (orbitRing1Ref.current) {
      orbitRing1Ref.current.rotation.x = time * 0.45;
      orbitRing1Ref.current.rotation.y = time * 0.35;
    }
    if (orbitRing2Ref.current) {
      orbitRing2Ref.current.rotation.x = -time * 0.3;
      orbitRing2Ref.current.rotation.z = time * 0.5;
    }

    // Halo gentle pulsing
    if (haloRef.current) {
      haloRef.current.rotation.z = time * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Float speed={1.6} rotationIntensity={0.15} floatIntensity={0.35}>
        
        {/* Cinematic Purple & Blue Lighting */}
        <pointLight position={[-2, 2.5, 2]} color="#2563EB" intensity={2.8} distance={8} />
        <pointLight position={[2, 1.8, -1]} color="#8B5CF6" intensity={3.5} distance={8} />
        <pointLight position={[0, -2, 1.5]} color="#22D3EE" intensity={1.5} distance={6} />

        {/* Orbiting Holographic Geometric Tech Rings */}
        <group position={[0, 0.4, 0]}>
          <mesh ref={orbitRing1Ref}>
            <torusGeometry args={[1.65, 0.015, 16, 64]} />
            <meshStandardMaterial
              color="#22D3EE"
              emissive="#22D3EE"
              emissiveIntensity={1.2}
              transparent
              opacity={0.5}
            />
          </mesh>
          <mesh ref={orbitRing2Ref}>
            <torusGeometry args={[1.9, 0.012, 16, 64]} />
            <meshStandardMaterial
              color="#8B5CF6"
              emissive="#8B5CF6"
              emissiveIntensity={1.4}
              transparent
              opacity={0.4}
            />
          </mesh>
        </group>

        {/* Floating Holographic Disc Base Halo */}
        <mesh ref={haloRef} position={[0, -1.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.8, 1.3, 32]} />
          <meshBasicMaterial
            color="#2563EB"
            transparent
            opacity={0.25}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* CHARACTER TORSO & PROFESSIONAL ATTIRE */}
        <group ref={torsoRef}>
          {/* Main Dark Navy Techwear Blazer Body */}
          <mesh position={[0, -0.6, 0]}>
            <cylinderGeometry args={[0.48, 0.56, 0.95, 32]} />
            <meshStandardMaterial
              color="#0B1020"
              roughness={0.35}
              metalness={0.65}
            />
          </mesh>

          {/* Inner Collared Shirt with Crisp Geometry */}
          <mesh position={[0, -0.16, 0.12]}>
            <boxGeometry args={[0.28, 0.24, 0.32]} />
            <meshStandardMaterial
              color="#131B2E"
              roughness={0.3}
              metalness={0.5}
            />
          </mesh>

          {/* Electric Blue Neon Left Lapel */}
          <mesh position={[-0.16, -0.52, 0.35]} rotation={[0, 0, 0.14]}>
            <boxGeometry args={[0.07, 0.65, 0.06]} />
            <meshStandardMaterial
              color="#2563EB"
              emissive="#2563EB"
              emissiveIntensity={0.9}
            />
          </mesh>

          {/* Neon Purple Right Lapel */}
          <mesh position={[0.16, -0.52, 0.35]} rotation={[0, 0, -0.14]}>
            <boxGeometry args={[0.07, 0.65, 0.06]} />
            <meshStandardMaterial
              color="#8B5CF6"
              emissive="#8B5CF6"
              emissiveIntensity={0.9}
            />
          </mesh>

          {/* Cyan Glow Collar Tie Accent */}
          <mesh position={[0, -0.32, 0.28]}>
            <boxGeometry args={[0.04, 0.3, 0.04]} />
            <meshStandardMaterial
              color="#22D3EE"
              emissive="#22D3EE"
              emissiveIntensity={1.2}
            />
          </mesh>

          {/* Left Arm & Shoulder Pad */}
          <mesh position={[-0.56, -0.55, 0]} rotation={[0, 0, 0.1]}>
            <capsuleGeometry args={[0.13, 0.65, 8, 16]} />
            <meshStandardMaterial
              color="#0B1020"
              roughness={0.4}
              metalness={0.6}
            />
          </mesh>

          {/* Right Arm & Shoulder Pad */}
          <mesh position={[0.56, -0.55, 0]} rotation={[0, 0, -0.1]}>
            <capsuleGeometry args={[0.13, 0.65, 8, 16]} />
            <meshStandardMaterial
              color="#0B1020"
              roughness={0.4}
              metalness={0.6}
            />
          </mesh>

          {/* Left Wrist Glowing Cyan Trim */}
          <mesh position={[-0.6, -0.85, 0]}>
            <torusGeometry args={[0.14, 0.015, 8, 24]} />
            <meshStandardMaterial
              color="#22D3EE"
              emissive="#22D3EE"
              emissiveIntensity={1.0}
            />
          </mesh>

          {/* Right Wrist Glowing Cyan Trim */}
          <mesh position={[0.6, -0.85, 0]}>
            <torusGeometry args={[0.14, 0.015, 8, 24]} />
            <meshStandardMaterial
              color="#22D3EE"
              emissive="#22D3EE"
              emissiveIntensity={1.0}
            />
          </mesh>
        </group>

        {/* CHARACTER HEAD GROUP (TRACKS POINTER) */}
        <group ref={headGroupRef} position={[0, 0.35, 0]}>
          {/* Neck */}
          <mesh position={[0, -0.22, 0]}>
            <cylinderGeometry args={[0.16, 0.18, 0.25, 24]} />
            <meshStandardMaterial
              color="#223048"
              roughness={0.5}
              metalness={0.3}
            />
          </mesh>

          {/* Stylized Geometric Head / Jawline */}
          <mesh position={[0, 0.08, 0]}>
            <sphereGeometry args={[0.34, 32, 32]} />
            <meshStandardMaterial
              color="#1E293B"
              roughness={0.3}
              metalness={0.6}
            />
          </mesh>

          {/* Hair Geometry (Inspired by Skandan's hairstyle) */}
          <mesh position={[0, 0.22, -0.04]} rotation={[0.12, 0, 0]}>
            <sphereGeometry args={[0.35, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
            <meshStandardMaterial
              color="#080C16"
              roughness={0.7}
              metalness={0.2}
            />
          </mesh>

          {/* Sideburns / Front Hair Fringe */}
          <mesh position={[0, 0.28, 0.12]} rotation={[-0.3, 0, 0]}>
            <boxGeometry args={[0.42, 0.14, 0.25]} />
            <meshStandardMaterial
              color="#080C16"
              roughness={0.7}
              metalness={0.2}
            />
          </mesh>

          {/* Cybernetic Holographic Visor / Optical Eyes Accent */}
          <mesh position={[0, 0.1, 0.31]}>
            <boxGeometry args={[0.38, 0.07, 0.08]} />
            <meshStandardMaterial
              color="#22D3EE"
              emissive="#22D3EE"
              emissiveIntensity={1.5}
              transparent
              opacity={0.92}
            />
          </mesh>

          {/* Audio Comm / Neural Headset Accent */}
          <mesh position={[-0.35, 0.08, 0]}>
            <cylinderGeometry args={[0.07, 0.07, 0.05, 16]} rotation={[0, 0, Math.PI / 2]} />
            <meshStandardMaterial
              color="#8B5CF6"
              emissive="#8B5CF6"
              emissiveIntensity={1.0}
            />
          </mesh>
          <mesh position={[0.35, 0.08, 0]}>
            <cylinderGeometry args={[0.07, 0.07, 0.05, 16]} rotation={[0, 0, Math.PI / 2]} />
            <meshStandardMaterial
              color="#8B5CF6"
              emissive="#8B5CF6"
              emissiveIntensity={1.0}
            />
          </mesh>
        </group>

      </Float>
    </group>
  );
}
