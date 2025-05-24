"use client";

import { BoxReveal } from "../magicui/box-reveal";
import Link from "next/link";
import { MessageSquare, Users, Code, CheckCircle } from 'lucide-react';

const BoxRevealDemo = () => {
  const steps = [
    {
      title: "1. Échange Initial",
      icon: <MessageSquare className="text-blue-500 w-6 h-6" />,
      description: "Discutons de vos besoins lors d'un appel découverte",
      action: "Planifier un appel",
      link: "/meeting"
    },
    {
      title: "2. Collaboration",
      icon: <Users className="text-blue-500 w-6 h-6" />,
      description: "Définissons ensemble les spécifications du projet",
     
      link: "#"
    },
    {
      title: "3. Réalisation",
      icon: <Code className="text-blue-500 w-6 h-6" />,
      description: "Notre équipe développe votre solution sur mesure",
      link: "#"
    },
    {
      title: "4. Livraison",
      icon: <CheckCircle className="text-blue-500 w-6 h-6" />,
      description: "Validation et mise en production de votre projet",
      link: "#"
    }
  ];

  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={index} className="group">
          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20 mt-1">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1 mb-2">
                  {step.description}
                </p>
                <Link 
                  href={step.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  {step.action}
                </Link>
              </div>
            </div>
          </BoxReveal>
          {index < steps.length - 1 && (
            <div className="h-px bg-gray-200 dark:bg-gray-700 my-4 w-3/4 mx-auto"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BoxRevealDemo;