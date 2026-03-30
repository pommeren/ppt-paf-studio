"use client";

import { motion } from "framer-motion";
import { Users, Handshake, Percent, Network } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SlideAffiliation() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-20 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
            <Users className="w-6 h-6 text-pink-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Acquisition : <span className="text-pink-400">Réseau d&apos;ambassadeurs</span>
          </h2>
        </motion.div>

        <motion.p variants={fadeUp} className="text-xl text-white/50 mb-12 max-w-3xl">
          On construit un réseau de personnes sensibilisées à PAF Studio qui nous rapportent des
          leads en échange d&apos;une <strong className="text-pink-400">commission de 20%</strong> sur la facture finale.
        </motion.p>

        {/* Network visualization */}
        <motion.div variants={fadeUp} className="relative p-8 rounded-2xl border border-pink-500/10 bg-pink-500/[0.02] mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Ambassador */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mb-3">
                <Network className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="font-semibold">Ambassadeur</h3>
              <p className="text-white/40 text-xs mt-1">Freelance, ami, contact pro</p>
            </div>

            {/* Arrow + Lead */}
            <motion.div
              className="flex flex-col items-center gap-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-xs text-pink-400/60 font-mono">LEAD</span>
              <div className="w-24 h-0.5 bg-gradient-to-r from-pink-500/40 to-[var(--color-primary)]/40 hidden md:block" />
              <div className="h-12 w-0.5 bg-gradient-to-b from-pink-500/40 to-[var(--color-primary)]/40 md:hidden" />
            </motion.div>

            {/* PAF Studio */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center mb-3">
                <Handshake className="w-8 h-8 text-[var(--color-primary-light)]" />
              </div>
              <h3 className="font-semibold">PAF Studio</h3>
              <p className="text-white/40 text-xs mt-1">Closing + delivery</p>
            </div>

            {/* Arrow + Commission */}
            <motion.div
              className="flex flex-col items-center gap-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <span className="text-xs text-[var(--color-accent)]/60 font-mono">20%</span>
              <div className="w-24 h-0.5 bg-gradient-to-r from-[var(--color-primary)]/40 to-[var(--color-accent)]/40 hidden md:block" />
              <div className="h-12 w-0.5 bg-gradient-to-b from-[var(--color-primary)]/40 to-[var(--color-accent)]/40 md:hidden" />
            </motion.div>

            {/* Commission */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center mb-3">
                <Percent className="w-8 h-8 text-[var(--color-accent)]" />
              </div>
              <h3 className="font-semibold">Commission</h3>
              <p className="text-white/40 text-xs mt-1">20% facture finale</p>
            </div>
          </div>
        </motion.div>

        {/* Why it works */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Coût d'acquisition = 0",
              desc: "On ne paye que quand le deal est signé — zéro risque commercial",
            },
            {
              title: "Motivation alignée",
              desc: "Plus le projet est gros, plus l'ambassadeur gagne — incitation naturelle",
            },
            {
              title: "Réseau exponentiel",
              desc: "Chaque ambassadeur satisfait recrute de nouveaux ambassadeurs",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.02]"
            >
              <h4 className="font-semibold text-sm text-pink-400 mb-1">{item.title}</h4>
              <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
