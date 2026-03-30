"use client";

import { motion } from "framer-motion";
import { Workflow } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const phases = [
  {
    phase: "01",
    title: "Acquisition",
    items: ["SEO / SEA", "Ambassadeurs (20%)", "Portfolio & personal brand"],
    color: "#22C55E",
  },
  {
    phase: "02",
    title: "Site IA",
    items: ["Design moderne", "Contenu genere IA", "Performance & SEO technique"],
    color: "#3B82F6",
  },
  {
    phase: "03",
    title: "Confiance & Upsell",
    items: ["Resultats prouves", "Proposition automatisation", "Audit processus metier"],
    color: "#8B5CF6",
  },
  {
    phase: "04",
    title: "Soft IA sur-mesure",
    items: ["R&D financee client", "Developpement solution", "Deploiement & formation"],
    color: "#F59E0B",
  },
  {
    phase: "05",
    title: "Scalabilite",
    items: ["Revente solution", "Catalogue produits IA", "Revenus recurrents"],
    color: "#EF4444",
  },
];

export default function SlideWorkflow() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-16 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-6xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-5 mb-12">
          <div className="icon-box w-14 h-14 bg-violet-500/15">
            <Workflow className="w-6 h-6 text-violet-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
            Le <span className="gradient-text">Workflow</span> complet
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-[28px] left-[5%] right-[5%] h-px hidden md:block"
            style={{ background: "linear-gradient(90deg, #22C55E20, #3B82F620, #8B5CF620, #F59E0B20, #EF444420)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {phases.map((step, i) => (
              <motion.div key={step.phase} variants={fadeUp} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:flex justify-center mb-6">
                  <motion.div
                    className="w-3.5 h-3.5 rounded-full z-10 relative"
                    style={{
                      background: step.color,
                      boxShadow: `0 0 16px ${step.color}50`,
                    }}
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                  />
                </div>

                {/* Card */}
                <div
                  className="p-5 rounded-xl glass-card relative overflow-hidden"
                  style={{ borderColor: `${step.color}15` }}
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-4 right-4 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${step.color}30, transparent)` }}
                  />

                  <span
                    className="text-[10px] font-mono font-bold tracking-[0.2em]"
                    style={{ color: step.color, opacity: 0.7 }}
                  >
                    PHASE {step.phase}
                  </span>
                  <h3 className="font-semibold mt-2 text-sm font-display">{step.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {step.items.map((item) => (
                      <li key={item} className="text-white/35 text-xs flex items-start gap-2">
                        <span
                          className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                          style={{ background: step.color, opacity: 0.6 }}
                        />
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
