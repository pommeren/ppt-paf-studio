"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const pillars = [
  {
    num: "01",
    title: "Porte d'entree",
    desc: "Sites web IA + SEO/SEA pour acquerir des clients et prouver notre expertise",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    accent: "#22C55E",
    border: "border-emerald-500/15",
  },
  {
    num: "02",
    title: "Valeur ajoutee",
    desc: "Automatisations IA sur-mesure qui repondent a des besoins metier specifiques",
    gradient: "from-violet-500/20 to-violet-600/5",
    accent: "#8B5CF6",
    border: "border-violet-500/15",
  },
  {
    num: "03",
    title: "Scalabilite",
    desc: "Revente des solutions developpees a d'autres entreprises du meme secteur",
    gradient: "from-amber-500/20 to-amber-600/5",
    accent: "#F59E0B",
    border: "border-amber-500/15",
  },
];

export default function SlideVision() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-20 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-5 mb-6">
          <div className="icon-box w-14 h-14 bg-violet-500/15">
            <Sparkles className="w-6 h-6 text-violet-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight">
            La <span className="gradient-text">Vision</span>
          </h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl text-white/50 font-light leading-relaxed mb-14 max-w-3xl ml-[76px]"
        >
          Construire une <span className="text-white/80 font-medium">agence technologique</span> qui
          transforme chaque mission client en un{" "}
          <span className="text-[var(--color-accent)] font-medium">actif reutilisable</span>.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((item) => (
            <motion.div
              key={item.num}
              variants={fadeUp}
              className={`relative p-7 rounded-2xl glass-card bg-gradient-to-b ${item.gradient} ${item.border} group overflow-hidden`}
            >
              <span className="step-number font-display" style={{ color: item.accent }}>
                {item.num}
              </span>
              <div className="relative z-10">
                <div
                  className="w-2 h-8 rounded-full mb-5"
                  style={{ background: item.accent, opacity: 0.6 }}
                />
                <h3 className="text-xl font-semibold mb-3 font-display" style={{ color: item.accent }}>
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
