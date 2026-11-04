import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingPolyhedron({ position, geometry, color, speed = 1, scale = 1 }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4 * speed;
      meshRef.current.rotation.y += delta * 0.6 * speed;
    }
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.6} floatIntensity={0.8} position={position}>
      <mesh ref={meshRef} scale={scale}>
        {geometry}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>
    </Float>
  );
}

export function FloatingObjects() {
  return (
    <group>
      <FloatingPolyhedron
        position={[-3.5, 2.2, -2]}
        geometry={<octahedronGeometry args={[0.55, 0]} />}
        color="#22D3EE"
        speed={1.2}
      />
      <FloatingPolyhedron
        position={[3.8, 1.8, -2.5]}
        geometry={<icosahedronGeometry args={[0.65, 0]} />}
        color="#8B5CF6"
        speed={0.9}
      />
      <FloatingPolyhedron
        position={[-3.2, -1.8, -1.5]}
        geometry={<torusGeometry args={[0.5, 0.08, 16, 32]} />}
        color="#2563EB"
        speed={1.1}
      />
      <FloatingPolyhedron
        position={[3.4, -2.2, -2]}
        geometry={<dodecahedronGeometry args={[0.5, 0]} />}
        color="#38BDF8"
        speed={0.8}
      />
    </group>
  );
}
