"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Cog, ArrowRight, Target } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const steps = [
  {
    icon: <Zap className="w-6 h-6" />,
    step: "Identifier",
    desc: "Audit des process repetitifs et chronophages du client",
  },
  {
    icon: <Cog className="w-6 h-6" />,
    step: "Concevoir",
    desc: "Conception d'un systeme IA adapte a leur workflow",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    step: "Developper",
    desc: "R&D + production du logiciel / automatisation",
  },
  {
    icon: <ArrowRight className="w-6 h-6" />,
    step: "Deployer",
    desc: "Integration dans l'entreprise + formation equipe",
  },
];

export default function SlideAutomation() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-20 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-5 mb-6">
          <div className="icon-box w-14 h-14 bg-violet-500/15">
            <Cpu className="w-6 h-6 text-violet-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
            Upsell : <span className="gradient-text">Automatisation IA</span>
          </h2>
        </motion.div>

        <motion.p variants={fadeUp} className="text-lg text-white/40 mb-12 max-w-3xl ml-[76px]">
          Une fois la confiance etablie, on propose des solutions d&apos;automatisation IA
          sur-mesure qui repondent a des <strong className="text-white/60">besoins metier specifiques</strong>.
        </motion.p>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              className="relative p-6 rounded-2xl glass-card bg-gradient-to-b from-violet-500/10 to-violet-600/5 border-violet-500/10 overflow-hidden"
            >
              {/* Step number */}
              <span className="step-number font-display text-violet-400">{String(i + 1).padStart(2, "0")}</span>

              <div className="relative z-10">
                {/* Accent line top */}
                <motion.div
                  className="w-8 h-0.5 rounded-full bg-violet-500/40 mb-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
                <div className="text-violet-400 mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 font-display">{item.step}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key insight */}
        <motion.div
          variants={fadeUp}
          className="p-6 rounded-2xl glass relative overflow-hidden"
          style={{ borderColor: "rgba(245,158,11,0.12)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-amber-400 mb-2 font-display">
                Ticket moyen eleve
              </h4>
              <p className="text-white/45 text-sm leading-relaxed">
                L&apos;entreprise achete une <strong className="text-white/65">R&D + production</strong> d&apos;un
                logiciel IA integre a leur activite. C&apos;est du sur-mesure a forte valeur ajoutee,
                bien au-dela d&apos;un simple site web.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
