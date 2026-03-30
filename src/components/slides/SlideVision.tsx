"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SlideVision() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-20 grid-bg">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-5xl w-full"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center">
            <Eye className="w-6 h-6 text-[var(--color-primary-light)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            La <span className="gradient-text">Vision</span>
          </h2>
        </motion.div>

        {/* Main statement */}
        <motion.p
          variants={fadeUp}
          className="text-2xl md:text-3xl text-white/70 font-light leading-relaxed mb-12 max-w-3xl"
        >
          Construire une <span className="text-white font-medium">agence technologique</span> qui
          transforme chaque mission client en un{" "}
          <span className="text-[var(--color-accent)] font-medium">actif réutilisable</span>.
        </motion.p>

        {/* 3 pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              title: "Porte d'entrée",
              desc: "Sites web IA + SEO/SEA pour acquérir des clients et prouver notre expertise",
              color: "var(--color-primary)",
            },
            {
              num: "02",
              title: "Valeur ajoutée",
              desc: "Automatisations IA sur-mesure qui répondent à des besoins métier spécifiques",
              color: "var(--color-primary-light)",
            },
            {
              num: "03",
              title: "Scalabilité",
              desc: "Revente des solutions développées à d'autres entreprises du même secteur",
              color: "var(--color-accent)",
            },
          ].map((item) => (
            <motion.div
              key={item.num}
              variants={fadeUp}
              className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
            >
              <span
                className="text-5xl font-black opacity-10 block mb-3"
                style={{ color: item.color }}
              >
                {item.num}
              </span>
              <h3 className="text-xl font-semibold mb-2" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
