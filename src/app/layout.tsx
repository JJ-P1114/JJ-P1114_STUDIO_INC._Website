import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Layout } from "@/components/Layout";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JJ-P1114 STUDIO INC - Solutions Logicielles Sur Mesure",
  description: "Expert en solutions logicielles sur mesure et produits innovants. Découvrez nos services de développement personnalisé et notre boutique de logiciels.",
  keywords: ["développement logiciel", "solutions sur mesure", "logiciels professionnels", "développement web", "applications personnalisées"],
  metadataBase: new URL('https://jjp1114studio.com'),
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    siteName: 'JJ-P1114 STUDIO INC',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full scroll-smooth antialiased" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans bg-white min-h-full`}>
        <Layout>
          <PerformanceOptimizer />
          {children}
          <SpeedInsights />
        </Layout>
        <Analytics />
      </body>
    </html>
  );
}
