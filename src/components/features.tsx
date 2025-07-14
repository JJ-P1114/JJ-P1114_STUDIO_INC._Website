'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon, CubeIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import type { ForwardRefExoticComponent, SVGProps } from 'react';

type IconComponent = ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;

interface Feature {
  name: string;
  description: string;
  icon: IconComponent;
}

const features: Feature[] = [
  {
    name: "Solutions Sur Mesure",
    description: "Des applications web et logiciels développés spécifiquement pour répondre à vos besoins uniques.",
    icon: CodeBracketIcon,
  },
  {
    name: "Produits Innovants",
    description: "Une gamme de logiciels professionnels prêts à l'emploi pour améliorer votre productivité.",
    icon: CubeIcon,
  },
  {
    name: "Expertise Technique",
    description: "Une équipe expérimentée utilisant les dernières technologies pour des solutions robustes et évolutives.",
    icon: ChartBarIcon,
  },
];

export function Features() {
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
            Notre Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Des Solutions Adaptées à Vos Ambitions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            De la conception à la livraison, nous mettons notre expertise au service de votre réussite. 
            Découvrez comment nos solutions peuvent transformer votre entreprise.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <Icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
