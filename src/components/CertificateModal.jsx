import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, Calendar, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

export function CertificateModal({ certificate, isOpen, onClose }) {
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

  if (!isOpen || !certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col bg-navy-900/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-panel"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-navy-800/60">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-electric-500/20 border border-electric-500/30 flex items-center justify-center text-cyan-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide font-display">
                  {certificate.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Issued by <span className="text-electric-300 font-semibold">{certificate.issuer}</span>
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
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Visual Certificate Preview */}
            <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-black/40 flex items-center justify-center min-h-[320px]">
              {certificate.isPdf ? (
                <div className="w-full h-[520px] bg-slate-950 flex flex-col items-center justify-center">
                  <iframe
                    src={`${certificate.fileUrl}#toolbar=0&navpanes=0`}
                    title={certificate.title}
                    className="w-full h-full border-none rounded-lg"
                  />
                </div>
              ) : (
                <img
                  src={certificate.fileUrl}
                  alt={certificate.title}
                  className="w-full max-h-[520px] object-contain rounded-lg"
                  loading="lazy"
                />
              )}
            </div>

            {/* Credential Metadata */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-navy-800/40 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Calendar className="w-4 h-4" />
                  <span>Completion Date: {certificate.date}</span>
                </div>
                {certificate.verificationId && (
                  <div className="flex items-start gap-2 text-xs font-mono text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-neon-purple shrink-0 mt-0.5" />
                    <span className="break-all">Credential ID: {certificate.verificationId}</span>
                  </div>
                )}
                {certificate.signatory && (
                  <p className="text-xs text-slate-400">
                    Signatory: <span className="text-slate-200">{certificate.signatory}</span>
                  </p>
                )}
              </div>

              <div className="p-4 rounded-xl bg-navy-800/40 border border-white/5 space-y-2">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Verified Competencies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {certificate.skills?.map((s, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-electric-500/15 border border-electric-500/30 text-cyan-300"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {certificate.description && (
              <p className="text-sm text-slate-300 leading-relaxed font-sans bg-navy-800/20 p-4 rounded-xl border border-white/5">
                {certificate.description}
              </p>
            )}
          </div>

          {/* Footer Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-navy-800/80">
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Authentic Verified Asset
            </span>

            <div className="flex items-center gap-3">
              <a
                href={certificate.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open In Full Tab
              </a>
              <a
                href={certificate.fileUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-electric-500 to-neon-purple hover:from-electric-400 hover:to-neon-violet text-white transition-all shadow-glow-blue"
              >
                <Download className="w-3.5 h-3.5" />
                Download Document
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
