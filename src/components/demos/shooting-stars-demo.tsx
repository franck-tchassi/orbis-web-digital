import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const FEATURES = [
  {
    icon: "/icons/fast.svg",
    title: "Livraison Rapide",
    description: "Délai de 1-2 semaines pour la plupart des projets.",
  },
  {
    icon: "/icons/design.svg",
    title: "Design & Développement",
    description: "Solutions modernes avec les dernières technologies.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Évolutivité",
    description: "Maintenance et scalabilité incluses.",
  },
  {
    icon: "/icons/team.svg",
    title: "Experts Qualifiés",
    description: "Équipe dédiée à votre service.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Sécurité Renforcée",
    description: "Protection maximale de vos données.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Analytics",
    description: "Suivi complet de vos performances.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-16 md:py-24 bg-neutral-900 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <ShootingStars />
      <StarsBackground />

      {/* En-tête - Mêmes tailles que Process */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Nos Engagements Qualité
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Des solutions web performantes, livrées dans les délais avec un accompagnement sur mesure.
        </p>
      </div>

      {/* Grille de fonctionnalités */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {FEATURES.map((feature, index) => (
          <div 
            key={index}
            className="bg-neutral-800 p-6 md:p-8 rounded-xl border border-neutral-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-neutral-700 rounded-lg">
                <Image 
                  src={feature.icon} 
                  width={24} 
                  height={24} 
                  alt={feature.title}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}