"use client";

import { motion } from "framer-motion";
import { Users, Handshake, Percent, Network } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const flowSteps = [
  {
    icon: <Network className="w-7 h-7" />,
    label: "Ambassadeur",
    sub: "Freelance, ami, contact pro",
    color: "#EC4899",
    bg: "bg-pink-500/15",
  },
  {
    icon: <Handshake className="w-7 h-7" />,
    label: "PAF Studio",
    sub: "Closing + delivery",
    color: "#8B5CF6",
    bg: "bg-violet-500/15",
  },
  {
    icon: <Percent className="w-7 h-7" />,
    label: "Commission",
    sub: "20% facture finale",
    color: "#F59E0B",
    bg: "bg-amber-500/15",
  },
];

const reasons = [
  {
    title: "Cout d'acquisition = 0",
    desc: "On ne paye que quand le deal est signe - zero risque commercial",
  },
  {
    title: "Motivation alignee",
    desc: "Plus le projet est gros, plus l'ambassadeur gagne - incitation naturelle",
  },
  {
    title: "Reseau exponentiel",
    desc: "Chaque ambassadeur satisfait recrute de nouveaux ambassadeurs",
  },
];

export default function SlideAffiliation() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-20 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-5 mb-6">
          <div className="icon-box w-14 h-14 bg-pink-500/15">
            <Users className="w-6 h-6 text-pink-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
            Reseau d&apos;<span className="text-pink-400">ambassadeurs</span>
          </h2>
        </motion.div>

        <motion.p variants={fadeUp} className="text-lg text-white/40 mb-12 max-w-3xl ml-[76px]">
          On construit un reseau de personnes sensibilisees qui nous rapportent des
          leads contre une <strong className="text-pink-400">commission de 20%</strong> sur la facture finale.
        </motion.p>

        {/* Flow visualization */}
        <motion.div variants={fadeUp} className="relative p-8 rounded-2xl glass mb-8" style={{ borderColor: "rgba(236,72,153,0.08)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4 md:gap-6">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-3`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    style={{ color: step.color }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="font-semibold text-sm font-display">{step.label}</h3>
                  <p className="text-white/30 text-xs mt-1">{step.sub}</p>
                </div>
                {i < flowSteps.length - 1 && (
                  <motion.div
                    className="flex flex-col items-center"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                  >
                    <span className="text-[10px] font-mono tracking-wider mb-1"
                      style={{ color: i === 0 ? "#EC4899" : "#F59E0B", opacity: 0.5 }}
                    >
                      {i === 0 ? "LEAD" : "20%"}
                    </span>
                    <div
                      className="w-16 h-px hidden md:block"
                      style={{ background: `linear-gradient(90deg, ${flowSteps[i].color}30, ${flowSteps[i + 1].color}30)` }}
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why it works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reasons.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="p-5 rounded-xl glass-card"
            >
              <h4 className="font-semibold text-sm text-pink-400 mb-2 font-display">{item.title}</h4>
              <p className="text-white/35 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
