"use client";

import { motion } from "framer-motion";
import { Repeat, Building2, TrendingUp, ArrowRight } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const benefits = [
  {
    title: "R&D financee par le client",
    desc: "Zero risque sur le developpement initial - le premier client couvre les couts",
    accent: "#8B5CF6",
  },
  {
    title: "Marges exponentielles",
    desc: "Chaque revente est quasi 100% de marge - le produit existe deja",
    accent: "#22C55E",
  },
  {
    title: "Propriete intellectuelle",
    desc: "On reste proprietaire ou co-proprietaire du code et de la solution",
    accent: "#3B82F6",
  },
  {
    title: "Effet catalogue",
    desc: "Plus on a de clients, plus notre catalogue de solutions grandit",
    accent: "#F59E0B",
  },
];

export default function SlideScalability() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-20 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-5 mb-6">
          <div className="icon-box w-14 h-14 bg-amber-500/15">
            <Repeat className="w-6 h-6 text-amber-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
            Le twist : <span className="text-amber-400">Revente</span>
          </h2>
        </motion.div>

        <motion.p variants={fadeUp} className="text-lg text-white/40 mb-12 max-w-3xl ml-[76px]">
          Chaque solution developpee pour un client devient un{" "}
          <strong className="text-white/65">actif proprietaire</strong> que l&apos;on peut revendre a
          d&apos;autres entreprises ayant le meme besoin.
        </motion.p>

        {/* Flow diagram */}
        <motion.div variants={fadeUp} className="relative mb-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Client A */}
            <div className="flex-1 p-7 rounded-2xl glass-card bg-gradient-to-b from-violet-500/10 to-violet-600/5 border-violet-500/12 text-center">
              <div className="w-14 h-14 rounded-2xl bg-violet-500/15 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-violet-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2 font-display">Client A finance la R&D</h3>
              <p className="text-white/35 text-sm">
                Paye le developpement complet d&apos;une solution IA sur-mesure
              </p>
            </div>

            {/* Arrow */}
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden md:flex flex-col items-center gap-2"
            >
              <div className="h-px w-20 bg-gradient-to-r from-violet-500/30 to-amber-500/30" />
              <span className="text-[10px] text-white/20 font-mono tracking-wider">SCALE</span>
              <ArrowRight className="w-5 h-5 text-amber-400/40" />
            </motion.div>

            {/* Revente */}
            <div className="flex-1 p-7 rounded-2xl glass-card bg-gradient-to-b from-amber-500/10 to-amber-600/5 border-amber-500/12 text-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2 font-display">Revente a B, C, D...</h3>
              <p className="text-white/35 text-sm">
                Meme solution adaptee et revendue a d&apos;autres entreprises
              </p>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {benefits.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="flex items-start gap-4 p-4 rounded-xl glass-card"
            >
              <div
                className="w-1.5 h-10 rounded-full shrink-0 mt-0.5"
                style={{ background: item.accent, opacity: 0.5 }}
              />
              <div>
                <h4 className="font-semibold text-sm mb-1 font-display">{item.title}</h4>
                <p className="text-white/35 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
