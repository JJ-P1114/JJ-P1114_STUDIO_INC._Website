'use client';

import { Button } from './ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Background animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0.2] }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10" />
      </motion.div>

      <div className="relative pt-24">
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Solutions Logicielles{' '}
                <span className="text-primary">Sur Mesure</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                De la conception à la livraison, nous créons des solutions logicielles innovantes 
                qui transforment vos idées en réalité. Découvrez notre expertise en développement 
                sur mesure et nos produits professionnels.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" asChild>
                  <Link href="/configurator">
                    Commencer un projet
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/shop">
                    Découvrir nos produits
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* 3D Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-16 flow-root sm:mt-24"
            >
              <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <div className="relative rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/50 to-accent opacity-10" />
                  <div className="h-[300px] w-full bg-dots-darker rounded-md" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
