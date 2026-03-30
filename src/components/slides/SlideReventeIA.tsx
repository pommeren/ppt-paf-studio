"use client";

import { Repeat } from "lucide-react";
import PhaseSlide from "@/components/PhaseSlide";

export default function SlideReventeIA() {
  return (
    <PhaseSlide
      phaseNumber="03"
      phaseLabel="Phase"
      title="Revente Soft IA"
      subtitle="Chaque solution developpee pour un client devient un actif propriétaire. On le revend a d'autres entreprises du meme secteur — le produit est deja approuve, la R&D est deja financee."
      icon={<Repeat className="w-6 h-6" />}
      accent="#F59E0B"
      accentBg="rgba(245,158,11,0.12)"
      acquisitionTitle="Comment on vend"
      acquisitionItems={[
        { label: "Contacts dans la branche", detail: "- le premier client nous connecte a son secteur" },
        { label: "Commercial dedie", detail: "- embaucher quelqu'un pour vendre le produit approuve" },
        { label: "Reseau d'ambassadeurs", detail: "- leads sectoriels contre 20% commission" },
        { label: "Marketing produit", detail: "- le soft a deja un cas client reel comme preuve" },
      ]}
      revenueRange="3 000 - 20 000 EUR"
      revenueType="Scalable"
      revenueMargin="~90%"
      objectif="Scalabilite maximale avec un catalogue qui grandit"
      objectifDetail="Quasi 100% de marge sur chaque revente — le produit existe deja. Plus on a de clients Phase 02, plus le catalogue de solutions grandit. Effet boule de neige."
      prerequis={[
        "Catalogue de solutions IA deja developpees et testees",
        "Contacts dans les secteurs ou on a deja livre",
        "Possibilite d'embaucher un commercial par produit",
        "Temoignages et cas clients pour credibiliser la vente",
      ]}
    />
  );
}
