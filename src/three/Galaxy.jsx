import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Circular Particle Texture for silky glowing stars
function getCircleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.2, 'rgba(34, 211, 238, 0.9)');
  gradient.addColorStop(0.5, 'rgba(37, 99, 235, 0.4)');
  gradient.addColorStop(1, 'rgba(11, 16, 32, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function Galaxy({ isMobile = false }) {
  const galaxyRef = useRef();
  const starsRef = useRef();
  const nebulaRef = useRef();
  const geoGroupRef = useRef();

  const particleTexture = useMemo(() => getCircleTexture(), []);

  // Spiral Galaxy Generation
  const [galaxyGeometry, galaxyColors] = useMemo(() => {
    const count = isMobile ? 2800 : 6000;
    const branches = 4;
    const radius = 9.5;
    const spin = 1.35;
    const randomness = 0.45;
    const randomnessPower = 3.5;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorInside = new THREE.Color('#FFFFFF');
    const colorMid = new THREE.Color('#22D3EE'); // Cyan
    const colorElectric = new THREE.Color('#2563EB'); // Electric Blue
    const colorOutside = new THREE.Color('#8B5CF6'); // Neon Purple

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = Math.random() * radius;
      const spinAngle = r * spin;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;

      const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;
      const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * (r * 0.6);
      const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;

      positions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

      // Color interpolation from core to outer spiral
      let mixedColor;
      const normalizedR = r / radius;

      if (normalizedR < 0.25) {
        mixedColor = colorInside.clone().lerp(colorMid, normalizedR / 0.25);
      } else if (normalizedR < 0.65) {
        mixedColor = colorMid.clone().lerp(colorElectric, (normalizedR - 0.25) / 0.4);
      } else {
        mixedColor = colorElectric.clone().lerp(colorOutside, (normalizedR - 0.65) / 0.35);
      }

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    return [geom, colors];
  }, [isMobile]);

  // Deep Starfield Background Generation
  const starsGeometry = useMemo(() => {
    const starCount = isMobile ? 900 : 2200;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 35;
      positions[i3 + 1] = (Math.random() - 0.5) * 30;
      positions[i3 + 2] = -5 - Math.random() * 25; // Placed deep into the screen
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geom;
  }, [isMobile]);

  // Nebula Volumetric Glow Dust Generation
  const nebulaGeometry = useMemo(() => {
    const nebulaCount = isMobile ? 350 : 800;
    const positions = new Float32Array(nebulaCount * 3);
    const colors = new Float32Array(nebulaCount * 3);

    const c1 = new THREE.Color('#2563EB');
    const c2 = new THREE.Color('#8B5CF6');
    const c3 = new THREE.Color('#22D3EE');

    for (let i = 0; i < nebulaCount; i++) {
      const i3 = i * 3;
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 6.5;

      positions[i3] = Math.cos(angle) * dist;
      positions[i3 + 1] = (Math.random() - 0.5) * 3;
      positions[i3 + 2] = Math.sin(angle) * dist - 1;

      const pick = Math.random();
      const col = pick < 0.4 ? c1 : pick < 0.75 ? c2 : c3;
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geom;
  }, [isMobile]);

  // Continuous animation and interactive mouse response
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Smooth galaxy rotation
    if (galaxyRef.current) {
      galaxyRef.current.rotation.y = time * 0.04;
      // Mouse-responsive subtle parallax tilt
      galaxyRef.current.rotation.x = THREE.MathUtils.lerp(
        galaxyRef.current.rotation.x,
        0.5 + pointer.y * 0.12,
        0.04
      );
      galaxyRef.current.rotation.z = THREE.MathUtils.lerp(
        galaxyRef.current.rotation.z,
        pointer.x * 0.1,
        0.04
      );
    }

    // Gentle starfield drift
    if (starsRef.current) {
      starsRef.current.rotation.y = -time * 0.01;
      starsRef.current.rotation.x = THREE.MathUtils.lerp(
        starsRef.current.rotation.x,
        pointer.y * 0.05,
        0.03
      );
    }

    // Pulsing nebula cloud
    if (nebulaRef.current) {
      nebulaRef.current.rotation.y = time * 0.025;
      nebulaRef.current.position.y = Math.sin(time * 0.4) * 0.2;
    }

    // Rotating geometric objects
    if (geoGroupRef.current) {
      geoGroupRef.current.rotation.y = time * 0.08;
      geoGroupRef.current.position.x = pointer.x * 0.3;
      geoGroupRef.current.position.y = pointer.y * 0.2;
    }
  });

  return (
    <group position={[0, -0.4, -2]}>
      {/* 1. Deep Background Twinkling Starfield */}
      <points ref={starsRef} geometry={starsGeometry}>
        <pointsMaterial
          size={0.065}
          sizeAttenuation
          color="#E2E8F0"
          transparent
          opacity={0.75}
          map={particleTexture}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* 2. Volumetric Nebula Glow Particles */}
      <points ref={nebulaRef} geometry={nebulaGeometry}>
        <pointsMaterial
          size={isMobile ? 0.35 : 0.48}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.35}
          map={particleTexture}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* 3. Main Spiral Galaxy Arms */}
      <points ref={galaxyRef} geometry={galaxyGeometry} rotation={[0.5, 0, 0]}>
        <pointsMaterial
          size={isMobile ? 0.045 : 0.06}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.88}
          map={particleTexture}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* 4. Peripheral Glowing Geometric Objects */}
      <group ref={geoGroupRef}>
        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8} position={[-4.5, 2.5, -3]}>
          <mesh>
            <octahedronGeometry args={[0.5, 0]} />
            <meshStandardMaterial
              color="#22D3EE"
              emissive="#22D3EE"
              emissiveIntensity={0.8}
              wireframe
              transparent
              opacity={0.35}
            />
          </mesh>
        </Float>

        <Float speed={1.1} rotationIntensity={0.5} floatIntensity={0.7} position={[4.6, 2.0, -3.5]}>
          <mesh>
            <icosahedronGeometry args={[0.6, 0]} />
            <meshStandardMaterial
              color="#8B5CF6"
              emissive="#8B5CF6"
              emissiveIntensity={0.85}
              wireframe
              transparent
              opacity={0.32}
            />
          </mesh>
        </Float>

        <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.9} position={[-4.2, -2.5, -2.5]}>
          <mesh>
            <torusGeometry args={[0.45, 0.06, 16, 32]} />
            <meshStandardMaterial
              color="#2563EB"
              emissive="#2563EB"
              emissiveIntensity={0.7}
              wireframe
              transparent
              opacity={0.38}
            />
          </mesh>
        </Float>

        <Float speed={0.9} rotationIntensity={0.7} floatIntensity={0.6} position={[4.2, -2.2, -3]}>
          <mesh>
            <dodecahedronGeometry args={[0.45, 0]} />
            <meshStandardMaterial
              color="#38BDF8"
              emissive="#38BDF8"
              emissiveIntensity={0.75}
              wireframe
              transparent
              opacity={0.3}
            />
          </mesh>
        </Float>
      </group>
    </group>
  );
}
