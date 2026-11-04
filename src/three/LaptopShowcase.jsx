import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function LaptopScreenTexture({ currentScreenshot }) {
  const texture = useTexture(currentScreenshot);
  texture.colorSpace = THREE.SRGBColorSpace;

  return (
    <meshBasicMaterial
      map={texture}
      toneMapped={false}
    />
  );
}

function FallbackMaterial() {
  return (
    <meshStandardMaterial
      color="#0B1020"
      emissive="#2563EB"
      emissiveIntensity={0.2}
      roughness={0.2}
    />
  );
}

function LaptopModel({ currentScreenshot, mousePos }) {
  const laptopGroup = useRef();
  const lidGroup = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    
    if (laptopGroup.current) {
      // Subtle floating and gentle mouse-tracking rotation
      const targetRotY = (mousePos.x * 0.4) + Math.sin(time * 0.5) * 0.08;
      const targetRotX = (-mousePos.y * 0.25) + 0.12 + Math.cos(time * 0.6) * 0.04;

      laptopGroup.current.rotation.y = THREE.MathUtils.lerp(
        laptopGroup.current.rotation.y,
        targetRotY,
        0.06
      );
      laptopGroup.current.rotation.x = THREE.MathUtils.lerp(
        laptopGroup.current.rotation.x,
        targetRotX,
        0.06
      );
    }
  });

  return (
    <group ref={laptopGroup} position={[0, -0.2, 0]}>
      {/* LAPTOP BASE (Bottom Half) */}
      <group position={[0, -0.05, 0]}>
        {/* Chassis Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[4.2, 0.12, 2.8]} />
          <meshStandardMaterial
            color="#131B2E"
            metalness={0.85}
            roughness={0.25}
          />
        </mesh>

        {/* Chamfered Edge Accent (Electric Blue LED Strip) */}
        <mesh position={[0, -0.05, 1.41]}>
          <boxGeometry args={[4.18, 0.015, 0.015]} />
          <meshBasicMaterial color="#22D3EE" />
        </mesh>

        {/* Keyboard Deck Recess */}
        <mesh position={[0, 0.065, -0.3]}>
          <boxGeometry args={[3.6, 0.01, 1.4]} />
          <meshStandardMaterial
            color="#080C16"
            roughness={0.5}
            metalness={0.4}
          />
        </mesh>

        {/* Keyboard Keys Representation (Glowing Grid) */}
        <mesh position={[0, 0.075, -0.3]}>
          <planeGeometry args={[3.5, 1.3]} />
          <meshStandardMaterial
            color="#0F172A"
            emissive="#2563EB"
            emissiveIntensity={0.2}
            roughness={0.3}
          />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, 0.065, 0.75]}>
          <boxGeometry args={[1.4, 0.005, 0.9]} />
          <meshStandardMaterial
            color="#1E293B"
            roughness={0.3}
            metalness={0.6}
          />
        </mesh>
      </group>

      {/* HINGE */}
      <mesh position={[0, 0.03, -1.39]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 3.8, 24]} />
        <meshStandardMaterial
          color="#0B1020"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* LAPTOP LID / SCREEN (Angled backwards) */}
      <group
        ref={lidGroup}
        position={[0, 0.03, -1.38]}
        rotation={[-Math.PI / 7.5, 0, 0]} // ~105 degree opening
      >
        {/* Lid Outer Shell (Back Cover with Glowing Monogram) */}
        <mesh position={[0, 1.35, -0.05]}>
          <boxGeometry args={[4.2, 2.7, 0.08]} />
          <meshStandardMaterial
            color="#0D1322"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Screen Display Bezel */}
        <mesh position={[0, 1.35, 0]}>
          <boxGeometry args={[4.1, 2.6, 0.02]} />
          <meshStandardMaterial
            color="#05070D"
            roughness={0.6}
          />
        </mesh>

        {/* Webcam Lens */}
        <mesh position={[0, 2.6, 0.015]}>
          <circleGeometry args={[0.025, 16]} />
          <meshBasicMaterial color="#22D3EE" />
        </mesh>

        {/* ACTIVE SCREEN DISPLAY WITH MOODFLIX TEXTURE */}
        <mesh position={[0, 1.35, 0.015]}>
          <planeGeometry args={[3.85, 2.38]} />
          <React.Suspense fallback={<FallbackMaterial />}>
            <LaptopScreenTexture currentScreenshot={currentScreenshot} />
          </React.Suspense>
        </mesh>
      </group>
    </group>
  );
}

export function LaptopShowcase({ currentScreenshot = "/projects/moodflix_hero.png" }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      className="w-full h-[380px] sm:h-[450px] md:h-[520px] relative rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Canvas
        camera={{ position: [0, 0.8, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Cinematic Studio Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 4]} intensity={1.8} color="#FFFFFF" />
        <pointLight position={[-4, 2, 2]} intensity={2.2} color="#2563EB" />
        <pointLight position={[4, 2, -1]} intensity={2.8} color="#8B5CF6" />
        <pointLight position={[0, -2, 3]} intensity={1.2} color="#22D3EE" />

        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
          <LaptopModel currentScreenshot={currentScreenshot} mousePos={mousePos} />
        </Float>

        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.65}
          scale={7}
          blur={2.4}
          far={3}
          color="#060A17"
        />
      </Canvas>

      {/* Screen Interactive Badge */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
        <span className="text-[11px] font-mono text-cyan-400/80 bg-navy-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-cyan-400/20">
          ● Interactive 3D Model • Drag or Move Cursor to Inspect
        </span>
        <span className="text-[11px] font-mono text-neon-purple/90 bg-navy-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-purple-500/20">
          MOODFLIX ENGINE v2.0
        </span>
      </div>
    </div>
  );
}
