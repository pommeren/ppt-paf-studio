"use client";

import { motion } from "framer-motion";
import { Rocket, CheckCircle2, Circle } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const tasks = [
  { done: true, text: "Définir le business model & les offres" },
  { done: true, text: "Structurer le workflow acquisition → delivery → scale" },
  { done: false, text: "Créer le portfolio / site vitrine PAF Studio" },
  { done: false, text: "Lancer les premières campagnes SEA test" },
  { done: false, text: "Recruter les 10 premiers ambassadeurs" },
  { done: false, text: "Signer le premier client site IA" },
  { done: false, text: "Premier upsell automatisation IA" },
  { done: false, text: "Première revente d'un soft développé" },
];

export default function SlideNextSteps() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-20 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
            <Rocket className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Prochaines <span className="text-cyan-400">étapes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tasks.map((task, i) => (
            <motion.div
              key={task.text}
              variants={fadeUp}
              className={`flex items-start gap-3 p-4 rounded-xl border transition-colors ${
                task.done
                  ? "border-green-500/15 bg-green-500/[0.04]"
                  : "border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04]"
              }`}
            >
              {task.done ? (
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-white/20 mt-0.5 shrink-0" />
              )}
              <div>
                <span className="text-xs text-white/20 font-mono mr-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={task.done ? "text-white/50 line-through" : "text-white/80"}>
                  {task.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-10 text-center"
        >
          <p className="text-white/30 text-sm mb-4">On construit ça ensemble. Étape par étape.</p>
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-semibold glow-purple"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Rocket className="w-4 h-4" />
            Let&apos;s build PAF Studio
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
