'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface ComparisonFeature {
  name: string
  web: boolean
  mobile: boolean
  design: boolean
  consulting: boolean
}

const comparisonFeatures: ComparisonFeature[] = [
  {
    name: 'Conception UI/UX',
    web: true,
    mobile: true,
    design: true,
    consulting: false,
  },
  {
    name: 'Développement Frontend',
    web: true,
    mobile: true,
    design: false,
    consulting: false,
  },
  {
    name: 'Développement Backend',
    web: true,
    mobile: true,
    design: false,
    consulting: false,
  },
  {
    name: 'Tests et QA',
    web: true,
    mobile: true,
    design: true,
    consulting: true,
  },
  {
    name: 'Optimisation Performance',
    web: true,
    mobile: true,
    design: false,
    consulting: true,
  },
  {
    name: 'Audit et Conseil',
    web: false,
    mobile: false,
    design: false,
    consulting: true,
  },
  {
    name: 'Support Continu',
    web: true,
    mobile: true,
    design: false,
    consulting: true,
  },
  {
    name: 'Formation Équipe',
    web: false,
    mobile: false,
    design: false,
    consulting: true,
  },
]

const serviceTypes = [
  { id: 'web', name: 'Développement Web' },
  { id: 'mobile', name: 'Applications Mobiles' },
  { id: 'design', name: 'Design UX/UI' },
  { id: 'consulting', name: 'Consultation' },
]

export function ServiceComparison() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['web', 'mobile'])

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId)
      }
      return [...prev, serviceId]
    })
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[768px]">
        {/* Service Selection */}
        <div className="flex justify-center gap-4 mb-8">
          {serviceTypes.map(service => (
            <motion.button
              key={service.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleService(service.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedServices.includes(service.id)
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {service.name}
            </motion.button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-500">
                  Fonctionnalité
                </th>
                {serviceTypes.map(service => (
                  selectedServices.includes(service.id) && (
                    <th key={service.id} className="py-4 px-6 text-center text-sm font-medium text-gray-500">
                      {service.name}
                    </th>
                  )
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisonFeatures.map((feature, index) => (
                <tr key={feature.name} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-4 px-6 text-sm text-gray-900">
                    {feature.name}
                  </td>
                  {selectedServices.includes('web') && (
                    <td className="py-4 px-6 text-center">
                      {feature.web ? (
                        <CheckIcon className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <XMarkIcon className="w-5 h-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                  )}
                  {selectedServices.includes('mobile') && (
                    <td className="py-4 px-6 text-center">
                      {feature.mobile ? (
                        <CheckIcon className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <XMarkIcon className="w-5 h-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                  )}
                  {selectedServices.includes('design') && (
                    <td className="py-4 px-6 text-center">
                      {feature.design ? (
                        <CheckIcon className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <XMarkIcon className="w-5 h-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                  )}
                  {selectedServices.includes('consulting') && (
                    <td className="py-4 px-6 text-center">
                      {feature.consulting ? (
                        <CheckIcon className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <XMarkIcon className="w-5 h-5 text-gray-400 mx-auto" />
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
