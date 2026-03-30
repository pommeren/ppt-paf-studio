"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const revenues = [
  {
    label: "Sites IA",
    range: "1 500 - 5 000 €",
    volume: "Flux régulier",
    margin: "~60%",
    barWidth: "35%",
    color: "#22C55E",
    desc: "Porte d'entrée, récurrent",
  },
  {
    label: "SEO / SEA",
    range: "500 - 2 000 € /mois",
    volume: "Récurrent",
    margin: "~70%",
    barWidth: "25%",
    color: "#3B82F6",
    desc: "Revenus mensuels stables",
  },
  {
    label: "Automatisation IA",
    range: "5 000 - 30 000 €",
    volume: "Gros ticket",
    margin: "~50%",
    barWidth: "70%",
    color: "#8B5CF6",
    desc: "Forte valeur ajoutée",
  },
  {
    label: "Revente soft IA",
    range: "3 000 - 20 000 €",
    volume: "Scalable",
    margin: "~90%",
    barWidth: "100%",
    color: "#F59E0B",
    desc: "Quasi 100% marge, catalague qui grandit",
  },
];

export default function SlideRevenue() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-20 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-[var(--color-accent)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Sources de <span className="text-[var(--color-accent)]">revenus</span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {revenues.map((rev) => (
            <motion.div
              key={rev.label}
              variants={fadeUp}
              className="p-5 rounded-xl border border-white/[0.04] bg-white/[0.02]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ background: rev.color }} />
                  <h3 className="font-semibold text-lg">{rev.label}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-white/40">
                    {rev.volume}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-white/70 font-mono">{rev.range}</span>
                  <span className="text-white/30">|</span>
                  <span style={{ color: rev.color }} className="font-semibold">
                    Marge {rev.margin}
                  </span>
                </div>
              </div>

              {/* Bar */}
              <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: rev.color }}
                  initial={{ width: 0 }}
                  animate={{ width: rev.barWidth }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                />
              </div>
              <p className="text-white/30 text-xs mt-2">{rev.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
