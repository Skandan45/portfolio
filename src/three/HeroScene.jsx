import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Galaxy } from './Galaxy';
import { Avatar3D } from './Avatar3D';

export function HeroScene({ showAvatar = false, avatarPosition = [2.2, -0.3, 0] }) {
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-blue-600/15 via-purple-600/15 to-cyan-400/15 blur-3xl"></div>
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
        <Suspense fallback={null}>
          {/* Ambient Cosmic Lights */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFFFFF" />

          {/* FULL-SCREEN IMMERSIVE 3D GALAXY ENVIRONMENT */}
          <Galaxy isMobile={isMobile} />

          {/* STYLIZED 3D AVATAR CHARACTER */}
          {showAvatar && (
            <Avatar3D
              scale={isMobile ? 0.9 : 1.2}
              position={isMobile ? [0, -0.4, 0] : avatarPosition}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
