import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, UserCheck, Orbit, ShieldCheck, Cpu } from 'lucide-react';
import { personalData, technicalBadges } from '../data/portfolioData';
import { HeroScene } from '../three/HeroScene';
import { Avatar3D } from '../three/Avatar3D';

export function Hero() {
  const [viewMode, setViewMode] = useState('photo'); // 'photo' | 'avatar'

  const scrollToExplore = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToConnect = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-16 bg-[#050509]">
      
      {/* 3D GALAXY BACKGROUND: Thousands of animated particles, spiral arms, floating stars, nebula dust & floating geometric objects */}
      <HeroScene showAvatar={false} />

      {/* Atmospheric Spatial Vignettes & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050509] via-[#050509]/80 to-transparent pointer-events-none w-full lg:w-3/5 z-[1]" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050509] to-transparent pointer-events-none z-[1]" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#050509]/80 to-transparent pointer-events-none z-[1]" />

      {/* Atmospheric Cosmic Light Pools */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-12 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none z-0" />

      {/* Hero Foreground Content: Balanced 2-Column Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
          
          {/* LEFT SIDE: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Intro Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1020]/90 border border-cyan-400/30 backdrop-blur-md shadow-[0_0_15px_-4px_rgba(34,211,238,0.3)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase">
                HELLO, I'M
              </span>
            </div>

            {/* Candidate Name & Titles */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-display text-white">
                <span className="block">SKANDAN</span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  D GOWDA
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-base sm:text-xl font-semibold text-slate-200">
                  Third-Year Engineering Student
                </span>
                <span className="text-cyan-400 font-bold hidden sm:inline">•</span>
                <span className="text-base sm:text-xl font-semibold text-cyan-300">
                  Aspiring Software Developer.
                </span>
              </div>
            </div>

            {/* Hero Bio Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-sans leading-relaxed">
              {personalData.heroBio}
            </p>

            {/* Technology Badges: JAVA, PYTHON, REACT, SQL */}
            <div className="space-y-2.5 pt-1">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block">
                CORE TECHNICAL ARSENAL
              </span>
              <div className="flex flex-wrap gap-2.5">
                {technicalBadges.map((badge, idx) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.08 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0B1020]/90 border border-white/10 hover:border-cyan-400/50 backdrop-blur-md transition-all shadow-sm group cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:shadow-[0_0_8px_#22D3EE]" />
                    <span className="font-mono text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {badge}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Two Premium Buttons: EXPLORE MY WORK & LET'S CONNECT */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToExplore}
                className="px-7 py-3.5 rounded-full font-mono text-xs font-bold tracking-wider bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 transition-all shadow-[0_0_25px_-4px_rgba(34,211,238,0.45)] hover:shadow-[0_0_35px_-4px_rgba(34,211,238,0.7)] hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={scrollToConnect}
                className="px-7 py-3.5 rounded-full font-mono text-xs font-bold tracking-wider bg-[#0B1020]/90 hover:bg-[#131B2E] text-slate-200 hover:text-white transition-all border border-white/15 hover:border-cyan-400/50 backdrop-blur-md hover:scale-[1.03] active:scale-[0.98] shadow-sm"
              >
                LET'S CONNECT
              </a>
            </div>

            {/* Social Icons for GitHub, LinkedIn, Email */}
            <div className="flex items-center gap-5 pt-3 text-slate-400">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors text-xs font-mono flex items-center gap-1.5"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <span className="text-slate-700">•</span>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors text-xs font-mono flex items-center gap-1.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <span className="text-slate-700">•</span>

              <a
                href={`mailto:${personalData.email}`}
                className="hover:text-cyan-400 transition-colors text-xs font-mono flex items-center gap-1.5"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Real Photograph & Stylized 3D Avatar Interactive Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* View Mode Switcher */}
            <div className="mb-4 flex items-center p-1 rounded-full bg-[#0B1020]/90 border border-white/15 backdrop-blur-2xl shadow-xl">
              <button
                onClick={() => setViewMode('photo')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                  viewMode === 'photo'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_-3px_rgba(34,211,238,0.5)]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Authentic Photo</span>
              </button>
              <button
                onClick={() => setViewMode('avatar')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                  viewMode === 'avatar'
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold shadow-[0_0_20px_-3px_rgba(139,92,246,0.5)]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Orbit className="w-3.5 h-3.5" />
                <span>3D Cyber Avatar</span>
              </button>
            </div>

            {/* Showcase Glass Card */}
            <div className="w-full max-w-sm relative group">
              {/* Subtle Electric-Blue and Purple Glowing Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/30 via-cyan-400/25 to-purple-600/35 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              {/* Glass Frame Container */}
              <div className="relative rounded-2xl bg-[#0B1020]/90 border border-white/15 p-5 backdrop-blur-2xl shadow-2xl space-y-4 transition-all duration-500 group-hover:border-cyan-400/40 group-hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)]">
                
                {/* HUD Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    <span className="text-[11px] font-mono tracking-wider text-cyan-300 font-semibold">
                      {viewMode === 'photo' ? 'AUTHENTIC PROFILE • VERIFIED' : '3D INTERACTIVE AVATAR • REALTIME'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    ATRIA IT • B.E.
                  </span>
                </div>

                {/* Visual Display Container (Aspect 4/5) */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/15 bg-slate-950 shadow-inner group/img">
                  {viewMode === 'avatar' ? (
                    /* LIVE 3D INTERACTIVE AVATAR VIEWPORT */
                    <div className="w-full h-full relative bg-gradient-to-b from-[#0B1020] to-[#050509]">
                      <Canvas
                        camera={{ position: [0, 0, 4.2], fov: 45 }}
                        gl={{ antialias: true, alpha: true }}
                      >
                        <ambientLight intensity={0.7} />
                        <directionalLight position={[3, 3, 3]} intensity={1.5} />
                        <Suspense fallback={null}>
                          <Avatar3D scale={1.05} position={[0, -0.35, 0]} />
                        </Suspense>
                      </Canvas>

                      <div className="absolute bottom-2 inset-x-2 p-2 rounded-lg bg-[#0B1020]/80 backdrop-blur-md border border-white/10 text-center">
                        <span className="text-[10px] font-mono text-cyan-300 flex items-center justify-center gap-1.5">
                          <Cpu className="w-3 h-3 text-cyan-400" />
                          Move cursor to interact with 3D character
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* 
                       AUTHENTIC REAL PROFILE PHOTOGRAPH
                       - Natural vibrant color
                       - Preserves authentic face and appearance
                       - Scenic background preserved
                       - High definition rendering
                    */
                    <img
                      src="/images/profile.png"
                      alt="Skandan D Gowda — Authentic Profile Photograph"
                      className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover/img:scale-105"
                    />
                  )}
                </div>

                {/* Authentic Verification Stamp */}
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-semibold text-slate-200">Skandan D Gowda</span>
                  </div>
                  <span className="text-[10px] text-cyan-300 font-medium">3rd Year B.E.</span>
                </div>

                {/* Card Quick Stats */}
                <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-[#111827]/80 border border-white/5">
                    <span className="block text-slate-400 text-[10px]">CURRENT CGPA</span>
                    <span className="font-bold text-cyan-400">{personalData.cgpa}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#111827]/80 border border-white/5">
                    <span className="block text-slate-400 text-[10px]">COLLEGE</span>
                    <span className="font-bold text-purple-400">Atria IT</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Note on Authenticity */}
            <p className="text-[11px] font-mono text-slate-400 text-center mt-3 max-w-xs">
              ⚡ Authentic photograph & stylized 3D avatar in an interactive Three.js galaxy.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-5 h-8 rounded-full border border-slate-500/60 flex items-start justify-center p-1"
        >
          <span className="w-1.5 h-2 rounded-full bg-cyan-400" />
        </motion.div>
      </div>

    </section>
  );
}
