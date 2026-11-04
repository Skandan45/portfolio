import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GalaxyBackground } from './GalaxyBackground';
import { Avatar3D } from './Avatar3D';
import { FloatingObjects } from './FloatingObjects';

function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFFFFF" />
      <pointLight position={[-4, 3, 2]} intensity={3} color="#2563EB" distance={15} />
      <pointLight position={[4, 2, -2]} intensity={4} color="#8B5CF6" distance={15} />
      <pointLight position={[0, -3, 3]} intensity={1.8} color="#22D3EE" distance={10} />
    </>
  );
}

export function HeroScene({ showAvatar = true, avatarPosition = [1.8, -0.2, 0] }) {
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);

    // Test WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }

    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 bg-[#050509] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-electric-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-purple/15 blur-3xl"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <SceneLighting />
        
        <Suspense fallback={null}>
          {/* Galaxy Particle System */}
          <GalaxyBackground count={isMobile ? 1800 : 3800} speed={0.06} />

          {/* Floating Geometric Objects */}
          <FloatingObjects />

          {/* Stylized 3D Character Avatar */}
          {showAvatar && (
            <Avatar3D
              scale={isMobile ? 0.85 : 1.15}
              position={isMobile ? [0, -0.5, 0] : avatarPosition}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
