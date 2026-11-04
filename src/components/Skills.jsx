import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Atom, Database, CheckCircle2, Cpu } from 'lucide-react';
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
    <section id="skills" className="relative py-28 overflow-hidden bg-noir-900 film-grain border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-850 border border-bronze-500/30 text-xs font-mono text-bronze-300">
            <Cpu className="w-3.5 h-3.5" />
            <span>FOUNDATIONAL CORE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-editorial tracking-tight text-white">
            TECHNICAL <span className="italic font-normal text-bronze-300">ARSENAL</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Specialized engineering proficiencies in programming, modern frontend interfaces, and scalable database systems. No arbitrary percentages — pure practical capability.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-bronze-500 text-noir-950 font-semibold shadow-sm'
                    : 'bg-noir-800 text-slate-400 hover:text-white border border-white/5'
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
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-bronze-400 font-semibold">
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
                      whileHover={{ scale: 1.015, y: -3 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                      className="p-6 sm:p-7 rounded-2xl editorial-card relative group overflow-hidden border border-white/10 hover:border-bronze-500/50"
                    >
                      {/* Top Skill Identity */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3.5">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md bg-noir-800/90 text-bronze-300 border border-bronze-500/30 group-hover:scale-105 transition-transform"
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-editorial font-normal text-white group-hover:text-bronze-300 transition-colors">
                              {skill.name}
                            </h3>
                            <span className="text-xs font-mono text-slate-400">
                              {skill.badge}
                            </span>
                          </div>
                        </div>

                        <span className="px-2.5 py-1 rounded text-[10px] font-mono font-semibold tracking-wider bg-bronze-500/10 text-bronze-300 border border-bronze-500/30">
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
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-noir-850 border border-white/10 text-slate-300 group-hover:border-bronze-500/30 group-hover:text-bronze-300 transition-colors"
                          >
                            <CheckCircle2 className="w-3 h-3 text-bronze-400" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Subtle Bronze Accent Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-bronze-600 to-bronze-400 opacity-0 group-hover:opacity-100 transition-opacity" />
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
