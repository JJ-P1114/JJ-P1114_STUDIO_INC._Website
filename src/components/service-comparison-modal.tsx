'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface Service {
  title: string
}

interface ServiceComparisonModalProps {
  isOpen: boolean
  onClose: () => void
  services: Service[]
}

export function ServiceComparisonModal({
  isOpen,
  onClose,
  services
}: ServiceComparisonModalProps) {
  const features = [
    'Délai de livraison',
    'Support technique',
    'Revisions incluses',
    'Maintenance',
    'Formation',
    'Documentation',
    'API Integration',
    'SEO Optimization',
    'Analytics',
    'Sécurité'
  ]

  const serviceDetails = {
    'Développement Web': {
      'Délai de livraison': '6-12 semaines',
      'Support technique': '12 mois',
      'Revisions incluses': '3 rounds',
      'Maintenance': 'Mensuelle',
      'Formation': 'Incluse',
      'Documentation': 'Complète',
      'API Integration': 'Illimitée',
      'SEO Optimization': 'Incluse',
      'Analytics': 'Google Analytics',
      'Sécurité': 'SSL + WAF'
    },
    'Applications Mobiles': {
      'Délai de livraison': '12-16 semaines',
      'Support technique': '12 mois',
      'Revisions incluses': '4 rounds',
      'Maintenance': 'Bi-mensuelle',
      'Formation': 'Incluse',
      'Documentation': 'Complète',
      'API Integration': 'Illimitée',
      'SEO Optimization': 'ASO Incluse',
      'Analytics': 'Firebase',
      'Sécurité': 'Chiffrement + Auth'
    },
    'Design UX/UI': {
      'Délai de livraison': '4-8 semaines',
      'Support technique': '3 mois',
      'Revisions incluses': '5 rounds',
      'Maintenance': 'Sur demande',
      'Formation': 'Workshop inclus',
      'Documentation': 'Style guide',
      'API Integration': 'N/A',
      'SEO Optimization': 'Conseils UX',
      'Analytics': 'Hotjar',
      'Sécurité': 'N/A'
    },
    'Consultation': {
      'Délai de livraison': 'En continu',
      'Support technique': 'Durée du contrat',
      'Revisions incluses': 'Illimitées',
      'Maintenance': 'N/A',
      'Formation': 'Sur mesure',
      'Documentation': 'Rapports mensuels',
      'API Integration': 'Conseil',
      'SEO Optimization': 'Audit',
      'Analytics': 'Personnalisé',
      'Sécurité': 'Audit'
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <div className="flex justify-between items-center mb-6">
                  <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900">
                    Comparaison des Services
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left p-4 bg-gray-50">Caractéristiques</th>
                        {services.map((service) => (
                          <th key={service.title} className="text-left p-4 bg-gray-50">
                            {service.title}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {features.map((feature, index) => (
                        <tr key={feature} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-4 font-medium">{feature}</td>
                          {services.map((service) => (
                            <td key={`${service.title}-${feature}`} className="p-4">
                              {serviceDetails[service.title][feature]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    Fermer
                  </motion.button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
