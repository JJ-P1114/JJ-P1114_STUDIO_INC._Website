'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  {
    name: "Tech Corp",
    logo: "/clients/client1.svg", // Placeholder - we'll need actual client logos
  },
  {
    name: "Innovation Labs",
    logo: "/clients/client2.svg",
  },
  {
    name: "Future Systems",
    logo: "/clients/client3.svg",
  },
  {
    name: "Smart Solutions",
    logo: "/clients/client4.svg",
  },
  {
    name: "Digital Factory",
    logo: "/clients/client5.svg",
  },
  {
    name: "Next Level",
    logo: "/clients/client6.svg",
  },
];

export function ClientLogos() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-lg font-semibold leading-8 text-gray-900"
        >
          Ils nous font confiance
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={158}
                height={48}
                className="max-h-12 w-full object-contain grayscale transition hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
