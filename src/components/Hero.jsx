import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, UserCheck, Orbit, ShieldCheck } from 'lucide-react';
import { personalData, technicalBadges } from '../data/portfolioData';
import { HeroScene } from '../three/HeroScene';

export function Hero() {
  const [viewMode, setViewMode] = useState('photo'); // 'photo' by default

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
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#050505] film-grain">
      
      {/* SUBTLE 3D NOIR BACKGROUND: Single Abstract Metallic Sculpture with Bronze Reflections */}
      <HeroScene
        showAvatar={viewMode === 'avatar'}
        avatarPosition={[2.2, -0.3, 0]}
      />

      {/* Atmospheric Cinematic Gradients (Deep matte black & soft charcoal vignettes) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent pointer-events-none w-full md:w-3/5 z-[1]" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-[1]" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#050505]/80 to-transparent pointer-events-none z-[1]" />

      {/* Atmospheric Soft Charcoal Fill */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] spotlight-charcoal pointer-events-none z-0" />

      {/* Hero Foreground Content: Balanced 2-Column Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
          
          {/* LEFT SIDE: Clean Editorial Typography & Introduction (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Intro Eyebrow Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-900/90 border border-bronze-500/30 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-400"></span>
              <span className="text-[11px] font-mono font-semibold tracking-wider text-bronze-300 uppercase">
                HELLO, I'M
              </span>
            </div>

            {/* Candidate Name in Editorial Typography */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-editorial font-normal tracking-tight text-white leading-tight">
                <span className="block">SKANDAN</span>
                <span className="text-gradient-bronze block">D GOWDA</span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-base sm:text-xl font-semibold text-slate-200">
                  Third-Year Engineering Student
                </span>
                <span className="text-bronze-500 font-mono hidden sm:inline">•</span>
                <span className="text-base sm:text-xl font-semibold text-bronze-300">
                  Aspiring Software Developer
                </span>
              </div>
            </div>

            {/* Hero Bio Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-sans leading-relaxed">
              {personalData.heroBio}
            </p>

            {/* Core Technical Arsenal Badges */}
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
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-noir-900/80 border border-bronze-500/25 hover:border-bronze-400/60 backdrop-blur-md transition-all shadow-sm group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
                    <span className="font-mono text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {badge}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons: Explore Work & Connect */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToExplore}
                className="px-7 py-3 rounded-full font-mono text-xs font-semibold tracking-wider bg-bronze-500 hover:bg-bronze-400 text-noir-950 transition-all shadow-bronze-glow hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                onClick={scrollToConnect}
                className="px-7 py-3 rounded-full font-mono text-xs font-semibold tracking-wider bg-noir-900/80 hover:bg-noir-800 text-slate-200 hover:text-white transition-all border border-bronze-500/40 hover:border-bronze-400 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
              >
                LET'S CONNECT
              </a>
            </div>

            {/* Social Links Strip */}
            <div className="flex items-center gap-5 pt-2 text-slate-400">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bronze-300 transition-colors text-xs font-mono flex items-center gap-1.5"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <span className="text-slate-700">•</span>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bronze-300 transition-colors text-xs font-mono flex items-center gap-1.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <span className="text-slate-700">•</span>

              <a
                href={`mailto:${personalData.email}`}
                className="hover:text-bronze-300 transition-colors text-xs font-mono flex items-center gap-1.5"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Restored Original Profile Photograph Component (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* View Mode Switcher */}
            <div className="mb-4 flex items-center p-1 rounded-full bg-slate-900/90 border border-white/15 backdrop-blur-2xl shadow-xl">
              <button
                onClick={() => setViewMode('photo')}
                className={`px-3.5 py-1 rounded-full text-[11px] font-mono transition-all flex items-center gap-1.5 ${
                  viewMode === 'photo'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_-3px_rgba(34,211,238,0.5)]'
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
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold shadow-[0_0_20px_-3px_rgba(168,85,247,0.5)]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Orbit className="w-3.5 h-3.5" />
                <span>3D Avatar Model</span>
              </button>
            </div>

            {/* Authentic Profile Card in Premium Frosted Glass Frame */}
            <div className="w-full max-w-sm relative group">
              {/* Original Electric-Blue & Violet Subtle Glowing Rim (Preserved from original implementation) */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/30 via-cyan-400/25 to-purple-600/35 rounded-3xl blur-xl opacity-50 group-hover:opacity-90 transition duration-700 pointer-events-none" />

              {/* Glass Frame Container */}
              <div className="relative rounded-2xl bg-[#080c14]/90 border border-white/15 p-5 backdrop-blur-2xl shadow-2xl space-y-4 transition-all duration-500 group-hover:border-cyan-400/40 group-hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)]">
                
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

                {/* Profile Visual Display Container (Aspect 4/5, Completely Unobstructed) */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/15 bg-slate-950 shadow-inner group/img">
                  {viewMode === 'avatar' ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-gradient-to-b from-slate-900 to-slate-950">
                      <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.4)]">
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
                    /* 
                       ORIGINAL AUTHENTIC PROFILE PHOTOGRAPH
                       - Full genuine natural color
                       - NO grayscale or black-and-white filter
                       - NO halftone texture
                       - NO golden rim lighting
                       - NO background removal (natural trees, mist, lake preserved)
                       - NO cinematic shadows or gradient overlays
                       - NO photo masks
                    */
                    <img
                      src="/images/profile.png"
                      alt="Skandan D Gowda — Primary Profile Photograph"
                      className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover/img:scale-105"
                    />
                  )}
                </div>

                {/* Authentic Verification Stamp (Placed outside the photo container to ensure 0% obstruction of the image) */}
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-semibold text-slate-200">Skandan D Gowda</span>
                  </div>
                  <span className="text-[10px] text-cyan-300 font-medium">3rd Year B.E.</span>
                </div>

                {/* Card Quick Stats */}
                <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="block text-slate-400 text-[10px]">CURRENT CGPA</span>
                    <span className="font-bold text-cyan-400">{personalData.cgpa}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="block text-slate-400 text-[10px]">DEPARTMENT</span>
                    <span className="font-bold text-purple-400">ISE @ Atria</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Note on Authenticity */}
            <p className="text-[11px] font-mono text-slate-400 text-center mt-3 max-w-xs">
              ⚡ Authentic photograph verified • Information Science Engineering
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
