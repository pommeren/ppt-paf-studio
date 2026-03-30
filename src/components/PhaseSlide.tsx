"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Users, TrendingUp, ArrowRight, Target } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

interface PhaseSlideProps {
  phaseNumber: string;
  phaseLabel: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  accent: string;
  accentBg: string;

  // Acquisition
  acquisitionTitle: string;
  acquisitionItems: { label: string; detail: string }[];

  // Revenue
  revenueRange: string;
  revenueType: string;
  revenueMargin: string;

  // Objectif strategique
  objectif: string;
  objectifDetail: string;

  // Prerequis
  prerequis: string[];

  // Transition vers prochaine phase
  transitionText?: string;
  transitionDetail?: string;
}

export default function PhaseSlide({
  phaseNumber,
  phaseLabel,
  title,
  subtitle,
  icon,
  accent,
  accentBg,
  acquisitionTitle,
  acquisitionItems,
  revenueRange,
  revenueType,
  revenueMargin,
  objectif,
  objectifDetail,
  prerequis,
  transitionText,
  transitionDetail,
}: PhaseSlideProps) {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 md:px-16 py-20 grid-bg overflow-y-auto">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-6xl w-full"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="flex items-center gap-5 mb-3">
          <div
            className="icon-box w-14 h-14 shrink-0"
            style={{ background: accentBg, color: accent }}
          >
            {icon}
          </div>
          <div>
            <span
              className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase block mb-1"
              style={{ color: accent, opacity: 0.7 }}
            >
              {phaseLabel} {phaseNumber}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
              {title}
            </h2>
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg text-white/40 font-light leading-relaxed mb-10 ml-[76px] max-w-3xl"
        >
          {subtitle}
        </motion.p>

        {/* Main grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {/* Acquisition */}
          <motion.div
            variants={fadeUp}
            className="p-6 rounded-2xl glass-card relative overflow-hidden"
            style={{ borderColor: `${accent}12` }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${accent}30, transparent)` }}
            />
            <div className="flex items-center gap-3 mb-5">
              <Users className="w-4 h-4" style={{ color: accent }} />
              <h3 className="text-sm font-semibold font-display uppercase tracking-wider" style={{ color: accent }}>
                {acquisitionTitle}
              </h3>
            </div>
            <div className="space-y-3">
              {acquisitionItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: accent, opacity: 0.5 }}
                  />
                  <div>
                    <span className="text-sm text-white/70 font-medium">{item.label}</span>
                    <span className="text-sm text-white/30 ml-1.5">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Revenue */}
          <motion.div
            variants={fadeUp}
            className="p-6 rounded-2xl glass-card relative overflow-hidden"
            style={{ borderColor: `${accent}12` }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${accent}30, transparent)` }}
            />
            <div className="flex items-center gap-3 mb-5">
              <TrendingUp className="w-4 h-4" style={{ color: accent }} />
              <h3 className="text-sm font-semibold font-display uppercase tracking-wider" style={{ color: accent }}>
                Revenus estimes
              </h3>
            </div>
            <div className="mb-4">
              <span className="text-2xl md:text-3xl font-bold font-display" style={{ color: accent }}>
                {revenueRange}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span
                className="text-[10px] px-3 py-1 rounded-full font-medium tracking-wider uppercase"
                style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}20` }}
              >
                {revenueType}
              </span>
              <span className="text-sm text-white/40">
                Marge <strong className="text-white/60">{revenueMargin}</strong>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Second row - Objectif + Prerequis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {/* Objectif */}
          <motion.div
            variants={fadeUp}
            className="p-6 rounded-2xl glass-card relative overflow-hidden"
            style={{ borderColor: `${accent}12` }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${accent}30, transparent)` }}
            />
            <div className="flex items-center gap-3 mb-5">
              <Target className="w-4 h-4" style={{ color: accent }} />
              <h3 className="text-sm font-semibold font-display uppercase tracking-wider" style={{ color: accent }}>
                Objectif strategique
              </h3>
            </div>
            <p className="text-base text-white/60 font-medium mb-2">{objectif}</p>
            <p className="text-sm text-white/30 leading-relaxed">{objectifDetail}</p>
          </motion.div>

          {/* Prerequis */}
          <motion.div
            variants={fadeUp}
            className="p-6 rounded-2xl glass-card relative overflow-hidden"
            style={{ borderColor: `${accent}12` }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${accent}30, transparent)` }}
            />
            <div className="flex items-center gap-3 mb-5">
              <span className="text-sm" style={{ color: accent }}>&#9670;</span>
              <h3 className="text-sm font-semibold font-display uppercase tracking-wider" style={{ color: accent }}>
                Ce qu&apos;il nous faut
              </h3>
            </div>
            <div className="space-y-2.5">
              {prerequis.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: accent, opacity: 0.5 }}
                  />
                  <span className="text-sm text-white/50">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Transition to next phase */}
        {transitionText && (
          <motion.div
            variants={fadeUp}
            className="p-5 rounded-2xl glass flex items-center gap-4"
            style={{ borderColor: `${accent}10` }}
          >
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 shrink-0" style={{ color: accent }} />
            </motion.div>
            <div>
              <span className="text-sm font-semibold text-white/60">{transitionText}</span>
              {transitionDetail && (
                <span className="text-sm text-white/30 ml-1.5">{transitionDetail}</span>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
