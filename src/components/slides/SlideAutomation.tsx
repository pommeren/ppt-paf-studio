"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Cog, ArrowRight } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SlideAutomation() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-20 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-[var(--color-primary-light)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Upsell : <span className="gradient-text">Automatisation IA</span>
          </h2>
        </motion.div>

        <motion.p variants={fadeUp} className="text-xl text-white/50 mb-10 max-w-3xl">
          Une fois la confiance établie, on propose des solutions d&apos;automatisation IA
          sur-mesure qui répondent à des <strong className="text-white/70">besoins métier spécifiques</strong>.
        </motion.p>

        {/* Process flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              step: "Identifier",
              desc: "Audit des process répétitifs et chronophages du client",
            },
            {
              icon: <Cog className="w-6 h-6" />,
              step: "Concevoir",
              desc: "Conception d'un système IA adapté à leur workflow",
            },
            {
              icon: <Cpu className="w-6 h-6" />,
              step: "Développer",
              desc: "R&D + production du logiciel / automatisation",
            },
            {
              icon: <ArrowRight className="w-6 h-6" />,
              step: "Déployer",
              desc: "Intégration dans l'entreprise + formation équipe",
            },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              className="relative p-5 rounded-2xl border border-[var(--color-primary)]/10 bg-[var(--color-primary)]/[0.03]"
            >
              <div className="absolute -top-3 -left-1 text-xs font-mono text-[var(--color-primary)]/40 bg-[var(--color-dark)] px-2">
                ÉTAPE {i + 1}
              </div>
              <div className="text-[var(--color-primary-light)] mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{item.step}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Key insight */}
        <motion.div
          variants={fadeUp}
          className="p-6 rounded-2xl border border-[var(--color-accent)]/15 bg-[var(--color-accent)]/[0.03]"
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl">🎯</span>
            <div>
              <h4 className="text-lg font-semibold text-[var(--color-accent)] mb-2">
                Ticket moyen élevé
              </h4>
              <p className="text-white/50 text-sm leading-relaxed">
                L&apos;entreprise achète une <strong className="text-white/70">R&D + production</strong> d&apos;un
                logiciel IA intégré à leur activité. C&apos;est du sur-mesure à forte valeur ajoutée,
                bien au-delà d&apos;un simple site web.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
