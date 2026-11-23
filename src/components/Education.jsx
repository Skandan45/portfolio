import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { education } from '../data/portfolioData';

export function Education() {
  return (
    <section id="education" className="relative py-28 overflow-hidden bg-[#050509] border-t border-white/5">
      {/* Background glow pools */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1020]/90 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            EDUCATION <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">JOURNEY</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Consistent academic excellence spanning foundational schooling through advanced computer science engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central bar */}
          <div className="absolute left-6 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-600 to-purple-600 opacity-35" />

          <div className="space-y-12">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-14 sm:pl-20 group"
              >
                {/* Timeline node */}
                <div className="absolute left-4 sm:left-6 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0B1020] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10 group-hover:scale-110 transition-transform">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                </div>

                {/* Education Card */}
                <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 hover:border-cyan-400/40 relative space-y-4 shadow-xl">
                  
                  {/* Top Row: Institution & Period */}
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                        {item.institution}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-300 mt-1">
                        <span className="font-semibold">{item.degree}</span>
                        <span>•</span>
                        <span className="text-slate-400">{item.field}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 font-mono text-xs">
                      <span className="px-3 py-1 rounded-full bg-[#0B1020] border border-white/10 text-cyan-300">
                        {item.period}
                      </span>
                      <span className="text-slate-400 text-[11px] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Status & Grade Banner */}
                  <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#0B1020]/70 border border-white/10 font-mono text-xs">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-400" />
                      Status: <span className="text-white font-semibold">{item.status}</span>
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-blue-600/20 border border-blue-500/40 text-cyan-300 font-bold">
                      {item.cgpa}
                    </span>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
