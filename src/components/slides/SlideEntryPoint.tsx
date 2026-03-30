"use client";

import { motion } from "framer-motion";
import { Globe, Search, MousePointerClick } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SlideEntryPoint() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-20 grid-bg">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
            <Globe className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Porte d&apos;entrée : <span className="text-emerald-400">Sites IA</span>
          </h2>
        </motion.div>

        <motion.p variants={fadeUp} className="text-xl text-white/50 mb-12 max-w-2xl">
          On capte les clients avec un service accessible et visible : la création de sites web
          propulsés par l&apos;IA, couplés au SEO et SEA.
        </motion.p>

        {/* Funnel visualization */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4">
          {[
            {
              icon: <MousePointerClick className="w-8 h-8" />,
              label: "SEA / Ads",
              desc: "Visibilité immédiate via campagnes ciblées",
              bg: "from-blue-500/20 to-blue-600/5",
              border: "border-blue-500/20",
              iconColor: "text-blue-400",
            },
            {
              icon: <Search className="w-8 h-8" />,
              label: "SEO",
              desc: "Trafic organique long terme & autorité",
              bg: "from-green-500/20 to-green-600/5",
              border: "border-green-500/20",
              iconColor: "text-green-400",
            },
            {
              icon: <Globe className="w-8 h-8" />,
              label: "Site IA",
              desc: "Livraison rapide, design moderne, contenu IA",
              bg: "from-emerald-500/20 to-emerald-600/5",
              border: "border-emerald-500/20",
              iconColor: "text-emerald-400",
            },
          ].map((item, i) => (
            <motion.div key={item.label} variants={fadeUp} className="flex items-center gap-4 flex-1 w-full">
              <div
                className={`flex-1 p-6 rounded-2xl border ${item.border} bg-gradient-to-b ${item.bg}`}
              >
                <div className={`${item.iconColor} mb-4`}>{item.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{item.label}</h3>
                <p className="text-white/40 text-sm">{item.desc}</p>
              </div>
              {i < 2 && (
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  className="text-white/20 text-2xl hidden md:block"
                >
                  →
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          variants={fadeUp}
          className="mt-10 p-5 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.03] flex items-start gap-4"
        >
          <span className="text-2xl">💡</span>
          <div>
            <p className="text-white/70 text-sm leading-relaxed">
              <strong className="text-emerald-400">L&apos;objectif :</strong> Faire un travail
              exceptionnel sur le site pour créer la confiance et ouvrir la porte aux services à
              plus forte valeur ajoutée.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
