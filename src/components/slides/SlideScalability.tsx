"use client";

import { motion } from "framer-motion";
import { Repeat, Building2, DollarSign, TrendingUp } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SlideScalability() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-20 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center">
            <Repeat className="w-6 h-6 text-[var(--color-accent)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Le twist : <span className="text-[var(--color-accent)]">Revente</span>
          </h2>
        </motion.div>

        <motion.p variants={fadeUp} className="text-xl text-white/50 mb-12 max-w-3xl">
          Chaque solution développée pour un client devient un{" "}
          <strong className="text-white/70">actif propriétaire</strong> que l&apos;on peut revendre à
          d&apos;autres entreprises ayant le même besoin.
        </motion.p>

        {/* Flow diagram */}
        <motion.div variants={fadeUp} className="relative mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-primary)]/[0.03] text-center">
              <Building2 className="w-10 h-10 text-[var(--color-primary-light)] mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Client A finance la R&D</h3>
              <p className="text-white/40 text-sm">
                Paye le développement complet d&apos;une solution IA sur-mesure pour son activité
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="hidden md:flex items-center gap-2"
              >
                <div className="h-0.5 w-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />
                <DollarSign className="w-6 h-6 text-[var(--color-accent)]" />
                <div className="h-0.5 w-16 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent)]" />
              </motion.div>
              <div className="md:hidden flex flex-col items-center py-2">
                <div className="w-0.5 h-8 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)]" />
                <DollarSign className="w-6 h-6 text-[var(--color-accent)] my-1" />
                <div className="w-0.5 h-8 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent)]" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl border border-[var(--color-accent)]/15 bg-[var(--color-accent)]/[0.03] text-center">
              <TrendingUp className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Revente à B, C, D...</h3>
              <p className="text-white/40 text-sm">
                Même solution adaptée et revendue à d&apos;autres entreprises du même secteur
              </p>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              emoji: "🏗️",
              title: "R&D financée par le client",
              desc: "Zéro risque sur le développement initial — le premier client couvre les coûts",
            },
            {
              emoji: "📈",
              title: "Marges exponentielles",
              desc: "Chaque revente est quasi 100% de marge — le produit existe déjà",
            },
            {
              emoji: "🔒",
              title: "Propriété intellectuelle",
              desc: "On reste propriétaire ou co-propriétaire du code et de la solution",
            },
            {
              emoji: "♻️",
              title: "Effet catalogue",
              desc: "Plus on a de clients, plus notre catalogue de solutions grandit",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="flex items-start gap-4 p-4 rounded-xl border border-white/[0.04] bg-white/[0.02]"
            >
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
