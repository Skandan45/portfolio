import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalData, navLinks } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050509] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 via-electric-500 to-neon-purple flex items-center justify-center text-slate-950 font-black text-sm shadow-glow-cyan">
                S
              </span>
              <span className="text-xl font-extrabold tracking-wider font-display text-white">
                SKANDAN<span className="text-cyan-400">.</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 font-sans max-w-sm leading-relaxed">
              {personalData.title}
            </p>
            <p className="text-xs text-slate-400 font-mono">
              {personalData.degree} • {personalData.college}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-navy-800/80 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-navy-800/80 border border-white/10 hover:border-electric-400 hover:text-electric-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2.5 rounded-xl bg-navy-800/80 border border-white/10 hover:border-neon-purple hover:text-neon-purple transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-300 block">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-cyan-300 transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-slate-600">›</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Technology & Vercel Notice (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-300 block">
              Architecture & Stack
            </span>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              React 18 • Three.js • React Three Fiber • Drei • Tailwind CSS • Lenis Smooth Scroll
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-800/80 border border-white/10 text-[11px] font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Optimized for Vercel</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Skandan D Gowda. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-800/70 hover:bg-navy-700/80 border border-white/10 text-slate-300 hover:text-white transition-all hover:border-cyan-400/40"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
