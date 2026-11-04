import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Film, Layers, Sparkles, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { featuredProject } from '../data/portfolioData';

export function ProjectDetailModal({ isOpen, onClose }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentScreenshot = featuredProject.screenshots[activeImageIdx];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col bg-navy-900/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-panel"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-navy-800/70">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-electric-500 flex items-center justify-center text-navy-900 shadow-glow-cyan">
                <Film className="w-5 h-5 font-bold" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-extrabold text-white tracking-wider font-display">
                    {featuredProject.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300">
                    FEATURED SHOWCASE
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  {featuredProject.tagline}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Screenshot Carousel Showcase */}
            <div className="space-y-3">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl group">
                <img
                  src={currentScreenshot.src}
                  alt={currentScreenshot.title}
                  className="w-full h-full object-cover sm:object-contain transition-all duration-300"
                />

                {/* Left/Right Carousel Controls */}
                <button
                  onClick={() =>
                    setActiveImageIdx((prev) =>
                      prev === 0 ? featuredProject.screenshots.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-navy-900/80 text-white border border-white/20 hover:bg-electric-500 transition-all opacity-80 hover:opacity-100"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIdx((prev) =>
                      prev === featuredProject.screenshots.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-navy-900/80 text-white border border-white/20 hover:bg-electric-500 transition-all opacity-80 hover:opacity-100"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Screenshot Caption Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent p-4 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="font-semibold text-cyan-300">
                      {currentScreenshot.title}
                    </span>
                    <span className="text-slate-400 ml-2 hidden sm:inline">
                      — {currentScreenshot.caption}
                    </span>
                  </div>
                  <span className="text-slate-400">
                    {activeImageIdx + 1} / {featuredProject.screenshots.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-5 gap-2">
                {featuredProject.screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative rounded-lg overflow-hidden border transition-all aspect-video ${
                      idx === activeImageIdx
                        ? 'border-cyan-400 ring-2 ring-cyan-400/40 scale-[1.02]'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={s.src} alt={s.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Overview & Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-base font-bold text-white font-display flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Executive Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {featuredProject.overview}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Key Features */}
                <div className="space-y-3 pt-2">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Engine Capabilities
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featuredProject.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-navy-800/40 border border-white/5 space-y-1"
                      >
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{feat.title}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed pl-5">
                          {feat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Metrics & Tech Stack */}
              <div className="space-y-5">
                {/* Tech Stack Badges */}
                <div className="p-4 rounded-xl bg-navy-800/50 border border-white/10 space-y-3">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-neon-purple" />
                    Stack Architecture
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-navy-700/80 border border-white/10 text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Metrics */}
                <div className="p-4 rounded-xl bg-navy-800/50 border border-white/10 space-y-3">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    Performance Metrics
                  </h5>
                  <div className="space-y-2">
                    {featuredProject.keyMetrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-xs p-2 rounded-lg bg-black/20 border border-white/5"
                      >
                        <span className="text-slate-400">{m.label}</span>
                        <span className="font-mono font-bold text-cyan-400">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-white/10 bg-navy-800/80">
            <span className="text-xs font-mono text-slate-400">
              Verified Production Repository: Skandan45/MoodMovieGenerator
            </span>

            <div className="flex items-center gap-3">
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
              >
                <Github className="w-4 h-4" />
                View GitHub
              </a>
              <a
                href={featuredProject.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-electric-500 to-cyan-400 hover:from-electric-400 hover:to-cyan-300 text-slate-950 transition-all font-bold shadow-glow-cyan"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
