import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export function Avatar3D({ scale = 1, position = [0, 0, 0] }) {
  const groupRef = useRef();
  const headRef = useRef();
  const eyesRef = useRef();
  const bodyRef = useRef();
  const orbitRingRef = useRef();
  const orbitRing2Ref = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Subtle breathing / idle animation
    if (bodyRef.current) {
      bodyRef.current.position.y = Math.sin(time * 1.5) * 0.03;
      bodyRef.current.rotation.z = Math.sin(time * 0.8) * 0.015;
    }

    // Natural head tracking responding smoothly to pointer
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        pointer.x * 0.45,
        0.08
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        -pointer.y * 0.35 + Math.sin(time * 1.2) * 0.02,
        0.08
      );
    }

    // Orbiting holographic rings
    if (orbitRingRef.current) {
      orbitRingRef.current.rotation.x = time * 0.3;
      orbitRingRef.current.rotation.y = time * 0.4;
    }
    if (orbitRing2Ref.current) {
      orbitRing2Ref.current.rotation.x = -time * 0.25;
      orbitRing2Ref.current.rotation.z = time * 0.35;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        {/* Holographic Orbit Rings */}
        <group position={[0, 0.4, 0]}>
          <mesh ref={orbitRingRef}>
            <torusGeometry args={[1.5, 0.012, 16, 64]} />
            <meshStandardMaterial
              color="#22D3EE"
              emissive="#22D3EE"
              emissiveIntensity={0.8}
              transparent
              opacity={0.4}
              wireframe
            />
          </mesh>
          <mesh ref={orbitRing2Ref}>
            <torusGeometry args={[1.75, 0.008, 16, 64]} />
            <meshStandardMaterial
              color="#8B5CF6"
              emissive="#8B5CF6"
              emissiveIntensity={0.9}
              transparent
              opacity={0.35}
            />
          </mesh>
        </group>

        {/* Developer Avatar Body Group */}
        <group ref={bodyRef}>
          {/* Torso / Professional Tech-Wear Blazer */}
          <mesh position={[0, -0.6, 0]}>
            <cylinderGeometry args={[0.42, 0.52, 0.9, 32]} />
            <meshStandardMaterial
              color="#0B1020"
              roughness={0.4}
              metalness={0.6}
            />
          </mesh>

          {/* Inner Shirt / Collar Accent */}
          <mesh position={[0, -0.18, 0.1]}>
            <boxGeometry args={[0.26, 0.22, 0.3]} />
            <meshStandardMaterial
              color="#1E293B"
              roughness={0.3}
              metalness={0.4}
            />
          </mesh>

          {/* Electric Blue Neon Lapel Accents */}
          <mesh position={[-0.14, -0.55, 0.32]} rotation={[0, 0, 0.15]}>
            <boxGeometry args={[0.04, 0.65, 0.04]} />
            <meshStandardMaterial
              color="#2563EB"
              emissive="#2563EB"
              emissiveIntensity={1.5}
            />
          </mesh>
          <mesh position={[0.14, -0.55, 0.32]} rotation={[0, 0, -0.15]}>
            <boxGeometry args={[0.04, 0.65, 0.04]} />
            <meshStandardMaterial
              color="#8B5CF6"
              emissive="#8B5CF6"
              emissiveIntensity={1.5}
            />
          </mesh>

          {/* Shoulders */}
          <mesh position={[-0.48, -0.4, 0]} rotation={[0, 0, 0.2]}>
            <capsuleGeometry args={[0.16, 0.35, 16, 16]} />
            <meshStandardMaterial
              color="#0F172A"
              roughness={0.4}
              metalness={0.5}
            />
          </mesh>
          <mesh position={[0.48, -0.4, 0]} rotation={[0, 0, -0.2]}>
            <capsuleGeometry args={[0.16, 0.35, 16, 16]} />
            <meshStandardMaterial
              color="#0F172A"
              roughness={0.4}
              metalness={0.5}
            />
          </mesh>

          {/* Neck */}
          <mesh position={[0, -0.05, 0]}>
            <cylinderGeometry args={[0.14, 0.16, 0.22, 24]} />
            <meshStandardMaterial
              color="#C89D7C"
              roughness={0.6}
            />
          </mesh>

          {/* HEAD GROUP (Controlled by mouse tracking) */}
          <group ref={headRef} position={[0, 0.26, 0]}>
            {/* Stylized Face Structure */}
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[0.38, 32, 32]} />
              <meshStandardMaterial
                color="#CFA583"
                roughness={0.55}
                metalness={0.1}
              />
            </mesh>

            {/* Jaw / Chin contour */}
            <mesh position={[0, -0.16, 0.08]} rotation={[-0.2, 0, 0]}>
              <cylinderGeometry args={[0.24, 0.16, 0.28, 24]} />
              <meshStandardMaterial
                color="#CFA583"
                roughness={0.55}
              />
            </mesh>

            {/* Stylized Modern Dark Hair */}
            <mesh position={[0, 0.22, -0.04]}>
              <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
              <meshStandardMaterial
                color="#18181B"
                roughness={0.7}
                metalness={0.2}
              />
            </mesh>
            {/* Hair Front Side Quiff */}
            <mesh position={[-0.08, 0.32, 0.18]} rotation={[0.4, -0.2, 0.3]}>
              <boxGeometry args={[0.32, 0.14, 0.26]} />
              <meshStandardMaterial
                color="#18181B"
                roughness={0.7}
              />
            </mesh>

            {/* Stylized Cyber Visor / Glasses (Futuristic Developer aesthetic) */}
            <group position={[0, 0.04, 0.34]} ref={eyesRef}>
              <mesh>
                <boxGeometry args={[0.54, 0.12, 0.08]} />
                <meshStandardMaterial
                  color="#0284C7"
                  emissive="#00E5FF"
                  emissiveIntensity={1.2}
                  transparent
                  opacity={0.88}
                  roughness={0.1}
                  metalness={0.9}
                />
              </mesh>
              {/* Visor Frame */}
              <mesh position={[0, 0.07, -0.02]}>
                <boxGeometry args={[0.58, 0.02, 0.12]} />
                <meshStandardMaterial
                  color="#8B5CF6"
                  emissive="#8B5CF6"
                  emissiveIntensity={0.8}
                />
              </mesh>
            </group>

            {/* Futuristic Headset / Audio Interface Accent */}
            <mesh position={[-0.4, 0.02, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
              <meshStandardMaterial
                color="#8B5CF6"
                emissive="#8B5CF6"
                emissiveIntensity={1.8}
              />
            </mesh>
            <mesh position={[0.4, 0.02, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
              <meshStandardMaterial
                color="#22D3EE"
                emissive="#22D3EE"
                emissiveIntensity={1.8}
              />
            </mesh>
          </group>
        </group>
      </Float>

      {/* Cinematic 3-point Avatar Studio Lighting */}
      <pointLight position={[-2, 1.5, 2]} color="#2563EB" intensity={2.5} distance={7} />
      <pointLight position={[2, 1.8, -1.5]} color="#8B5CF6" intensity={3.5} distance={8} />
      <pointLight position={[0, -1, 2]} color="#22D3EE" intensity={1.2} distance={5} />
    </group>
  );
}
