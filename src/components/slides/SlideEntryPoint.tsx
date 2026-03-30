"use client";

import { motion } from "framer-motion";
import { Globe, Search, MousePointerClick, ArrowRight, Lightbulb } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const services = [
  {
    icon: <MousePointerClick className="w-7 h-7" />,
    label: "SEA / Ads",
    desc: "Visibilite immediate via campagnes ciblees",
    accent: "#3B82F6",
    gradient: "from-blue-500/15 to-blue-600/5",
    border: "border-blue-500/12",
  },
  {
    icon: <Search className="w-7 h-7" />,
    label: "SEO",
    desc: "Trafic organique long terme & autorite",
    accent: "#22C55E",
    gradient: "from-green-500/15 to-green-600/5",
    border: "border-green-500/12",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    label: "Site IA",
    desc: "Livraison rapide, design moderne, contenu IA",
    accent: "#10B981",
    gradient: "from-emerald-500/15 to-emerald-600/5",
    border: "border-emerald-500/12",
  },
];

export default function SlideEntryPoint() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-20 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-5 mb-6">
          <div className="icon-box w-14 h-14 bg-emerald-500/15">
            <Globe className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
            Porte d&apos;entree : <span className="text-emerald-400">Sites IA</span>
          </h2>
        </motion.div>

        <motion.p variants={fadeUp} className="text-lg text-white/40 mb-12 max-w-2xl ml-[76px]">
          On capte les clients avec un service accessible et visible : la creation de sites web
          propulses par l&apos;IA, couples au SEO et SEA.
        </motion.p>

        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {services.map((item, i) => (
            <motion.div key={item.label} variants={fadeUp} className="flex items-center gap-3 flex-1">
              <div
                className={`flex-1 p-6 rounded-2xl glass-card bg-gradient-to-b ${item.gradient} ${item.border} relative overflow-hidden`}
              >
                <div
                  className="absolute top-0 left-6 right-6 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}40, transparent)` }}
                />
                <div style={{ color: item.accent }} className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 font-display">{item.label}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
              </div>
              {i < 2 && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  className="hidden md:block"
                >
                  <ArrowRight className="w-4 h-4 text-white/10" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-10 p-5 rounded-2xl glass flex items-start gap-4"
          style={{ borderColor: "rgba(16,185,129,0.1)" }}
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
            <Lightbulb className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            <strong className="text-emerald-400 font-semibold">L&apos;objectif :</strong> Faire un travail
            exceptionnel sur le site pour creer la confiance et ouvrir la porte aux services a
            plus forte valeur ajoutee.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
