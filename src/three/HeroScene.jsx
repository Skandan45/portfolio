import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { DigitalDimension } from './DigitalDimension';
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
      <div className="absolute inset-0 bg-[#030508] overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-600/10 via-cyan-500/5 to-purple-600/10 blur-3xl"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 46 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* THE DIGITAL DIMENSION: Floating Glass Sculptures, Liquid Light Ribbons & Architecture */}
          <DigitalDimension isMobile={isMobile} />

          {/* Stylized 3D Avatar (when user toggles) */}
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
