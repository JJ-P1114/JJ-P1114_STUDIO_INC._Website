'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/logo.png"
              alt="JJ-P1114 STUDIO INC"
              width={150}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-400 mb-4">
              Créons ensemble des expériences numériques exceptionnelles qui transforment votre vision en réalité.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/web" className="text-gray-400 hover:text-accent transition-colors">Développement Web</Link></li>
              <li><Link href="/services/mobile" className="text-gray-400 hover:text-accent transition-colors">Applications Mobiles</Link></li>
              <li><Link href="/services/design" className="text-gray-400 hover:text-accent transition-colors">Design UX/UI</Link></li>
              <li><Link href="/services/consulting" className="text-gray-400 hover:text-accent transition-colors">Consultation</Link></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-accent transition-colors">À propos</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-accent transition-colors">Carrières</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Montreal, QC, Canada</li>
              <li>info@jjp1114studio.com</li>
              <li>+1 (514) XXX-XXXX</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} JJ-P1114 STUDIO INC. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-accent text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-accent text-sm transition-colors">
                Conditions d&apos;utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
