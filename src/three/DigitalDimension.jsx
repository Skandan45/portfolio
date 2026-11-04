import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Custom GLSL Shader for the Flowing Liquid Light Ribbons
const ribbonVertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const ribbonFragmentShader = `
  uniform float uTime;
  uniform vec3 uColorBlue;
  uniform vec3 uColorViolet;
  uniform vec3 uColorCyan;
  uniform float uSpeed;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    // Flowing coordinate along the length of the ribbon
    float flow = vUv.x * 6.0 - uTime * uSpeed;
    
    // Wave pulses
    float pulse1 = sin(flow * 3.14159) * 0.5 + 0.5;
    float pulse2 = cos(flow * 1.5 + vUv.y * 3.14159) * 0.5 + 0.5;
    float energyWave = mix(pulse1, pulse2, 0.4);

    // Fresnel rim glow
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 2.5);

    // Dynamic gradient: Deep Violet -> Electric Blue -> Pure Cyan
    vec3 col = mix(uColorViolet, uColorBlue, sin(vUv.x * 3.14159 + uTime * 0.5) * 0.5 + 0.5);
    col = mix(col, uColorCyan, pow(energyWave, 2.0) * 0.85);

    // Specular light streak
    col += vec3(0.8, 0.95, 1.0) * pow(energyWave, 5.0) * 1.8;

    // Edge intensity
    col += uColorCyan * fresnel * 0.9;

    // Alpha falloff towards the ends and edges for a smooth liquid feel
    float edgeAlpha = sin(vUv.y * 3.14159);
    float alpha = (0.55 + 0.45 * energyWave) * edgeAlpha * (0.8 + 0.2 * fresnel);

    gl_FragColor = vec4(col, alpha);
  }
`;

// Flowing 3D Spline Light Ribbon
function LiquidRibbon({ curvePoints, colorBlue, colorViolet, colorCyan, speed = 1.0, tubeRadius = 0.075 }) {
  const meshRef = useRef();
  const materialRef = useRef();

  const [geometry, uniforms] = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const geom = new THREE.TubeGeometry(curve, 160, tubeRadius, 24, false);

    const unifs = {
      uTime: { value: 0 },
      uSpeed: { value: speed },
      uColorBlue: { value: new THREE.Color(colorBlue) },
      uColorViolet: { value: new THREE.Color(colorViolet) },
      uColorCyan: { value: new THREE.Color(colorCyan) },
    };

    return [geom, unifs];
  }, [curvePoints, speed, tubeRadius, colorBlue, colorViolet, colorCyan]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={ribbonVertexShader}
        fragmentShader={ribbonFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Giant Iridescent Glass Sculpture with Physical Glass Optics
function GlassSculpture({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, isMobile = false }) {
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.15;
      meshRef.current.rotation.y += delta * 0.12;
      meshRef.current.rotation.z = Math.cos(time * 0.25) * 0.1;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.18;
      innerRef.current.rotation.x = Math.sin(time * 0.3) * 0.12;
    }
  });

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        {/* Main Organic Glass Sculpture (Twisted Helix Knot) */}
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[1.8, 0.42, isMobile ? 64 : 128, 32, 2, 3]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            transmission={0.92}
            opacity={1}
            transparent
            roughness={0.05}
            ior={1.52}
            thickness={2.2}
            iridescence={0.88}
            iridescenceIOR={1.38}
            iridescenceThicknessRange={[150, 480]}
            clearcoat={1.0}
            clearcoatRoughness={0.06}
            attenuationColor="#38BDF8"
            attenuationDistance={3.0}
          />
        </mesh>

        {/* Inner Luminescent Core Ribbon Ring */}
        <mesh ref={innerRef}>
          <torusGeometry args={[1.4, 0.025, 16, 64]} />
          <meshBasicMaterial
            color="#22D3EE"
            transparent
            opacity={0.65}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Secondary Glass Mobius Arc
function SecondaryGlassArc({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.15;
      meshRef.current.rotation.y = time * 0.18;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.5} position={position}>
      <mesh ref={meshRef} scale={scale}>
        <torusGeometry args={[1.65, 0.16, 32, 96]} />
        <meshPhysicalMaterial
          color="#F1F5F9"
          transmission={0.88}
          roughness={0.08}
          ior={1.5}
          thickness={1.6}
          iridescence={0.75}
          iridescenceIOR={1.3}
          iridescenceThicknessRange={[200, 500]}
          clearcoat={0.9}
          attenuationColor="#8B5CF6"
          attenuationDistance={2.5}
        />
      </mesh>
    </Float>
  );
}

// Futuristic Monolithic Architectural Fins (Sweeping Curved Pavilion)
function FuturisticArchitecture({ isMobile = false }) {
  const count = isMobile ? 6 : 11;
  const radius = 9.5;
  const centerAngle = -Math.PI * 0.35; // Positioned behind right & deep center
  const arcSpan = Math.PI * 0.65;

  const fins = useMemo(() => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const angle = centerAngle + (i / (count - 1)) * arcSpan;
      const x = Math.sin(angle) * radius + 2.0;
      const z = -Math.cos(angle) * radius + 2.0;
      const height = 5.5 + Math.sin((i / count) * Math.PI) * 2.2;
      const rotY = -angle + Math.PI / 2;
      items.push({ x, z, height, rotY, idx: i });
    }
    return items;
  }, [count, radius, centerAngle, arcSpan]);

  return (
    <group position={[0, -0.6, -2.5]}>
      {fins.map((fin) => (
        <group key={fin.idx} position={[fin.x, fin.height * 0.45, fin.z]} rotation={[0, fin.rotY, 0]}>
          {/* Main Monolith Fin Body */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.22, fin.height, 0.7]} />
            <meshStandardMaterial
              color="#0B1124"
              metalness={0.92}
              roughness={0.18}
            />
          </mesh>

          {/* Glowing Hairline Edge Emitter Strip */}
          <mesh position={[0.115, 0, 0.35]}>
            <boxGeometry args={[0.015, fin.height, 0.015]} />
            <meshBasicMaterial
              color={fin.idx % 2 === 0 ? "#22D3EE" : "#8B5CF6"}
              transparent
              opacity={0.8}
            />
          </mesh>
        </group>
      ))}

      {/* Sweeping Architectural Base Ring */}
      <mesh position={[2.0, -1.8, -2.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[8.8, 9.6, 64]} />
        <meshStandardMaterial
          color="#060A17"
          metalness={0.8}
          roughness={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

// Atmospheric Volumetric Light Shafts
function VolumetricLightBeams() {
  const beamRef = useRef();

  useFrame((state) => {
    if (beamRef.current) {
      beamRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={beamRef} position={[3.5, 4.0, -3.0]} rotation={[-0.3, 0.2, -0.45]}>
      <mesh>
        <cylinderGeometry args={[0.4, 3.5, 9.0, 32, 1, true]} />
        <meshBasicMaterial
          color="#38BDF8"
          transparent
          opacity={0.065}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[-1.2, 0, 0.8]} rotation={[0, 0, 0.15]}>
        <cylinderGeometry args={[0.3, 2.8, 8.5, 32, 1, true]} />
        <meshBasicMaterial
          color="#8B5CF6"
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

// Floating Geometric Prisms
function FloatingGlassPrism({ position, scale = 1, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4 * speed;
      meshRef.current.rotation.y += delta * 0.5 * speed;
    }
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.5} floatIntensity={0.7} position={position}>
      <mesh ref={meshRef} scale={scale}>
        <octahedronGeometry args={[0.38, 0]} />
        <meshPhysicalMaterial
          color="#E0F2FE"
          transmission={0.85}
          roughness={0.08}
          ior={1.54}
          thickness={1.4}
          iridescence={0.8}
          iridescenceIOR={1.4}
          clearcoat={1.0}
        />
      </mesh>
    </Float>
  );
}

export function DigitalDimension({ isMobile = false }) {
  const masterGroup = useRef();

  // Primary Spline Ribbon Points: Weaves through the right side glass sculptures
  const ribbon1Points = useMemo(() => [
    new THREE.Vector3(-4.5, -2.8, -4.0),
    new THREE.Vector3(-1.8, -1.2, -2.8),
    new THREE.Vector3( 0.8, -1.8, -1.6),
    new THREE.Vector3( 2.8, -0.6, -1.0),
    new THREE.Vector3( 3.8,  1.2, -1.2),
    new THREE.Vector3( 2.2,  2.6, -2.2),
    new THREE.Vector3( 0.2,  3.2, -3.8),
    new THREE.Vector3(-2.2,  3.5, -5.0),
  ], []);

  // Secondary Counter-Ribbon: Weaves behind and above the candidate framing
  const ribbon2Points = useMemo(() => [
    new THREE.Vector3( 5.0, -2.2, -3.2),
    new THREE.Vector3( 3.2, -1.5, -1.8),
    new THREE.Vector3( 1.8,  0.2, -1.2),
    new THREE.Vector3( 2.4,  1.9, -1.5),
    new THREE.Vector3( 4.2,  2.4, -2.8),
  ], []);

  useFrame((state) => {
    const pointer = state.pointer;
    if (masterGroup.current) {
      // Subtle cinematic camera & environment parallax reacting to cursor
      masterGroup.current.rotation.y = THREE.MathUtils.lerp(
        masterGroup.current.rotation.y,
        pointer.x * 0.12,
        0.04
      );
      masterGroup.current.rotation.x = THREE.MathUtils.lerp(
        masterGroup.current.rotation.x,
        -pointer.y * 0.08,
        0.04
      );
    }
  });

  return (
    <group ref={masterGroup}>
      
      {/* 1. GIANT FLOATING GLASS SCULPTURES (Behind & framing the right side) */}
      <GlassSculpture
        position={isMobile ? [0, 0.4, -2.0] : [2.6, 0.1, -1.4]}
        rotation={[0.3, -0.4, 0.2]}
        scale={isMobile ? 0.72 : 1.05}
        isMobile={isMobile}
      />

      {/* Secondary Organic Glass Arc */}
      <SecondaryGlassArc
        position={isMobile ? [1.2, 2.2, -3.0] : [3.8, 1.8, -2.4]}
        scale={isMobile ? 0.6 : 0.85}
      />

      {/* 2. LIQUID LIGHT RIBBONS (Continuous smooth energetic flow) */}
      <LiquidRibbon
        curvePoints={ribbon1Points}
        colorBlue="#2563EB"
        colorViolet="#8B5CF6"
        colorCyan="#22D3EE"
        speed={1.2}
        tubeRadius={isMobile ? 0.06 : 0.085}
      />

      <LiquidRibbon
        curvePoints={ribbon2Points}
        colorBlue="#3B82F6"
        colorViolet="#7C3AED"
        colorCyan="#06B6D4"
        speed={0.9}
        tubeRadius={isMobile ? 0.045 : 0.065}
      />

      {/* 3. FUTURISTIC MINIMALIST ARCHITECTURE (Sweeping Curved Monoliths) */}
      <FuturisticArchitecture isMobile={isMobile} />

      {/* 4. VOLUMETRIC LIGHT BEAMS (Subtle atmospheric rays) */}
      <VolumetricLightBeams />

      {/* 5. FLOATING GLASS PRISMS (Adding depth & subtle reflections) */}
      <FloatingGlassPrism position={[-3.2, 1.6, -2.8]} scale={0.7} speed={0.9} />
      <FloatingGlassPrism position={[ 4.2, -1.4, -1.5]} scale={0.8} speed={1.1} />
      <FloatingGlassPrism position={[-2.4, -2.0, -3.2]} scale={0.65} speed={0.8} />

      {/* 6. CINEMATIC LIGHTING DESIGN */}
      <directionalLight position={[6, 8, 4]} intensity={2.2} color="#FFFFFF" />
      <pointLight position={[2.6, 2.0, 1.2]} color="#22D3EE" intensity={3.8} distance={14} decay={2} />
      <pointLight position={[3.8, -1.5, 0.5]} color="#8B5CF6" intensity={4.2} distance={16} decay={2} />
      <pointLight position={[-4, 2.0, -1.0]} color="#2563EB" intensity={1.8} distance={12} decay={2} />

    </group>
  );
}
