import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Atom, Database, CheckCircle2, Cpu, Sparkles } from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

const iconMap = {
  Coffee: Code2,
  Terminal: Terminal,
  Atom: Atom,
  Database: Database
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Programming', 'Frontend', 'Database'];

  const filteredCategories =
    selectedCategory === 'All'
      ? technicalSkills
      : technicalSkills.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-[#050509] border-t border-white/5">
      {/* Background glow pools */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1020]/90 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>FOUNDATIONAL CORE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            TECHNICAL <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">ARSENAL</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Specialized engineering proficiencies in programming, modern frontend architecture, and relational database systems. No arbitrary percentages — pure practical capability.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_-3px_rgba(34,211,238,0.5)]'
                    : 'bg-[#0B1020]/80 text-slate-400 hover:text-white border border-white/10 hover:border-cyan-400/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.08, duration: 0.5 }}
              className="space-y-4"
            >
              {/* Category Divider Header */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  // {group.category}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                <span className="text-xs text-slate-500 font-sans hidden sm:inline">
                  {group.description}
                </span>
              </div>

              {/* Grid of Skill Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.015, y: -3 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                      className="p-6 sm:p-7 rounded-2xl glass-card relative group overflow-hidden border border-white/10 hover:border-cyan-400/40 shadow-xl"
                    >
                      {/* Top Skill Identity */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3.5">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-[#0B1020] border border-white/10 group-hover:border-cyan-400/40 group-hover:scale-105 transition-all"
                            style={{ color: skill.color }}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </h3>
                            <span className="text-xs font-mono text-slate-400">
                              {skill.badge}
                            </span>
                          </div>
                        </div>

                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                          VERIFIED
                        </span>
                      </div>

                      {/* Skill Description */}
                      <p className="text-sm text-slate-300 font-sans leading-relaxed mb-5">
                        {skill.description}
                      </p>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                        {skill.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono bg-[#111827]/80 border border-white/10 text-slate-300 group-hover:border-cyan-400/30 group-hover:text-cyan-200 transition-colors"
                          >
                            <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>

                      {/* Subtle Bottom Accent Gradient Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
