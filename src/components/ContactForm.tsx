'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ContactFormProps {
  selectedService?: string
  className?: string
}

export function ContactForm({ selectedService, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: selectedService || '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${className} text-center p-8`}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Merci de nous avoir contacté!
        </h3>
        <p className="text-gray-600">
          Notre équipe vous répondra dans les plus brefs délais.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`${className} space-y-6`}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nom complet
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Entreprise
          </label>
          <input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">
            Service
          </label>
          <select
            name="service"
            id="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
          >
            <option value="">Sélectionnez un service</option>
            <option value="web">Développement Web</option>
            <option value="mobile">Applications Mobiles</option>
            <option value="design">Design UX/UI</option>
            <option value="consulting">Consultation</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors ${
          isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
      </motion.button>
    </form>
  )
}
