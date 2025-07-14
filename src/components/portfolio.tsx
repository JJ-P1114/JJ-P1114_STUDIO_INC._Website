'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Application de Gestion d'Entreprise",
    description: "Solution sur mesure de gestion intégrée pour une PME, incluant CRM, gestion des stocks et facturation.",
    image: "/projects/project1.jpg", // Placeholder - we'll need actual images
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "/portfolio/erp-system",
  },
  {
    title: "Plateforme E-commerce B2B",
    description: "Marketplace B2B avec système de prix dynamique et intégration logistique complète.",
    image: "/projects/project2.jpg",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    link: "/portfolio/b2b-marketplace",
  },
  {
    title: "Système de Surveillance IoT",
    description: "Solution IoT pour la surveillance en temps réel des équipements industriels.",
    image: "/projects/project3.jpg",
    tech: ["Python", "AWS", "React"],
    link: "/portfolio/iot-monitoring",
  },
];

export function Portfolio() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Nos Réalisations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg leading-8 text-gray-600"
          >
            Découvrez quelques-uns de nos projets qui illustrent notre expertise et notre approche sur mesure.
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-2 overflow-hidden text-sm leading-6 text-gray-300">
                {project.tech.map((tech) => (
                  <span key={tech} className="inline-flex items-center rounded-full bg-gray-400/10 px-3 py-1 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href={project.link}>
                  <span className="absolute inset-0" />
                  {project.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">{project.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
