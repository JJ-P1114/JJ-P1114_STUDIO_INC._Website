'use client';

import { motion } from 'framer-motion';
import { 
  ChatBubbleBottomCenterTextIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const steps = [
  {
    name: "Découverte",
    description:
      "Nous commençons par comprendre vos besoins, vos objectifs et vos contraintes lors des ateliers collaboratifs.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Conception",
    description:
      "Nous créons des maquettes interactives et définissons l'architecture technique de votre solution.",
    icon: PencilSquareIcon,
  },
  {
    name: "Développement",
    description:
      "Notre équipe développe votre solution avec des sprints réguliers et des démonstrations fréquentes.",
    icon: CodeBracketIcon,
  },
  {
    name: "Déploiement",
    description:
      "Nous assurons un déploiement en douceur, incluant la formation des utilisateurs et un support continu.",
    icon: RocketLaunchIcon,
  },
];

export function ProcessSteps() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-primary"
          >
            Notre Approche
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Un Processus Éprouvé
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Notre méthodologie agile garantit des résultats optimaux et une collaboration transparente tout au long du projet.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-1 text-sm font-medium text-primary">Étape {index + 1}</div>
                    {step.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{step.description}</p>
                  </dd>
                  {index < steps.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden h-px w-16 bg-gray-200 lg:block" />
                  )}
                </motion.div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
