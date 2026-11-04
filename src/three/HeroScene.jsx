import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { DimensionalPortal } from './DimensionalPortal';
import { Avatar3D } from './Avatar3D';

function CinematicStudioLighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 8, 6]} intensity={1.8} color="#FFFFFF" />
      <pointLight position={[-5, 4, 3]} intensity={3.5} color="#2563EB" distance={18} />
      <pointLight position={[5, 3, -2]} intensity={4.5} color="#8B5CF6" distance={18} />
      <pointLight position={[0, -4, 4]} intensity={2.2} color="#22D3EE" distance={12} />
    </>
  );
}

export function HeroScene({ showAvatar = true, avatarPosition = [2.2, -0.3, 0] }) {
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
        <div className="absolute inset-0 cyber-grid opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-electric-500/20 to-neon-purple/20 blur-3xl"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 48 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <CinematicStudioLighting />
        
        <Suspense fallback={null}>
          {/* CINEMATIC INTERDIMENSIONAL ENERGY PORTAL */}
          <DimensionalPortal isMobile={isMobile} />

          {/* Stylized 3D Character Avatar (when active) */}
          {showAvatar && (
            <Avatar3D
              scale={isMobile ? 0.8 : 1.15}
              position={isMobile ? [0, -0.5, 0] : avatarPosition}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
