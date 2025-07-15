'use client'

import { LazyMotion, domAnimation } from 'framer-motion'
import { ReactNode } from 'react'
import { Header } from './header'  // adapte le chemin si nécessaire

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <LazyMotion features={domAnimation}>
      <Header />
      <main className="pt-20">{children}</main> {/* padding top pour éviter que le contenu soit caché sous le header fixe */}
    </LazyMotion>
  )
}
