import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Atom, Database, Layers, CheckCircle2, Sparkles, Cpu } from 'lucide-react';
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
    <section id="skills" className="relative py-28 overflow-hidden bg-[#050509]">
      {/* Background glow effects */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-neon-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-electric-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-electric-400/30 text-xs font-mono text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>FOUNDATIONAL CORE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            TECHNICAL <span className="text-gradient-cyan-purple">ARSENAL</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Specialized engineering proficiencies in programming, modern frontend interfaces, and scalable database systems. No arbitrary percentages — pure practical capability.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-electric-500 to-neon-purple text-white shadow-glow-blue'
                    : 'bg-navy-800/60 text-slate-400 hover:text-white border border-white/5'
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1, duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  // {group.category}
                </span>
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs text-slate-500 font-sans hidden sm:inline">
                  {group.description}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="p-6 rounded-2xl glass-card relative group overflow-hidden border border-white/10 hover:border-cyan-400/50"
                    >
                      {/* Top Skill Identity */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3.5">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                            style={{
                              backgroundColor: `${skill.color}18`,
                              color: skill.color,
                              border: `1px solid ${skill.color}40`
                            }}
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

                        <span
                          className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider"
                          style={{
                            backgroundColor: `${skill.color}20`,
                            color: skill.color,
                            border: `1px solid ${skill.color}50`
                          }}
                        >
                          VERIFIED
                        </span>
                      </div>

                      {/* Skill Description */}
                      <p className="text-sm text-slate-300 font-sans leading-relaxed mb-5">
                        {skill.description}
                      </p>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                        {skill.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-navy-800/80 border border-white/10 text-slate-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300 transition-colors"
                          >
                            <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Hover Subtle Accent Line */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: skill.color }}
                      />
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
