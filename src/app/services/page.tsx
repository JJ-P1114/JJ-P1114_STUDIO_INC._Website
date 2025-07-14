'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon, ArrowPathIcon, ChartBarIcon, LightBulbIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Header } from '@/components/header'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { ServiceComparison } from '@/components/ServiceComparison'
import { Testimonials } from '@/components/Testimonials'
import Image from 'next/image'

const services = [
  {
    title: 'Développement Web',
    description: 'Applications web performantes et évolutives',
    icon: '/icons/web-dev.svg',
    features: [
      'Sites Web Responsifs',
      'Applications Web Progressives (PWA)',
      'Interfaces Utilisateur Modernes',
      'Optimisation SEO',
      'Intégration API',
      'Performance et Sécurité'
    ],
    price: 'À partir de 5000 $',
    cta: 'Commencer un projet'
  },
  {
    title: 'Applications Mobiles',
    description: 'Solutions mobiles natives et multiplateformes',
    icon: '/icons/mobile-dev.svg',
    features: [
      'Applications iOS & Android',
      'Solutions Cross-Platform',
      'Design UX/UI Mobile',
      'Intégration Services Cloud',
      'Analytics et Monitoring',
      'Support Continu'
    ],
    price: 'À partir de 8000 $',
    cta: 'Développer votre app'
  },
  {
    title: 'Design UX/UI',
    description: 'Expériences utilisateur intuitives et esthétiques',
    icon: '/icons/ux-design.svg',
    features: [
      'Recherche Utilisateur',
      'Wireframing & Prototypage',
      'Design System',
      'Tests Utilisateurs',
      'Design Responsive',
      'Design d&apos;Interaction'
    ],
    price: 'À partir de 3000 $',
    cta: 'Explorer le design'
  },
  {
    title: 'Consultation',
    description: 'Expertise technique et conseil stratégique',
    icon: '/icons/consulting.svg',
    features: [
      'Audit Technique',
      'Architecture Solution',
      'Optimisation Performance',
      'Sécurité & Conformité',
      'Formation Équipe',
      'Support Technique'
    ],
    price: 'À partir de 150 $/h',
    cta: 'Réserver une consultation'
  }
]

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-secondary to-secondary/95 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nos Services
              </h1>
              <p className="text-xl text-gray-300">
                Des solutions numériques innovantes pour propulser votre entreprise vers l&apos;avenir
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Image src={service.icon} alt={service.title} width={24} height={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <CheckCircleIcon className="w-6 h-6 text-accent flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <p className="text-2xl font-bold text-gray-900 mb-4">
                      {service.price}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-6 text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors"
                    >
                      {service.cta}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-primary/90 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Vous ne trouvez pas ce que vous cherchez?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Contactez-nous pour discuter de vos besoins spécifiques. Nous créons des solutions sur mesure pour répondre à vos objectifs uniques.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 text-primary bg-white hover:bg-gray-50 rounded-lg transition-colors"
              >
                Discuter de votre projet
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
