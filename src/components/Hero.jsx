import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, UserCheck, Orbit, ShieldCheck } from 'lucide-react';
import { personalData, technicalBadges } from '../data/portfolioData';
import { HeroScene } from '../three/HeroScene';

export function Hero() {
  const [viewMode, setViewMode] = useState('photo'); // 'photo' default showcase

  const scrollToExplore = (e) => {
    e.preventDefault();
    const target = document.querySelector('#about');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToConnect = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#030508]">
      
      {/* 3D THE DIGITAL DIMENSION: Floating Glass Sculptures, Liquid Light Ribbons & Architecture */}
      <HeroScene
        showAvatar={viewMode === 'avatar'}
        avatarPosition={[2.2, -0.3, 0]}
      />

      {/* Atmospheric Cinematic Gradients (Deep midnight black & dark navy vignettes) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030508] via-[#030508]/80 to-transparent pointer-events-none w-full md:w-3/5 z-[1]" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#030508] to-transparent pointer-events-none z-[1]" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#030508]/80 to-transparent pointer-events-none z-[1]" />

      {/* Subtle Atmospheric Light Pools (Deep blue & violet fill) */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-electric-500/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-neon-purple/10 rounded-full blur-[170px] pointer-events-none z-0" />

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
          
          {/* LEFT SIDE: Clean, Crisp Typography & Identity (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Intro Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/80 border border-cyan-400/25 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase">
                HELLO, I'M
              </span>
            </div>

            {/* Candidate Name */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-display text-white">
                <span className="block">SKANDAN</span>
                <span className="text-gradient-cyan-purple block">D GOWDA</span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-base sm:text-xl font-semibold text-slate-200">
                  Third-Year Engineering Student
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-base sm:text-xl font-semibold text-cyan-400">
                  Aspiring Software Developer
                </span>
              </div>
            </div>

            {/* Hero Bio Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-sans leading-relaxed">
              {personalData.heroBio}
            </p>

            {/* Technical Badges */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block">
                CORE TECHNICAL ARSENAL
              </span>
              <div className="flex flex-wrap gap-2.5">
                {technicalBadges.map((badge, idx) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + idx * 0.08 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-navy-900/80 border border-white/10 hover:border-cyan-400/40 backdrop-blur-md transition-all shadow-sm group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:shadow-[0_0_8px_#22D3EE]" />
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-200 group-hover:text-cyan-300">
                      {badge}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                onClick={scrollToExplore}
                className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold tracking-wider bg-gradient-to-r from-electric-500 via-cyan-400 to-neon-purple text-slate-950 hover:opacity-95 transition-all shadow-glow-cyan flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={scrollToConnect}
                className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold tracking-wider bg-navy-900/85 hover:bg-white/10 text-white transition-all border border-white/15 hover:border-neon-purple/50 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
              >
                LET'S CONNECT
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-3 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Connect:
              </span>
              
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-navy-900/70 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all hover:scale-110 shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-navy-900/70 border border-white/10 hover:border-electric-400 hover:text-electric-300 transition-all hover:scale-110 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="p-2.5 rounded-xl bg-navy-900/70 border border-white/10 hover:border-neon-purple hover:text-neon-purple transition-all hover:scale-110 shadow-sm"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Real Photograph in Premium Glass Frame (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* View Mode Switcher */}
            <div className="mb-4 flex items-center p-1 rounded-full bg-navy-900/85 border border-white/15 backdrop-blur-2xl shadow-xl">
              <button
                onClick={() => setViewMode('photo')}
                className={`px-3.5 py-1 rounded-full text-[11px] font-mono transition-all flex items-center gap-1.5 ${
                  viewMode === 'photo'
                    ? 'bg-gradient-to-r from-electric-500 to-cyan-400 text-slate-950 font-bold shadow-glow-cyan'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Primary Portrait</span>
              </button>
              <button
                onClick={() => setViewMode('avatar')}
                className={`px-3.5 py-1 rounded-full text-[11px] font-mono transition-all flex items-center gap-1.5 ${
                  viewMode === 'avatar'
                    ? 'bg-gradient-to-r from-neon-purple to-pink-500 text-white shadow-glow-purple'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Orbit className="w-3.5 h-3.5" />
                <span>3D Avatar Model</span>
              </button>
            </div>

            {/* Authentic Profile Card in Premium Frosted Glass Frame */}
            <div className="w-full max-w-sm relative group">
              {/* Subtle Blue and Violet Rim Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-electric-500/30 via-cyan-400/20 to-neon-purple/40 rounded-3xl blur-xl opacity-50 group-hover:opacity-90 transition duration-700 pointer-events-none" />

              {/* Glass Frame Container */}
              <div className="relative rounded-2xl bg-navy-900/85 border border-white/15 p-5 backdrop-blur-2xl shadow-2xl space-y-4 transition-all duration-500 group-hover:border-cyan-400/40 group-hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)]">
                
                {/* HUD Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    <span className="text-[11px] font-mono tracking-wider text-cyan-300 font-semibold">
                      AUTHENTIC PROFILE • VERIFIED
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    ATRIA IT • CS
                  </span>
                </div>

                {/* Profile Visual Display */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/15 bg-navy-950/80 shadow-inner group/img">
                  {viewMode === 'avatar' ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-gradient-to-b from-navy-800 to-navy-950">
                      <div className="w-16 h-16 rounded-full bg-neon-purple/20 border border-neon-purple/50 flex items-center justify-center text-neon-purple shadow-glow-purple">
                        <Orbit className="w-8 h-8 animate-spin-slow" />
                      </div>
                      <p className="text-xs font-mono text-cyan-300 font-semibold">
                        Interactive 3D Stylized Character
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Rendered in the real-time Three.js scene responding smoothly to pointer coordinates.
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* NEWLY UPLOADED REAL PROFILE PHOTOGRAPH */}
                      <img
                        src="/images/profile.png"
                        alt="Skandan D Gowda — Primary Profile Photograph"
                        className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover/img:scale-105"
                      />
                      
                      {/* Cinematic Vignette Overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent pointer-events-none" />

                      {/* Authentic Verification Stamp */}
                      <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-navy-900/85 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-1.5 text-emerald-400">
                          <ShieldCheck className="w-4 h-4" />
                          <span className="font-semibold">Skandan D Gowda</span>
                        </div>
                        <span className="text-[10px] text-cyan-300">3rd Year B.E.</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Card Quick Stats */}
                <div className="grid grid-cols-2 gap-2 text-center pt-1 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="block text-slate-400 text-[10px]">CURRENT CGPA</span>
                    <span className="font-bold text-cyan-400">{personalData.cgpa}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="block text-slate-400 text-[10px]">DEPARTMENT</span>
                    <span className="font-bold text-neon-purple">ISE @ Atria</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Note on Authenticity */}
            <p className="text-[11px] font-mono text-slate-400 text-center mt-3 max-w-xs">
              ⚡ Authentic photograph framed in The Digital Dimension 3D environment.
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
