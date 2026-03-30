"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const revenues = [
  {
    label: "Sites IA",
    range: "1 500 - 5 000 EUR",
    volume: "Flux regulier",
    margin: "~60%",
    barWidth: "35%",
    color: "#22C55E",
    desc: "Porte d'entree, recurrent",
  },
  {
    label: "SEO / SEA",
    range: "500 - 2 000 EUR /mois",
    volume: "Recurrent",
    margin: "~70%",
    barWidth: "30%",
    color: "#3B82F6",
    desc: "Revenus mensuels stables",
  },
  {
    label: "Automatisation IA",
    range: "5 000 - 30 000 EUR",
    volume: "Gros ticket",
    margin: "~50%",
    barWidth: "70%",
    color: "#8B5CF6",
    desc: "Forte valeur ajoutee",
  },
  {
    label: "Revente soft IA",
    range: "3 000 - 20 000 EUR",
    volume: "Scalable",
    margin: "~90%",
    barWidth: "100%",
    color: "#F59E0B",
    desc: "Quasi 100% marge, catalogue qui grandit",
  },
];

export default function SlideRevenue() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-20 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-5 mb-12">
          <div className="icon-box w-14 h-14 bg-amber-500/15">
            <BarChart3 className="w-6 h-6 text-amber-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
            Sources de <span className="text-amber-400">revenus</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {revenues.map((rev, i) => (
            <motion.div
              key={rev.label}
              variants={fadeUp}
              className="p-5 rounded-2xl glass-card relative overflow-hidden group"
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-3 bottom-3 w-1 rounded-full"
                style={{ background: rev.color, opacity: 0.4 }}
              />

              <div className="ml-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-lg font-display">{rev.label}</h3>
                    <span className="text-[10px] px-2.5 py-1 rounded-full font-medium tracking-wider uppercase"
                      style={{ background: `${rev.color}15`, color: rev.color, border: `1px solid ${rev.color}20` }}
                    >
                      {rev.volume}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-white/50 font-mono text-xs">{rev.range}</span>
                    <div className="w-px h-4 bg-white/10" />
                    <span style={{ color: rev.color }} className="font-semibold text-sm">
                      Marge {rev.margin}
                    </span>
                  </div>
                </div>

                {/* Bar */}
                <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full relative"
                    style={{
                      background: `linear-gradient(90deg, ${rev.color}, ${rev.color}80)`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: rev.barWidth }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  />
                </div>
                <p className="text-white/25 text-xs mt-2.5">{rev.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
