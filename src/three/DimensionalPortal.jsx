import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Custom GLSL Shader for the Portal Event Horizon / Accretion Vortex
const portalVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const portalFragmentShader = `
  uniform float uTime;
  uniform vec3 uColorInner;
  uniform vec3 uColorMid;
  uniform vec3 uColorOuter;
  uniform vec3 uColorCore;
  varying vec2 vUv;
  varying vec3 vPosition;

  // Simple pseudo-random hash for plasma noise
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  void main() {
    vec2 p = vUv - vec2(0.5);
    float dist = length(p);
    float angle = atan(p.y, p.x);

    // Accretion swirl calculation
    float swirl = angle * 3.0 + uTime * 2.2 - dist * 14.0;
    float plasma1 = sin(swirl) * 0.5 + 0.5;
    float plasma2 = cos(angle * 5.0 - uTime * 3.0 + dist * 20.0) * 0.5 + 0.5;
    float combinedPlasma = mix(plasma1, plasma2, 0.5);

    // Singularity center cutoff (the dark dimensional breach)
    float singularity = smoothstep(0.09, 0.16, dist);
    
    // Intense energy event horizon ring (dist 0.16 to 0.44)
    float ringIntensity = smoothstep(0.12, 0.22, dist) * (1.0 - smoothstep(0.38, 0.49, dist));
    
    // Energy pulses
    float pulse = sin(uTime * 4.0 - dist * 8.0) * 0.15 + 0.85;

    // Outer soft dissipation
    float edgeAlpha = smoothstep(0.5, 0.22, dist);

    // High energy color gradients (Deep Violet -> Electric Blue -> Pure Cyan)
    vec3 col = mix(uColorInner, uColorMid, combinedPlasma);
    col = mix(col, uColorOuter, smoothstep(0.2, 0.45, dist));
    
    // Intense hot cyan filaments on crests
    float hotCore = pow(combinedPlasma * ringIntensity, 2.2) * 2.2;
    col += uColorCore * hotCore;

    // Final alpha blending
    float alpha = singularity * ringIntensity * pulse * edgeAlpha * 0.95;

    // Subtle dark center glow
    if (dist < 0.12) {
      col = mix(vec3(0.01, 0.02, 0.06), col, dist / 0.12);
      alpha = smoothstep(0.02, 0.12, dist) * 0.6;
    }

    gl_FragColor = vec4(col, alpha);
  }
`;

// Streamlined Energy Influx Particles
function EnergyStreamParticles({ count = 900 }) {
  const pointsRef = useRef();

  const [positions, colors, speeds, radii, angles] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    const rad = new Float32Array(count);
    const ang = new Float32Array(count);

    const c1 = new THREE.Color('#22D3EE'); // Cyan
    const c2 = new THREE.Color('#2563EB'); // Electric Blue
    const c3 = new THREE.Color('#8B5CF6'); // Neon Violet

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = 1.6 + Math.random() * 2.6; // Influx ring radius
      const a = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 0.8;

      pos[i3] = Math.cos(a) * r;
      pos[i3 + 1] = Math.sin(a) * r;
      pos[i3 + 2] = z;

      rad[i] = r;
      ang[i] = a;
      spd[i] = (0.8 + Math.random() * 1.4) * (Math.random() < 0.2 ? -1 : 1);

      // Color selection
      const mixed = Math.random() < 0.5 ? c1.clone().lerp(c2, Math.random()) : c2.clone().lerp(c3, Math.random());
      col[i3] = mixed.r;
      col[i3 + 1] = mixed.g;
      col[i3 + 2] = mixed.b;
    }

    return [pos, col, spd, rad, ang];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    const array = posAttr.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      angles[i] += speeds[i] * delta * 0.6;
      
      // Inward spiraling drift
      radii[i] -= delta * 0.15;
      if (radii[i] < 1.4) {
        radii[i] = 4.0 + Math.random() * 0.4;
      }

      array[i3] = Math.cos(angles[i]) * radii[i];
      array[i3 + 1] = Math.sin(angles[i]) * radii[i];
      array[i3 + 2] += Math.sin(state.clock.elapsedTime + i) * 0.002;
    }

    posAttr.needsUpdate = true;
  });

  return (
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
        size={0.065}
        sizeAttenuation
        depthWrite={false}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Floating reflective cyber geometric shards orbiting portal
function FloatingShard({ position, geometry, speed = 1, scale = 1 }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5 * speed;
      meshRef.current.rotation.y += delta * 0.7 * speed;
      meshRef.current.rotation.z += delta * 0.3 * speed;
    }
  });

  return (
    <Float speed={speed * 1.4} rotationIntensity={0.6} floatIntensity={0.8} position={position}>
      <mesh ref={meshRef} scale={scale}>
        {geometry}
        <meshPhysicalMaterial
          color="#E2E8F0"
          metalness={0.96}
          roughness={0.12}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
        />
      </mesh>
    </Float>
  );
}

export function DimensionalPortal({ isMobile = false }) {
  const portalRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const ring4Ref = useRef();
  const beamRef = useRef();

  // Shader uniforms
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorInner: { value: new THREE.Color('#8B5CF6') }, // Neon Violet
      uColorMid: { value: new THREE.Color('#2563EB') },   // Electric Blue
      uColorOuter: { value: new THREE.Color('#0EA5E9') }, // Deep Sky
      uColorCore: { value: new THREE.Color('#22D3EE') },  // Glowing Cyan Core
    }),
    []
  );

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Update vortex shader time
    if (uniforms.uTime) {
      uniforms.uTime.value = time;
    }

    // Portal master orientation reacts subtly to mouse
    if (portalRef.current) {
      portalRef.current.rotation.y = THREE.MathUtils.lerp(
        portalRef.current.rotation.y,
        pointer.x * 0.22,
        0.05
      );
      portalRef.current.rotation.x = THREE.MathUtils.lerp(
        portalRef.current.rotation.x,
        -pointer.y * 0.18,
        0.05
      );
    }

    // Independent multi-axis rotation of liquid-chrome rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.35;
      ring1Ref.current.rotation.x = Math.sin(time * 0.4) * 0.12;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.28;
      ring2Ref.current.rotation.y = Math.cos(time * 0.35) * 0.15;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.z += delta * 0.18;
      ring3Ref.current.rotation.x = Math.cos(time * 0.25) * 0.08;
    }

    if (ring4Ref.current) {
      ring4Ref.current.rotation.y -= delta * 0.22;
      ring4Ref.current.rotation.z += delta * 0.12;
    }

    // Gentle pulsing light beam
    if (beamRef.current) {
      beamRef.current.material.opacity = 0.18 + Math.sin(time * 2.5) * 0.06;
    }
  });

  return (
    <group ref={portalRef} position={[0, 0, -2.2]} scale={isMobile ? 0.72 : 1.0}>
      
      {/* 1. CENTRAL DIMENSIONAL EVENT HORIZON (GLSL Accretion Vortex) */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[7.2, 7.2, 64, 64]} />
        <shaderMaterial
          vertexShader={portalVertexShader}
          fragmentShader={portalFragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 2. LIQUID-CHROME ROTATING RINGS */}

      {/* Inner Heavy Chrome Ring with Cyan Emissive Trim */}
      <group ref={ring1Ref}>
        <mesh>
          <torusGeometry args={[2.2, 0.065, 32, 128]} />
          <meshPhysicalMaterial
            color="#E2E8F0"
            metalness={0.98}
            roughness={0.06}
            clearcoat={1.0}
            clearcoatRoughness={0.05}
          />
        </mesh>
        {/* Glowing Cyan Inner Lip */}
        <mesh position={[0, 0, 0.02]}>
          <torusGeometry args={[2.14, 0.012, 16, 128]} />
          <meshBasicMaterial color="#22D3EE" />
        </mesh>
      </group>

      {/* Middle Gyroscopic Interlocking Chrome Ring with Segmented Teeth */}
      <group ref={ring2Ref} rotation={[0.2, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.75, 0.05, 32, 128]} />
          <meshPhysicalMaterial
            color="#CBD5E1"
            metalness={0.96}
            roughness={0.08}
            clearcoat={1.0}
          />
        </mesh>
        {/* Neon Violet Resonator Ring */}
        <mesh position={[0, 0, -0.02]}>
          <torusGeometry args={[2.82, 0.012, 16, 128]} />
          <meshBasicMaterial color="#8B5CF6" />
        </mesh>
      </group>

      {/* Outer Giant Liquid-Chrome Ring with Stargate Circuit Emitters */}
      <group ref={ring3Ref}>
        <mesh>
          <torusGeometry args={[3.35, 0.04, 32, 128]} />
          <meshPhysicalMaterial
            color="#F1F5F9"
            metalness={0.99}
            roughness={0.05}
            clearcoat={1.0}
          />
        </mesh>
        {/* Electric Blue Outer Rim */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[3.41, 0.009, 16, 128]} />
          <meshBasicMaterial color="#2563EB" />
        </mesh>
      </group>

      {/* Polar Stabilizer Ring (Angled Gimbal) */}
      <group ref={ring4Ref} rotation={[Math.PI / 4, 0, 0]}>
        <mesh>
          <torusGeometry args={[3.1, 0.022, 16, 96]} />
          <meshPhysicalMaterial
            color="#94A3B8"
            metalness={0.95}
            roughness={0.15}
          />
        </mesh>
      </group>

      {/* 3. GLOWING CYAN FORWARD-PROJECTING ENERGY BEAM */}
      <mesh ref={beamRef} position={[0, 0, 1.8]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 1.8, 3.8, 32, 1, true]} />
        <meshBasicMaterial
          color="#22D3EE"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* 4. STREAMLINED ENERGY INFLUX PARTICLES */}
      <EnergyStreamParticles count={isMobile ? 450 : 950} />

      {/* 5. FLOATING METALLIC SHARDS ORBITING THE PORTAL */}
      <FloatingShard
        position={[-3.8, 1.9, 0.5]}
        geometry={<octahedronGeometry args={[0.35, 0]} />}
        speed={1.1}
      />
      <FloatingShard
        position={[4.0, 1.6, -0.4]}
        geometry={<dodecahedronGeometry args={[0.38, 0]} />}
        speed={0.8}
      />
      <FloatingShard
        position={[-3.6, -2.1, 0.2]}
        geometry={<tetrahedronGeometry args={[0.4, 0]} />}
        speed={1.2}
      />
      <FloatingShard
        position={[3.7, -1.8, 0.6]}
        geometry={<icosahedronGeometry args={[0.36, 0]} />}
        speed={0.9}
      />

      {/* 6. CINEMATIC PORTAL LIGHTING SOURCES */}
      {/* Intense Core Flares */}
      <pointLight position={[0, 0, 0.5]} color="#22D3EE" intensity={4.5} distance={12} decay={2} />
      <pointLight position={[0, 0, -0.5]} color="#8B5CF6" intensity={5.0} distance={14} decay={2} />
      <pointLight position={[-3, 2, 1.5]} color="#2563EB" intensity={3.0} distance={10} decay={2} />
      <pointLight position={[3, -2, 1.5]} color="#A855F7" intensity={3.5} distance={10} decay={2} />

    </group>
  );
}
