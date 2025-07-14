'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
  service: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marie Dubois',
    role: 'Directrice Marketing',
    company: 'TechCo Québec',
    image: '/testimonials/testimonial-1.jpg',
    quote: 'L\'équipe de développement web a créé une plateforme exceptionnelle qui a transformé notre présence en ligne. La performance et le design sont impeccables.',
    service: 'web'
  },
  {
    id: 2,
    name: 'Jean-Philippe Tremblay',
    role: 'CEO',
    company: 'StartupMTL',
    image: '/testimonials/testimonial-2.jpg',
    quote: 'Notre application mobile a dépassé toutes nos attentes. L\'attention aux détails et la qualité du code sont remarquables.',
    service: 'mobile'
  },
  {
    id: 3,
    name: 'Sophie Lefebvre',
    role: 'Directrice Produit',
    company: 'DesignHub',
    image: '/testimonials/testimonial-3.jpg',
    quote: 'Le processus de design UX/UI était incroyablement approfondi. Le résultat final est à la fois beau et fonctionnel.',
    service: 'design'
  },
  {
    id: 4,
    name: 'Marc-André Bergeron',
    role: 'CTO',
    company: 'InnovTech',
    image: '/testimonials/testimonial-4.jpg',
    quote: 'Les services de consultation nous ont aidés à optimiser notre architecture technique et à améliorer nos processus de développement.',
    service: 'consulting'
  }
]

interface TestimonialsProps {
  service?: string
}

export function Testimonials({ service }: TestimonialsProps) {
  const filteredTestimonials = service 
    ? testimonials.filter(t => t.service === service)
    : testimonials

  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={filteredTestimonials[currentIndex].image}
                      alt={filteredTestimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {filteredTestimonials[currentIndex].name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {filteredTestimonials[currentIndex].role} chez {filteredTestimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-8">
                  <p className="text-xl text-gray-700 italic">
                    "{filteredTestimonials[currentIndex].quote}"
                  </p>
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>

          {filteredTestimonials.length > 1 && (
            <div className="absolute top-1/2 -translate-y-1/2 w-full">
              <button
                onClick={prev}
                className="absolute left-0 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={next}
                className="absolute right-0 transform translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRightIcon className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
