"use client";

import { Globe } from "lucide-react";
import PhaseSlide from "@/components/PhaseSlide";

export default function SlideSitesIA() {
  return (
    <PhaseSlide
      phaseNumber="01"
      phaseLabel="Phase"
      title="Sites IA & SEO/SEA"
      subtitle="Ship fast, vendre vite. On livre des sites vitrines modernes propulses par l'IA avec un process rapide. L'objectif : rentrer dans l'entreprise par la porte d'entree la plus accessible."
      icon={<Globe className="w-6 h-6" />}
      accent="#22C55E"
      accentBg="rgba(34,197,94,0.12)"
      acquisitionTitle="Acquisition clients"
      acquisitionItems={[
        { label: "Prospection directe", detail: "- reseaux sociaux, demarchage cible" },
        { label: "SEO / SEA", detail: "- visibilite Google des qu'on a le site PAF Studio" },
        { label: "Bouche-a-oreille", detail: "- reseau perso, premiers clients satisfaits" },
        { label: "Reseau d'ambassadeurs", detail: "- leads entrants contre 20% de commission" },
      ]}
      revenueRange="1 500 - 5 000 EUR"
      revenueType="Par site"
      revenueMargin="~60%"
      objectif="Rentrer dans l'entreprise et comprendre ses besoins"
      objectifDetail="Le site n'est que le pretexte. En travaillant avec le client, on decouvre ses problematiques internes, ses process repetitifs, ses points de friction. On plug du SEO/SEA recurrent (500-2000 EUR/mois) pour fideliser."
      prerequis={[
        "Portfolio de sites (meme fictifs) pour montrer notre savoir-faire",
        "Process de creation rapide — en cours de construction",
        "Templates et outils IA pour livrer en quelques jours",
        "Site vitrine PAF Studio comme carte de visite",
      ]}
      transitionText="Vers la Phase 02 :"
      transitionDetail="La confiance est creee, on connait les besoins internes du client. On propose de l'automatisation IA sur-mesure."
    />
  );
}
