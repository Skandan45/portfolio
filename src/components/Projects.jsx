import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, ExternalLink, Github, Sparkles, Layers, Cpu, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { featuredProject } from '../data/portfolioData';
import { LaptopShowcase } from '../three/LaptopShowcase';

export function Projects({ onOpenProjectModal }) {
  const [selectedScreenshotIdx, setSelectedScreenshotIdx] = useState(0);

  const activeScreenshot = featuredProject.screenshots[selectedScreenshotIdx];

  return (
    <section id="projects" className="relative py-28 overflow-hidden bg-[#050509]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-cyan-400/30 text-xs font-mono text-cyan-400">
            <Film className="w-3.5 h-3.5" />
            <span>PRIMARY FEATURED PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            FEATURED <span className="text-gradient-cyan-purple">INNOVATION</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Interactive 3D Three.js hardware showcase of production-deployed full-stack web applications.
          </p>
        </div>

        {/* Featured Project Showcase Container */}
        <div className="rounded-3xl glass-card border border-white/10 p-6 sm:p-10 relative overflow-hidden">
          
          {/* Ambient Corner Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* 3D LAPTOP SHOWCASE (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="w-full relative rounded-2xl bg-navy-950/70 border border-white/10 p-2 shadow-2xl">
                {/* 3D Three.js Laptop Canvas */}
                <LaptopShowcase currentScreenshot={activeScreenshot.src} />
              </div>

              {/* Dynamic Texture Switcher for 3D Screen */}
              <div className="w-full mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                  <span>Switch 3D Screen View:</span>
                  <span className="text-cyan-400">{activeScreenshot.title}</span>
                </div>
                
                <div className="grid grid-cols-5 gap-2">
                  {featuredProject.screenshots.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedScreenshotIdx(idx)}
                      className={`relative rounded-lg overflow-hidden border aspect-video transition-all ${
                        idx === selectedScreenshotIdx
                          ? 'border-cyan-400 ring-2 ring-cyan-400/50 scale-[1.03]'
                          : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                      title={s.title}
                    >
                      <img src={s.src} alt={s.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* PROJECT INFORMATION & DETAILS (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* Category & Status */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-300">
                  {featuredProject.category}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Deployed on Render
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                  {featuredProject.name}
                </h3>
                <p className="text-sm font-mono text-electric-300 mt-1">
                  {featuredProject.tagline}
                </p>
              </div>

              {/* Prompt Description */}
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                {featuredProject.overview}
              </p>

              {/* Verified Technologies Used */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Verified Technologies Used
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {featuredProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-navy-800/80 border border-white/10 text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Functional CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={featuredProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-mono text-xs font-bold bg-gradient-to-r from-electric-500 to-cyan-400 hover:from-electric-400 hover:to-cyan-300 text-slate-950 transition-all shadow-glow-cyan flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LIVE DEMO</span>
                </a>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl font-mono text-xs font-bold bg-navy-800/90 hover:bg-white/15 text-white transition-all border border-white/15 hover:border-cyan-400/40 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW GITHUB</span>
                </a>

                <button
                  onClick={onOpenProjectModal}
                  className="px-4 py-3 rounded-xl font-mono text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5"
                >
                  <span>Architecture & Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
