"use client";

import { Cpu } from "lucide-react";
import PhaseSlide from "@/components/PhaseSlide";

export default function SlideAutomationIA() {
  return (
    <PhaseSlide
      phaseNumber="02"
      phaseLabel="Phase"
      title="Automatisation IA"
      subtitle="On developpe des solutions d'automatisation IA sur-mesure qui repondent aux besoins metier specifiques du client. L'entreprise nous achete une R&D + production d'un logiciel integre a leur activite."
      icon={<Cpu className="w-6 h-6" />}
      accent="#8B5CF6"
      accentBg="rgba(139,92,246,0.12)"
      acquisitionTitle="Provenance des leads"
      acquisitionItems={[
        { label: "Upsell clients Sites IA", detail: "- on connait deja leurs besoins internes" },
        { label: "Reseau d'ambassadeurs", detail: "- leads qualifies contre 20% de la facture" },
        { label: "Recommandations clients", detail: "- un client satisfait en parle a son reseau metier" },
        { label: "Prospection sectorielle", detail: "- cibler les entreprises avec des process repetitifs" },
      ]}
      revenueRange="5 000 - 30 000 EUR"
      revenueType="Gros ticket"
      revenueMargin="~50%"
      objectif="Creer un soft specifique finance par le client"
      objectifDetail="Le client finance la R&D d'une solution IA adaptee a son secteur. On garde la propriete (ou co-propriete) du code. Ce soft devient un actif a forte valeur qu'on peut ensuite revendre."
      prerequis={[
        "Clients existants de la Phase 01 avec qui on a cree la confiance",
        "Reseau d'ambassadeurs actif pour des leads directs",
        "Expertise technique IA / automatisation",
        "Capacite a auditer les process metier du client",
      ]}
      transitionText="Vers la Phase 03 :"
      transitionDetail="Le soft est cree et approuve dans un secteur metier. On peut le revendre a toutes les entreprises de la meme branche."
    />
  );
}
