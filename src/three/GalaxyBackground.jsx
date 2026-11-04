import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function GalaxyBackground({ count = 3500, speed = 0.05 }) {
  const pointsRef = useRef();
  const innerRef = useRef();

  // Generate particle galaxy positions, colors, and scales
  const [positions, colors, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sca = new Float32Array(count);

    const colorInside = new THREE.Color('#8B5CF6'); // Neon Purple
    const colorMid = new THREE.Color('#2563EB');    // Electric Blue
    const colorOutside = new THREE.Color('#22D3EE'); // Cyan

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Spiral arms distribution
      const radius = Math.pow(Math.random(), 1.5) * 22 + 1.5;
      const spinAngle = radius * 0.7;
      const branches = 3;
      const branchAngle = ((i % branches) * 2 * Math.PI) / branches;

      // Randomness spread
      const randomX = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8) * radius * 0.3;
      const randomY = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8) * radius * 0.2;
      const randomZ = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8) * radius * 0.3;

      pos[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      pos[i3 + 1] = randomY;
      pos[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Mixed color gradient based on radius
      const mixedColor = colorInside.clone();
      if (radius < 8) {
        mixedColor.lerp(colorMid, radius / 8);
      } else {
        mixedColor.lerp(colorMid, 0.5).lerp(colorOutside, (radius - 8) / 14);
      }

      col[i3] = mixedColor.r;
      col[i3 + 1] = mixedColor.g;
      col[i3 + 2] = mixedColor.b;

      sca[i] = Math.random() * 2.5 + 0.5;
    }

    return [pos, col, sca];
  }, [count]);

  // Starfield background
  const [starPositions, starColors] = useMemo(() => {
    const starCount = 1200;
    const sPos = new Float32Array(starCount * 3);
    const sCol = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      sPos[i3] = (Math.random() - 0.5) * 60;
      sPos[i3 + 1] = (Math.random() - 0.5) * 60;
      sPos[i3 + 2] = (Math.random() - 0.5) * 60;

      const brightness = 0.5 + Math.random() * 0.5;
      sCol[i3] = brightness * 0.8;
      sCol[i3 + 1] = brightness * 0.9;
      sCol[i3 + 2] = brightness;
    }
    return [sPos, sCol];
  }, []);

  useFrame((state, delta) => {
    const pointer = state.pointer;
    
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * speed * 0.8;
      // Gentle mouse parallax
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        pointer.y * 0.15,
        0.05
      );
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(
        pointsRef.current.rotation.z,
        -pointer.x * 0.15,
        0.05
      );
    }

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * speed * 0.4;
    }
  });

  return (
    <group>
      {/* Distant stars */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={starPositions.length / 3}
            array={starPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={starColors.length / 3}
            array={starColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          sizeAttenuation
          depthWrite={false}
          vertexColors
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Main rotating galaxy spiral */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          sizeAttenuation
          depthWrite={false}
          vertexColors
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Galaxy Core Glow Sphere */}
      <mesh ref={innerRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial
          color="#8B5CF6"
          transparent
          opacity={0.15}
          wireframe
        />
      </mesh>
    </group>
  );
}
