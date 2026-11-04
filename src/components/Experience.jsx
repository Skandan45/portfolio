import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, FileText, CheckCircle2 } from 'lucide-react';
import { internships } from '../data/portfolioData';

export function Experience({ onOpenCertificate }) {
  return (
    <section id="experience" className="relative py-28 overflow-hidden bg-noir-950 film-grain border-t border-white/5">
      {/* Background subtle bronze spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bronze-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-900 border border-bronze-500/30 text-xs font-mono text-bronze-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY INTERNSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-editorial tracking-tight text-white">
            PROFESSIONAL <span className="italic font-normal text-bronze-300">EXPERIENCE</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Verified production engineering internships backed by official certificates of completion and executive letters of recommendation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Subtle Bronze Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-bronze-400/50 via-bronze-600/30 to-noir-800 -translate-x-1/2 hidden sm:block opacity-60" />

          <div className="space-y-16">
            {internships.map((job, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={job.id}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 w-7 h-7 rounded-full bg-noir-950 border-2 border-bronze-400 flex items-center justify-center text-bronze-400 shadow-sm z-20 hidden sm:flex">
                    <span className="w-2 h-2 rounded-full bg-bronze-400" />
                  </div>

                  {/* Empty Spacer Column for Desktop Alternate Layout */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2"
                  >
                    <div className="p-6 sm:p-8 rounded-2xl editorial-card border border-white/10 hover:border-bronze-500/50 relative group space-y-6">
                      
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-editorial font-normal text-white group-hover:text-bronze-300 transition-colors">
                              {job.company}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-bronze-500/15 text-bronze-300 border border-bronze-500/30">
                              VERIFIED
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-slate-300 mt-0.5">
                            {job.role}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-noir-900 border border-white/10 text-xs font-mono text-bronze-300">
                          <Calendar className="w-3.5 h-3.5 text-bronze-400" />
                          <span>{job.duration}</span>
                        </div>
                      </div>

                      {/* Highlight Banner */}
                      <div className="px-3.5 py-2 rounded-xl bg-bronze-500/10 border border-bronze-500/20 text-xs font-mono text-bronze-300 flex items-center gap-2">
                        <Award className="w-4 h-4 text-bronze-400 shrink-0" />
                        <span>{job.highlight}</span>
                      </div>

                      {/* Bullet Achievements */}
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                        {job.achievements.map((ach, achIdx) => (
                          <li key={achIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Document Preview & Action Triggers */}
                      <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-3">
                        {job.certificateImage && (
                          <button
                            onClick={() =>
                              onOpenCertificate({
                                title: `${job.company} — Certificate of Completion`,
                                issuer: job.company,
                                date: job.date,
                                verificationId: job.credentialId,
                                signatory: job.signatory,
                                fileUrl: job.certificateImage,
                                isPdf: false,
                                description: `Official internship completion certificate recognizing Skandan D Gowda's work as a Web Development Intern.`
                              })
                            }
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-noir-900 hover:bg-noir-800 text-white transition-all border border-white/10 hover:border-bronze-400/50"
                          >
                            <Award className="w-3.5 h-3.5 text-bronze-400" />
                            <span>View Certificate</span>
                          </button>
                        )}

                        {job.recommendationImage && (
                          <button
                            onClick={() =>
                              onOpenCertificate({
                                title: `${job.company} — Letter of Recommendation`,
                                issuer: job.company,
                                date: job.date,
                                verificationId: job.credentialId,
                                signatory: job.signatory,
                                fileUrl: job.recommendationImage,
                                isPdf: false,
                                description: `Letter of recommendation awarded to Skandan D Gowda by Tech Lead Pranav Bansal for exceptional performance and technical dedication.`
                              })
                            }
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-bronze-500/15 hover:bg-bronze-500/25 text-bronze-200 transition-all border border-bronze-500/40 hover:border-bronze-400"
                          >
                            <FileText className="w-3.5 h-3.5 text-bronze-400" />
                            <span>Recommendation Letter</span>
                          </button>
                        )}
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
