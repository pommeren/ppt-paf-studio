"use client";

import { motion } from "framer-motion";
import { Rocket, CheckCircle2, Circle } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const tasks = [
  { done: true, text: "Definir le business model & les offres" },
  { done: true, text: "Structurer le workflow acquisition -> delivery -> scale" },
  { done: false, text: "Creer le portfolio / site vitrine PAF Studio" },
  { done: false, text: "Lancer les premieres campagnes SEA test" },
  { done: false, text: "Recruter les 10 premiers ambassadeurs" },
  { done: false, text: "Signer le premier client site IA" },
  { done: false, text: "Premier upsell automatisation IA" },
  { done: false, text: "Premiere revente d'un soft developpe" },
];

export default function SlideNextSteps() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-20 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-5 mb-12">
          <div className="icon-box w-14 h-14 bg-cyan-500/15">
            <Rocket className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
            Prochaines <span className="text-cyan-400">etapes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tasks.map((task, i) => (
            <motion.div
              key={task.text}
              variants={fadeUp}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                task.done
                  ? "glass-card border-green-500/10"
                  : "glass-card hover:border-white/10"
              }`}
              style={task.done ? { borderColor: "rgba(34,197,94,0.12)", background: "rgba(34,197,94,0.03)" } : {}}
            >
              {task.done ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08, type: "spring" }}
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                </motion.div>
              ) : (
                <Circle className="w-5 h-5 text-white/15 shrink-0" />
              )}
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-white/15 font-mono tracking-wider min-w-[1.5rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-sm ${task.done ? "text-white/40 line-through" : "text-white/70"}`}>
                  {task.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-12 text-center">
          <p className="text-white/25 text-sm mb-5 font-light">On construit ca ensemble. Etape par etape.</p>
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-semibold text-sm relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #F59E0B)",
              boxShadow: "0 0 40px rgba(124,58,237,0.3), 0 0 80px rgba(124,58,237,0.1)",
            }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            <Rocket className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Let&apos;s build PAF Studio</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
