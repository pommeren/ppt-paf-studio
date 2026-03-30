"use client";

import { motion } from "framer-motion";
import { Workflow } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const steps = [
  {
    phase: "PHASE 1",
    title: "Acquisition",
    items: ["SEO / SEA", "Ambassadeurs (20%)", "Portfolio & personal brand"],
    color: "#22C55E",
    bg: "rgba(34, 197, 94, 0.06)",
    border: "rgba(34, 197, 94, 0.15)",
  },
  {
    phase: "PHASE 2",
    title: "Site IA",
    items: ["Design moderne", "Contenu généré IA", "Performance & SEO technique"],
    color: "#3B82F6",
    bg: "rgba(59, 130, 246, 0.06)",
    border: "rgba(59, 130, 246, 0.15)",
  },
  {
    phase: "PHASE 3",
    title: "Confiance & Upsell",
    items: ["Résultats prouvés", "Proposition automatisation", "Audit processus métier"],
    color: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.06)",
    border: "rgba(139, 92, 246, 0.15)",
  },
  {
    phase: "PHASE 4",
    title: "Soft IA sur-mesure",
    items: ["R&D financée client", "Développement solution", "Déploiement & formation"],
    color: "#F59E0B",
    bg: "rgba(245, 158, 11, 0.06)",
    border: "rgba(245, 158, 11, 0.15)",
  },
  {
    phase: "PHASE 5",
    title: "Scalabilité",
    items: ["Revente solution", "Catalogue produits IA", "Revenus récurrents"],
    color: "#EF4444",
    bg: "rgba(239, 68, 68, 0.06)",
    border: "rgba(239, 68, 68, 0.15)",
  },
];

export default function SlideWorkflow() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-16 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-6xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center">
            <Workflow className="w-6 h-6 text-[var(--color-primary-light)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Le <span className="gradient-text">Workflow</span> complet
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500/20 via-purple-500/20 to-red-500/20 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.div key={step.phase} variants={fadeUp} className="relative">
                {/* Dot on timeline */}
                <motion.div
                  className="hidden md:block absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10"
                  style={{
                    background: step.color,
                    boxShadow: `0 0 12px ${step.color}40`,
                  }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />

                {/* Card */}
                <div
                  className="mt-0 md:mt-12 p-4 rounded-xl border"
                  style={{
                    background: step.bg,
                    borderColor: step.border,
                  }}
                >
                  <span
                    className="text-[10px] font-mono font-bold tracking-wider"
                    style={{ color: step.color }}
                  >
                    {step.phase}
                  </span>
                  <h3 className="font-semibold mt-1 text-sm">{step.title}</h3>
                  <ul className="mt-2 space-y-1">
                    {step.items.map((item) => (
                      <li key={item} className="text-white/40 text-xs flex items-start gap-1.5">
                        <span style={{ color: step.color }} className="mt-0.5">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
