'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function CTA() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à concrétiser votre projet numérique?
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Transformons ensemble vos idées en solutions innovantes. Contactez-nous pour commencer votre projet dès aujourd&apos;hui.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors group"
              >
                Démarrer votre projet
                <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
