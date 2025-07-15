/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    turbo: false, // Désactive Turbopack pour éviter l'erreur de compilation avec Clerk
  },
  transpilePackages: ['@clerk/nextjs'],
};

module.exports = nextConfig;
